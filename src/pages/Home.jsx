import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ComingSoon from '../components/ComingSoon'
import ProjectHighlights from '../components/ProjectHighlights'
import ProjectViews from '../components/ProjectViews'
import FloorPlans from '../components/FloorPlans'
import Amenities from '../components/Amenities'
import WhyGloryTower from '../components/WhyGloryTower'
import LocationMerits from '../components/LocationMerits'
import Chairman from '../components/Chairman'
import ContactForm from '../components/ContactForm'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import TalkToUsButton from '../components/TalkToUsButton'

export default function Home() {
  return (
    <div>
      <Navbar />
      <TalkToUsButton />
      <Hero />
      <ComingSoon />
      <ProjectHighlights />
      <ProjectViews />
      <FloorPlans />
      <Amenities />
      <WhyGloryTower />
      <LocationMerits />
      <Chairman />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  )
}