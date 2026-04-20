import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import HoeIkWerkSection from '@/components/hoe-ik-werk-section'
import GrainCanvas from '@/components/grain-canvas'
import OverSection from '@/components/over-section'
import LogosSection from '@/components/logos-section'
import TestimonialCarousel from '@/components/testimonial-carousel'
import ContactFooter from '@/components/contact-footer'

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

      {/* ── Over mij ─────────────────────────────────────── */}
      <OverSection />

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

      {/* ── Contact — wit ────────────────────────────────── */}
      <ContactFooter />
    </>
  )
}
