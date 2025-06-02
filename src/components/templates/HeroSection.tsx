"use client";

import React from "react";
import { Button } from "../atoms/Button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden h-[90vh]">
      {/* Fondo degradado animado */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary to-secondary"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Overlay semitransparente para mejorar contraste */}
      <div className="absolute inset-0 bg-neutralDark/50" />

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold mb-4 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Tu Puerta de Entrada a los&nbsp;
          <span className="text-accent">Estados Unidos</span> y&nbsp;
          <span className="text-accent">Canadá</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          Servicios de inmigración profesionales, fiables y rápidos. 
          <span className="font-semibold">¡Empieza hoy!</span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <Button variant="primary" className="min-w-[180px]">
            Visa EE UU
          </Button>
          <Button variant="secondary" className="min-w-[180px]">
            Visa Canadá
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
