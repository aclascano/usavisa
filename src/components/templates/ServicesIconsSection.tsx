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
  { label: "Agendamiento de citas", icon: CalendarDaysIcon },
  { label: "Pagos consulares", icon: BriefcaseIcon },
  { label: "Diligenciamiento de formularios", icon: DocumentTextIcon },
  { label: "Asesoría virtual", icon: ChatBubbleOvalLeftEllipsisIcon },
  { label: "Servicios post-visa", icon: HomeModernIcon },
  { label: "Asesoría para mascotas", icon: TruckIcon },
];

export function ServicesIconsSection() {
  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold text-primary mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nuestros Servicios
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.label}
                className="flex flex-col items-center space-y-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
              >
                <Icon className="h-10 w-10 text-[#E31B23]" />
                <h3 className="text-lg font-medium text-neutralDark">
                  {svc.label}
                </h3>
                <p className="text-gray-600">
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
