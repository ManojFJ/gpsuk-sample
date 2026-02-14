import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function TrackSection() {
  return (
    <section className="py-14 bg-white border-t border-b border-black/10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-[32px] md:text-[40px] font-semibold leading-[1.15] text-[#1A1A1A] mb-4">
              Global Promotional Services &amp; What We Do
            </h2>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-[20px] border border-black/10 p-6 md:p-8">
              <p className="text-[15px] leading-[1.7] text-black/65">
                At Global Promotional Services, we specialize in providing a comprehensive range of high-quality promotional merchandise, backed by a commitment to excellence. Our dedicated team ensures fast, reliable service and personalized customer support. With a global perspective, we offer a wide array of products, guaranteeing accessible pricing and accommodating low MOQs. Whether you&apos;re seeking impactful giveaways, branded merchandise, or custom creations, we&apos;re your one-stop solution for elevating your brand&apos;s visibility and success. Explore our diverse offerings and experience the unparalleled quality and service that define Global Promotional Services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
