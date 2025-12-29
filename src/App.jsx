import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
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
import Search from './components/Search.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'

/* ---------- Layout (Router Context Lives Here) ---------- */
const Layout = () => (
  <>
    <Header />
    <main>
      <Outlet />
      <Testimonials />
    </main>
    <Footer />
  </>
)

/* ---------- Router ---------- */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Hero /> },
      { path: 'about', element: <About /> },
      { path: 'properties', element: <PopularProperties /> },
      { path: 'services', element: <Services /> },
      { path: 'team', element: <Team /> },
      { path: 'blog', element: <Blog /> },
      { path: 'contact', element: <Cta /> },
      { path: 'search', element: <Search /> },
    ],
  },
])

/* ---------- App ---------- */
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      easing: 'ease-out-cubic',
    })
  }, [])

  return <RouterProvider router={router} />
}

export default App
