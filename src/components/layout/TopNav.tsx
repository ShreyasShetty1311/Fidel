import { Link, useLocation } from "react-router-dom";
import { Activity, Bell, Settings, Layers, Terminal, Briefcase, Globe, BrainCircuit, Radar } from "lucide-react";
import { cn } from "../../lib/utils";

export function TopNav() {
  const location = useLocation();
  
  const navLinks = [
    { name: "Terminal", path: "/dashboard", icon: Terminal },
    { name: "Portfolio", path: "/portfolio", icon: Briefcase },
    { name: "Markets", path: "/markets", icon: Globe },
    { name: "Research", path: "/research", icon: BrainCircuit },
    { name: "Signals", path: "/signals", icon: Radar },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-[72px] px-6 bg-surface/80 backdrop-blur-md border-b border-surface-highlight">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-secondary to-primary rounded-sm rotate-45 flex items-center justify-center">
            <div className="w-4 h-4 bg-background rotate-45"></div>
          </div>
          <h1 className="text-lg font-bold tracking-widest uppercase text-text-main">
            Systematic <span className="text-primary">Investment</span> Engine
          </h1>
        </Link>
        <div className="hidden lg:flex items-center gap-6 text-[10px] uppercase tracking-widest font-semibold text-text-muted mt-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path === '/dashboard' && location.pathname === '/');
            const Icon = link.icon;
            return (
              <Link 
                key={link.path} 
                to={link.path} 
                className={cn(
                  "pb-1 transition-all flex items-center gap-2 border-b-2",
                  isActive ? "text-text-main border-primary" : "text-text-muted hover:text-primary border-transparent hover:border-primary/50"
                )}
              >
                {Icon && <Icon size={14} className={isActive ? "text-primary" : ""} />}
                {link.name}
              </Link>
            )
          })}
        </div>
      </div>

      <div className="flex-1 max-w-xl mx-8 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-ticker flex gap-8 text-primary/80 font-mono text-sm">
          <span>BTC/USD: $64,231.20 (+2.4%)</span>
          <span>SPX: 5,432.11 (-0.12%)</span>
          <span>GOLD: $2,342.10 (+0.45%)</span>
          <span>ETH/USD: $3,421.15 (+1.8%)</span>
          <span className="text-primary font-bold">INFY: Strong BUY Indicator Active</span>
        </div>
      </div>

      <div className="flex items-center gap-4 text-xs">
        <div className="hidden md:flex flex-col text-right pr-4 border-r border-surface-highlight">
          <div className="text-[10px] uppercase text-text-muted">Investor Maturity</div>
          <div className="text-primary font-mono font-bold tracking-widest text-[10px]">LVL 04 · ADVANCED</div>
        </div>
        <div className="flex gap-4">
          <Activity size={18} className="text-text-muted hover:text-primary cursor-pointer transition-colors" />
          <Bell size={18} className="text-text-muted hover:text-primary cursor-pointer transition-colors" />
          <Settings size={18} className="text-text-muted hover:text-primary cursor-pointer transition-colors" />
        </div>
        <div className="w-10 h-10 rounded-full border-2 border-secondary bg-surface flex items-center justify-center text-[10px] text-text-main font-bold">
            IO
        </div>
      </div>
    </nav>
  );
}
