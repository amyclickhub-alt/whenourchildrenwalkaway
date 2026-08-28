import React, { useState } from 'react';
import { 
  Compass, 
  HelpCircle, 
  ChevronRight, 
  AlertTriangle, 
  HeartHandshake, 
  MessageSquareQuote,
  ShieldAlert,
  GraduationCap,
  Smartphone,
  Flame
} from 'lucide-react';

interface WhyChildrenDriftProps {
  onOrderClick: () => void;
}

export const WhyChildrenDriftSection: React.FC<WhyChildrenDriftProps> = ({ onOrderClick }) => {
  const [activeTab, setActiveTab] = useState<'gaps' | 'reasons' | 'stories'>('gaps');

  const gaps = [
    {
      number: "01",
      title: "Church Attendance ≠ Living Faith",
      quote: "A child can attend church for 18 years and never once meet Jesus.",
      scripture: "John 5:39–40",
      description: "Attendance is a container; it can carry faith, but it cannot create it. When the child leaves home or faces secular pressure, the container cracks if there is no personal relationship."
    },
    {
      number: "02",
      title: "Bible Knowledge ≠ Relationship",
      quote: "Daddy, I know all the answers to the Bible quiz. I just don't know why any of it should matter to me.",
      scripture: "Philippians 3:8",
      description: "We have raised a generation that can recite memory verses to please pastors and parents, but their affections were never captured by the beauty of Christ."
    },
    {
      number: "03",
      title: "Christian Environment ≠ Personal Conviction",
      quote: "Environment is borrowed faith. It works beautifully—until the environment is removed.",
      scripture: "Deuteronomy 6:7",
      description: "Morning devotion, gospel music, and church schools provide great shelter. But when the child enters boarding school or university, every prop disappears in a single day."
    },
    {
      number: "04",
      title: "External Obedience ≠ Internal Heart Change",
      quote: "The most dangerous child in the church is the quiet, well-behaved child whose heart nobody has ever asked about.",
      scripture: "1 Samuel 16:7",
      description: "Compliant children get praised and overlooked. When obedience is enough for parents, we stop asking what is really happening behind closed bedroom doors."
    }
  ];

  const reasonsSummary = [
    { title: "Faith Never Personally Owned", desc: "They inherited religion as family tradition without encountering Jesus personally." },
    { title: "Christianity Became Rules & Shame", desc: "A list of 'don'ts' that made God look like a harsh headmaster instead of a loving Father." },
    { title: "Parental Inconsistency at Home", desc: "Shouting on Saturday and shouting 'Hallelujah' on Sunday without ever apologizing." },
    { title: "Difficult Questions Were Shut Down", desc: "Told 'Don’t question God' or 'That is the devil,' so they stopped asking and went online." },
    { title: "Church Hurt & Pastoral Hypocrisy", desc: "Wounded by harsh leaders, public humiliation, or witnessing corruption in ministry." },
    { title: "The Digital Algorithm (6 hrs/day)", desc: "Being discipled by TikTok, YouTube, and secular influencers while parents stay unaware." },
    { title: "Nigerian Boarding School & Peer Pressure", desc: "Hostel culture, teasing, academic pressure, and lack of assertiveness skills." },
    { title: "Unresolved Anger & Silent Grief", desc: "Unanswered prayers, loss of a loved one, or deep disappointment turned into secret bitterness." }
  ];

  return (
    <section id="why-children-drift" className="py-12 sm:py-16 bg-[#FAF9F6] border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1 text-amber-700 bg-amber-100/80 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5" />
            Understanding the Heart
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-950 mb-3">
            Spiritual Drift Is Not a Door Slamming. <br className="hidden sm:inline" />
            <span className="text-[#1E3A8A]">It Is a Boat Tied Loosely.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Almost no child announces their departure on the day it begins. You look up one afternoon and they are farther from shore than you remembered. Here is why it happens in Nigerian homes.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-slate-200/80 p-1 rounded-xl gap-1 max-w-md w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('gaps')}
              className={`flex-1 sm:flex-none py-2 px-4 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeTab === 'gaps'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              The 4 Silent Gaps
            </button>
            <button
              onClick={() => setActiveTab('reasons')}
              className={`flex-1 sm:flex-none py-2 px-4 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeTab === 'reasons'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              The 15 Root Reasons
            </button>
            <button
              onClick={() => setActiveTab('stories')}
              className={`flex-1 sm:flex-none py-2 px-4 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeTab === 'stories'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Real Family Cases
            </button>
          </div>
        </div>

        {/* Tab 1: The 4 Gaps */}
        {activeTab === 'gaps' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 animate-fadeIn">
            {gaps.map((gap) => (
              <div
                key={gap.number}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-2xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-slate-200 font-serif-display">{gap.number}</span>
                    <span className="text-[11px] font-semibold text-[#1E3A8A] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {gap.scripture}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    {gap.title}
                  </h3>
                  <div className="bg-amber-50/70 border-l-3 border-amber-400 p-2.5 rounded-r-lg mb-3">
                    <p className="text-xs italic text-slate-800 font-serif-display">
                      "{gap.quote}"
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {gap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: The 15 Root Reasons */}
        {activeTab === 'reasons' && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xs animate-fadeIn">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-slate-900">
                Why Children Drift (Summary of Chapter 2)
              </h3>
              <p className="text-xs text-slate-600">
                "Preaching harder at a child with an intellectual doubt is like giving malaria medicine to a broken leg. You must know the exact cause before you respond."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {reasonsSummary.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70">
                  <div className="text-xs font-bold text-blue-900 mb-1 flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-[10px]">
                      {idx + 1}
                    </span>
                    {item.title}
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-center">
              <p className="text-xs text-slate-700 font-medium mb-3">
                Chapter 2 gives you the diagnostic test, scripture insights, and exact opening conversation sentences for all 15 causes.
              </p>
              <button
                onClick={onOrderClick}
                className="bg-[#1E3A8A] hover:bg-blue-900 text-white font-bold text-xs py-2 px-5 rounded-lg transition cursor-pointer"
              >
                Get Chapter 2 & Action Plan for ₦5,000
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Real Family Stories from Book */}
        {activeTab === 'stories' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 animate-fadeIn">
            
            {/* Story 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                  Chapter 5 • The Sunday School Teacher
                </span>
                <h4 className="text-base font-bold text-slate-900 mt-2 mb-2">Ngozi & 15-Year-Old Chidinma</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Ngozi taught Sunday school for 11 years. On a Wednesday afternoon, her 15-year-old daughter put down her phone and quietly said, <em>"Mummy, I don't think I believe this anymore."</em> In 10 seconds, Ngozi moved from panic to conviction: <em>"It is over, and it's my fault."</em>
                </p>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-700">
                <strong>What Ngozi Learned:</strong> Panic makes parents preach when they should listen. Chapter 10 shows how to handle the first 24 hours with quiet grace.
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                  Chapter 4 • The Power of Apology
                </span>
                <h4 className="text-base font-bold text-slate-900 mt-2 mb-2">Mr. Adeyemi & Tobi</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Mr Adeyemi shouted at his son for 20 minutes over a broken laptop screen. That night, he knocked on the boy's door: <em>"Tobi, I was wrong. I let anger lead me. I’ve asked God to forgive me, and I’m asking you."</em>
                </p>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-700">
                <strong>The Outcome:</strong> Tobi is 19 now, at university, and still a believer. He says what convinced him faith was real was a father repenting in a doorway.
              </div>
            </div>

            {/* Story 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  Chapter 9 • Honest Confession
                </span>
                <h4 className="text-base font-bold text-slate-900 mt-2 mb-2">Chinedu & His Mother</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Chinedu (16) confessed to his mother he had struggled with secret internet content for 2 years. She didn't scream. She said: <em>"Thank you for telling me. That took courage. You are not disgusting to me, and you are not disgusting to God."</em>
                </p>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-700">
                <strong>Key Truth:</strong> The reaction in the first 30 seconds determined the next 3 years.
              </div>
            </div>

          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-8 bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg sm:text-xl font-bold font-serif-display">
              "Ground is regained the same way it was lost..."
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              One small, unhurried, honest moment at a time.
            </p>
          </div>
          <button
            onClick={onOrderClick}
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm py-3 px-6 rounded-xl transition shadow-md whitespace-nowrap cursor-pointer"
          >
            Order Your Copy for ₦5,000
          </button>
        </div>

      </div>
    </section>
  );
};
