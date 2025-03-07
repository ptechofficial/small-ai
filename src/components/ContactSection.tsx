
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Mail, MessageSquare, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section className="py-24 bg-smallai-black relative overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-smallai-purple opacity-10 floating" style={{ filter: 'blur(100px)' }} />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-smallai-blue opacity-10 floating-slow" style={{ filter: 'blur(120px)' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-reveal-from-top">
            <h2 className="text-sm uppercase tracking-wider text-smallai-purple mb-3 font-medium">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-balance">
              Ready to <span className="gradient-text">Automate</span> Your Business?
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Schedule a free strategy call to discuss how our AI solutions can help your business grow. Let's build something extraordinary together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            <Card className="rounded-xl border border-gray-800 bg-black bg-opacity-50 overflow-hidden animate-reveal-from-left p-8">
              <CardContent className="p-0 flex flex-col gap-6 h-full justify-center">
                <h4 className="text-2xl font-bold text-white mb-2">Let's Connect</h4>
                <p className="text-gray-300 mb-6">
                  Ready to transform your business with AI? Book a free strategy call, and let's discuss how we can help you achieve your goals.
                </p>
                <Button 
                  className="bg-smallai-purple hover:bg-smallai-purple-dark text-white rounded-full px-8 py-6 text-lg button-glow w-full sm:w-auto"
                  asChild
                >
                  <a href="https://calendly.com/prakarshgupta" target="_blank" rel="noopener noreferrer">
                    Schedule a Strategy Call
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <div className="space-y-6 animate-reveal-from-right">
              <div className="glassmorphism rounded-xl p-6 border border-gray-800">
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="p-4 rounded-full bg-smallai-purple bg-opacity-10 border border-smallai-purple border-opacity-20">
                    <Calendar className="h-6 w-6 text-smallai-purple" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">Schedule a Strategy Call</h4>
                    <p className="text-gray-400 mb-4">Pick a time that works for you and let's discuss your project.</p>
                    <Button 
                      className="bg-smallai-purple hover:bg-smallai-purple-dark text-white rounded-full px-6 button-glow"
                      asChild
                    >
                      <a href="https://calendly.com/prakarshgupta" target="_blank" rel="noopener noreferrer">
                        Book a Call
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="glassmorphism rounded-xl p-6 border border-gray-800">
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="p-4 rounded-full bg-smallai-purple bg-opacity-10 border border-smallai-purple border-opacity-20">
                    <Mail className="h-6 w-6 text-smallai-purple" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">Send us an Email</h4>
                    <p className="text-gray-400 mb-1">We'll get back to you as soon as possible.</p>
                    <a 
                      href="mailto:prakarshgupta02051@gmail.com" 
                      className="text-smallai-purple hover:text-smallai-purple-light transition-colors"
                    >
                      prakarshgupta02051@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="glassmorphism rounded-xl p-6 border border-gray-800">
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="p-4 rounded-full bg-smallai-purple bg-opacity-10 border border-smallai-purple border-opacity-20">
                    <MessageSquare className="h-6 w-6 text-smallai-purple" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">Visit Our Website</h4>
                    <p className="text-gray-400 mb-1">Learn more about Small Group.</p>
                    <a 
                      href="https://www.smallgrp.com" 
                      className="text-smallai-purple hover:text-smallai-purple-light transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.smallgrp.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
