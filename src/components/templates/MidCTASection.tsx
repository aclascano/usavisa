"use client";

import React from "react";
import { motion } from "framer-motion";

export function MidCTASection() {
  return (
    <section className="py-16 bg-secondary text-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h3
          className="text-3xl sm:text-4xl font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ¡Agenda tu Cita Gratis!
        </motion.h3>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Nuestros expertos te brindan una{" "}
          <span className="font-semibold underline">evaluación sin costo</span> 
          para tu caso. <span className="italic">Solo hoy.</span>
        </motion.p>
        <motion.button
          className="bg-white text-secondary px-8 py-3 rounded-full font-medium hover:bg-neutralLight transition-all duration-300"
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Reservar Cita
        </motion.button>
      </div>
    </section>
  );
}
