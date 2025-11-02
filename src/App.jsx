import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import PopularProperties from './components/PopularProperties.jsx'

const App = () => {
  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <PopularProperties/>
    </main>
    </>
  )
}

export default App
