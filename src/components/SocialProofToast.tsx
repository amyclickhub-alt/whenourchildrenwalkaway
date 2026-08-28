import React, { useState, useEffect } from 'react';
import { CheckCircle2, ShieldCheck, X } from 'lucide-react';
import { RECENT_PURCHASES } from '../data/bookContent';

export const SocialProofToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Show initial toast after 4 seconds
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    // Rotate every 12 seconds
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % RECENT_PURCHASES.length);
        setIsVisible(true);
      }, 1000);
    }, 12000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [isDismissed]);

  if (isDismissed || !isVisible) return null;

  const current = RECENT_PURCHASES[currentIndex];

  return (
    <div className="fixed bottom-20 left-4 z-40 max-w-xs bg-white/95 backdrop-blur-xs border border-slate-200/90 rounded-2xl p-3 shadow-xl flex items-center gap-3 animate-fadeIn transition-all">
      <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs font-bold text-slate-900 truncate">
          {current.name}
        </div>
        <div className="text-[11px] text-slate-500 leading-tight">
          Purchased in {current.location} • <span className="text-emerald-700 font-medium">{current.time}</span>
        </div>
      </div>
      <button
        onClick={() => setIsDismissed(true)}
        className="text-slate-400 hover:text-slate-600 p-1 rounded-full cursor-pointer"
        aria-label="Dismiss toast"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
