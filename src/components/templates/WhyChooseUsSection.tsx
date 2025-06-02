"use client";

import React from "react";
import { motion } from "framer-motion";

export function WhyChooseUsSection() {
  return (
    <section className="py-16 bg-neutralLight">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <motion.h2
          className="text-3xl font-bold text-primary"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          ¿POR QUÉ <span className="text-secondary">ELEGIRNOS</span>?
        </motion.h2>
        <motion.p
          className="text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Con USAVISA obtendrás el acompañamiento de un equipo de expertos en cada paso, ahorrando tiempo y dinero.
        </motion.p>
        <motion.p
          className="text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Contamos con profesionales dedicados a tramitar tu solicitud de manera ágil y rápida desde el primer instante. No importa dónde te encuentres, 
          nossos servicios son 100% virtuales, tan eficientes como si estuvieras en nuestras oficinas.
        </motion.p>
        <motion.p
          className="text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          Solo necesitas tu pasaporte para iniciar el trámite y asistir al día de la entrevista con el cónsul. ¡Te ayudamos a cumplir tu meta de viajar!
        </motion.p>
      </div>
    </section>
  );
}
