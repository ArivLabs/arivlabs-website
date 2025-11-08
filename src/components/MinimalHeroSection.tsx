const MinimalHeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-accent-50 section-padding overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Pillars */}
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-6 mb-8">
            {/* Secure */}
            <div className="flex items-center space-x-1 sm:space-x-3 px-2 sm:px-4 py-2 sm:py-3 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg">
              <div className="w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-800 font-semibold text-xs sm:text-base">Secure</span>
            </div>

            {/* Scalable */}
            <div className="flex items-center space-x-1 sm:space-x-3 px-2 sm:px-4 py-2 sm:py-3 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg">
              <div className="w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-primary-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <span className="text-gray-800 font-semibold text-xs sm:text-base">Scalable</span>
            </div>

            {/* Simple */}
            <div className="flex items-center space-x-1 sm:space-x-3 px-2 sm:px-4 py-2 sm:py-3 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg">
              <div className="w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-accent-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-800 font-semibold text-xs sm:text-base">Simple</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Varun K Nair
          </h1>
          
          <h2 className="text-lg sm:text-2xl md:text-3xl text-primary-600 font-semibold mb-4 sm:mb-6">
            Senior Software Engineer & Technical Consultant
          </h2>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            <strong>Secure. Scalable. Simple</strong> - Welcome to <strong>ArivLabs</strong>, the professional entity of 
            Varun K Nair, a senior software engineer with close to a decade of experience building enterprise software. 
            Currently working at <strong>CyberDesk GmbH</strong> (Germany-based cybersecurity startup), specializing in 
            cybersecurity and enterprise software development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
            <a href="#contact" className="btn-primary">
              Get in Touch
            </a>
            <a href="#about" className="btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>
    </section>
  )
}

export default MinimalHeroSection
