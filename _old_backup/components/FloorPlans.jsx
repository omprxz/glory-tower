import { motion } from 'framer-motion'

const floorPlans = [
  { 
    image: '/project/plan/fp1.webp', 
    label: 'Type A - 3 BHK',
    area: '1,950 Sq.ft'
  },
  { 
    image: '/project/plan/fp2.webp', 
    label: 'Type B - 3 BHK',
    area: '1,950 Sq.ft'
  },
  { 
    image: '/project/plan/fp3.webp', 
    label: 'Type C - 3 BHK Premium',
    area: '1,950 Sq.ft'
  },
  { 
    image: '/project/plan/fp4.webp', 
    label: 'Type D - 3 BHK Deluxe',
    area: '1,950 Sq.ft'
  },
]

function FloorPlanCard({ plan, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="mb-16 lg:mb-24"
    >
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 lg:border-4 border-golden/40 bg-gradient-to-br from-primary via-secondary to-tertiary p-3 lg:p-8">
        {/* Header with Type Info */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-3 lg:mb-6"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 lg:gap-4 mb-2 lg:mb-4">
            <div>
              <h3 className="text-2xl lg:text-6xl font-bold bg-gradient-to-r from-golden3 via-golden2 to-golden bg-clip-text text-transparent mb-1 lg:mb-2">
                {plan.label}
              </h3>
              <div className="h-0.5 lg:h-1 w-16 lg:w-20 bg-gradient-to-r from-golden3 via-golden2 to-golden" />
            </div>
            <div className="bg-gradient-to-r from-golden3 via-golden2 to-golden px-3 lg:px-6 py-1.5 lg:py-3 rounded-full">
              <p className="text-lg lg:text-3xl font-bold text-primary">
                {plan.area}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Floor Plan Image */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative rounded-2xl overflow-hidden shadow-xl bg-white"
        >
          <img 
            src={plan.image} 
            alt={plan.label}
            className="w-full h-[400px] md:h-[600px] lg:h-[700px] object-contain bg-white"
            loading="lazy"
          />
          <div className="absolute top-2 right-2 lg:top-4 lg:right-4 bg-gradient-to-r from-golden3 via-golden2 to-golden px-2 lg:px-4 py-1 lg:py-2 rounded-full shadow-lg">
            <span className="text-primary font-bold text-xs lg:text-base">
              {index === 0 ? 'Layout' : 'Floor Plan'} {index === 0 ? '' : index}
            </span>
          </div>
        </motion.div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 lg:h-2 bg-gradient-to-r from-golden3 via-golden2 to-golden rounded-full mt-3 lg:mt-6"
        />
      </div>
    </motion.div>
  )
}

export default function FloorPlans() {
  return (
    <section id="floor-plans" className="bg-gradient-to-br from-primary via-secondary to-tertiary py-20">
      <div className="container mx-auto px-4 mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl font-bold text-center text-golden mb-4"
        >
          FLOOR PLANS
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-1 w-32 bg-golden mx-auto"
        />
      </div>
      
      <div className="container mx-auto px-4">
        {floorPlans.map((plan, index) => (
          <FloorPlanCard key={index} plan={plan} index={index} />
        ))}
      </div>
    </section>
  )
}
