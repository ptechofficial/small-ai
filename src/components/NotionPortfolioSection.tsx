
import React from 'react';

const NotionPortfolioSection = () => {
  return (
    <section id="notion-portfolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Portfolio</h2>
          <p className="text-lg text-smallai-gray-light max-w-2xl mx-auto">
            View our detailed portfolio and case studies
          </p>
        </div>

        <div className="glass-card p-3 shadow-glow mb-12 relative overflow-hidden">
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] via-[#9B87F5] to-[#48A7FF] opacity-30 rounded-xl"></div>
          
          <div className="relative bg-smallai-black rounded-lg overflow-hidden">
            <iframe 
              src="https://legend-barge-759.notion.site/ebd/1c8e5852cfdb806bb421e7ec85238b9c?v=1c8e5852cfdb81508a17000c5273b6c1" 
              width="100%" 
              height="600" 
              frameBorder="0" 
              allowFullScreen
              className="z-10 relative"
              title="Notion Portfolio"
            />
          </div>
        </div>
      </div>
      
      {/* Abstract background elements */}
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#9B87F5] rounded-full opacity-10 blur-[100px]"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-[#FF6B6B] rounded-full opacity-10 blur-[100px]"></div>
    </section>
  );
};

export default NotionPortfolioSection;
