import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowUp } from 'react-icons/hi'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-6 z-50 w-11 h-11 rounded-xl flex items-center justify-center shadow-lg cursor-pointer group"
          style={{
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            boxShadow: '0 4px 20px rgba(59, 130, 246, 0.35)',
          }}
          whileHover={{ scale: 1.1, boxShadow: '0 8px 30px rgba(59, 130, 246, 0.5)' }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
          id="scroll-to-top-btn"
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <HiArrowUp size={18} className="text-white" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
