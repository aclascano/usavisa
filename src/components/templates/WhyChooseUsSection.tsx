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
    <section id="why" className="py-24 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-primary text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          ¿Por Qué <span className="text-secondary">Elegirnos?</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              icon: UsersIcon,
              title: "Equipo Experto",
              desc: "Contamos con especialistas en migración y trámites consulares con años de experiencia.",
              delay: 0.2,
            },
            {
              icon: ShieldCheckIcon,
              title: "Proceso Seguro",
              desc: "Protegemos tus datos cumpliendo altos estándares de privacidad y seguridad.",
              delay: 0.4,
            },
            {
              icon: ClockIcon,
              title: "Atención Rápida",
              desc: "Te respondemos en tiempo récord y te acompañamos en cada paso del proceso.",
              delay: 0.6,
            },
            {
              icon: BanknotesIcon,
              title: "Costos Claros",
              desc: "Sin sorpresas: precios transparentes y todo explicado desde el inicio.",
              delay: 0.8,
            },
          ].map(({ icon: Icon, title, desc, delay }) => (
            <motion.div
              key={title}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay, duration: 0.7 }}
            >
              <Icon className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-neutralDark mb-2">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
