import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { HeroSection } from './components/HeroSection';
import { SpiritualDriftSelfAssessment } from './components/SpiritualDriftSelfAssessment';
import { WhyChildrenDriftSection } from './components/WhyChildrenDriftSection';
import { BookContentsBreakdown } from './components/BookContentsBreakdown';
import { ToolkitsShowcase } from './components/ToolkitsShowcase';
import { SampleChapterViewer } from './components/SampleChapterViewer';
import { AuthorSection } from './components/AuthorSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CheckoutSection } from './components/CheckoutSection';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { SocialProofToast } from './components/SocialProofToast';
import { MobileStickyCta } from './components/MobileStickyCta';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { Footer } from './components/Footer';

export default function App() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const scrollToOrder = () => {
    const el = document.getElementById('order-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAssessment = () => {
    const el = document.getElementById('spiritual-assessment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPreview = () => {
    const el = document.getElementById('sample-chapters');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOrderSuccess = (name: string, email: string, phone: string) => {
    setCustomerDetails({ name, email, phone });
    setIsSuccessModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-900 selection:bg-[#1E3A8A] selection:text-white">
      {/* Top Urgent Announcement Header */}
      <AnnouncementBar onOrderClick={scrollToOrder} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onOrderClick={scrollToOrder}
          onPreviewClick={scrollToPreview}
          onAssessmentClick={scrollToAssessment}
        />

        {/* 2. Interactive Spiritual Drift Self-Assessment (Tool 1 Preview) */}
        <SpiritualDriftSelfAssessment onOrderClick={scrollToOrder} />

        {/* 3. The 4 Silent Gaps in Nigerian Homes & The 15 Root Reasons */}
        <WhyChildrenDriftSection onOrderClick={scrollToOrder} />

        {/* 4. Complete Book Curriculum Breakdown (Parts 1 to 6) */}
        <BookContentsBreakdown
          onOrderClick={scrollToOrder}
          onPreviewClick={scrollToPreview}
        />

        {/* 5. The 15 Printable Toolkits Showcase (Value ₦35,000 FREE) */}
        <ToolkitsShowcase onOrderClick={scrollToOrder} />

        {/* 6. In-Page Live Chapter Reader (Look Inside) */}
        <SampleChapterViewer onOrderClick={scrollToOrder} />

        {/* 7. Author Amy Nnamdi Biography & Heart */}
        <AuthorSection />

        {/* 8. Nigerian Parents & Pastors Verified Testimonials */}
        <TestimonialsSection onOrderClick={scrollToOrder} />

        {/* 9. Frequently Asked Questions */}
        <FaqSection onOrderClick={scrollToOrder} />

        {/* 10. Embedded Selar Secure Checkout */}
        <CheckoutSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Conversion Overlays & Floating Bars */}
      <OrderSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        customerName={customerDetails.name}
        customerEmail={customerDetails.email}
        customerPhone={customerDetails.phone}
      />

      <SocialProofToast />
      
      <MobileStickyCta onOrderClick={scrollToOrder} />

      <FloatingWhatsAppButton />
    </div>
  );
}
