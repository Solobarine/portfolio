import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Works from "./Pages/Works";
import Experience from "./Pages/Experience";
import Hero from "./Pages/Hero";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Education from "./Pages/Education";
import Skills from "./Components/Skills";
import "react-vertical-timeline-component/style.min.css";

function App() {
  return (
    <div className="app grid min-h-screen relative">
      <NavBar />
      <Hero />
      <Works />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
