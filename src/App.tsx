import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Helmet>
        <title>ArivLabs - Boutique Engineering Services for Startups & Enterprises</title>
        <meta name="description" content="ArivLabs provides world-class engineering talent for startups and enterprises. Staff augmentation, project consulting, and CTO advisory services with expertise in AI, Cybersecurity, and SaaS." />
        <meta name="keywords" content="engineering consulting, staff augmentation, CTO advisory, startup engineering, enterprise software, AI development, cybersecurity, SaaS development" />
        <meta property="og:title" content="ArivLabs - Boutique Engineering Services" />
        <meta property="og:description" content="Scale your engineering team with world-class talent. Specializing in AI, Cybersecurity, and SaaS development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arivlabs.com" />
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
