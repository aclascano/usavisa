// src/components/templates/VisasTabsSection.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CurrencyDollarIcon,
  AcademicCapIcon,
  UserGroupIcon,
  GlobeAmericasIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  IdentificationIcon,
  LightBulbIcon,
  BuildingLibraryIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";

const visasUS = [
  {
    title: "Visa inversión (EB-5)",
    desc:
      "Para inversores que quieran crear empleos en EE UU. Inversión mínima: $500,000 a $1,000,000 USD.",
    Icon: CurrencyDollarIcon,
  },
  {
    title: "Visa estudiante (F-1)",
    desc: "Dirigida a quienes deseen estudiar en instituciones educativas de EE UU.",
    Icon: AcademicCapIcon,
  },
  {
    title: "Visa reunificación familiar (IR)",
    desc:
      "Para familiares inmediatos de ciudadanos estadounidenses o residentes permanentes legales.",
    Icon: UserGroupIcon,
  },
  {
    title: "Visa turista (B-2)",
    desc: "Para visitas temporales por turismo o para ver familiares en EE UU.",
    Icon: GlobeAmericasIcon,
  },
  {
    title: "Visa negocios (B-1)",
    desc: "Viajes cortos con fines de negocios: reuniones o conferencias.",
    Icon: BriefcaseIcon,
  },
  {
    title: "Visa intercambio (J-1)",
    desc:
      "Para participar en programas de intercambio cultural, educativo o profesional.",
    Icon: LightBulbIcon,
  },
  {
    title: "Visa trabajo temporal (H-1B)",
    desc:
      "Para profesionales especializados (TI, ingeniería, ciencias) con oferta laboral en EE UU.",
    Icon: IdentificationIcon,
  },
  {
    title: "Visa agrícola temporal (H-2A)",
    desc: "Para trabajar temporalmente en el sector agrícola de EE UU.",
    Icon: TicketIcon,
  },
  {
    title: "Visa no agrícola temporal (H-2B)",
    desc: "Para trabajos temporales no agrícolas (hospitalidad, construcción, etc.).",
    Icon: BriefcaseIcon,
  },
  {
    title: "Visa periodista (I)",
    desc: "Para periodistas extranjeros que realicen cobertura informativa en EE UU.",
    Icon: BuildingLibraryIcon,
  },
  {
    title: "Visa artista/deportista (O)",
    desc:
      "Para artistas y deportistas de alto nivel que van a competir o presentarse en EE UU.",
    Icon: GlobeAmericasIcon,
  },
  {
    title: "Visa basada en oferta laboral (EB-1, EB-2, EB-3)",
    desc:
      "EB-1: habilidades extraordinarias. EB-2: profesionales con títulos avanzados. EB-3: trabajadores calificados y técnicos.",
    Icon: BriefcaseIcon,
  },
  {
    title: "Visa diversidad (DV)",
    desc:
      "Para personas de países con bajas tasas de inmigración a EE UU, seleccionadas por sorteo anual.",
    Icon: BuildingLibraryIcon,
  },
  {
    title: "Visa de prometido/a (K-1)",
    desc:
      "Permite viajar a EE UU para casarse con tu prometido/a ciudadano/a estadounidense dentro de 90 días.",
    Icon: IdentificationIcon,
  },
];

const visasCA = [
  {
    title: "Visa de Turismo",
    desc: "Permite visitar Canadá con fines turísticos por un período determinado.",
    Icon: GlobeAmericasIcon,
  },
  {
    title: "Visa de Estudiante",
    desc: "Permite estudiar en instituciones educativas canadienses.",
    Icon: AcademicCapIcon,
  },
  {
    title: "Visa de Trabajo",
    desc: "Para buscar y aceptar ofertas laborales en Canadá.",
    Icon: DocumentTextIcon,
  },
  {
    title: "Visa Residencia Permanente",
    desc: "Para establecerte y trabajar permanentemente en Canadá.",
    Icon: UserGroupIcon,
  },
  {
    title: "Visa Reunificación Familiar",
    desc: "Permite reunirte con familiares que ya viven en Canadá.",
    Icon: UserGroupIcon,
  },
  {
    title: "Visa Empresario/Inversionista",
    desc: "Para invertir o iniciar un negocio en Canadá.",
    Icon: CurrencyDollarIcon,
  },
];

export function VisasTabsSection() {
  const [activeTab, setActiveTab] = useState<"US" | "CA">("US");
  const items = activeTab === "US" ? visasUS : visasCA;

  return (
    <section id="visas" className="relative py-24 bg-gradient-to-b from-neutral-light to-white overflow-hidden">
      {/* Fondos decorativos tenues */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-accent-gold/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Botones “pill” */}
        <div className="flex justify-center space-x-6 mb-12">
          <button
            onClick={() => setActiveTab("US")}
            className={`relative px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 ${
              activeTab === "US"
                ? "bg-primary text-white shadow-2xl"
                : "bg-neutral-light text-neutral-dark hover:bg-neutral-200"
            }`}
          >
            Visa EE UU
            {activeTab === "US" && (
              <motion.div
                layoutId="tabUnderline"
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-accent-red rounded-full"
              />
            )}
          </button>

          <button
            onClick={() => setActiveTab("CA")}
            className={`relative px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 ${
              activeTab === "CA"
                ? "bg-primary text-white shadow-2xl"
                : "bg-neutral-light text-neutral-dark hover:bg-neutral-200"
            }`}
          >
            Visa Canadá
            {activeTab === "CA" && (
              <motion.div
                layoutId="tabUnderline"
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-accent-red rounded-full"
              />
            )}
          </button>
        </div>

        {/* Grid de tarjetas */}
        <motion.div
          className="bg-white rounded-xl shadow-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((visa, idx) => (
              <motion.div
                key={visa.title}
                className="relative flex flex-col h-full bg-neutral-light rounded-2xl border border-neutral-light p-6 hover:border-accent-red hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.1 + 0.2,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Ícono en la esquina superior */}
                <visa.Icon className="absolute top-4 right-4 h-8 w-8 text-accent-gold/80" />

                {/* Título */}
                <h3 className="text-xl font-bold text-primary mb-3 pr-10">
                  {visa.title}
                </h3>

                {/* Descripción */}
                <p className="text-gray-700 flex-grow">{visa.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
