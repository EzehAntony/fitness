'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { siteContent } from '../data/siteContent';
import Hydration from './Hydration';

export default function SuccessStory() {
  const { successStory } = siteContent;

  return (
    <Hydration>
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{successStory.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{successStory.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Split Image Container */}
            <div className="relative aspect-square rounded-lg overflow-hidden">
              {/* Left Half */}
              <motion.div
                initial={{ x: '-100%', y: '-20px' }}
                whileInView={{ x: '0%', y: '0px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 w-1/2 overflow-hidden"
              >
                <Image
                  src={successStory.image}
                  alt={`${successStory.name}'s transformation`}
                  fill
                  className="object-cover object-right"
                />
              </motion.div>

              {/* Right Half */}
              <motion.div
                initial={{ x: '100%', y: '20px' }}
                whileInView={{ x: '0%', y: '0px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 left-1/2 w-1/2 overflow-hidden"
              >
                <Image
                  src={successStory.image}
                  alt={`${successStory.name}'s transformation`}
                  fill
                  className="object-cover object-left"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2">{successStory.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{successStory.role}</p>
              </div>

              <p className="text-gray-700 dark:text-gray-300">{successStory.story}</p>

              <div className="space-y-3">
                {successStory.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                    className="flex items-center space-x-3"
                  >
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{result}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Hydration>
  );
} 