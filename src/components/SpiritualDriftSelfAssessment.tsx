import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  AlertCircle, 
  HelpCircle, 
  Check, 
  ArrowRight, 
  BookOpen, 
  Heart,
  RefreshCw
} from 'lucide-react';

interface SelfAssessmentProps {
  onOrderClick: () => void;
}

interface SignItem {
  id: string;
  category: 'quiet' | 'verbal' | 'behavioural' | 'relational';
  label: string;
}

const SIGNS_LIST: SignItem[] = [
  { id: 'q1', category: 'quiet', label: 'Stopped praying on their own outside family devotions' },
  { id: 'q2', category: 'quiet', label: 'Bible untouched for months on their desk or shelf' },
  { id: 'q3', category: 'quiet', label: 'Puts on headphones immediately family devotion begins' },
  { id: 'q4', category: 'quiet', label: 'Vague, one-word polite answers ("Amen", "Fine") about spiritual matters' },
  { id: 'v1', category: 'verbal', label: 'Says "Church is boring", "Church is fake", or "I don’t want to go"' },
  { id: 'v2', category: 'verbal', label: 'Says "I’m not sure I believe in God anymore"' },
  { id: 'v3', category: 'verbal', label: 'Asks hard questions about suffering ("Why did Grandpa die if God is good?")' },
  { id: 'v4', category: 'verbal', label: 'Expresses anger at church hypocrisy or unfair pastoral treatment' },
  { id: 'b1', category: 'behavioural', label: 'Sudden change in close friendship circle or vocabulary' },
  { id: 'b2', category: 'behavioural', label: 'Increased secrecy around their phone and social media feeds' },
  { id: 'b3', category: 'behavioural', label: 'Withdrawal from family dinner or loss of interest in things they loved' },
  { id: 'r1', category: 'relational', label: 'Will no longer talk to you about anything deeply important' },
  { id: 'r2', category: 'relational', label: 'Refuses physical affection or seems emotionally guarded at home' }
];

