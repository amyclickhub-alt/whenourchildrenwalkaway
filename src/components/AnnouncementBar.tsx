import React, { useState, useEffect } from 'react';
import { Sparkles, MessageCircle, Clock, ShieldCheck } from 'lucide-react';

interface AnnouncementBarProps {
  onOrderClick: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOrderClick }) => {
  const [timeLeft, setTimeLeft] = useState<{ minutes: number; seconds: number }>({
    minutes: 14,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 15, seconds: 0 }; // reset cycle
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div id="announcement-bar" className="bg-[#0F172A] text-white text-xs sm:text-sm py-2.5 px-3 border-b border-amber-500/20 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Offer badge */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="text-slate-200">
            Get the Full eBook + 15 Printable Toolkits for only <strong className="text-amber-300 font-bold">₦5,000</strong> <span className="line-through text-slate-400 text-xs">(Regular ₦15,000)</span>
          </span>
        </div>

        {/* Center/Right: Timer & WhatsApp Support */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1 rounded-md border border-slate-700 text-amber-400 text-xs font-mono font-medium">
            <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span className="text-slate-300 font-sans text-[11px]">Price rises in:</span>
            <span>{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}</span>
          </div>

          <a
            href="https://wa.me/2349067650109?text=Hello%20TrainThem4Christ%2C%20I%20want%20to%20order%20the%20book%20When%20Our%20Children%20Walk%20Away%20for%20N5000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold text-xs transition-colors bg-emerald-950/40 hover:bg-emerald-900/60 px-2.5 py-1 rounded-md border border-emerald-800/50"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp (09067650109)</span>
          </a>

          <button
            onClick={onOrderClick}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-3 py-1 rounded text-xs transition shadow-sm cursor-pointer"
          >
            Claim ₦5,000
          </button>
        </div>
      </div>
    </div>
  );
};
