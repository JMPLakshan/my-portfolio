import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Achievements />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
