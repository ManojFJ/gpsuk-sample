import Link from 'next/link';

const columns = [
  {
    title: 'GPSUK',
    items: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Products', href: '/products' },
      { label: 'Contact', href: '/products#contact' },
    ],
  },
  {
    title: 'Products',
    items: [
      { label: 'Essentials', href: '/products' },
      { label: 'Eco Products', href: '/products' },
      { label: 'Tech', href: '/products' },
      { label: 'Drinkware', href: '/products' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'FAQs', href: '/products#faq' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-black/10 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="relative w-8 h-8 rounded-full border-[2.5px] border-brand-blue flex items-center justify-center">
                <span className="text-[8px] font-bold text-brand-orange leading-none">GPS</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight text-black">
                  GPS<span className="text-brand-blue">UK</span>
                </span>
              </div>
            </Link>
            <p className="text-xs text-black max-w-[220px] leading-relaxed">
              Your one-stop shop for high-quality promotional products worldwide. Elevate your brand with impactful merchandise.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-black mb-3">{col.title}</h4>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-black hover:text-brand-blue transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-black/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-black">
            &copy; {year} GPSUK - Global Promotional Services
          </span>
          <div className="flex items-center gap-4 text-xs text-black">
            <Link href="#" className="hover:text-brand-blue transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-brand-blue transition-colors">Terms</Link>
            <Link href="#" className="hover:text-brand-blue transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
