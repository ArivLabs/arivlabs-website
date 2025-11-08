import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation'

const PricingSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation()
  const { ref: cardsRef, visibleItems: visibleCards } = useStaggeredAnimation(3, 200)
  // Professional SVG icon component
  const EngagementIcon = ({ type, className = "w-8 h-8" }: { type: string; className?: string }) => {
    const icons = {
      'clock': (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      'team': (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-1.1-.9-2-2-2s-2 .9-2 2V18H4zm5.5-2.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zM7.5 8.5C7.5 9.33 8.17 10 9 10s1.5-.67 1.5-1.5S9.83 7 9 7s-1.5.67-1.5 1.5z"/>
        </svg>
      ),
      'clipboard': (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      )
    }
    return icons[type as keyof typeof icons] || icons.clock
  }

  const engagementModels = [
    {
      title: 'Staff Augmentation',
      description: 'Extend your team with skilled engineers who integrate seamlessly',
      iconType: 'clock',
      features: [
        'Flexible engagement terms',
        'No long-term commitments',
        'Scale up or down as needed',
        'Perfect for variable workloads'
      ],
      benefits: [
        { benefit: 'Quick Ramp-up', description: 'Engineers ready in 1-2 weeks' },
        { benefit: 'Cost Effective', description: 'Competitive offshore rates' },
        { benefit: 'Quality Assured', description: 'Pre-vetted senior talent' }
      ]
    },
    {
      title: 'Dedicated Teams',
      description: 'Complete engineering pods working exclusively on your projects',
      iconType: 'team',
      features: [
        'Dedicated team members',
        'Consistent team composition',
        'Long-term partnership',
        'Preferred for ongoing development'
      ],
      benefits: [
        { benefit: 'Team Continuity', description: 'Same team, better results' },
        { benefit: 'Predictable Costs', description: 'Fixed monthly investment' },
        { benefit: 'Full Ownership', description: 'Your team, your priorities' }
      ]
    },
    {
      title: 'Project Delivery',
      description: 'End-to-end project execution with defined scope and timeline',
      iconType: 'clipboard',
      features: [
        'Fixed scope and timeline',
        'Milestone-based delivery',
        'Complete project ownership',
        'Perfect for MVPs and POCs'
      ],
      benefits: [
        { benefit: 'Predictable Outcome', description: 'Clear deliverables & timeline' },
        { benefit: 'Risk Mitigation', description: 'We own the delivery risk' },
        { benefit: 'Faster Time-to-Market', description: 'Experienced execution' }
      ]
    }
  ]

  return (
    <section id="pricing" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Flexible Engagement Models
          </h2>
          <p className="text-xl text-gray-600">
            Choose the engagement model that works best for your project. 
            We offer competitive rates with premium quality offshore development.
          </p>
        </div>

        {/* Engagement Model Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12" ref={cardsRef}>
          {engagementModels.map((model, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-lg p-8 card-hover hover-lift transition-all duration-500 ${
                visibleCards[index] ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${200 + index * 200}ms` }}
            >
              <div className="text-center mb-8">
                <div className="text-primary-600 mb-4 flex justify-center icon-bounce">
                  <EngagementIcon type={model.iconType} className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{model.title}</h3>
                <p className="text-gray-600">{model.description}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                <ul className="space-y-2">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                {model.benefits.map((benefit, idx) => (
                  <div key={idx} className="border-l-4 border-primary-500 pl-4 py-2">
                    <div className="font-semibold text-gray-900">{benefit.benefit}</div>
                    <div className="text-sm text-gray-600">{benefit.description}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-8 text-center hover-lift transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Scale Your Team?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every project is unique. We provide custom proposals based on your specific requirements, 
            timeline, and budget. Let's discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary btn-animate hover-glow">
              Get Custom Proposal
            </a>
            <a href="#contact" className="btn-secondary btn-animate hover-lift">
              Contact Us
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Trusted by startups and enterprises worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-400">
              <span>✓ No Setup Fees</span>
              <span>✓ Flexible Contracts</span>
              <span>✓ 24/7 Support</span>
              <span>✓ Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
