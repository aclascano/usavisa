import React from "react";
import { HeroSection } from "../components/templates/HeroSection";
import { ServicesIconsSection } from "../components/templates/ServicesIconsSection";
import { AboutUsSection } from "../components/templates/AboutUsSection";
import { VisasUSSection } from "../components/templates/VisasUSSection";
import { MidCTASection } from "../components/templates/MidCTASection";
import { VisasCanadaSection } from "../components/templates/VisasCanadaSection";
import { CompanyRegistrationSection } from "../components/templates/CompanyRegistrationSection";
import { TestimonialsSection } from "../components/templates/TestimonialsSection";
import { WhyChooseUsSection } from "../components/templates/WhyChooseUsSection";
import { ContactFormSection } from "../components/templates/ContactFormSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <ServicesIconsSection />

      <AboutUsSection />

      <VisasUSSection />

      <MidCTASection />

      <VisasCanadaSection />

      <CompanyRegistrationSection />

      <TestimonialsSection />

      <WhyChooseUsSection />

      <ContactFormSection />
    </>
  );
}
