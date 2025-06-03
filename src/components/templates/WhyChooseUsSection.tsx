"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  UsersIcon,
  ShieldCheckIcon,
  ClockIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          ¿Por Qué <span className="text-secondary">Elegirnos?</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            className="flex flex-col items-center bg-neutralLight p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <UsersIcon className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-lg font-semibold text-neutralDark">Equipo Experto</h3>
            <p className="mt-2 text-gray-600 text-center">
              Profesionales certificados y con amplia experiencia en inmigración.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-neutralLight p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <ShieldCheckIcon className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-lg font-semibold text-neutralDark">Proceso Seguro</h3>
            <p className="mt-2 text-gray-600 text-center">
              Tus datos y documentos 100% protegidos bajo normativas internacionales.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-neutralLight p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <ClockIcon className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-lg font-semibold text-neutralDark">Respuesta Rápida</h3>
            <p className="mt-2 text-gray-600 text-center">
              Atención inmediata y seguimiento constante a tu solicitud.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-neutralLight p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <BanknotesIcon className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-lg font-semibold text-neutralDark">Costos Transparentes</h3>
            <p className="mt-2 text-gray-600 text-center">
              Paquetes claros sin cobros ocultos ni costos adicionales.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
