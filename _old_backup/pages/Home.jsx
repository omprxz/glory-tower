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
import ContactModal from '../components/ContactModal'
import { useState, useEffect } from 'react'

export default function Home() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

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

      {/* Latest Posts Section */}
      <div className="container mx-auto px-4 py-16 bg-white" id="latest-posts">
        <h2 className="text-6xl font-extrabold mb-12 text-center bg-gradient-to-r from-golden3 via-golden2 to-golden bg-clip-text text-transparent">
          Latest Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a href="/post-showcase" className="bg-gradient-to-br from-gray-500 to-gray-700 rounded-2xl shadow-lg overflow-hidden block transition-transform">
            <img src="/project/showcase.png" alt="Showcase" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-3xl font-bold text-golden mb-4">Project Showcase</h3>
              <p className="text-white/80 mb-4">Discover the highlights and unique features of The Glory Towers in our latest showcase post.</p>
              <a href="/post-showcase" className="inline-block mt-2 text-golden font-bold hover:underline">READ MORE</a>
            </div>
          </a>
          <a href="/post-clubhouse" className="bg-gradient-to-br from-gray-500 to-gray-700 rounded-2xl shadow-lg overflow-hidden block transition-transform">
            <img src="/project/clubhouse.png" alt="Clubhouse" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-3xl font-bold text-golden mb-4">Clubhouse Reveal</h3>
              <p className="text-white/80 mb-4">Take a look inside our world-class clubhouse, designed for luxury and comfort.</p>
              <a href="/post-clubhouse" className="inline-block mt-2 text-golden font-bold hover:underline">READ MORE</a>
            </div>
          </a>
          <a href="/post-bedroom" className="bg-gradient-to-br from-gray-500 to-gray-700 rounded-2xl shadow-lg overflow-hidden block transition-transform">
            <img src="/project/bedroom.png" alt="Bedroom" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-3xl font-bold text-golden mb-4">Premium Bedrooms</h3>
              <p className="text-white/80 mb-4">Explore the spacious and elegant bedrooms that set a new standard for living.</p>
              <a href="/post-bedroom" className="inline-block mt-2 text-golden font-bold hover:underline">READ MORE</a>
            </div>
          </a>
        </div>
      </div>

      <Footer />

      {/* Auto-popup Modal */}
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}