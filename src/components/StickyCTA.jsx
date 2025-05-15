import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Check if we're scrolling up
      if (currentScrollTop < lastScrollTop) {
        // We're scrolling up, show the CTA
        setIsVisible(true);
      } else {
        // We're scrolling down, hide the CTA
        setIsVisible(false);
      }
      
      // Save the current scroll position for next comparison
      setLastScrollTop(currentScrollTop);
    };
    
    // Add event listener
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-gradient-to-r from-primary to-secondary py-3 text-white z-40 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="wrapper flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5" />
          <p className="font-medium">
            Ready to transform your business with AI?
          </p>
        </div>
        <Link
          to="/contact"
          className="bg-white text-primary hover:bg-gray-100 px-4 py-2 rounded-full font-medium transition-colors duration-200 whitespace-nowrap shadow-md hover:shadow-lg"
        >
          Chat with our AI experts
        </Link>
      </div>
    </div>
  );
};

export default StickyCTA;
