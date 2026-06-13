import { motion } from 'framer-motion'
import { useScrollAnimation, slideInLeft, slideInRight, staggerContainer, staggerItem } from '../hooks/useScrollAnimation'
import {
  HiLightningBolt,
  HiShieldCheck,
  HiChip,
  HiStar,
} from 'react-icons/hi'
import { MdRocketLaunch } from 'react-icons/md'

const features = [
  {
    icon: HiLightningBolt,
    label: 'Innovation-First',
    desc: 'Always adopting the latest technologies',
    color: '#f59e0b',
  },
  {
    icon: HiShieldCheck,
    label: 'Reliability',
    desc: 'Proven track record of successful delivery',
    color: '#10b981',
  },
  {
    icon: HiChip,
    label: 'Modern Tech',
    desc: 'React, Spring Boot, AWS, Docker & more',
    color: '#3b82f6',
  },
  {
    icon: HiStar,
    label: 'Client Success',
    desc: 'Your success metrics are our metrics',
    color: '#9333ea',
  },
]

const About = () => {
  const { ref: leftRef, isInView: leftInView } = useScrollAnimation(0.1)
  const { ref: rightRef, isInView: rightInView } = useScrollAnimation(0.1)

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-8"
        style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left - Visual */}
          <motion.div
            ref={leftRef}
            variants={slideInLeft}
            initial="hidden"
            animate={leftInView ? 'visible' : 'hidden'}
            className="relative"
          >
            {/* Main card */}
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl blur-2xl opacity-20"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #9333ea)' }} />

              <div className="relative glass-card rounded-3xl p-8 border border-white/5">
                {/* Mission */}
                <div className="mb-8 pb-8 border-b border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <MdRocketLaunch size={16} className="text-white" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Our Mission</span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    To empower businesses of all sizes with innovative software solutions and reliable IT services that drive growth, efficiency, and lasting competitive advantage in the digital era.
                  </p>
                </div>

                {/* Vision */}
                <div className="mb-8 pb-8 border-b border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                      <HiStar size={16} className="text-white" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Our Vision</span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    To be the most trusted technology partner for ambitious businesses — a company where innovation meets reliability, and every line of code creates real-world business value.
                  </p>
                </div>

                {/* Core Values */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                      <HiShieldCheck size={16} className="text-white" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Core Values</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Integrity', 'Excellence', 'Innovation', 'Collaboration', 'Impact'].map((v) => (
                      <span key={v} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-slate-300 font-medium">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -right-5 glass rounded-2xl px-5 py-3 border border-blue-500/20 text-center"
              >
                <div className="text-2xl font-bold gradient-text-blue">50+</div>
                <div className="text-xs text-slate-400">Projects</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute -bottom-5 -left-5 glass rounded-2xl px-5 py-3 border border-purple-500/20 text-center"
              >
                <div className="text-2xl font-bold text-purple-400">98%</div>
                <div className="text-xs text-slate-400">Satisfaction</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            ref={rightRef}
            variants={slideInRight}
            initial="hidden"
            animate={rightInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold glass border border-blue-500/20 text-blue-400">
              🏢 About InnVora Technologies
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white leading-tight">
              Building Tomorrow's{' '}
              <span className="gradient-text">Digital Solutions</span>{' '}
              Today
            </h2>

            {/* Description */}
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                InnVora Technologies is a modern technology company focused on building innovative software solutions and delivering reliable IT services that help businesses grow in the digital era.
              </p>
              <p>
                Founded with a passion for clean code and exceptional user experiences, we combine deep technical expertise with strategic thinking to deliver software that doesn't just work — it drives measurable business outcomes.
              </p>
              <p>
                Whether you're a startup building your first MVP or an established enterprise modernizing legacy systems, our team brings the skill, dedication, and collaborative spirit needed to make your vision a reality.
              </p>
            </div>

            {/* Feature highlights */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={rightInView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.label}
                    variants={staggerItem}
                    className="flex items-start gap-3 p-4 rounded-xl glass border border-white/5 hover:border-white/10 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: `${feature.color}20`, border: `1px solid ${feature.color}30` }}
                    >
                      <Icon size={16} style={{ color: feature.color }} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{feature.label}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{feature.desc}</div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
