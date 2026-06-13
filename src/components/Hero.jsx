import { motion } from 'framer-motion'
import { HiArrowRight, HiChevronDown } from 'react-icons/hi'
import { BsCodeSlash, BsLightningChargeFill } from 'react-icons/bs'
import { MdRocketLaunch } from 'react-icons/md'

const Hero = () => {
  const handleScroll = (href) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-dark-950">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orb - blue */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
          }}
        />
        {/* Secondary gradient orb - purple */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #9333ea 0%, transparent 70%)',
          }}
        />
        {/* Bottom accent */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        {/* Gradient fade-out at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-950 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold glass border border-blue-500/20 text-blue-400">
                <BsLightningChargeFill className="text-yellow-400" />
                Transforming Ideas Into Scalable Digital Solutions
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight font-display"
            >
              Building{' '}
              <span className="gradient-text">Digital Experiences</span>{' '}
              That Drive Business Growth
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-xl"
            >
              InnVora Technologies helps startups and businesses build powerful websites, custom software, ecommerce platforms, APIs, and exceptional user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleScroll('#contact') }}
                className="btn-primary px-8 py-4 text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                id="hero-start-project-btn"
              >
                <MdRocketLaunch size={18} />
                Start Your Project
                <HiArrowRight size={16} />
              </motion.a>
              <motion.a
                href="#services"
                onClick={(e) => { e.preventDefault(); handleScroll('#services') }}
                className="btn-secondary px-8 py-4 text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                id="hero-explore-services-btn"
              >
                Explore Services
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-8 pt-4"
            >
              {[
                { value: '50+', label: 'Projects Delivered' },
                { value: '30+', label: 'Happy Clients' },
                { value: '5+', label: 'Years Experience' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-bold gradient-text-blue">{stat.value}</span>
                  <span className="text-sm text-slate-500">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column - Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Main card */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 blur-3xl opacity-30 rounded-3xl"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #9333ea)' }} />

              {/* Main visual container */}
              <div className="relative glass-card rounded-3xl p-8 border border-white/5">
                {/* Code editor mockup */}
                <div className="bg-dark-900 rounded-2xl p-6 border border-white/5">
                  {/* Editor header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <div className="ml-4 flex-1 bg-dark-800 rounded px-3 py-1 text-xs text-slate-500">
                      innvora-app / src / App.jsx
                    </div>
                  </div>
                  {/* Code lines */}
                  <div className="space-y-2 font-mono text-sm">
                    {[
                      { indent: 0, content: <><span className="text-purple-400">import</span> <span className="text-yellow-300">React</span> <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span></> },
                      { indent: 0, content: '' },
                      { indent: 0, content: <><span className="text-purple-400">const</span> <span className="text-yellow-300">App</span> <span className="text-slate-300">= () =&gt; {'{'}</span></> },
                      { indent: 1, content: <><span className="text-purple-400">return</span> <span className="text-slate-300">(</span></> },
                      { indent: 2, content: <><span className="text-blue-400">&lt;div</span> <span className="text-yellow-300">className</span><span className="text-slate-300">=</span><span className="text-green-400">"app"</span><span className="text-blue-400">&gt;</span></> },
                      { indent: 3, content: <><span className="text-blue-400">&lt;Hero</span> <span className="text-blue-400">/&gt;</span></> },
                      { indent: 3, content: <><span className="text-blue-400">&lt;Services</span> <span className="text-blue-400">/&gt;</span></> },
                      { indent: 2, content: <><span className="text-blue-400">&lt;/div&gt;</span></> },
                      { indent: 1, content: <><span className="text-slate-300">)</span></> },
                      { indent: 0, content: <><span className="text-slate-300">{'}'}</span></> },
                    ].map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.08 }}
                        className="flex items-center gap-3"
                      >
                        <span className="text-slate-700 text-xs w-4 text-right shrink-0">{i + 1}</span>
                        <span className="text-slate-400" style={{ paddingLeft: `${line.indent * 16}px` }}>
                          {line.content || '\u00A0'}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 border border-blue-500/20 text-xs text-blue-400 font-semibold flex items-center gap-2"
                >
                  <BsCodeSlash /> React + Vite
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 border border-purple-500/20 text-xs text-purple-400 font-semibold"
                >
                  🚀 Ship Faster
                </motion.div>
              </div>

              {/* Tech stack badges */}
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {['React', 'Node.js', 'Spring Boot', 'AWS', 'Docker'].map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + i * 0.1 }}
                    className="px-3 py-1 rounded-full glass border border-white/10 text-xs text-slate-400 font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <HiChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
