import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ContactSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const form = e.target as HTMLFormElement
      const formDataToSend = new FormData(form)
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString()
      })

      if (response.ok) {
        setSubmitStatus('success')
        
        // Track successful form submission in GA4
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'form_submit', {
            event_category: 'engagement',
            event_label: 'business_contact_form',
            form_type: 'full_business_contact',
            project_type: formData.projectType,
            budget_range: formData.budget,
            timeline: formData.timeline,
            value: 1
          })
        }
        
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
        
        // Track form submission error in GA4
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'form_error', {
            event_category: 'error',
            event_label: 'business_contact_form_error',
            form_type: 'full_business_contact'
          })
        }
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const projectTypes = [
    'Staff Augmentation',
    'Project Consulting',
    'CTO Advisory',
    'MVP Development',
    'Full Product Development',
    'Other'
  ]

  const budgetRanges = [
    'Startup Budget',
    'Small Project',
    'Medium Project', 
    'Large Project',
    'Enterprise Scale',
    'Ongoing Partnership'
  ]

  const timelines = [
    'ASAP',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    '12+ months',
    'Ongoing'
  ]

  return (
    <section id="contact" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-12 sm:mb-16 px-4 sm:px-0 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Ready to Scale Your Team?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Tell us about your project and we'll get back to you within 24 hours 
              with a custom proposal and next steps.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div className={`lg:col-span-1 transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-8'}`}>
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover-lift">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-6 h-6 text-primary-500 mr-4 mt-1">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <a href="mailto:varun@arivlabs.com" className="text-primary-600 hover:text-primary-700">
                        varun@arivlabs.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 text-primary-500 mr-4 mt-1">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Coverage</h4>
                      <p className="text-gray-600">US, Europe & Global</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 text-primary-500 mr-4 mt-1">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Response Time</h4>
                      <p className="text-gray-600">Within 24 hours</p>
                    </div>
                  </div>

                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Professional Network</h4>
                  <div className="flex items-center mb-6">
                    <div className="w-6 h-6 text-primary-500 mr-3">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <a 
                        href="https://www.linkedin.com/in/varunknair1/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary-600 hover:text-primary-700 font-medium transition-colors text-sm sm:text-base"
                      >
                        Connect on LinkedIn
                      </a>
                      <p className="text-gray-500 text-xs sm:text-sm">Professional networking & business inquiries</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Why Choose ArivLabs?</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      10+ years of experience
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Startup to enterprise experience
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Transparent pricing
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Flexible engagement models
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`lg:col-span-2 transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-8'}`}>
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover-lift">
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  {/* Netlify form detection */}
                  <input type="hidden" name="form-name" value="contact" />
                  {/* Honeypot field - hidden from users, catches bots */}
                  <div style={{ display: 'none' }}>
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 hover:border-primary-300 transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02] text-sm sm:text-base"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 hover:border-primary-300 transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02] text-sm sm:text-base"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 hover:border-primary-300 transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02] text-sm sm:text-base"
                      >
                        <option value="">Select Type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 hover:border-primary-300 transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02] text-sm sm:text-base"
                      >
                        <option value="">Select Budget</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 hover:border-primary-300 transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02] text-sm sm:text-base"
                      >
                        <option value="">Select Timeline</option>
                        {timelines.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="Tell us about your project, technical requirements, team size needs, and any specific challenges you're facing..."
                    />
                  </div>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <h4 className="text-green-800 font-medium">Project details sent successfully!</h4>
                          <p className="text-green-700 text-sm">Thank you for reaching out. We'll respond within 24 hours with a custom proposal.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <h4 className="text-red-800 font-medium">Failed to send project details</h4>
                          <p className="text-red-700 text-sm">Please try again or email us directly at varun@arivlabs.com</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn-primary btn-animate hover-glow flex-1 text-center flex items-center justify-center ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Send Project Details'
                      )}
                    </button>
                    <a
                      href="mailto:varun@arivlabs.com"
                      className="btn-secondary flex-1 text-center"
                    >
                      Email Directly
                    </a>
                  </div>

                  <p className="text-sm text-gray-500 text-center">
                    We'll respond within 24 hours with a custom proposal and next steps.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
