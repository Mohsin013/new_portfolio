import React, { useState } from 'react';

const Experience: React.FC = () => {

  const techStack = [
    "AWS (EC2, S3, ASG, CloudFront, CodePipeline)",
    "Node.js, Bun.js, Express.js, TypeScript",
    "React.js, Tailwind CSS, Zustand, Vite",
    "MongoDB, Redis, Pinecone, SQL (Prisma)",
    "OpenAI GPT-4, WebRTC, BullMQ, GraphQL"
  ];

  return (
    <section id="experience" className="py-32 px-6 md:px-24 bg-black relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-mono text-blue-400 border border-blue-900/50 px-2 py-1 rounded-full inline-block mb-4">
            CAREER TIMELINE
          </span>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            Professional Journey
          </h2>

  {/* Current Position */}
          <div className="mb-8 p-6 border border-white/10 bg-white/[0.02] rounded-lg">
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-2">
              Founding Engineer
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-white/60">
              <span className="border border-accent-blue/30 px-3 py-1 rounded bg-accent-blue/10">Feel You Best</span>
              <span className="text-accent-blue">Aug 2025 – Present</span>
              <span className="border border-green-500/30 text-green-400 px-3 py-1 rounded">Current</span>
            </div>
          </div>

          {/* Previous Position */}
          <div className="mb-8 p-6 border border-white/10 bg-white/[0.02] rounded-lg">
            <h4 className="text-xl font-medium text-white mb-2">
              Software Development Engineer (AI & Full-Stack)
            </h4>
            <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-white/60 mb-4">
              <span className="border border-white/20 px-3 py-1 rounded">Masai School</span>
              <span className="text-white/80">Nov 2022 – Aug 2025</span>
              <span className="border border-purple-500/30 text-purple-400 px-3 py-1 rounded">Bengaluru, India</span>
            </div>
            <p className="text-sm text-white/60 font-mono">
              Built AI-powered systems serving 50,000+ concurrent users, including automated lecture generation,
              AI recruitment agents, and real-time proctoring platforms.
            </p>
          </div>

          {/* Professional Summary */}
          {/* <div className="max-w-4xl p-6 border border-white/10 bg-white/[0.02] rounded-lg mb-12">
            <p className="text-lg text-white/80 font-light leading-relaxed">
              A results-driven Software Development Engineer with extensive experience in designing, building, and scaling high-impact, AI-powered platforms. Proven expertise in full-stack development and architecting production-grade systems from concept to deployment, serving over 50,000 concurrent users. Adept at leading complex projects, driving technical innovation with Generative AI, and delivering robust, scalable solutions in fast-paced environments.
            </p>
          </div> */}
        </div>

        {/* Key Skills Overview */}
        <div className="mb-16">
          <h3 className="text-xl font-mono text-white/50 mb-8 uppercase tracking-widest">/// Core Expertise Areas</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 border border-white/10 bg-white/[0.02] rounded-lg">
              <h4 className="text-lg font-medium text-white mb-2">AI Systems</h4>
              <p className="text-sm text-white/60 font-mono">Multi-agent orchestration, RAG pipelines, voice synthesis</p>
            </div>
            <div className="p-4 border border-white/10 bg-white/[0.02] rounded-lg">
              <h4 className="text-lg font-medium text-white mb-2">Platform Scale</h4>
              <p className="text-sm text-white/60 font-mono">50K+ concurrent users, auto-scaling, distributed caching</p>
            </div>
            <div className="p-4 border border-white/10 bg-white/[0.02] rounded-lg">
              <h4 className="text-lg font-medium text-white mb-2">Real-time Systems</h4>
              <p className="text-sm text-white/60 font-mono">WebRTC streaming, WebSocket architectures, sub-second latency</p>
            </div>
            <div className="p-4 border border-white/10 bg-white/[0.02] rounded-lg">
              <h4 className="text-lg font-medium text-white mb-2">Cloud Infrastructure</h4>
              <p className="text-sm text-white/60 font-mono">AWS orchestration, CI/CD pipelines, observability stacks</p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="border-t border-white/10 pt-12">
          <h3 className="text-xl font-mono text-white/50 mb-6 uppercase tracking-widest">/// Core Technology Stack</h3>

          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-mono text-white/70 hover:bg-white/10 hover:text-white transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Achievement Badge */}
        <div className="mt-12 p-6 border border-yellow-500/30 bg-yellow-500/5 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 border-2 border-yellow-500/50 rounded-full flex items-center justify-center">
              <span className="text-yellow-500 text-xl">🏆</span>
            </div>
            <div>
              <h4 className="text-lg font-medium text-yellow-400 mb-1">Exceptional Achiever Award</h4>
              <p className="text-sm text-white/60 font-mono">
                2024 & 2025 • Outstanding contributions and technical leadership in AI platform development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;