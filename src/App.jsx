import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Experience />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
