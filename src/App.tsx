import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="grad-line" />
        <Skills />
        <div className="grad-line" />
        <Projects />
        <div className="grad-line" />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
