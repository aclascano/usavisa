"use client";

import React from "react";
import { motion } from "framer-motion";

export function AboutUsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        <motion.h2
          className="text-3xl font-bold text-primary text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          ACERCA DE NOSOTROS
        </motion.h2>
        <motion.p
          className="text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          ¡Bienvenido a USAVISA! Te ofrecemos asesoría integral en trámites de inmigración a los Estados Unidos.
        </motion.p>
        <motion.p
          className="text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Nuestro equipo de expertos se compromete a brindarte una atención personalizada para que obtengas los mejores resultados. Ya sea que viajes por estudios, trabajo o para reunir tu familia, te guiamos en cada paso.
        </motion.p>
        <motion.p
          className="text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          Explora nuestro sitio y descubre cómo podemos ayudarte. Si tienes preguntas, no dudes en contactarnos.
        </motion.p>
      </div>
    </section>
  );
}
