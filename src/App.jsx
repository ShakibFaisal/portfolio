import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-700 dark:text-gray-300 antialiased min-h-screen">
      <Header />
      <Hero />
      <About />
      
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
