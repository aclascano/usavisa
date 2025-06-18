// src/app/solicitar/page.tsx
import React from "react";
import { Navbar } from "../../components/organisms/Navbar";
import { SolicitarNowSection } from "../../components/templates/SolicitarNowSection";
import { FormsSection } from "../../components/templates/FormsSection";
import { Footer } from "../../components/organisms/Footer";

export default function SolicitarPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Sección de inicio de “Solicitar Ahora” (círculos + mensaje) */}
        <SolicitarNowSection />
      </main>
    </>
  );
}
