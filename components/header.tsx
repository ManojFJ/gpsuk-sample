'use client';

import { useState } from 'react';
import { Search, Phone, ChevronDown, Menu, X, Star } from 'lucide-react';
import Link from 'next/link';

const utilityLeft = [
  { label: 'LinkedIn', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'X (Twitter)', href: '#' },
];

const utilityRight = [
  { label: 'Request Quote', href: '/products#contact' },
  { label: 'Our Products', href: '/products' },
  { label: 'About Us', href: '/about' },
  { label: 'FAQs', href: '/products#faq' },
];

const primaryNav = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/products#contact' },
];

const marqueeItems = [
  'One-Stop Shop for Promotional Products Worldwide',
  'Fast & Reliable Service \u2014 Short Lead Times Available',
  'High Quality Customizable Promotional Merchandise',
  'Low MOQ \u2014 Perfect for Small and Large Orders',
  'Global Delivery \u2014 Serving 15+ Countries',
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/10">
      <div className="hidden lg:flex items-center justify-between h-11 px-6 max-w-[1200px] mx-auto">
        <nav className="flex items-center gap-5">
          {utilityLeft.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-black/60 hover:text-brand-blue transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <nav className="flex items-center gap-5">
          {utilityRight.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-black/60 hover:text-brand-blue transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="hidden lg:block border-t border-black/10" />

      <div className="flex items-center justify-between h-16 px-6 max-w-[1200px] mx-auto">
        <nav className="hidden lg:flex items-center gap-6">
          {primaryNav.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 text-base text-[#1A1A1A] hover:text-brand-blue transition-colors font-medium"
            >
              {link.label}
              <ChevronDown className="w-3.5 h-3.5 opacity-50" />
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden p-2 -ml-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative w-9 h-9 rounded-full border-[2.5px] border-brand-blue flex items-center justify-center">
            <span className="text-[10px] font-bold text-brand-orange leading-none">GPS</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight text-[#1A1A1A]">
              GPS<span className="text-brand-blue">UK</span>
            </span>
            <span className="text-[8px] uppercase tracking-[0.1em] text-black/45 font-medium">
              Global Promotional Services
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <button
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors"
            aria-label="Search"
          >
            <Search className="w-[18px] h-[18px] text-[#1A1A1A]" />
          </button>
          <Link
            href="/products"
            className="hidden sm:inline-flex h-[34px] px-4 rounded-full bg-brand-blue text-white text-sm font-semibold items-center hover:bg-brand-blue-dark transition-colors"
          >
            View Products
          </Link>
          <Link
            href="/products#contact"
            className="inline-flex h-[34px] px-4 rounded-full bg-[#0F0F10] text-white text-sm items-center gap-2 hover:bg-[#2a2a2b] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Contact Us</span>
          </Link>
        </div>
      </div>

      <div className="border-t border-black/10 h-[38px] overflow-hidden flex items-center">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center whitespace-nowrap text-sm text-black/60 mx-8"
            >
              <Star className="w-3 h-3 mr-2 text-brand-orange fill-brand-orange flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-black/10 px-6 py-6 space-y-4">
          {primaryNav.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-base text-[#1A1A1A] font-medium py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-black/10 pt-4 space-y-3">
            {utilityRight.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-sm text-black/60"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/products#contact"
            className="block text-center h-10 leading-10 rounded-full bg-brand-blue text-white text-sm font-semibold"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
