import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import AudienceCards from '@/components/AudienceCards'
import NotAnEngineer from '@/components/NotAnEngineer'
import TimeStrategy from '@/components/TimeStrategy'
import SkillsValuable from '@/components/SkillsValuable'
import HowItWorks from '@/components/HowItWorks'
import Transparency from '@/components/Transparency'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <AudienceCards />
      <NotAnEngineer />
      <TimeStrategy />
      <SkillsValuable />
      <HowItWorks />
      <Transparency />
      <FinalCTA />
      <Footer />
    </main>
  )
}
