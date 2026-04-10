"use client";

import { useState } from "react";
import { Gamepad2, TrendingUp, Target, ShieldCheck, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function LandingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-white font-sans selection:bg-[var(--color-primary)] selection:text-white pb-20 relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[var(--color-primary)]/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#b873ff]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Floating Pill Navbar (Framer Style) */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl border border-white/10 bg-black/40 backdrop-blur-xl z-50 rounded-full px-2 py-2 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-2 pl-4">
          <Gamepad2 className="text-[var(--color-primary)] w-6 h-6" />
          <span className="text-xl font-bold tracking-tight">GAMIFY</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Features
          </button>
          <button className="hidden sm:block text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Methodology
          </button>
          <button className="px-6 py-2.5 rounded-full bg-white text-black hover:bg-gray-200 transition-colors text-sm font-bold shadow-sm">
            Sign In
          </button>
        </div>
      </nav>

      {/* Centered Hero Section */}
      <section className="pt-48 pb-20 px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-[var(--color-primary)]" />
          The Future of Certification Prep
        </div>
        
        {/* Massive Typography */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-8 leading-[1.1]">
          Stop studying. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
            Start leveling up.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 font-light leading-relaxed">
          Traditional learning is broken and boring. Gamify turns your preparation into a progression-based adventure. Conquer gates, master skill trees, and defeat the final exam boss.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button 
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[var(--color-primary)] hover:bg-[#9d44f0] shadow-[var(--shadow-neon)] transition-all flex items-center justify-center gap-2 font-semibold text-lg"
          >
            Join the Waitlist <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-semibold text-lg">
            Explore Mechanics
          </button>
        </div>

        {/* Floating Hero Image (Bento Style Wrapper) */}
        <div className="mt-24 w-full relative rounded-[2rem] p-2 bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-2xl backdrop-blur-sm">
          <div className="rounded-[1.5rem] overflow-hidden bg-black relative aspect-video shadow-inner">
            <img 
              src="/hero-bg.jpg" 
              alt="Gamified Learning Interface" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Inner glow overlay */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[1.5rem]"></div>
          </div>
        </div>
      </section>

      {/* Mechanics Grid (Bento Box Style) */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">How the Game is Played</h2>
          <p className="text-gray-400 text-lg font-light">A fully data-driven learning ecosystem designed to keep you addicted to progress.</p>
        </div>

        {/* Framer-style Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<Target className="w-6 h-6 text-white" />}
            title="Levels & Gates"
            description="Chapters become Levels. Assessment questions become Gates. You cannot advance until you prove your mastery."
          />
          <FeatureCard 
            icon={<TrendingUp className="w-6 h-6 text-white" />}
            title="Dynamic Skill Tree"
            description="Track your mastery across distinct ACS areas. Unlock nodes as you progress and visually see your knowledge grow."
          />
          <FeatureCard 
            icon={<ShieldCheck className="w-6 h-6 text-white" />}
            title="The Final Boss"
            description="A timed, high-stakes mock exam with pass/fail logic. Defeat the final boss to earn your certification readiness."
          />
        </div>
      </section>

      {/* Waitlist Section (Centered, sleek) */}
      <section id="waitlist" className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center p-12 rounded-[2.5rem] bg-gradient-to-b from-white/5 to-transparent border border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-50" />
          
          <h2 className="text-4xl font-medium tracking-tight mb-4 relative z-10">Ready to enter the arena?</h2>
          <p className="text-gray-400 mb-10 text-lg font-light relative z-10">Drop your email below to secure your spot and get early access when we launch.</p>
          
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-3xl relative z-10">
              <CheckCircle2 className="w-12 h-12 text-[var(--color-primary)] mb-4" />
              <h3 className="text-2xl font-bold tracking-tight mb-2">You're on the list!</h3>
              <p className="text-gray-400">Keep an eye on your inbox. We will notify you when the gates open.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto relative z-10">
              <input 
                type="email" 
                required
                placeholder="Enter your email address" 
                className="flex-1 bg-black/50 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-[var(--color-primary)] transition-colors text-white placeholder:text-gray-500 backdrop-blur-md"
              />
              <button 
                type="submit"
                className="px-8 py-4 rounded-full bg-white text-black hover:bg-gray-200 font-semibold transition-all shadow-[var(--shadow-neon)] active:scale-95"
              >
                Get Access
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}

// Framer-style sleek card component
function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group relative bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8 rounded-[2rem] hover:bg-white/[0.07] transition-all duration-300">
      {/* Subtle top border glow on hover */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-[var(--color-primary)] to-[#5D3FD3] flex items-center justify-center mb-6 shadow-lg shadow-[var(--color-primary)]/20 border border-white/20">
        {icon}
      </div>
      <h3 className="text-2xl font-medium tracking-tight mb-3 text-white">{title}</h3>
      <p className="text-gray-400 font-light leading-relaxed">{description}</p>
    </div>
  );
}