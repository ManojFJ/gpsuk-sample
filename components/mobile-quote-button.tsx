'use client';

import { MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function MobileQuoteButton() {
  return (
    <Link
      href="/products#contact"
      className="fixed bottom-6 right-6 z-50 lg:hidden w-14 h-14 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lg hover:bg-brand-blue-dark transition-colors"
      aria-label="Contact Us"
    >
      <MessageSquare className="w-6 h-6" />
    </Link>
  );
}
