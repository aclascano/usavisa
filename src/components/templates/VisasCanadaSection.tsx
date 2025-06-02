"use client";

import React from "react";
import { motion } from "framer-motion";

const visasCA = [
  {
    title: "Visa de Turismo",
    description: "Te permite visitar Canadá con fines turísticos por tiempo determinado.",
  },
  {
    title: "Visa de Estudiante",
    description: "Permite estudiar en instituciones educativas canadienses de renombre.",
  },
  {
    title: "Visa de Trabajo",
    description: "Para buscar y aceptar ofertas laborales en Canadá.",
  },
  {
    title: "Visa Residencia Permanente",
    description: "Para establecerte y trabajar de forma permanente en Canadá.",
  },
  {
    title: "Visa Reunificación Familiar",
    description: "Permite reunirte con familiares que ya viven en Canadá.",
  },
  {
    title: "Visa Empresario/Inversionista",
    description: "Para invertir o iniciar un negocio en Canadá.",
  },
];

export function VisasCanadaSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        <motion.h2
          className="text-3xl font-bold text-primary text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          VISAS <span className="text-secondary">CANADÁ</span>
        </motion.h2>
        <p className="text-center text-gray-700 mb-8">
          Asesoría completa para obtener tu visa canadiense de turista, estudiante, trabajo o residencia.
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {visasCA.map((visa, idx) => (
            <motion.div
              key={visa.title}
              className="bg-neutralLight border border-neutralLight rounded-lg shadow-sm p-6 hover:shadow-md transition"
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
