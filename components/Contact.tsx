import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("mohsiniqbal826635@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.warn("Clipboard write failed", err);
      // Fallback or silent fail - prevents app crash
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-24 bg-black relative">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8">
          Let's build something<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">extraordinary.</span>
        </h2>
        
        <div className="mt-16 space-y-8">
          <div 
            onClick={handleCopy}
            className="group cursor-pointer inline-flex flex-col items-center gap-2"
          >
            <span className="text-xl md:text-2xl font-mono text-white/70 group-hover:text-white transition-colors border-b border-white/20 pb-1">
              mohsiniqbal826635@gmail.com
            </span>
            <span className="text-xs font-mono text-accent-blue h-4 opacity-0 group-hover:opacity-100 transition-opacity">
              {copied ? "[ COPIED TO CLIPBOARD ]" : "[ CLICK TO COPY ]"}
            </span>
          </div>

          <div className="flex justify-center gap-8 text-sm font-mono text-white/40 pt-12">
            <a href="https://linkedin.com/in/mohsin-iqbal" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LINKEDIN</a>
            <a href="https://github.com/mohsin013" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GITHUB</a>
          </div>
        </div>
        
        <footer className="mt-32 text-[10px] text-white/20 font-mono">
          <p>SYSTEM STATUS: OPERATIONAL</p>
          <p>© {new Date().getFullYear()} MOHSIN IQBAL. ALL RIGHTS RESERVED.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;