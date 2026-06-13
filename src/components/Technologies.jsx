import { motion } from 'framer-motion'
import { useScrollAnimation, staggerContainer, staggerItem } from '../hooks/useScrollAnimation'
import { SectionHeader } from './Services'
import {
  SiReact,
  SiSpring,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
} from 'react-icons/si'
import { FaJava, FaAws } from 'react-icons/fa'
import { TbApi } from 'react-icons/tb'

const technologies = [
  { name: 'React', icon: SiReact, color: '#61DAFB', category: 'Frontend' },
  { name: 'Java', icon: FaJava, color: '#ED8B00', category: 'Backend' },
  { name: 'Spring Boot', icon: SiSpring, color: '#6DB33F', category: 'Backend' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'Backend' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1', category: 'Database' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'Database' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Database' },
  { name: 'AWS', icon: FaAws, color: '#FF9900', category: 'Cloud' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'DevOps' },
  { name: 'REST APIs', icon: TbApi, color: '#8B5CF6', category: 'Integration' },
]

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Cloud', 'DevOps', 'Integration']

const TechCard = ({ tech, index }) => {
  const Icon = tech.icon

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6, scale: 1.04 }}
      transition={{ duration: 0.25 }}
      className="group flex flex-col items-center gap-3 p-5 rounded-2xl glass-card border border-white/5 hover:border-white/10 cursor-default"
    >
      {/* Icon container */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{
          background: `radial-gradient(circle, ${tech.color}22, ${tech.color}08)`,
          border: `1px solid ${tech.color}30`,
        }}
      >
        <Icon size={24} style={{ color: tech.color }} />
      </div>

      {/* Name */}
      <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors text-center">
        {tech.name}
      </span>

      {/* Category badge */}
      <span
        className="text-xs px-2 py-0.5 rounded-full font-medium"
        style={{
          color: tech.color,
          background: `${tech.color}15`,
          border: `1px solid ${tech.color}25`,
        }}
      >
        {tech.category}
      </span>
    </motion.div>
  )
}

const Technologies = () => {
  const { ref, isInView } = useScrollAnimation(0.05)

  return (
    <section id="technologies" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #9333ea, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="⚡ Tech Stack"
          title={
            <>
              Powered by{' '}
              <span className="gradient-text">Modern Technologies</span>
            </>
          }
          subtitle="We leverage cutting-edge tools and frameworks to build robust, scalable, and future-ready solutions that give your business a competitive advantage."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 text-sm">
            And many more tools, frameworks, and technologies to solve your unique challenges.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Technologies
