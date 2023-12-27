import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Works from './Pages/Works'
import Experience from './Pages/Experience'
import Hero from './Pages/Hero'
import Services from './Components/Services'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Education from './Pages/Education'
import Skills from './Components/Skills'

function App() {
  return (
    <div className='app grid min-h-screen'>
      <NavBar />
      <Hero />
      <Services />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Works />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
