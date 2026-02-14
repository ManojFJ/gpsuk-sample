import Header from '@/components/header';
import Hero from '@/components/hero';
import BenefitsRow from '@/components/benefits-row';
import ProductCarousel from '@/components/product-carousel';
import ProductSpotlight from '@/components/product-spotlight';
import WhyChooseUs from '@/components/why-choose-us';
import TrackSection from '@/components/track-section';
import Testimonials from '@/components/testimonials';
import LifestyleImages from '@/components/lifestyle-images';
import Footer from '@/components/footer';
import MobileQuoteButton from '@/components/mobile-quote-button';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BenefitsRow />
      <ProductCarousel />
      <ProductSpotlight />
      <WhyChooseUs />
      <TrackSection />
      <Testimonials />
      <LifestyleImages />
      <Footer />
      <MobileQuoteButton />
    </div>
  );
}
