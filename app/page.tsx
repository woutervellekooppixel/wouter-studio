import ContactForm from '@/components/contact-form'
import HeroSection from '@/components/hero-section'
import HoeIkWerkSection from '@/components/hoe-ik-werk-section'
import ServicesSection from '@/components/services-section'
import SectionIntro from '@/components/section-intro'
import TestimonialCarousel from '@/components/testimonial-carousel'
import LogosSection from '@/components/logos-section'

export default function HomePage() {
  return (
    <>
      {/* ── Hero — wit ───────────────────────────────────── */}
      <HeroSection />

      {/* ── Wat ik doe — warm lichtgrijs ─────────────────── */}
      <section id="wat-ik-doe" className="bg-[#f5f5f3] scroll-mt-16">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <SectionIntro
            label="Diensten"
            title="Wat ik doe"
            subtitle="Geen vaste producten, geen standaard trajecten. De situatie bepaalt de aanpak."
          />
          <ServicesSection />
        </div>
      </section>

      {/* ── Hoe ik werk — donker ─────────────────────────── */}
      <section id="hoe-ik-werk" className="bg-[#111111] scroll-mt-16">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <SectionIntro
            label="Aanpak"
            title="Hoe ik werk"
            dark
          />
          <HoeIkWerkSection />
        </div>
      </section>

      {/* ── Opdrachtgevers — wit ─────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <SectionIntro label="Een greep uit mijn opdrachtgevers" />
          <LogosSection />
        </div>
      </section>

      {/* ── Testimonials — warm lichtgrijs ───────────────── */}
      <section className="bg-[#f5f5f3] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <SectionIntro label="Wat anderen zeggen" />
          <TestimonialCarousel />
        </div>
      </section>

      {/* ── Contact — wit ────────────────────────────────── */}
      <section id="contact" className="bg-white scroll-mt-16">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <SectionIntro
            label="Contact"
            title={"Vastgelopen?\nLaten we praten."}
            subtitle="Een eerste gesprek is altijd vrijblijvend. Vertel kort wat er speelt, dan wordt er gekeken of en hoe er geholpen kan worden."
          />
          <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-16 items-start pb-8">
            <ContactForm />
            <div className="space-y-8">
              <div>
                <p className="text-[11px] tracking-[0.12em] uppercase text-[#999] font-normal mb-3">
                  E-mail
                </p>
                <a
                  href="mailto:wouter@wouter.studio"
                  className="text-[15px] font-medium text-[#111] hover:opacity-60 transition-opacity"
                >
                  wouter@wouter.studio
                </a>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.12em] uppercase text-[#999] font-normal mb-3">
                  Telefoon
                </p>
                <p className="text-[15px] text-[#999]">Volgt</p>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.12em] uppercase text-[#999] font-normal mb-3">
                  Gevestigd in
                </p>
                <p className="text-[15px] font-medium text-[#111]">Den Haag</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
