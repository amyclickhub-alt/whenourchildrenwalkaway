import React from 'react';
import { Heart, BookCheck, Users, Shield, Sparkles, MessageSquare } from 'lucide-react';
import authorImg from '../assets/images/author_amy_nnamdi_1787049987020.jpg';

export const AuthorSection: React.FC = () => {
  return (
    <section id="author-section" className="py-12 sm:py-16 bg-[#FAF9F6] border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Author Photo */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shadow-lg border-2 border-slate-200">
                  <img
                    src={authorImg}
                    alt="Amy Nnamdi - Author of When Our Children Walk Away"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 bg-[#1E3A8A] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                  TrainThem4Christ
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mt-5 mb-0.5">
                Amy Nnamdi
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Author, Christian Parent & Counselor
              </p>
            </div>

            {/* Author Story & Dedication */}
            <div className="md:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-3 py-0.5 rounded-full">
                <Heart className="w-3.5 h-3.5 text-amber-700" />
                A Note from the Author's Heart
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug font-serif-display">
                "You are not being judged here. Not by me, and not by God."
              </h3>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Amy Nnamdi wrote <em>When Our Children Walk Away</em> out of deep pastoral compassion for Christian families across Nigeria and the diaspora who carry the quiet, unspoken pain of watching children drift from faith into secular cynicism, digital addiction, and church hurt.
              </p>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Through TrainThem4Christ, her ministry equips parents to replace panic with prayer, legalism with authentic relationship, and fear with the quiet confidence that God has not abandoned our children.
              </p>

              {/* The Book Dedication Quote */}
              <div className="bg-[#FAF9F6] border-l-3 border-[#1E3A8A] p-4 rounded-r-xl space-y-1 text-xs text-slate-700 italic font-serif-display">
                <p className="font-semibold not-italic text-slate-900 text-[11px] uppercase tracking-wider mb-1">
                  Book Dedication (Page 2):
                </p>
                <p>• To the parent praying in the dark while the house sleeps.</p>
                <p>• To the mother who has run out of words.</p>
                <p>• To the father who does not know how to say <em>"I'm sorry"</em> but wants to learn.</p>
                <p>• To every grandparent still interceding for a grandchild who no longer calls.</p>
                <p className="font-semibold text-[#1E3A8A] not-italic pt-1">
                  "And to the God who is the Father of us all—patient, faithful, and not finished yet."
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
