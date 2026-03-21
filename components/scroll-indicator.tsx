import { Mouse } from 'lucide-react';

export const ScrollIndicator = () => {
  return (
    <div className="flex justify-center bottom-10 flex-col items-center gap-6 z-20">
      <span className="text-xs text-slate-400 tracking-[0.2em] uppercase font-medium">
        Scroll
      </span>
      <div className="flex flex-col items-center animate-bounce">
        <Mouse className="w-8 h-8 text-blue-400" />
      </div>
    </div>
  );
};
