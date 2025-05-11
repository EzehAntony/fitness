'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import siteContent from '../data/siteContent';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 py-4  z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md dark:bg-gray-900' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-12 h-12">
              <Image
                src="/images/logo.png"
                alt="TruBe: Fitness & Wellness Coaches Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-brand-900 dark:text-white' : 'text-white'
              }`}>
              {siteContent.general.title}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className={`font-medium transition-colors ${isScrolled ? 'text-brand-900 hover:text-red-600 dark:text-white dark:hover:text-red-500' : 'text-white hover:text-red-500'
                }`}
            >
              About
            </Link>
            <Link
              href="#services"
              className={`font-medium transition-colors ${isScrolled ? 'text-brand-900 hover:text-red-600 dark:text-white dark:hover:text-red-500' : 'text-white hover:text-red-500'
                }`}
            >
              Services
            </Link>
            <Link
              href="#gallery"
              className={`font-medium transition-colors ${isScrolled ? 'text-brand-900 hover:text-red-600 dark:text-white dark:hover:text-red-500' : 'text-white hover:text-red-500'
                }`}
            >
              Gallery
            </Link>
            <Link
              href="#testimonials"
              className={`font-medium transition-colors ${isScrolled ? 'text-brand-900 hover:text-red-600 dark:text-white dark:hover:text-red-500' : 'text-white hover:text-red-500'
                }`}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className={`font-medium transition-colors ${isScrolled ? 'text-brand-900 hover:text-red-600 dark:text-white dark:hover:text-red-500' : 'text-white hover:text-red-500'
                }`}
            >
              Contact
            </Link>
            <Link
              href="#start"
              className="btn bg-red-600 hover:bg-red-700 text-white"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4 px-4">
              <Link
                href="#about"
                className="font-medium text-brand-900 dark:text-white hover:text-red-600 dark:hover:text-red-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#services"
                className="font-medium text-brand-900 dark:text-white hover:text-red-600 dark:hover:text-red-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#gallery"
                className="font-medium text-brand-900 dark:text-white hover:text-red-600 dark:hover:text-red-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="#testimonials"
                className="font-medium text-brand-900 dark:text-white hover:text-red-600 dark:hover:text-red-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="font-medium text-brand-900 dark:text-white hover:text-red-600 dark:hover:text-red-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="#start"
                className="btn bg-red-600 hover:bg-red-700 text-white text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 