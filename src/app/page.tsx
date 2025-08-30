import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SupportedPlatforms from '@/components/SupportedPlatforms'
import AutomationTypes from '@/components/AutomationTypes'
import HowItWorks from '@/components/HowItWorks'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SupportedPlatforms />
      <AutomationTypes />
      <HowItWorks />
      <Footer />
    </main>
  )
}