import React, { useState } from 'react';

const categories = [
  {
    id: 1,
    title: "AI & Machine Learning",
    desc: "Production-ready AI systems that deliver real value.",
    examples: [
      "OpenAI GPT-4 Integration",
      "Generative AI Pipelines",
      "RAG with Pinecone",
      "Multi-Agent LLM Systems",
      "Vector Embeddings",
      "Voice Cloning (RVC)",
      "Avatar Animation (SADTalker)",
      "AWS Rekognition & Textract",
      "Vercel AI SDK"
    ],
    icon: "🤖"
  },
  {
    id: 2,
    title: "Backend Development",
    desc: "High-performance, scalable server architectures.",
    examples: [
      "Node.js & Bun.js Runtime",
      "Elysia.js & Express.js",
      "TypeScript & Python",
      "GraphQL & tRPC",
      "Microservices Architecture",
      "Asynchronous Job Processing (BullMQ)",
      "Real-time WebSocket Systems"
    ],
    icon: "⚡"
  },
  {
    id: 3,
    title: "Frontend Development",
    desc: "Modern, responsive interfaces with excellent UX.",
    examples: [
      "React.js & TypeScript",
      "Lexical Editor Integration",
      "Reveal.js Presentations",
      "Tailwind CSS Styling",
      "Zustand State Management",
      "Vite Build System",
      "Progressive Web Apps (PWA)"
    ],
    icon: "🎨"
  },
  {
    id: 4,
    title: "Databases & Caching",
    desc: "Optimized data storage and retrieval solutions.",
    examples: [
      "MongoDB Document Storage",
      "SQL with Prisma ORM",
      "Redis Caching & Queues",
      "Pinecone Vector Database",
      "Database Optimization",
      "Query Performance Tuning"
    ],
    icon: "💾"
  },
  {
    id: 5,
    title: "Cloud & DevOps",
    desc: "Enterprise-grade infrastructure and deployment.",
    examples: [
      "AWS Infrastructure (S3, EC2, ASG)",
      "Route 53 & CloudFront CDN",
      "Load Balancer Configuration",
      "CI/CD with CodePipeline",
      "Distributed Systems Design",
      "WebRTC Real-time Communication",
      "Monitoring & Observability"
    ],
    icon: "☁️"
  },
  {
    id: 6,
    title: "System Architecture",
    desc: "End-to-end solution design and implementation.",
    examples: [
      "Distributed Queue Systems",
      "Auto-scaling Strategies",
      "Fault-tolerant Design Patterns",
      "Real-time Streaming Architectures",
      "Modular Monolith Design",
      "Microservices Migration",
      "Performance Optimization"
    ],
    icon: "🏗️"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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