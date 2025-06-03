// src/components/templates/HeroSection.tsx
"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheckIcon,
  AcademicCapIcon,
  ClockIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

export function HeroSection() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 400], [0, 100]);

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      {/* Imagen de fondo en parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          y: yBg,
          backgroundImage: "url('/hero_placeholder.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-dark/60 to-neutral-dark/80" />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center h-full max-w-7xl mx-auto px-4">
        {/* Texto e íconos (izquierda) */}
        <div className="w-full lg:w-1/2 text-white space-y-6">
          <motion.h1
            className="text-4xl sm:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Tu Puerta de Entrada a los&nbsp;
            <span className="text-accent-red">EE UU</span> y&nbsp;
            <span className="text-accent-red">Canadá</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl max-w-md"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            Servicios de inmigración profesionales, confiables y rápidos.
            <br />
            <span className="font-semibold">¡Tu tranquilidad es nuestra prioridad!</span>
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            <a
              href="#visas"
              className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-accent-gold transition-colors duration-200 shadow-lg"
            >
              Visa EE UU
            </a>
            <a
              href="#visas"
              className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-accent-gold transition-colors duration-200 shadow-lg"
            >
              Visa Canadá
            </a>
          </motion.div>

          {/* Botón “Solicitar Ahora” en el Hero */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
          >
            <a
              href="#solicitar"
              className="inline-flex items-center bg-accent-red text-white px-6 py-3 rounded-full hover:bg-accent-coral transition-all duration-200 shadow-lg"
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
              Solicitar Ahora
            </a>
          </motion.div>

          {/* Tarjetas de beneficios */}
          <motion.div
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center bg-neutral-dark/50 p-4 rounded-lg space-x-3">
              <ShieldCheckIcon className="h-8 w-8 text-accent-gold" />
              <span className="text-white font-medium">
                Asesoría 100% personalizada
              </span>
            </div>
            <div className="flex items-center bg-neutral-dark/50 p-4 rounded-lg space-x-3">
              <AcademicCapIcon className="h-8 w-8 text-accent-gold" />
              <span className="text-white font-medium">
                +10 años de experiencia
              </span>
            </div>
            <div className="flex items-center bg-neutral-dark/50 p-4 rounded-lg space-x-3">
              <ClockIcon className="h-8 w-8 text-accent-gold" />
              <span className="text-white font-medium">
                Proceso ágil y seguro
              </span>
            </div>
          </motion.div>
        </div>

        {/* Imagen/Ilustración (derecha) */}
        <motion.div
          className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/statue-hero.png"
            alt="Estatua de la Libertad"
            className="max-w-full h-auto drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
