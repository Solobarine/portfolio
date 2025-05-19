import "react-vertical-timeline-component/style.min.css";

import Works from "../Pages/Works";
import Experience from "../Pages/Experience";
import Hero from "../Pages/Hero";
import About from "../Pages/About";
import Education from "../Pages/Education";
import Skills from "../Components/Skills";
import Contact from "../Pages/Contact";
import OpenSourceContributions from "../Pages/OpenSourceContributions";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Skills />
      <Works />
      <OpenSourceContributions />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
