"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GlobeAmericasIcon,
  Cog6ToothIcon,
  MapIcon,
} from "@heroicons/react/24/outline";

export function SolicitarNowSection() {
  return (
    <section id="solicitar" className="py-20 bg-neutral-light">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
        {/* Título + mensaje de marketing */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          ¡Solicita tu Visa en Pocos Pasos!
        </motion.h2>
        <motion.p
          className="text-lg text-neutral-dark max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          Escoge el formulario que necesitas. Cada paso será sencillo y, en cuanto
          elijas la ruta, aparecerá el formulario correspondiente.
        </motion.p>

        {/* Tres círculos con enlace a cada ruta */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
          {/* Círculo: Formulario Visa USA */}
          <motion.div
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="/visa-us"
              className="flex flex-col items-center no-underline"
            >
              <div className="h-32 w-32 rounded-full bg-primary flex items-center justify-center shadow-lg hover:shadow-2xl transition">
                <GlobeAmericasIcon className="h-12 w-12 text-white" />
              </div>
              <span className="text-lg font-medium text-neutral-dark mt-3">
                Formulario Visa USA
              </span>
            </Link>
          </motion.div>

          {/* Círculo: Formulario Procesos USA */}
          <motion.div
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="/visa-procesos"
              className="flex flex-col items-center no-underline"
            >
              <div className="h-32 w-32 rounded-full bg-accent-red flex items-center justify-center shadow-lg hover:shadow-2xl transition">
                <Cog6ToothIcon className="h-12 w-12 text-white" />
              </div>
              <span className="text-lg font-medium text-neutral-dark mt-3">
                Formulario Procesos USA
              </span>
            </Link>
          </motion.div>

          {/* Círculo: Formulario Canadá */}
          <motion.div
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="/visa-ca"
              className="flex flex-col items-center no-underline"
            >
              <div className="h-32 w-32 rounded-full bg-accent-gold flex items-center justify-center shadow-lg hover:shadow-2xl transition">
                <MapIcon className="h-12 w-12 text-white" />
              </div>
              <span className="text-lg font-medium text-neutral-dark mt-3">
                Formulario Canadá
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
