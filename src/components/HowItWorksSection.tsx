
import React, { useEffect, useRef } from 'react';
import { Rocket, Code, Zap, BarChart4 } from 'lucide-react';

const HowItWorksSection = () => {
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
            const elements = entry.target.querySelectorAll('.process-step');
            elements.forEach((el, index) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, 200 * index);
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

  const steps = [
    {
      number: "1",
      title: "Consultation",
      description: "We analyze your needs and identify opportunities for AI integration.",
      icon: <Rocket className="text-[#D946EF]" size={28} />,
      color: "from-[#D946EF] to-smallai-purple"
    },
    {
      number: "2",
      title: "Solution Design",
      description: "Our experts design a custom AI solution tailored to your requirements.",
      icon: <Code className="text-[#0EA5E9]" size={28} />,
      color: "from-smallai-blue to-[#0EA5E9]"
    },
    {
      number: "3",
      title: "Implementation",
      description: "We develop and deploy your AI solution with minimal disruption.",
      icon: <Zap className="text-[#F97316]" size={28} />,
      color: "from-[#F97316] to-[#FACC15]"
    },
    {
      number: "4",
      title: "Optimization",
      description: "Continuous monitoring and improvement of your AI systems.",
      icon: <BarChart4 className="text-[#10B981]" size={28} />,
      color: "from-[#10B981] to-[#34D399]"
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="how-it-works">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI5MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMCAwaDQ0MHY5MDBIMHoiLz48cGF0aCBkPSJNMjkzLjk2MyAyMzIuMDQ3YzYyLjQyIDAgMTEzLTUwLjU3MiAxMTMtMTEyLjk4MXMtNTAuNTgtMTEyLjk4Mi0xMTMtMTEyLjk4MmMtNjIuNDItMC0xMTMgNTAuNTcyLTExMyAxMTIuOTgyIDAgNjIuNDEgNTAuNTggMTEyLjk4MSAxMTMgMTEyLjk4MXoiIGZpbGw9IiMxOTEzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4=')] opacity-5 bg-cover bg-center" />
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-smallai-purple-dark to-transparent opacity-10" style={{ filter: 'blur(150px)' }} />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-smallai-blue-dark to-transparent opacity-10" style={{ filter: 'blur(150px)' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-reveal-from-top">
          <h2 className="text-sm uppercase tracking-wider text-smallai-purple mb-3 font-medium">Process</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-balance">
            How It <span className="gradient-text">Works</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our proven four-step methodology ensures a seamless integration of AI into your business processes,
            delivering measurable results at every stage.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto relative" ref={elementsRef}>
          {/* Process steps in single line */}
          <div className="flex flex-col md:flex-row justify-between gap-6 relative">
            {/* Timeline connector for desktop */}
            <div className="hidden md:block absolute top-28 left-12 right-12 h-1 bg-gradient-to-r from-smallai-purple via-smallai-blue to-smallai-purple-light opacity-50"></div>
            
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="process-step flex-1 opacity-0"
                style={{ 
                  transform: 'translateY(20px)', 
                  transition: 'opacity 0.6s ease, transform 0.6s ease',
                  transitionDelay: `${index * 0.1}s` 
                }}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon in circle */}
                  <div className="flex flex-col items-center mb-8">
                    <div className={`z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} rounded-full text-white shadow-glow mb-2`}>
                      {step.icon}
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 bg-smallai-purple rounded-full text-white text-sm font-bold shadow-glow mt-2">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="w-full">
                    <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800 transition-all duration-300 hover:border-smallai-purple shadow-lg hover:shadow-glow h-full">
                      <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="inline-block bg-gradient-to-r from-smallai-purple to-smallai-blue p-[1px] rounded-full">
              <a 
                href="#contact" 
                className="block bg-black hover:bg-black/80 rounded-full px-8 py-3 text-white font-medium transition-all"
              >
                Start Your AI Journey Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
