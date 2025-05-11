'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { siteContent } from '../data/siteContent';

export default function Services() {
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

    const element = document.getElementById('services-section');
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
    <section id="services" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            {siteContent.services.title}
          </h2>
          <div className="w-20 h-1 bg-accent-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.services.items.map((service, index) => (
            <div 
              key={index}
              className={`bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 text-white transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="flex items-center mb-4">
              <div className="bg-accent-500 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Flexible Scheduling</h3>
            </div>
            <p className="text-gray-200 mb-4">
              We offer flexible scheduling options to fit your busy lifestyle. Choose from morning, afternoon, or evening sessions.
            </p>
          </div>

          <div className={`bg-gradient-to-br from-accent-600 to-accent-700 rounded-xl p-8 text-white transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="flex items-center mb-4">
              <div className="bg-white/20 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Nutrition Planning</h3>
            </div>
            <p className="text-gray-200 mb-4">
              Get personalized nutrition plans tailored to your goals. Our experts will help you fuel your body for optimal performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 