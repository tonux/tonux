import { Hero } from "@/components/sections/Hero";
import { AboutSummary } from "@/components/sections/AboutSummary";
import { Services } from "@/components/sections/Services";
import { DropcolisShowcase } from "@/components/sections/DropcolisShowcase";
import { Training } from "@/components/sections/Training";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSummary />
      <Services />
      <DropcolisShowcase />
      <Training />
      <PortfolioPreview />
      <Testimonials />
      <BlogPreview />
      <ContactCTA />
    </>
  );
}
