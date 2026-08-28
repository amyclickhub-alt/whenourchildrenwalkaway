import React, { useState } from 'react';
import { 
  BookOpen, 
  Quote, 
  ChevronRight, 
  Sparkles, 
  Check, 
  Heart, 
  Lock, 
  ArrowRight
} from 'lucide-react';
import { SAMPLE_CHAPTER_TEXTS } from '../data/bookContent';
import bookMockupImg from '../assets/images/official_book_cover_1787051060693.jpg';

interface SampleChapterViewerProps {
  onOrderClick: () => void;
}

export const SampleChapterViewer: React.FC<SampleChapterViewerProps> = ({ onOrderClick }) => {
  const [activeTab, setActiveTab] = useState<'letter' | 'chapter3' | 'dialogue'>('letter');

  return (
    <section id="sample-chapters" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1 text-slate-700 bg-slate-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-slate-200">
            <BookOpen className="w-3.5 h-3.5 text-[#1E3A8A]" />
            Look Inside the Book
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-2">
            Read a Sample Right Now
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Experience the gentle, non-condemning biblical tone of Amy Nnamdi’s writing.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-slate-100 p-1 rounded-xl gap-1 max-w-lg w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('letter')}
              className={`flex-1 sm:flex-none py-2 px-3.5 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeTab === 'letter'
                  ? 'bg-white text-[#1E3A8A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Letter to the Parent
            </button>
            <button
              onClick={() => setActiveTab('chapter3')}
              className={`flex-1 sm:flex-none py-2 px-3.5 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeTab === 'chapter3'
                  ? 'bg-white text-[#1E3A8A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Chapter 3 Excerpt
            </button>
            <button
              onClick={() => setActiveTab('dialogue')}
              className={`flex-1 sm:flex-none py-2 px-3.5 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeTab === 'dialogue'
                  ? 'bg-white text-[#1E3A8A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              7-Step Response Script
            </button>
          </div>
        </div>

        {/* Reading Canvas */}
        <div className="bg-[#FAF9F6] border border-slate-300 rounded-3xl p-6 sm:p-10 shadow-sm relative">
          
          {activeTab === 'letter' && (
            <div className="space-y-4 animate-fadeIn font-serif-display text-slate-800 text-sm sm:text-base leading-relaxed">
              <div className="border-b border-slate-200 pb-3 mb-4 font-sans flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-950 font-serif-display">A Letter to the Parent</h3>
                  <p className="text-xs text-slate-500">From Amy Nnamdi (Page 4 of the book)</p>
                </div>
                <img
                  src={bookMockupImg}
                  alt="When Our Children Walk Away Book Cover"
                  referrerPolicy="no-referrer"
                  className="w-12 h-16 object-cover rounded shadow-sm border border-slate-300 hidden sm:block"
                />
              </div>

              {SAMPLE_CHAPTER_TEXTS.letterToParent.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 6 ? "p-4 bg-amber-50 rounded-xl border border-amber-200 font-sans text-xs sm:text-sm font-semibold text-amber-950 italic" : ""}>
                  {p}
                </p>
              ))}

              <div className="pt-2 text-right font-sans text-xs text-slate-500 italic">
                — Amy Nnamdi, TrainThem4Christ
              </div>
            </div>
          )}

          {activeTab === 'chapter3' && (
            <div className="space-y-4 animate-fadeIn text-slate-800 text-xs sm:text-sm leading-relaxed">
              <div className="border-b border-slate-200 pb-3 mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 font-serif-display">
                  Chapter 3: The Difference Between Questions and Rebellion
                </h3>
                <p className="text-xs text-slate-500">Why many Christian parents escalate questions into arguments (Page 14)</p>
              </div>

              <p className="font-semibold text-slate-900 text-sm sm:text-base">
                "If you learn only one thing from this book, learn this chapter."
              </p>

              <p>
                Most spiritual damage in Christian homes is not done by children asking hard questions. It is done by parents mishandling them.
              </p>

              <p>
                A child who asks, <em>"How do we know God exists?"</em> is doing something healthy. They are trying to move faith from your hands into theirs. That transfer is supposed to happen. If it never happens, you do not have a strong Christian—you have a borrower who will default the moment they leave home.
              </p>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900">
                  Seven Things That Sound Identical to Rebellion (Page 14):
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li><strong>1. Curiosity:</strong> Genuine interest ("Where did Cain get his wife?"). Tone is light.</li>
                  <li><strong>2. Doubt:</strong> Faith under pressure, not faith abandoned.</li>
                  <li><strong>3. Confusion:</strong> Heard two contradictory things at school/church and needs clarity.</li>
                  <li><strong>4. Hurt:</strong> The question is a wound wearing a costume.</li>
                  <li><strong>5. Intellectual struggle:</strong> Honest questions on science, suffering, and scripture reliability.</li>
                  <li><strong>6. Emotional pain:</strong> Depression, anxiety, exhaustion speaking.</li>
                  <li><strong>7. True Rebellion:</strong> Deliberate rejection (far rarer than frightened parents assume).</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'dialogue' && (
            <div className="space-y-4 animate-fadeIn text-xs sm:text-sm text-slate-800 leading-relaxed">
              <div className="border-b border-slate-200 pb-3 mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 font-serif-display">
                  The 7-Step Difficult Question Response
                </h3>
                <p className="text-xs text-slate-500">What to say in the first 5 minutes without panicking (Page 15)</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <span className="font-bold text-blue-900 block mb-1">1. STOP</span>
                  <p className="text-xs text-slate-600">Do not answer in the first 3 seconds. Fear is a poor teacher. Take a breath.</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <span className="font-bold text-blue-900 block mb-1">2. LISTEN</span>
                  <p className="text-xs text-slate-600">Let them finish completely. Do not interrupt to correct a detail (Proverbs 18:13).</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <span className="font-bold text-blue-900 block mb-1">3. CLARIFY</span>
                  <p className="text-xs text-slate-600">Ask: "What made you start thinking about this? Are you tired of church or doubting God's goodness?"</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <span className="font-bold text-blue-900 block mb-1">4. NO DEFENSIVENESS</span>
                  <p className="text-xs text-slate-600">Their question is not a review of your parenting. Do not say "After all I've done."</p>
                </div>
              </div>

              {/* Sample Dialogue Box */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-blue-200 space-y-2.5 font-sans">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-800">
                  Sample Conversation Script:
                </div>
                <p className="text-xs">
                  <strong className="text-slate-900">Child:</strong> "I don’t even know if I believe in God anymore."
                </p>
                <p className="text-xs">
                  <strong className="text-emerald-800">Parent (calmly):</strong> "(pause) Thank you for telling me. That took courage. I'd rather know what is really going on than have you pretend. Help me understand what you mean?"
                </p>
                <p className="text-xs">
                  <strong className="text-slate-900">Child:</strong> "Nothing feels real. If God is good, why did nothing happen when we prayed for Grandpa?"
                </p>
                <p className="text-xs">
                  <strong className="text-emerald-800">Parent:</strong> "That hurt me too. I've asked God the same thing. I don't have a neat answer, but there is a whole part of the Bible where people say exactly that to God without being struck down. Would you read one with me this week? Nothing you tell me will ever make me love you less."
                </p>
              </div>
            </div>
          )}

          {/* Bottom Callout */}
          <div className="mt-8 pt-4 border-t border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-600">
              Read all 15 chapters, scripts, and 30-day reset in the complete 67-page book.
            </div>
            <button
              onClick={onOrderClick}
              className="w-full sm:w-auto bg-[#1E3A8A] hover:bg-blue-900 text-white font-bold text-xs sm:text-sm py-2.5 px-5 rounded-xl transition shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Get Full Book for ₦5,000</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
