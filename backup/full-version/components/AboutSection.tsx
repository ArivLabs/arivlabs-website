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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Varun K Nair
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              With close to a decade of experience in software engineering, I've helped startups 
              scale from early stage to acquisition, and enterprises build world-class products.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Core Expertise</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Work With Me
              </a>
              <a href="mailto:varun@arivlabs.com" className="btn-secondary">
                Send Email
              </a>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Professional Journey</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-primary-500 pl-6">
                  <h4 className="text-lg font-bold text-gray-900">{exp.role}</h4>
                  <h5 className="text-primary-600 font-semibold mb-2">{exp.company}</h5>
                  <p className="text-gray-600 mb-3">{exp.description}</p>
                  <div className="inline-block bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {exp.focus}
                  </div>
                </div>
              ))}
            </div>

            {/* Current Status */}
            <div className="mt-8 bg-accent-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">Currently</h4>
              <p className="text-gray-700">
                Senior Software Engineer at <span className="font-semibold">Cyberdesk GmbH</span> 
                (Germany-based Cybersecurity Startup) while building ArivLabs to help more 
                startups and enterprises scale their engineering teams.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
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
