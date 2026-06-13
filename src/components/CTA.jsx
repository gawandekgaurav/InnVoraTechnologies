import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { MdRocketLaunch } from 'react-icons/md'

const CTA = () => {
  const handleScroll = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="cta" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900" />

      {/* Gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent 65%)' }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #9333ea, transparent 65%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(ellipse, #8b5cf6, transparent 70%)' }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold glass border border-blue-500/30 text-blue-400 mb-8"
          >
            <MdRocketLaunch /> Ready to Get Started?
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white mb-6 leading-tight"
          >
            Let's Build Something{' '}
            <span className="gradient-text">Amazing Together</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Have an idea, project, or business challenge? Let's create the right digital solution that drives real results for your business.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleScroll('#contact') }}
              className="btn-primary px-10 py-4 text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              id="cta-start-project-btn"
            >
              <MdRocketLaunch size={18} />
              Start Your Project
              <HiArrowRight size={16} />
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleScroll('#contact') }}
              className="btn-secondary px-10 py-4 text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              id="cta-contact-btn"
            >
              Contact Us
            </motion.a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-sm text-slate-600"
          >
            No commitment required · Free initial consultation · Response within 24 hours
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
