"use client";

import React, { useEffect, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(false);
  const [chosenRoute, setChosenRoute] = useState<
    "/visa-us" | "/visa-procesos" | "/visa-ca" | null
  >(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCircleClick = (
    route: "/visa-us" | "/visa-procesos" | "/visa-ca"
  ) => {
    setChosenRoute(route);
    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowModal(false);
    setIsLoading(true);

    // Espera breve para que cierre suavemente el modal antes de redirigir
    setTimeout(() => {
      if (chosenRoute) {
        router.push(chosenRoute);
      }
    }, 500);
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
      {/* Fondo animado suavemente */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 1 }}
        animate={{ scale: 1.03 }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <Image
          src="/Solicitar.png"
          alt="Familia viendo avión al atardecer"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Contenido con animación de entrada */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            className="bg-white rounded-xl max-w-md mx-4 p-6"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
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

      {/* Pantalla de carga */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center space-y-4 text-white"
          >
            <svg
              className="animate-spin h-10 w-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            <p className="text-lg font-medium">Cargando formulario…</p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
