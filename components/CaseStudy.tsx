import React from 'react';

const CaseStudy: React.FC = () => {
  return (
    <section id="case-study" className="py-32 bg-surface relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-24 relative z-10">
        <header className="mb-20">
            <span className="text-xs font-mono text-purple-400 border border-purple-500/30 px-2 py-1 rounded mb-6 inline-block">CASE STUDY: 001</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">Feel You Best</h2>
            <p className="text-xl text-white/60 max-w-2xl font-light">
                Founding Engineer. From zero lines of code to a scaled mental wellbeing platform handling critical user data.
            </p>
        </header>

        {/* Timeline / System Map */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 border-l border-white/10 pl-8 lg:pl-0 lg:border-l-0">
            
            {/* Phase 1 */}
            <div className="relative group">
                <div className="absolute -left-[41px] lg:left-0 lg:-top-[41px] w-5 h-5 bg-black border-2 border-white/20 rounded-full group-hover:border-accent-blue transition-colors" />
                <div className="lg:pt-12">
                    <h3 className="text-lg font-medium text-white mb-2">01. The Void</h3>
                    <p className="text-sm text-white/50 mb-6 font-mono leading-relaxed">
                        Nothing existed. Challenge: Build a secure, offline-first mobile app and PWA with real-time audio/video.
                    </p>
                    <div className="p-4 bg-white/5 rounded border border-white/5 font-mono text-xs text-white/70 space-y-2">
                        <div className="text-purple-300">// CLIENT STACK</div>
                        <div>+ Expo / React Native (Offline-first)</div>
                        <div>+ React PWA (Installable)</div>
                        <div>+ Expert Portal (Dashboards)</div>
                    </div>
                </div>
            </div>

            {/* Phase 2 */}
            <div className="relative group">
                <div className="absolute -left-[41px] lg:left-0 lg:-top-[41px] w-5 h-5 bg-black border-2 border-white/20 rounded-full group-hover:border-accent-blue transition-colors" />
                <div className="lg:pt-12">
                    <h3 className="text-lg font-medium text-white mb-2">02. The Architecture</h3>
                    <p className="text-sm text-white/50 mb-6 font-mono leading-relaxed">
                        Designing for high availability. Architected a modular monolith ready for microservices split.
                    </p>
                    <div className="p-4 bg-white/5 rounded border border-white/5 font-mono text-xs text-white/70 space-y-2">
                        <div className="text-purple-300">// CORE INFRA</div>
                        <div>+ Node.js / Express + TypeScript</div>
                        <div>+ Redis (Caching + Queues)</div>
                        <div>+ AWS EC2 + ALB + ASG</div>
                    </div>
                </div>
            </div>

            {/* Phase 3 */}
            <div className="relative group">
                <div className="absolute -left-[41px] lg:left-0 lg:-top-[41px] w-5 h-5 bg-black border-2 border-white/20 rounded-full group-hover:border-accent-blue transition-colors" />
                <div className="lg:pt-12">
                    <h3 className="text-lg font-medium text-white mb-2">03. The Ownership</h3>
                    <p className="text-sm text-white/50 mb-6 font-mono leading-relaxed">
                        Full responsibility for DevOps, security compliance, and cost optimization.
                    </p>
                    <div className="p-4 bg-white/5 rounded border border-white/5 font-mono text-xs text-white/70 space-y-2">
                        <div className="text-purple-300">// OPS & SECURITY</div>
                        <div>+ AWS CodePipeline (CI/CD)</div>
                        <div>+ CloudWatch Obs & Logging</div>
                        <div>+ IAM Policies & VPC Security</div>
                    </div>
                </div>
            </div>
        </div>

        {/* System Diagram Visual */}
        <div className="mt-24 p-8 border border-white/10 rounded-lg bg-[#050505] overflow-hidden">
             <div className="flex flex-col md:flex-row justify-between items-center text-xs font-mono text-white/30 mb-8 uppercase tracking-widest">
                <span>System Topology</span>
                <span>AWS / NODE / MONGO / REDIS</span>
             </div>
             
             {/* Updated Specific SVG Blueprint */}
             <svg viewBox="0 0 800 300" className="w-full h-auto stroke-white/20 fill-none" strokeWidth="1">
                {/* Defs for arrow markers */}
                <defs>
                    <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" fill="rgba(255,255,255,0.2)">
                        <path d="M0,0 L0,6 L6,3 z" className="stroke-none" />
                    </marker>
                </defs>

                {/* --- FRONTENDS (Left) --- */}
                
                {/* 1. Client App */}
                <rect x="40" y="40" width="140" height="50" rx="4" className="stroke-white/30" />
                <text x="110" y="65" textAnchor="middle" fill="white" className="text-[10px] font-mono opacity-70 stroke-none">MOBILE APP (EXPO)</text>
                <text x="110" y="78" textAnchor="middle" fill="white" className="text-[8px] font-mono opacity-40 stroke-none">iOS / ANDROID</text>

                {/* 2. Client PWA */}
                <rect x="40" y="125" width="140" height="50" rx="4" className="stroke-white/30" />
                <text x="110" y="153" textAnchor="middle" fill="white" className="text-[10px] font-mono opacity-70 stroke-none">CLIENT PWA</text>

                {/* 3. Expert Portal */}
                <rect x="40" y="210" width="140" height="50" rx="4" className="stroke-white/30" />
                <text x="110" y="238" textAnchor="middle" fill="white" className="text-[10px] font-mono opacity-70 stroke-none">EXPERT PORTAL</text>


                {/* --- BACKEND (Center) --- */}
                
                {/* Large Backend Container */}
                <rect x="320" y="40" width="160" height="220" rx="8" className="stroke-accent-blue/40 fill-accent-blue/[0.02]" />
                <text x="400" y="145" textAnchor="middle" fill="#3B82F6" className="text-[12px] font-mono opacity-90 stroke-none font-bold tracking-widest">BACKEND API</text>
                <text x="400" y="165" textAnchor="middle" fill="#3B82F6" className="text-[8px] font-mono opacity-50 stroke-none">NODE.JS / EXPRESS</text>
                
                {/* --- DATABASES (Right) --- */}

                {/* Redis */}
                <rect x="600" y="70" width="120" height="60" rx="4" className="stroke-purple-500/30" />
                <text x="660" y="100" textAnchor="middle" fill="#A855F7" className="text-[10px] font-mono opacity-80 stroke-none">REDIS</text>
                <text x="660" y="115" textAnchor="middle" fill="#A855F7" className="text-[8px] font-mono opacity-50 stroke-none">CACHE / QUEUES</text>

                {/* MongoDB */}
                <rect x="600" y="170" width="120" height="60" rx="4" className="stroke-green-500/30" />
                <text x="660" y="200" textAnchor="middle" fill="#10B981" className="text-[10px] font-mono opacity-80 stroke-none">MONGODB</text>
                <text x="660" y="215" textAnchor="middle" fill="#10B981" className="text-[8px] font-mono opacity-50 stroke-none">PRIMARY DATA</text>


                {/* --- CONNECTIONS --- */}
                
                {/* Frontends -> Backend */}
                <path d="M180 65 C 220 65, 250 100, 320 120" stroke="rgba(255,255,255,0.1)" fill="none" markerEnd="url(#arrow)" />
                <path d="M180 150 L 320 150" stroke="rgba(255,255,255,0.1)" fill="none" markerEnd="url(#arrow)" />
                <path d="M180 235 C 220 235, 250 200, 320 180" stroke="rgba(255,255,255,0.1)" fill="none" markerEnd="url(#arrow)" />

                {/* Backend -> DBs */}
                <path d="M480 120 L 600 100" stroke="rgba(168, 85, 247, 0.2)" strokeDasharray="4 4" fill="none" />
                <path d="M480 180 L 600 200" stroke="rgba(16, 185, 129, 0.2)" fill="none" />

             </svg>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;