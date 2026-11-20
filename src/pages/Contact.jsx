import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-primary via-secondary to-tertiary flex items-center justify-center text-white overflow-hidden">
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
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-tertiary">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-primary/50 rounded-2xl shadow-lg border-2 border-golden"
            >
              <div className="text-5xl mb-4 text-golden">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <h3 className="text-2xl font-bold text-golden mb-3">Visit Us</h3>
              <p className="text-white font-sans">
                Adjoining gurudwara shri nabha sahib, patiala road, zirkpur, 140603<br />
                Business District
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-8 bg-primary/50 rounded-2xl shadow-lg border-2 border-golden"
            >
              <div className="text-5xl mb-4 text-golden">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <h3 className="text-2xl font-bold text-golden mb-3">Call Us</h3>
              <p className="text-white">
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
              className="text-center p-8 bg-primary/50 rounded-2xl shadow-lg border-2 border-golden"
            >
              <div className="text-5xl mb-4 text-golden">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <h3 className="text-2xl font-bold text-golden mb-3">Email Us</h3>
              <p className="text-white">
                info@glorytowers.com<br />
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <ContactForm />
      
      <Footer />
    </div>
  )
}
