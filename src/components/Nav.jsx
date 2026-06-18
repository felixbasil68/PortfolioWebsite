import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiMail } from 'react-icons/fi';

export default function Nav({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const links = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 64; // Height of your nav
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-100 transition-all duration-400 ${
        scrolled ? 'bg-navy/90 backdrop-blur-xl border-b border-border' : ''
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative z-10">
          <a 
            href="#about" 
            onClick={(e) => handleScrollTo(e, 'about')}
            className="font-space-grotesk font-bold text-lg cursor-pointer"
          >
            <span className="text-cyan-400">Felix</span>
            <span className="text-text-muted">.dev</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ name, id }) => (
              <a 
                key={id} 
                href={`#${id}`}
                onClick={(e) => handleScrollTo(e, id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === id 
                    ? 'text-cyan-400' 
                    : 'text-text-muted hover:text-cyan-400'
                }`}
              >
                {name}
              </a>
            ))}
            <a href="mailto:felixbasil8@gmail.com" 
               className="bg-linear-to-r from-cyan-500 to-purple-800 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-cyan-400/30 transition-all hover:-translate-y-0.5 flex items-center gap-2">
              <FiMail /> Hire Me
            </a>
          </div>
          
          <button className="md:hidden text-text" onClick={() => setMenuOpen(o => !o)}>
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map(({ name, id }) => (
          <a 
            key={id} 
            href={`#${id}`}
            onClick={(e) => handleScrollTo(e, id)}
            className={`text-base font-medium py-2 border-b border-border ${
              activeSection === id ? 'text-cyan-400' : 'text-text-muted'
            }`}
          >
            {name}
          </a>
        ))}
      </div>
    </>
  );
}