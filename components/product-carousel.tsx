'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    title: 'Custom Branded Pens',
    subtitle: 'Premium writing instruments',
    tag: 'Best Seller',
    image: '/Custom Branded Pens4245-1536x1024.jpg',
  },
  {
    title: 'Eco-Friendly Tote Bags',
    subtitle: 'Sustainable branded bags',
    tag: 'Eco',
    image: '/eco-friendly tote bags 85-23-1536x1024.png',
  },
  {
    title: 'Branded Drinkware',
    subtitle: 'Mugs, bottles & tumblers',
    tag: 'Popular',
    image: '/Branded Drinkware-85-17-1536x1024.png',
  },
  {
    title: 'Custom Lanyards',
    subtitle: 'Events & conferences',
    tag: 'Events',
    image: '/Custom Lanyards RSB4262-1536x1024.jpg',
  },
  {
    title: 'Tech Accessories',
    subtitle: 'Earphones, chargers & more',
    tag: 'Tech',
    image: '/tech-images -71-1024x1024.png',
  },
  {
    title: 'Corporate Gift Sets',
    subtitle: 'Premium curated bundles',
    tag: 'Premium',
    image: '/corporate gift sett.jfif',
  },
];

export default function ProductCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = direction === 'left' ? -240 : 240;
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section id="products" className="py-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-end justify-between mb-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A]">
              Products in Spotlight
            </h2>
            <p className="text-sm text-black/55 mt-1">
              Explore our recent work showcasing unique promotional products that captivate, inspire, and enhance your brand&apos;s presence.
            </p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-[18px] overflow-x-auto snap-x snap-mandatory px-6 max-w-[1200px] mx-auto mt-6 pb-2"
        style={{ scrollbarWidth: 'none' }}
      >
        {products.map((product) => (
          <div
            key={product.title}
            className="flex-shrink-0 w-[210px] h-[270px] rounded-[28px] overflow-hidden relative snap-start group cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="text-[10px] font-semibold uppercase bg-brand-orange text-white px-2.5 py-1 rounded-full">
                {product.tag}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-semibold text-sm leading-tight mb-0.5">
                {product.title}
              </h3>
              <p className="text-white/70 text-xs">{product.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
