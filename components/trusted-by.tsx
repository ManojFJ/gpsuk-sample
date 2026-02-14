import { Building2, Megaphone, Calendar, GraduationCap, Heart, Globe } from 'lucide-react';

const industries = [
  { name: 'Corporate', icon: Building2 },
  { name: 'Marketing', icon: Megaphone },
  { name: 'Events', icon: Calendar },
  { name: 'Education', icon: GraduationCap },
  { name: 'Healthcare', icon: Heart },
  { name: 'Global Brands', icon: Globe },
];

export default function TrustedBy() {
  return (
    <section className="py-5 bg-white border-b border-black/10">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-xs tracking-[0.04em] text-black/45 font-semibold uppercase whitespace-nowrap">
          Trusted across industries
        </span>
        <div className="flex items-center gap-8 md:gap-10 flex-wrap justify-center">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.name} className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <Icon className="w-5 h-5 text-black/70" />
                <span className="text-sm font-medium text-black/70">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
