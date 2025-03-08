
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Brain, Cpu, MessageSquare, GitBranch, BarChart } from 'lucide-react';

const ServicesSection = () => {
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
            entry.target.classList.add('animate-reveal-from-bottom');
            observerRef.current?.unobserve(entry.target);
          }
        });
      }, options);

      const elements = elementsRef.current.querySelectorAll('.service-card');
      elements.forEach((el) => {
        observerRef.current?.observe(el);
      });
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const services = [
    {
      icon: <Bot className="h-8 w-8 text-smallai-purple" />,
      title: "AI Agents Development",
      description: "24/7 autonomous customer support. Reduce staffing costs by 60% while improving satisfaction scores by 35%.",
    },
    {
      icon: <Brain className="h-8 w-8 text-smallai-purple" />,
      title: "AI Strategy Consulting",
      description: "ROI-focused implementation roadmaps. Achieve 40% faster time-to-value on AI investments.",
    },
    {
      icon: <Cpu className="h-8 w-8 text-smallai-purple" />,
      title: "Workflow Automation",
      description: "Cut operational costs by 30%. Reduce manual tasks by 80% and eliminate human error.",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-smallai-purple" />,
      title: "Conversational AI Systems",
      description: "3x conversion rates with AI-driven engagement. Generate qualified leads automatically 24/7.",
    },
    {
      icon: <GitBranch className="h-8 w-8 text-smallai-purple" />,
      title: "AI Integration Services",
      description: "Seamless connection with existing systems. Increase operational efficiency by 45%.",
    },
    {
      icon: <BarChart className="h-8 w-8 text-smallai-purple" />,
      title: "Data Intelligence",
      description: "Turn raw data into profit. Make decisions 2x faster with 90% more accuracy.",
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="services">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-smallai-purple-dark to-transparent opacity-10" style={{ filter: 'blur(150px)' }} />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-smallai-blue-dark to-transparent opacity-10" style={{ filter: 'blur(150px)' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-reveal-from-top">
          <h2 className="text-sm uppercase tracking-wider text-smallai-purple mb-3 font-medium">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-balance">
            AI Solutions that <span className="gradient-text">Deliver ROI</span>
          </h3>
          <p className="text-gray-300 text-lg">
            Proven solutions that cut costs, increase revenue, and drive measurable business growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={elementsRef}>
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">{service.icon}</div>
              <h4 className="text-xl font-semibold mb-3 text-white">{service.title}</h4>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <Button 
                variant="link" 
                className="text-smallai-purple p-0 hover:text-white group"
                asChild
              >
                <a href="https://calendly.com/prakarshgupta" target="_blank" rel="noopener noreferrer">
                  Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            className="bg-smallai-purple hover:bg-smallai-purple-dark text-white rounded-full px-8 py-6 text-lg button-glow"
            asChild
          >
            <a href="https://calendly.com/prakarshgupta" target="_blank" rel="noopener noreferrer">
              Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
