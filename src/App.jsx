import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Technologies from './components/Technologies'
import WhyChooseUs from './components/WhyChooseUs'
import About from './components/About'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`min-h-screen bg-dark-950 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Technologies />
        <WhyChooseUs />
        <About />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
