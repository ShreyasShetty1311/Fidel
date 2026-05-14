import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, YAxis, Cell } from 'recharts';
import { Globe, TrendingUp, TrendingDown, Clock } from 'lucide-react';

const marketData = [
  { name: 'NIFTY50', val: 24500.2, change: 1.2 },
  { name: 'SENSEX', val: 80500.4, change: 1.1 },
  { name: 'BANKNIFTY', val: 52400.1, change: -0.5 },
  { name: 'MIDCAP', val: 41200.0, change: 2.1 },
];

const sectorPerf = [
  { name: 'IT', perf: 2.4 },
  { name: 'Auto', perf: 1.5 },
  { name: 'FMCG', perf: 0.8 },
  { name: 'Pharma', perf: -0.5 },
  { name: 'Metal', perf: -1.2 },
  { name: 'Realty', perf: 3.1 },
];

const movers = [
  { symbol: 'ZOMATO', price: 214.50, change: 8.4, type: 'gainer' },
  { symbol: 'SUZLON', price: 54.20, change: 4.9, type: 'gainer' },
  { symbol: 'TVSMOTOR', price: 2450.0, change: 3.2, type: 'gainer' },
  { symbol: 'HDFCBANK', price: 1540.2, change: -2.1, type: 'loser' },
  { symbol: 'ITC', price: 420.5, change: -1.5, type: 'loser' },
  { symbol: 'WIPRO', price: 480.1, change: -1.2, type: 'loser' },
];

export function Markets() {
  return (
    <div className="h-full w-full flex flex-col gap-6 animate-in fade-in duration-500 overflow-y-auto thin-scrollbar pb-20">
      <div className="flex justify-between items-end">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-tertiary/10 border border-tertiary/30 flex items-center justify-center text-tertiary shadow-[0_0_15px_var(--color-tertiary-dim)]">
            <Globe size={24} />
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-white mb-2">Global Markets</h1>
            <p className="font-mono text-sm text-text-muted">Real-time index performance and sector analysis.</p>
          </div>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] text-success bg-success/10 px-3 py-1.5 rounded border border-success/20">
          <div className="w-1.5 h-1.5 bg-success rounded-full animate-pulse"></div>
          MARKETS OPEN
        </div>
      </div>

      {/* Indices Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {marketData.map((index) => (
          <div key={index.name} className="bg-surface/50 border border-surface-highlight p-4 rounded-lg flex flex-col justify-between">
            <div className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-2">{index.name}</div>
            <div className="font-display text-2xl font-light text-white">{index.val.toLocaleString()}</div>
            <div className={`font-mono text-xs mt-2 flex items-center gap-1 ${index.change >= 0 ? 'text-success' : 'text-danger'}`}>
              {index.change >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              {Math.abs(index.change)}%
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sector Performance */}
        <div className="lg:col-span-2 bg-surface/50 border border-surface-highlight rounded-lg p-5">
           <div className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-6">Sector Performance (1D)</div>
           <div className="h-[300px] w-full">
             <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sectorPerf} layout="vertical" margin={{ top: 0, right: 0, left: 20, bottom: 0 }}>
                   <XAxis type="number" hide />
                   <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: 'var(--color-text-muted)', fontSize: 12, fontFamily: 'monospace' }} />
                   <Tooltip 
                     cursor={{ fill: 'var(--color-surface-highlight)', opacity: 0.4 }} 
                     contentStyle={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-surface-highlight)' }} 
                   />
                   <Bar dataKey="perf" radius={[0, 4, 4, 0]}>
                      {sectorPerf.map((entry, index) => (
                         <Cell key={`cell-${index}`} fill={entry.perf >= 0 ? 'var(--color-success)' : 'var(--color-danger)'} />
                      ))}
                   </Bar>
                </BarChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* Top Movers */}
        <div className="bg-surface/50 border border-surface-highlight rounded-lg flex flex-col overflow-hidden">
           <div className="p-4 border-b border-surface-highlight bg-surface/80">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-primary">Top Movers</h3>
           </div>
           <div className="flex-1 overflow-y-auto thin-scrollbar p-2">
              {movers.map((mover) => (
                <div key={mover.symbol} className="flex justify-between items-center p-3 hover:bg-background/50 rounded-lg transition-colors group">
                   <div>
                      <div className="font-display font-semibold text-white">{mover.symbol}</div>
                      <div className="font-sans text-xs text-text-muted">₹{mover.price.toFixed(2)}</div>
                   </div>
                   <div className={`font-mono text-sm flex items-center gap-1 ${mover.type === 'gainer' ? 'text-success' : 'text-danger'}`}>
                      {mover.type === 'gainer' ? '+' : ''}{mover.change}%
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
