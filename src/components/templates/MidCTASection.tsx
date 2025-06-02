"use client";

import React from "react";
import { motion } from "framer-motion";

export function MidCTASection() {
  return (
    <section className="py-12 bg-secondary text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h3
          className="text-2xl font-semibold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ¡Agenda tu Cita Gratis!
        </motion.h3>
        <motion.p
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Nuestros expertos te guiarán sin costo inicial. <span className="font-semibold">Cupos limitados.</span>
        </motion.p>
        <motion.button
          className="bg-white text-secondary px-6 py-3 rounded-md hover:bg-neutralLight transition"
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Reservar Cita
        </motion.button>
      </div>
    </section>
  );
}
