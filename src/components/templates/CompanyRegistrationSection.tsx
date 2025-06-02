"use client";

import React from "react";
import { motion } from "framer-motion";

export function CompanyRegistrationSection() {
  return (
    <section className="py-16 bg-neutralLight">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <motion.h2
          className="text-3xl font-bold text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          REGISTRA O CREA TU EMPRESA <span className="text-secondary">EN USA</span> DESDE TU PAÍS
        </motion.h2>
        <motion.ol
          className="list-decimal list-inside text-gray-700 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <li>Registra o crea tu empresa en USA</li>
          <li>Agente Legal Registrado</li>
          <li>Número de identificación empresarial (EIN)</li>
          <li>100% Virtual</li>
        </motion.ol>
        <motion.p
          className="font-semibold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          ¡SER EMPRESARIO EN LOS ESTADOS UNIDOS NUNCA FUE TAN FÁCIL!
        </motion.p>
      </div>
    </section>
  );
}
