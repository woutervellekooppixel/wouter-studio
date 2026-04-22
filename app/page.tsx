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
      <div className="md:sticky md:top-0" style={{ zIndex: 10 }}>
        <HeroSection />
      </div>
      <div className="md:sticky md:top-0" style={{ zIndex: 20, boxShadow: shadow }}>
        <ServicesSection />
      </div>
      <div className="md:sticky md:top-0" style={{ zIndex: 30, boxShadow: shadow }}>
        <section id="hoe-ik-werk" className="bg-white py-24 px-6 scroll-mt-16">
          <div className="max-w-5xl mx-auto">
            <HoeIkWerkSection />
          </div>
        </section>
      </div>
      <div className="md:sticky md:top-0" style={{ zIndex: 40, boxShadow: shadow }}>
        <OverSection />
      </div>
      <div className="md:sticky md:top-0" style={{ zIndex: 50, boxShadow: shadow }}>
        <LogosSection />
      </div>
      <div className="md:sticky md:top-0" style={{ zIndex: 60, boxShadow: shadow }}>
        <TestimonialCarousel />
      </div>
      <div className="md:sticky md:top-0" style={{ zIndex: 70, boxShadow: shadow }}>
        <ContactFooter />
      </div>
    </>
  )
}
