"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BuildingOfficeIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

export function CompanyRegistrationSection() {
  return (
    <section
      id="empresa"
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-primary mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Abre tu Empresa en EE. UU. 100% Online
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 mb-14 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Gestionamos todo el proceso legal y financiero para que abras tu
          empresa desde cualquier país. SIN viajes ni papeleos complicados.
        </motion.p>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Entidad Legal + Agente Registrado",
              desc: "Registramos tu empresa y te asignamos un agente legal en EE. UU.",
              icon: BuildingOfficeIcon,
              delay: 0.3,
            },
            {
              title: "Documentación & EIN",
              desc: "Tramitamos tu EIN y te entregamos todos los documentos listos para operar.",
              icon: DocumentTextIcon,
              delay: 0.5,
            },
            {
              title: "Cuentas Bancarias",
              desc: "Te asesoramos para abrir cuentas empresariales sin estar en EE. UU.",
              icon: CurrencyDollarIcon,
              delay: 0.7,
            },
          ].map(({ title, desc, icon: Icon, delay }) => (
            <motion.div
              key={title}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay, duration: 0.7 }}
            >
              <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutralDark mb-2">
                {title}
              </h3>
              <p className="text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <button className="mt-12 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all shadow-md hover:shadow-lg">
            Iniciar Registro Ahora
          </button>
        </motion.div>
      </div>
    </section>
  );
}
