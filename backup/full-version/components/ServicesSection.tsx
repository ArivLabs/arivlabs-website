const ServicesSection = () => {
  const services = [
    {
      icon: '👥',
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
      icon: '🚀',
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
      icon: '🏗️',
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
      icon: '🎯',
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
    { name: 'AI & Machine Learning', icon: '🤖' },
    { name: 'Cybersecurity', icon: '🔒' },
    { name: 'SaaS Development', icon: '☁️' },
    { name: 'Enterprise Software', icon: '🏢' },
    { name: 'Cloud Architecture', icon: '⚡' },
    { name: 'DevOps & Infrastructure', icon: '🔧' }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Engineering Services That Scale
          </h2>
          <p className="text-xl text-gray-600">
            From staff augmentation to complete project delivery, we provide the engineering 
            expertise your startup or enterprise needs to succeed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Expertise Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Technical Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {expertise.map((skill, index) => (
              <div key={index} className="bg-primary-50 rounded-lg p-4 text-center hover:bg-primary-100 transition-colors duration-200">
                <div className="text-2xl mb-2">{skill.icon}</div>
                <div className="text-sm font-medium text-gray-700">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary text-lg px-8 py-4">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
