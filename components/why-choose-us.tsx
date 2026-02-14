import {
  Package,
  Zap,
  Palette,
  Sparkles,
  Leaf,
  Coffee,
  ShoppingBag,
  Tag,
  Shirt,
  Smartphone,
  PenTool,
  Gift,
} from 'lucide-react';
import Link from 'next/link';

const categories = [
  { name: 'Essentials', icon: Package, color: 'bg-slate-100' },
  { name: 'Express', icon: Zap, color: 'bg-orange-50' },
  { name: 'Creation', icon: Palette, color: 'bg-blue-50' },
  { name: 'Rainbow', icon: Sparkles, color: 'bg-rose-50' },
  { name: 'Eco', icon: Leaf, color: 'bg-emerald-50' },
  { name: 'Drinks', icon: Coffee, color: 'bg-amber-50' },
  { name: 'Bags', icon: ShoppingBag, color: 'bg-violet-50' },
  { name: 'Lanyards', icon: Tag, color: 'bg-cyan-50' },
  { name: 'Merch', icon: Shirt, color: 'bg-pink-50' },
  { name: 'Tech', icon: Smartphone, color: 'bg-sky-50' },
  { name: 'Writing', icon: PenTool, color: 'bg-lime-50' },
  { name: 'Christmas', icon: Gift, color: 'bg-red-50' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-3">
            Explore All Products
          </h2>
          <p className="text-sm text-black/55 max-w-lg mx-auto">
            Explore all products for a diverse range of high-quality, customizable, and impactful promotional solutions.
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.name}
                href="/products"
                className="flex flex-col items-center gap-3 group"
              >
                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${cat.color} border border-black/5 flex items-center justify-center group-hover:shadow-lg group-hover:scale-105 transition-all`}>
                  <Icon className="w-8 h-8 md:w-9 md:h-9 text-[#1A1A1A]/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <span className="text-xs md:text-sm font-medium text-[#1A1A1A] text-center">{cat.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
