import AboutUs from '@/components/about-us';
import ContactForm from '@/components/contact-form';
import Features from '@/components/features';
import Gallery from '@/components/gallery';
import Hero from '@/components/hero';
import HowItWorks from '@/components/how-it-works';
import PricingCards from '@/components/pricing-cards';
import Reviews from '@/components/reviews';
import ScrollToTop from '@/components/scroll-to-top';
import ServiceAreas from '@/components/service-areas';
import Services from '@/components/services';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <PricingCards />
      <HowItWorks />
      <Features />
      <Reviews />
      <AboutUs />
      <Gallery />
      <ServiceAreas />
      <ContactForm />
      <ScrollToTop />
    </div>
  );
};

export default Index;
