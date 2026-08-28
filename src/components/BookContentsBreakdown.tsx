import React, { useState } from 'react';
import { 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Wrench, 
  Flame,
  Clock,
  ArrowRight
} from 'lucide-react';
import { BOOK_DATA } from '../data/bookContent';

interface BookContentsBreakdownProps {
  onOrderClick: () => void;
  onPreviewClick: () => void;
}

export const BookContentsBreakdown: React.FC<BookContentsBreakdownProps> = ({ 
  onOrderClick, 
  onPreviewClick 
}) => {
  const [expandedPart, setExpandedPart] = useState<number | null>(0); // First open by default

  const togglePart = (index: number) => {
    setExpandedPart(expandedPart === index ? null : index);
  };

  return (
    <section id="book-contents" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1 text-blue-800 bg-blue-50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-blue-200">
            <Layers className="w-3.5 h-3.5" />
            Complete Curriculum Overview
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-950 mb-3">
            What You Will Learn Inside the 6 Parts
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Every chapter is built with practical scripts, real-life Nigerian family scenarios, and immediate action steps you can start tonight.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-8">
          {BOOK_DATA.parts.map((part, index) => {
            const isExpanded = expandedPart === index;
            return (
              <div
                key={part.part}
                className={`border rounded-2xl transition-all ${
                  isExpanded 
                    ? 'border-[#1E3A8A] bg-[#FAF9F6] shadow-sm' 
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => togglePart(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-[#1E3A8A] font-bold text-xs flex items-center justify-center shrink-0">
                      0{index + 1}
                    </span>
                    <div>
                      <div className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">
                        {part.part}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                        {part.title}
                      </h3>
                      <p className="text-xs text-slate-500 italic hidden sm:block">
                        "{part.subtitle}"
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500 hidden md:inline">
                      {part.chapters.length} Chapters
                    </span>
                    <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Accordion Body */}
                {isExpanded && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6 border-t border-slate-200/80 pt-4 animate-fadeIn">
                    <div className="space-y-4">
                      {part.chapters.map((chapter) => (
                        <div
                          key={chapter.title}
                          className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs"
                        >
                          <div className="flex items-start justify-between gap-2 mb-1.5">
                            <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                              <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono">
                                Ch. {chapter.number}
                              </span>
                              {chapter.title}
                            </h4>
                          </div>

                          <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">
                            {chapter.description}
                          </p>

                          <div className="bg-amber-50/60 p-2.5 rounded-lg border border-amber-200/60 flex items-start gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                            <p className="text-xs text-amber-950 font-medium">
                              <strong>Key Principle:</strong> "{chapter.keyTakeaway}"
                            </p>
                          </div>

                          {chapter.toolsIncluded && chapter.toolsIncluded.length > 0 && (
                            <div className="mt-2.5 flex flex-wrap items-center gap-1.5 text-[11px] text-blue-900">
                              <Wrench className="w-3 h-3 text-blue-700" />
                              <span className="font-semibold">Tools in this chapter:</span>
                              {chapter.toolsIncluded.map((tool, tIdx) => (
                                <span key={tIdx} className="bg-blue-50 text-blue-800 px-2 py-0.5 rounded border border-blue-100">
                                  {tool}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Special Sections Highlight */}
        <div className="bg-[#FAF9F6] border border-slate-200 rounded-2xl p-5 sm:p-6 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-800 bg-purple-100 px-2.5 py-0.5 rounded-full">
              Bonus Special Section
            </span>
            <h4 className="text-base font-bold text-slate-900">
              Age-by-Age Discipleship & Leaving Home Transition
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs text-slate-700">
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <strong className="block text-slate-900 mb-1">Ages 5–7: Wonder</strong>
              <p className="text-[11px] text-slate-600">Bible stories, awe, warmth over fear, and repeating God's love.</p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <strong className="block text-slate-900 mb-1">Ages 8–11: Questions</strong>
              <p className="text-[11px] text-slate-600">Welcoming doubts early, starting worldview, and early phone habits.</p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <strong className="block text-slate-900 mb-1">Ages 12–14: Belonging</strong>
              <p className="text-[11px] text-slate-600">Navigating peer pressure, digital identity, and affirming love.</p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <strong className="block text-slate-900 mb-1">Ages 15–18: Ownership</strong>
              <p className="text-[11px] text-slate-600">Independence, intellectual apologetics, and university readiness.</p>
            </div>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOrderClick}
            className="w-full sm:w-auto bg-[#1E3A8A] hover:bg-blue-900 text-white font-bold text-sm py-3 px-6 rounded-xl transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Get Complete Book & All 6 Parts for ₦5,000</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onPreviewClick}
            className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm py-3 px-5 rounded-xl transition border border-slate-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-slate-600" />
            <span>Read Free Sample Chapter</span>
          </button>
        </div>

      </div>
    </section>
  );
};
