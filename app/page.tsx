import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import HoeIkWerkSection from '@/components/hoe-ik-werk-section'
import OverSection from '@/components/over-section'
import LogosSection from '@/components/logos-section'
import TestimonialCarousel from '@/components/testimonial-carousel'
import ContactFooter from '@/components/contact-footer'

const shadow = '0 -4px 20px rgba(0,0,0,0.06)'

export default function HomePage() {
  return (
    <>
      {/* ── Hero — z-10 ──────────────────────────────────── */}
      <div style={{ position: 'sticky', top: 0, zIndex: 10 }}>
        <HeroSection />
      </div>

      {/* ── Wat ik doe — z-20 ────────────────────────────── */}
      <div style={{ position: 'sticky', top: 0, zIndex: 20, boxShadow: shadow }}>
        <ServicesSection />
      </div>

      {/* ── Hoe ik werk — z-30 ───────────────────────────── */}
      <div style={{ position: 'sticky', top: 0, zIndex: 30, boxShadow: shadow }}>
        <section id="hoe-ik-werk" className="bg-white py-24 px-6 scroll-mt-16">
          <div className="max-w-5xl mx-auto">
            <HoeIkWerkSection />
          </div>
        </section>
      </div>

      {/* ── Over mij — z-40 ──────────────────────────────── */}
      <div style={{ position: 'sticky', top: 0, zIndex: 40, boxShadow: shadow }}>
        <OverSection />
      </div>

      {/* ── Opdrachtgevers — z-50 ────────────────────────── */}
      <div style={{ position: 'sticky', top: 0, zIndex: 50, boxShadow: shadow }}>
        <LogosSection />
      </div>

      {/* ── Testimonials — z-60 ──────────────────────────── */}
      <div style={{ position: 'sticky', top: 0, zIndex: 60, boxShadow: shadow }}>
        <TestimonialCarousel />
      </div>

      {/* ── Contact — z-70 ───────────────────────────────── */}
      <div style={{ position: 'sticky', top: 0, zIndex: 70, boxShadow: shadow }}>
        <ContactFooter />
      </div>
    </>
  )
}
