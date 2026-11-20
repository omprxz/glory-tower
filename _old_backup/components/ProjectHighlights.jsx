import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBuilding, 
  faHome, 
  faHardHat, 
  faDraftingCompass,
  faElevator,
  faDumbbell,
  faSwimmingPool,
  faShieldAlt,
  faBolt,
  faUtensils,
  faTree,
  faTint,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'

const highlights = [
  { icon: faBuilding, text: '3 Towers on 3 Acres - All Sides Open' },
  { icon: faHome, text: 'Premium 3BHK Apartments - 1950 Sq Ft' },
  { icon: faBuilding, text: 'Only 4 Flats Per Floor - Each Flat Has Its Own Corner' },
  { icon: faHardHat, text: 'Mivan Construction by Suryacon' },
  { icon: faDraftingCompass, text: 'Architect Designed by Tript' },
  { icon: faElevator, text: '3 High-Speed Lifts & 2 Staircases' },
  { icon: faDumbbell, text: 'Fully Equipped Clubhouse with Gym' },
  { icon: faSwimmingPool, text: 'Swimming Pool & Kids Play Area' },
  { icon: faBuilding, text: 'Multi-Level Covered Parking' },
  { icon: faShieldAlt, text: '24/7 Security with Advanced CCTV & Access Control' },
  { icon: faBolt, text: '100% Power Backup for All Apartments' },
  { icon: faUtensils, text: 'Designer Modular Kitchen & Premium Bathrooms' },
  { icon: faTree, text: 'Landscaped Terrace Garden & Outdoor Seating' },
  { icon: faTint, text: 'Rainwater Harvesting & Eco-Friendly Features' },
  { icon: faCheckCircle, text: 'RERA Registered: PBRERA-SAS79-PR1455-112026' },
]

export default function ProjectHighlights() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-secondary to-tertiary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-golden mb-4">
            PROJECT HIGHLIGHTS
          </h2>
          <div className="h-1 w-32 bg-golden mx-auto mb-6" />
          <p className="text-xl text-black max-w-3xl mx-auto">
            Experience excellence in every detail with world-class construction and premium amenities
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-4 bg-primary/50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-2 border-golden"
            >
              <div className="text-2xl text-golden flex-shrink-0 mt-1">
                <FontAwesomeIcon icon={highlight.icon} />
              </div>
              <p className="text-black leading-relaxed">
                {highlight.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
