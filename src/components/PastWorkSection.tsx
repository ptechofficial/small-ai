
import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
}

const PastWorkSection = () => {
  const videos: VideoItem[] = [
    {
      id: "Vdwnm_2NOtQ",
      title: "AI Automation Demo",
      description: "Streamlining workflows with intelligent automation solutions",
      thumbnail: `/lovable-uploads/4aa2a291-e8be-49d1-b597-b04b2683e64e.png`,
      url: "https://youtu.be/Vdwnm_2NOtQ"
    },
    {
      id: "sYEy6Hgg1Kw",
      title: "Workflow Automation",
      description: "Building efficient processes with custom AI integrations",
      thumbnail: `/lovable-uploads/a32716cd-89c0-4785-977b-cae0df135f8f.png`,
      url: "https://youtu.be/sYEy6Hgg1Kw"
    },
    {
      id: "7qYgrKoRhJg", 
      title: "AI Integration",
      description: "Seamlessly connecting systems with intelligent AI solutions",
      thumbnail: `/lovable-uploads/b0d9ff6b-e698-4ded-a94e-47434ec5ee12.png`,
      url: "https://youtu.be/7qYgrKoRhJg"
    },
    {
      id: "zpU0XGcDbNc",
      title: "Data Intelligence",
      description: "Transforming raw data into actionable business insights",
      thumbnail: "https://i.ytimg.com/vi/zpU0XGcDbNc/maxresdefault.jpg",
      url: "https://youtu.be/zpU0XGcDbNc"
    }
  ];

  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  return (
    <section className="py-24 bg-smallai-black relative overflow-hidden" id="past-work">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-[#FF6B6B] to-transparent opacity-10" style={{ filter: 'blur(150px)' }} />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-[#48A7FF] to-transparent opacity-10" style={{ filter: 'blur(150px)' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-reveal-from-top">
          <div className="inline-block mb-6">
            <div className="gradient-border">
              <div className="px-4 py-1">
                <h2 className="text-sm uppercase tracking-wider text-gradient font-medium">Our Portfolio</h2>
              </div>
            </div>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 hero-text-gradient">Past Work</h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            View our recent AI automation projects that have transformed businesses across industries.
          </p>
        </div>
        
        <div className="lg:hidden">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {videos.map((video) => (
                <CarouselItem key={video.id} className="md:basis-1/1 lg:basis-1/2">
                  <VideoCard 
                    video={video} 
                    isHovered={hoveredVideo === video.id}
                    onHover={(id) => setHoveredVideo(id)}
                    onLeave={() => setHoveredVideo(null)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-black/50 border-none text-white hover:bg-black/70" />
            <CarouselNext className="right-0 bg-black/50 border-none text-white hover:bg-black/70" />
          </Carousel>
        </div>
        
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {videos.map((video) => (
            <VideoCard 
              key={video.id}
              video={video} 
              isHovered={hoveredVideo === video.id}
              onHover={(id) => setHoveredVideo(id)}
              onLeave={() => setHoveredVideo(null)}
            />
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="https://www.youtube.com/@smallgrp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-white bg-gradient-to-r from-[#FF6B6B] via-[#9B87F5] to-[#48A7FF] bg-size-200 bg-pos-0 hover:bg-pos-100 px-6 py-3 rounded-full transition-all duration-300 font-medium"
          >
            View more videos <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

interface VideoCardProps {
  video: VideoItem;
  isHovered: boolean;
  onHover: (id: string) => void;
  onLeave: () => void;
}

const VideoCard = ({ video, isHovered, onHover, onLeave }: VideoCardProps) => {
  return (
    <div className="group">
      <div className="gradient-border h-full">
        <Card 
          className="overflow-hidden bg-black/40 border-none h-full frosted-glass"
          onMouseEnter={() => onHover(video.id)}
          onMouseLeave={onLeave}
        >
          <CardContent className="p-0 relative">
            <div className="relative aspect-video overflow-hidden rounded-t-lg">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <a 
                  href={video.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glassmorphism p-4 rounded-full pulse-glow hover:scale-110 transition-transform duration-300"
                >
                  <Play size={32} className="text-white" />
                </a>
              </div>
              
              {/* Gradient Overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
            </div>
            
            {/* Content section */}
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2 text-white group-hover:text-gradient transition-all duration-300">{video.title}</h4>
              <p className="text-gray-400 mb-4 text-sm">{video.description}</p>
              <div className="flex justify-between items-center">
                <a 
                  href={video.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#9B87F5] hover:text-white transition-colors flex items-center gap-1"
                >
                  Watch video <ExternalLink size={16} />
                </a>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FF6B6B]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#9B87F5]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#48A7FF]"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PastWorkSection;
