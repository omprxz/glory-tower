import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faPhone, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import ContactModal from './ContactModal'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalLabel, setModalLabel] = useState('GET A CALLBACK')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  const openBrochureModal = () => {
    setModalLabel('Download Brochure')
    setIsOpen(true)
  }

  const openCallbackModal = () => {
    setModalLabel('GET A CALLBACK')
    setIsOpen(true)
  }

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 shadow-sm"
      >
        {/* RERA Header Bar */}
        <div className="bg-white font-sans py-2 sm:py-2.5 px-4 border-b-2 border-golden/50 shadow-sm">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-golden/20 text-golden">
                <FontAwesomeIcon icon={faCheckCircle} className="text-xs" />
              </span>
              <div className="text-xs sm:text-sm md:text-base font-bold tracking-tight sm:tracking-normal flex flex-wrap items-center gap-1 sm:gap-2">
                <span className="text-golden font-extrabold uppercase tracking-wider text-[11px] sm:text-xs bg-golden/10 px-2 py-0.5 rounded border border-golden/40">
                  RERA Registered
                </span>
                <span className="text-primary2 font-black font-mono tracking-wide">
                  PBRERA-SAS79-PR1455-112026
                </span>
              </div>
            </div>
            <a 
              href="tel:+917888593861" 
              className="hidden sm:flex items-center gap-2 text-primary2 hover:text-golden font-bold text-xs sm:text-sm transition"
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-golden/20 text-golden">
                <FontAwesomeIcon icon={faPhone} className="text-xs" />
              </span>
              <span>+91 7888593861</span>
            </a>
          </div>
        </div>

        <div className="container mx-auto px-4 py-3 flex items-center justify-between bg-white/60">
          <a href="/" className="flex items-center z-50" onClick={handleLinkClick}>
            <img src="/logo.png" alt="The Glory Towers" className="h-20 md:h-24 w-auto" />
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="/" className="text-black font-semibold hover:text-golden transition text-sm xl:text-base">
              HOME
            </a>
            <a href="#why-us" className="text-black font-semibold hover:text-golden transition text-sm xl:text-base">
              WHY US
            </a>
            <a href="https://malhotraproperties.in/the-glory-tower" target="_blank" rel="noopener noreferrer" className="text-black font-semibold hover:text-golden transition text-sm xl:text-base">
              PROJECT
            </a>
            <a href="/#floor-plans" className="text-black font-semibold hover:text-golden transition text-sm xl:text-base">
              PLANS
            </a>
            <button 
              onClick={openBrochureModal}
              className="text-black font-semibold hover:text-golden transition text-sm xl:text-base cursor-pointer"
            >
              DOWNLOAD BROCHURE
            </button>
            <a href="/#latest-posts" className="text-black font-semibold hover:text-golden transition text-sm xl:text-base">
              BLOGS
            </a>
            
            <motion.button
              onClick={openCallbackModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-golden3 via-golden2 to-golden text-primary px-4 xl:px-6 py-2 rounded-none font-bold hover:shadow-lg transition text-sm xl:text-base cursor-pointer"
            >
              REQUEST CALLBACK
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center gap-2 bg-primary/90 text-golden text-lg px-4 py-2 rounded-md shadow font-bold z-50 border border-golden"
          >
            <span>Menu</span>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-primary/98 backdrop-blur-md"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                <div className="text-xs font-sans font-bold pb-2 border-b border-golden/30 flex items-center gap-2">
                  <span className="text-golden font-extrabold uppercase text-[10px] bg-golden/10 px-2 py-0.5 rounded border border-golden/40">
                    RERA Registered
                  </span>
                  <span className="text-primary2 font-black font-mono">PBRERA-SAS79-PR1455-112026</span>
                </div>
                <a 
                  href="/" 
                  className="text-black font-semibold hover:text-golden transition py-2 border-b border-white/10"
                  onClick={handleLinkClick}
                >
                  HOME
                </a>
                <a 
                  href="#why-us" 
                  className="text-black font-semibold hover:text-golden transition py-2 border-b border-white/10"
                  onClick={handleLinkClick}
                >
                  WHY US
                </a>
                <a 
                  href="https://malhotraproperties.in/the-glory-tower" 
                  target="_blank" rel="noopener noreferrer"
                  className="text-black font-semibold hover:text-golden transition py-2 border-b border-white/10"
                  onClick={handleLinkClick}
                >
                  PROJECT
                </a>
                <a 
                  href="/#floor-plans" 
                  className="text-black font-semibold hover:text-golden transition py-2 border-b border-white/10"
                  onClick={handleLinkClick}
                >
                  FLOOR & SITE PLANS
                </a>
                <button 
                  onClick={() => {
                    openBrochureModal()
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-black font-semibold hover:text-golden transition py-2 border-b border-white/10 text-left cursor-pointer"
                >
                  DOWNLOAD BROCHURE
                </button>
                <a 
                  href="/#latest-posts" 
                  className="text-black font-semibold hover:text-golden transition py-2 border-b border-white/10"
                  onClick={handleLinkClick}
                >
                  BLOGS
                </a>
                <motion.button
                  onClick={() => {
                    openCallbackModal()
                    setIsMobileMenuOpen(false)
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-golden3 via-golden2 to-golden text-primary px-6 py-3 rounded-none font-bold hover:shadow-lg transition mt-2 cursor-pointer"
                >
                  CONTACT US
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Modal */}
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} buttonLabel={modalLabel} />
    </>
  )
}
