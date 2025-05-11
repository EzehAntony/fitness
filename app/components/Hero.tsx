'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteContent } from '../data/siteContent';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-950 to-brand-900 pt-24 md:pt-0">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-50"
        poster="/images/video-poster.jpg"
      >
        <source src="/videos/gym-mobile.webm" type="video/webm" media="(max-width: 767px)" />
        <source src="/videos/gym-grit.webm" type="video/webm" media="(min-width: 768px)" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              {siteContent.hero.name}
            </h1>
            <p className="text-red-500 text-xl md:text-2xl font-bold mb-6">
              {siteContent.hero.title}
            </p>
            <p className="text-brand-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              {siteContent.hero.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href={siteContent.hero.ctaButtons.primary.link}
                className="btn bg-red-600 hover:bg-red-700 text-white"
              >
                {siteContent.hero.ctaButtons.primary.text}
              </Link>
              <Link
                href="/learn-more"
                className="btn bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600/10"
              >
                {siteContent.hero.ctaButtons.secondary.text}
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-brand-800/80 backdrop-blur-md rounded-xl p-4 md:p-8 shadow-xl border border-white/20 min-h-[400px] md:min-h-[450px] flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">Why Choose Us</h3>
              
              <div className="space-y-3 md:space-y-6">
                <div className="flex items-start bg-brand-700/50 p-3 rounded-lg">
                  <div className="bg-red-600 p-1.5 md:p-2 rounded-full mr-3 md:mr-4 mt-1">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-white">Expert Trainers</h4>
                    <p className="text-brand-200 text-sm md:text-base">Certified professionals with years of experience</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-brand-700/50 p-3 rounded-lg">
                  <div className="bg-red-600 p-1.5 md:p-2 rounded-full mr-3 md:mr-4 mt-1">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-white">Personalized Plans</h4>
                    <p className="text-brand-200 text-sm md:text-base">Customized programs tailored to your goals</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-brand-700/50 p-3 rounded-lg">
                  <div className="bg-red-600 p-1.5 md:p-2 rounded-full mr-3 md:mr-4 mt-1">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-white">Proven Results</h4>
                    <p className="text-brand-200 text-sm md:text-base">Track record of transforming lives</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-red-600 p-3 md:p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="bg-white p-1.5 md:p-2 rounded-full">
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-white">500+</p>
                  <p className="text-xs md:text-sm text-white/80">Happy Clients</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-red-600 p-3 md:p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="bg-white p-1.5 md:p-2 rounded-full">
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-white">10+</p>
                  <p className="text-xs md:text-sm text-white/80">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white hover:text-red-500 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
