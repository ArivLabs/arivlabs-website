import { useParallax } from '../hooks/useScrollAnimation'

const HeroSection = () => {
  const { ref: parallaxRef, offset } = useParallax(0.3)

  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-accent-50 section-padding overflow-hidden gpu-accelerated">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Pillars */}
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-6 mb-8 animate-fade-in-up">
            {/* Secure */}
            <div className="flex items-center space-x-1 sm:space-x-3 px-2 sm:px-4 py-2 sm:py-3 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover-lift stagger-1 animate-scale-in">
              <div className="w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-800 font-semibold text-xs sm:text-base">Secure</span>
            </div>

            {/* Scalable */}
            <div className="flex items-center space-x-1 sm:space-x-3 px-2 sm:px-4 py-2 sm:py-3 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover-lift stagger-2 animate-scale-in">
              <div className="w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-primary-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <span className="text-gray-800 font-semibold text-xs sm:text-base">Scalable</span>
            </div>

            {/* Simple */}
            <div className="flex items-center space-x-1 sm:space-x-3 px-2 sm:px-4 py-2 sm:py-3 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover-lift stagger-3 animate-scale-in">
              <div className="w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-accent-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-800 font-semibold text-xs sm:text-base">Simple</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight animate-fade-in-up stagger-2">
            Scale Your Engineering Team with{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent animate-gradient">
              World-Class Talent
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0 animate-fade-in-up stagger-3">
            <strong>Secure. Scalable. Simple</strong> - ArivLabs provides boutique engineering services for startups and enterprises. 
            Get expert developers, architects, and technical leaders specializing in AI, 
            Cybersecurity, and SaaS development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0 animate-fade-in-up stagger-4">
            <a href="#contact" className="btn-primary btn-animate hover-glow">
              Get Your Quote
            </a>
            <a href="#services" className="btn-secondary btn-animate hover-lift">
              View Services
            </a>
          </div>

        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div 
          ref={parallaxRef}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float parallax-element"
          style={{ transform: `translateY(${offset * 0.5}px)` }}
        ></div>
        <div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float parallax-element"
          style={{ 
            transform: `translateY(${offset * 0.3}px)`,
            animationDelay: '1s'
          }}
        ></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary-400 rounded-full animate-float opacity-60" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-accent-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-secondary-400 rounded-full animate-float opacity-50" style={{ animationDelay: '2.5s' }}></div>
      </div>
    </section>
  )
}

export default HeroSection
