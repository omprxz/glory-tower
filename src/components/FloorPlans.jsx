import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const floorPlans = [
  { 
    image: '/project/plan/fp1.webp', 
    label: 'Type A - 3 BHK',
    area: '1,850 Sq.ft'
  },
  { 
    image: '/project/plan/fp2.webp', 
    label: 'Type B - 3 BHK',
    area: '1,950 Sq.ft'
  },
  { 
    image: '/project/plan/fp3.webp', 
    label: 'Type C - 3 BHK Premium',
    area: '2,150 Sq.ft'
  },
  { 
    image: '/project/plan/fp4.webp', 
    label: 'Type D - 3 BHK Deluxe',
    area: '2,350 Sq.ft'
  },
]

function FloorPlanCard({ plan, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  
  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="sticky top-20 h-screen flex items-center justify-center"
    >
      <div className="relative w-full h-screen">
        <div className="relative h-full overflow-hidden bg-white">
          <img 
            src={plan.image} 
            alt={plan.label}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute top-0 left-0 bg-white/50 backdrop-blur-sm px-8 py-6 rounded-br-3xl">
            <h3 className="text-4xl font-bold mb-2 text-primary">
              {plan.label}
            </h3>
            <p className="text-xl text-primary/80">
              {plan.area}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function FloorPlans() {
  return (
    <section id="floor-plans" className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-4 mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl font-bold text-center text-white mb-4"
        >
          FLOOR PLANS
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-1 w-32 bg-secondary mx-auto"
        />
      </div>
      
      <div className="relative">
        {floorPlans.map((plan, index) => (
          <FloorPlanCard key={index} plan={plan} index={index} />
        ))}
      </div>
    </section>
  )
}
