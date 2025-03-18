
import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}

const PastWorkSection = () => {
  const videos: VideoItem[] = [
    {
      id: "Vdwnm_2NOtQ",
      title: "AI Automation Demo",
      thumbnail: `/lovable-uploads/4aa2a291-e8be-49d1-b597-b04b2683e64e.png`,
      url: "https://youtu.be/Vdwnm_2NOtQ"
    },
    {
      id: "sYEy6Hgg1Kw",
      title: "Workflow Automation",
      thumbnail: `/lovable-uploads/a32716cd-89c0-4785-977b-cae0df135f8f.png`,
      url: "https://youtu.be/sYEy6Hgg1Kw"
    },
    {
      id: "7qYgrKoRhJg", 
      title: "AI Integration",
      thumbnail: `/lovable-uploads/b0d9ff6b-e698-4ded-a94e-47434ec5ee12.png`,
      url: "https://youtu.be/7qYgrKoRhJg"
    },
    {
      id: "zpU0XGcDbNc",
      title: "Data Intelligence",
      thumbnail: "https://i.ytimg.com/vi/zpU0XGcDbNc/maxresdefault.jpg",
      url: "https://youtu.be/zpU0XGcDbNc"
    }
  ];

  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  return (
    <section className="py-24 bg-smallai-black relative overflow-hidden" id="past-work">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-smallai-blue-dark to-transparent opacity-10" style={{ filter: 'blur(150px)' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-reveal-from-top">
          <h2 className="text-sm uppercase tracking-wider text-smallai-purple mb-3 font-medium">Our Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Past <span className="gradient-text">Work</span></h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            View our recent AI automation projects that have transformed businesses across industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {videos.map((video) => (
            <Card 
              key={video.id}
              className="overflow-hidden bg-black border border-gray-800 hover:border-smallai-purple transition-all duration-300 group"
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <CardContent className="p-0 relative">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 ${hoveredVideo === video.id ? 'opacity-100' : 'opacity-0'}`}>
                    <a 
                      href={video.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="glassmorphism p-4 rounded-full animate-pulse"
                    >
                      <Play size={32} className="text-white" />
                    </a>
                  </div>
                  
                  {/* Gradient Overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
                  
                  {/* Title and link overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-center">
                    <h4 className="text-white font-medium text-lg">{video.title}</h4>
                    <a 
                      href={video.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-smallai-purple hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="https://www.youtube.com/@smallgrp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-smallai-purple hover:text-white transition-colors"
          >
            View more videos <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PastWorkSection;
