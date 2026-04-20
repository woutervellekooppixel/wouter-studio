import ContactForm from '@/components/contact-form'
import HeroSection from '@/components/hero-section'
import MarqueeSection from '@/components/marquee-section'
import ServicesSection from '@/components/services-section'
import HoeIkWerkSection from '@/components/hoe-ik-werk-section'
import TestimonialCarousel from '@/components/testimonial-carousel'
import LogosSection from '@/components/logos-section'

export default function HomePage() {
  return (
    <>
      {/* ── Hero — wit ───────────────────────────────────── */}
      <HeroSection />

      {/* ── Marquee ──────────────────────────────────────── */}
      <MarqueeSection />

      {/* ── Zwart intro — Wat ik doe ─────────────────────── */}
      <section className="bg-[#111] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] tracking-[0.14em] uppercase text-[#444] mb-6">Diensten</p>
          <h2
            className="font-black text-white leading-[1.0] tracking-tight"
            style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}
          >
            Wat ik doe.
          </h2>
        </div>
      </section>

      {/* ── Diensten worklist — wit ───────────────────────── */}
      <ServicesSection />

      {/* ── Hoe ik werk — zwart + uitschuivende balken ────── */}
      <section id="hoe-ik-werk" className="bg-[#111] py-24 px-6 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] tracking-[0.14em] uppercase text-[#444] mb-6">Aanpak</p>
          <h2
            className="font-black text-white tracking-tight leading-none mb-20"
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

      {/* ── Testimonials — wit ───────────────────────────── */}
      <section className="bg-white py-24 border-t border-[#e8e8e8]">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[11px] tracking-[0.12em] uppercase text-[#999] font-normal mb-16">
            Wat anderen zeggen
          </p>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ── Footer CTA — zwart ───────────────────────────── */}
      <section id="contact" className="bg-[#111] scroll-mt-16">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-20">
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

          <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-12 items-start">
            <div className="bg-white p-8">
              <ContactForm />
            </div>
            <div className="space-y-8">
              <div>
                <p className="text-[11px] tracking-[0.12em] uppercase text-[#444] font-normal mb-3">
                  E-mail
                </p>
                <a
                  href="mailto:wouter@wouter.studio"
                  className="text-[15px] font-medium text-white hover:opacity-60 transition-opacity"
                >
                  wouter@wouter.studio
                </a>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.12em] uppercase text-[#444] font-normal mb-3">
                  Gevestigd in
                </p>
                <p className="text-[15px] font-medium text-white">Den Haag</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
