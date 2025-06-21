// src/app/page.tsx

import React from "react";
import { HeroSection } from "../components/templates/HeroSection";
import { ServicesIconsSection } from "../components/templates/ServicesIconsSection";
import { AboutUsSection } from "../components/templates/AboutUsSection";
import { VisasTabsSection } from "../components/templates/VisasTabsSection";
import { CompanyRegistrationSection } from "../components/templates/CompanyRegistrationSection";
import { MidCTASection } from "../components/templates/MidCTASection";
import { WhyChooseUsSection } from "../components/templates/WhyChooseUsSection";
import { ContactFormSection } from "../components/templates/ContactFormSection";

export default function HomePage() {
  return (
    <>
      {/* Hero mantiene su fondo independiente */}
      <section id="inicio">
        <HeroSection />
      </section>

      {/* Fondo unificado desde aquí */}
      <div className="bg-neutral-50">
        <section id="servicios">
          <ServicesIconsSection />
        </section>

        <section id="acerca">
          <AboutUsSection />
        </section>

        <section id="empresa">
          <CompanyRegistrationSection />
        </section>

        <section id="why">
          <WhyChooseUsSection />
        </section>

        <section id="contacto">
          <ContactFormSection />
        </section>

        <section id="solicitar">
          <MidCTASection />
        </section>
      </div>
    </>
  );
}
