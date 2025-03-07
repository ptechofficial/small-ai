
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/a226a7a8-c250-4e97-8c32-842fd57d7a62.png" 
                alt="Small Group Logo" 
                className="h-10 w-auto mr-2"
              />
              <h1 className="text-xl font-bold tracking-tight">
                <span className="text-smallai-white">Small</span>
                <span className="text-smallai-purple">AI</span>
              </h1>
            </Link>
            <p className="text-gray-400 mb-6">
              AI automation agency specializing in custom AI solutions to transform your business operations.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-smallai-purple transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-smallai-purple transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-smallai-purple transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:prakarshgupta2051@gmail.com" 
                className="text-gray-400 hover:text-smallai-purple transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-smallai-purple transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-smallai-purple transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-smallai-purple transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-smallai-purple transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-smallai-purple transition-colors">
                  AI Agents
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-smallai-purple transition-colors">
                  Workflow Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-smallai-purple transition-colors">
                  AI Strategy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-smallai-purple transition-colors">
                  Data Intelligence
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <a 
                  href="mailto:prakarshgupta2051@gmail.com"
                  className="text-gray-400 hover:text-smallai-purple transition-colors"
                >
                  prakarshgupta2051@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                <a 
                  href="https://www.smallgrp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-smallai-purple transition-colors"
                >
                  www.smallgrp.com
                </a>
              </li>
              <li>
                <a 
                  href="https://calendly.com/prakarshgupta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-smallai-purple hover:text-smallai-purple-light transition-colors"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Small AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-smallai-purple text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-smallai-purple text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
