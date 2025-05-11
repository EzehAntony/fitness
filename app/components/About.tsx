'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { siteContent } from '../data/siteContent';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const element = document.getElementById('about-section');
    if (element) {
      observer.observe(element);
    }

    // Set isVisible to true after a short delay as a fallback
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
            <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={siteContent.about.image}
                alt="About Harsimran Fitness Inc"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm font-medium">Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                {siteContent.about.title}
              </h2>
              <div className="w-20 h-1 bg-red-600 rounded-full"></div>
            </div>

            <p className="text-lg text-black dark:text-white mb-6">
              {siteContent.about.content}
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-100 dark:bg-red-900 p-2 rounded-full mr-4 mt-1">
                  <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Our Approach</h3>
                  <p className="text-black dark:text-white">
                    {siteContent.about.approach}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-100 dark:bg-red-900 p-2 rounded-full mr-4 mt-1">
                  <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Our Experience</h3>
                  <p className="text-black dark:text-white">
                    {siteContent.about.experience}
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="text-center">
                <p className="text-3xl font-bold text-red-600">500+</p>
                <p className="text-sm text-black dark:text-white">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-red-600">15+</p>
                <p className="text-sm text-black dark:text-white">Expert Trainers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-red-600">98%</p>
                <p className="text-sm text-black dark:text-white">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 