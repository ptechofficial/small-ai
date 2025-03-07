
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Set document title
    document.title = "About Us | Small AI - AI Automation Agency";
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const values = [
    { 
      title: "Innovation", 
      description: "We continuously explore cutting-edge AI technologies to provide the most advanced solutions."
    },
    { 
      title: "Customization", 
      description: "We believe in tailored solutions that address your specific business challenges and goals."
    },
    { 
      title: "Scalability", 
      description: "Our solutions grow with your business, adapting to your evolving needs and requirements."
    },
    { 
      title: "Transparency", 
      description: "We maintain clear communication throughout the development process, ensuring alignment at every step."
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
              <h1 className="text-sm uppercase tracking-wider text-smallai-purple mb-3 font-medium animate-reveal-from-top">About Us</h1>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance animate-reveal-from-top">
                We Help Businesses <span className="gradient-text">Harness AI</span> to Their Advantage
              </h2>
              <p className="text-gray-300 text-lg mb-8 animate-reveal-from-top">
                Small AI is an AI automation agency focused on creating custom solutions that drive 
                business growth, efficiency, and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-reveal-from-left">
                <h3 className="text-2xl font-bold mb-6 text-white">Our Story</h3>
                <p className="text-gray-300 mb-6">
                  Small AI was founded as part of the Small Group with a vision to make AI technology accessible
                  to businesses of all sizes. We recognized that many organizations struggle to implement AI
                  effectively, often due to technical complexity or resource constraints.
                </p>
                <p className="text-gray-300 mb-6">
                  Our mission is to bridge this gap by providing tailored AI solutions that are not only powerful
                  but also practical and aligned with real business objectives. We focus on automating workflows,
                  enhancing customer experiences, and generating actionable insights from data.
                </p>
                <p className="text-gray-300 mb-8">
                  Today, we help companies across various industries transform their operations through custom
                  AI agents, automation systems, and strategic AI implementation.
                </p>
                <Button 
                  className="bg-smallai-purple hover:bg-smallai-purple-dark text-white rounded-full px-6 button-glow"
                  asChild
                >
                  <a href="https://calendly.com/prakarshgupta" target="_blank" rel="noopener noreferrer">
                    Let's Connect <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              
              <div className="relative animate-reveal-from-right">
                <div className="aspect-square w-full rounded-2xl overflow-hidden border border-gray-800 relative">
                  <div className="absolute inset-0 bg-gradient-purple-blue opacity-20" />
                  <img 
                    src="/lovable-uploads/4f42fa51-87f7-402a-be0b-539f276618a4.png" 
                    alt="Prakarsh Gupta - Small AI" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <img 
                  src="/lovable-uploads/a226a7a8-c250-4e97-8c32-842fd57d7a62.png" 
                  alt="Small Group Logo"
                  className="absolute -bottom-6 -right-6 h-16 w-auto p-2 glassmorphism rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-smallai-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-sm uppercase tracking-wider text-smallai-purple mb-3 font-medium">Our Values</h2>
              <h3 className="text-3xl font-bold mb-6">Principles That Guide Us</h3>
              <p className="text-gray-300">
                These core values shape how we approach every project and client relationship.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, i) => (
                <div 
                  key={i} 
                  className="p-6 rounded-xl border border-gray-800 bg-black bg-opacity-50 animate-reveal-from-bottom"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <h4 className="text-xl font-semibold mb-3 text-white">{value.title}</h4>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-sm uppercase tracking-wider text-smallai-purple mb-3 font-medium">Our Team</h2>
              <h3 className="text-3xl font-bold mb-6">Meet Our Leadership</h3>
              <p className="text-gray-300">
                A team of experts dedicated to helping you harness the power of AI.
              </p>
            </div>
            
            <div className="max-w-md mx-auto animate-reveal-from-bottom">
              <div className="rounded-xl overflow-hidden border border-gray-800 bg-black bg-opacity-50">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/1298d032-0eb4-4d9c-8d83-0a9bebbe096c.png" 
                    alt="Prakarsh Gupta" 
                    className="w-full object-cover aspect-square"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white">Prakarsh Gupta</h4>
                  <p className="text-smallai-purple mb-4">Founder & CEO</p>
                  <p className="text-gray-400 mb-6">
                    Prakarsh is an AI expert and entrepreneur with a passion for helping businesses leverage artificial intelligence to solve real-world problems.
                  </p>
                  <div className="flex justify-center">
                    <Button 
                      className="bg-smallai-purple hover:bg-smallai-purple-dark text-white rounded-full px-6 button-glow"
                      asChild
                    >
                      <a href="https://calendly.com/prakarshgupta" target="_blank" rel="noopener noreferrer">
                        Connect with Prakarsh
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
