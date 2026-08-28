import React from 'react';
import { 
  CheckCircle2, 
  Download, 
  ShieldCheck, 
  BookOpen, 
  Heart, 
  Lock, 
  Smartphone, 
  FileText,
  Clock,
  ArrowRight
} from 'lucide-react';
import bookMockupImg from '../assets/images/official_book_cover_1787051060693.jpg';

interface HeroSectionProps {
  onOrderClick: () => void;
  onPreviewClick: () => void;
  onAssessmentClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOrderClick,
  onPreviewClick,
  onAssessmentClick,
}) => {
  return (
    <section id="hero-section" className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#FAF9F6] border-b border-slate-200 overflow-hidden">
      {/* Background subtle decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            TrainThem4Christ
          </span>
        </div>

        {/* Main Emotional Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 leading-[1.2] sm:leading-[1.18] mb-4">
            Has Your Dedicated Church Boy or Girl <br className="hidden sm:inline" />
            <span className="text-[#1E3A8A] underline decoration-amber-400 decoration-3 underline-offset-4">
              Silently Stopped Believing?
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto font-normal">
            Why Christian children lose their faith in today’s digital, peer-pressured world—and the gentle, biblical, battle-tested plan for Nigerian parents to restore conversation and lead them back to God.
          </p>
        </div>

        {/* Two Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Book 3D Mockup + Key Tags */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group max-w-[320px] sm:max-w-[360px] w-full">
              {/* Special Offer Ribbon */}
              <div className="absolute -top-3 -right-3 z-20 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-xs uppercase tracking-wider py-1.5 px-3 rounded-full shadow-lg border border-white/40 flex items-center gap-1 animate-pulse-subtle">
                <span>Save 67% Today</span>
              </div>

              {/* Book Mockup Container */}
              <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-200/80 transition-transform duration-300 hover:scale-[1.01]">
                <img
                  src={bookMockupImg}
                  alt="When Our Children Walk Away Book Cover Mockup by Amy Nnamdi"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto rounded-lg shadow-md object-cover"
                />
              </div>

              {/* Instant Delivery Floating Pill */}
              <div className="mt-3 flex items-center justify-center gap-2 bg-blue-50/90 text-blue-900 border border-blue-200/80 rounded-xl py-2 px-3 text-xs font-medium text-center">
                <Smartphone className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Instant PDF Download to Phone, iPad & Laptop</span>
              </div>
            </div>

            {/* Quick Preview Button */}
            <button
              onClick={onPreviewClick}
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#1E3A8A] transition-colors py-1.5 px-3 rounded-lg hover:bg-slate-100 border border-transparent hover:border-slate-200"
            >
              <BookOpen className="w-4 h-4 text-[#1E3A8A]" />
              <span>Click to Read Sample Chapter & Letter to Parents</span>
            </button>
          </div>

          {/* Right Column: Value Stack, Price & High-Converting CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Value Bullet Points */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                <div className="bg-blue-100 text-blue-800 p-1.5 rounded-lg shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">The First 24 Hours Crisis Guide</h4>
                  <p className="text-xs text-slate-600 leading-normal">
                    Exact word-for-word scripts of what to say (and what NEVER to say) when your child says <em>"I don't think I believe this anymore."</em>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                <div className="bg-emerald-100 text-emerald-800 p-1.5 rounded-lg shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">The 30-Day Family Faith Reset</h4>
                  <p className="text-xs text-slate-600 leading-normal">
                    A realistic 5-to-10 minute daily anchor tailored for busy Nigerian families with traffic, shifts, and school runs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                <div className="bg-amber-100 text-amber-900 p-1.5 rounded-lg shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">All 15 Printable Discipleship Toolkits (FREE)</h4>
                  <p className="text-xs text-slate-600 leading-normal">
                    Includes 20 Questions to Ask Your Teen, Digital Integrity Covenant, 15 Midnight Scripture Prayer Cards, and Boarding School/Campus Checklist.
                  </p>
                </div>
              </div>
            </div>

            {/* Price Box with Nigerian Context */}
            <div className="bg-slate-900 text-white p-5 sm:p-6 rounded-2xl shadow-xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 font-bold text-[11px] uppercase tracking-wider py-1 px-3 rounded-bl-lg">
                Today’s Flash Price
              </div>

              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-amber-400">₦5,000</span>
                <span className="text-lg text-slate-400 line-through">₦15,000</span>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 font-semibold px-2 py-0.5 rounded border border-emerald-500/30">
                  Save ₦10,000 (67% Off)
                </span>
              </div>
              
              <p className="text-xs text-slate-300 mb-4">
                Pay in Naira via Paystack, Nigerian Bank Transfer, USSD, or Debit Card. Instant automatic delivery to your Phone, Email & WhatsApp.
              </p>

              {/* Primary Call To Action Button */}
              <button
                id="hero-order-cta-btn"
                onClick={onOrderClick}
                className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-extrabold text-base sm:text-lg py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform active:scale-[0.99] flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>GET INSTANT ACCESS FOR ₦5,000</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Trust Subtext */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  30-Day Money-Back Guarantee
                </span>
                <span className="inline-flex items-center gap-1">
                  <Download className="w-3.5 h-3.5 text-blue-400" />
                  Instant PDF & Toolkit Delivery
                </span>
                <span className="inline-flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  Secured by Paystack / Nigerian Banks
                </span>
              </div>
            </div>

            {/* Quick Interactive Tool Trigger */}
            <div className="mt-4 text-center">
              <button
                onClick={onAssessmentClick}
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline underline-offset-2 transition-colors"
              >
                Not sure if your child is drifting? Take the 60-Second Spiritual Drift Assessment below ↓
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
