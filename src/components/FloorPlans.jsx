import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faExpand } from '@fortawesome/free-solid-svg-icons'

const categories = ['All', 'Site Plan', 'Typical Floor', '3 BHK Unit', 'Location Map']

const floorPlans = [
  { 
    id: 'site-plan',
    category: 'Site Plan',
    image: '/project/plan/site-plan.webp',
    pngImage: '/project/plan/site-plan.png',
    label: 'Master Site Plan',
    area: '3 Acres • 3 Towers',
    tag: 'Site Plan'
  },
  { 
    id: 'cluster-plan',
    category: 'Typical Floor',
    image: '/project/plan/cluster-floor-plan.webp',
    pngImage: '/project/plan/cluster-floor-plan.png',
    label: 'Typical Floor Plan',
    area: '4 Flats Per Floor',
    tag: 'Cluster Layout'
  },
  { 
    id: 'unit-plan',
    category: '3 BHK Unit',
    image: '/project/plan/unit-floor-plan.webp',
    pngImage: '/project/plan/unit-floor-plan.png',
    label: '3 BHK Floor Plan',
    area: '1,950 Sq.ft',
    tag: 'Unit Layout'
  },
  { 
    id: 'location-map',
    category: 'Location Map',
    image: '/project/plan/location-map.webp',
    pngImage: '/project/plan/location-map.png',
    label: 'Location Map',
    area: 'Patiala Road, Zirakpur',
    tag: 'Location Plan'
  },
]

function FloorPlanCard({ plan, index, onZoom }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-16 lg:mb-24"
    >
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 lg:border-4 border-golden/40 bg-gradient-to-br from-primary via-secondary to-tertiary p-3 lg:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 lg:gap-4 mb-3 lg:mb-6">
          <div>
            <h3 className="text-2xl lg:text-5xl font-bold bg-gradient-to-r from-golden3 via-golden2 to-golden bg-clip-text text-transparent mb-1 lg:mb-2">
              {plan.label}
            </h3>
            <div className="h-0.5 lg:h-1 w-16 lg:w-20 bg-gradient-to-r from-golden3 via-golden2 to-golden" />
          </div>
          <div className="bg-gradient-to-r from-golden3 via-golden2 to-golden px-4 lg:px-6 py-1.5 lg:py-2.5 rounded-full shadow-md self-start md:self-auto">
            <p className="text-base lg:text-2xl font-bold text-primary">
              {plan.area}
            </p>
          </div>
        </div>

        {/* Floor Plan Image */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          onClick={() => onZoom(plan)}
          className="group relative rounded-2xl overflow-hidden shadow-xl bg-white cursor-pointer"
        >
          <img 
            src={plan.image} 
            alt={plan.label}
            className="w-full h-[420px] md:h-[620px] lg:h-[760px] object-contain bg-white p-2"
            loading="lazy"
          />

          <div className="absolute top-3 right-3 lg:top-4 lg:right-4 bg-gradient-to-r from-golden3 via-golden2 to-golden px-3 lg:px-4 py-1 lg:py-1.5 rounded-full shadow-lg">
            <span className="text-primary font-bold text-xs lg:text-sm">
              {plan.tag}
            </span>
          </div>

          <div className="absolute bottom-3 right-3 bg-primary2/90 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            <FontAwesomeIcon icon={faExpand} className="text-golden" />
            <span>Click to Enlarge</span>
          </div>
        </motion.div>

        {/* Bottom Decorative Line */}
        <div className="h-1 lg:h-1.5 bg-gradient-to-r from-golden3 via-golden2 to-golden rounded-full mt-3 lg:mt-6" />
      </div>
    </motion.div>
  )
}

export default function FloorPlans() {
  const [activeTab, setActiveTab] = useState('All')
  const [zoomPlan, setZoomPlan] = useState(null)

  const displayedPlans = activeTab === 'All' 
    ? floorPlans 
    : floorPlans.filter(p => p.category === activeTab)

  return (
    <section id="floor-plans" className="bg-gradient-to-br from-primary via-secondary to-tertiary py-20">
      <div className="container mx-auto px-4 mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-6xl font-bold text-center text-golden mb-4"
        >
          FLOOR PLANS & SITE PLANS
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-1 w-32 bg-golden mx-auto mb-8"
        />

        {/* Minimalist Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-golden3 via-golden2 to-golden text-primary shadow-md'
                  : 'bg-white/80 hover:bg-white text-gray-800 border border-golden/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <AnimatePresence mode="popLayout">
          {displayedPlans.map((plan, index) => (
            <FloorPlanCard 
              key={plan.id} 
              plan={plan} 
              index={index} 
              onZoom={(p) => setZoomPlan(p)}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox Zoom Modal */}
      <AnimatePresence>
        {zoomPlan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm"
            onClick={() => setZoomPlan(null)}
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
                  {zoomPlan.label} • {zoomPlan.area}
                </h3>
                <button
                  onClick={() => setZoomPlan(null)}
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition cursor-pointer"
                  aria-label="Close"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>

              <div className="flex-1 overflow-auto p-4 sm:p-6 bg-gray-50 flex items-center justify-center">
                <img
                  src={zoomPlan.pngImage || zoomPlan.image}
                  alt={zoomPlan.label}
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
