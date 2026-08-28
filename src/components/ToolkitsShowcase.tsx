import React, { useState } from 'react';
import { 
  FileText, 
  Printer, 
  Download, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  Calendar,
  Heart,
  ArrowRight
} from 'lucide-react';
import { BOOK_DATA } from '../data/bookContent';
import bundleMockupImg from '../assets/images/toolkit_bundle_display_1787050002326.jpg';

interface ToolkitsShowcaseProps {
  onOrderClick: () => void;
}

export const ToolkitsShowcase: React.FC<ToolkitsShowcaseProps> = ({ onOrderClick }) => {
  const [filter, setFilter] = useState<'all' | 'essential' | 'prayers'>('all');

  const filteredTools = BOOK_DATA.printableToolkitsList.filter((tool) => {
    if (filter === 'essential') return tool.badge !== undefined;
    if (filter === 'prayers') return tool.name.toLowerCase().includes('prayer');
    return true;
  });

  return (
    <section id="printable-toolkits" className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1 text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200">
            <Printer className="w-3.5 h-3.5" />
            Practical Printable Toolkit (Value ₦35,000 — Included FREE)
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-950 mb-3">
            15 Ready-to-Print Battle Plans & Prayer Cards
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Not just theory. You get 15 concrete, printable worksheets, conversation cheat-sheets, and midnight scripture prayer cards you can print for your home, church, or youth fellowship.
          </p>
        </div>

        {/* Bundle Banner Visual Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-8 shadow-md mb-10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-[380px] w-full">
                <img
                  src={bundleMockupImg}
                  alt="Printable Toolkits and Prayer Cards Bundle Mockup"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto rounded-2xl shadow-lg border border-slate-200 object-cover"
                />
                <div className="absolute -bottom-3 -right-2 bg-emerald-700 text-white text-[11px] font-bold py-1 px-3 rounded-full shadow-md">
                  ✓ High-Resolution PDF
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Print-Ready License Included for Families & Churches</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                Designed to Be Used with a Pen at the Kitchen Table or in the Car
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When crisis strikes, you don’t have time to re-read sixty pages. These pocket-sized guides, 7-step scripts, and 30-day discipleship templates give you exact words when your heart is racing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>The "When I Panic" Prayer Card</strong> (Keep in your wallet)</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>20 Heart Questions</strong> (Ages 5-11 & 12-18)</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Digital Integrity Covenant</strong> (Parent-Teen Agreement)</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>30-Day Faith Reset Calendar</strong> (Daily 5-min anchors)</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={onOrderClick}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm py-2.5 px-5 rounded-xl transition shadow-xs flex items-center gap-2 cursor-pointer"
                >
                  <span>Download All 15 Toolkits with Book (₦5,000)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Browse All 15 Printable Toolkits ({filteredTools.length})
          </h3>
          <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-200 text-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                filter === 'all' ? 'bg-[#1E3A8A] text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All 15 Tools
            </button>
            <button
              onClick={() => setFilter('essential')}
              className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                filter === 'essential' ? 'bg-[#1E3A8A] text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ⭐ Key Badges
            </button>
            <button
              onClick={() => setFilter('prayers')}
              className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                filter === 'prayers' ? 'bg-[#1E3A8A] text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🙏 Prayer Cards
            </button>
          </div>
        </div>

        {/* Toolkits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    TOOL {tool.id}
                  </span>
                  {tool.badge ? (
                    <span className="text-[10px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-full">
                      {tool.badge}
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-400 font-mono">
                      Worth {tool.value}
                    </span>
                  )}
                </div>

                <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1 leading-snug">
                  {tool.name}
                </h4>

                <p className="text-xs text-slate-500 mb-2 font-medium">
                  {tool.chapter}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {tool.purpose}
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Included in ₦5,000 Package
                </span>
                <span className="text-slate-400">PDF Ready</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
