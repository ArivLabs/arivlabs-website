import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg backdrop-blur-md bg-white/95' : 'shadow-sm'
    } animate-fade-in-up`}>
      <nav className="container-custom">
        <div className="flex justify-between items-center py-6">
          {/* Logo - Responsive sizing */}
          <Link to="/" className="flex items-center">
            {/* Desktop: Larger logo */}
            <div className="hidden md:block">
              <Logo size="lg" />
            </div>
            {/* Tablet: Medium logo */}
            <div className="hidden sm:block md:hidden">
              <Logo size="md" />
            </div>
            {/* Mobile: Smaller but still prominent logo */}
            <div className="block sm:hidden">
              <Logo size="md" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${100 + index * 100}ms` }}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary btn-animate hover-glow animate-fade-in-up"
              style={{ animationDelay: '500ms' }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