export const SpiritualDriftSelfAssessment: React.FC<SelfAssessmentProps> = ({ onOrderClick }) => {
  const [selectedSigns, setSelectedSigns] = useState<string[]>([]);
  const [hasCalculated, setHasCalculated] = useState<boolean>(false);

  const toggleSign = (id: string) => {
    if (selectedSigns.includes(id)) {
      setSelectedSigns(selectedSigns.filter((s) => s !== id));
    } else {
      setSelectedSigns([...selectedSigns, id]);
    }
  };

  const getAnalysis = () => {
    const quietCount = selectedSigns.filter(id => id.startsWith('q')).length;
    const verbalCount = selectedSigns.filter(id => id.startsWith('v')).length;
    const behaviouralCount = selectedSigns.filter(id => id.startsWith('b')).length;
    const relationalCount = selectedSigns.filter(id => id.startsWith('r')).length;

    let primaryFocus = '';
    let chapterRecommendation = '';
    let insight = '';

    if (selectedSigns.length === 0) {
      return {
        type: 'proactive',
        headline: 'Proactive Discipleship Zone',
        insight: 'Your child may not show obvious drift signs right now, but culture, boarding school, or university transitions will test their faith. Building proactive roots now prevents future heartbreak.',
        recommendation: 'Part Four & Part Six (The 30-Day Family Faith Reset and 6-Step Thinking Framework)',
        urgentTool: 'Tool 6: Family Digital Discipleship Plan & Integrity Covenant'
      };
    }

    if (relationalCount > 0 && selectedSigns.length >= 3) {
      primaryFocus = 'Relational Guarding & Connection';
      chapterRecommendation = 'Chapter 9 (Creating a Home Where Children Can Talk) & Chapter 10';
      insight = 'The relationship is the first priority. A child who cannot bring you their truth will not bring it to God either. When communication softens, faith follows.';
    } else if (verbalCount >= 2) {
      primaryFocus = 'Intellectual Questions & Honest Doubt';
      chapterRecommendation = 'Chapter 3 (Questions vs Rebellion) & Chapter 8 (Teaching How to Think)';
      insight = 'Your child is trying to move faith from your hands into theirs! Questions are not rebellion—they are an invitation to discover a living God.';
    } else if (behaviouralCount >= 2) {
      primaryFocus = 'Digital World & Peer Formation';
      chapterRecommendation = 'Chapter 6 (The Second Discipler) & Chapter 7 (Peer Pressure & Boarding Schools)';
      insight = 'The algorithm and peer circle are actively shaping their identity. Presence and healthy alternatives beat angry phone confiscations.';
    } else {
      primaryFocus = 'Quiet Cooling & Habitual Faith';
      chapterRecommendation = 'Chapter 1 (When Did We Lose Ground?) & Chapter 14 (Simple Discipleship Rhythm)';
      insight = 'Spiritual drift is not a door slamming; it is a boat tied loosely that floated away unnoticed. Small 5-minute daily anchors restore the temperature of your home.';
    }

    return {
      type: 'evaluated',
      headline: `Diagnostic Assessment: ${primaryFocus}`,
      insight,
      recommendation: chapterRecommendation,
      urgentTool: 'Tool 13: Crisis Conversation Guide & Tool 12: 15 Scripture Prayer Cards'
    };
  };

  const analysis = getAnalysis();

  return (
    <section id="spiritual-assessment" className="py-12 sm:py-16 bg-white border-y border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-800 border border-blue-200 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <ClipboardCheck className="w-3.5 h-3.5 text-blue-600" />
            Interactive Parent Assessment (Tool 1 Preview)
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-2">
            Where Is Your Child Spiritually Right Now?
          </h2>
          <p className="text-sm text-slate-600">
            Tick any signs you have noticed in the last 3 months. This is an attention list, not an accusation.
          </p>
        </div>

        {/* Assessment Card */}
        <div className="bg-[#FAF9F6] border border-slate-200 rounded-2xl p-5 sm:p-8 shadow-xs">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {SIGNS_LIST.map((sign) => {
              const isChecked = selectedSigns.includes(sign.id);
              return (
                <button
                  key={sign.id}
                  type="button"
                  onClick={() => toggleSign(sign.id)}
                  className={`flex items-start gap-3 p-3 text-left rounded-xl border transition-all cursor-pointer ${
                    isChecked
                      ? 'bg-blue-50/80 border-[#1E3A8A] text-slate-950 shadow-2xs'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 border transition-colors ${
                      isChecked
                        ? 'bg-[#1E3A8A] border-[#1E3A8A] text-white'
                        : 'bg-slate-50 border-slate-300'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span className="text-xs sm:text-sm leading-snug">{sign.label}</span>
                </button>
              );
            })}
          </div>

          {/* Action Trigger */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
            <div className="text-xs text-slate-500">
              {selectedSigns.length} {selectedSigns.length === 1 ? 'sign' : 'signs'} selected
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {selectedSigns.length > 0 && (
                <button
                  onClick={() => setSelectedSigns([])}
                  className="text-xs text-slate-500 hover:text-slate-700 flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" /> Reset
                </button>
              )}
              <button
                onClick={() => setHasCalculated(true)}
                className="w-full sm:w-auto bg-[#1E3A8A] hover:bg-blue-900 text-white font-bold text-xs sm:text-sm py-2.5 px-5 rounded-xl transition shadow-xs cursor-pointer flex items-center justify-center gap-2"
              >
                <span>View Biblical Guidance & Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Results Box */}
          {hasCalculated && (
            <div className="mt-6 bg-white border-2 border-amber-300 rounded-xl p-5 sm:p-6 shadow-sm transition-all animate-fadeIn">
              <div className="flex items-start gap-3">
                <div className="bg-amber-100 text-amber-800 p-2 rounded-lg shrink-0 mt-0.5">
                  <BookOpen className="w-5 h-5 text-amber-900" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h4 className="text-base font-bold text-slate-900">{analysis.headline}</h4>
                    <span className="text-[11px] bg-amber-50 text-amber-900 font-semibold px-2 py-0.5 rounded border border-amber-200">
                      Biblical Action Plan
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                    {analysis.insight}
                  </p>

                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-800 space-y-1 mb-4">
                    <p>
                      <strong>Recommended Reading in Book:</strong> {analysis.recommendation}
                    </p>
                    <p>
                      <strong>Key Included Printable Tool:</strong> {analysis.urgentTool}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                    <p className="text-xs text-slate-500 italic">
                      "Your child does not need a perfect parent. They need a parent willing to point them to a perfect Savior."
                    </p>
                    <button
                      onClick={onOrderClick}
                      className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm py-2 px-4 rounded-lg transition shadow-xs flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                    >
                      <span>Get Full Book for ₦5,000</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
