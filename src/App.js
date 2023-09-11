import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font main-bg ">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact/>
      <Footer />
      
    </main>
  );
}