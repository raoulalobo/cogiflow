import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import Opportunities from '@/components/Opportunities'
import PricingPhilosophy from '@/components/PricingPhilosophy'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <Opportunities />
      <PricingPhilosophy />
      <FinalCTA />
      <Footer />
    </main>
  )
}