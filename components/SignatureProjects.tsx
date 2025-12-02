import React, { useEffect, useRef, useState } from 'react';

type Project = {
  id: string;
  title: string;
  thesis: string;
  bullets: string[];
  tech: string;
  archHighlight: string;
};

const projects: Project[] = [
  {
    id: "01",
    title: "Copper AI Proctoring",
    thesis: "Eliminating academic dishonesty through real-time computer vision pipelines.",
    bullets: [
        "Architected heartbeat sync between primary + secondary devices.",
        "Integrated AWS Rekognition for face/object detection on video streams.",
        "Reduced manual proctoring review load by 80% for 1,000+ users."
    ],
    tech: "React, Node.js, WebRTC, AWS Rekognition",
    archHighlight: "WEBRTC_SIGNALING_MESH"
  },
  {
    id: "02",
    title: "Veda Recruitment",
    thesis: "Autonomous multi-agent hiring system that reads, ranks, and recommends.",
    bullets: [
        "Orchestrated 12+ LLM agents for automated resume analysis.",
        "Implemented intelligent scoring logic to rank candidates.",
        "Cut manual hiring operational hours by 80%."
    ],
    tech: "GPT-4, Vector DB, Python, LangChain",
    archHighlight: "MULTI_AGENT_ORCHESTRATOR"
  },
  {
    id: "03",
    title: "AI Lecture Engine",
    thesis: "End-to-end video production pipeline generating educational content without humans.",
    bullets: [
        "Automated script (GPT) + Voice cloning (RVC) pipeline.",
        "Generated lip-synced avatar videos using SADTalker.",
        "Full automation of lecture material creation."
    ],
    tech: "Python, FFmpeg, RVC, SADTalker",
    archHighlight: "ASYNC_MEDIA_PIPELINE"
  },
  {
    id: "04",
    title: "AI Counselling Assistant",
    thesis: "Scaling mental health support with sub-second, empathetic AI responses.",
    bullets: [
        "Implemented RAG with Pinecone for context-aware responses.",
        "Achieved sub-second latency via WebSocket streaming.",
        "Reduced infrastructure costs by 77%."
    ],
    tech: "GPT-4, WebSocket, Pinecone, Redis",
    archHighlight: "REALTIME_RAG_STREAM"
  },
  {
      id: "05",
      title: "Insta Analytics Engine",
      thesis: "High-throughput distributed system for social media data processing.",
      bullets: [
          "Fault-tolerant job queues (BullMQ) processing massive datasets.",
          "Achieved 95%+ accuracy in transcription and analysis.",
          "Distributed async processing via Redis."
      ],
      tech: "Redis, BullMQ, Node.js, Workers",
      archHighlight: "DISTRIBUTED_QUEUE_WORKERS"
  }
];

const SignatureProjects: React.FC = () => {
    const [activeProject, setActiveProject] = useState<string>("01");
    
    // In a real implementation, we would use IntersectionObserver to set activeProject based on scroll position
    // For this skeleton, we'll implement a simple hover/click mechanic for the exhibit
    
    return (
        <section className="py-32 px-6 md:px-24 bg-black">
            <h2 className="text-sm font-mono tracking-widest text-white/50 mb-16 uppercase">/// Signature Exhibits</h2>
            
            <div className="flex flex-col lg:flex-row gap-16">
                
                {/* List / Menu */}
                <div className="w-full lg:w-1/3 space-y-4">
                    {projects.map((p) => (
                        <div 
                            key={p.id}
                            onClick={() => setActiveProject(p.id)}
                            className={`
                                cursor-pointer group border-l-2 pl-6 py-4 transition-all duration-300
                                ${activeProject === p.id ? 'border-accent-blue bg-white/5' : 'border-white/10 hover:border-white/30'}
                            `}
                        >
                            <span className="text-xs font-mono text-white/30 block mb-1">PROJECT {p.id}</span>
                            <h3 className={`text-xl font-medium ${activeProject === p.id ? 'text-white' : 'text-white/60'}`}>
                                {p.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Exhibit Display (Sticky) */}
                <div className="w-full lg:w-2/3 min-h-[500px] relative border border-white/10 bg-[#0F0F0F] p-8 md:p-12 overflow-hidden">
                    {projects.map((p) => (
                        <div 
                            key={p.id} 
                            className={`
                                absolute inset-0 p-12 transition-all duration-700 flex flex-col justify-between
                                ${activeProject === p.id ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-8 z-0 pointer-events-none'}
                            `}
                        >
                             {/* Background Data Decos */}
                             <div className="absolute top-4 right-4 text-[10px] font-mono text-white/20 text-right">
                                <div>ARCH: {p.archHighlight}</div>
                                <div>STATUS: DEPLOYED</div>
                             </div>

                             <div>
                                 <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight text-white">{p.title}</h2>
                                 <p className="text-lg md:text-xl text-white/80 font-light border-l border-accent-blue pl-6 mb-8">
                                     "{p.thesis}"
                                 </p>
                                 
                                 <ul className="space-y-4 mb-8">
                                     {p.bullets.map((b, i) => (
                                         <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                                             <span className="mt-1.5 w-1 h-1 bg-accent-blue rounded-full" />
                                             {b}
                                         </li>
                                     ))}
                                 </ul>
                             </div>

                             <div className="pt-8 border-t border-white/10">
                                 <span className="text-xs font-mono text-white/40 uppercase tracking-wider">Tech Stack</span>
                                 <div className="mt-2 text-sm font-mono text-accent-blue">{p.tech}</div>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SignatureProjects;