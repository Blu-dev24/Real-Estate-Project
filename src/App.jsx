import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import PopularProperties from './components/PopularProperties.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Team from './components/Team.jsx'
import Testimonials from './components/Testimonials.jsx'

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
    </main>
    </>
  )
}

export default App
