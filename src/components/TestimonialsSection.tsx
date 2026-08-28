import React from 'react';
import { Star, CheckCircle, Quote, MessageCircle, MapPin } from 'lucide-react';
import { REVIEWS } from '../data/bookContent';

interface TestimonialsSectionProps {
  onOrderClick: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOrderClick }) => {
  return (
    <section id="testimonials-section" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1 text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            Verified Nigerian Parent Reviews
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-950 mb-3">
            Real Stories of Restored Connection & Peace
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Read how Christian mothers, fathers, and pastors across Nigeria transformed their family discipleship.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FAF9F6] border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-2xs flex flex-col justify-between"
            >
              <div>
                {/* Rating & Location */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {rev.location}
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2 leading-snug">
                  "{rev.title}"
                </h4>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                    <span>{rev.name}</span>
                    {rev.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    )}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {rev.role}
                  </div>
                </div>

                <span className="text-[11px] bg-emerald-50 text-emerald-800 font-semibold px-2 py-0.5 rounded border border-emerald-100">
                  Verified Buyer
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Nigerian Community Callout */}
        <div className="bg-[#1E3A8A] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold font-serif-display mb-1">
              Join Over 1,240+ Nigerian Parents Reclaiming Their Homes
            </h3>
            <p className="text-xs sm:text-sm text-blue-200">
              Get the complete eBook and 15 printable toolkits for ₦5,000 today.
            </p>
          </div>
          <button
            onClick={onOrderClick}
            className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm py-3 px-6 rounded-xl transition shadow-md whitespace-nowrap cursor-pointer"
          >
            Claim ₦5,000 Discount Now
          </button>
        </div>

      </div>
    </section>
  );
};
