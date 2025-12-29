import React, { useEffect, useRef, useState } from 'react'
import { RiCloseFill, RiMenuFill } from '@remixicon/react'
import { navItems } from '../constant/data'
import Button from './Button'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const headRef = useRef(null)
  const location = useLocation()

  const handleToggleMenu = () => setIsOpen(prev => !prev)

  // Scroll-based background
  useEffect(() => {
    const handleScroll = () => {
      // if NOT on search page, scroll controls header
      if (location.pathname !== '/search') {
        if (window.scrollY > 100) {
          headRef.current?.classList.add('active')
        } else {
          headRef.current?.classList.remove('active')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // run once on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  // Route-based override
  useEffect(() => {
    if (location.pathname === '/search') {
      headRef.current?.classList.add('active')
    } else if (window.scrollY < 100) {
      headRef.current?.classList.remove('active')
    }
  }, [location.pathname])

  return (
    <header className="header" ref={headRef}>
      <div className="container flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <img src="/images/Logo.png" alt="logo" width={115} height={59} />
        </Link>

        {/* Mobile Menu */}
        <nav className={`navbar ${isOpen ? 'active' : ''}`}>
          <button className="ml-auto mb-10" onClick={handleToggleMenu}>
            <RiCloseFill size={30} />
          </button>

          <ul className="flex flex-col flex-1 justify-center items-center gap-10">
            {navItems.map(item => (
              <li key={item.id}>
                <Link
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="nav-link text-lg font-medium transition-colors hover:text-sky-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button label="Get Started" className="secondary-btn" />
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={handleToggleMenu}>
          <RiMenuFill size={30} />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center">
          {navItems.map(item => (
            <li key={item.id}>
              <Link
                to={item.href}
                className="nav-link font-medium transition-colors hover:text-gray-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <Button label="Get Started" className="primary-btn" />
        </ul>

        {/* Overlay */}
        <div
          className={`overlay ${isOpen ? 'active' : ''}`}
          onClick={handleToggleMenu}
        />
      </div>
    </header>
  )
}

export default Header
