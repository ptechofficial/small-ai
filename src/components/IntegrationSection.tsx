import React, { useEffect, useRef } from 'react';

const IntegrationSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!carouselRef.current) return;
    
    const scrollAnimation = () => {
      if (!carouselRef.current) return;
      
      // If we've scrolled to the end, reset to the beginning
      if (carouselRef.current.scrollLeft >= (carouselRef.current.scrollWidth - carouselRef.current.clientWidth)) {
        carouselRef.current.scrollLeft = 0;
      } else {
        // Otherwise, scroll by 1px
        carouselRef.current.scrollLeft += 1;
      }
    };
    
    // Set interval for smooth scrolling
    const interval = setInterval(scrollAnimation, 30);
    
    return () => clearInterval(interval);
  }, []);

  const integrations = [
    { name: "n8n", color: "#FF6B6B" },
    { name: "make.com", color: "#6B9AFF" },
    { name: "gumloop", color: "#6BFF9A" },
    { name: "ChatGPT", color: "#1A7F64" },
    { name: "Claude", color: "#7C3AED" },
    { name: "Gemini", color: "#F2994A" },
    { name: "Deepseek", color: "#2D9CDB" },
    { name: "Meta", color: "#0078FF" },
    { name: "Instagram", color: "#E1306C" },
    { name: "Drive", color: "#FBBC04" },
    { name: "Calendar", color: "#4285F4" },
    { name: "Gmail", color: "#D44638" },
    { name: "Twitter", color: "#1DA1F2" },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 animate-reveal-from-top">
            Integrate AI into your <span className="gradient-text">app ecosystem</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 animate-reveal-from-top">
            Connect and automate your favorite tools with AI-powered workflows
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          {/* Gradient masks for carousel edges */}
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10"></div>
          
          {/* Scrolling carousel */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto py-8 scrollbar-hide gap-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Double the items to create an infinite scrolling effect */}
            {[...integrations, ...integrations].map((integration, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 flex flex-col items-center justify-center"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: integration.color }}
                >
                  <span className="text-white font-bold text-xl">
                    {integration.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-white">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
