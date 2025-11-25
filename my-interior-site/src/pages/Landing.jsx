import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import FeaturesGrid from "../components/features/FeaturesGrid";
import ServicesList from "../components/services/ServicesList";
import ServicesIcons from "../components/services/ServicesIcons";
import GalleryCarousel from "../components/showcase/GalleryCarousel";
import Testimonials from "../components/showcase/Testimonials";
import EstimateCards from "../components/estimate/EstimateCards";
import ContactForm from "../components/contact/ContactForm";
import FAQSection from "../components/faq/FAQSection";
import Footer from "../components/layout/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesGrid/>
      <ServicesList/>
      <ServicesIcons/>
      <GalleryCarousel/>
      <Testimonials/>
      <EstimateCards/>
      <FAQSection/>
      <ContactForm/>
      <Footer/>
    </>
  );
};
export default Landing;
