import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getProductBySlug, getAllSlugs } from '@/lib/products';
import { ChevronRight, CheckCircle, Clock, Package, Palette } from 'lucide-react';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-[#F6F6F6] border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center gap-1.5 text-sm">
          <Link href="/" className="text-black/50 hover:text-black/70 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-black/30" />
          <Link href="/products" className="text-black/50 hover:text-black/70 transition-colors">
            Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-black/30" />
          <span className="text-[#1A1A1A] font-medium">{product.title}</span>
        </div>
      </div>

      {/* Hero section */}
      <section className="py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Product image */}
            <div className="bg-[#F6F6F6] rounded-[24px] overflow-hidden border border-black/10 aspect-[4/3] flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product info */}
            <div>
              <span className="inline-block text-[11px] font-semibold uppercase bg-brand-orange text-white px-3 py-1 rounded-full mb-4">
                {product.tag}
              </span>
              <h1 className="text-3xl md:text-[40px] font-semibold text-[#1A1A1A] leading-tight mb-2">
                {product.title}
              </h1>
              <p className="text-base text-black/55 mb-6">{product.subtitle}</p>
              <p className="text-[15px] text-black/65 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Quick info cards */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="bg-[#F6F6F6] rounded-xl p-3 text-center border border-black/5">
                  <Package className="w-5 h-5 text-brand-blue mx-auto mb-1.5" />
                  <p className="text-[10px] uppercase tracking-wide text-black/45 mb-0.5">Min Order</p>
                  <p className="text-sm font-semibold text-[#1A1A1A]">{product.moq}</p>
                </div>
                <div className="bg-[#F6F6F6] rounded-xl p-3 text-center border border-black/5">
                  <Clock className="w-5 h-5 text-brand-blue mx-auto mb-1.5" />
                  <p className="text-[10px] uppercase tracking-wide text-black/45 mb-0.5">Lead Time</p>
                  <p className="text-sm font-semibold text-[#1A1A1A]">{product.leadTime}</p>
                </div>
                <div className="bg-[#F6F6F6] rounded-xl p-3 text-center border border-black/5">
                  <Palette className="w-5 h-5 text-brand-blue mx-auto mb-1.5" />
                  <p className="text-[10px] uppercase tracking-wide text-black/45 mb-0.5">Custom</p>
                  <p className="text-sm font-semibold text-[#1A1A1A]">{product.customisation.length} options</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/products#contact"
                  className="h-[44px] px-7 rounded-full bg-brand-blue text-white text-sm font-semibold inline-flex items-center hover:bg-brand-blue-dark transition-colors"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/products"
                  className="h-[44px] px-7 rounded-full bg-black/5 border border-black/10 text-[#1A1A1A] text-sm font-medium inline-flex items-center hover:bg-black/10 transition-colors"
                >
                  All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Specs */}
      <section className="py-12 bg-[#F6F6F6] border-t border-black/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Features */}
            <div>
              <h2 className="text-xl font-semibold text-[#1A1A1A] mb-5">Key Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-[15px] text-black/65 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs */}
            <div>
              <h2 className="text-xl font-semibold text-[#1A1A1A] mb-5">Specifications</h2>
              <div className="bg-white rounded-[16px] border border-black/10 overflow-hidden">
                {product.specs.map((spec, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between px-5 py-3.5 ${
                      i !== product.specs.length - 1 ? 'border-b border-black/5' : ''
                    }`}
                  >
                    <span className="text-sm text-black/50">{spec.label}</span>
                    <span className="text-sm font-medium text-[#1A1A1A]">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Customisation options */}
              <h3 className="text-base font-semibold text-[#1A1A1A] mt-6 mb-3">Customisation Options</h3>
              <div className="flex flex-wrap gap-2">
                {product.customisation.map((opt) => (
                  <span
                    key={opt}
                    className="text-xs font-medium bg-brand-blue/10 text-brand-blue px-3 py-1.5 rounded-full"
                  >
                    {opt}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-0">
        <div className="bg-brand-blue py-12">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Interested in {product.title}?
            </h2>
            <p className="text-sm text-white/70 max-w-xl mx-auto mb-7">
              Get in touch with our team for a free quote, samples, and design support. We&apos;ll help you create the perfect branded product for your campaign.
            </p>
            <Link
              href="/products#contact"
              className="inline-flex h-[42px] px-7 rounded-full bg-white text-brand-blue text-sm font-semibold items-center hover:bg-white/90 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
