
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    // Set document title
    document.title = "Services | Small AI - AI Automation Agency";
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const featuredCases = [
    {
      title: "E-commerce Voice Assistant",
      description: "Implemented an AI voice agent that increased conversion rates by 24% for an online retailer.",
      tags: ["Voice AI", "Conversational Design", "Integration"]
    },
    {
      title: "Customer Support Automation",
      description: "Built an AI agent system that handles 80% of customer inquiries without human intervention.",
      tags: ["AI Agents", "NLP", "API Integration"]
    },
    {
      title: "Sales Process Automation",
      description: "Developed an end-to-end automated sales system that generated $500K in additional revenue.",
      tags: ["Workflow Automation", "CRM Integration", "Analytics"]
    }
  ];

  return (
    <div className="min-h-screen bg-smallai-black text-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-smallai-purple-dark to-transparent opacity-10" style={{ filter: 'blur(150px)' }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-sm uppercase tracking-wider text-smallai-purple mb-3 font-medium animate-reveal-from-top">Services</h1>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance animate-reveal-from-top">
                AI Solutions Designed for <span className="gradient-text">Business Growth</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 animate-reveal-from-top">
                We create custom AI solutions that transform how businesses operate, 
                communicate with customers, and make decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative animate-reveal-from-left">
                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-gray-800 relative">
                  <div className="absolute inset-0 bg-gradient-purple-blue opacity-20" />
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000" 
                    alt="AI Technology" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 p-4 glassmorphism rounded-xl border border-smallai-purple border-opacity-20 max-w-xs">
                  <div className="flex items-start">
                    <CheckCircle className="text-smallai-purple mr-2 mt-1 flex-shrink-0" size={16} />
                    <p className="text-gray-300 text-sm">Our solutions are built with scalability in mind, growing with your business needs</p>
                  </div>
                </div>
              </div>
              
              <div className="animate-reveal-from-right">
                <h3 className="text-2xl font-bold mb-6 text-white">How We Transform Your Business</h3>
                <p className="text-gray-300 mb-8">
                  Small AI specializes in creating tailored AI solutions that address your unique business challenges. 
                  We don't just implement technology; we design comprehensive systems that seamlessly integrate with your existing processes.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Custom AI agents to automate customer interactions",
                    "End-to-end workflow automation to reduce manual tasks",
                    "Data intelligence systems for actionable insights",
                    "AI strategy development and implementation roadmaps",
                    "Integration with existing tools and platforms"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="text-smallai-purple mr-3 mt-1" size={18} />
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="bg-smallai-purple hover:bg-smallai-purple-dark text-white rounded-full px-6 button-glow"
                  asChild
                >
                  <a href="https://calendly.com/prakarshgupta" target="_blank" rel="noopener noreferrer">
                    Schedule a Consultation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 bg-smallai-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-sm uppercase tracking-wider text-smallai-purple mb-3 font-medium">Case Studies</h2>
              <h3 className="text-3xl font-bold mb-6">Results That Speak For Themselves</h3>
              <p className="text-gray-300">
                Here are some examples of how our AI solutions have helped businesses achieve remarkable growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredCases.map((item, i) => (
                <div 
                  key={i} 
                  className="glassmorphism rounded-xl p-6 border border-gray-800 animate-reveal-from-bottom"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <h4 className="text-xl font-semibold mb-3 text-white">{item.title}</h4>
                  <p className="text-gray-400 mb-6">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, j) => (
                      <span 
                        key={j} 
                        className="px-3 py-1 bg-smallai-purple bg-opacity-10 text-smallai-purple rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Services */}
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
