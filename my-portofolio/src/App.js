// src/App.js
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CodingProfiles from "./components/CodingProfiles";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <CodingProfiles />
      <Achievements />
      <Certifications />
      <Resume />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
