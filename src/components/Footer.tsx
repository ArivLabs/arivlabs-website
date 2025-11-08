import Logo from './Logo'

import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Footer = () => {
  const { ref: footerRef, isVisible } = useScrollAnimation({ threshold: 0.2 })
  return (
    <footer className="bg-gray-900 text-white" ref={footerRef}>
      <div className="container-custom py-12">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo size="sm" color="white" />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              <strong className="text-white">Secure. Scalable. Simple.</strong><br />
              Boutique engineering services for startups and enterprises. 
              We help you scale your engineering teams with world-class talent 
              specializing in AI, Cybersecurity, and SaaS development.
            </p>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ArivLabs. All rights reserved.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">Staff Augmentation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Project Consulting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">CTO Advisory</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">MVP Development</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="mailto:varun@arivlabs.com" className="hover:text-white transition-colors">
                  varun@arivlabs.com
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Get Quote
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>Built with ❤️ for startups and enterprises worldwide</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
