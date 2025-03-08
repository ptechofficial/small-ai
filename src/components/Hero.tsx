
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, Database, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementsRef.current && !observerRef.current) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal-animation > *');
            elements.forEach((el, index) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, 100 * index);
            });
            observerRef.current?.unobserve(entry.target);
          }
        });
      }, options);

      observerRef.current.observe(elementsRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-smallai-black pt-28 pb-16 overflow-hidden">
      {/* Background Image Overlay with Gradient */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: `url('/lovable-uploads/81261355-b1d0-4a8d-8a15-94209160f1bd.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        mixBlendMode: 'overlay',
        zIndex: 1
      }} />
      
      {/* Gradient Background */}
      <div className="absolute top-0 right-0 w-full md:w-3/4 h-full opacity-20 bg-gradient-radial from-smallai-purple to-transparent" style={{ filter: 'blur(120px)', zIndex: 2 }} />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-smallai-blue-dark opacity-20 rounded-full floating" style={{ filter: 'blur(50px)', zIndex: 3 }} />
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-smallai-purple-dark opacity-20 rounded-full floating-slow" style={{ filter: 'blur(60px)', zIndex: 3 }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" ref={elementsRef}>
          <div className="lg:col-span-7 reveal-animation">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-smallai-purple bg-smallai-purple bg-opacity-10 text-sm font-medium text-smallai-purple">
              AI Automation Agency
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-balance">
              Boost Revenue with <span className="gradient-text">AI-Powered</span> Automation
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Custom AI solutions that cut costs by 40%, save 20+ hours weekly, and drive measurable growth for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                className="bg-smallai-purple hover:bg-smallai-purple-dark text-white rounded-full px-8 py-6 text-lg button-glow"
                asChild
              >
                <a href="https://calendly.com/prakarshgupta" target="_blank" rel="noopener noreferrer">
                  Book a Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-smallai-purple text-smallai-purple hover:bg-smallai-purple hover:text-white hover:bg-opacity-10 rounded-full px-8 py-6 text-lg"
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    window.scrollTo({
                      top: servicesSection.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Explore Services
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Cpu className="h-6 w-6 text-smallai-purple" />, title: "AI Agents", desc: "24/7 operation, 0 human input" },
                { icon: <Zap className="h-6 w-6 text-smallai-purple" />, title: "Workflow Automation", desc: "30% cost reduction" },
                { icon: <Database className="h-6 w-6 text-smallai-purple" />, title: "Data Intelligence", desc: "2x faster decisions" }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "p-4 rounded-lg border border-gray-800 bg-black bg-opacity-50",
                    "transition-all duration-300 hover:border-smallai-purple hover:bg-smallai-purple hover:bg-opacity-5"
                  )}
                >
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="font-medium text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5 relative reveal-animation">
            {/* Added the image as a background overlay on this container */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-800">
              <div className="absolute inset-0 bg-gradient-purple-blue opacity-30" />
              <img 
                src="/lovable-uploads/4f42fa51-87f7-402a-be0b-539f276618a4.png" 
                alt="Prakarsh Gupta - Small AI" 
                className="w-full h-auto relative z-10 object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 p-4 glassmorphism rounded-xl border border-smallai-purple border-opacity-20 w-48 animate-fade-in">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-400 mr-2" />
                <p className="text-xs font-medium text-white">AI Agents Online</p>
              </div>
              <p className="text-gray-300 text-xs mt-1">80% reduction in response time</p>
            </div>
            
            <div className="absolute -top-4 -right-4 p-4 glassmorphism rounded-xl border border-smallai-purple border-opacity-20 w-48 animate-fade-in delay-200">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-smallai-purple mr-2" />
                <p className="text-xs font-medium text-white">Part of Small Group</p>
              </div>
              <p className="text-gray-300 text-xs mt-1">Trusted by 50+ businesses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
