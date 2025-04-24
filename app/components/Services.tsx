'use client';

import { siteContent } from "../data/siteContent";
import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {siteContent.services.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteContent.services.items.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-lg shadow-lg hover:shadow-red-500/20 transition-shadow duration-300 cursor-pointer overflow-hidden"
            >
              <div className="relative w-full h-72">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  quality={60}
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-red-500">
                  {service.title}
                </h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 