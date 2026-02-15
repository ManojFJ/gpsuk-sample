import Header from '@/components/header';
import Footer from '@/components/footer';
import MobileQuoteButton from '@/components/mobile-quote-button';
import Link from 'next/link';
import { CheckCircle, HeadphonesIcon, Building2 } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: '100% Reliability',
    desc: 'We consistently deliver high-quality promotional items on time, only bringing you the best.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Quality Service',
    desc: 'From start to finish, we offer personalized guidance, ensuring a satisfying experience.',
  },
  {
    icon: Building2,
    title: 'Across Industries',
    desc: 'Offering tailored promotional merchandise solutions to meet unique industry demands.',
  },
];

const stats = [
  { value: '500+', label: 'Satisfied Clients' },
  { value: '300+', label: 'Promotional Products' },
  { value: '15+', label: 'Countries Worldwide' },
  { value: '98%', label: 'Client Retention Rate' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative h-[320px] md:h-[380px] overflow-hidden bg-[#0C1B2E]">
        <div className="absolute inset-0 flex">
          {/* Left side: text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 z-10 relative">
            <p className="text-brand-orange text-sm font-semibold uppercase tracking-wider mb-2">About Us</p>
            <h1 className="text-3xl md:text-[48px] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-3">
              Reliable Promotional Merchandise Distributors
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-md leading-relaxed">
              Get to know your trusted partner for the distribution of premium promotional merchandise.
            </p>
          </div>
          {/* Right side: product image */}
          <div className="hidden md:flex w-1/2 items-center justify-center relative">
            <img
              src="/Group-15-1024x928.png"
              alt="About us"
              className="max-h-[340px] max-w-[90%] object-contain drop-shadow-2xl"
            />
          </div>
          {/* Mobile background image */}
          <div className="absolute inset-0 md:hidden">
            <img
              src="/Group-15-1024x928.png"
              alt="About us"
              className="absolute right-0 top-1/2 -translate-y-1/2 h-[70%] object-contain opacity-20"
            />
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl md:text-[32px] font-semibold text-[#1A1A1A] leading-tight mb-5">
                About Global Promotional Services
              </h2>
              <p className="text-[15px] text-black/60 leading-[1.75] mb-4">
                At Global Promotional Services, we take pride in being a premier distributor of high-quality promotional products designed to assist brands across various industries. With a commitment to excellence, we specialize in creating an extensive range of merchandise that embodies innovation, quality, and functionality.
              </p>
              <p className="text-[15px] text-black/60 leading-[1.75]">
                Our mission is to empower businesses of all sizes, providing impactful marketing solutions that leave a lasting impression. Backed by a dedicated team, we prioritize reliability, efficiency, and client satisfaction, ensuring seamless product selection and delivery experiences. With our global network and fast service along with the wide range of products, we ensure that our clients receive only the best for their businesses.
              </p>
            </div>
            <div className="space-y-5">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex items-start gap-4 p-5 rounded-[16px] border border-black/10 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue-light flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-blue" />
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
        </div>
      </section>

      <section className="py-14 bg-[#F6F6F6]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-2">Our Mission</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-5">
            Empowering Brands Worldwide
          </h2>
          <p className="text-[15px] text-black/60 leading-[1.75]">
            At Global Promotional Services, our mission is to be the forefront provider of innovative, high-quality promotional merchandise worldwide. We aim to exceed client expectations by delivering personalized solutions, ensuring reliability, and fostering lasting relationships. Committed to diversity and industry-specific needs, we strive to elevate brands across various sectors through our comprehensive range of impactful promotional products.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-[32px] font-semibold text-[#1A1A1A] leading-tight mb-4">
                What Makes Us The Best?
              </h2>
              <p className="text-[15px] text-black/60 leading-[1.75] mb-6">
                Global Promotional Services stands out as the premier choice due to our sophisticated logistical infrastructure and cutting-edge technology. Our streamlined supply chain and state-of-the-art systems ensure seamless operations, enabling us to consistently deliver high-quality promotional merchandise with precision and efficiency. Combined with our unwavering commitment to client satisfaction and industry expertise, we set the standard for excellence in the promotional products market.
              </p>
              <Link
                href="/products"
                className="inline-flex h-[42px] px-6 rounded-full bg-brand-blue text-white text-sm font-semibold items-center hover:bg-brand-blue-dark transition-colors"
              >
                View Products
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((s) => (
                <div key={s.label} className="bg-[#F6F6F6] rounded-[16px] p-5 text-center">
                  <div className="text-3xl font-bold text-brand-blue mb-1">{s.value}</div>
                  <div className="text-xs text-black/50">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-0">
        <div className="bg-[#0F0F10] py-12">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Browse Through Our Wholesale Promotional Products
            </h2>
            <p className="text-sm text-white/60 max-w-xl mx-auto mb-7">
              Discover an extensive array of wholesale promotional products! Explore now for quality, variety, and customizable solutions to boost your brand&apos;s development.
            </p>
            <Link
              href="/products"
              className="inline-flex h-[42px] px-7 rounded-full bg-brand-orange text-white text-sm font-semibold items-center hover:bg-brand-orange-dark transition-colors"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <MobileQuoteButton />
    </div>
  );
}
