"use client";

import React from "react";
import { motion } from "framer-motion";

const visasUS = [
  {
    title: "Visa inversión (EB-5)",
    description:
      "Para inversores que quieran crear empleos en EE UU. Inversión mínima: $500,000 a $1,000,000 USD.",
  },
  {
    title: "Visa estudiante (F-1)",
    description: "Dirigida a quienes deseen estudiar en instituciones educativas de EE UU.",
  },
  {
    title: "Visa reunificación familiar (IR)",
    description:
      "Para familiares inmediatos de ciudadanos estadounidenses o residentes legales permanentes.",
  },
  {
    title: "Visa turista (B-2)",
    description:
      "Para visitas temporales de turismo, vacaciones o para ver familiares en EE UU.",
  },
  {
    title: "Visa negocios (B-1)",
    description:
      "Viajes cortos por negocios: reuniones, conferencias o contactos comerciales.",
  },
  {
    title: "Visa intercambio (J-1)",
    description:
      "Para participar en programas de intercambio cultural, educativo o profesional.",
  },
  {
    title: "Visa trabajo temporal (H-1B)",
    description:
      "Para profesionales especializados (TI, ingeniería, ciencias) con oferta laboral en EE UU.",
  },
  {
    title: "Visa trabajador agrícola (H-2A)",
    description:
      "Para trabajar temporalmente en el sector agrícola de EE UU.",
  },
  {
    title: "Visa trabajador no agrícola (H-2B)",
    description: "Para trabajos temporales no agrícolas (hospitalidad, construcción, etc.).",
  },
  {
    title: "Visa periodista (I)",
    description:
      "Para periodistas extranjeros que realicen cobertura informativa en EE UU.",
  },
  {
    title: "Visa artista/deportista (O)",
    description:
      "Para artistas y deportistas de alto nivel que van a competir o presentarse en EE UU.",
  },
  {
    title: "Visa basada en oferta laboral (EB-1, EB-2, EB-3)",
    description:
      "Para trabajadores con habilidades extraordinarias (EB-1), profesionales con títulos avanzados (EB-2) o técnicos (EB-3).",
  },
  {
    title: "Visa diversidad (DV)",
    description:
      "Para personas de países con bajas tasas de inmigración a EE UU, seleccionadas por sorteo.",
  },
  {
    title: "Visa prometido/a (K1)",
    description:
      "Permite viajar a EE UU para casarse con tu prometido/a ciudadano/a estadounidense dentro de 90 días.",
  },
];

export function VisasUSSection() {
  return (
    <section className="py-16 bg-neutralLight">
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        <motion.h2
          className="text-3xl font-bold text-primary text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          TIPOS DE <span className="text-secondary">VISA EE UU</span>
        </motion.h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {visasUS.map((visa, idx) => (
            <motion.div
              key={visa.title}
              className="bg-white border border-neutralLight rounded-lg shadow-sm p-6 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.7, ease: "easeOut" }}
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{visa.title}</h3>
              <p className="text-gray-700">{visa.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
