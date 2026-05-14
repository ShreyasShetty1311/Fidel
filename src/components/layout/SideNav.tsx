import { Link, useLocation } from "react-router-dom";
import { Terminal, Briefcase, Globe, BrainCircuit, Radar, Rocket } from "lucide-react";
import { cn } from "../../lib/utils";

export function SideNav() {
  const location = useLocation();

  const links = [
    { icon: Terminal, label: "Terminal", path: "/dashboard" },
    { icon: Briefcase, label: "Portfolio", path: "/portfolio" },
    { icon: Globe, label: "Markets", path: "/markets" },
    { icon: BrainCircuit, label: "Research", path: "/research" },
    { icon: Radar, label: "Signals", path: "/signals" },
  ];

  return (
    <aside className="fixed left-0 top-[72px] bottom-0 z-40 w-16 hover:w-64 transition-all duration-300 bg-surface/80 backdrop-blur-md border-r border-surface-highlight flex flex-col items-center py-6 group overflow-hidden">
      <div className="flex flex-col gap-2 w-full">
        {links.map((link) => {
          const isActive = location.pathname === link.path || (link.path === '/dashboard' && location.pathname === '/');
          const Icon = link.icon;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "flex items-center px-4 gap-4 w-full cursor-pointer py-3 transition-all",
                isActive
                  ? "bg-primary/10 border-l-4 border-primary text-primary"
                  : "text-text-muted hover:text-text-main hover:bg-surface-glass/50 border-l-4 border-transparent"
              )}
            >
              <Icon size={24} className={cn("shrink-0", isActive ? "text-primary" : "")} />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-mono text-sm tracking-wide">
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
      <div className="mt-auto px-4 w-full">
        <button className="w-full h-10 rounded bg-primary text-background font-mono text-xs font-bold flex items-center justify-center gap-2 overflow-hidden hover:bg-primary/90 transition-colors">
          <Rocket size={18} />
          <span className="hidden group-hover:block whitespace-nowrap uppercase">
            Deploy Strategy
          </span>
        </button>
      </div>
    </aside>
  );
}
