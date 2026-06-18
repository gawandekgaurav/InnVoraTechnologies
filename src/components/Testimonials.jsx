import { motion } from 'framer-motion'
import { useScrollAnimation, staggerContainer, staggerItem } from '../hooks/useScrollAnimation'
import { SectionHeader } from './Services'
import { HiStar } from 'react-icons/hi'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Arjun Mehta',
    designation: 'CTO',
    company: 'RetailSphere Pvt. Ltd.',
    feedback:
      'InnVora Technologies completely transformed our ecommerce platform. The team\'s attention to detail, technical depth, and proactive communication made the entire process seamless. We saw a 40% increase in conversion rates within the first month post-launch. Highly recommended.',
    rating: 5,
    avatar: 'AM',
    avatarGradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    designation: 'Founder & CEO',
    company: 'FinEdge Solutions',
    feedback:
      'Working with InnVora on our fintech dashboard was an exceptional experience. They built a complex data visualization platform that handles thousands of real-time transactions flawlessly. The code quality, architecture, and scalability they delivered exceeded our expectations at every milestone.',
    rating: 5,
    avatar: 'PS',
    avatarGradient: 'from-violet-500 to-purple-600',
  },
  {
    id: 3,
    name: 'Rohan Desai',
    designation: 'Product Manager',
    company: 'HealthSync Technologies',
    feedback:
      'The InnVora team built our patient management system from scratch, and it\'s been rock-solid for over a year with zero major issues. Their long-term support and willingness to iterate based on user feedback has been invaluable. They truly feel like an extension of our internal team.',
    rating: 5,
    avatar: 'RD',
    avatarGradient: 'from-emerald-500 to-teal-500',
  },
]

const StarRating = ({ count }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <HiStar key={i} size={16} className="text-amber-400" />
    ))}
  </div>
)

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative glass-card rounded-2xl p-7 border border-white/5 hover:border-white/10 overflow-hidden flex flex-col"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.08), transparent 70%)' }} />

      {/* Quote icon */}
      <div className="relative z-10">
        <FaQuoteLeft size={28} className="text-blue-500/30 mb-5" />

        {/* Rating */}
        <StarRating count={testimonial.rating} />

        {/* Feedback */}
        <p className="text-slate-300 text-sm leading-relaxed mt-4 mb-6 flex-1">
          "{testimonial.feedback}"
        </p>

        {/* Divider */}
        <div className="border-t border-white/5 pt-5">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${testimonial.avatarGradient} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
              {testimonial.avatar}
            </div>
            {/* Info */}
            <div>
              <div className="font-semibold text-white text-sm">{testimonial.name}</div>
              <div className="text-xs text-slate-500">
                {testimonial.designation} · {testimonial.company}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  )
}

const Testimonials = () => {
  const { ref, isInView } = useScrollAnimation(0.05)

  return (
    <section id="testimonials" className="section-padding relative bg-dark-950">
      <div className="absolute inset-0 bg-dots-pattern opacity-20" />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #9333ea, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="💬 Testimonials"
          title={
            <>
              Trusted by{' '}
              <span className="gradient-text">Businesses Worldwide</span>
            </>
          }
          subtitle="Don't just take our word for it. Here's what our clients say about their experience working with InnVora Technologies."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
