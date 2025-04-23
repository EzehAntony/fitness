'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the height of the hero section (assuming it's 100vh)
      const heroHeight = window.innerHeight;
      
      // Check if we've scrolled past the hero section
      if (window.scrollY > heroHeight * 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check if we've scrolled past the entire hero section
      // This happens when the scroll position is greater than or equal to the hero height
      if (window.scrollY >= heroHeight) {
        setShowText(true);
      } else {
        setShowText(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Call once to set initial state
    handleScroll();
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/50 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative w-12 h-12 mr-3">
            <Image 
              src="/images/logo.png" 
              alt="MYGOALFITNESS Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className={`text-white font-bold text-xl transition-opacity duration-300 ${
            showText ? 'opacity-100' : 'opacity-0'
          }`}>
            MYGOALFITNESS
          </div>
        </div>
        <div>
          {/* Navigation links can go here */}
        </div>
      </div>
    </header>
  );
} 