const ServicesSection = () => {
  // Professional SVG icon component
  const ServiceIcon = ({ type, className = "w-8 h-8" }: { type: string; className?: string }) => {
    const icons = {
      'staff': (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 7c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2 3c-1.1 0-2 .9-2 2v6h4v-6c0-1.1-.9-2-2-2zM8 7c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zM6 10c-1.1 0-2 .9-2 2v6h4v-6c0-1.1-.9-2-2-2zM12 1C8.14 1 5 4.14 5 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
        </svg>
      ),
      'rocket': (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.44 5.58s2.12.21 4.41.21c.81 0 1.63-.02 2.44-.06L9.19 6.35zM11.17 17s-3.29-1.4-5.58-3.44l5.73-3.41c-.04.81-.06 1.63-.06 2.44 0 2.29.21 4.41.21 4.41z"/>
          <path d="M14.77 2.52c1.92-1.92 5.05-1.92 6.97 0s1.92 5.05 0 6.97L19.45 12l-1.06-1.06 2.29-2.29c1.17-1.17 1.17-3.07 0-4.24s-3.07-1.17-4.24 0L14.15 6.7 13.09 5.64l1.68-3.12z"/>
        </svg>
      ),
      'building': (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
        </svg>
      ),
      'target': (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      ),
      'cpu': (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      'shield': (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.8C8,12.2 8.6,11.7 9.2,11.7V10.2C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V11.5H13.5V9.5C13.5,8.7 12.8,8.2 12,8.2Z"/>
        </svg>
      ),
      'cloud': (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </svg>
      ),
      'server': (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 1h16c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2zm0 8h16c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2zm2 2v2h2v-2H6zm0-8v2h2V3H6z"/>
        </svg>
      ),
      'lightning': (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>
        </svg>
      ),
      'cog': (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/>
        </svg>
      )
    }
    return icons[type as keyof typeof icons] || icons.cpu
  }

  const services = [
    {
      iconType: 'staff',
      title: 'Staff Augmentation',
      description: 'Scale your team quickly with pre-vetted engineers. From junior to senior levels, we provide developers who integrate seamlessly with your existing team.',
      features: [
        'Pre-vetted engineers',
        'Seamless integration',
        'Flexible scaling',
        'Direct team management'
      ]
    },
    {
      iconType: 'rocket',
      title: 'MVP Development',
      description: 'Rapid MVP and POC development to validate your ideas and get to market fast. Perfect for startups looking to test product-market fit.',
      features: [
        'Rapid prototyping',
        'Market validation focus',
        'Scalable architecture',
        'Fast time-to-market'
      ]
    },
    {
      iconType: 'building',
      title: 'Project Consulting',
      description: 'End-to-end project delivery from concept to enterprise solutions. We handle the complete development lifecycle with dedicated project teams.',
      features: [
        'Full-stack solutions',
        'Agile methodology',
        'Quality assurance',
        'Complete project ownership'
      ]
    },
    {
      iconType: 'target',
      title: 'CTO Advisory',
      description: 'Strategic technical leadership for startups and growing companies. Get expert guidance on architecture, team building, and technology decisions.',
      features: [
        'Technical strategy',
        'Architecture review',
        'Team building guidance',
        'Technology roadmaps'
      ]
    }
  ]

  const expertise = [
    { name: 'Cybersecurity', iconType: 'shield' },
    { name: 'SaaS Development', iconType: 'cloud' },
    { name: 'Enterprise Software', iconType: 'server' },
    { name: 'Cloud Architecture', iconType: 'lightning' },
    { name: 'DevOps & Infrastructure', iconType: 'cog' },
    { name: 'AI & Machine Learning', iconType: 'cpu' }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Engineering Services That Scale
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            From staff augmentation to complete project delivery, we provide the engineering 
            expertise your startup or enterprise needs to succeed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20 px-4 sm:px-0">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-primary-600 mb-3 sm:mb-4">
                <ServiceIcon type={service.iconType} className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Expertise Section */}
        <div className="text-center px-4 sm:px-0">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Our Technical Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {expertise.map((skill, index) => (
              <div key={index} className="bg-primary-50 rounded-lg p-3 sm:p-4 text-center hover:bg-primary-100 transition-colors duration-200">
                <div className="text-primary-600 mb-1 sm:mb-2 flex justify-center">
                  <ServiceIcon type={skill.iconType} className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-700">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12 px-4 sm:px-0">
          <a href="#contact" className="btn-primary">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
