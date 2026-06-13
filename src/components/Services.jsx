import { motion } from 'framer-motion'
import { useScrollAnimation, staggerContainer, staggerItem } from '../hooks/useScrollAnimation'
import {
  HiCode,
  HiCube,
  HiShoppingBag,
  HiLightningBolt,
} from 'react-icons/hi'
import { MdDesignServices, MdApi } from 'react-icons/md'
import { HiArrowRight } from 'react-icons/hi'

const services = [
  {
    id: 'web-dev',
    icon: HiCode,
    title: 'Web Design & Development',
    description:
      'We craft stunning, high-performance web applications and websites that captivate users and convert visitors into loyal customers. From landing pages to complex web platforms.',
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'rgba(59, 130, 246, 0.15)',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    id: 'custom-software',
    icon: HiCube,
    title: 'Custom Software Development',
    description:
      'End-to-end custom software solutions tailored to your unique business requirements. We build scalable, maintainable, and future-proof applications that grow with your business.',
    gradient: 'from-violet-500 to-purple-600',
    glow: 'rgba(139, 92, 246, 0.15)',
    tags: ['Java', 'Spring Boot', 'Node.js', 'Microservices'],
  },
  {
    id: 'ecommerce',
    icon: HiShoppingBag,
    title: 'Ecommerce Solutions',
    description:
      'Transform your product catalog into a high-converting online store. We build feature-rich ecommerce platforms with seamless checkout, inventory management, and payment integrations.',
    gradient: 'from-pink-500 to-rose-500',
    glow: 'rgba(236, 72, 153, 0.15)',
    tags: ['Shopify', 'WooCommerce', 'Payment Gateways', 'PWA'],
  },
  {
    id: 'api',
    icon: MdApi,
    title: 'API Design & Integration',
    description:
      'Architect robust, RESTful and GraphQL APIs that power your ecosystem. From third-party integrations to microservices, we ensure seamless data flow across all your systems.',
    gradient: 'from-emerald-500 to-teal-500',
    glow: 'rgba(16, 185, 129, 0.15)',
    tags: ['REST APIs', 'GraphQL', 'Webhooks', 'OAuth'],
  },
  {
    id: 'uiux',
    icon: MdDesignServices,
    title: 'UI/UX Design',
    description:
      'User-centered design that balances beauty with functionality. Our design process prioritizes intuitive interactions, accessibility, and visual experiences that delight users and drive results.',
    gradient: 'from-amber-500 to-orange-500',
    glow: 'rgba(245, 158, 11, 0.15)',
    tags: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
  },
]

const SectionHeader = ({ badge, title, subtitle }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold glass border border-purple-500/20 text-purple-400 mb-6"
      >
        {badge}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-6"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-400 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="group relative glass-card rounded-2xl p-7 border border-white/5 hover:border-white/10 cursor-default overflow-hidden"
      style={{
        '--glow': service.glow,
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(circle at 50% 0%, ${service.glow}, transparent 70%)` }}
      />

      {/* Card content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg`}>
          <Icon size={24} className="text-white" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:gradient-text transition-all">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-slate-400 border border-white/5 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Learn more link */}
        <div className="flex items-center gap-2 text-sm font-semibold text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-8px] group-hover:translate-x-0">
          <span>Learn more</span>
          <HiArrowRight size={14} />
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    </motion.div>
  )
}

const Services = () => {
  const { ref, isInView } = useScrollAnimation(0.05)

  return (
    <section id="services" className="section-padding relative bg-dark-950">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="✦ Our Services"
          title={
            <>
              Everything You Need to{' '}
              <span className="gradient-text">Build & Scale</span>
            </>
          }
          subtitle="From concept to deployment, we provide end-to-end software development and IT services that empower your business to thrive in the digital landscape."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export { SectionHeader }
export default Services
