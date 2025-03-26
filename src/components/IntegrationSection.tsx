
import React, { useEffect, useRef } from 'react';
import { Cpu, Zap, Database } from 'lucide-react';

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
    { 
      name: "n8n", 
      color: "#21DDBC", 
      logo: <img src="/lovable-uploads/4aa2a291-e8be-49d1-b597-b04b2683e64e.png" alt="n8n" className="w-12 h-12 object-contain" />
    },
    { 
      name: "make.com", 
      color: "#EC4899", 
      logo: <img src="/lovable-uploads/a32716cd-89c0-4785-977b-cae0df135f8f.png" alt="make.com" className="w-12 h-12 object-contain" />
    },
    { 
      name: "gumloop", 
      color: "#3B82F6", 
      logo: <img src="/lovable-uploads/b0d9ff6b-e698-4ded-a94e-47434ec5ee12.png" alt="gumloop" className="w-12 h-12 object-contain" />
    },
    { 
      name: "ChatGPT", 
      color: "#1A7F64", 
      logo: <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#1A7F64"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" /></svg>
    },
    { 
      name: "Claude", 
      color: "#7C3AED", 
      logo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="w-12 h-12" fill="#7C3AED"><path d="M28.5999 0.0874043C31.7649 0.581404 34.4099 2.1514 36.4999 4.6714C39.3149 7.9814 40.5999 11.8514 40.1899 16.2714C39.7149 21.4314 36.9699 24.9714 32.0999 27.3414C30.9699 27.8614 30.7549 28.2214 31.1199 29.4714C31.4999 30.7514 31.2699 32.0414 30.5149 33.1714C29.6149 34.5214 28.2849 35.1514 26.6599 35.0714C25.4799 35.0064 24.5599 34.5114 23.7799 33.5914C23.4449 33.2114 23.1849 33.2364 22.7899 33.5164C22.0049 34.0964 21.1649 34.5564 20.2399 34.8714C18.3799 35.4714 16.5999 35.1714 14.9999 33.9564C14.4849 33.5614 14.0649 33.5214 13.4899 33.9564C10.9549 35.7964 6.9999 35.2214 5.4999 32.8814C4.7099 31.6064 4.5449 30.2664 4.9399 28.8564C5.0674 28.3864 4.8499 28.1514 4.4549 27.9214C1.2624 26.0114 -0.4751 23.1014 0.1149 19.3164C0.6699 15.7514 2.8699 13.5014 6.2399 11.8514C6.8349 11.5514 6.9649 11.3164 6.8599 10.6714C6.3374 7.2964 8.1524 3.7014 11.2999 1.9164C14.2599 0.231404 17.3599 0.126404 20.4299 1.7164C20.9399 1.9714 21.3249 2.0664 21.8849 1.8664C24.0399 1.0614 26.1949 0.381404 28.5999 0.0874043Z"></path></svg>
    },
    { 
      name: "Gemini", 
      color: "#F97316", 
      logo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12" fill="#F97316"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM18.97 11H16.95C16.85 9.2 16.45 7.6 15.86 6.46C17.32 7.5 18.34 9.11 18.97 11ZM12 4C12.83 4 14.35 5.1 15.19 8H8.81C9.65 5.1 11.17 4 12 4ZM4 12C4 11.66 4.05 11.33 4.09 11H6.15C6.1 11.32 6.05 11.66 6.05 12C6.05 12.34 6.08 12.68 6.13 13H4.09C4.05 12.67 4 12.34 4 12ZM5.03 15H7.05C7.15 16.8 7.55 18.4 8.14 19.54C6.68 18.5 5.66 16.89 5.03 15ZM7.05 9H5.03C5.66 7.11 6.68 5.5 8.14 4.46C7.55 5.6 7.15 7.2 7.05 9ZM12 20C11.17 20 9.65 18.9 8.81 16H15.19C14.35 18.9 12.83 20 12 20ZM15.5 13H8.5C8.49 12.67 8.44 12.34 8.44 12C8.44 11.66 8.45 11.32 8.5 11H15.5C15.55 11.32 15.56 11.66 15.56 12C15.56 12.34 15.51 12.67 15.5 13ZM15.86 19.54C16.45 18.4 16.85 16.8 16.95 15H18.97C18.34 16.89 17.32 18.5 15.86 19.54ZM17.85 13H19.91C19.95 12.67 20 12.34 20 12C20 11.66 19.95 11.33 19.91 11H17.85C17.9 11.32 17.95 11.66 17.95 12C17.95 12.34 17.9 12.68 17.85 13Z"></path></svg>
    },
    { 
      name: "Deepseek", 
      color: "#2D9CDB", 
      logo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12" fill="#2D9CDB"><circle cx="12" cy="12" r="10"/><path fill="#fff" d="M9 9h6v2H9zm0 4h6v2H9z"/></svg>
    },
    { 
      name: "Meta", 
      color: "#0078FF", 
      logo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12" fill="#0078FF"><path d="M12 1.542C6.15 1.542 1.542 6.15 1.542 12c0 5.85 4.608 10.458 10.458 10.458 5.85 0 10.458-4.608 10.458-10.458 0-5.85-4.608-10.458-10.458-10.458zm3.52 9.468h-1.304v5.458H12.01v-5.458h-1.083v-1.875H12.01V8.51c0-.823.021-2.087 1.625-2.087h2.302V8.26h-1.25c-.27 0-.541.135-.541.708v1.167h1.791l-.417 1.875z"/></svg>
    },
    { 
      name: "Instagram", 
      color: "#E1306C", 
      logo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12" fill="#E1306C"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
    },
    { 
      name: "Drive", 
      color: "#FBBC04", 
      logo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.3 78" className="w-12 h-12"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5l5.4 9.35z" fill="#0066da"/><path d="M43.65 25L29.9 1.2c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0-1.2 4.5h27.45l16.2-28z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.85L73.55 76.8z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.55 0 53 0H34.3c-1.55 0-3.05.4-4.4 1.2L43.65 25z" fill="#00832d"/><path d="M59.85 53H27.45L13.7 76.8c1.35.8 2.85 1.2 4.4 1.2h51.8c1.55 0 3.05-.4 4.4-1.2L59.85 53z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25l16.2 28h27.45c0-1.55-.4-3.1-1.2-4.5l-12.7-22z" fill="#ffba00"/></svg>
    },
    { 
      name: "Calendar", 
      color: "#4285F4", 
      logo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12"><rect width="48" height="48" fill="#fff"/><path fill="#0066da" d="M33.5 6h-1.77v3.5H27V6h-6v3.5h-4.73V6H14.5a2.5 2.5 0 0 0-2.5 2.5v31a2.5 2.5 0 0 0 2.5 2.5h19a2.5 2.5 0 0 0 2.5-2.5v-31a2.5 2.5 0 0 0-2.5-2.5z"/><path fill="#e94235" d="M28.25 28.5h-8.5V20h8.5z"/><path fill="#fff" d="M14.5 15.5v-7h4.73v3.5h4.52v-3.5h6v3.5h4.73v-3.5h1.77v7z"/></svg>
    },
    { 
      name: "Gmail", 
      color: "#D44638", 
      logo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12"><path fill="#4285f4" d="M5.457 16.883a1.953 1.953 0 0 1-1.953-1.954V9.071a1.953 1.953 0 0 1 1.953-1.954h13.086a1.953 1.953 0 0 1 1.953 1.954v5.858a1.953 1.953 0 0 1-1.953 1.954H5.457z"/><path fill="#ea4335" d="M5.457 16.86h13.086a1.954 1.954 0 0 0 1.954-1.954v-.186L12 9.071l-8.496 5.648v.187c0 1.077.876 1.954 1.953 1.954z"/><path fill="#fbbc05" d="M5.457 7.14c-1.077 0-1.953.876-1.953 1.953v5.86c0 1.076.876 1.953 1.953 1.953h.806l7.69-5.127 7.69 5.127h.806a1.953 1.953 0 0 0 1.954-1.954v-5.86a1.954 1.954 0 0 0-1.954-1.952H5.457z"/><path fill="#c5221f" d="M3.504 14.953v.186A1.954 1.954 0 0 0 5.457 17.1h13.086a1.953 1.953 0 0 0 1.954-1.954V9.287l-8.495 5.65-8.498-5.65z"/></svg>
    },
    { 
      name: "Twitter", 
      color: "#1DA1F2", 
      logo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12" fill="#1DA1F2"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/></svg>
    },
  ];

  // Added business integration cards like in the image
  const businessIntegrationCards = [
    {
      icon: <Cpu className="h-10 w-10 text-[#8B5CF6]" />,
      title: "AI Agents",
      description: "24/7 operation, 0 human input",
      color: "from-[#8B5CF6] to-[#9B87F5]"
    },
    {
      icon: <Zap className="h-10 w-10 text-[#3B82F6]" />,
      title: "Workflow Automation",
      description: "30% cost reduction",
      color: "from-[#3B82F6] to-[#48A7FF]"
    },
    {
      icon: <Database className="h-10 w-10 text-[#6366F1]" />,
      title: "Data Intelligence",
      description: "2x faster decisions",
      color: "from-[#6366F1] to-[#9B87F5]"
    }
  ];

  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-60 h-60 bg-[#FF6B6B] opacity-5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-[#48A7FF] opacity-5 rounded-full blur-[100px]"></div>
      </div>
    
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-[#1C1C30] border border-gray-800 rounded-full mb-6">
            <p className="text-sm uppercase tracking-wider text-blue-400 font-medium">SMART CONNECTIONS</p>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#9B87F5] via-[#6366F1] to-[#48A7FF] text-transparent bg-clip-text animate-gradient-shift">
            Integrate AI into your
          </h2>
          
          <div className="w-36 h-1 bg-gradient-to-r from-[#FF6B6B] via-[#9B87F5] to-[#48A7FF] mx-auto mb-6"></div>
          
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg animate-reveal-from-top">
            Connect and automate your favorite tools with AI-powered workflows for seamless integration
          </p>
          
          {/* Business integration cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {businessIntegrationCards.map((card, index) => (
              <div 
                key={index}
                className="bg-[#0F0F1A] border border-gray-800 p-6 rounded-xl relative overflow-hidden group hover:shadow-xl hover:border-blue-500/50 transition-all duration-300"
                style={{
                  backgroundImage: 'radial-gradient(circle at 100% 100%, rgba(60, 60, 90, 0.1) 0%, transparent 50%)'
                }}
              >
                {/* Glowing accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="bg-[#1A1A2E] p-3 rounded-xl inline-block mb-4">
                  {card.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-gray-400">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative overflow-hidden">
          {/* Gradient masks for carousel edges */}
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10"></div>
          
          {/* Scrolling carousel */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto py-12 scrollbar-hide gap-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Double the items to create an infinite scrolling effect */}
            {[...integrations, ...integrations].map((integration, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 flex flex-col items-center justify-center gap-4 hover-scale"
              >
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center p-1 glassmorphism"
                  style={{ boxShadow: `0 0 20px ${integration.color}30` }}
                >
                  <div 
                    className="w-full h-full rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${integration.color}15` }}
                  >
                    {integration.logo || (
                      <span className="text-white font-bold text-xl">
                        {integration.name.charAt(0)}
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-sm font-medium text-white opacity-80 hover:opacity-100 transition-opacity">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
