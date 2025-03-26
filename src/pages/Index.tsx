
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ContactSection from '@/components/ContactSection';
import IntegrationSection from '@/components/IntegrationSection';
import PastWorkSection from '@/components/PastWorkSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set document title
    document.title = "Small AI - AI Integration Experts";
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Add smooth scroll behavior to document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-smallai-black text-white relative">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#FF6B6B] rounded-full opacity-10 blur-[100px]"></div>
        <div className="absolute top-[40%] left-20 w-80 h-80 bg-[#9B87F5] rounded-full opacity-10 blur-[100px]"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-[#48A7FF] rounded-full opacity-10 blur-[100px]"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <IntegrationSection />
          <ServicesSection />
          <HowItWorksSection />
          <PastWorkSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
