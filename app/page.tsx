import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Header from "@/components/header"
import About from "@/components/about"
import Properties from "@/components/properti"
import Features from "@/components/features"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimoni"
import FAQ from "@/components/faq"
import CallToAction from "@/components/cta"
import Accessibility from "@/components/accessibility"
import Concepts from "@/components/concepts"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Properties />
      <Features />
      <Accessibility />
      <Concepts />
      <Gallery />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
