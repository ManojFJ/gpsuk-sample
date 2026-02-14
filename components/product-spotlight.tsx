import { Award, Layers, Tag, PackageOpen } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'High Quality',
    desc: 'Our products meet the highest standards, ensuring excellence and durability.',
  },
  {
    icon: Layers,
    title: 'Wide Range of Products',
    desc: 'Explore a diverse selection to find the perfect promotional items that suit your goals.',
  },
  {
    icon: Tag,
    title: 'Accessible Pricing',
    desc: 'Enjoy competitive and transparent pricing, making promotional solutions affordable.',
  },
  {
    icon: PackageOpen,
    title: 'Low MOQ',
    desc: 'Whether you need a few or a bulk order, our MOQ makes it easy for you to access products.',
  },
];

export default function ProductSpotlight() {
  return (
    <section className="py-14 bg-[#F6F6F6]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-3">
            Why Choose Us?
          </h2>
          <p className="text-sm text-black/55 max-w-lg mx-auto">
            Exceptional quality, unparalleled service. Choose us for top-notch promotional solutions that promote your brand and exceed your expectations.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="bg-white rounded-[20px] border border-black/10 p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue-light flex items-center justify-center mb-4 group-hover:bg-brand-blue/10 transition-colors">
                  <Icon className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="text-base font-semibold text-[#1A1A1A] mb-2">{r.title}</h3>
                <p className="text-sm text-black/55 leading-relaxed">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
