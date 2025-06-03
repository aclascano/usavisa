"use client";

import React from "react";

const testimonials = [
  {
    quote:
      "Recomendaría altamente el servicio de asesoría de USAVISA. Su equipo demostró un conocimiento experto y una gran atención al detalle. Gracias a ellos, mi visa fue aprobada sin contratiempos.",
    author: "Alejandra Caicedo",
  },
  {
    quote:
      "Excelentes profesionales. Me guiaron paso a paso y respondieron todas mis dudas. ¡Logré mi visa para Canadá en tiempo récord!",
    author: "Laura Cortés",
  },
  {
    quote:
      "Servicio personalizado y eficiente. Desde el diligenciamiento hasta la entrevista, siempre estuvieron ahí. Los recomiendo al 100%.",
    author: "Carlos Méndez",
  },
];

export function TestimonialsCarousel() {
  return (
    <section className="py-20 bg-neutralLight">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-primary text-center mb-10">
          Nuestros Clientes Opinan
        </h2>
        <div className="relative">
          <div className="flex overflow-x-auto space-x-8 px-4 pb-6 snap-x snap-mandatory">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex-none w-full sm:w-80 bg-white p-8 rounded-2xl shadow-lg snap-center"
              >
                <p className="italic text-gray-700">“{t.quote}”</p>
                <footer className="mt-6 font-semibold text-secondary text-right">
                  — {t.author}
                </footer>
              </div>
            ))}
          </div>
          {/* Indicadores simples */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                className="h-2 w-2 bg-neutralDark rounded-full animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
