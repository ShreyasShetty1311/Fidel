import { Sparkles } from "lucide-react";

export function AICoach() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      <div className="bg-surface/80 border border-surface-highlight p-4 rounded-xl max-w-xs shadow-2xl backdrop-blur-md animate-bounce-slow">
        <p className="font-sans text-sm text-text-main leading-relaxed">
           <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-primary block mb-1">AI Coach Status</span>
          "Your portfolio is 72% likely to reach target growth of 12% by Q4."
        </p>
      </div>
      <div className="relative group cursor-pointer">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-breath"></div>
        <div className="w-16 h-16 rounded-full bg-surface-highlight flex items-center justify-center border border-primary/40 relative z-10 overflow-hidden shadow-[0_0_20px_var(--color-primary-dim)] hover:border-primary transition-colors duration-300">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_var(--color-primary-dim)_100%)] animate-spin-slow"></div>
          <Sparkles className="text-white relative z-20" size={24} />
        </div>
      </div>
    </div>
  );
}
