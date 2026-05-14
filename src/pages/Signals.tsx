import React from 'react';
import { Radar, AlertTriangle, ShieldAlert, Sparkles, Activity } from 'lucide-react';

const signals = [
  { id: 1, type: 'buy', asset: 'INFY', confidence: '94.2%', time: '14:22:01', message: 'Strong structural growth identified. Volatility threshold stable.', status: 'active' },
  { id: 2, type: 'warning', asset: 'PORTFOLIO', confidence: 'N/A', time: '14:21:02', message: 'Pattern of FOMO buying detected in Midcap segment. Consider cooling off.', status: 'alert' },
  { id: 3, type: 'sell', asset: 'TCS', confidence: '82.1%', time: '10:15:44', message: 'Resistance level breached. Recommended to trim position by 15%.', status: 'executed' },
  { id: 4, type: 'system', asset: 'MONTE CARLO', confidence: '99.9%', time: '09:00:00', message: 'Daily probability paths recalculated. Base case target maintained.', status: 'info' },
  { id: 5, type: 'buy', asset: 'RELIANCE', confidence: '88.5%', time: 'Yesterday', message: 'Sector rotation momentum confirmed. Entry point optimal.', status: 'expired' },
];

export function Signals() {
  return (
    <div className="h-full w-full flex flex-col gap-6 animate-in fade-in duration-500 overflow-y-auto thin-scrollbar pb-20">
      <div className="flex justify-between items-end">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-warning/10 border border-warning/30 flex items-center justify-center text-warning shadow-[0_0_15px_var(--color-warning-dim)]">
            <Radar size={24} />
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-white mb-2">Alpha Signals</h1>
            <p className="font-mono text-sm text-text-muted">High-frequency algorithmic alerts and behavioural guards.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-text-muted uppercase">Engine Status:</span>
            <div className="px-3 py-1 bg-primary/10 border border-primary/30 rounded font-mono text-[10px] text-primary flex items-center gap-2">
                <Radar size={12} className="animate-spin-slow" />
                SCANNING
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Signals Feed */}
        <div className="lg:col-span-2 space-y-4">
          {signals.map((sig) => (
            <div key={sig.id} className={`p-5 rounded-xl border-l-4 ${getBorderColor(sig.type)} bg-surface/50 border border-t-surface-highlight border-r-surface-highlight border-b-surface-highlight flex gap-4 transition-all hover:bg-surface/80`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${getIconBgColor(sig.type)}`}>
                    {getIcon(sig.type)}
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                        <div className="flex items-center gap-2">
                            <span className="font-display font-bold text-white">{sig.asset}</span>
                            <span className={`font-mono text-[9px] uppercase px-1.5 py-0.5 rounded border ${getStatusStyles(sig.status)}`}>
                                {sig.status}
                            </span>
                        </div>
                        <span className="font-mono text-[10px] text-text-muted">{sig.time}</span>
                    </div>
                    <p className="font-sans text-sm text-text-muted mb-3 leading-relaxed">
                        {sig.message}
                    </p>
                    {sig.confidence !== 'N/A' && (
                        <div className="font-mono text-[10px] text-text-muted bg-background/50 inline-block px-2 py-1 rounded">
                            Model Confidence: <span className="text-white">{sig.confidence}</span>
                        </div>
                    )}
                </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar - Analytics */}
        <div className="flex flex-col gap-4">
           {/* Summary Card */}
           <div className="bg-surface/50 border border-surface-highlight p-5 rounded-lg">
               <h3 className="font-mono text-[10px] uppercase tracking-widest text-secondary mb-4">Signal Statistics</h3>
               <div className="space-y-4">
                   <div>
                       <div className="flex justify-between font-mono text-[10px] text-text-muted mb-1">
                           <span>WIN RATE (30D)</span>
                           <span className="text-white">72.4%</span>
                       </div>
                       <div className="h-1 bg-background rounded-full overflow-hidden">
                           <div className="h-full bg-primary" style={{ width: '72.4%' }}></div>
                       </div>
                   </div>
                   <div>
                       <div className="flex justify-between font-mono text-[10px] text-text-muted mb-1">
                           <span>BEHAVIORAL SAVES</span>
                           <span className="text-white">4</span>
                       </div>
                       <div className="h-1 bg-background rounded-full overflow-hidden">
                           <div className="h-full bg-tertiary" style={{ width: '40%' }}></div>
                       </div>
                   </div>
               </div>
           </div>

           {/* Risk Card */}
           <div className="bg-gradient-to-b from-surface/80 to-background border border-surface-highlight p-5 rounded-lg flex flex-col items-center text-center">
               <ShieldAlert className="text-warning mb-3" size={32} />
               <div className="font-display text-lg font-bold text-white mb-1">System Guard</div>
               <p className="font-sans text-xs text-text-muted mb-4">
                   Your portfolio is currently safeguarded against extreme tail-risk events via algorithmic hedging constraints.
               </p>
               <button className="w-full py-2 bg-surface border border-surface-highlight hover:border-warning/50 text-text-main rounded font-mono text-[10px] uppercase tracking-widest transition-colors">
                   View Parameters
               </button>
           </div>
        </div>
      </div>
    </div>
  );
}

// Helpers
function getBorderColor(type: string) {
    switch(type) {
        case 'buy': return 'border-l-primary';
        case 'sell': return 'border-l-secondary';
        case 'warning': return 'border-l-warning';
        case 'system': return 'border-l-tertiary';
        default: return 'border-l-surface-highlight';
    }
}

function getIconBgColor(type: string) {
    switch(type) {
        case 'buy': return 'bg-primary/20 text-primary';
        case 'sell': return 'bg-secondary/20 text-secondary';
        case 'warning': return 'bg-warning/20 text-warning';
        case 'system': return 'bg-tertiary/20 text-tertiary';
        default: return 'bg-surface-highlight text-text-muted';
    }
}

function getIcon(type: string) {
    switch(type) {
        case 'buy': return <Activity size={18} />;
        case 'sell': return <Radar size={18} />;
        case 'warning': return <AlertTriangle size={18} />;
        case 'system': return <Sparkles size={18} />;
        default: return <Activity size={18} />;
    }
}

function getStatusStyles(status: string) {
    switch(status) {
        case 'active': return 'bg-primary/10 border-primary/30 text-primary';
        case 'alert': return 'bg-warning/10 border-warning/30 text-warning';
        case 'executed': return 'bg-secondary/10 border-secondary/30 text-secondary';
        case 'expired': return 'bg-surface border-surface-highlight text-text-muted';
        case 'info': return 'bg-tertiary/10 border-tertiary/30 text-tertiary';
        default: return '';
    }
}
