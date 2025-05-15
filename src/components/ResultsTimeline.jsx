import React, { useState, useEffect } from "react";
import { 
  Users, 
  Gauge, 
  Award, 
  UserRound, 
  MessageSquare,
  ChevronRight,
  CheckCircle
} from "lucide-react";

const ResultsTimeline = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  // Handle mobile tap to expand/collapse
  const handleItemClick = (id) => {
    if (isMobile) {
      setHoveredItem(hoveredItem === id ? null : id);
    }
  };
  
  const timelineItems = [
    {
      id: 1,
      title: "Collaborative Partnerships",
      description: "We build lasting partnerships through close collaboration, aligning with your business goals to deliver impactful solutions.",
      icon: Users,
      color: "#7C42DA",
      benefits: ["Aligned business objectives", "Shared vision and goals", "Long-term relationship building"]
    },
    {
      id: 2,
      title: "Agility and Adaptability",
      description: "Our agile approach ensures rapid response to evolving business needs, keeping your digital solutions future-ready.",
      icon: Gauge,
      color: "#F8B000",
      benefits: ["Rapid iteration cycles", "Flexible development", "Quick market response"]
    },
    {
      id: 3,
      title: "Uncompromising Quality",
      description: "From concept to deployment, we prioritize precision, performance, and long-term value in all solutions.",
      icon: Award,
      color: "#B94391",
      benefits: ["Rigorous testing", "Performance optimization", "Best practices"]
    },
    {
      id: 4,
      title: "Client-Centric Focus",
      description: "Your success is our mission. We ensure every project meets expectations and drives measurable results.",
      icon: UserRound,
      color: "#D1B9F7",
      benefits: ["Personalized solutions", "Dedicated support", "Results-driven approach"]
    },
    {
      id: 5,
      title: "Transparent Communication",
      description: "We uphold transparency through consistent updates, honest feedback, and delivering exactly what we promise.",
      icon: MessageSquare,
      color: "#E85535",
      benefits: ["Regular updates", "Clear milestones", "Open feedback channels"]
    },
  ];

  return (
    <section className="py-[2rem] bg-[#F7F7F9]">
      <h2 data-aos="fade-up" className="wrapper section-heading text-center mb-6">
        How Kalyx AI Labs helps you deliver the best results
      </h2>
      
      <div className="wrapper relative pt-6">
        {/* Timeline line - visible on medium screens and up */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 via-secondary to-primary/30 transform -translate-x-1/2 z-0"></div>
        
        {/* Timeline items */}
        <div className="space-y-8 md:space-y-12 pb-2">
          {timelineItems.map((item, index) => (
            <div 
              key={item.id}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              className={`relative flex flex-col md:flex-row items-start ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              onMouseEnter={() => !isMobile && setHoveredItem(item.id)}
              onMouseLeave={() => !isMobile && setHoveredItem(null)}
              onClick={() => handleItemClick(item.id)}
            >
              {/* Timeline dot and connector */}
              <div className="absolute left-4 md:left-1/2 top-4 md:top-1/2 transform md:-translate-y-1/2 md:-translate-x-1/2 z-10 flex flex-col items-center">
                {/* Dot */}
                <div 
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md flex items-center justify-center transition-all duration-500 ${
                    hoveredItem === item.id ? "scale-110" : ""
                  }`}
                  style={{ 
                    backgroundColor: item.color,
                    boxShadow: hoveredItem === item.id ? `0 0 15px ${item.color}80` : ""
                  }}
                >
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                
                {/* Mobile connector line (only visible on small screens) */}
                {index < timelineItems.length - 1 && (
                  <div className="md:hidden h-12 w-1 bg-gradient-to-b from-[#7C42DA] to-transparent mt-2"></div>
                )}
              </div>
              
              {/* Content */}
              <div 
                className={`ml-16 md:ml-0 md:w-[45%] ${
                  index % 2 === 0 ? "md:pr-10" : "md:pl-10"
                }`}
              >
                <div 
                  className={`p-3 md:p-4 rounded-lg shadow-md transition-all duration-500 ${
                    hoveredItem === item.id ? "shadow-lg translate-y-[-3px]" : "hover:shadow-lg hover:translate-y-[-3px]"
                  }`}
                  style={{ 
                    backgroundColor: hoveredItem === item.id ? `${item.color}20` : `${item.color}10`,
                    borderLeft: `3px solid ${item.color}`
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span 
                      className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: `${item.color}30`, color: item.color }}
                    >
                      {index + 1}
                    </span>
                    
                    {/* Mobile-only icon for expanding content */}
                    <div className="md:hidden">
                      <ChevronRight 
                        className={`w-4 h-4 opacity-70 transition-transform duration-300 ${
                          hoveredItem === item.id ? "rotate-90" : ""
                        }`}
                        style={{ color: item.color }}
                      />
                    </div>
                  </div>
                  
                  <h3 
                    className="text-base md:text-lg font-bold my-1.5 flex items-center"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-700 text-xs md:text-sm leading-relaxed">{item.description}</p>
                  
                  {/* Benefits list */}
                  <div className={`mt-2 space-y-0.5 overflow-hidden transition-all duration-300 ${
                    hoveredItem === item.id ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <p className="font-semibold text-xs md:text-sm" style={{ color: item.color }}>Key Benefits:</p>
                    <ul className="grid grid-cols-1 gap-1">
                      {item.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs md:text-sm">
                          <CheckCircle 
                            className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" 
                            style={{ color: item.color }}
                          />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Timeline connector for desktop (arrows pointing to timeline) */}
              <div 
                className={`hidden md:block absolute left-1/2 top-1/2 h-1.5 transform -translate-y-1/2 z-5 transition-all duration-500 ${
                  hoveredItem === item.id ? "w-8" : "w-5"
                }`}
                style={{ 
                  backgroundColor: item.color,
                  left: index % 2 === 0 ? "calc(50% - 5px)" : "calc(50% + 0px)",
                  transform: index % 2 === 0 ? "translateX(-100%)" : "none"
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsTimeline;