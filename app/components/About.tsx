'use client';

import { siteContent } from "../data/siteContent";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {siteContent.about.title}
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-[3/3.5] rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/images/coach.jpg" 
                  alt="Fitness Coach" 
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <p className="text-lg text-gray-300 leading-relaxed">
                {siteContent.about.content}
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-red-500">My Approach</h3>
                <p className="text-gray-300">
                  {siteContent.about.approach}
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-red-500">My Experience</h3>
                <p className="text-gray-300">
                  {siteContent.about.experience}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 