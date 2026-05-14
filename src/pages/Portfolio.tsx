import React from 'react';
import { AreaChart, Area, ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, Cell, PieChart, Pie } from 'recharts';
import { ArrowUpRight, ArrowDownRight, Wallet, Activity, Repeat } from 'lucide-react';

const performanceData = [
  { time: '1W', value: 420000 },
  { time: '1M', value: 440500 },
  { time: '3M', value: 430800 },
  { time: '6M', value: 465000 },
  { time: '1Y', value: 482900 },
];

const holdings = [
  { symbol: 'INFY', name: 'Infosys', shares: 150, avgPrice: 1420, currentPrice: 1560.45, change: 2.4, allocation: '35%' },
  { symbol: 'HDFCBANK', name: 'HDFC Bank', shares: 80, avgPrice: 1600, currentPrice: 1540.20, change: -0.8, allocation: '25%' },
  { symbol: 'RELIANCE', name: 'Reliance Ind.', shares: 45, avgPrice: 2800, currentPrice: 2950.10, change: 1.2, allocation: '20%' },
  { symbol: 'TCS', name: 'Tata Consultancy', shares: 25, avgPrice: 3800, currentPrice: 3920.80, change: 0.5, allocation: '10%' },
  { symbol: 'GOLDETF', name: 'Gold BeES', shares: 400, avgPrice: 52, currentPrice: 56.40, change: 0.2, allocation: '10%' },
];

const sectorData = [
  { name: 'IT', value: 45, color: 'var(--color-primary)' },
  { name: 'BANK', value: 25, color: 'var(--color-secondary)' },
  { name: 'ENERGY', value: 20, color: 'var(--color-tertiary)' },
  { name: 'COMM', value: 10, color: 'var(--color-warning)' },
];

export function Portfolio() {
  return (
    <div className="h-full w-full flex flex-col gap-6 animate-in fade-in duration-500 overflow-y-auto thin-scrollbar pb-20">
      <div className="flex justify-between items-end">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-secondary/10 border border-secondary/30 flex items-center justify-center text-secondary shadow-[0_0_15px_var(--color-secondary-dim)]">
            <Wallet size={24} />
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-white mb-2">Virtual Portfolio</h1>
            <p className="font-mono text-sm text-text-muted">Real-time simulation and allocation tracking.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-surface border border-surface-highlight hover:border-primary/50 text-text-main rounded font-mono text-xs transition-colors flex items-center gap-2">
            <Repeat size={14} /> Rebalance
          </button>
          <button className="px-4 py-2 bg-primary text-background font-bold rounded font-mono text-xs hover:bg-primary/90 transition-colors flex items-center gap-2">
            <Wallet size={14} /> Add Funds
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* Main Performance Chart */}
        <div className="col-span-12 lg:col-span-8 bg-surface/50 border border-surface-highlight rounded-lg p-5 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1">Total Equity</div>
              <div className="font-display text-4xl font-light text-white">₹4,82,900<span className="text-xl text-text-muted">.42</span></div>
            </div>
            <div className="text-right">
              <div className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1">Unrealized P&L</div>
              <div className="font-mono text-xl text-success flex items-center gap-1 justify-end">
                <ArrowUpRight size={20} /> +₹62,900 (15.0%)
              </div>
            </div>
          </div>
          <div className="flex-1 h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="portGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="value" stroke="var(--color-primary)" strokeWidth={2} fill="url(#portGradient)" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-surface-highlight)' }}
                  itemStyle={{ color: 'var(--color-primary)' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Allocation overview */}
        <div className="col-span-12 lg:col-span-4 bg-surface/50 border border-surface-highlight rounded-lg p-5 flex flex-col">
          <div className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-4">Capital Allocation</div>
          <div className="flex-1 relative flex items-center justify-center min-h-[200px]">
             <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                 <Pie data={sectorData} innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value" stroke="none">
                   {sectorData.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={entry.color} />
                   ))}
                 </Pie>
                 <Tooltip contentStyle={{ backgroundColor: 'var(--color-surface)', border: 'none', fontSize: '12px' }} />
               </PieChart>
             </ResponsiveContainer>
             <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                <div className="font-mono text-xs text-text-muted">Equities</div>
                <div className="font-display text-xl text-white">90%</div>
             </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
             {sectorData.map(s => (
               <div key={s.name} className="flex items-center gap-2 font-mono text-[10px] bg-background/50 p-2 rounded">
                 <div className="w-2 h-2 rounded-full shadow-[0_0_5px_currentColor]" style={{ backgroundColor: s.color, color: s.color }}></div>
                 <span className="text-text-muted">{s.name}</span>
                 <span className="text-text-main ml-auto">{s.value}%</span>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* Holdings Table */}
      <div className="bg-surface/50 border border-surface-highlight rounded-lg overflow-hidden">
        <div className="p-4 border-b border-surface-highlight bg-surface/80 flex justify-between items-center">
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary">Current Holdings</h3>
            <button className="font-mono text-[10px] text-text-muted hover:text-white transition-colors flex items-center gap-1">
                View History <Activity size={12} />
            </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-sans text-sm">
            <thead className="font-mono text-[10px] text-text-muted uppercase bg-background/50">
              <tr>
                <th className="px-4 py-3 font-normal tracking-widest">Asset</th>
                <th className="px-4 py-3 font-normal tracking-widest">Shares</th>
                <th className="px-4 py-3 font-normal tracking-widest text-right">Avg Cost</th>
                <th className="px-4 py-3 font-normal tracking-widest text-right">Last Price</th>
                <th className="px-4 py-3 font-normal tracking-widest text-right">Change (1D)</th>
                <th className="px-4 py-3 font-normal tracking-widest text-right">Allocation</th>
                <th className="px-4 py-3 font-normal tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-highlight">
              {holdings.map((h) => (
                <tr key={h.symbol} className="hover:bg-surface/80 transition-colors group">
                  <td className="px-4 py-4">
                    <div className="font-display font-semibold text-white">{h.symbol}</div>
                    <div className="text-xs text-text-muted">{h.name}</div>
                  </td>
                  <td className="px-4 py-4 font-mono text-text-main">{h.shares}</td>
                  <td className="px-4 py-4 font-mono text-right text-text-muted">₹{h.avgPrice.toFixed(2)}</td>
                  <td className="px-4 py-4 font-mono text-right text-white">₹{h.currentPrice.toFixed(2)}</td>
                  <td className={`px-4 py-4 font-mono text-right flex items-center justify-end gap-1 ${h.change >= 0 ? 'text-success' : 'text-danger'}`}>
                    {h.change >= 0 ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                    {Math.abs(h.change)}%
                  </td>
                  <td className="px-4 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <span className="font-mono text-xs">{h.allocation}</span>
                      <div className="w-12 h-1 bg-background rounded-full overflow-hidden">
                        <div className="h-full bg-secondary" style={{ width: h.allocation }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="px-2 py-1 bg-success/20 text-success text-[10px] font-mono rounded hover:bg-success/30 uppercase">Buy</button>
                      <button className="px-2 py-1 bg-danger/20 text-danger text-[10px] font-mono rounded hover:bg-danger/30 uppercase">Sell</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
