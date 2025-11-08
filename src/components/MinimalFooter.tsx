import Logo from './Logo'

const MinimalFooter = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo size="sm" color="white" />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              <strong className="text-white">Secure. Scalable. Simple.</strong><br />
              ArivLabs is the professional entity of Varun K Nair, 
              Senior Software Engineer specializing in cybersecurity and enterprise software.
            </p>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ArivLabs. All rights reserved.
            </p>
          </div>

          {/* Contact & Links */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold mb-4 text-lg">Get in Touch</h3>
            <div className="space-y-2 text-gray-300">
              <div>
                <a href="mailto:varun@arivlabs.com" className="hover:text-white transition-colors">
                  varun@arivlabs.com
                </a>
              </div>
              <div className="text-sm">
                Currently: Senior Software Engineer at Cyberdesk GmbH
              </div>
              <div className="text-sm">
                Professional software engineer
              </div>
            </div>
            
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>Professional consulting through ArivLabs • Based in India • Available globally</p>
        </div>
      </div>
    </footer>
  )
}

export default MinimalFooter
