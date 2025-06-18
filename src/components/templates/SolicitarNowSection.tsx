// src/components/templates/SolicitarNowSection.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  GlobeAmericasIcon,
  Cog6ToothIcon,
  MapIcon,
} from "@heroicons/react/24/outline";

export function SolicitarNowSection() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [chosenRoute, setChosenRoute] = useState<
    "/visa-us" | "/visa-procesos" | "/visa-ca" | null
  >(null);
  const [leaving, setLeaving] = useState(false);

  const handleCircleClick = (
    route: "/visa-us" | "/visa-procesos" | "/visa-ca"
  ) => {
    setChosenRoute(route);
    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowModal(false);
    setLeaving(true);
  };

  const handleCancel = () => {
    setShowModal(false);
    setChosenRoute(null);
  };

  return (
    <section
      id="solicitar"
      className="relative py-40 min-h-screen overflow-hidden"
    >
      {/* fondo full-width */}
      <div className="absolute inset-0 -z-10">
        {/* Image en modo fill para que Next.js gestione bien la ruta */}
        <Image
          src="/Solicitar.png"
          alt="Familia viendo avión al atardecer"
          fill
          style={{ objectFit: "cover" }}
        />
        {/* overlay para legibilidad */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* contenido + animación fade-out antes de navegar */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: leaving ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        onAnimationComplete={() => {
          if (leaving && chosenRoute) router.push(chosenRoute);
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ¡Solicita tu Visa en Pocos Pasos!
          </motion.h2>

          <motion.p
            className="text-lg text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Escoge el trámite que necesitas. Cada paso es rápido y sencillo. Al
            pulsar “Sí, acepto” accederás al formulario correspondiente de
            manera segura.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
            {[
              {
                bg: "bg-[#041E42]",
                icon: GlobeAmericasIcon,
                label: "Formulario Visa USA",
                route: "/visa-us",
              },
              {
                bg: "bg-[#E31B23]",
                icon: Cog6ToothIcon,
                label: "Formulario Procesos USA",
                route: "/visa-procesos",
              },
              {
                bg: "bg-[#FFC72C]",
                icon: MapIcon,
                label: "Formulario Canadá",
                route: "/visa-ca",
              },
            ].map(({ bg, icon: Icon, label, route }, idx) => (
              <motion.div
                key={label}
                className="flex flex-col items-center space-y-4 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleCircleClick(route as any)}
              >
                <div
                  className={`h-32 w-32 rounded-full ${bg} flex items-center justify-center shadow-lg transition`}
                >
                  <Icon className="h-12 w-12 text-white" />
                </div>
                <span className="text-lg font-medium text-white">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Modal de consentimiento */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <motion.div
            className="bg-white rounded-xl max-w-md mx-4 p-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold">Aviso de Privacidad</h3>
            <p className="mt-4 text-gray-700 text-sm">
              Al continuar, acepto que los datos proporcionados sean usados
              exclusivamente por US Immigration Services para mi proceso de
              visa, con total confidencialidad y seguridad.
            </p>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                No, regresar
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-[#041E42] text-white rounded-md hover:bg-[#06325C]"
              >
                Sí, acepto
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
