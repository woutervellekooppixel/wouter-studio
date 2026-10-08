'use client'
import { useEffect, useRef } from 'react'
import type * as T from 'three'
import type * as C from 'cannon-es'

// 3D-vormen op een "tafelblad" achter de hero-tekst: pakken, optillen en gooien.
// Vormentaal = de oude hero (driehoek, vierkant, rechthoek, ruit) plus een schijf,
// alleen zwart, wit en grijs. three.js en cannon-es laden pas na de eerste render.

type Pt = [number, number]
const vormen: Record<string, Pt[] | 'schijf'> = {
  vierkant: [[-0.65, -0.65], [0.65, -0.65], [0.65, 0.65], [-0.65, 0.65]],
  rechthoek: [[-0.9, -0.5], [0.9, -0.5], [0.9, 0.5], [-0.9, 0.5]],
  driehoek: [[0, 0.98], [-0.85, -0.49], [0.85, -0.49]],
  ruit: [[0, 1.05], [-0.65, 0], [0, -1.05], [0.65, 0]],
  schijf: 'schijf',
}
const volgendeVorm: Record<string, string> = {
  driehoek: 'ruit', ruit: 'rechthoek', rechthoek: 'vierkant', vierkant: 'schijf', schijf: 'driehoek',
}
const kleuren = ['#f3f3f1', '#dadad7', '#f3f3f1', '#9a9a97', '#161616', '#dadad7', '#f3f3f1']
const DIKTE = 0.45
const RAND = 0.08
const HALF = DIKTE / 2 + RAND

// Composities per woord, als fracties van de hero (x van links, y van boven).
// De tekst staat links-midden, dus de composities liggen rechts of langs de randen.
const composities: Record<string, [number, number][]> = {
  team: [
    [0.64, 0.24], [0.74, 0.18], [0.85, 0.26], [0.68, 0.42], [0.79, 0.4], [0.9, 0.44], [0.63, 0.62],
    [0.74, 0.6], [0.85, 0.64], [0.94, 0.7], [0.7, 0.8], [0.81, 0.84], [0.58, 0.88], [0.92, 0.12],
  ],
  merk: [
    [0.72, 0.36], [0.79, 0.34], [0.86, 0.38], [0.69, 0.48], [0.76, 0.47], [0.83, 0.49], [0.9, 0.5],
    [0.72, 0.6], [0.79, 0.59], [0.86, 0.61], [0.76, 0.71], [0.83, 0.72], [0.79, 0.23], [0.69, 0.25],
  ],
  fusie: [
    [0.6, 0.2], [0.68, 0.16], [0.64, 0.32], [0.72, 0.28], [0.68, 0.43], [0.77, 0.4], [0.58, 0.5],
    [0.82, 0.55], [0.9, 0.52], [0.86, 0.66], [0.94, 0.63], [0.9, 0.78], [0.97, 0.88], [0.78, 0.7],
  ],
  rebranding: [
    [0.06, 0.12], [0.3, 0.08], [0.52, 0.07], [0.95, 0.1], [0.66, 0.3], [0.88, 0.34], [0.72, 0.56],
    [0.95, 0.6], [0.6, 0.78], [0.82, 0.82], [0.4, 0.95], [0.56, 0.52], [0.98, 0.92], [0.5, 0.3],
  ],
  organisatie: [
    ...Array.from({ length: 12 }, (_, i) => [0.705 + (i % 4) * 0.088, 0.28 + Math.floor(i / 4) * 0.22] as [number, number]),
    [0.45, 0.94], [0.5, 0.08],
  ],
}

