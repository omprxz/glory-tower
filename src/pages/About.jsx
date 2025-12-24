import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10"
        >
          <h1 className="text-7xl font-bold mb-4">ABOUT US</h1>
          <div className="h-1 w-32 bg-white mx-auto" />
        </motion.div>
      </section>
      
      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-lg text-gray-700 leading-relaxed"
          >
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Our Vision</h2>
              <p>
                Glory Tower represents a new era of luxury living, where architectural excellence meets modern lifestyle demands. Our vision is to create homes that are not just spaces to live in, but sanctuaries that inspire, comfort, and elevate everyday experiences.
              </p>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Our Mission</h2>
              <p>
                We are committed to delivering exceptional quality, innovative design, and sustainable development practices. Every aspect of Glory Tower has been meticulously planned to ensure that our residents enjoy the finest amenities, superior construction quality, and a lifestyle that exceeds expectations.
              </p>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">The Glory Tower Story</h2>
              <p className="mb-4">
                Conceived as a landmark project in the heart of the city, Glory Tower stands as a testament to our commitment to excellence. With premium 3 BHK apartments designed by award-winning architects, we have created a living experience that combines luxury, comfort, and convenience.
              </p>
              <p>
                Our development features world-class amenities including state-of-the-art fitness facilities, infinity pools, landscaped gardens, and smart home technology. Every detail has been thoughtfully considered to create a community where families can thrive and create lasting memories.
              </p>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Why Choose Us</h2>
              <ul className="space-y-3 list-disc list-inside">
                <li>Over 20 years of experience in luxury real estate development</li>
                <li>Award-winning architectural and interior design</li>
                <li>Commitment to sustainable and eco-friendly practices</li>
                <li>Strategic location with excellent connectivity</li>
                <li>Transparent pricing and flexible payment plans</li>
                <li>Timely project delivery with quality assurance</li>
                <li>Comprehensive after-sales service and support</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
