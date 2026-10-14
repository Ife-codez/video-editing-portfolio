import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Process from './components/Process'
import Faq from './components/Faq'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Process />
        <Faq />
        <Contact />
      </main>
    </>
  )
}