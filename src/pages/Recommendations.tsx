import { BrainCircuit, TrendingUp, ShieldAlert, ArrowRight } from "lucide-react";

export function Recommendations() {
  return (
    <div className="h-full w-full flex flex-col gap-6 animate-in fade-in duration-500 pb-20 overflow-y-auto thin-scrollbar relative">
      <div className="flex justify-between items-end mb-4 pt-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_15px_var(--color-primary-dim)]">
            <BrainCircuit size={24} />
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-white mb-2">AI Intelligence Feed</h1>
            <p className="font-mono text-sm text-primary">Neural net recommendations aligned to your risk architecture.</p>
          </div>
        </div>
        <div className="px-4 py-2 bg-surface border border-surface-highlight rounded-lg font-mono text-xs text-text-muted flex items-center gap-2">
          Model Confidence: <span className="text-primary font-bold">94.2%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 relative z-10">
        <StoryCard 
          symbol="INFY"
          name="Infosys Ltd"
          sector="Information Technology"
          signal="STRONG BUY"
          cagr="14.2%"
          risk="Moderate"
          desc="The AI detects a temporary undervaluation due to macro market panic, not structural weakness. Strong fundamentals indicating a high-probability mean reversion within 3-6 months. Suitable for your long-term wealth goal."
        />
        <StoryCard 
          symbol="HDFCBANK"
          name="HDFC Bank"
          sector="Financials"
          signal="HOLD"
          cagr="9.8%"
          risk="Low"
          desc="Currently experiencing consolidation. The algorithmic model suggests waiting for a breakout above ₹1650 before increasing allocation. Maintain current positions, as downside risk is minimal."
        />
        <StoryCard 
          symbol="RELIANCE"
          name="Reliance Ind"
          sector="Energy/Retail"
          signal="BUY"
          cagr="18.5%"
          risk="Moderate-High"
          desc="Sector rotation signals indicate capital influx into new energy ventures. Monte Carlo simulations project a 70% probability of outperforming the index over the next 4 quarters."
        />
      </div>
    </div>
  );
}

function StoryCard({ symbol, name, sector, signal, cagr, risk, desc }: any) {
  const isBuy = signal.includes('BUY');
  return (
    <div className="bg-surface/50 p-6 rounded-xl border border-surface-highlight flex flex-col gap-4 relative overflow-hidden group hover:border-primary/50 transition-colors duration-500">
      {/* Background flare */}
      <div className={`absolute top-0 right-0 w-48 h-48 blur-[80px] pointer-events-none transition-opacity duration-700 ${isBuy ? 'bg-primary/20 group-hover:bg-primary/30' : 'bg-surface-highlight opacity-30 group-hover:opacity-50'}`}></div>
      
      <div className="flex justify-between items-start relative z-10">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-lg bg-background border border-surface-highlight flex items-center justify-center font-display font-bold text-white shadow-inner">
            {symbol.substring(0,2)}
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-white">{symbol}</h3>
            <span className="font-sans text-xs text-text-muted">{name} • {sector}</span>
          </div>
        </div>
        <div className={`px-3 py-1 rounded border font-mono text-[10px] font-bold tracking-widest ${isBuy ? 'bg-primary/10 border-primary/30 text-primary shadow-[0_0_10px_var(--color-primary-dim)]' : 'bg-background border-surface-highlight text-text-muted justify-center flex items-center'}`}>
          {signal}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 bg-background/80 rounded-lg p-4 border border-surface-highlight/50 relative z-10">
        <div>
          <div className="font-mono text-[10px] text-text-muted mb-1 uppercase tracking-widest">Projected CAGR</div>
          <div className="font-mono text-sm text-white">{cagr}</div>
        </div>
        <div>
          <div className="font-mono text-[10px] text-text-muted mb-1 uppercase tracking-widest">Risk Alignment</div>
          <div className="font-mono text-sm text-white">{risk}</div>
        </div>
        <div>
          <div className="font-mono text-[10px] text-text-muted mb-1 uppercase tracking-widest">Sharpe Ratio</div>
          <div className="font-mono text-sm text-white">1.94</div>
        </div>
      </div>

      <div className="mt-2 relative z-10 flex-1">
        <div className="flex items-center gap-2 font-display text-sm font-semibold text-tertiary mb-2">
          <BrainCircuit size={16} /> AI Explanation
        </div>
        <p className="font-sans text-sm text-text-muted leading-relaxed">
          {desc}
        </p>
      </div>

      <div className="mt-4 pt-4 border-t border-surface-highlight flex justify-between items-center relative z-10">
        <div className="flex items-center gap-2 font-mono text-[10px] text-text-muted uppercase tracking-widest">
           <TrendingUp size={14} className={isBuy ? 'text-primary' : 'text-text-muted'} /> Win Rate: 68%
        </div>
        <button className="flex items-center gap-2 font-mono text-[10px] text-primary hover:text-white transition-colors uppercase tracking-widest group-hover:translate-x-1 duration-300">
           Execute <ArrowRight size={14} />
        </button>
      </div>
    </div>
  )
}
