import { FiMail, FiPhone, FiMapPin, FiDownload } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

export default function Contact() {
    const contacts = [
        { label: 'Email', value: 'felixbasil8@gmail.com', href: 'mailto:felixbasil8@gmail.com', icon: FiMail },
        { label: 'Phone', value: '+91 90722 69107', href: 'tel:+919072269107', icon: FiPhone },
        { label: 'Location', value: 'Kottayam, Kerala', href: '#', icon: FiMapPin },
    ];

    const socials = [
        { label: 'GitHub', href: 'https://github.com/felixbasil68', icon: FaGithub },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/felix-deon-basil', icon: FaLinkedin },
    ];

    const handleDownloadResume = () => {
        // Replace with your Google Drive link
        window.open('https://drive.google.com/file/d/18NeNX43oX0UU_zs0OVGgpGXHN4evYrWB/view?usp=sharing', '_blank');
    };

    return (
        <section id='contact' className="py-20 relative z-1" style={{ padding: '80px 0' }}>
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyan-400/5 to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6">
                <div className="reveal text-center mb-16">
                    <span className="section-label">Let's Work Together</span>
                    <h2 style={{ marginTop: '15px' }} className="font-space-grotesk font-bold text-4xl md:text-5xl mt-3 mb-4">
                        Get In <span className="grad-text">Touch</span>
                    </h2>
                    <p style={{ marginTop: '15px' }} className="font md:text-xl mt-3 ">
                        Currently open to new opportunities. Whether you have a project in mind or just want to say hi — my inbox is always open!
                    </p>
                </div>

                <div style={{ marginTop: '15px' }} className="grid md:grid-cols-3 gap-4 mb-8">
                    {contacts.map((c, i) => {
                        const Icon = c.icon;
                        return (
                            <a
                                key={c.label}
                                href={c.href}
                                className="contact-card reveal flex items-center gap-4 p-5 rounded-xl"
                                data-delay={i * 100}
                            >
                                <div style={{ marginTop: '10px' }} className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center shrink-0">
                                    <Icon className="text-xl text-cyan-400" />
                                </div>
                                <div style={{ marginTop: '15px' }} className="text-left min-w-0">
                                    <p className="font-mono text-xs text-cyan-400 mb-0.5 uppercase tracking-wider">{c.label}</p>
                                    <p className="text-sm text-text truncate">{c.value}</p>
                                </div>
                            </a>
                        );
                    })}
                </div>

                <div style={{ marginTop: '15px', paddingBottom: '32px' }} className="glass rounded-2xl p-8 mb-8 text-center">
                    <h3 style={{ marginTop: '15px' }} className="text-xl font-semibold text-text mb-4">Let's Connect</h3>
                    <div style={{ marginTop: '15px' }} className="flex flex-wrap justify-center gap-4">
                        <a href="mailto:felixbasil8@gmail.com" className="btn-primary">
                            Send Email <HiArrowRight className="inline" />
                        </a>
                        <a href="https://linkedin.com/in/felix-deon-basil" target="_blank" className="btn-ghost">
                            Connect on LinkedIn
                        </a>
                        <button onClick={handleDownloadResume} className="btn-ghost">
                            <FiDownload className="inline" /> Download Resume
                        </button>
                    </div>
                </div>

                <div style={{ marginTop: '20px' }} className="flex justify-center gap-8">
                    {socials.map(s => {
                        const Icon = s.icon;
                        return (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                className="text-text-muted transition-all flex items-center gap-2 text-sm hover:text-cyan-400 hover:scale-105 no-underline"
                            >
                                <Icon className="w-5 h-5" />
                                <span>{s.label}</span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}