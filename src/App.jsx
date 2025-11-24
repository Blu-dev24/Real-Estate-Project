import React from 'react'
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

const App = () => {
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
