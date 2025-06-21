"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDaysIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HomeModernIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    label: "Agendamiento de Citas",
    icon: CalendarDaysIcon,
    description: "Programa tu cita consular de forma rápida y segura.",
  },
  {
    label: "Pagos Consulares",
    icon: BriefcaseIcon,
    description: "Gestionamos tus pagos con total garantía y respaldo.",
  },
  {
    label: "Diligenciamiento de Formularios",
    icon: DocumentTextIcon,
    description: "Te ayudamos a llenar los formularios de forma correcta.",
  },
  {
    label: "Asesoría Virtual",
    icon: ChatBubbleOvalLeftEllipsisIcon,
    description: "Atención personalizada desde la comodidad de tu hogar.",
  },
  {
    label: "Servicios Post-Visa",
    icon: HomeModernIcon,
    description: "Apoyo en tus gestiones una vez obtenida tu visa.",
  },
  {
    label: "Asesoría para Mascotas",
    icon: TruckIcon,
    description: "Viaja con tu mascota cumpliendo todos los requisitos.",
  },
];

export function ServicesIconsSection() {
  return (
    <section
      id="servicios"
      className="py-24 bg-gradient-to-b from-white via-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-primary mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Nuestros Servicios
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.label}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
              >
                <div className="flex justify-center items-center w-16 h-16 mx-auto rounded-full bg-[#E31B23]/10 mb-4">
                  <Icon className="h-8 w-8 text-[#E31B23]" />
                </div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  {svc.label}
                </h3>
                <p className="text-gray-600 text-sm">{svc.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
