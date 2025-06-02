"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  { label: "Agendamiento de citas", icon: "📅" },
  { label: "Pagos consulares", icon: "💳" },
  { label: "Diligenciamiento de formularios", icon: "📝" },
  { label: "Asesoría virtual", icon: "💻" },
  { label: "Servicios post-visa", icon: "🏠" },
  { label: "Asesoría para mascotas", icon: "🐾" },
];

export function ServicesIconsSection() {
  return (
    <section className="py-16 bg-neutralLight">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold text-primary mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Un Proceso <span className="text-accent">Seguro</span> y <span className="text-accent">Ágil</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.label}
              className="flex flex-col items-center space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * idx, duration: 0.6, ease: "easeOut" }}
            >
              <div className="text-5xl text-accent">{svc.icon}</div>
              <p className="text-lg font-medium text-neutralDark">{svc.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
