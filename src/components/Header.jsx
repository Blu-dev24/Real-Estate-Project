import React, { useEffect, useRef, useState } from 'react'
import { RiCloseFill, RiMenuFill } from '@remixicon/react';
import { navItems } from '../constant/data'
import Button from './Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headRef = useRef(null);

  const handleToggleMenu = () => setIsOpen(prev => !prev);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        headRef.current?.classList.add('active');
      } else {
        headRef.current?.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header" ref={headRef}>
      <div className="container flex items-center justify-between">

        {/* Logo */}
        <a href="#">
          <img src="/images/Logo.png" alt="logo" width={115} height={59} />
        </a>

        {/* Mobile Menu */}
        <nav className={`navbar ${isOpen ? 'active' : ''}`}>
          <button className="ml-auto mb-10" onClick={handleToggleMenu}>
            <RiCloseFill size={30} />
          </button>

          <ul className="flex flex-col flex-1 justify-center items-center gap-10">
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="nav-link text-lg font-medium transition-colors hover:text-sky-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <Button label="Get Started" className="secondary-btn" />
        </nav>

        {/* Mobile Toggle Button */}
        <button className="md:hidden" onClick={handleToggleMenu}>
          <RiMenuFill size={30} />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center">
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={item.href}
                className="nav-link font-medium transition-colors hover:text-gray-200"
              >
                {item.label}
              </a>
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
  );
};

export default Header;
