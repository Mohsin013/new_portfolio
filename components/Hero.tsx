import React, { useEffect, useRef, useState } from 'react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Updated to match the "Elevator Pitch" and "About" section tone
  const subline = "I build end-to-end systems that make complex problems feel straightforward. From production ML pipelines to payment-grade backend systems."; 

  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    const nodeCount = Math.floor((width * height) / 15000); // Density based on screen size

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 - dist / 150 * 0.15})`;
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(render);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    render();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 sm:px-12 md:px-24 overflow-hidden pt-24 pb-12 lg:py-0 gap-12 lg:gap-20">
      {/* Background Network */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl space-y-8 flex-1 order-2 lg:order-1">
        <div className="inline-block px-2 py-1 mb-4 text-xs font-mono tracking-[0.2em] text-blue-400 border border-blue-900/50 bg-blue-900/10 rounded-full">
          SYSTEM_ONLINE
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1]">
          Hi, I’m Mohsin Iqbal. <br />
          <span className="text-white/40">Founding Engineer. AI Architect.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/70 max-w-2xl font-light">
          {subline}
        </p>

        <div className="flex flex-wrap gap-6 pt-8">
          <button 
            onClick={handleScroll('contact')}
            className="group relative px-6 py-3 bg-white text-black font-semibold tracking-wide overflow-hidden cursor-pointer"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">INITIATE CONTACT</span>
            <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
          </button>
          
          <button 
            onClick={handleScroll('case-study')}
            className="px-6 py-3 border border-white/20 text-white hover:bg-white/5 transition-all font-mono text-sm tracking-widest cursor-pointer"
          >
            VIEW CASE STUDIES
          </button>
          
          <div className="flex items-center gap-3 px-4 py-3 border border-dashed border-white/10 text-white/40 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>ENCRYPTED_CV_TOKEN: 0x826635</span>
          </div>
        </div>
      </div>

      {/* Profile Image - System Card Style */}
      <div className="relative z-10 flex-shrink-0 order-1 lg:order-2 group">
         {/* Decorative outer rings */}
         <div className="absolute inset-0 border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-2xl transform rotate-6 transition-transform duration-700 group-hover:rotate-2"></div>
         <div className="absolute inset-0 border border-white/5 rounded-2xl transform -rotate-3 scale-105 transition-transform duration-700 group-hover:-rotate-1"></div>
         
         {/* Main Image Container */}
         <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20 bg-white/5">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 mix-blend-overlay z-10 pointer-events-none" />
            
            {/* Using Google Drive Thumbnail format (w1000) for reliable embedding */}
            <img 
              src="https://drive.google.com/thumbnail?id=1QL7XUEcXkq8U2G2U_MfYPIHr2codb78Y&sz=w1000" 
              alt="Mohsin Iqbal"
              className="w-full h-full object-cover filter grayscale contrast-[1.1] brightness-[0.9] group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            
            {/* Tech Overlay Lines */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-20">
               <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-accent-blue tracking-widest">ID: MOHSIN_IQBAL</span>
                  <span className="text-[10px] font-mono text-white/50">STATUS: ACTIVE</span>
               </div>
               <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
               </div>
            </div>
         </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to decrypt</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};

export default Hero;