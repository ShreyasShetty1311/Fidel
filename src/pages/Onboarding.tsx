import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Onboarding() {
  const [step, setStep] = useState(1);
  const [savings, setSavings] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else navigate('/dashboard');
  };

  const handleBack = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-background text-text-main flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-tertiary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="bg-surface/80 border border-surface-highlight max-w-2xl w-full p-8 md:p-12 rounded-2xl relative overflow-hidden shadow-2xl backdrop-blur-md z-10">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-background">
          <div className="h-full bg-primary shadow-[0_0_10px_var(--color-primary)] transition-all duration-500" style={{ width: `${(step / 3) * 100}%` }}></div>
        </div>

        <div className="mb-8">
          <span className="font-mono text-primary text-[10px] uppercase tracking-widest font-bold">Profile Initialization {step}/3</span>
          <h2 className="font-display text-3xl font-bold mt-2 text-white tracking-tight">
            {step === 1 && "Financial Baseline"}
            {step === 2 && "Risk Architecture"}
            {step === 3 && "Health Assessment"}
          </h2>
        </div>

        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Monthly Income</label>
              <input type="number" placeholder="₹50,000" className="w-full bg-transparent border-b border-surface-highlight py-3 text-3xl font-display font-light text-white focus:outline-none focus:border-primary transition-colors placeholder:text-surface-highlight/50" />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Emergency Savings</label>
              <input type="number" onChange={(e) => setSavings(Number(e.target.value))} placeholder="₹1,00,000" className="w-full bg-transparent border-b border-surface-highlight py-3 text-3xl font-display font-light text-white focus:outline-none focus:border-primary transition-colors placeholder:text-surface-highlight/50" />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Investment Goal</label>
              <select className="w-full bg-background border border-surface-highlight rounded-lg p-4 font-sans text-white focus:outline-none focus:border-primary appearance-none cursor-pointer">
                <option>Wealth Generation (Long Term)</option>
                <option>House Downpayment (3-5 Years)</option>
                <option>Aggressive Capital Growth</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Comfort With Volatility</label>
              <div className="flex gap-4">
                <button className="flex-1 py-4 bg-background border border-surface-highlight hover:border-text-muted text-text-muted hover:text-white rounded-lg font-mono text-xs transition-colors">LOW</button>
                <button className="flex-1 py-4 bg-primary/10 text-primary border border-primary/50 shadow-[0_0_15px_var(--color-primary-dim)] rounded-lg font-mono text-xs font-bold transition-colors">MODERATE</button>
                <button className="flex-1 py-4 bg-background border border-surface-highlight hover:border-danger hover:text-danger rounded-lg font-mono text-xs transition-colors">HIGH</button>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            {savings < 50000 ? (
               <div className="bg-danger/5 border border-danger/20 rounded-xl p-8 flex flex-col items-center text-center">
                 <ShieldAlert className="text-danger w-16 h-16 mb-4" />
                 <h3 className="font-display text-2xl text-danger mb-2 font-bold tracking-tight">Stabilize First</h3>
                 <p className="font-sans text-sm text-text-muted mb-8 max-w-md leading-relaxed">Your emergency savings indicate high vulnerability. The AI recommends building a dedicated safety net before allocating capital to equities.</p>
                 <button onClick={() => navigate('/dashboard')} className="px-8 py-3 bg-danger text-white font-mono text-xs font-bold rounded hover:bg-danger/90 uppercase tracking-widest transition-colors mb-2">Enable Stabilization Mode</button>
               </div>
            ) : (
               <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 flex flex-col items-center text-center relative overflow-hidden">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[60px] pointer-events-none"></div>
                 <div className="relative z-10">
                   <div className="w-20 h-20 rounded-full border-4 border-surface border-t-primary animate-spin mx-auto mb-6"></div>
                   <Sparkles className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary" size={24} />
                 </div>
                 <h3 className="font-display text-2xl text-primary mb-2 font-bold tracking-tight relative z-10">Profile Optimized</h3>
                 <p className="font-sans text-sm text-text-muted mb-8 max-w-md leading-relaxed relative z-10">Your baseline permits aggressive allocation with a controlled downside. Systematic Engine is ready.</p>
                 <button onClick={() => navigate('/dashboard')} className="relative z-10 px-8 py-3 bg-primary text-background font-mono text-xs font-bold rounded hover:bg-primary/90 uppercase shadow-[0_0_20px_var(--color-primary-dim)] tracking-widest transition-colors">Initialize Dashboard</button>
               </div>
            )}
          </div>
        )}

        <div className="mt-12 flex justify-between items-center">
          {step > 1 ? (
            <button onClick={handleBack} className="flex items-center gap-2 font-mono text-[10px] text-text-muted hover:text-white transition-colors uppercase tracking-widest"><ArrowLeft size={14}/> Back</button>
          ) : <div></div>}
          
          {step < 3 && (
            <button onClick={handleNext} className="flex items-center gap-2 px-6 py-3 bg-white text-background hover:bg-white/90 rounded font-mono text-[10px] uppercase font-bold tracking-widest transition-colors group">
              Continue <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
