"use client";

import React from "react";
import { motion } from "framer-motion";

export function AboutUsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-primary text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          ¿Quiénes Somos?
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              En <span className="text-secondary font-semibold">USAVISA</span>,
              somos más que una empresa: somos un equipo humano comprometido con
              hacer de tu proceso migratorio una experiencia clara y sin estrés.
            </p>
            <p>
              Con más de{" "}
              <span className="text-accent font-semibold">
                10 años de trayectoria
              </span>
              , hemos ayudado a miles de personas a cumplir su sueño de viajar,
              estudiar o establecerse en el extranjero.
            </p>
            <p>
              Ofrecemos una atención cercana, profesional y totalmente
              personalizada, porque tu historia migratoria es única y merece ser
              tratada como tal.
            </p>
          </div>

          <div className="flex justify-center">
            <motion.img
              src="/team-photo.jpg"
              alt="Nuestro equipo"
              className="rounded-xl shadow-xl w-full max-w-md object-cover"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
