
import React, { useEffect, useRef } from 'react';

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
      description: "We analyze your needs and identify opportunities for AI integration."
    },
    {
      number: "2",
      title: "Solution Design",
      description: "Our experts design a custom AI solution tailored to your requirements."
    },
    {
      number: "3",
      title: "Implementation",
      description: "We develop and deploy your AI solution with minimal disruption."
    },
    {
      number: "4",
      title: "Optimization",
      description: "Continuous monitoring and improvement of your AI systems."
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="how-it-works">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-smallai-purple-dark to-transparent opacity-10" style={{ filter: 'blur(150px)' }} />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-smallai-blue-dark to-transparent opacity-10" style={{ filter: 'blur(150px)' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-reveal-from-top">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-balance">
            How It <span className="gradient-text">Works</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative" ref={elementsRef}>
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:-ml-0.5 w-1 h-full bg-gradient-to-b from-smallai-purple to-smallai-blue opacity-50"></div>
          
          {/* Process steps */}
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`process-step relative flex md:items-center mb-12 opacity-0`}
              style={{ 
                transform: 'translateY(20px)', 
                transition: 'opacity 0.6s ease, transform 0.6s ease',
                transitionDelay: `${index * 0.1}s` 
              }}
            >
              {/* Circle with number */}
              <div className="z-10 flex items-center justify-center shrink-0 w-16 h-16 md:mx-auto bg-smallai-purple rounded-full text-white text-2xl font-bold shadow-glow">
                {step.number}
              </div>
              
              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:-mt-8' : 'md:pl-12 md:ml-auto md:-mt-8'}`}>
                <div className="bg-black bg-opacity-80 p-6 rounded-xl border border-gray-800 transition-all duration-300 hover:border-smallai-purple shadow-lg backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
