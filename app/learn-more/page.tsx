'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Life with TruBe
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover how our personalized approach to fitness and wellness can help you achieve your goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At TruBe, we believe in a holistic approach to fitness and wellness. Our expert coaches are dedicated to helping you achieve your health goals through personalized training programs, nutrition guidance, and lifestyle coaching.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                We combine evidence-based training methods with personalized attention to ensure you get the best results. Our focus is on sustainable progress and long-term success.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-96 rounded-lg overflow-hidden"
            >
              <Image
                src="/images/about-image.jpg"
                alt="Fitness training session"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Personalized Training",
                description: "Custom workout plans tailored to your goals and fitness level",
                icon: "🏋️‍♂️"
              },
              {
                title: "Nutrition Guidance",
                description: "Expert advice on fueling your body for optimal performance",
                icon: "🥗"
              },
              {
                title: "Lifestyle Coaching",
                description: "Support for developing sustainable healthy habits",
                icon: "🌟"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-12"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8">Join TruBe today and take the first step towards a healthier, happier you.</p>
            <Link
              href="/contact"
              className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 