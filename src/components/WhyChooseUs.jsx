import { motion } from 'framer-motion'
import { useScrollAnimation, staggerContainer, staggerItem } from '../hooks/useScrollAnimation'
import { SectionHeader } from './Services'
import {
  HiLightBulb,
  HiChatAlt2,
  HiScale,
  HiClock,
  HiSupport,
} from 'react-icons/hi'

const reasons = [
  {
    id: 'custom',
    icon: HiLightBulb,
    title: 'Custom Solutions',
    description:
      'No cookie-cutter solutions here. We invest time understanding your unique business context, goals, and challenges to architect software that perfectly fits your needs and grows with you.',
    gradient: 'from-blue-500 to-cyan-400',
    glow: '#3b82f6',
  },
  {
    id: 'communication',
    icon: HiChatAlt2,
    title: 'Transparent Communication',
    description:
      'Stay informed every step of the way. We maintain clear, proactive communication with regular updates, demos, and milestone reviews so you are always in the loop on your project's progress.',
    gradient: 'from-violet-500 to-purple-400',
    glow: '#8b5cf6',
  },
  {
    id: 'scalable',
    icon: HiScale,
    title: 'Scalable Architecture',
    description:
      'We architect software for tomorrow, not just today. Our solutions are designed with scalability at the core — ready to handle growth in users, data, and features without a rewrite.',
    gradient: 'from-emerald-500 to-teal-400',
    glow: '#10b981',
  },
  {
    id: 'delivery',
    icon: HiClock,
    title: 'Timely Delivery',
    description:
      'We respect your timelines and business deadlines. Our agile process, sprint-based delivery, and disciplined project management ensure we consistently deliver on time, every time.',
    gradient: 'from-amber-500 to-orange-400',
    glow: '#f59e0b',
  },
  {
    id: 'support',
    icon: HiSupport,
    title: 'Long-Term Support',
    description:
      'Our relationship doesn\'t end at launch. We provide ongoing maintenance, performance monitoring, feature enhancements, and dedicated support to keep your digital products thriving.',
    gradient: 'from-pink-500 to-rose-400',
    glow: '#ec4899',
  },
]

const ReasonCard = ({ reason, index }) => {
  const Icon = reason.icon
  const isEven = index % 2 === 0

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group relative glass-card rounded-2xl p-7 border border-white/5 hover:border-white/10 overflow-hidden"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(ellipse at 0% 0%, ${reason.glow}15, transparent 60%)` }}
      />

      <div className="relative z-10 flex gap-5">
        {/* Icon */}
        <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${reason.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={22} className="text-white" />
        </div>

        {/* Content */}
        <div>
          <h3 className="text-lg font-bold text-white mb-2 font-display">{reason.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
        </div>
      </div>

      {/* Left accent line */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
    </motion.div>
  )
}

const WhyChooseUs = () => {
  const { ref, isInView } = useScrollAnimation(0.05)

  return (
    <section id="why-us" className="section-padding relative bg-dark-950">
      <div className="absolute inset-0 bg-dots-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="🏆 Why Choose Us"
          title={
            <>
              Why Leading Businesses{' '}
              <span className="gradient-text">Trust InnVora</span>
            </>
          }
          subtitle="We combine technical excellence with a client-first approach to deliver software solutions that create measurable business impact."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 gap-5"
        >
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.id} reason={reason} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA nudge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="text-slate-400 mb-6">
            Ready to experience the InnVora difference?
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary px-8 py-3.5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            id="why-us-cta-btn"
          >
            Let's Talk →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
