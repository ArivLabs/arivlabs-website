const AboutSection = () => {
  const experience = [
    {
      company: 'Silver Oak Health',
      role: 'Product Engineer (Founding Team)',
      description: 'Healthcare startup focused on mental health and employee wellbeing programs',
      focus: 'Healthcare, SaaS, Enterprise Solutions'
    },
    {
      company: '42Hertz (Acquired by Cisco)',
      role: 'Senior Software Engineer',
      description: 'Enterprise software consulting firm specializing in collaboration tools',
      focus: 'Enterprise Software, Collaboration, Consulting'
    },
    {
      company: 'Normalyze (Acquired by Proofpoint)',
      role: 'Senior Software Engineer',
      description: 'DSPM cybersecurity startup focused on data security posture management',
      focus: 'Cybersecurity, AI, Data Protection, DSPM, SaaS'
    }
  ]

  const skills = [
    'Full-Stack Development',
    'Cloud Architecture (AWS, Azure, GCP)',
    'AI & Machine Learning',
    'Cybersecurity & DSPM',
    'SaaS Platform Development',
    'Enterprise Software',
    'Team Leadership',
    'Technical Strategy'
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="px-4 sm:px-0">
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
                  <div key={index} className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#contact" className="btn-primary">
                Work With Me
              </a>
              <a href="mailto:varun@arivlabs.com" className="btn-secondary">
                Send Email
              </a>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div className="px-4 sm:px-0 mt-8 lg:mt-0">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Professional Journey</h3>
            <div className="space-y-6 sm:space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-primary-500 pl-4 sm:pl-6">
                  <h4 className="text-base sm:text-lg font-bold text-gray-900">{exp.role}</h4>
                  <h5 className="text-primary-600 font-semibold mb-2 text-sm sm:text-base">{exp.company}</h5>
                  <p className="text-gray-600 mb-3 text-sm sm:text-base leading-relaxed">{exp.description}</p>
                  <div className="inline-block bg-primary-50 text-primary-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {exp.focus}
                  </div>
                </div>
              ))}
            </div>

            {/* Current Status */}
            <div className="mt-6 sm:mt-8 bg-accent-50 rounded-lg p-4 sm:p-6">
              <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Currently</h4>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Senior Software Engineer at <span className="font-semibold">Cyberdesk GmbH</span> 
                (Germany-based Cybersecurity Startup) while building ArivLabs to help more 
                startups and enterprises scale their engineering teams.
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
