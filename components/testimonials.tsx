'use client';

import { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Emily Ray',
    role: 'Marketing Director',
    text: "Global Promotional Services' product range elevated our brand's image remarkably. The custom Renzo Sunglasses was a hit, reflecting our brand's uniqueness. Their attention to detail exceeded our expectations!",
    initials: 'ER',
    color: 'bg-brand-blue',
  },
  {
    name: 'Mike Taylor',
    role: 'Sales Manager',
    text: "The bespoke solutions from Global Promotional Services helped us stand out in a competitive market. The Chord Creation perfectly encapsulated our brand's essence. Their customization options were exceptional!",
    initials: 'MT',
    color: 'bg-brand-orange',
  },
  {
    name: 'Sophie Langard',
    role: 'Marketing Manager',
    text: 'From lightning-fast lead times to customer service, Global Promotional Services exceeded our expectations. The impact of their promotional items at our event was undeniable, contributing to its success.',
    initials: 'SL',
    color: 'bg-emerald-500',
  },
  {
    name: 'Jane Tame',
    role: 'Marketing Manager',
    text: 'Global Promotional Services delivered beyond expectations. Their top-notch products, swift service, and attentive team made our campaign a resounding success. Highly recommend their expertise.',
    initials: 'JT',
    color: 'bg-rose-500',
  },
  {
    name: 'John Sinad',
    role: 'Small Business Owner',
    text: 'Global Promotional Services impressed me with their extensive product range and affordable pricing. They made it simple for my small business to shine with high-quality promotional items.',
    initials: 'JS',
    color: 'bg-brand-blue',
  },
  {
    name: 'Sarah Laura',
    role: 'Event Coordinator',
    text: 'From lightning-fast lead times to exceptional customer service, Global Promotional Services exceeded our expectations. The impact of their promotional items at our event was undeniable.',
    initials: 'SL',
    color: 'bg-brand-orange',
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = direction === 'left' ? -340 : 340;
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="py-14 bg-[#F6F6F6]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-end justify-between mb-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A]">
              What Our Clients Say
            </h2>
            <p className="text-sm text-black/55 mt-1">
              Hear what our satisfied partners have to say about their exceptional experiences with Global Promotional Services.
            </p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button onClick={() => scroll('left')} className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors bg-white" aria-label="Scroll left">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={() => scroll('right')} className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors bg-white" aria-label="Scroll right">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory px-6 max-w-[1200px] mx-auto mt-6 pb-2"
        style={{ scrollbarWidth: 'none' }}
      >
        {reviews.map((r, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[320px] bg-white rounded-[20px] p-6 border border-black/10 hover:shadow-lg transition-shadow snap-start"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
              ))}
            </div>
            <p className="text-sm text-black/70 leading-relaxed mb-5">
              &ldquo;{r.text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center text-white text-xs font-bold`}>
                {r.initials}
              </div>
              <div>
                <div className="text-sm font-semibold text-[#1A1A1A]">{r.name}</div>
                <div className="text-xs text-black/50">{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
