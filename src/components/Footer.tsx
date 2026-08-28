import React from 'react';
import { Heart, ShieldCheck, Mail, MessageCircle, BookOpen } from 'lucide-react';
import { BOOK_DATA } from '../data/bookContent';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#0B1120] text-slate-400 py-12 border-t border-slate-800 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <span className="w-7 h-7 rounded-lg bg-[#1E3A8A] flex items-center justify-center text-amber-400 font-serif-display text-sm font-black">
                W
              </span>
              <span>When Our Children Walk Away</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs max-w-md">
              <strong>TrainThem4Christ</strong>. Equipping Christian parents across Nigeria and the diaspora with biblical, compassionate, and practical discipleship resources.
            </p>
            <p className="text-[11px] text-slate-500 italic">
              "Your child does not need a perfect parent. Your child needs a parent who is willing to faithfully point them to a perfect Savior."
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-2">
              Inside This Book
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#why-children-drift" className="hover:text-amber-400 transition-colors">The 4 Silent Gaps</a></li>
              <li><a href="#spiritual-assessment" className="hover:text-amber-400 transition-colors">Spiritual Drift Assessment</a></li>
              <li><a href="#book-contents" className="hover:text-amber-400 transition-colors">6-Part Curriculum</a></li>
              <li><a href="#printable-toolkits" className="hover:text-amber-400 transition-colors">15 Printable Toolkits</a></li>
              <li><a href="#sample-chapters" className="hover:text-amber-400 transition-colors">Sample Chapter</a></li>
            </ul>
          </div>

          {/* Nigerian Support & Help */}
          <div className="space-y-2">
            <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-2">
              Support & Inquiries
            </h5>
            <p className="text-xs text-slate-400">
              Have questions about your order or need help?
            </p>
            <div className="pt-1 space-y-1.5">
              <a
                href="https://wa.me/2349067650109?text=Hello%20TrainThem4Christ%2C%20I%20have%20an%20inquiry%20about%20the%20book%20When%20Our%20Children%20Walk%20Away"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 text-xs font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: 09067650109</span>
              </a>
              <div className="text-[11px] text-slate-500">
                Email: support@trainthem4christ.org
              </div>
              <div className="text-[11px] text-slate-500">
                Abuja, Nigeria • 24/7 Digital Delivery
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Responsible Use Note */}
        <div className="pt-6 border-t border-slate-800/80 text-[11px] text-slate-500 space-y-2 leading-relaxed">
          <p>
            <strong>A Note on Responsible Use (From Page 2):</strong> This book offers biblical and practical guidance for ordinary parenting concerns. It is not clinical, legal, or psychiatric advice. If your child is showing signs of severe depression, self-harm, suicidal thinking, or trauma, please seek qualified medical, psychological, or pastoral care immediately. Seeking help is not a failure of faith; it is wisdom (James 1:5).
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-slate-600">
            <div>
              © 2026 Amy Nnamdi • TrainThem4Christ. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
              <span>•</span>
              <span>Print License Included</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
