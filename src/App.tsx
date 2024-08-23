import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Works from "./Pages/Works";
import Experience from "./Pages/Experience";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Education from "./Pages/Education";
import Skills from "./Components/Skills";
import "react-vertical-timeline-component/style.min.css";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="app grid min-h-screen relative font-itim">
      <NavBar />
      <Hero />
      <Works />
      <Skills />
      <About />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
