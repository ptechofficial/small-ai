
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import LogoCloud from '@/components/LogoCloud';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set document title
    document.title = "Small AI - AI Automation Agency";
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-smallai-black text-white">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
