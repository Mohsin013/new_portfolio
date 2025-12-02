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
    title: "Blended Learning (AI Lecture Engine)",
    thesis: "Automated lecture generation pipeline delivering AI-powered educational content to 10,000+ students.",
    bullets: [
        "Automated lecture generation using AI, reducing dependency on human instructors by 80%",
        "Enabled scalable lecture delivery to 10,000+ students with AI-generated content",
        "Leveraged OpenAI APIs and open-source models for dynamic, personalized lecture creation",
        "Designed end-to-end content generation pipeline: Whisper (TTS), OpenAI LLM, RVC (voice cloning), SADTalker (avatar animation)",
        "Automated class presentations using Reveal.js with dynamic styling and design"
    ],
    tech: "React | Node.js | OpenAI API | SADTalker | RVC | AWS | SQL | Prisma | GraphQL | Reveal.js",
    archHighlight: "AI_CONTENT_GENERATION"
  },
  {
    id: "02",
    title: "Smart LMS Platform",
    thesis: "Enterprise Learning Management System scaling from 4,000 to 50,000+ concurrent students.",
    bullets: [
        "Scaled LMS platform from 4,000 to 50,000+ students using AWS autoscaling and Redis caching",
        "Integrated production-grade Lexical Editor with tagging, markdown, HTML, image uploads, and rich text",
        "Enabled threaded discussions with user mentions and real-time collaboration",
        "Implemented Firebase Notification Service for unlimited, cost-effective notifications across all platforms",
        "Built Service Worker architecture for both foreground and background delivery"
    ],
    tech: "React | Node.js | tRPC | MongoDB | AWS | Firebase | Lexical Editor | Redis | AWS Services",
    archHighlight: "LMS_SCALING_ARCHITECTURE"
  },
  {
    id: "03",
    title: "Copper (Online Proctoring)",
    thesis: "Real-time AI-powered exam monitoring system with multi-device surveillance and automated cheating detection.",
    bullets: [
        "Developed real-time exam monitoring with video/screen capture, facial recognition, and behavioral analytics",
        "Engineered plagiarism detection using code similarity (70%+ accuracy) and AI tool usage detection via OCR",
        "Reduced manual review time by 80% through automated flagging based on 50+ data points",
        "Architected distributed system supporting 1,000+ concurrent users with React frontend and mobile app",
        "Integrated secondary camera feeds from mobile devices for comprehensive multi-angle surveillance",
        "Built comprehensive dashboards with suspect scoring and behavioral pattern analysis"
    ],
    tech: "React | Bun | Express.js | TypeScript | AWS | MongoDB | WebRTC | AWS Rekognition | AWS Textract | OpenAI API | Redis",
    archHighlight: "REALTIME_PROCTORING_SYSTEM"
  },
  {
    id: "04",
    title: "AI Counsellor",
    thesis: "AI-powered counselling system with GPT-4 and real-time speech recognition, reducing human workload by 70%.",
    bullets: [
        "Built AI-powered counselling system using GPT-4 and real-time speech recognition",
        "Reduced human counsellor workload by 70% through intelligent automation",
        "Engineered low-latency streaming platform with WebSocket enabling sub-second response times",
        "Implemented Retrieval-Augmented Generation (RAG) using Pinecone and OpenAI embeddings for contextual precision",
        "Developed admin dashboard for analytics, session insights, and template management",
        "Achieved 77% cost reduction in counselling operations through AI automation"
    ],
    tech: "React | TypeScript | Bun | Elysia.js | OpenAI GPT-4 | Azure Cognitive Services | Pinecone | MongoDB | Redis | WebSocket | Tailwind CSS | Zustand | Vite | Reveal.js | JWT | AWS",
    archHighlight: "AI_COUNSELLING_RAG_SYSTEM"
  },
  {
      id: "05",
      title: "Insta Insights",
      thesis: "Full-stack Instagram Reels analysis platform providing creators with deep engagement insights using GPT-4 and custom ML.",
      bullets: [
          "Analyzed Instagram Reels using GPT-4, AWS Transcribe, and custom ML models for content insights",
          "Built video processing pipeline with AWS S3 and BullMQ queues handling 25+ reels per session at 95%+ accuracy",
          "Engineered AI to identify niche topics, hook styles, content patterns, and promotional strategies",
          "Designed robust asynchronous job architecture with Redis and BullMQ for concurrent processing",
          "Developed script generation tool using GPT-4 that mimics influencers' tone and content style"
      ],
      tech: "React | TypeScript | Node.js | Express.js | MongoDB | OpenAI API | AWS S3 | AWS Transcribe | Redis | BullMQ | Tailwind CSS | Framer Motion | JWT | Apify | REST APIs | Microservices | Queue Processing | AI/ML | Cloud Architecture",
      archHighlight: "INSTAGRAM_ANALYTICS_PIPELINE"
  },
  {
      id: "06",
      title: "Veda (AI Recruitment Agent)",
      thesis: "AI-powered recruitment agent with 12+ specialized sub-agents automating job creation, screening, and interview scheduling.",
      bullets: [
          "Built AI-powered recruitment agent that automates job creation, screening, and interview scheduling",
          "Cut manual hiring workload by 80% through intelligent automation",
          "Designed multi-agent LLM system with 12+ specialized sub-agents for candidate matching",
          "Developed LLM-based candidate evaluation providing fit scores, match reasons, and hiring transparency",
          "Created automated interview scheduling with calendar integration and conflict resolution",
          "Integrated real-time communication systems with Slack, email, and phone calls for recruiter-candidate interactions"
      ],
      tech: "React | TypeScript | Node.js | MongoDB | AWS | OpenAI | Claude | Plivo API | Slack API | BullMQ | Zod | Socket.io | Tailwind CSS | Vercel AI SDK",
      archHighlight: "MULTI_AGENT_RECRUITMENT_SYSTEM"
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
                <div className="w-full lg:w-2/3 min-h-[600px] relative border border-white/10 bg-[#0F0F0F] p-8 md:p-12 overflow-hidden">
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