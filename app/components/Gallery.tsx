'use client';

import { useState } from 'react';
import Image from 'next/image';
import { siteContent } from '../data/siteContent';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Get gallery images from siteContent
  const galleryImages = siteContent.gallery.images;
  
  // Filter images based on active category
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);
  
  // Get unique categories for filter buttons
  const categories = ['all', ...new Set(galleryImages.map(img => img.category))];
  
  return (
    <section id="gallery" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          {siteContent.gallery.title}
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          {siteContent.gallery.description}
        </p>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${
                activeFilter === category
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-red-500/20 transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  quality={90}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-white font-bold text-lg">
                      {image.alt}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 