"use client";

import { useState } from "react";
import { 
  Gamepad2, Target, TrendingUp, ShieldCheck, ArrowRight, CheckCircle2, 
  Sparkles, Star, ChevronDown, ChevronUp, Check, Apple, PlaySquare, ArrowUpRight
} from "lucide-react";

export default function LandingPage() {
  const [isWaitlistSubmitted, setIsWaitlistSubmitted] = useState(false);
  const [pricingInterval, setPricingInterval] = useState<"monthly" | "annual">("annual");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsWaitlistSubmitted(true);
  };

  const faqs = [
    { q: "What platforms are compatible with Gamify?", a: "Gamify makes handling your certification prep a breeze. It is fully responsive and works perfectly on iOS, Android, and all modern desktop browsers." },
    { q: "Who is Gamify best suited for?", a: "Gamify is built for students, professionals, and anyone preparing for rigorous certification exams (like the ACS) who are tired of boring, traditional study methods." },
    { q: "Is there a free trial available?", a: "Absolutely! We offer a full 14-day free trial so you can experience the first few Levels and Gates before committing to a premium plan." },
    { q: "How does the Final Boss exam work?", a: "The Final Boss is a timed, high-stakes mock exam with strict pass/fail logic. You must master the skill trees before you are allowed to face it." }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1B1B1B] font-sans selection:bg-[#7F56D9] selection:text-white relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#7F56D9] opacity-15 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Floating Pill Navbar */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="w-full max-w-5xl bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-2 py-2 flex items-center justify-between shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-2 pl-4">
            <Gamepad2 className="text-[#7F56D9] w-6 h-6" />
            <span className="text-lg font-bold tracking-tight text-[#1B1B1B]">Gamify.</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[15px] font-medium text-[#525252] hover:text-[#7F56D9] transition-colors">Features</a>
            <a href="#testimonials" className="text-[15px] font-medium text-[#525252] hover:text-[#7F56D9] transition-colors">Testimonials</a>
            <a href="#pricing" className="text-[15px] font-medium text-[#525252] hover:text-[#7F56D9] transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-2">
            <button className="hidden sm:block px-5 py-2.5 text-[15px] font-medium text-[#1B1B1B] hover:text-[#7F56D9] transition-colors">Log In</button>
            <button className="px-5 py-2.5 rounded-full bg-[#1B1B1B] text-white hover:bg-[#343434] transition-colors text-[15px] font-medium shadow-sm">
              Get Started
            </button>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F9F5FF] border border-[#E9E6F9] text-[13px] font-semibold text-[#7F56D9] mb-8 shadow-sm">
          <Sparkles className="w-4 h-4" />
          The Future of Certification Prep
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1] text-[#1B1B1B]">
          Your go-to App for <br className="hidden md:block" />
          mastering your exams.
        </h1>
        
        <p className="text-lg md:text-xl text-[#525252] max-w-2xl mb-10 font-normal leading-relaxed">
          Make preparing for your certifications a breeze with our gamified platform. Conquer gates, master skill trees, and defeat the final exam boss.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button 
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#7F56D9] hover:bg-[#6c48bd] text-white transition-all flex items-center justify-center gap-2 font-semibold text-[16px] shadow-md shadow-[#7F56D9]/20"
          >
            Start playing for free <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white border border-gray-200 text-[#1B1B1B] hover:bg-gray-50 transition-all font-semibold text-[16px] shadow-sm">
            Explore Mechanics
          </button>
        </div>

        {/* Hero Image / Video Mockup */}
        <div className="mt-20 w-full max-w-4xl relative rounded-[24px] bg-[#FAFAFA] border border-gray-200 p-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
          <div className="rounded-[16px] overflow-hidden bg-gray-100 aspect-video relative">
            <img 
              src="/hero-bg.jpg" 
              alt="Gamified Learning Interface" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-12 border-y border-gray-100 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-[#7F56D9] mb-8 uppercase tracking-widest">Trusted by over 2k+ learners</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            <div className="text-xl font-black font-serif">ACME CORP</div>
            <div className="text-xl font-black font-serif">GLOBEX</div>
            <div className="text-xl font-black font-serif">SOYUZ</div>
            <div className="text-xl font-black font-serif">INITECH</div>
            <div className="text-xl font-black font-serif">UMBRELLA</div>
          </div>
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section id="features" className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F9F5FF] text-[#7F56D9] mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#1B1B1B]">Hey, take a look at our core mechanics!</h2>
            <p className="text-[#525252] text-lg max-w-2xl mx-auto">Explore how Gamify simplifies learning with innovative progression tools designed for success.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Bento Card 1 */}
            <div className="md:col-span-2 bg-[#F9F5FF] border border-[#E9E6F9] rounded-[24px] p-10 flex flex-col md:flex-row items-center gap-8 overflow-hidden group">
              <div className="flex-1 text-left">
                <h3 className="text-3xl font-bold tracking-tight text-[#1B1B1B] mb-4">Levels & Gates</h3>
                <p className="text-[#525252] text-[17px] leading-relaxed">
                  Chapters become Levels. Assessment questions become Gates. You cannot advance until you prove your mastery. Stop reading blindly and start earning your progress.
                </p>
              </div>
              <div className="flex-1 w-full bg-white rounded-xl shadow-sm border border-gray-100 p-6 transform group-hover:scale-105 transition-transform duration-500">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#7F56D9] flex items-center justify-center text-white font-bold">L1</div>
                    <div className="h-3 bg-gray-100 rounded-full flex-1">
                      <div className="h-full bg-[#7F56D9] w-[60%] rounded-full"></div>
                    </div>
                 </div>
                 <div className="space-y-3">
                   <div className="h-12 border-2 border-green-500 bg-green-50 rounded-lg flex items-center px-4 font-semibold text-green-700"><CheckCircle2 className="w-5 h-5 mr-2"/> Gate 1 Passed</div>
                   <div className="h-12 border-2 border-[#7F56D9] bg-[#F9F5FF] rounded-lg flex items-center px-4 font-semibold text-[#7F56D9] animate-pulse">Gate 2 In Progress...</div>
                   <div className="h-12 border-2 border-gray-200 bg-gray-50 rounded-lg flex items-center px-4 font-medium text-gray-400">Gate 3 Locked</div>
                 </div>
              </div>
            </div>

            {/* Bento Card 2 */}
            <div className="bg-[#FAFAFA] border border-gray-200 rounded-[24px] p-10 flex flex-col group">
              <div className="w-14 h-14 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6 text-[#7F56D9]">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[#1B1B1B] mb-3">Dynamic Skill Tree</h3>
              <p className="text-[#525252] text-[16px] leading-relaxed mb-6">
                Track your mastery across distinct areas. Unlock nodes as you progress and visually see your knowledge grow.
              </p>
            </div>

            {/* Bento Card 3 */}
            <div className="bg-[#1B1B1B] text-white border border-gray-800 rounded-[24px] p-10 flex flex-col md:col-span-3 items-center text-center group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#7F56D9]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <ShieldCheck className="w-16 h-16 text-[#7F56D9] mb-6 relative z-10" />
              <h3 className="text-3xl font-bold tracking-tight mb-4 relative z-10">The Final Boss Exam</h3>
              <p className="text-gray-400 text-lg max-w-3xl relative z-10">
                A timed, high-stakes mock exam with pass/fail logic. Defeat the final boss to earn your certification readiness. Only the prepared survive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbered Steps Section */}
      <section className="py-32 px-6 bg-[#FAFAFA] border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#1B1B1B]">Tap into the awesome power of Gamify!</h2>
            <p className="text-[#525252] text-lg max-w-2xl mx-auto">Managing your learning has never been easier. We streamline your journey by offering intuitive features.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Image Placeholder */}
            <div className="flex-1 w-full bg-white rounded-[32px] border border-gray-200 shadow-lg p-4 aspect-[4/5] relative overflow-hidden">
               <img 
                  src="/hero-bg.jpg" 
                  alt="Interface" 
                  className="w-full h-full object-cover rounded-[24px]"
                />
            </div>

            {/* Right Steps */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Step 1 */}
              <div className="bg-white border border-gray-200 rounded-[24px] p-8 shadow-sm flex gap-6 hover:border-[#7F56D9] transition-colors">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#F9F5FF] text-[#7F56D9] flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h4 className="text-xl font-bold text-[#1B1B1B] mb-2">Create your Profile</h4>
                  <p className="text-[#525252]">Set your ultimate goal and configure your custom learning path right from the dashboard.</p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="bg-white border border-gray-200 rounded-[24px] p-8 shadow-sm flex gap-6 hover:border-[#7F56D9] transition-colors">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#F9F5FF] text-[#7F56D9] flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h4 className="text-xl font-bold text-[#1B1B1B] mb-2">Climb the Leaderboards</h4>
                  <p className="text-[#525252]">Your progress earns you XP. Rank up against other learners and keep your daily streak alive.</p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="bg-[#1B1B1B] border border-black rounded-[24px] p-8 shadow-lg flex gap-6">
                <div className="w-12 h-12 shrink-0 rounded-full bg-white text-[#1B1B1B] flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Get Certified</h4>
                  <p className="text-gray-400">Defeat the Final Boss exam, prove your mastery, and walk into your real exam with total confidence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 px-6 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F9F5FF] text-[#7F56D9] mb-6">
            <Star className="w-6 h-6 fill-[#7F56D9]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#1B1B1B]">Here's what our users are saying!</h2>
          <p className="text-[#525252] text-lg max-w-2xl mx-auto mb-16">Our platform is transforming exam prep. Here’s what our top students say.</p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <TestimonialCard 
              quote="Gamify has completely transformed the way I study. The gates make sure I actually understand the material before moving on."
              name="Amanda Lee"
              handle="@amandalee"
              initials="AL"
              color="bg-blue-100 text-blue-700"
            />
            <TestimonialCard 
              quote="The skill tree visualization kept me addicted to studying. I loved seeing my ACS nodes light up as I progressed."
              name="Marco Kelly"
              handle="@marcokelly"
              initials="MK"
              color="bg-green-100 text-green-700"
            />
            <TestimonialCard 
              quote="The Final Boss was brutal, but because I passed it, the actual certification exam felt like an absolute breeze!"
              name="Nina Patel"
              handle="@ninapatel"
              initials="NP"
              color="bg-purple-100 text-purple-700"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6 bg-[#FAFAFA] border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F9F5FF] text-[#7F56D9] mb-6">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#1B1B1B]">Plans for Every Learner</h2>
          <p className="text-[#525252] text-lg max-w-2xl mx-auto mb-10">Empowering you to take charge of your future with intuitive tools.</p>

          {/* Toggle */}
          <div className="inline-flex bg-white border border-gray-200 rounded-lg p-1.5 mb-16 shadow-sm">
            <button 
              onClick={() => setPricingInterval("monthly")}
              className={`px-6 py-2.5 rounded-md font-semibold text-[15px] transition-all ${pricingInterval === "monthly" ? "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)] text-[#1B1B1B]" : "text-[#525252] hover:text-[#1B1B1B]"}`}
            >
              Monthly billing
            </button>
            <button 
              onClick={() => setPricingInterval("annual")}
              className={`px-6 py-2.5 rounded-md font-semibold text-[15px] transition-all flex items-center gap-2 ${pricingInterval === "annual" ? "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)] text-[#1B1B1B]" : "text-[#525252] hover:text-[#1B1B1B]"}`}
            >
              Annual billing <span className="text-xs text-[#7F56D9] bg-[#F9F5FF] px-2 py-0.5 rounded-full">Save 20%</span>
            </button>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {/* Free Plan */}
            <div className="bg-white border border-gray-200 rounded-[24px] p-10 shadow-sm flex flex-col">
              <h3 className="text-2xl font-bold text-[#1B1B1B] mb-2">Basic Cadet</h3>
              <div className="text-5xl font-black text-[#1B1B1B] mb-4">$0<span className="text-lg font-medium text-gray-400">/mth</span></div>
              <p className="text-[#525252] mb-8 pb-8 border-b border-gray-100">How much to kick things off?</p>
              
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center gap-3 text-[#525252]"><Check className="w-5 h-5 text-[#7F56D9]"/> Access to 3 starting Levels</li>
                <li className="flex items-center gap-3 text-[#525252]"><Check className="w-5 h-5 text-[#7F56D9]"/> Basic Profile Leaderboard</li>
                <li className="flex items-center gap-3 text-[#525252]"><Check className="w-5 h-5 text-[#7F56D9]"/> Daily Streak tracking</li>
              </ul>
              <button className="w-full py-4 rounded-lg bg-[#F9F5FF] text-[#7F56D9] font-bold hover:bg-[#E9E6F9] transition-colors border border-[#E9E6F9]">
                Start for Free
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-[#1B1B1B] border border-black rounded-[24px] p-10 shadow-xl flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#7F56D9] text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg">POPULAR</div>
              <h3 className="text-2xl font-bold text-white mb-2">Pro Commander</h3>
              <div className="text-5xl font-black text-white mb-4">${pricingInterval === "annual" ? "12" : "15"}<span className="text-lg font-medium text-gray-400">/mth</span></div>
              <p className="text-gray-400 mb-8 pb-8 border-b border-gray-800">Perfect for serious learners!</p>
              
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center gap-3 text-white"><Check className="w-5 h-5 text-[#7F56D9]"/> Unlock all Levels & Gates</li>
                <li className="flex items-center gap-3 text-white"><Check className="w-5 h-5 text-[#7F56D9]"/> Full Dynamic Skill Tree</li>
                <li className="flex items-center gap-3 text-white"><Check className="w-5 h-5 text-[#7F56D9]"/> Access to The Final Boss</li>
                <li className="flex items-center gap-3 text-white"><Check className="w-5 h-5 text-[#7F56D9]"/> Priority support</li>
              </ul>
              <button className="w-full py-4 rounded-lg bg-[#7F56D9] text-white font-bold hover:bg-[#6c48bd] transition-colors shadow-lg shadow-[#7F56D9]/20">
                Start 14-Day Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#1B1B1B]">Frequently asked questions</h2>
            <p className="text-[#525252] text-lg">Everything you need to know about the product and billing.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl bg-[#FAFAFA] overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-[#1B1B1B] text-[16px]">{faq.q}</span>
                  <div className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center shrink-0">
                    {openFaq === idx ? <ChevronUp className="w-4 h-4 text-[#525252]"/> : <ChevronDown className="w-4 h-4 text-[#525252]"/>}
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-[#525252] leading-relaxed border-t border-gray-100 pt-4 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA / Waitlist Section */}
      <section id="waitlist" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-[#7F56D9] rounded-[32px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-[#7F56D9]/20">
          {/* Decorative glowing circles inside CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white relative z-10">
            Ready to enter the arena?
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-normal relative z-10">
            Don't miss out on the excitement! Secure your spot on the waitlist to get early access when we launch.
          </p>

          <div className="relative z-10">
            {isWaitlistSubmitted ? (
              <div className="flex flex-col items-center justify-center p-8 bg-white/10 border border-white/20 rounded-2xl max-w-lg mx-auto backdrop-blur-sm">
                <CheckCircle2 className="w-12 h-12 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
                <p className="text-white/80">Keep an eye on your inbox. We will notify you when the gates open.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email address" 
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-6 py-4 focus:outline-none focus:border-white focus:bg-white/20 transition-colors text-white placeholder:text-white/60 backdrop-blur-md"
                />
                <button 
                  type="submit"
                  className="px-8 py-4 rounded-lg bg-white text-[#7F56D9] hover:bg-gray-100 font-bold transition-all shadow-lg active:scale-95 text-[16px]"
                >
                  Get Access
                </button>
              </form>
            )}
          </div>

          {/* App Store Buttons */}
          <div className="mt-16 flex items-center justify-center gap-4 relative z-10 flex-wrap">
            <button className="flex items-center gap-3 bg-[#1B1B1B] hover:bg-black text-white px-6 py-3 rounded-lg border border-black/50 transition-colors">
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-[10px] leading-tight text-gray-300">Download on the</div>
                <div className="text-[15px] font-semibold leading-tight">App Store</div>
              </div>
            </button>
            <button className="flex items-center gap-3 bg-[#1B1B1B] hover:bg-black text-white px-6 py-3 rounded-lg border border-black/50 transition-colors">
              <PlaySquare className="w-6 h-6" />
              <div className="text-left">
                <div className="text-[10px] leading-tight text-gray-300">GET IT ON</div>
                <div className="text-[15px] font-semibold leading-tight">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 pt-20 pb-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
            
            {/* Brand Col */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Gamepad2 className="text-[#7F56D9] w-7 h-7" />
                <span className="text-2xl font-bold tracking-tight text-[#1B1B1B]">Gamify.</span>
              </div>
              <p className="text-[#525252] leading-relaxed mb-6">
                We're here to assist you! Whether you have a question or need guidance on passing your exams.
              </p>
            </div>

            {/* Links Cols */}
            <div>
              <h4 className="font-bold text-[#1B1B1B] mb-6 text-lg">Platform</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[#525252] hover:text-[#7F56D9] transition-colors font-medium">Home</a></li>
                <li><a href="#" className="text-[#525252] hover:text-[#7F56D9] transition-colors font-medium">Features</a></li>
                <li><a href="#" className="text-[#525252] hover:text-[#7F56D9] transition-colors font-medium">Pricing</a></li>
                <li><a href="#" className="text-[#525252] hover:text-[#7F56D9] transition-colors font-medium">About Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#1B1B1B] mb-6 text-lg">Resources</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[#525252] hover:text-[#7F56D9] transition-colors font-medium">Blog</a></li>
                <li><a href="#" className="text-[#525252] hover:text-[#7F56D9] transition-colors font-medium">Help Center</a></li>
                <li><a href="#" className="text-[#525252] hover:text-[#7F56D9] transition-colors font-medium">Contact Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#1B1B1B] mb-6 text-lg">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[#525252] hover:text-[#7F56D9] transition-colors font-medium">Terms of Service</a></li>
                <li><a href="#" className="text-[#525252] hover:text-[#7F56D9] transition-colors font-medium">Privacy Policy</a></li>
                <li><a href="#" className="text-[#525252] hover:text-[#7F56D9] transition-colors font-medium">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#848484] text-sm font-medium">
              © 2026 Powered by Gamify. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#848484] hover:text-[#1B1B1B]"><span className="sr-only">Twitter</span><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></a>
              <a href="#" className="text-[#848484] hover:text-[#1B1B1B]"><span className="sr-only">GitHub</span><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg></a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

// Reusable Testimonial Card Component
function TestimonialCard({ quote, name, handle, initials, color }: { quote: string, name: string, handle: string, initials: string, color: string }) {
  return (
    <div className="bg-[#FAFAFA] border border-[#EDEDED] p-8 rounded-[16px] flex flex-col h-full hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#7F56D9] text-[#7F56D9]" />
        ))}
      </div>
      <p className="text-[#1B1B1B] font-medium text-[16px] leading-relaxed mb-8 flex-1">"{quote}"</p>
      <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${color}`}>
          {initials}
        </div>
        <div>
          <h5 className="font-bold text-[#1B1B1B]">{name}</h5>
          <span className="text-sm text-[#848484]">{handle}</span>
        </div>
      </div>
    </div>
  );
}