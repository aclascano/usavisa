"use client";

import React from "react";
import {
  BriefcaseIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HomeModernIcon,
  TruckIcon,            // Cambié PawPrintIcon por un icono más neutro: Truck para “servicio”
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const services = [
  { label: "Agendamiento de citas", icon: CalendarDaysIcon },
  { label: "Pagos consulares", icon: BriefcaseIcon },
  { label: "Diligenciamiento de formularios", icon: DocumentTextIcon },
  { label: "Asesoría virtual", icon: ChatBubbleOvalLeftEllipsisIcon },
  { label: "Servicios post-visa", icon: HomeModernIcon },
  { label: "Asesoría para mascotas", icon: TruckIcon }, // ícono de “servicio” general
];

export function ServicesIconsSection() {
  return (
    <section className="py-20 bg-neutralLight">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold text-primary mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Nuestros Servicios
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => {
            const IconComponent = svc.icon;
            return (
              <motion.div
                key={svc.label}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * idx, duration: 0.7, ease: "easeOut" }}
              >
                <div className="flex items-center justify-center mb-4">
                  <IconComponent className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-lg font-medium text-neutralDark">
                  {svc.label}
                </h3>
                <p className="mt-2 text-gray-600">
                  Descripción breve del servicio que ofrecemos en esta área.
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
