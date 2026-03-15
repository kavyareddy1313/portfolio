import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Achievements from './sections/Achievements';
import Extracurricular from './sections/Extracurricular';
import Education from './sections/Education';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="app">
      <BackgroundEffects />
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Achievements />
        <Extracurricular />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
