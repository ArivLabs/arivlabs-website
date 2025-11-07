const MinimalAboutSection = () => {
  const experience = [
    {
      company: 'Cyberdesk GmbH',
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
      description: 'Enterprise software consulting firm specializing in collaboration tools',
      focus: 'Enterprise Software, Collaboration'
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
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About ArivLabs & Varun K Nair
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ArivLabs is my professional entity. I'm currently a Senior Software Engineer at Cyberdesk GmbH 
              focused on cybersecurity and enterprise software development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - About */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Background</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With close to a decade of experience in software engineering, I've helped startups scale from early stage 
                to acquisition, and enterprises build world-class products. I specialize in cybersecurity and 
                enterprise software development.
              </p>
              
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Core Expertise</h4>
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

              <div className="bg-primary-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">Current Status</h4>
                <p className="text-gray-700">
                  <strong>Primary Role:</strong> Senior Software Engineer at Cyberdesk GmbH<br />
                  <strong>Professional Entity:</strong> ArivLabs<br />
                  <strong>Focus:</strong> Cybersecurity and Enterprise Software
                </p>
              </div>
            </div>

            {/* Right Column - Experience */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Professional Journey</h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-6 pb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-900">{exp.role}</h4>
                      <span className="text-sm text-primary-600 font-medium">{exp.period}</span>
                    </div>
                    <h5 className="text-primary-600 font-semibold mb-2">{exp.company}</h5>
                    <p className="text-gray-600 mb-3 text-sm">{exp.description}</p>
                    <div className="inline-block bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                      {exp.focus}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-20 text-center max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">About ArivLabs</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                ArivLabs serves as the professional entity of Varun K Nair, a Senior Software Engineer 
                specializing in cybersecurity and enterprise software development. Currently focused on his role at 
                Cyberdesk GmbH, building innovative security solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MinimalAboutSection
