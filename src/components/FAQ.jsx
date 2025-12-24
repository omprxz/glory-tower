import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: 'What are the apartment configurations available at Glory Tower?',
    answer: 'Glory Tower offers luxury 3 BHK apartments with various configurations ranging from 1,850 sq.ft to 2,350 sq.ft. Each unit features spacious layouts, premium finishes, and modern amenities designed for comfortable living. We offer multiple floor plan options to suit different lifestyle preferences and family sizes.'
  },
  {
    question: 'What amenities are included in the Glory Tower project?',
    answer: 'Glory Tower features world-class amenities including a state-of-the-art gymnasium, infinity swimming pool, dedicated kids play area, landscaped gardens, party hall, 24/7 security with CCTV surveillance, high-speed elevators, power backup, covered parking, and smart home automation. The project also includes eco-friendly features like rainwater harvesting and solar panels.'
  },
  {
    question: 'What is the payment plan and financing options available?',
    answer: 'We offer flexible payment plans designed to make your dream home affordable. Options include construction-linked payment plans with easy installments spread across the construction period. We also have tie-ups with leading banks and financial institutions for home loan financing with competitive interest rates. Our sales team can provide detailed payment schedules and assist with loan processing.'
  },
  {
    question: 'When is the expected possession date for Glory Tower?',
    answer: 'The project is currently under construction with an expected completion and possession date scheduled for Q4 2026. We maintain strict quality controls and adhere to construction timelines. Regular construction updates are shared with our valued buyers, and we ensure timely delivery with proper completion certificates and all necessary approvals in place.'
  },
  {
    question: 'What is the location advantage and connectivity of Glory Tower?',
    answer: 'Glory Tower is strategically located in a prime area with excellent connectivity to major business districts, educational institutions, healthcare facilities, and entertainment hubs. The property offers easy access to major highways, metro stations, and airports. The neighborhood is rapidly developing with shopping malls, restaurants, and recreational facilities within close proximity, making it an ideal location for both living and investment.'
  },
]

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-none"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 px-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors rounded-lg"
      >
        <span className="text-xl font-semibold text-primary pr-8">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-3xl text-secondary flex-shrink-0"
        >
          ⌄
        </motion.span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed text-lg">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-primary mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="h-1 w-32 bg-secondary mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Glory Tower
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
