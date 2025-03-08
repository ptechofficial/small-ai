
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Youtube } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-24 bg-smallai-black dark:bg-smallai-black relative overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-smallai-blue-dark to-transparent opacity-10" style={{ filter: 'blur(150px)' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-reveal-from-left">
            <a 
              href="https://www.youtube.com/@prakarshguptaai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="rounded-2xl overflow-hidden border border-gray-800 relative transition-all duration-300 transform group-hover:scale-[1.02] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]">
                <div className="absolute inset-0 bg-gradient-purple-blue opacity-30 transition-opacity duration-300 group-hover:opacity-50" />
                <img 
                  src="/lovable-uploads/1298d032-0eb4-4d9c-8d83-0a9bebbe096c.png" 
                  alt="Prakarsh Gupta" 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 rounded-full bg-smallai-purple bg-opacity-90 flex items-center justify-center">
                    <Youtube className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
            </a>
            <img 
              src="/lovable-uploads/a226a7a8-c250-4e97-8c32-842fd57d7a62.png" 
              alt="Small Group Logo"
              className="absolute -bottom-6 -right-6 h-16 w-auto p-2 glassmorphism rounded-xl"
            />
          </div>
          
          <div className="animate-reveal-from-right">
            <h2 className="text-sm uppercase tracking-wider text-smallai-purple mb-3 font-medium">About Us</h2>
            <h3 className="text-3xl font-bold mb-6 text-white dark:text-white">Delivering <span className="gradient-text">Measurable Results</span></h3>
            <p className="text-gray-300 mb-6">
              Small AI specializes in transforming businesses through targeted AI automation. We build solutions that deliver quantifiable ROI, not just technological novelty.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Cut operational costs by 40% with AI-powered automation",
                "Increase customer conversion rates by up to 3x",
                "Reduce manual work by 20+ hours per week",
                "Drive decision-making with 90% more accurate data analysis",
                "Scale operations without scaling headcount"
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle className="text-smallai-purple mr-3 mt-0.5 flex-shrink-0" size={18} />
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
            
            <Button 
              className="bg-smallai-purple hover:bg-smallai-purple-dark text-white rounded-full px-6 button-glow"
              asChild
            >
              <a href="https://calendly.com/prakarshgupta" target="_blank" rel="noopener noreferrer">
                Book a Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
