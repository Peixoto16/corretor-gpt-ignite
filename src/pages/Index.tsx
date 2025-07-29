import HeroSection from "@/components/sections/HeroSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import ProductSection from "@/components/sections/ProductSection";
import PricingSection from "@/components/sections/PricingSection";
import AboutSection from "@/components/sections/AboutSection";
import FAQSection from "@/components/sections/FAQSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ComparisonSection />
      <SocialProofSection />
      <ProductSection />
      <PricingSection />
      <AboutSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;