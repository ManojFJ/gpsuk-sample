import Link from 'next/link';

export default function LifestyleImages() {
  return (
    <section className="py-0">
      <div className="bg-[#0F0F10] py-14">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            Explore Our Range of Products on Promotion!
          </h2>
          <p className="text-sm text-white/60 max-w-xl mx-auto mb-7">
            Discover an extensive array of wholesale promotional products! Explore now for quality, variety, and customizable solutions to boost your brand&apos;s development.
          </p>
          <Link
            href="/products"
            className="inline-flex h-[42px] px-7 rounded-full bg-brand-blue text-white text-sm font-semibold items-center hover:bg-brand-blue-dark transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  );
}
