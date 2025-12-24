import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import ContactModal from './ContactModal'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
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
            <a href="/download-brochure" className="text-black font-semibold hover:text-golden transition text-sm xl:text-base">
              DOWNLOAD BROCHURE
            </a>
            <a href="/#latest-posts" className="text-black font-semibold hover:text-golden transition text-sm xl:text-base">
              BLOGS
            </a>
            
            <motion.button
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-golden3 via-golden2 to-golden text-primary px-4 xl:px-6 py-2 rounded-none font-bold hover:shadow-lg transition text-sm xl:text-base"
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
                  href="/download-brochure" 
                  className="text-black font-semibold hover:text-golden transition py-2 border-b border-white/10"
                  onClick={handleLinkClick}
                >
                  DOWNLOAD BROCHURE
                </a>
                <a 
                  href="/#latest-posts" 
                  className="text-black font-semibold hover:text-golden transition py-2 border-b border-white/10"
                  onClick={handleLinkClick}
                >
                  BLOGS
                </a>
                <motion.button
                  onClick={() => {
                    setIsOpen(true)
                    setIsMobileMenuOpen(false)
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-golden3 via-golden2 to-golden text-primary px-6 py-3 rounded-none font-bold hover:shadow-lg transition mt-2"
                >
                  CONTACT US
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Modal */}
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
