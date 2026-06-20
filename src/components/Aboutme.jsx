import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '1+', label: 'Year Experience' },
    { number: '10+', label: 'Projects Done' },
  ];

  const interests = [
    'Web Development',
    'UI/UX Design',
    'Open Source',
    'Photography',
    'Traveling',
    'Reading'
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="min-h-screen py-16 px-4 flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className={`text-center mb-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <span className="section-label inline-block mb-2">About Me</span>
          <h2 style={{ marginTop: '10px' }}  className="text-3xl sm:text-4xl md:text-5xl font-bold font-space-grotesk">
            <span  className="text-white">Know </span>
            <span className="text-cyan-400">Who I Am</span>
          </h2>
          <div style={{ marginTop: '10px' }}  className="w-20 h-1 bg-linear-to-r from-cyan-400 to-purple-600 mx-auto mt-3 rounded-full"></div>
        </div>

        <div style={{ marginTop: '10px' }}  className="grid lg:grid-cols-5 gap-5">
          {/* Main Profile Card */}
          <div 
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-navy-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 md:p-8 h-full hover:border-cyan-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
              
              {/* Title */}
              <div style={{ marginTop: '10px' }}  className="mb-4">
                <h3 className="text-xl md:text-2xl font-bold font-space-grotesk">
                  <span className="text-white">Hi, I'm Felix Basil</span>
                </h3>
                <p s  className="text-cyan-400 font-medium text-sm mt-1">Full Stack Developer</p>
              </div>

              {/* Description */}
              <div style={{ marginTop: '10px' }}  className="space-y-3 text-text-muted leading-relaxed text-sm md:text-base">
                <p>
                  I'm a passionate <span className="text-cyan-400 font-medium">Full Stack Developer</span> 
                  with a love for creating beautiful, functional, and user-centered digital experiences. 
                  I specialize in building modern web applications using <span className="text-cyan-400 font-medium">React</span>, 
                  <span className="text-cyan-400 font-medium"> Next.js</span>, and 
                  <span className="text-cyan-400 font-medium"> Node.js</span>.
                </p>
                
                <p>
                  As a <span className="text-cyan-400 font-semibold">fresher with 1+ year of experience</span>, 
                  I've worked on various projects that have helped me grow as a developer. I'm constantly 
                  learning and exploring new technologies to build better solutions. My approach combines 
                  clean code with thoughtful design to create experiences that users love.
                </p>

                <p>
                  I'm passionate about staying up-to-date with the latest technologies and best practices 
                  in the industry. When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or learning new skills to enhance my development 
                  capabilities.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Cards */}
          <div style={{ marginTop: '10px' }}  className="lg:col-span-2 space-y-4">
            <div 
              className={`bg-navy-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-5 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              } hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10`}
            >
              <h4  className="text-xs font-semibold text-cyan-400 mb-2.5 font-space-grotesk">Interests</h4>
              <div style={{ marginTop: '10px' }}  className="flex flex-wrap gap-1.5">
                {interests.map((interest, index) => (
                  <span 
                    key={index}
                    className="skill-pill text-xs px-3 py-1 transition-all duration-200 hover:scale-105 hover:bg-cyan-400/20 hover:border-cyan-400/40"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}