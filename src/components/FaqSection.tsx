import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/bookContent';

interface FaqSectionProps {
  onOrderClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOrderClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-12 sm:py-16 bg-[#FAF9F6] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1 text-slate-700 bg-slate-200/80 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-2">
            Everything You Need to Know Before Ordering
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Have questions about payment, delivery, or format? We have answers.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 mb-8">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 30-Day Guarantee Box & WhatsApp Help */}
        <div className="space-y-4">
          <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h4 className="text-base font-bold text-emerald-950 mb-1">
                Our 30-Day "Godly Peace" 100% Money-Back Guarantee
              </h4>
              <p className="text-xs text-emerald-800 leading-relaxed">
                Read the book. Test the 7-step conversation scripts and the 30-Day Family Faith Reset. If it does not bring clarity, peace, and practical tools to your family, message us on WhatsApp (09067650109) and we will refund your ₦5,000 immediately. No questions asked.
              </p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <h5 className="text-xs sm:text-sm font-bold text-slate-900">Still have a question before you order?</h5>
              <p className="text-xs text-slate-500">Amy Nnamdi’s team is available to help you on WhatsApp.</p>
            </div>
            <a
              href="https://wa.me/2349067650109?text=Hello%20TrainThem4Christ%2C%20I%20have%20a%20question%20before%20ordering%20When%20Our%20Children%20Walk%20Away"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition flex items-center gap-1.5 shadow-xs whitespace-nowrap cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp (09067650109)</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
