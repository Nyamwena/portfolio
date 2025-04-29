import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Community from './components/Community';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Community />
        <Testimonials />
        <Blog />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;