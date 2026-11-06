import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faLocationDot,
  faClock,
  faExpand,
  faTimes
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

  return (
    <section id="location" className="py-20 bg-gradient-to-br from-primary via-secondary to-tertiary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-golden mb-4">
            LOCATION MERITS
          </h2>
          <div className="h-1 w-32 bg-golden mx-auto mb-6" />
          <p className="text-xl text-black max-w-3xl mx-auto">
            Strategically located on Patiala Road with unmatched connectivity
          </p>
        </motion.div>
        
        {/* Merit Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-primary/50 backdrop-blur-sm p-6 rounded-xl border-2 border-golden hover:bg-primary/70 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl text-golden flex-shrink-0 mt-1">
                  {location.time ? (
                    <FontAwesomeIcon icon={faClock} />
                  ) : (
                    <FontAwesomeIcon icon={faLocationDot} />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-black font-medium leading-relaxed">
                    {location.text}
                  </p>
                  {location.time && (
                    <span className="inline-block mt-2 px-3 py-1 bg-golden/20 rounded-full text-golden text-sm font-semibold">
                      {location.time}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Location Map Preview */}
        <div className="max-w-4xl mx-auto">
          <div 
            onClick={() => setZoomMap(true)}
            className="group relative rounded-3xl overflow-hidden shadow-2xl border-2 lg:border-4 border-golden/40 bg-white p-3 cursor-pointer"
          >
            <img 
              src="/project/plan/location-map.webp" 
              alt="The Glory Towers Location Map"
              className="w-full h-[400px] md:h-[500px] object-contain bg-white"
              loading="lazy"
            />
            <div className="absolute top-4 right-4 bg-gradient-to-r from-golden3 via-golden2 to-golden px-3 py-1.5 rounded-full shadow-lg">
              <span className="text-primary font-bold text-xs lg:text-sm">
                Location Map
              </span>
            </div>
            <div className="absolute bottom-4 right-4 bg-primary2/90 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <FontAwesomeIcon icon={faExpand} className="text-golden" />
              <span>Click to Enlarge</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      <AnimatePresence>
        {zoomMap && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm"
            onClick={() => setZoomMap(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl w-full max-h-[92vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 bg-primary text-white border-b border-golden/40">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Location & Connectivity Map
                </h3>
                <button
                  onClick={() => setZoomMap(false)}
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition cursor-pointer"
                  aria-label="Close"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>

              <div className="flex-1 overflow-auto p-4 sm:p-6 bg-gray-50 flex items-center justify-center">
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
