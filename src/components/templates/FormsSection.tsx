// src/components/templates/FormsSection.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

function FormField({ label, name, type, placeholder, required }: FormFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-neutral-dark font-medium mb-1">
        {label}
        {required && <span className="text-accent-red ml-1">*</span>}
      </label>
      {type !== "textarea" ? (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      ) : (
        <textarea
          id={name}
          name={name}
          rows={4}
          placeholder={placeholder}
          required={required}
          className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      )}
    </div>
  );
}

export function FormsSection() {
  const [activeForm, setActiveForm] = useState<"usa" | "procesos" | "canada">("usa");

  return (
    <section className="py-20 bg-white" id="forms-container">
      <div className="max-w-4xl mx-auto px-4 space-y-12">
        {/* Selector de Formulario */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setActiveForm("usa")}
            className={`px-6 py-2 font-medium rounded-md transition ${
              activeForm === "usa"
                ? "bg-primary text-white"
                : "bg-neutral-light text-neutral-dark hover:bg-neutral-light/80"
            }`}
          >
            Visa USA
          </button>
          <button
            onClick={() => setActiveForm("procesos")}
            className={`px-6 py-2 font-medium rounded-md transition ${
              activeForm === "procesos"
                ? "bg-accent-red text-white"
                : "bg-neutral-light text-neutral-dark hover:bg-neutral-light/80"
            }`}
          >
            Procesos USA
          </button>
          <button
            onClick={() => setActiveForm("canada")}
            className={`px-6 py-2 font-medium rounded-md transition ${
              activeForm === "canada"
                ? "bg-accent-gold text-neutral-dark"
                : "bg-neutral-light text-neutral-dark hover:bg-neutral-light/80"
            }`}
          >
            Canadá
          </button>
        </div>

        {/* Formulario Visa USA */}
        {activeForm === "usa" && (
          <motion.div
            id="form-usa"
            className="bg-neutral-light p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Formulario Solicitud de Visa USA
            </h3>
            <form className="space-y-4">
              <FormField
                label="Nombre Completo"
                name="nombre"
                type="text"
                placeholder="Tu nombre completo"
                required
              />
              <FormField
                label="Correo Electrónico"
                name="email"
                type="email"
                placeholder="tucorreo@ejemplo.com"
                required
              />
              <FormField
                label="Teléfono (con código de país)"
                name="telefono"
                type="tel"
                placeholder="+1 555 123 4567"
                required
              />
              <FormField
                label="País de Residencia"
                name="pais"
                type="text"
                placeholder="Ej. Ecuador"
                required
              />
              <FormField
                label="Motivo de la Visita"
                name="motivo"
                type="text"
                placeholder="Turismo, Negocios, etc."
                required
              />
              <FormField
                label="Descripción Breve de tu Caso"
                name="descripcion"
                type="textarea"
                placeholder="Cuéntanos más..."
              />
              <button
                type="submit"
                className="mt-4 w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition"
              >
                Enviar Solicitud USA
              </button>
            </form>
          </motion.div>
        )}

        {/* Formulario Procesos USA */}
        {activeForm === "procesos" && (
          <motion.div
            id="form-procesos"
            className="bg-neutral-light p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold text-accent-red mb-6">
              Formulario Procesos USA
            </h3>
            <form className="space-y-4">
              <FormField
                label="Nombre Completo"
                name="nombre_procesos"
                type="text"
                placeholder="Tu nombre completo"
                required
              />
              <FormField
                label="Correo Electrónico"
                name="email_procesos"
                type="email"
                placeholder="tucorreo@ejemplo.com"
                required
              />
              <FormField
                label="Teléfono (con código de país)"
                name="telefono_procesos"
                type="tel"
                placeholder="+1 555 123 4567"
                required
              />
              <FormField
                label="Tipo de Proceso"
                name="tipo_proceso"
                type="text"
                placeholder="Ej. Renovación, Ajuste de Estatus"
                required
              />
              <FormField
                label="Estado Actual del Proceso"
                name="estado_actual"
                type="text"
                placeholder="Ej. En trámite, Aprobado, Denegado"
                required
              />
              <FormField
                label="Detalles Adicionales"
                name="detalles_procesos"
                type="textarea"
                placeholder="Explica tu situación"
              />
              <button
                type="submit"
                className="mt-4 w-full bg-accent-red text-white px-6 py-3 rounded-md hover:bg-accent-red/90 transition"
              >
                Enviar Formulario Procesos
              </button>
            </form>
          </motion.div>
        )}

        {/* Formulario Canadá */}
        {activeForm === "canada" && (
          <motion.div
            id="form-canada"
            className="bg-neutral-light p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold text-accent-gold mb-6">
              Formulario Canadá
            </h3>
            <form className="space-y-4">
              <FormField
                label="Nombre Completo"
                name="nombre_canada"
                type="text"
                placeholder="Tu nombre completo"
                required
              />
              <FormField
                label="Correo Electrónico"
                name="email_canada"
                type="email"
                placeholder="tucorreo@ejemplo.com"
                required
              />
              <FormField
                label="Teléfono (con código de país)"
                name="telefono_canada"
                type="tel"
                placeholder="+1 555 123 4567"
                required
              />
              <FormField
                label="Motivo de Visita a Canadá"
                name="motivo_canada"
                type="text"
                placeholder="Turismo, Estudios, Trabajo, etc."
                required
              />
              <FormField
                label="País de Residencia"
                name="pais_canada"
                type="text"
                placeholder="Ej. Ecuador"
                required
              />
              <FormField
                label="Comentarios Adicionales"
                name="comentarios_canada"
                type="textarea"
                placeholder="Cuéntanos tu caso"
              />
              <button
                type="submit"
                className="mt-4 w-full bg-accent-gold text-neutral-dark px-6 py-3 rounded-md hover:bg-accent-gold/90 transition"
              >
                Enviar Formulario Canadá
              </button>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
}
