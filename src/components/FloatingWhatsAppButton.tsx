import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsAppButton: React.FC = () => {
  return (
    <aside
      aria-label="WhatsApp Quick Support"
      className="fixed bottom-20 sm:bottom-6 right-4 z-40"
    >
      <a
        href="https://wa.me/2349067650109?text=Hello%20TrainThem4Christ%2C%20I%20want%20to%20inquire%20about%20the%20book%20When%20Our%20Children%20Walk%20Away"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-2.5 rounded-full shadow-2xl transition-transform hover:scale-105 active:scale-95 group font-bold text-xs sm:text-sm border-2 border-white"
        aria-label="Chat with us on WhatsApp at 09067650109"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping"></span>
        </div>
        <span className="hidden sm:inline">WhatsApp: 09067650109</span>
      </a>
    </aside>
  );
};
