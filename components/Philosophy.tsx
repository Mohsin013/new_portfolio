import React from 'react';

const philosophies = [
  "Complexity is not a problem — it’s an invitation.",
  "Ownership is the highest form of engineering.",
  "Calm under pressure; high stakes sharpen me.",
  "Think like a trader, build like an engineer.",
  "AI is leverage, and those who understand it will build the future.",
  "I don’t just write code — I own systems."
];

const Philosophy: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-24 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-mono tracking-widest text-white/50 mb-12 uppercase text-center">/// Core Kernel</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {philosophies.map((text, i) => (
            <div key={i} className="bg-[#0A0A0A] p-12 hover:bg-[#0F0F0F] transition-colors duration-300 flex items-center justify-center text-center">
              <p className="text-lg font-light text-white/80 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;