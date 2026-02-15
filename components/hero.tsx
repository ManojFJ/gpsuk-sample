'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const slides = [
  {
    subtitle: 'One-Stop Shop for Promotional Products Worldwide',
    title: 'Global Promotional Services',
    desc: 'Upgrade Your Brand With Quality Promotional Products \u2013 Your Global Source for Impactful Marketing Merchandise!',
    image: '/Rectangle-609-2048x2048.png',
  },
  {
    subtitle: 'High Quality Customizable Merchandise',
    title: 'Elevate Your Brand',
    desc: 'From branded essentials to luxury promotional items, we deliver products that leave a lasting impression on your audience.',
    image: '/Rectangle-611-2048x2048.png',
  },
  {
    subtitle: 'Serving Businesses Across 15+ Countries',
    title: 'Worldwide Delivery',
    desc: 'Fast, reliable service with short lead times. Your promotional products delivered on time, every time.',
    image: '/Rectangle-612-2048x2048.png',
  },
  {
    subtitle: 'Custom Branded Accessories',
    title: 'Lanyard Solutions',
    desc: 'Wide range of lanyard clips, hooks and buckles in every colour to match your brand identity.',
    image: '/Rectangle-613-2048x2048.png',
  },
  {
    subtitle: 'Boost Your Brand Visibility',
    title: 'Custom Wristbands',
    desc: 'Eye-catching silicone wristbands with your logo \u2013 perfect for events, campaigns, and promotions.',
    image: '/Rectangle-409-2048x2048.png',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="relative h-[400px] md:h-[460px] overflow-hidden bg-[#0C1B2E]">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 flex"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          {/* Left side: text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 z-10 relative">
            <p className="text-brand-orange text-sm font-semibold uppercase tracking-wider mb-2">
              {slide.subtitle}
            </p>
            <h1 className="text-3xl md:text-[48px] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-4">
              {slide.title}
            </h1>
            <p className="text-sm md:text-base text-white/80 mb-7 max-w-md leading-relaxed">
              {slide.desc}
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/products#contact"
                className="h-[42px] px-6 rounded-full bg-brand-blue text-white text-sm font-semibold inline-flex items-center hover:bg-brand-blue-dark transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/products"
                className="h-[42px] px-6 rounded-full bg-white/15 border border-white/30 text-white text-sm font-medium inline-flex items-center hover:bg-white/25 transition-colors backdrop-blur-sm"
              >
                View Products
              </Link>
            </div>
          </div>
          {/* Right side: product image */}
          <div className="hidden md:flex w-1/2 items-center justify-center relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="max-h-[380px] max-w-[90%] object-contain drop-shadow-2xl"
            />
          </div>
          {/* Mobile background image */}
          <div className="absolute inset-0 md:hidden">
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute right-0 top-1/2 -translate-y-1/2 h-[70%] object-contain opacity-20"
            />
          </div>
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-[34px] h-[34px] rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-[34px] h-[34px] rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? 'bg-white w-6' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
