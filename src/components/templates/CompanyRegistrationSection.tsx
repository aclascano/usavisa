// src/components/templates/CompanyRegistrationSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BuildingOfficeIcon,    // antes OfficeBuildingIcon
  DocumentTextIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

export function CompanyRegistrationSection() {
  return (
    <section id="empresa" className="py-20 bg-blue-50">
      <div className="max-w-5xl mx-auto px-4 text-center space-y-8">
        {/* Título en Español */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Servicio de Registro de Empresa
        </motion.h2>

        {/* Descripción en Español */}
        <motion.p
          className="text-lg text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Te ayudamos a establecer tu entidad legal en Estados Unidos 100% de manera virtual. Obtén tu EIN,
          agente registrado y toda la documentación necesaria sin salir de casa.
        </motion.p>

        {/* Tres pasos principales */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          >
            <BuildingOfficeIcon className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-neutralDark mb-2">
              Entidad Legal & Agente Registrado
            </h3>
            <p className="text-gray-600">
              Creamos y registramos tu empresa ante las autoridades estatales, incluyendo el servicio de agente registrado.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          >
            <DocumentTextIcon className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-neutralDark mb-2">
              Documentación & EIN
            </h3>
            <p className="text-gray-600">
              Gestionamos tu Número de Identificación Patronal (EIN) y preparamos todos los documentos necesarios.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
          >
            <CurrencyDollarIcon className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-neutralDark mb-2">
              Apertura de Cuentas Bancarias
            </h3>
            <p className="text-gray-600">
              Te asesoramos para abrir cuentas bancarias empresariales en EE UU utilizando tu EIN.
            </p>
          </motion.div>
        </div>

        {/* Botón CTA en Español */}
        <motion.button
          className="mt-8 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Registrar Mi Empresa
        </motion.button>
      </div>
    </section>
  );
}
