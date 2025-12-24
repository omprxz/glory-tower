import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ComingSoon from '../components/ComingSoon'
import ProjectViews from '../components/ProjectViews'
import FloorPlans from '../components/FloorPlans'
import WhyGloryTower from '../components/WhyGloryTower'
import Chairman from '../components/Chairman'
import ContactForm from '../components/ContactForm'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import TopBar from '../components/TopBar'
import TalkToUsButton from '../components/TalkToUsButton'

export default function Home() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <TalkToUsButton />
      <Hero />
      <ComingSoon />
      <ProjectViews />
      <FloorPlans />
      <WhyGloryTower />
      <Chairman />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  )
}