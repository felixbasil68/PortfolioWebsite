import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiMail } from 'react-icons/fi';

export default function Nav({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  //  section on scroll
  useEffect(() => {
    const sections = ['home', 'skills', 'about', 'projects', 'contact'];
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
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'About Me', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 100;
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
      <div id="home" className="nav-spacer"></div>
      <nav className={`pill-nav fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl ${scrolled ? 'scrolled' : ''}`}>
        <div className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 flex items-center justify-between gap-2 sm:gap-4">
          
       
          <a 
            href="#home" 
            onClick={(e) => handleScrollTo(e, 'home')}
            className="brand-text"
          >
            <span className="brand-cyan">Felix.</span>
            <span className="brand-muted">Dev</span>
          </a>
          
          <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
            {links.map(({ name, id }) => (
              <a 
                key={id} 
                href={`#${id}`}
                onClick={(e) => handleScrollTo(e, id)}
                className={`nav-link ${activeSection === id ? 'active' : ''}`}
              >
                {name}
              </a>
            ))}
          </div>
          
          {/* Hire Me Button */}
          <a 
            href="mailto:felixbasil8@gmail.com" 
            className="hire-btn"
          >
            <FiMail className="text-sm sm:text-base" /> 
            <span>Hire Me</span>
          </a>      
          {/* Mobile Menu */}
          <button 
            className="hamburger-btn md:hidden" 
            onClick={() => setMenuOpen(o => !o)}
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu fixed top-20 left-4 right-4 md:hidden z-40 ${menuOpen ? 'open' : 'closed'}`}>
        <div className="flex flex-col px-4 py-4 gap-1">
          {links.map(({ name, id }) => (
            <a 
              key={id} 
              href={`#${id}`}
              onClick={(e) => handleScrollTo(e, id)}
              className={`mobile-link ${activeSection === id ? 'active' : ''}`}
            >
              {name}
            </a>
          ))}
          <a 
            href="mailto:felixbasil8@gmail.com" 
            className="mobile-hire-btn"
          >
            <FiMail /> Hire Me
          </a>
        </div>
      </div>
    </>
  );
}