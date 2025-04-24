'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteContent } from "../data/siteContent";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-75"
      >
        <source src="/videos/gym-grit.webm" type="video/webm" media="(min-width: 768px)" />
        <source src="/videos/gym-mobile.webm" type="video/webm" media="(max-width: 767px)" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
          {siteContent.hero.name}
        </h1>
        <p className="text-red-600 font-bold">{siteContent.hero.title}</p>

        <p
          className={`mt-6 text-base md:text-xl lg:text-2xl text-gray-300 font-light leading-relaxed tracking-wide transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          {siteContent.hero.tagline}
        </p>

        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <Link
            href={siteContent.hero.ctaButtons.primary.link}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-transform duration-300 hover:scale-105 tracking-wide"
          >
            {siteContent.hero.ctaButtons.primary.text}
          </Link>
          <Link
            href={siteContent.hero.ctaButtons.secondary.link}
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition duration-300 tracking-wide"
          >
            {siteContent.hero.ctaButtons.secondary.text}
          </Link>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
