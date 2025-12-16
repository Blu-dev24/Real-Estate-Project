import React, { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import PopularProperties from './components/PopularProperties.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Team from './components/Team.jsx'
import Testimonials from './components/Testimonials.jsx'
import Blog from './components/Blog.jsx'
import Cta from './components/Cta.jsx'
import Footer from './components/Footer.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'



const App = () => {


  useEffect(() => {
    AOS.init(
      {
        duration: 800,
        offset: 120,
        easing: 'ease-out-cubic',
        // once: true,
      }
    )
  }, [])

  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <PopularProperties/>
      <Services/>
      <About/>
      <Team/>
      <Testimonials/>
      <Blog/>
      <Cta/>
    </main>
    <Footer/>
    </>
  )
}

export default App
