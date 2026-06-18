import { motion } from 'framer-motion'
import Logo from './Logo'
import MsmeBadge from './MsmeBadge'
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
} from 'react-icons/hi'
import { contactCards } from '../config/site'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  { label: 'Web Design & Development', href: '#services' },
  { label: 'Custom Software Development', href: '#services' },
  { label: 'Ecommerce Solutions', href: '#services' },
  { label: 'API Design & Integration', href: '#services' },
  { label: 'UI/UX Design', href: '#services' },
]

const contactInfo = [
  { icon: HiMail, ...contactCards[0] },
  { icon: HiPhone, ...contactCards[1] },
  { icon: HiLocationMarker, ...contactCards[2] },
]

const handleNavClick = (href) => {
  const target = document.querySelector(href)
  if (target) target.scrollIntoView({ behavior: 'smooth' })
}

const Footer = () => {
  return (
    <footer className="relative bg-dark-950 border-t border-white/5 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-5"
        style={{ background: 'radial-gradient(ellipse, #3b82f6, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Company Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
              className="flex items-center gap-3 group w-fit"
            >
              <Logo size={40} />
              <div className="flex flex-col">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-white text-base leading-tight font-display">
                    InnVora
                  </span>
                  <MsmeBadge />
                </div>
                <span className="text-xs text-slate-500 leading-tight tracking-wide">
                  Technologies
                </span>
              </div>
            </a>

            {/* Description */}
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              A modern technology company building innovative software solutions and delivering reliable IT services that help businesses grow in the digital era.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className="group flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(service.href) }}
                    className="group flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest">Contact</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, i) => {
                const Icon = info.icon
                return (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={13} className="text-blue-400" />
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm text-slate-500 hover:text-white transition-colors leading-relaxed"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-sm text-slate-500 leading-relaxed">{info.value}</span>
                    )}
                  </li>
                )
              })}
            </ul>

            {/* Mini CTA */}
            <div className="pt-2">
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
                whileHover={{ x: 3 }}
                id="footer-cta-link"
              >
                Start a project
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-7">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600 text-center sm:text-left">
              © 2026 InnVora Technologies. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs text-slate-700 hover:text-slate-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