export default function HeroPhysics() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const hero = canvas.parentElement as HTMLElement
    let opruimen = () => {}
    let gestopt = false

    Promise.all([import('three'), import('cannon-es')]).then(([THREE, CANNON]) => {
      if (gestopt) return
      const stil = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      // Renderer en scène
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
      renderer.setClearColor(0x000000, 0)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = THREE.PCFSoftShadowMap

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(30, 1, 1, 100)
      camera.position.set(0, 0, 24)
      camera.lookAt(0, 0, 0)

      scene.add(new THREE.HemisphereLight(0xffffff, 0xb8b8b8, 1.7))
      const zon = new THREE.DirectionalLight(0xffffff, 1.9)
      zon.position.set(-7, 9, 20)
      zon.castShadow = true
      zon.shadow.mapSize.set(2048, 2048)
      zon.shadow.camera.left = -18
      zon.shadow.camera.right = 18
      zon.shadow.camera.top = 12
      zon.shadow.camera.bottom = -12
      zon.shadow.camera.near = 1
      zon.shadow.camera.far = 50
      zon.shadow.radius = 6
      scene.add(zon)

      const vangschaduw = new THREE.Mesh(
        new THREE.PlaneGeometry(200, 200),
        new THREE.ShadowMaterial({ opacity: 0.13 }),
      )
      vangschaduw.receiveShadow = true
      scene.add(vangschaduw)

      // Natuurkunde
      const world = new CANNON.World({ gravity: new CANNON.Vec3(0, 0, -38) })
      world.allowSleep = true
      const mat = new CANNON.Material('vorm')
      world.addContactMaterial(new CANNON.ContactMaterial(mat, mat, { friction: 0.35, restitution: 0.32 }))
      world.defaultContactMaterial.friction = 0.35
      world.defaultContactMaterial.restitution = 0.3

      const vloer = new CANNON.Body({ mass: 0, material: mat, shape: new CANNON.Plane() })
      world.addBody(vloer)

      // Wanden rond het zichtbare deel, plus een plafond
      const wanden = [0, 1, 2, 3, 4].map(() => {
        const b = new CANNON.Body({ mass: 0, material: mat, shape: new CANNON.Plane() })
        world.addBody(b)
        return b
      })
      let halfW = 8, halfH = 6
      const zetWanden = () => {
        const [l, r, o, b, p] = wanden
        l.position.set(-halfW, 0, 0); l.quaternion.setFromEuler(0, Math.PI / 2, 0)
        r.position.set(halfW, 0, 0); r.quaternion.setFromEuler(0, -Math.PI / 2, 0)
        o.position.set(0, -halfH, 0); o.quaternion.setFromEuler(-Math.PI / 2, 0, 0)
        b.position.set(0, halfH, 0); b.quaternion.setFromEuler(Math.PI / 2, 0, 0)
        p.position.set(0, 0, 7); p.quaternion.setFromEuler(Math.PI, 0, 0)
      }

      const formaat = () => {
        const w = hero.offsetWidth, h = hero.offsetHeight
        renderer.setSize(w, h, false)
        camera.aspect = w / h
        camera.updateProjectionMatrix()
        halfH = camera.position.z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))
        halfW = halfH * camera.aspect
        zetWanden()
      }
      formaat()

      // Fractie van de hero naar een punt op het tafelblad. Mobiel: strook onder de knoppen.
      const naarWereld = ([fx, fy]: [number, number], mob: boolean) => {
        if (!mob) return { x: (fx * 2 - 1) * (halfW - 1), y: (1 - fy * 2) * (halfH - 1) }
        const x = Math.min(0.95, Math.max(0.05, 0.08 + ((fx - 0.55) / 0.45) * 0.84))
        const y = Math.min(1, Math.max(0, fy))
        return { x: (x * 2 - 1) * (halfW - 0.6), y: -halfH + 0.6 + (1 - y) * 1.6 }
      }

      // Geometrie en botsvormen
      const prismaVorm = (pts: Pt[]) => {
        const n = pts.length
        const verts = [
          ...pts.map(([x, y]) => new CANNON.Vec3(x, y, -HALF)),
          ...pts.map(([x, y]) => new CANNON.Vec3(x, y, HALF)),
        ]
        const faces = [
          pts.map((_, i) => n + i),
          pts.map((_, i) => n - 1 - i),
          ...pts.map((_, i) => [i, (i + 1) % n, n + ((i + 1) % n), n + i]),
        ]
        return new CANNON.ConvexPolyhedron({ vertices: verts, faces })
      }
      const geo: Record<string, T.BufferGeometry> = {}
      const botsing: Record<string, () => C.Shape> = {}
      for (const [naam, v] of Object.entries(vormen)) {
        if (v === 'schijf') {
          const g = new THREE.CylinderGeometry(0.75, 0.75, DIKTE + RAND * 2, 48)
          g.rotateX(Math.PI / 2)
          geo[naam] = g
          botsing[naam] = () => new CANNON.Cylinder(0.75, 0.75, DIKTE + RAND * 2, 16)
        } else {
          const s = new THREE.Shape(v.map(([x, y]) => new THREE.Vector2(x, y)))
          const g = new THREE.ExtrudeGeometry(s, {
            depth: DIKTE, bevelEnabled: true, bevelThickness: RAND, bevelSize: RAND, bevelSegments: 4, curveSegments: 4,
          })
          g.translate(0, 0, -DIKTE / 2)
          geo[naam] = g
          botsing[naam] = () => prismaVorm(v)
        }
      }

      const materialen = kleuren.map((c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.55, metalness: 0 }))
      const namen = Object.keys(vormen)
      const mobiel = hero.offsetWidth < 768
      const aantal = mobiel ? 6 : 14
      const schaal = mobiel ? 0.72 : 1.2

      // doel: waar de vorm na de sprong naartoe schuift (plat, met deze draaiing)
      type Doel = { x: number; y: number; yaw: number; vanaf: number; tot: number }
      type Stuk = { mesh: T.Mesh; body: C.Body; naam: string; doel: Doel | null }
      const stukken: Stuk[] = []
      const kantel = new CANNON.Quaternion()
      kantel.setFromEuler(Math.PI / 2, 0, 0)
      const zetBotsing = (body: C.Body, naam: string) => {
        while (body.shapes.length) body.removeShape(body.shapes[0])
        const s = scaleShape(CANNON, botsing[naam](), schaal)
        // cannon-cilinders liggen langs de Y-as; kantel de schijf naar de Z-as
        if (naam === 'schijf') body.addShape(s, new CANNON.Vec3(), kantel)
        else body.addShape(s)
        body.updateMassProperties()
      }
      for (let i = 0; i < aantal; i++) {
        const naam = namen[i % namen.length]
        const mesh = new THREE.Mesh(geo[naam], materialen[i % materialen.length])
        mesh.castShadow = true
        mesh.receiveShadow = true
        mesh.scale.setScalar(schaal)
        scene.add(mesh)

        const body = new CANNON.Body({ mass: 1, material: mat, linearDamping: 0.08, angularDamping: 0.12 })
        zetBotsing(body, naam)
        // Op mobiel landen ze in de strook onder de knoppen
        const doel = naarWereld(composities.team[i % 14], mobiel)
        const x = doel.x + (Math.random() - 0.5) * 0.6
        const y = doel.y + (Math.random() - 0.5) * 0.6
        body.position.set(x, y, stil ? HALF * schaal : 3 + Math.random() * 7)
        if (!stil) body.quaternion.setFromEuler(Math.random() * 3, Math.random() * 3, Math.random() * 3)
        else body.quaternion.setFromEuler(0, 0, Math.random() * Math.PI)
        body.sleepSpeedLimit = 0.15
        world.addBody(body)
        mesh.userData.body = body
        const nu = performance.now()
        stukken.push({
          mesh, body, naam,
          doel: { x: doel.x, y: doel.y, yaw: Math.random() * Math.PI, vanaf: nu + 900, tot: nu + 4500 },
        })
      }

      if (process.env.NODE_ENV !== 'production') (window as unknown as { __stukken: unknown }).__stukken = stukken

      // Pakken en gooien
      const raycaster = new THREE.Raycaster()
      const ndc = new THREE.Vector2()
      const tilVlak = new THREE.Plane(new THREE.Vector3(0, 0, 1), -2.4)
      const punt = new THREE.Vector3()
      const greep = new CANNON.Body({ mass: 0, type: CANNON.Body.KINEMATIC })
      greep.collisionFilterGroup = 0
      greep.collisionFilterMask = 0
      world.addBody(greep)
      let koppeling: C.PointToPointConstraint | null = null

      const zetNdc = (cx: number, cy: number) => {
        const r = hero.getBoundingClientRect()
        ndc.set(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1)
        raycaster.setFromCamera(ndc, camera)
      }
      const raak = (cx: number, cy: number) => {
        zetNdc(cx, cy)
        const hit = raycaster.intersectObjects(stukken.map((s) => s.mesh), false)[0]
        return hit ? { body: hit.object.userData.body as C.Body, p: hit.point } : null
      }
      const opKnop = (t: EventTarget | null) => t instanceof Element && !!t.closest('a, button')

      const onDown = (e: PointerEvent) => {
        if (opKnop(e.target)) return
        const hit = raak(e.clientX, e.clientY)
        if (!hit) return
        e.preventDefault()
        hit.body.wakeUp()
        const st = stukken.find((s) => s.body === hit.body)
        if (st) st.doel = null
        const lokaal = hit.body.pointToLocalFrame(new CANNON.Vec3(hit.p.x, hit.p.y, hit.p.z))
        raycaster.ray.intersectPlane(tilVlak, punt)
        greep.position.set(punt.x, punt.y, punt.z)
        koppeling = new CANNON.PointToPointConstraint(hit.body, lokaal, greep, new CANNON.Vec3(0, 0, 0))
        world.addConstraint(koppeling)
        hero.style.cursor = 'grabbing'
        hero.style.userSelect = 'none'
      }
      const onMove = (e: PointerEvent) => {
        if (koppeling) {
          zetNdc(e.clientX, e.clientY)
          if (raycaster.ray.intersectPlane(tilVlak, punt)) {
            greep.position.set(
              Math.max(-halfW, Math.min(halfW, punt.x)),
              Math.max(-halfH, Math.min(halfH, punt.y)),
              punt.z,
            )
          }
        } else if (e.pointerType === 'mouse') {
          hero.style.cursor = !opKnop(e.target) && raak(e.clientX, e.clientY) ? 'grab' : ''
        }
      }
      const onUp = () => {
        if (!koppeling) return
        world.removeConstraint(koppeling)
        koppeling = null
        hero.style.cursor = ''
        hero.style.userSelect = ''
      }
      // Op touch: alleen scrollen blokkeren als je echt een vorm pakt
      const onTouch = (e: TouchEvent) => { if (koppeling) e.preventDefault() }

      hero.addEventListener('pointerdown', onDown)
      window.addEventListener('pointermove', onMove)
      window.addEventListener('pointerup', onUp)
      window.addEventListener('pointercancel', onUp)
      hero.addEventListener('touchstart', onTouch, { passive: false })
      hero.addEventListener('touchmove', onTouch, { passive: false })

      // Bij elk nieuw woord: klein wipje, daarna trekt een zachte veer elke vorm
      // naar zijn plek in de nieuwe compositie (zie preStep hieronder)
      const onWoord = (e: Event) => {
        const woord = (e as CustomEvent<string>).detail
        const punten = composities[woord]
        if (!punten || stil) return
        const recht = woord === 'merk' || woord === 'organisatie'
        const nu = performance.now()
        stukken.forEach((st, i) => {
          const { body } = st
          if (koppeling && koppeling.bodyA === body) return
          // Rebranding: elke vorm wisselt van soort
          if (woord === 'rebranding') {
            st.naam = volgendeVorm[st.naam]
            st.mesh.geometry = geo[st.naam]
            zetBotsing(body, st.naam)
          }
          const doel = naarWereld(punten[i % punten.length], mobiel)
          st.doel = {
            x: doel.x, y: doel.y,
            yaw: recht ? 0 : Math.random() * Math.PI * 2,
            vanaf: nu + i * 25, tot: nu + 3200 + i * 25,
          }
          body.wakeUp()
          body.velocity.z += 3
        })
      }
      window.addEventListener('hero-woord', onWoord)

      const onResize = () => {
        formaat()
        stukken.forEach(({ body }) => {
          body.position.x = Math.max(-halfW + 1, Math.min(halfW - 1, body.position.x))
          body.position.y = Math.max(-halfH + 1, Math.min(halfH - 1, body.position.y))
          body.wakeUp()
        })
      }
      window.addEventListener('resize', onResize)

      // Alleen rekenen als de hero in beeld is
      let zichtbaar = true
      const io = new IntersectionObserver(([e]) => { zichtbaar = e.isIntersecting })
      io.observe(hero)

      const doelQ = new CANNON.Quaternion()
      const fout = new CANNON.Quaternion()
      const inv = new CANNON.Quaternion()
      const VEER = 30
      const DEMP = 2 * Math.sqrt(VEER)
      world.addEventListener('preStep', () => {
        const h = world.dt || 1 / 60
        const nu = performance.now()
        for (const st of stukken) {
          const d = st.doel
          if (!d || nu < d.vanaf) continue
          if (nu > d.tot) { st.doel = null; continue }
          const b = st.body
          // Rustig in- en uitfaden van de kracht
          const fase = Math.min(1, (nu - d.vanaf) / 250) * Math.min(1, (d.tot - nu) / 600)
          b.velocity.x += (VEER * (d.x - b.position.x) - DEMP * b.velocity.x) * h * fase
          b.velocity.y += (VEER * (d.y - b.position.y) - DEMP * b.velocity.y) * h * fase
          // Draai naar plat met de gewenste richting, via draaisnelheid in plaats van verspringen
          doelQ.setFromEuler(0, 0, d.yaw)
          b.quaternion.conjugate(inv)
          doelQ.mult(inv, fout)
          if (fout.w < 0) { fout.x = -fout.x; fout.y = -fout.y; fout.z = -fout.z; fout.w = -fout.w }
          const hoek = 2 * Math.acos(Math.min(1, fout.w))
          const s = Math.sqrt(1 - fout.w * fout.w)
          const k = s > 1e-4 ? (hoek / s) * 7 : 0
          const t = 0.2 * fase
          b.angularVelocity.x += (fout.x * k - b.angularVelocity.x) * t
          b.angularVelocity.y += (fout.y * k - b.angularVelocity.y) * t
          b.angularVelocity.z += (fout.z * k - b.angularVelocity.z) * t
          b.wakeUp()
        }
      })
      let laatst = performance.now()
      let raf = 0
      const lus = (nu: number) => {
        raf = requestAnimationFrame(lus)
        const dt = Math.min(0.05, (nu - laatst) / 1000)
        laatst = nu
        if (!zichtbaar) return
        world.step(1 / 60, dt, 3)
        for (const { mesh, body } of stukken) {
          const p = body.interpolatedPosition, q = body.interpolatedQuaternion
          mesh.position.set(p.x, p.y, p.z)
          mesh.quaternion.set(q.x, q.y, q.z, q.w)
        }
        renderer.render(scene, camera)
      }
      raf = requestAnimationFrame(lus)

      opruimen = () => {
        cancelAnimationFrame(raf)
        io.disconnect()
        hero.removeEventListener('pointerdown', onDown)
        window.removeEventListener('pointermove', onMove)
        window.removeEventListener('pointerup', onUp)
        window.removeEventListener('pointercancel', onUp)
        hero.removeEventListener('touchstart', onTouch)
        hero.removeEventListener('touchmove', onTouch)
        window.removeEventListener('hero-woord', onWoord)
        window.removeEventListener('resize', onResize)
        Object.values(geo).forEach((g) => g.dispose())
        materialen.forEach((m) => m.dispose())
        renderer.dispose()
      }
    })

    return () => {
      gestopt = true
      opruimen()
    }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" />
}

// Botsvorm meeschalen met de mesh
function scaleShape(CANNON: typeof C, shape: C.Shape, s: number) {
  if (shape instanceof CANNON.ConvexPolyhedron) {
    const verts = shape.vertices.map((v) => new CANNON.Vec3(v.x * s, v.y * s, v.z * s))
    return new CANNON.ConvexPolyhedron({ vertices: verts, faces: shape.faces })
  }
  if (shape instanceof CANNON.Cylinder) {
    return new CANNON.Cylinder(shape.radiusTop * s, shape.radiusBottom * s, shape.height * s, shape.numSegments)
  }
  return shape
}
