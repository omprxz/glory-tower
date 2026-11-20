import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-white font-sans py-2 sm:py-2.5 px-4 border-b-2 border-golden/50 text-xs sm:text-sm shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-golden/20 text-golden">
            <FontAwesomeIcon icon={faCheckCircle} className="text-xs" />
          </span>
          <div className="text-xs sm:text-sm md:text-base font-bold flex items-center gap-1.5 sm:gap-2">
            <span className="text-golden font-extrabold uppercase tracking-wider text-[11px] sm:text-xs bg-golden/10 px-2 py-0.5 rounded border border-golden/40">
              RERA Registered
            </span>
            <span className="text-primary2 font-black font-mono tracking-wide">
              PBRERA-SAS79-PR1455-112026
            </span>
          </div>
        </div>
        <motion.a
          href="tel:+917888593861"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-golden3 via-golden2 to-golden text-primary2 px-4 py-1.5 rounded-full font-bold hover:shadow-lg transition flex items-center gap-2 text-xs sm:text-sm"
        >
          <FontAwesomeIcon icon={faPhone} />
          +91 7888593861
        </motion.a>
      </div>
    </div>
  )
}
