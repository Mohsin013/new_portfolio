import React, { useState } from 'react';

const categories = [
  {
    id: 1,
    title: "Architectures that scale",
    desc: "Robust backends and distributed systems.",
    examples: ["Modular Monoliths (Node/Bun)", "Distributed Queues (BullMQ)"],
    icon: "🏗️"
  },
  {
    id: 2,
    title: "Products that ship",
    desc: "End-to-end delivery across platforms.",
    examples: ["React Native / Expo (Offline-first)", "Next.js / Vite PWAs"],
    icon: "🚀"
  },
  {
    id: 3,
    title: "AI in real life",
    desc: "Pragmatic intelligence, not just hype.",
    examples: ["Multi-agent LLM Orchestration", "RAG Pipelines & Voice Cloning"],
    icon: "🧠"
  },
  {
    id: 4,
    title: "Systems that matter",
    desc: "Infrastructure that keeps business alive.",
    examples: ["AWS (EC2, ASG, CodePipeline)", "Observability & Monitoring"],
    icon: "🔌"
  }
];

const Capabilities: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 md:px-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-sm font-mono tracking-widest text-accent-blue mb-4 uppercase">/// Capability Matrix</h2>
          <p className="text-3xl md:text-4xl max-w-2xl font-light text-white/90">
            I don't just write code. I build ecosystem capabilities that turn abstract requirements into shipping products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div 
              key={cat.id}
              className={`
                group relative h-[300px] border border-white/10 bg-white/[0.02] 
                hover:bg-white/[0.05] transition-all duration-500 ease-out 
                flex flex-col justify-between p-8 overflow-hidden cursor-crosshair
                ${activeId === cat.id ? 'border-accent-blue/50' : ''}
              `}
              onMouseEnter={() => setActiveId(cat.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              {/* Kinetic Circle Background */}
              <div className={`
                absolute -right-12 -top-12 w-48 h-48 rounded-full border border-white/5 
                group-hover:scale-150 group-hover:border-white/10 transition-transform duration-700
              `} />
              
              <div className="relative z-10">
                <span className="text-4xl mb-4 block filter grayscale group-hover:grayscale-0 transition-all">{cat.icon}</span>
                <h3 className="text-xl font-medium mb-2">{cat.title}</h3>
                <p className="text-sm text-white/50">{cat.desc}</p>
              </div>

              <div className={`
                space-y-2 transform transition-all duration-500
                ${activeId === cat.id ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
              `}>
                <div className="h-[1px] w-full bg-white/10 mb-4" />
                {cat.examples.map((ex, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-accent-blue">
                    <span className="opacity-50">{`>`}</span>
                    {ex}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;