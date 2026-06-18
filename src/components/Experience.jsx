export default function Experience() {
  const experiences = [
    {
      role: 'MERN Stack Developer Intern',
      company: 'Luminar Technolab',
      location: 'Kochi, India',
      period: 'Sep 2025 – Mar 2026',
      type: 'Internship',
      color: 'var(--cyan)',
      points: [
        'Developed web applications using MongoDB, Express.js, React, and Node.js.',
        'Built REST APIs and integrated frontend with backend services.',
      ],
    },
    {
      role: 'Technical Support Executive',
      company: 'Comstream Technologies',
      location: 'Kottayam, India',
      period: 'Sep 2023 – Nov 2023',
      type: 'Full-time',
      color: '#a78bfa',
      points: [
        'Provided technical support for VoIP Cloud PBX systems.',
        'Gained expertise in SIP protocols and VoIP technologies.',
      ],
    },
    {
      role: 'Java Full Stack Training',
      company: 'Spectrum Softtech Solutions',
      location: 'Kochi, India',
      period: 'Apr 2022 – Aug 2022',
      type: 'Training',
      color: 'var(--amber)',
      points: [
        'Built web applications using Java, Spring Boot, Hibernate, and MySQL.',
        'Learned backend development, database integration, and REST APIs.',
      ],
    },
  ];

  const education = {
    degree: 'B.Tech Computer Science',
    institution: 'College of Engineering, Kidagoor',
    location: 'Kottayam, India',
    period: '2017 – 2021',
  };

  return (
    <section id="experience" style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <span className="section-label">My Journey</span>
          <h2 className="section-title" style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '2.8rem', marginTop: '12px' }}>
            Experience & <span className="grad-text">Education</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="reveal" style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: 'var(--cyan)' }}>✦</span> Work Experience
            </h3>
            <div style={{ position: 'relative', paddingLeft: '40px' }}>
              <div className="timeline-line" />
              {experiences.map((exp, i) => (
                <div key={exp.company} className="reveal" data-delay={i * 120} style={{ marginBottom: '32px', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-31px', top: '6px', width: '10px', height: '10px', borderRadius: '50%', background: exp.color, border: '2px solid var(--navy)', boxShadow: `0 0 10px ${exp.color}`, flexShrink: 0 }} />
                  <div style={{ background: 'var(--navy-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '18px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.95rem', color: 'var(--text)' }}>{exp.role}</span>
                      <span style={{ background: `${exp.color}18`, border: `1px solid ${exp.color}33`, color: exp.color, padding: '2px 10px', borderRadius: '100px', fontSize: '0.72rem', fontFamily: 'JetBrains Mono', whiteSpace: 'nowrap' }}>{exp.type}</span>
                    </div>
                    <p style={{ color: 'var(--cyan)', fontSize: '0.82rem', marginBottom: '4px', fontWeight: 500 }}>{exp.company}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '12px', fontFamily: 'JetBrains Mono' }}>{exp.period} · {exp.location}</p>
                    <ul style={{ paddingLeft: '16px' }}>
                      {exp.points.map(pt => (
                        <li key={pt} style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.65, marginBottom: '4px' }}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="reveal" style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: 'var(--amber)' }}>✦</span> Education
            </h3>
            <div className="reveal" style={{ background: 'var(--navy-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '24px', marginBottom: '32px', borderLeft: '3px solid var(--amber)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}></div>
              <h4 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>{education.degree}</h4>
              <p style={{ color: 'var(--cyan)', fontSize: '0.85rem', marginBottom: '4px', fontWeight: 500 }}>{education.institution}</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'JetBrains Mono' }}>{education.period} · {education.location}</p>
            </div>

            <h3 className="reveal" style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#a78bfa' }}>✦</span> Languages
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { lang: 'English', level: 'Professional' },
                { lang: 'Malayalam', level: 'Native'  },
                { lang: 'Tamil', level: 'Working'  },
                { lang: 'Hindi', level: 'Basic' },
              ].map((l, i) => (
                <div key={l.lang} className="reveal" data-delay={i * 80} style={{ background: 'var(--navy-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ fontSize: '1.4rem', marginBottom: '6px' }}>{l.flag}</div>
                  <p style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text)' }}>{l.lang}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '8px' }}>{l.level}</p>
                  <div className="skill-bar">
                    <div style={{ height: '100%', background: 'linear-gradient(90deg, #a78bfa, var(--cyan))', borderRadius: '2px', width: `${l.pct}%`, transition: 'width 1.2s ease' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}