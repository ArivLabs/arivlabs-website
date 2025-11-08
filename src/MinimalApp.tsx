import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import MinimalHomePage from './pages/MinimalHomePage'
import MinimalHeader from './components/MinimalHeader'
import MinimalFooter from './components/MinimalFooter'

function MinimalApp() {
  return (
    <>
      <Helmet>
        <title>Varun K Nair - ArivLabs | Senior Software Engineer & Technical Consultant</title>
        <meta name="description" content="Varun K Nair - Secure. Scalable. Simple. Senior Software Engineer at CyberDesk GmbH. Professional entity ArivLabs specializing in cybersecurity and enterprise software." />
        <meta name="keywords" content="Varun K Nair, ArivLabs, software engineer, cybersecurity, enterprise software, Cyberdesk, DSPM, data protection" />
        <meta property="og:title" content="Varun K Nair - ArivLabs | Senior Software Engineer" />
        <meta property="og:description" content="Secure. Scalable. Simple. Senior Software Engineer specializing in cybersecurity and enterprise software development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arivlabs.com" />
        <meta property="og:image" content="https://arivlabs.com/logo_black_transparent.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Varun K Nair - ArivLabs | Senior Software Engineer" />
        <meta name="twitter:description" content="Secure. Scalable. Simple. Senior Software Engineer specializing in cybersecurity and enterprise software development." />
        <meta name="twitter:image" content="https://arivlabs.com/logo_black_transparent.png" />
        <link rel="canonical" href="https://arivlabs.com" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <MinimalHeader />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MinimalHomePage />} />
          </Routes>
        </main>
        <MinimalFooter />
      </div>
    </>
  )
}

export default MinimalApp
