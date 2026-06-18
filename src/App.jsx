import { useState,useEffect  } from 'react'
import './App.css'
import Nav from './components/Nav';
import Hero from './components/Hero';
import Skills from './components/Skill';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initParticles } from './utils/particles';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
    initParticles();
  }, []);

  useScrollReveal();

  return (
    <>
    <div className="w-full overflow-hidden relative">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
     
    </>
  )
}

export default App
