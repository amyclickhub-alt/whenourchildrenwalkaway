import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';

interface MobileStickyCtaProps {
  onOrderClick: () => void;
}

export const MobileStickyCta: React.FC<MobileStickyCtaProps> = ({ onOrderClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past hero section (approx 450px)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      id="mobile-sticky-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-700/80 p-3 shadow-2xl animate-fadeIn"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div>
          <div className="flex items-center gap-1.5 text-[11px] text-amber-400 font-bold">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Special Price: ₦5,000</span>
          </div>
          <div className="text-[10px] text-slate-400">
            eBook + 15 Toolkits (67% Off)
          </div>
        </div>

        <button
          onClick={onOrderClick}
          className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 active:scale-95 text-slate-950 font-extrabold text-xs py-2.5 px-4 rounded-xl shadow-md flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
        >
          <span>Get Instant Access</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
