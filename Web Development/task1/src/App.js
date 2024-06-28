import "./App.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import ScrollToTop from "./helper/ScrollToTop";
import Footer from "./components/Footer";
import "./css/card.css";
import "./css/globals.css";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Blogs from "./components/Certifications";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <>
      <div className="App min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <Navbar />
        <HeroSection />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Blogs />
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
