import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Experience from './components/Experience';
import CaseStudy from './components/CaseStudy';
import SignatureProjects from './components/SignatureProjects';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    // Simulate system boot sequence
    const timer = setTimeout(() => {
      setBooted(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${booted ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/10 blur-[120px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      <main className="flex flex-col gap-0">
        <Hero />
        <Capabilities />
        <Experience />
        <CaseStudy />
        <SignatureProjects />
        <Philosophy />
        <Contact />
      </main>

      {/* Persistent Status Bar (Bottom) */}
      <div className="fixed bottom-6 left-6 right-6 z-50 flex justify-between items-end pointer-events-none mix-blend-difference text-white/50 text-[10px] font-mono tracking-widest uppercase">
        <div className="flex gap-4">
          <span>SYS.VER.2.0.4</span>
          <span className="hidden sm:block">LATENCY: 12ms</span>
        </div>
        <div className="pointer-events-auto">
          <a 
            href="#contact" 
            onClick={handleScrollToContact}
            className="hover:text-white transition-colors cursor-pointer"
          >
            [INITIATE CONTACT]
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;