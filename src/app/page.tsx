// src/app/page.tsx
import React from "react";
import { HeroSection } from "../components/templates/HeroSection";
import { ServicesIconsSection } from "../components/templates/ServicesIconsSection";
import { AboutUsSection } from "../components/templates/AboutUsSection";
import { VisasTabsSection } from "../components/templates/VisasTabsSection";
import { CompanyRegistrationSection } from "../components/templates/CompanyRegistrationSection";
import { MidCTASection } from "../components/templates/MidCTASection";
import { TestimonialsCarousel } from "../components/templates/TestimonialsCarousel";
import { WhyChooseUsSection } from "../components/templates/WhyChooseUsSection";
import { ContactFormSection } from "../components/templates/ContactFormSection";

export default function HomePage() {
  return (
    <>
      {/* Secciones identificadas con id para anclas */}
      <section id="inicio">
        <HeroSection />
      </section>

      <section id="servicios">
        <ServicesIconsSection />
      </section>

      <section id="acerca">
        <AboutUsSection />
      </section>

      <section id="visas">
        <VisasTabsSection />
      </section>

      <section id="empresa">
        <CompanyRegistrationSection />
      </section>

      <section id="testimonios">
        <TestimonialsCarousel />
      </section>

      <section id="why">
        <WhyChooseUsSection />
      </section>

      <section id="contacto">
        <ContactFormSection />
      </section>

      {/* Sección “Solicitar Ahora” anclada */}
      <section id="solicitar">
        {/* Aquí podrías duplicar el MidCTA o un componente específico para “Solicitar Ahora” */}
        <MidCTASection />
      </section>
    </>
  );
}
