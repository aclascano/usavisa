"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    pais: "",
    telefono: "",
    servicio: "",
    comoEnteraste: "",
    mensaje: "",
    captcha: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica real de envío al backend...
    console.log("Form submitted:", formData);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section className="py-16 bg-white" id="contacto">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-primary text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Contáctanos
        </motion.h2>

        {success && (
          <motion.div
            className="bg-success text-white p-4 rounded-md mb-6 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            ¡Tu mensaje ha sido enviado exitosamente! Nos comunicaremos pronto.
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nombre" className="block text-gray-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full border border-neutralLight rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-neutralLight rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="pais" className="block text-gray-700 mb-1">
                País
              </label>
              <input
                type="text"
                id="pais"
                name="pais"
                value={formData.pais}
                onChange={handleChange}
                className="w-full border border-neutralLight rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="telefono" className="block text-gray-700 mb-1">
                Indicativo + Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full border border-neutralLight rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="servicio" className="block text-gray-700 mb-1">
              Servicio de tu interés
            </label>
            <select
              id="servicio"
              name="servicio"
              value={formData.servicio}
              onChange={handleChange}
              className="w-full border border-neutralLight rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Selecciona</option>
              <option value="visa-us">Visa EE UU</option>
              <option value="visa-ca">Visa Canadá</option>
              <option value="servicios">Servicios Generales</option>
              <option value="empresa-us">Crear Empresa USA</option>
              <option value="otros">Otros</option>
            </select>
          </div>

          <div>
            <label htmlFor="comoEnteraste" className="block text-gray-700 mb-1">
              ¿Cómo te enteraste de nosotros?
            </label>
            <input
              type="text"
              id="comoEnteraste"
              name="comoEnteraste"
              value={formData.comoEnteraste}
              onChange={handleChange}
              className="w-full border border-neutralLight rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-gray-700 mb-1">
              Explícanos tu caso
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full border border-neutralLight rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <div>
            <label htmlFor="captcha" className="block text-gray-700 mb-1">
              3 + 6 =
            </label>
            <input
              type="text"
              id="captcha"
              name="captcha"
              value={formData.captcha}
              onChange={handleChange}
              className="w-1/3 border border-neutralLight rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="text-center">
            <motion.button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded hover:bg-primary/90 transition"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Enviar
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}
