import React from 'react';
import { 
  CheckCircle2, 
  Download, 
  FileText, 
  Sparkles, 
  MessageCircle, 
  X, 
  Share2,
  Mail,
  Printer
} from 'lucide-react';
import { BOOK_DATA } from '../data/bookContent';
import bookMockupImg from '../assets/images/official_book_cover_1787051060693.jpg';

interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  isOpen,
  onClose,
  customerName,
  customerEmail,
  customerPhone,
}) => {
  if (!isOpen) return null;

  const handleSimulatedDownload = (fileName: string) => {
    // Generate a downloadable text/markdown or PDF placeholder summary
    const content = `WHEN OUR CHILDREN WALK AWAY\nBy Amy Nnamdi | TrainThem4Christ\n\nOfficial Digital Edition & Printable Toolkit\nDelivered to: ${customerName} (${customerEmail})\n\nCore Truth: "Your child does not need a perfect parent. Your child needs a parent who is willing to faithfully point them to a perfect Savior."\n\nThank you for purchasing! This official document confirms your print and family discipleship license.`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8 animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="text-center mb-5">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-0.5 rounded-full border border-emerald-200">
            Payment Confirmed • ₦5,000
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 mt-2">
            Thank You, {customerName || 'Parent'}!
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-1">
            Your copy of <em>When Our Children Walk Away</em> and all 15 printable toolkits have been activated.
          </p>
        </div>

        {/* Delivery Details Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-5 space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-slate-500">Email Delivery:</span>
            <span className="font-semibold text-slate-800">{customerEmail || 'Sent to your inbox'}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500">WhatsApp Confirmation:</span>
            <span className="font-semibold text-slate-800">{customerPhone || 'Sent via WhatsApp'}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500">License:</span>
            <span className="font-semibold text-emerald-700">Official Family & Church Print License</span>
          </div>
        </div>

        {/* Instant Download Buttons */}
        <div className="space-y-3 mb-6">
          <button
            onClick={() => handleSimulatedDownload('When_Our_Children_Walk_Away_Amy_Nnamdi.pdf')}
            className="w-full bg-[#1E3A8A] hover:bg-blue-900 text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Full Book (67 Pages PDF)</span>
          </button>

          <button
            onClick={() => handleSimulatedDownload('15_Printable_Parent_Toolkits_Amy_Nnamdi.pdf')}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-xs transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Download All 15 Printable Toolkits & Prayer Cards</span>
          </button>
        </div>

        {/* WhatsApp Assistance */}
        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-amber-900 mb-4">
          <div className="flex items-start gap-2">
            <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              <strong>Need help opening the files?</strong> Chat with us directly on WhatsApp.
            </span>
          </div>
          <a
            href="https://wa.me/2349067650109?text=Hello%20TrainThem4Christ%2C%20I%20just%20ordered%20When%20Our%20Children%20Walk%20Away%20and%20need%20assistance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-2.5 py-1 rounded-lg shrink-0 transition"
          >
            <span>WhatsApp (09067650109)</span>
          </a>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={onClose}
          className="w-full text-xs font-semibold text-slate-500 hover:text-slate-800 py-2 transition cursor-pointer text-center"
        >
          Close and Return to Page
        </button>

      </div>
    </div>
  );
};
