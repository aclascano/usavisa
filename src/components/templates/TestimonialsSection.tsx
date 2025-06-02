"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Recomendaría altamente el servicio de asesoría de USAvisa. El equipo demostró un conocimiento experto y una gran atención al detalle. Su asesoramiento claro y preciso me permitió presentar una solicitud exitosa de visa sin problemas.",
    author: "Alejandra Caicedo",
  },
  {
    quote:
      "Recomiendo altamente al servicio de asesoría de USAvisa. Su equipo de expertos brinda atención personalizada y eficiente, guiándome en cada paso del proceso.",
    author: "Laura Cortés",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        <motion.h2
          className="text-3xl font-bold text-primary text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          CLIENTES <span className="text-secondary">SATISFECHOS</span>
        </motion.h2>
        <div className="space-y-8">
          {testimonials.map((t, idx) => (
            <motion.blockquote
              key={idx}
              className="border-l-4 border-accent pl-4 italic text-neutralDark"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * idx, duration: 0.7 }}
            >
              <p>“{t.quote}”</p>
              <footer className="mt-2 font-semibold text-secondary">— {t.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
