import { useRef, useState, useEffect } from 'react';

export default function Skills() {
  const skillsRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  const skills = [
    { name: 'React', level: 90, color: '#61dafb' },
    { name: 'JavaScript', level: 88, color: '#f7df1e' },
    { name: 'Node.js', level: 82, color: '#68d391' },
    { name: 'MongoDB', level: 80, color: '#47a248' },
    { name: 'Express.js', level: 82, color: '#00D4FF' },
    { name: 'PostgreSQL', level: 70, color: '#336791' },
    { name: 'Tailwind CSS', level: 85, color: '#38bdf8' },
    { name: 'Java', level: 72, color: '#f89820' },
  ];

  const tools = ['Git', 'Postman', 'REST APIs', 'Spring Boot', 'HTML5', 'CSS3'];

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !animated) {
        setAnimated(true);
        setTimeout(() => {
          document.querySelectorAll('.skill-bar-fill').forEach(el => {
            el.style.width = el.dataset.width;
          });
        }, 200);
      }
    }, { threshold: 0.2 });
    if (skillsRef.current) obs.observe(skillsRef.current);
    return () => obs.disconnect();
  }, [animated]);

  return (
    <section id='skills' className="py-28 relative z-1" style={{ padding: '100px 0' }}>
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyan-400/2 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6">
        <div  className="reveal text-center mb-20">
          <span className="section-label text-sm tracking-widest">What I Work With</span>
          <h2 style={{ marginTop: '15px' }} className="font-space-grotesk font-bold text-5xl md:text-6xl mt-4">
            Skills & <span className="grad-text">Technologies</span>
          </h2>
          <p style={{ marginTop: '15px' }}  className="text-text-muted text-lg max-w-2xl mx-auto">
            Technologies I work with to build amazing digital experiences
          </p>
        </div>

<div style={{ marginTop: '15px' }} ref={skillsRef} className="grid md:grid-cols-2 gap-8 mb-24">
  {skills.map((s, i) => (
    <div key={s.name} className="glass-card rounded-xl p-8 reveal hover:border-cyan-400/30 transition-all" data-delay={i * 80}>
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold text-base flex items-center gap-3" style={{ color: s.color }}>
          <span className="text-2xl">▸</span>
          {s.name}
        </span>
        <span className="font-mono text-lg font-bold" style={{ color: s.color }}>
          {s.level}%
        </span>
      </div>
      <div className="skill-bar" style={{ height: '12px', borderRadius: '10px', background: 'rgba(0,0,0,0.05)' }}>
        <div 
          className="skill-bar-fill" 
          data-width={`${s.level}%`} 
          style={{ 
            background: `linear-gradient(90deg, ${s.color}66, ${s.color})`,
            width: animated ? `${s.level}%` : '0%',
            height: '12px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }} 
        />
      </div>
    </div>
  ))}
</div>

        <div style={{ marginTop: '15px' }} className="reveal text-center">
          <p className="text-text-muted text-base mb-6">Tools & More</p>
          <div style={{ marginTop: '15px' }} className="flex flex-wrap gap-3 justify-center">
            {tools.map(t => (
              <span key={t} className="skill-pill text-sm px-4 py-2">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}