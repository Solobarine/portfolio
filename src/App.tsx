import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CaseStudies from "./Pages/CaseStudies";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import CaseStudy from "./Pages/CaseStudy";
import NotFound from "./Pages/NotFound";
import ScrollToHash from "./hooks/scroll";

function App() {
  return (
    <div className="app grid min-h-screen relative max-w-screen overflow-x-hidden font-itim text-neutral-700 dark:text-neutral-200 dark:bg-neutral-700">
      <NavBar />
      <ScrollToHash />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:id" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
