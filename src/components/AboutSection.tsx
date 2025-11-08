import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation'
import MaskedText from './MaskedText'
import { COMPANY_NAMES } from '../constants/companyNames'

const AboutSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation()
  const { ref: experienceRef, visibleItems: visibleExperience } = useStaggeredAnimation(4, 200)
  const experience = [
    {
      company: COMPANY_NAMES.CURRENT_EMPLOYER,
      role: 'Senior Software Engineer',
      period: '2025 - Present',
      description: 'Germany-based cybersecurity startup focused on innovative security solutions',
      focus: 'Cybersecurity, Enterprise Software'
    },
    {
      company: 'Normalyze (Acquired by Proofpoint)',
      role: 'Senior Software Engineer',
      period: '2023 - 2025',
      description: 'DSPM cybersecurity startup focused on data security posture management',
      focus: 'Cybersecurity, Data Protection'
    },
    {
      company: '42Hertz (Acquired by Cisco)',
      role: 'Senior Software Engineer',
      period: '2017 - 2023',
      description: 'Enterprise software consulting firm acquired by Cisco. Post-acquisition: Cisco WebEx Integrations Team and Security Business Group',
      focus: 'Enterprise Software, Collaboration, Security'
    },
    {
      company: 'Silver Oak Health',
      role: 'Product Engineer (Founding Team)',
      period: '2016 - 2017',
      description: 'Healthcare startup focused on mental health and employee wellbeing programs',
      focus: 'Healthcare, SaaS, Enterprise Solutions'
    }
  ]

  const skills = [
    'Full-Stack Development',
    'Cloud Architecture (AWS, Azure, GCP)',
    'Cybersecurity & DSPM',
    'SaaS Platform Development',
    'Enterprise Software',
    'Team Leadership',
    'Technical Strategy',
    'Data Protection'
  ]

  return (
    <section id="about" className="section-padding bg-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className={`px-4 sm:px-0 transition-all duration-1000 ${isVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-8'}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Meet Varun K Nair
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              With close to a decade of experience in software engineering, I've helped startups 
              scale from early stage to acquisition, and enterprises build world-class products.
            </p>
            
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Core Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center text-gray-700 transition-all duration-500 ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <svg className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              <a href="#contact" className="btn-primary btn-animate hover-glow">
                Work With Me
              </a>
              <a href="mailto:varun@arivlabs.com" className="btn-secondary btn-animate hover-lift">
                Send Email
              </a>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div className={`px-4 sm:px-0 mt-8 lg:mt-0 transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-8'}`}>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Professional Journey</h3>
            <div className="space-y-6 sm:space-y-8" ref={experienceRef}>
              {experience.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative pl-8 border-l-2 border-primary-200 card-hover transition-all duration-500 ${
                    visibleExperience[index] ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${400 + index * 200}ms` }}
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-sm text-gray-500">{item.period}</p>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{item.role}</h4>
                  <p className="text-primary-600 font-medium mb-2">
                    <MaskedText text={item.company} />
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base mb-2">{item.description}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Focus: {item.focus}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">Current Status</h4>
              <p className="text-gray-700 text-sm sm:text-base">
                <strong>Primary Role:</strong> Senior Software Engineer at <MaskedText text="CyberDesk GmbH" className="inline" /><br />
                <strong>Professional Entity:</strong> ArivLabs<br />
                <strong>Focus:</strong> Cybersecurity and Enterprise Software
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center max-w-4xl mx-auto px-4 sm:px-0">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Our Mission</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              To bridge the gap between ambitious startups and world-class engineering talent. 
              We believe every company deserves access to premium engineering resources that 
              can help them build, scale, and succeed in today's competitive landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
