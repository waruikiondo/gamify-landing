"use client";

import { useState } from "react";
import { Gamepad2, TrendingUp, Target, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function LandingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-white font-sans selection:bg-[var(--color-primary)] selection:text-white pb-20">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full border-b border-[var(--color-borderDark)] bg-[var(--color-background)]/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gamepad2 className="text-[var(--color-primary)] w-8 h-8" />
            <span className="text-2xl font-black tracking-wider">GAMIFY</span>
          </div>
          <button className="px-6 py-2 rounded-xl bg-[var(--color-surface)] border border-[var(--color-borderDark)] hover:border-[var(--color-primary)] transition-colors text-sm font-bold shadow-sm">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section - BULLETPROOF (No Framer Motion) */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mt-10">
          
          {/* Left Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-primary)]/30 text-[var(--color-primary)] text-xs font-bold tracking-widest uppercase shadow-[var(--shadow-neon)]">
              The Future of Certification Prep
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Stop Studying. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[#b873ff]">
                Start Leveling Up.
              </span>
            </h1>
            <p className="text-[var(--color-textGrey)] text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0">
              Traditional learning is broken and boring. Gamify turns your preparation into a progression-based adventure. Conquer gates, master skill trees, and defeat the final exam boss.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[var(--color-primary)] hover:bg-[#9d44f0] shadow-[var(--shadow-neon)] hover:shadow-[var(--shadow-neon-strong)] transition-all flex items-center justify-center gap-2 font-bold text-lg"
              >
                Join the Waitlist <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Image Content - STANDARD HTML IMG TAG */}
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden border border-[var(--color-borderDark)] shadow-[var(--shadow-neon-strong)] aspect-video lg:aspect-square object-cover">
              <img 
                src="/hero-bg.jpg" 
                alt="Gamified Learning Interface" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-background)]/80 via-transparent to-[var(--color-primary)]/20 pointer-events-none"></div>
            </div>
          </div>

        </div>
      </section>

      {/* Mechanics Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">How the Game is Played</h2>
          <p className="text-[var(--color-textGrey)] text-lg">A fully data-driven learning ecosystem designed to keep you addicted to progress.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<Target className="w-8 h-8 text-[var(--color-primary)]" />}
            title="Levels & Gates"
            description="Chapters become Levels. Assessment questions become Gates. You cannot advance until you prove your mastery."
          />
          <FeatureCard 
            icon={<TrendingUp className="w-8 h-8 text-[var(--color-primary)]" />}
            title="Dynamic Skill Tree"
            description="Track your mastery across distinct ACS areas. Unlock nodes as you progress and visually see your knowledge grow."
          />
          <FeatureCard 
            icon={<ShieldCheck className="w-8 h-8 text-[var(--color-primary)]" />}
            title="The Final Boss"
            description="A timed, high-stakes mock exam with pass/fail logic. Defeat the final boss to earn your certification readiness."
          />
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-24 px-6 border-t border-[var(--color-borderDark)] bg-[var(--color-surface)]/30 mt-12 rounded-3xl max-w-5xl mx-auto shadow-xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4">Ready to enter the arena?</h2>
          <p className="text-[var(--color-textGrey)] mb-10 text-lg">Drop your email below to secure your spot and get early access when we launch.</p>
          
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center p-8 border border-[var(--color-primary)]/50 bg-[var(--color-primary)]/10 rounded-2xl">
              <CheckCircle2 className="w-12 h-12 text-[var(--color-primary)] mb-4" />
              <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
              <p className="text-[var(--color-textGrey)]">Keep an eye on your inbox. We will notify you when the gates open.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                required
                placeholder="Enter your email address" 
                className="flex-1 bg-[var(--color-background)] border border-[var(--color-borderDark)] rounded-xl px-4 py-4 focus:outline-none focus:border-[var(--color-primary)] transition-colors text-white placeholder:text-[var(--color-textGrey)] shadow-inner"
              />
              <button 
                type="submit"
                className="px-8 py-4 rounded-xl bg-[var(--color-primary)] hover:bg-[#9d44f0] font-bold transition-all shadow-[var(--shadow-neon)] hover:shadow-[var(--shadow-neon-strong)] active:scale-95"
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

// Reusable card component (No Framer Motion)
function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-[var(--color-surface)] border border-[var(--color-borderDark)] p-8 rounded-2xl hover:border-[var(--color-primary)]/50 transition-all group shadow-sm hover:shadow-[var(--shadow-neon)]">
      <div className="w-14 h-14 rounded-xl bg-[var(--color-background)] border border-[var(--color-borderDark)] flex items-center justify-center mb-6 group-hover:shadow-[var(--shadow-neon)] transition-shadow">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-[var(--color-textGrey)] leading-relaxed">{description}</p>
    </div>
  );
}