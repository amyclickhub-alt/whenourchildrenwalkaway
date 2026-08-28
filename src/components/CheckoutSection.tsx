import React, { useState } from 'react';
import { 
  Lock, 
  ShieldCheck, 
  Check, 
  Download, 
  Sparkles, 
  ExternalLink,
  CreditCard,
  Building2,
  Smartphone,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import bookMockupImg from '../assets/images/official_book_cover_1787051060693.jpg';

export const SELAR_CHECKOUT_URL = "https://selar.com/su2164g5or";

export const CheckoutSection: React.FC = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section id="order-form" className="py-12 sm:py-20 bg-gradient-to-b from-slate-900 via-slate-900 to-[#0F172A] text-white border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-400/20 mb-3">
            <Lock className="w-3.5 h-3.5" />
            Official Selar Checkout • 256-Bit Encrypted
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2">
            Complete Your Order on Selar
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Special Launch Price: <strong className="text-white">₦5,000</strong> (Includes Full eBook + All 15 Printable Toolkits).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Order Summary & Guarantee */}
          <div className="lg:col-span-5 bg-slate-800/90 rounded-3xl p-6 border border-slate-700 space-y-5">
            <div className="flex items-center gap-4">
              <img
                src={bookMockupImg}
                alt="When Our Children Walk Away Book Mockup"
                referrerPolicy="no-referrer"
                className="w-20 h-28 rounded-xl object-cover border border-slate-700 shadow-md shrink-0"
              />
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">
                  When Our Children Walk Away
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">By Amy Nnamdi</p>
                <div className="text-amber-400 font-extrabold text-xl mt-1.5">
                  ₦5,000 <span className="line-through text-xs text-slate-500 font-normal">₦15,000</span>
                </div>
                <div className="text-[11px] text-emerald-400 font-medium mt-0.5">
                  Instant Automatic Delivery
                </div>
              </div>
            </div>

            <div className="border-t border-slate-700/80 pt-4 space-y-2.5 text-xs">
              <div className="text-slate-300 font-semibold mb-2">Included in this ₦5,000 order:</div>
              <div className="flex items-center gap-2 text-slate-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full Digital eBook (67 Pages, High-Res PDF)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>All 15 Printable Discipleship Toolkits</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>30-Day Family Faith Reset Calendar</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>15 Scripture Prayer Cards for Drifting Children</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Church & Family Non-Commercial Print License</span>
              </div>
            </div>

            {/* Direct Link Alternative */}
            <div className="p-4 bg-slate-900 rounded-2xl border border-slate-700 space-y-3">
              <div className="text-xs text-slate-300">
                Prefer to open the checkout in a new window?
              </div>
              <a
                href={SELAR_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl transition flex items-center justify-center gap-2 text-center shadow-md cursor-pointer"
              >
                <span>Open Selar Checkout Directly</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-3.5 bg-slate-900/90 rounded-2xl border border-slate-700/80 flex items-start gap-2.5 text-xs text-slate-300">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">30-Day Peace-of-Mind Guarantee</strong>
                If you feel this guide did not help your home, message us for an instant 100% refund.
              </div>
            </div>

            {/* Payment methods supported by Selar */}
            <div className="pt-2 text-center text-[11px] text-slate-400 space-y-1">
              <div>Accepted Payment Methods on Selar:</div>
              <div className="flex items-center justify-center gap-2 text-slate-300 font-medium">
                <span>Debit Cards (Mastercard, Visa, Verve)</span>
                <span>•</span>
                <span>Bank Transfer</span>
                <span>•</span>
                <span>USSD</span>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Selar Checkout iFrame */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-3 sm:p-5 shadow-2xl border border-slate-200 overflow-hidden relative">
            
            {/* Top Bar for embedded frame */}
            <div className="flex items-center justify-between px-2 pb-3 mb-2 border-b border-slate-100 text-xs">
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Secure Checkout powered by Selar.co</span>
              </div>
              <a
                href={SELAR_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E3A8A] hover:underline font-bold text-xs flex items-center gap-1"
              >
                <span>Open full page</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* iFrame Container */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-slate-50 min-h-[620px] sm:min-h-[700px] border border-slate-200">
              <iframe
                id="selar-checkout-frame"
                src={SELAR_CHECKOUT_URL}
                title="Selar Checkout for When Our Children Walk Away"
                className="w-full h-[620px] sm:h-[700px] border-0 rounded-2xl"
                allow="payment"
                onLoad={() => setIframeLoaded(true)}
              />

              {/* Fallback button overlay for browsers blocking iframe */}
              <div className="mt-3 p-3 bg-slate-100 rounded-xl text-center text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-2">
                <span>Having trouble viewing the embedded checkout?</span>
                <a
                  href={SELAR_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1E3A8A] text-white font-bold px-3 py-1.5 rounded-lg hover:bg-blue-900 transition flex items-center gap-1 whitespace-nowrap"
                >
                  <span>Click to Pay on Selar (₦5,000)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
