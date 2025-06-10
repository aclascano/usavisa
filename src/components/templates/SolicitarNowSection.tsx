// src/components/templates/SolicitarNowSection.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
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

  // Abre el modal y guarda la ruta seleccionada
  const handleCircleClick = (
    route: "/visa-us" | "/visa-procesos" | "/visa-ca"
  ) => {
    setChosenRoute(route);
    setShowModal(true);
  };

  // Inicia la animación de salida y luego redirige
  const handleConfirm = () => {
    setShowModal(false); // ocultamos el modal primero
    setLeaving(true); // inicia animación de fade-out
  };

  // Si el usuario cancela, simplemente cierra el modal y no hace nada
  const handleCancel = () => {
    setShowModal(false);
    setChosenRoute(null);
  };

  return (
    <section id="solicitar" className="relative bg-white py-20">
      {/* Fondo de ancho completo */}
      <div className="absolute inset-0 bg-[#F9FAFB] -z-10" />

      {/* Wrapper animado: se desvanece antes de la navegación */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: leaving ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        onAnimationComplete={() => {
          if (leaving && chosenRoute) {
            router.push(chosenRoute);
          }
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          {/* Título + mensaje */}
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-[#041E42]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            ¡Solicita tu Visa en Pocos Pasos!
          </motion.h2>
          <motion.p
            className="text-lg text-[#333333] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            Escoge el trámite que necesitas. Cada paso es rápido y sencillo. Al
            pulsar “Sí, acepto” en el aviso de privacidad, accederás al
            formulario correspondiente de manera segura.
          </motion.p>

          {/* Tres círculos con enlace a cada ruta */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
            {/* Círculo: Formulario Visa USA */}
            <motion.div
              className="flex flex-col items-center space-y-4 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleCircleClick("/visa-us")}
            >
              <div className="h-32 w-32 rounded-full bg-[#041E42] flex items-center justify-center shadow-lg hover:shadow-2xl transition">
                <GlobeAmericasIcon className="h-12 w-12 text-white" />
              </div>
              <span className="text-lg font-medium text-[#041E42]">
                Formulario Visa USA
              </span>
            </motion.div>

            {/* Círculo: Formulario Procesos USA */}
            <motion.div
              className="flex flex-col items-center space-y-4 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleCircleClick("/visa-procesos")}
            >
              <div className="h-32 w-32 rounded-full bg-[#E31B23] flex items-center justify-center shadow-lg hover:shadow-2xl transition">
                <Cog6ToothIcon className="h-12 w-12 text-white" />
              </div>
              <span className="text-lg font-medium text-[#041E42]">
                Formulario Procesos USA
              </span>
            </motion.div>

            {/* Círculo: Formulario Canadá */}
            <motion.div
              className="flex flex-col items-center space-y-4 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleCircleClick("/visa-ca")}
            >
              <div className="h-32 w-32 rounded-full bg-[#FFC72C] flex items-center justify-center shadow-lg hover:shadow-2xl transition">
                <MapIcon className="h-12 w-12 text-white" />
              </div>
              <span className="text-lg font-medium text-[#041E42]">
                Formulario Canadá
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Modal de consentimiento */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <motion.div
            className="bg-white rounded-xl max-w-md mx-4 p-6 shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h3 className="text-xl font-semibold text-[#041E42]">
              Aviso de Privacidad
            </h3>
            <p className="mt-4 text-gray-700 text-sm leading-relaxed">
              Al continuar, acepto que los datos proporcionados en este
              formulario sean utilizados por{" "}
              <span className="font-semibold">US Immigration Services</span>{" "}
              exclusivamente para el proceso de solicitud de visa. Todos los
              datos serán tratados de forma confidencial y con estrictas medidas
              de seguridad.
            </p>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={handleCancel}
                className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
              >
                No, regresar
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 rounded-md bg-[#041E42] text-white hover:bg-[#06325C] transition"
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
