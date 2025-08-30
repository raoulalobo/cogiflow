'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Zap } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Détection du scroll pour ajuster l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fermer le menu mobile lors du redimensionnement de l'écran
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' 
        : 'bg-white/80 backdrop-blur-md border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-4'
        }`}>
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className={`font-bold gradient-text transition-all duration-300 ${
              scrolled ? 'text-xl' : 'text-2xl'
            }`}>FlowTech</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 transition-all duration-200 font-medium py-2 px-3 rounded-lg hover:bg-primary-50 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button 
              size={scrolled ? "default" : "lg"} 
              className={`font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                scrolled ? 'px-4 py-2 text-sm' : 'px-6 py-3'
              }`}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute h-6 w-6 transition-all duration-300 transform ${
                  isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                }`} />
                <X className={`absolute h-6 w-6 transition-all duration-300 transform ${
                  isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}>
          <nav className="flex flex-col space-y-2">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 font-medium px-4 py-3 rounded-lg transform ${
                  isMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className={`pt-4 transform transition-all duration-300 ${
              isMenuOpen 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-4 opacity-0'
            }`} style={{
              transitionDelay: isMenuOpen ? `${navigation.length * 50}ms` : '0ms'
            }}>
              <Button size="lg" className="w-full font-semibold transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}