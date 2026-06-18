import { FiExternalLink } from 'react-icons/fi';
import { useState } from 'react';
import urbanstitch from '../Images/urbanstitch.png'
import eadmin from '../Images/E-admin dashboard.png'
import tesla from '../Images/tesla clone.png'
import skin from '../Images/skincare.png'
import audi from '../Images/audi.png'
import ems from '../Images/ems.png'
import human from '../Images/human.png'
export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: 'UrbanStitch',
      desc: 'Full-stack e-commerce platform with product browsing, ordering, payment integration, and admin approval.',
      url: 'https://e-commerece-app-user.vercel.app/',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
     
      image: urbanstitch,
    },
     {
      title: 'E-Admin Dashboard',
      desc: 'Comprehensive admin dashboard with product management, analytics, and real-time data visualization.',
      url: 'https://e-admin-nine.vercel.app/',
      tags: ['React', 'Analytics', 'Dashboard'],
      
      image: eadmin,
    },
   
    {
      title: 'Resume Builder',
      desc: 'Create unlimited resumes and cover letters with easy editing, job tracking, and application management tools.',
      url: 'https://resume-builder-gamma-lyart.vercel.app/',
      tags: ['React', 'Tools', 'Productivity'],
      
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop',
    },
     {
      title: 'Tesla Clone',
      desc: 'Sleek Tesla clone site showcasing electric vehicles with modern UI and interactive features.',
      url: 'https://tesla-clonesite.vercel.app/',
      tags: ['React', 'CSS', 'Clone'],
     
      image: tesla,
    },
    {
      title: 'Aurora Skincare',
      desc: 'Elegant skincare brand website with smooth animations, product showcase, and modern design system.',
      url: 'https://skincare-webiste.vercel.app/',
      tags: ['React', 'CSS', 'Animation'],

      image: skin,
    },

    {
      title: 'Audi Evolution',
      desc: 'Interactive timeline of Audi car generations through the years with rich visual storytelling.',
      url: 'https://audi-evolution-website.vercel.app/',
      tags: ['React', 'Animation', 'Timeline'],
  
      image: audi,
    },
     {
      title: 'EMS Dashboard',
      desc: 'Employee management system with role-based access, analytics dashboard, and real-time data handling.',
      url: 'https://ems-indol-psi.vercel.app/',
      tags: ['React', 'Tailwind', 'REST API'],
      icon: '📊',
      image: ems,
    },
   
   
    {
      title: 'Human Evolution',
      desc: 'Educational journey through human evolution history with immersive animations and interactive content.',
      url: 'https://human-evalution.vercel.app/',
      tags: ['React', 'Interactive', 'Education'],
      icon: '🧬',
      image: human,
    },
    
  ];

  return (
    <section id='projects' className="py-20 relative z-1" style={{ padding: '80px 0' }}>
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyan-400/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <span className="section-label text-cyan-400">What I've Built</span>
          <h2 style={{ marginTop: '15px' }} className="font-space-grotesk font-bold text-4xl md:text-5xl mt-3">
            Featured <span className="grad-text">Projects</span>
          </h2>
          <p style={{ marginTop: '15px' }} className="text-text-muted mt-3 max-w-md mx-auto">
            A collection of web applications built with modern technologies
          </p>
        </div>

        <div style={{ marginTop: '15px' }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a 
              key={p.title} 
              href={p.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative project-card p-0 reveal flex flex-col h-full rounded-xl"
              data-delay={i * 80}
              style={{
                background: 'rgba(1, 7, 34, 0.85)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(0, 212, 255, 0.08)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                overflow: 'visible',
              }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden shrink-0 rounded-t-xl">
                <img 
                  src={p.image} 
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x400/010722/00D4FF?text=' + p.title;
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#010722] via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                
                {/* Overlay Icon */}
                <div className="absolute top-3 right-3 bg-[#010722]/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-cyan-400/20">
                  <FiExternalLink className="w-4 h-4 text-cyan-400" />
                </div>
              </div>

              <div className="flex-1 p-5 bg-[#010722]/90 flex flex-col rounded-b-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl shrink-0">{p.icon}</span>
                  <h3 className="font-space-grotesk font-semibold text-lg text-text truncate">
                    {p.title}
                  </h3>
                </div>
                
                <p className="text-text-muted text-sm leading-relaxed mb-3 flex-1 line-clamp-2">
                  {p.desc}
                </p>

                {/* Tags Container */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2" style={{ overflow: 'visible' }}>
                  {p.tags.map(t => (
                    <span 
                      key={t} 
                      className="bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-mono"
                      style={{
                        display: 'inline-block',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                        overflow: 'visible',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent rounded-xl transition-all duration-300 group-hover:border-cyan-400/30 pointer-events-none" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}