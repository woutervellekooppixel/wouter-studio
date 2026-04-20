import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import HoeIkWerkSection from '@/components/hoe-ik-werk-section'
import GrainCanvas from '@/components/grain-canvas'
import LogosSection from '@/components/logos-section'
import TestimonialCarousel from '@/components/testimonial-carousel'

export default function HomePage() {
  return (
    <>
      {/* ── Hero — wit ───────────────────────────────────── */}
      <HeroSection />

      {/* ── Diensten worklist — wit ───────────────────────── */}
      <ServicesSection />

      {/* ── Hoe ik werk — wit + noise + uitschuivende balken ── */}
      <section id="hoe-ik-werk" className="relative bg-white overflow-hidden py-24 px-6 scroll-mt-16">
        <GrainCanvas />
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-[11px] tracking-[0.14em] uppercase text-[#999] mb-6">Aanpak</p>
          <h2
            className="font-black text-[#111] tracking-tight leading-none mb-20"
            style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}
          >
            Hoe ik werk.
          </h2>
          <HoeIkWerkSection />
        </div>
      </section>

      {/* ── Opdrachtgevers — wit ─────────────────────────── */}
      <section className="bg-white py-20 border-t border-[#e8e8e8]">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[11px] tracking-[0.12em] uppercase text-[#999] font-normal mb-12 text-center">
            Een greep uit mijn opdrachtgevers
          </p>
          <LogosSection />
        </div>
      </section>

      {/* ── Testimonials — wit, carousel ─────────────────── */}
      <TestimonialCarousel />

      {/* ── Footer CTA — zwart ───────────────────────────── */}
      <section id="contact" className="bg-[#111] scroll-mt-16">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2
                className="font-black text-white tracking-tight leading-none mb-4"
                style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
              >
                Vastgelopen?<br />Laten we praten.
              </h2>
              <p className="text-[#555] text-[14px]">Een eerste gesprek is altijd vrijblijvend.</p>
            </div>
            <a
              href="mailto:wouter@wouter.studio"
              className="shrink-0 border border-white text-white text-[11px] tracking-[0.1em] uppercase px-8 py-4 hover:bg-white hover:text-[#111] transition-colors duration-200"
            >
              Neem contact op
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
