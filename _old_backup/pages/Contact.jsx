import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope, faDirections } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-primary via-secondary to-tertiary flex items-center justify-center text-black overflow-hidden">
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
          <h1 className="text-7xl font-bold mb-4 text-golden">CONTACT US</h1>
          <div className="h-1 w-32 bg-golden mx-auto mb-6" />
          <p className="text-xl">We'd love to hear from you</p>
        </motion.div>
      </section>
      
      {/* Contact Info Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary via-secondary to-tertiary">
        <div className="container mx-auto px-1.5 sm:px-4 md:px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6 sm:p-8 bg-primary/50 rounded-2xl shadow-lg border-2 border-golden"
            >
              <div className="text-4xl sm:text-5xl mb-4 text-golden">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-golden mb-3">Visit Us</h3>
              <p className="text-black text-sm sm:text-base font-sans">
                Adjoining gurudwara shri nabha sahib, patiala road, zirkpur, 140603<br />
                Business District
              </p>
              <div className="mt-4 pt-3 border-t border-golden/30 text-xs font-semibold text-golden">
                RERA Registered: PBRERA-SAS79-PR1455-112026
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 sm:p-8 bg-primary/50 rounded-2xl shadow-lg border-2 border-golden"
            >
              <div className="text-4xl sm:text-5xl mb-4 text-golden">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-golden mb-3">Call Us</h3>
              <p className="text-black text-sm sm:text-base">
                +91 7888593861<br />
                +91 7888593861<br />
                Mon - Sat: 9 AM - 7 PM
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 sm:p-8 bg-primary/50 rounded-2xl shadow-lg border-2 border-golden"
            >
              <div className="text-4xl sm:text-5xl mb-4 text-golden">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-golden mb-3">Email Us</h3>
              <p className="text-black text-sm sm:text-base">
                info@glorytowers.com<br />
              </p>
            </motion.div>
          </div>

          {/* Interactive Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 lg:border-4 border-golden/50 bg-white p-1 sm:p-2.5 md:p-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 px-2.5 sm:px-4 py-2 bg-gradient-to-r from-primary via-primary/95 to-secondary text-black rounded-lg sm:rounded-xl mb-1 sm:mb-2 border border-golden/30">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                <span className="font-bold text-xs sm:text-sm text-black truncate">
                  The Glory Towers • Google Maps Location
                </span>
              </div>
              <a
                href="https://www.google.com/maps/place/The+Glory+Towers+-+3+BHK+Luxury+Apartments+in+Zirakpur/@30.6354245,76.7963389,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-golden3 via-golden2 to-golden text-primary font-bold text-xs rounded-full shadow hover:opacity-90 transition flex-shrink-0"
              >
                <FontAwesomeIcon icon={faDirections} />
                <span>Get Directions</span>
              </a>
            </div>

            <div className="relative w-full h-[360px] sm:h-[430px] md:h-[480px] rounded-lg sm:rounded-xl overflow-hidden bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.947948859693!2d76.79633887536897!3d30.635424474631655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390febc4d186ce03%3A0xab0f7bc3d88b76b7!2sThe%20Glory%20Towers%20-%203%20BHK%20Luxury%20Apartments%20in%20Zirakpur!5e0!3m2!1sen!2sin!4v1793963253900!5m2!1sen!2sin"
                className="w-full h-full border-0"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="The Glory Towers Location on Google Maps"
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form */}
      <ContactForm />
      
      <Footer />
    </div>
  )
}
