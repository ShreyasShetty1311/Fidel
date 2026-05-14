import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, TrendingUp, BrainCircuit } from "lucide-react";

export function Landing() {
  return (
    <div className="min-h-screen bg-background text-text-main overflow-x-hidden relative flex flex-col items-center justify-center">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-primary/10 rounded-[100%] blur-[150px] -translate-y-1/2 pointer-events-none"></div>
      
      <div className="z-10 w-full max-w-5xl mx-auto px-6 py-24 text-center flex flex-col items-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="font-mono text-xs text-primary uppercase tracking-widest font-bold">Systematic Engine v3.4 Live</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
          Investment Intelligence <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
            For The Next Generation
          </span>
        </h1>

        <p className="font-sans text-lg md:text-xl text-text-muted max-w-2xl mb-12 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
          Quant-grade portfolio optimization, explainable AI recommendations, and probabilistic financial forecasting designed specifically for first-time retail investors.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-500">
          <Link to="/onboarding" className="px-8 py-4 bg-primary text-background font-mono text-sm uppercase tracking-widest font-bold rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,229,255,0.4)] flex items-center gap-2 group">
            Start Investing Smarter
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/dashboard" className="px-8 py-4 bg-surface-glass border border-surface-highlight text-text-main font-mono text-sm uppercase tracking-widest font-bold rounded-lg hover:bg-surface-glass/80 transition-all flex items-center gap-2">
            Explore Demo
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-32 animate-in fade-in duration-1000 delay-700">
          <FeatureCard 
            icon={<BrainCircuit className="text-primary" />}
            title="Explainable AI"
            desc="Every recommendation comes with a plain-English story, not just a black-box signal."
          />
          <FeatureCard 
            icon={<TrendingUp className="text-secondary" />}
            title="Quant Optimization"
            desc="Efficient frontier models applied to your personal risk tolerance and goals."
          />
          <FeatureCard 
            icon={<ShieldCheck className="text-tertiary" />}
            title="Behavioral Guardrails"
            desc="Real-time interventions to prevent emotional trading and FOMO."
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-surface/50 border border-surface-highlight p-6 rounded-xl hover:border-primary/50 flex flex-col items-center text-center transition-colors">
      <div className="w-12 h-12 bg-surface-highlight rounded-full flex items-center justify-center mb-4 border border-surface-highlight shadow-inner">
        {icon}
      </div>
      <h3 className="font-display font-semibold text-xl text-white mb-2 tracking-tight">{title}</h3>
      <p className="font-sans text-text-muted text-sm leading-relaxed">{desc}</p>
    </div>
  )
}
