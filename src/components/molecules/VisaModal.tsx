"use client";

import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
export function VisaModal({ visa, onClose }) {
  if (!visa) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white max-w-5xl w-full rounded-lg overflow-hidden shadow-xl flex flex-col md:flex-row relative"
          initial={{ scale: 0.7, y: 100, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.7, y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
            onClick={onClose}
          >
            ×
          </button>

          <img
            src={visa.image}
            alt={visa.title}
            className="w-full md:w-1/2 h-64 md:h-auto object-cover"
          />

          <div className="p-6 md:w-1/2 overflow-y-auto max-h-[90vh]">
            <h2 className="text-2xl font-bold text-primary mb-2">
              {visa.title}
            </h2>
            <p className="text-gray-700 mb-4">{visa.description}</p>

            {visa.requirements && (
              <>
                <h3 className="text-lg font-semibold mt-4 text-primary">
                  Requisitos:
                </h3>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  {visa.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </>
            )}

            <h3 className="text-lg font-semibold mt-4 text-primary">
              Detalles:
            </h3>
            <p className="text-gray-600">{visa.details}</p>

            <div className="pt-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
              <button
                onClick={onClose}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Cerrar
              </button>

              <Link
                href="/solicitar"
                className="bg-accent-red text-white px-4 py-2 rounded flex items-center justify-center gap-2 hover:bg-accent-coral transition"
              >
                <PaperAirplaneIcon className="h-5 w-5" />
                Solicitar ahora
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
