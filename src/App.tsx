import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Helmet>
        <title>ArivLabs - Varun K Nair | IT Consulting & Cybersecurity Expert</title>
        <meta name="description" content="ArivLabs (Ariv, Arivu) by Varun K Nair - Expert IT consulting and cybersecurity services. Specializing in enterprise software, DSPM, SaaS development, staff augmentation, and CTO advisory." />
        <meta name="keywords" content="ArivLabs, Ariv, Arivu, Varun K Nair, IT consulting, cybersecurity, engineering consulting, staff augmentation, CTO advisory, startup engineering, enterprise software, DSPM, SaaS development, cybersecurity consulting" />
        <meta property="og:title" content="ArivLabs - IT Consulting & Cybersecurity by Varun K Nair" />
        <meta property="og:description" content="Expert IT consulting and cybersecurity services by Varun K Nair. ArivLabs specializes in enterprise software, DSPM, SaaS development, and technical leadership." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arivlabs.com" />
        <meta property="og:site_name" content="ArivLabs" />
        <link rel="canonical" href="https://arivlabs.com" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
