import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faLocationDot,
  faClock
} from '@fortawesome/free-solid-svg-icons'

const locations = [
  { text: '7 Minutes from Chandigarh', time: '7 min' },
  { text: '5 Minutes from International Airport', time: '5 min' },
  { text: '1 Minute from Gurudwara Shri Nabha Sahib', time: '1 min' },
  { text: '3 Minutes from Zirakpur Bus Stand', time: '3 min' },
  { text: '3 Minutes from Chhatbir Zoo', time: '3 min' },
  { text: '4 States Direct Connectivity', time: '' },
  { text: 'Adjoining Sports Authority of India Stadium', time: '' },
  { text: 'Within the Radius of Various Commercial Projects', time: '' },
  { text: 'In the Vicinity of Various Hotels & Resorts', time: '' },
]

export default function LocationMerits() {
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
            LOCATION MERITS
          </h2>
          <div className="h-1 w-32 bg-golden mx-auto mb-6" />
          <p className="text-xl text-black max-w-3xl mx-auto">
            Strategically located with unmatched connectivity to all key landmarks
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                  <p className="text-black leading-relaxed">
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
      </div>
    </section>
  )
}
