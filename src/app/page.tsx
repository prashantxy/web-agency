import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

