import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation, slideInLeft, slideInRight } from '../hooks/useScrollAnimation'
import { SectionHeader } from './Services'
import { HiMail, HiPhone, HiLocationMarker, HiArrowRight, HiCheckCircle } from 'react-icons/hi'
import { MdRocketLaunch } from 'react-icons/md'

const contactInfo = [
  {
    icon: HiMail,
    label: 'Email Us',
    value: 'hello@innvoratech.com',
    href: 'mailto:hello@innvoratech.com',
    color: '#3b82f6',
  },
  {
    icon: HiPhone,
    label: 'Call Us',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
    color: '#10b981',
  },
  {
    icon: HiLocationMarker,
    label: 'Our Office',
    value: 'Pune, Maharashtra, India',
    href: null,
    color: '#9333ea',
  },
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  projectDetails: '',
}

const Contact = () => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { ref: leftRef, isInView: leftInView } = useScrollAnimation(0.1)
  const { ref: rightRef, isInView: rightInView } = useScrollAnimation(0.1)

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required.'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (form.phone && !/^[+]?[\d\s\-()]{7,15}$/.test(form.phone)) {
      newErrors.phone = 'Please enter a valid phone number.'
    }
    if (!form.projectDetails.trim()) newErrors.projectDetails = 'Please describe your project.'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setLoading(true)
    // Simulate network request
    await new Promise((res) => setTimeout(res, 1500))
    setLoading(false)
    setSubmitted(true)
    setForm(initialForm)
  }

  const inputClass = (field) =>
    `w-full bg-dark-800/50 border ${
      errors[field] ? 'border-red-500/50' : 'border-white/8'
    } rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 outline-none transition-all duration-300 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 hover:border-white/15`

  return (
    <section id="contact" className="section-padding relative bg-dark-950">
      <div className="absolute inset-0 bg-dots-pattern opacity-15" />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full opacity-8"
        style={{ background: 'radial-gradient(ellipse, #3b82f6, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="📬 Get In Touch"
          title={
            <>
              Start Your{' '}
              <span className="gradient-text">Next Project</span>
            </>
          }
          subtitle="Ready to transform your idea into reality? Fill in the form and our team will get back to you within 24 hours."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left - Contact Info */}
          <motion.div
            ref={leftRef}
            variants={slideInLeft}
            initial="hidden"
            animate={leftInView ? 'visible' : 'hidden'}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card rounded-2xl p-7 border border-white/5 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 font-display">Let's talk</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We'd love to hear about your project. Send us a message and we'll respond promptly to discuss how we can help.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  return (
                    <div key={info.label} className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${info.color}20`, border: `1px solid ${info.color}25` }}
                      >
                        <Icon size={18} style={{ color: info.color }} />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">{info.label}</div>
                        {info.href ? (
                          <a href={info.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-sm text-slate-300">{info.value}</span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Process steps */}
              <div className="pt-2 border-t border-white/5">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Our Process</p>
                <div className="space-y-3">
                  {['Discovery Call', 'Proposal & Estimate', 'Project Kickoff', 'Agile Development', 'Launch & Support'].map((step, i) => (
                    <div key={step} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-xs text-slate-400">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            ref={rightRef}
            variants={slideInRight}
            initial="hidden"
            animate={rightInView ? 'visible' : 'hidden'}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-2xl p-10 border border-emerald-500/20 text-center flex flex-col items-center gap-6 min-h-[400px] justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <HiCheckCircle size={32} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-display">Message Sent!</h3>
                  <p className="text-slate-400">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </div>
                <motion.button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary px-6 py-2.5 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  id="send-another-btn"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="glass-card rounded-2xl p-8 border border-white/5 space-y-5"
              >
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="name">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass('name')}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="email">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={inputClass('email')}
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={inputClass('phone')}
                      autoComplete="tel"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="projectDetails">
                    Project Details <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={form.projectDetails}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    rows={5}
                    className={`${inputClass('projectDetails')} resize-none`}
                  />
                  {errors.projectDetails && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.projectDetails}</p>
                  )}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center py-4 text-base"
                  whileHover={!loading ? { scale: 1.02 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                  id="contact-submit-btn"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <MdRocketLaunch size={18} />
                      Send Message
                      <HiArrowRight size={16} />
                    </>
                  )}
                </motion.button>

                <p className="text-center text-xs text-slate-600">
                  By submitting, you agree to our privacy policy. We respect your data and will never spam you.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
