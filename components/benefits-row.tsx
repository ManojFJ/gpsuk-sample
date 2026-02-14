import { Zap, HeadphonesIcon, Clock } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast Reliable Service',
    desc: 'Experience fast and reliable service at Global Promotional Services.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Customer Service',
    desc: 'Providing exceptional support, ensuring a satisfying experience.',
  },
  {
    icon: Clock,
    title: 'Short Lead',
    desc: 'Benefit from short lead times, allowing you to meet tight deadlines.',
  },
];

export default function BenefitsRow() {
  return (
    <section className="py-12 bg-white border-b border-black/10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="flex items-start gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue-light border border-brand-blue/10 flex items-center justify-center flex-shrink-0 group-hover:shadow-md transition-all">
                  <Icon className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#1A1A1A] mb-1">{f.title}</h3>
                  <p className="text-sm text-black/55 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
