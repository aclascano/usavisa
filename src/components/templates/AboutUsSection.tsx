"use client";

import React from "react";
import { motion } from "framer-motion";

export function AboutUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 space-y-10">
        <motion.h2
          className="text-4xl font-bold text-primary text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          ¿Quiénes Somos?
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              En <span className="font-semibold text-secondary">USAVISA</span>, somos un equipo de
              profesionales dedicados a simplificar tu proceso de inmigración.
            </p>
            <p className="text-lg text-gray-700">
              Con más de <span className="font-semibold text-accent">10 años de experiencia</span>, 
              te brindamos asesoría personalizada y acompañamiento en cada paso, desde la selección de documentos 
              hasta la entrevista consular.
            </p>
            <p className="text-lg text-gray-700">
              Nuestro objetivo es que tengas una experiencia <span className="font-semibold">segura, ágil y 
              transparente</span>, sin complicaciones ni demoras innecesarias.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/team-photo.jpg" // Pon aquí una imagen de equipo o similar en /public/
              alt="Nuestro equipo"
              className="rounded-xl shadow-lg max-w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
