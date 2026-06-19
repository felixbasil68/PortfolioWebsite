import { useTyping } from '../hooks/useTying';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiArrowRight, HiDownload } from 'react-icons/hi';

export default function Hero() {
    const typed = useTyping(['Full Stack Developer', 'React Specialist', 'MERN Stack Builder', 'UI/UX Enthusiast']);

    const handleDownloadResume = () => {
        // Replace with your Google Drive link
        window.open('https://drive.google.com/file/d/18NeNX43oX0UU_zs0OVGgpGXHN4evYrWB/view?usp=sharing', '_blank');
    };

    return (
        <section id='about' className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 w-full">
            <div className="hero-grid" />

            <div className="absolute top-[20%] right-[10%] w-100 h-100 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.08), transparent 70%)' }} />
            <div className="absolute bottom-[10%] left-[5%] w-75 h-75 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08), transparent 70%)' }} />

            <div className="max-w-6xl mx-auto px-6 py-20 w-full relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-left">
                        <div className="reveal" data-delay="100">
                            <span className="section-label">👋 Hello, I'm</span>
                        </div>

                        <h1 className="reveal hero-title" data-delay="200"
                            style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', lineHeight: 1.1, marginTop: '12px', marginBottom: '16px' }}>
                            Felix Deon<br />
                            <span className="grad-text">Basil</span>
                        </h1>

                        <div className="reveal font-mono text-lg text-cyan-400 mb-5 min-h-[1.6em]" data-delay="300">
                            &gt; {typed}<span className="cursor-blink" />
                        </div>

                        <p className="reveal text-text-muted leading-relaxed mb-10 max-w-120" mt-5 data-delay="400">
                            Full Stack Developer from Kerala, India. Passionate about building responsive web applications,
                            clean REST APIs, and turning complex ideas into seamless digital experiences.
                        </p>

                        <div style={{ marginTop: '10px' }} className="reveal flex flex-wrap gap-4" mt-7 data-delay="500">
                            <a href="#projects" className="btn-primary">
                                <span>View Projects</span>
                                <HiArrowRight className="inline" />
                            </a>
                            <button onClick={handleDownloadResume} className="btn-ghost">
                                <HiDownload className="inline" /> Resume
                            </button>
                        </div>

                        <div style={{ marginTop: '15px' }} className="reveal flex gap-6 mt-8" data-delay="600">
                            <a href="https://linkedin.com/in/felix-deon-basil" target="_blank"
                                className="text-text-muted text-sm flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                                <FaLinkedin className="w-4 h-4" />
                                LinkedIn
                            </a>
                            <a href="https://github.com/felixbasil68" target="_blank"
                                className="text-text-muted text-sm flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                                <FaGithub className="w-4 h-4" />
                                GitHub
                            </a>
                        </div>
                    </div>

                    <div className="reveal-right hidden md:flex justify-center items-center" data-delay="300">
                        <div className="relative">
                            <div className="w-70 h-70 rounded-full bg-linear-to-br from-cyan-400 to-purple-600 p-0.5">
<div className="w-full h-full rounded-full bg-navy-card flex items-center justify-center">
  <svg className="w-14 h-14 text-cyan-400 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
</div>                  </div>

                            <div className="floating-badge absolute -top-5 -right-5 glass-light rounded-xl px-3.5 py-2.5 text-sm whitespace-nowrap">
                                <span className="text-cyan-400 font-mono flex items-center gap-2">⚛️ React</span>
                            </div>
                            <div className="floating-badge absolute bottom-5 -left-7 glass-light rounded-xl px-3.5 py-2.5 text-sm" style={{ animationDelay: '1.5s' }}>
                                <span className="text-green-400 font-mono flex items-center gap-2">🟢 Node.js</span>
                            </div>
                            <div className="floating-badge absolute -bottom-2 right-2 glass-light rounded-xl px-3.5 py-2.5 text-sm" style={{ animationDelay: '0.8s' }}>
                                <span className="text-orange-400 font-mono flex items-center gap-2">🍃 MongoDB</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="reveal absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted text-xs" data-delay="800">
                    <span>scroll</span>
                    <div
                        className="w-px h-10 bg-linear-to-b from-cyan-400 to-transparent"
                        style={{
                            animation: 'bounceUpDown 2s ease-in-out infinite'
                        }}
                    />
                </div>
            </div>
        </section>
    );
}