
import React from 'react';

const LogoCloud = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-sm uppercase tracking-wider text-smallai-purple mb-3 font-medium animate-reveal-from-top">Trusted By Businesses</h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-reveal-from-top">
            We've helped companies across various industries implement AI solutions
            that drive growth and efficiency.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-70">
          {/* Placeholder for company logos */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div 
              key={i} 
              className="w-32 h-12 bg-gray-800 bg-opacity-50 rounded animate-pulse-slow"
              style={{ 
                animationDelay: `${i * 0.2}s`,
              }} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
