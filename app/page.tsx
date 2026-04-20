import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import HoeIkWerkSection from '@/components/hoe-ik-werk-section'
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

      {/* ── Hoe ik werk ──────────────────────────────────── */}
      <section id="hoe-ik-werk" className="bg-white py-24 px-6 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] tracking-[0.14em] uppercase text-[#999] mb-4">Aanpak</p>
          <h2
            className="font-black text-[#111] tracking-tight leading-none mb-16"
            style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}
          >
            Hoe ik werk.
          </h2>
          <HoeIkWerkSection />
        </div>
      </section>

      {/* ── Over mij ─────────────────────────────────────── */}
      <OverSection />

      {/* ── Opdrachtgevers — ticker ──────────────────────── */}
      <LogosSection />

      {/* ── Testimonials — wit, carousel ─────────────────── */}
      <TestimonialCarousel />

      {/* ── Contact — wit ────────────────────────────────── */}
      <ContactFooter />
    </>
  )
}
