import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faLocationDot,
  faExpand,
  faTimes,
  faMap,
  faDirections
} from '@fortawesome/free-solid-svg-icons'

const locations = [
  { text: 'Sports Authority of India', time: '0 min' },
  { text: 'Gurudwara Shri Nabha Sahib', time: '1 min' },
  { text: 'Social Square Commercial Hub', time: '1 min' },
  { text: 'Mount Carmel School', time: '1 min' },
  { text: 'Amcare Super-Speciality Hospital', time: '3 min' },
  { text: 'Zirakpur Bus Stand', time: '8 min' },
  { text: 'IT City Mohali', time: '10 min' },
  { text: 'International Airport', time: '15 min' },
  { text: 'Chandigarh Railway Station', time: '20 min' },
]

export default function LocationMerits() {
  const [zoomMap, setZoomMap] = useState(false)
  const [activeTab, setActiveTab] = useState('google') // 'google' | 'plan' | 'both'

  return (
    <section id="location" className="py-16 sm:py-20 bg-gradient-to-br from-primary via-secondary to-tertiary">
      <div className="container mx-auto px-1.5 sm:px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 px-2"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-golden mb-4">
            LOCATION MERITS
          </h2>
          <div className="h-1 w-24 sm:w-32 bg-golden mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg md:text-xl text-black max-w-3xl mx-auto">
            Strategically located on Patiala Road with unmatched connectivity
          </p>
        </motion.div>
        
        {/* Merit Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-10 sm:mb-14 px-1 sm:px-0">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-primary/50 backdrop-blur-sm p-5 sm:p-6 rounded-xl border-2 border-golden hover:bg-primary/70 transition-all"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-xl sm:text-2xl text-golden flex-shrink-0 mt-1">
                  {location.time ? (
                    <FontAwesomeIcon icon={faLocationDot} />
                  ) : (
                    <FontAwesomeIcon icon={faLocationDot} />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-black font-medium leading-relaxed text-sm sm:text-base">
                    {location.text}
                  </p>
                  {location.time && (
                    <span className="inline-block mt-2 px-3 py-1 bg-golden/20 rounded-full text-golden text-xs sm:text-sm font-semibold">
                      {location.time}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map View Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-5 sm:mb-8 px-1">
          <button
            type="button"
            onClick={() => setActiveTab('google')}
            className={`px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'google'
                ? 'bg-gradient-to-r from-golden3 via-golden2 to-golden text-primary shadow-lg border border-golden'
                : 'bg-white/80 hover:bg-white text-black border border-golden/40'
            }`}
          >
            <FontAwesomeIcon icon={faLocationDot} className={activeTab === 'google' ? 'text-primary' : 'text-golden'} />
            <span>Google Map (Live)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('plan')}
            className={`px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'plan'
                ? 'bg-gradient-to-r from-golden3 via-golden2 to-golden text-primary shadow-lg border border-golden'
                : 'bg-white/80 hover:bg-white text-black border border-golden/40'
            }`}
          >
            <FontAwesomeIcon icon={faMap} className={activeTab === 'plan' ? 'text-primary' : 'text-golden'} />
            <span>Master Connectivity Plan</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('both')}
            className={`hidden md:inline-flex px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all items-center gap-2 cursor-pointer ${
              activeTab === 'both'
                ? 'bg-gradient-to-r from-golden3 via-golden2 to-golden text-primary shadow-lg border border-golden'
                : 'bg-white/80 hover:bg-white text-black border border-golden/40'
            }`}
          >
            <span>Side-by-Side View</span>
          </button>
        </div>

        {/* Map Display Container */}
        <div className="w-full">
          {/* Active: Google Map */}
          {activeTab === 'google' && (
            <motion.div
              key="google-map"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl mx-auto"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 lg:border-4 border-golden/50 bg-white p-1 sm:p-2.5 md:p-3">
                {/* Top Action Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 px-2.5 sm:px-4 py-2 bg-gradient-to-r from-primary via-primary/95 to-secondary text-black rounded-lg sm:rounded-xl mb-1 sm:mb-2 border border-golden/30">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-black truncate">
                      The Glory Towers • Patiala Road, Zirakpur
                    </span>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/The+Glory+Towers+-+3+BHK+Luxury+Apartments+in+Zirakpur/@30.6354245,76.7963389,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-golden3 via-golden2 to-golden text-primary font-bold text-xs rounded-full shadow hover:opacity-90 transition flex-shrink-0 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faDirections} />
                    <span>Get Directions</span>
                  </a>
                </div>

                {/* Google Map Embed Iframe */}
                <div className="relative w-full h-[360px] sm:h-[430px] md:h-[480px] lg:h-[520px] rounded-lg sm:rounded-xl overflow-hidden bg-gray-100">
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
              </div>
            </motion.div>
          )}

          {/* Active: Plan Map */}
          {activeTab === 'plan' && (
            <motion.div
              key="plan-map"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl mx-auto"
            >
              <div 
                onClick={() => setZoomMap(true)}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 lg:border-4 border-golden/50 bg-white p-1 sm:p-2.5 md:p-3 cursor-pointer"
              >
                {/* Top Action Bar */}
                <div className="flex items-center justify-between gap-2 px-2.5 sm:px-4 py-2 bg-gradient-to-r from-primary via-primary/95 to-secondary text-black rounded-lg sm:rounded-xl mb-1 sm:mb-2 border border-golden/30">
                  <div className="flex items-center gap-2 min-w-0">
                    <FontAwesomeIcon icon={faMap} className="text-golden text-xs" />
                    <span className="font-bold text-xs sm:text-sm text-black truncate">
                      Strategic Connectivity & Vicinity Plan
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary2/90 text-white font-bold text-xs rounded-full shadow flex-shrink-0">
                    <FontAwesomeIcon icon={faExpand} className="text-golden text-[10px]" />
                    <span>Click to Enlarge</span>
                  </span>
                </div>

                <div className="relative w-full h-[360px] sm:h-[430px] md:h-[480px] lg:h-[520px] rounded-lg sm:rounded-xl overflow-hidden bg-white flex items-center justify-center">
                  <img 
                    src="/project/plan/location-map.webp" 
                    alt="The Glory Towers Location Map"
                    className="w-full h-full object-contain bg-white"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Active: Both Side-by-Side (Desktop / Tablet) */}
          {activeTab === 'both' && (
            <motion.div
              key="both-maps"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-4 sm:gap-6 max-w-7xl mx-auto"
            >
              {/* Google Map Card */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-golden/50 bg-white p-1 sm:p-2.5">
                <div className="flex items-center justify-between gap-2 px-3 py-2 bg-gradient-to-r from-primary via-primary/95 to-secondary text-black rounded-lg sm:rounded-xl mb-1 sm:mb-2 border border-golden/30">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-black truncate">
                      Google Maps
                    </span>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/The+Glory+Towers+-+3+BHK+Luxury+Apartments+in+Zirakpur/@30.6354245,76.7963389,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-gradient-to-r from-golden3 via-golden2 to-golden text-primary font-bold text-xs rounded-full shadow hover:opacity-90 transition"
                  >
                    <FontAwesomeIcon icon={faDirections} />
                    <span>Directions</span>
                  </a>
                </div>
                <div className="relative w-full h-[380px] sm:h-[440px] rounded-lg sm:rounded-xl overflow-hidden bg-gray-100">
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
              </div>

              {/* Master Plan Card */}
              <div 
                onClick={() => setZoomMap(true)}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-golden/50 bg-white p-1 sm:p-2.5 cursor-pointer"
              >
                <div className="flex items-center justify-between gap-2 px-3 py-2 bg-gradient-to-r from-primary via-primary/95 to-secondary text-black rounded-lg sm:rounded-xl mb-1 sm:mb-2 border border-golden/30">
                  <div className="flex items-center gap-2 min-w-0">
                    <FontAwesomeIcon icon={faMap} className="text-golden text-xs" />
                    <span className="font-bold text-xs sm:text-sm text-black truncate">
                      Connectivity Plan
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary2/90 text-white font-bold text-xs rounded-full shadow">
                    <FontAwesomeIcon icon={faExpand} className="text-golden text-[10px]" />
                    <span>Enlarge</span>
                  </span>
                </div>
                <div className="relative w-full h-[380px] sm:h-[440px] rounded-lg sm:rounded-xl overflow-hidden bg-white flex items-center justify-center">
                  <img 
                    src="/project/plan/location-map.webp" 
                    alt="The Glory Towers Location Map"
                    className="w-full h-full object-contain bg-white"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      <AnimatePresence>
        {zoomMap && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/85 backdrop-blur-sm"
            onClick={() => setZoomMap(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl w-full max-h-[92vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-primary text-white border-b border-golden/40">
                <h3 className="text-base sm:text-xl font-bold text-white">
                  Location & Connectivity Map
                </h3>
                <button
                  onClick={() => setZoomMap(false)}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition cursor-pointer"
                  aria-label="Close"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>

              <div className="flex-1 overflow-auto p-2 sm:p-6 bg-gray-50 flex items-center justify-center">
                <img
                  src="/project/plan/location-map.png"
                  alt="Location Map Full"
                  className="max-w-full max-h-[78vh] object-contain bg-white rounded-xl shadow-inner"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
