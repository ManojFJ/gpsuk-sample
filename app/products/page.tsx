import Header from '@/components/header';
import ProductCarousel from '@/components/product-carousel';
import Testimonials from '@/components/testimonials';
import FaqSection from '@/components/faq-section';
import ContactCta from '@/components/contact-cta';
import Footer from '@/components/footer';
import MobileQuoteButton from '@/components/mobile-quote-button';
import Link from 'next/link';
import {
  ShieldCheck,
  Search,
  Truck,
  ClipboardList,
  Award,
  FileCheck,
  DollarSign,
  PenTool,
  Lightbulb,
  Clock,
  Leaf,
  Layers,
} from 'lucide-react';

const processSteps = [
  { icon: ShieldCheck, label: 'Social Audit' },
  { icon: Search, label: 'QC Inspection' },
  { icon: Truck, label: 'Logistics' },
  { icon: ClipboardList, label: 'Planning' },
  { icon: Award, label: 'Quality' },
  { icon: FileCheck, label: 'Compliance' },
];

const benefits = [
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    desc: 'Enjoy clear, upfront pricing with no hidden fees or unexpected costs\u2014everything is explained in detail before you commit.',
  },
  {
    icon: PenTool,
    title: 'Design Support',
    desc: 'Get free design assistance and proofs, ensuring your promotional items perfectly represent your brand before production begins.',
  },
  {
    icon: Lightbulb,
    title: 'Innovative Products',
    desc: 'Stand out with unique promotional products that break the mold. Our innovative designs ensure your items captivate and impress.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    desc: 'Benefit from reliable delivery schedules with proactive tracking, ensuring your promotional items arrive on time every time.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Choices',
    desc: 'Choose from sustainable and eco-friendly products that align with your values while maintaining high standards of quality.',
  },
  {
    icon: Layers,
    title: 'Flexible Quantities',
    desc: 'Adjust order quantities to fit your campaign needs precisely, avoiding over-ordering or underestimating product amounts.',
  },
];

const stats = [
  { value: '500+', label: 'Satisfied Clients' },
  { value: '300+', label: 'Promotional Products' },
  { value: '15+', label: 'Countries Worldwide' },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative h-[340px] md:h-[400px] overflow-hidden bg-[#0C1B2E]">
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <p className="text-brand-orange text-sm font-semibold uppercase tracking-wider mb-2">
            One-Stop Shop for Promotional Products
          </p>
          <h1 className="text-4xl md:text-[52px] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-4">
            Don&apos;t Let Your Marketing Efforts Fail
          </h1>
          <p className="text-base text-white/75 max-w-xl mx-auto">
            We deliver tailored promotional solutions that meet your brand&apos;s needs with professional expertise.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-black/10">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-3">Thanks for looking us up!</h2>
          <p className="text-[15px] text-black/60 leading-relaxed mb-5">
            It was a pleasure to meet you at Merchandise World. Please take a look around and feel free to call us to discuss any significant project you need reassurance with. You do not pay more for our expertise&mdash;it&apos;s free for our customers.
          </p>
          <Link
            href="#contact"
            className="inline-flex h-[40px] px-6 rounded-full bg-brand-blue text-white text-sm font-semibold items-center hover:bg-brand-blue-dark transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <ProductCarousel />

      <section className="py-14 bg-[#F6F6F6] border-t border-black/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-2">Our Process Unveiled</h2>
            <p className="text-sm text-black/55 max-w-2xl mx-auto">
              At Global Promotional Services, we handle every step of the process to ensure your promotional merchandise needs are met with excellence. From initial design consultations to timely logistics, we provide comprehensive support from concept to completion.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-10">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-black/10 flex items-center justify-center mb-3 group-hover:border-brand-blue/30 group-hover:shadow-md transition-all">
                    <Icon className="w-7 h-7 text-brand-blue" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#1A1A1A]">{step.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-0">
        <div className="bg-brand-blue py-12">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Transform Your Brand Promotion with Our Expert Solutions!
            </h2>
            <p className="text-sm text-white/70 max-w-xl mx-auto">
              Enhance your brand&apos;s visibility and impact with our expert promotional solutions. We provide innovative strategies and high-quality products to transform your marketing efforts effectively.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-2">Who We Are</p>
              <h2 className="text-2xl md:text-[32px] font-semibold text-[#1A1A1A] leading-tight mb-4">
                About Global Promotional Services
              </h2>
              <p className="text-[15px] text-black/60 leading-relaxed">
                At Global Promotional Services, we stand as one of the best promotional product companies, offering innovative business promotional products to elevate your brand. As a trusted promotional product supplier, we deliver high-quality items that help businesses make a lasting impression. With a vast selection of the best promotional products, we cater to diverse industries, ensuring unique solutions for every client.
              </p>
            </div>
            <div className="flex items-center justify-center gap-6 md:gap-10">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-brand-blue">{s.value}</div>
                  <div className="text-xs text-black/50 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#F6F6F6]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-3">Benefits of Partnering with Us</h2>
            <p className="text-sm text-black/55 max-w-lg mx-auto">
              We understand your challenges with buying promotional products. Don&apos;t worry &ndash; we&apos;ve solved these problems for countless customers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="bg-white rounded-[20px] border border-black/10 p-6 hover:shadow-lg transition-shadow group">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue-light flex items-center justify-center mb-4 group-hover:bg-brand-blue/10 transition-colors">
                    <Icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1A1A1A] mb-2">{b.title}</h3>
                  <p className="text-sm text-black/55 leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-0">
        <div className="bg-[#0F0F10] py-12">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Place Your Order for Unique Promotional Products Today!
            </h2>
            <p className="text-sm text-white/60 max-w-xl mx-auto mb-7">
              Unlock exclusive wholesale rates for top-quality promotional products. Enhance your brand&apos;s visibility with our exceptional selection and unbeatable pricing.
            </p>
            <Link
              href="#contact"
              className="inline-flex h-[42px] px-7 rounded-full bg-brand-orange text-white text-sm font-semibold items-center hover:bg-brand-orange-dark transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <FaqSection />
      <ContactCta />

      <section className="py-0">
        <div className="bg-brand-blue py-12">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Invest in High-Quality Promotional Products Now!
            </h2>
            <p className="text-sm text-white/70 max-w-xl mx-auto mb-7">
              Unlock the potential of your brand with our top-tier promotional products. Start now to ensure your business stands out with exceptional quality and impact.
            </p>
            <Link
              href="#contact"
              className="inline-flex h-[42px] px-7 rounded-full bg-white text-brand-blue text-sm font-semibold items-center hover:bg-white/90 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <MobileQuoteButton />
    </div>
  );
}
