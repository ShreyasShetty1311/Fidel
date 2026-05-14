import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { AlertTriangle, Stars, PieChart, Briefcase, TrendingUp, Activity, Shield, Target, Globe, Zap, CheckCircle2, Repeat, BrainCircuit } from 'lucide-react';

const fanData = [
  { name: 'Q1', min: 10, target: 12, max: 15 },
  { name: 'Q2', min: 11, target: 14, max: 18 },
  { name: 'Q3', min: 12, target: 16, max: 22 },
  { name: 'Q4', min: 12.5, target: 18, max: 25 },
];

export function Dashboard() {
  return (
    <div className="h-full w-full grid grid-cols-12 grid-rows-6 gap-4 animate-in fade-in duration-700">
      
      {/* Central Hero Formally Globe */}
      <div className="col-span-12 lg:col-span-6 row-span-4 relative flex flex-col items-center justify-center overflow-hidden rounded-xl">
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <div className="w-[500px] h-[500px] border border-dashed border-secondary rounded-full animate-pulse"></div>
          <div className="absolute w-[400px] h-[400px] border border-primary/30 rounded-full"></div>
          <div className="absolute w-[300px] h-[300px] border border-tertiary/30 rounded-full"></div>
        </div>
        <div className="relative w-80 h-80 rounded-full bg-gradient-to-b from-surface to-background shadow-[0_0_100px_var(--color-secondary)] flex items-center justify-center border border-surface-highlight">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_var(--color-primary-dim)_100%)] rounded-full pointer-events-none"></div>
          <div className="text-center z-10">
            <div className="font-mono text-[10px] uppercase tracking-widest text-secondary mb-1">AI Signal Engine</div>
            <div className="font-display text-4xl font-bold text-text-main">BULLISH</div>
            <div className="font-mono text-xs text-success mt-1 tracking-widest">CONFIDENCE 94.2%</div>
          </div>
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 p-2 bg-surface border border-secondary/50 rounded font-mono text-[9px] whitespace-nowrap uppercase tracking-tighter text-text-main">
            Mumbai: Market Open +1.2%
          </div>
          <div className="absolute top-1/2 -right-20 p-2 bg-surface border border-tertiary/50 rounded font-mono text-[9px] whitespace-nowrap uppercase tracking-tighter text-text-main">
            New York: Futures Steady
          </div>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-8 w-full px-12 z-10">
          <div className="text-center">
            <div className="font-mono text-[10px] text-text-muted uppercase mb-1">Market Volatility</div>
            <div className="font-mono text-sm text-warning">Medium (VIX 18.2)</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-[10px] text-text-muted uppercase mb-1">Optimization Rank</div>
            <div className="font-mono text-sm text-primary">Top 5% Tier</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-[10px] text-text-muted uppercase mb-1">Algo Efficiency</div>
            <div className="font-mono text-sm text-tertiary">0.92 Alpha</div>
          </div>
        </div>
      </div>

      {/* Left Panel: Portfolio Intelligence */}
      <div className="hidden lg:flex col-span-3 row-span-4 flex-col gap-4">
        <div className="bg-surface-glass border border-surface-highlight p-5 rounded-lg flex-1 group hover:border-primary/50 transition-colors">
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-secondary mb-4 flex items-center gap-2">
            <PieChart size={14} /> Portfolio Intelligence
          </h2>
          <div className="space-y-6">
            <div>
              <div className="text-xs text-text-muted flex items-center gap-1.5 mb-1"><Briefcase size={12}/> Total Portfolio Value</div>
              <div className="text-3xl font-light tracking-tight font-display">₹4,82,900<span className="text-xs ml-1 text-text-muted font-sans">.42</span></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="font-mono text-[10px] text-text-muted uppercase flex items-center gap-1.5 mb-1"><TrendingUp size={10} className="text-success"/> Unrealized P&L</div>
                <div className="text-success text-sm font-mono tracking-tighter">+₹54,020 (12.4%)</div>
              </div>
              <div>
                <div className="font-mono text-[10px] text-text-muted uppercase flex items-center gap-1.5 mb-1"><Activity size={10} className="text-primary"/> Sharpe Ratio</div>
                <div className="text-primary text-sm font-mono">1.84</div>
              </div>
            </div>
            <div className="pt-4 border-t border-surface-highlight">
              <div className="font-mono text-[10px] text-text-muted uppercase mb-2 flex items-center gap-1.5"><Shield size={10}/> Risk Tolerance Profile</div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-white">Aggressive Growth</span>
                <span className="text-xs text-primary font-mono tracking-widest">82%</span>
              </div>
              <div className="h-1 w-full bg-background rounded-full overflow-hidden">
                <div className="h-full bg-primary shadow-[0_0_8px_var(--color-primary)]" style={{ width: '82%' }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-mono text-[10px] text-text-muted uppercase flex items-center gap-1.5"><Target size={10}/> Goal Probability (Retirement 2045)</div>
              <div className="flex items-end gap-1">
                <span className="text-2xl font-light font-display text-white">74.2</span>
                <span className="text-xs mb-1 text-success font-mono font-bold">%</span>
              </div>
              <div className="flex gap-1" style={{ width: '100%' }}>
                <div className="flex-1 h-8 bg-success/20 border-b-2 border-success"></div>
                <div className="flex-1 h-12 bg-success/30 border-b-2 border-success"></div>
                <div className="flex-1 h-16 bg-success/40 border-b-2 border-success"></div>
                <div className="flex-1 h-14 bg-success/30 border-b-2 border-success"></div>
                <div className="flex-1 h-20 bg-success/50 border-b-2 border-success relative">
                  <div className="absolute -top-6 right-0 text-[8px] font-mono text-success">PROJECTED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: Active Intel & Behavioral */}
      <div className="hidden lg:flex col-span-3 row-span-4 flex-col gap-4">
        <div className="bg-surface/50 border border-surface-highlight rounded-lg p-4 flex flex-col h-1/2 group hover:border-tertiary/50 transition-colors">
          <h3 className="font-mono text-[10px] uppercase tracking-widest text-tertiary mb-3 flex justify-between items-center">
            <span className="flex items-center gap-2"><Globe className="animate-pulse" size={14}/> Live Intelligence Feed</span>
            <span className="w-2 h-2 bg-danger rounded-full shadow-[0_0_8px_var(--color-danger)] animate-pulse"></span>
          </h3>
          <div className="font-mono text-[10px] space-y-2 overflow-hidden flex-1 opacity-80 thin-scrollbar overflow-y-auto">
            <p className="text-secondary/80 flex gap-2"><Zap size={10} className="mt-0.5 shrink-0"/> [14:20:01] Loading Monte Carlo sims...</p>
            <p className="text-success flex gap-2"><CheckCircle2 size={10} className="mt-0.5 shrink-0"/> [14:20:04] Simulation 402/1000 complete.</p>
            <p className="text-text-main flex gap-2"><Repeat size={10} className="mt-0.5 shrink-0"/> [14:20:10] Detecting sector rotation: Energy → IT</p>
            <p className="text-warning flex gap-2"><AlertTriangle size={10} className="mt-0.5 shrink-0"/> [14:21:02] ALERT: FOMO pattern detected in midcaps.</p>
            <p className="text-secondary/80 flex gap-2"><Activity size={10} className="mt-0.5 shrink-0"/> [14:21:45] Rerouting portfolio allocation...</p>
            <p className="text-success flex gap-2"><CheckCircle2 size={10} className="mt-0.5 shrink-0"/> [14:22:12] Optimization cycle finished.</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-1 h-3 bg-primary animate-pulse"></span>
              <span className="text-text-muted">Waiting for next signal...</span>
            </div>
          </div>
        </div>

        <div className="bg-surface-glass border border-surface-highlight rounded-lg p-4 flex-1 group hover:border-primary/50 transition-colors">
          <h3 className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
            <BrainCircuit size={14} /> Behavioral Nudges
          </h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded bg-tertiary/20 flex items-center justify-center shrink-0">
                <AlertTriangle size={16} className="text-tertiary" />
              </div>
              <div className="text-[11px] font-sans">
                <div className="font-semibold text-text-main">Overtrading Warning</div>
                <p className="text-text-muted mt-0.5">You've placed 4 trades today. AI suggests 2.7 as optimal for your profile.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded bg-success/20 flex items-center justify-center shrink-0">
                <Stars size={16} className="text-success" />
              </div>
              <div className="text-[11px] font-sans">
                <div className="font-semibold text-text-main">Patience Score +10</div>
                <p className="text-text-muted mt-0.5">Excellent hold through minor 2% drawdown in HDFC Bank.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Dock: Analytics Cards */}
      <div className="col-span-12 row-span-2 border-t border-surface-highlight bg-surface/60 grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-xl -mx-4 md:mx-0">
        
        {/* Monte Carlo Fan Chart */}
        <div className="bg-background rounded border border-surface-highlight p-3 flex flex-col justify-between overflow-hidden relative group">
          <div className="font-mono text-[9px] uppercase text-text-muted mb-2">Monte Carlo Fan Chart</div>
          <div className="h-20 w-full relative z-0">
             <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={fanData}>
                    <Area type="monotone" dataKey="max" stroke="none" fill="var(--color-primary)" fillOpacity={0.1} />
                    <Area type="monotone" dataKey="target" stroke="var(--color-primary)" strokeWidth={1} strokeDasharray="3 3" fill="none" />
                </AreaChart>
             </ResponsiveContainer>
          </div>
          <div className="flex justify-between items-end mt-2 z-10 relative">
            <span className="font-sans text-[10px] text-text-main">Goal Met (65%)</span>
            <span className="font-sans text-[10px] text-success font-bold">↑ +4.2%</span>
          </div>
        </div>

        {/* Efficient Frontier */}
        <div className="bg-background rounded border border-surface-highlight p-3 flex flex-col justify-between overflow-hidden relative">
          <div className="font-mono text-[9px] uppercase text-text-muted mb-2">Efficient Frontier</div>
          <div className="h-20 w-full relative">
            <div className="absolute w-1.5 h-1.5 rounded-full bg-primary top-2 left-1/2 shadow-[0_0_8px_var(--color-primary)]"></div>
            <div className="w-full h-full border-l border-b border-surface-highlight"></div>
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-primary/5 to-primary/20"></div>
          </div>
          <div className="text-[10px] text-center text-text-main mt-2 font-sans">Optimal Portfolio Identified</div>
        </div>

        {/* Sector Allocation */}
        <div className="bg-background rounded border border-surface-highlight p-3 flex flex-col justify-between overflow-hidden">
           <div className="font-mono text-[9px] uppercase text-text-muted mb-2">Sector Allocation</div>
           <div className="flex flex-1 items-center justify-center -mt-2">
             <div className="w-16 h-16 rounded-full border-[8px] border-l-secondary border-t-primary border-r-tertiary border-b-surface"></div>
           </div>
           <div className="text-[10px] text-center text-text-muted font-sans mt-2">78% Technology & Energy</div>
        </div>

        {/* Behavioral AI Card */}
        <div className="bg-gradient-to-br from-secondary/10 to-tertiary/10 rounded border border-surface-highlight/50 p-3 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-primary blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div className="font-mono text-[9px] uppercase text-primary font-bold">AI Coach Suggestion</div>
          <p className="font-sans text-[10px] leading-relaxed italic text-text-main mt-1 z-10">
            "Your emergency fund is fully capitalized. Recommended: Diversify 15% of surplus into Gold ETFs to hedge upcoming volatility."
          </p>
          <button className="mt-2 bg-primary text-background font-mono text-[9px] font-bold py-1 px-3 rounded uppercase z-10 hover:bg-primary/90 transition-colors">
            Execute Advice
          </button>
        </div>

      </div>
    </div>
  );
}
