"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    pais: "",
    telefono: "",
    servicio: "",
    comoEnteraste: "",
    mensaje: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
    setFormData({
      nombre: "",
      email: "",
      pais: "",
      telefono: "",
      servicio: "",
      comoEnteraste: "",
      mensaje: "",
    });
  };

  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-primary text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Contáctanos
        </motion.h2>
        <p className="text-center text-gray-600 mb-10">
          Cuéntanos tu caso y te contactaremos pronto.
        </p>

        {success && (
          <motion.div
            className="bg-green-100 text-green-800 rounded-lg p-4 text-center mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            ¡Mensaje enviado correctamente!
          </motion.div>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-neutralLight p-8 rounded-2xl shadow-md"
        >
          <input
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            type="text"
            placeholder="Nombre completo"
            required
            className="px-4 py-3 rounded-md border border-gray-300 w-full focus:ring-accent2 focus:outline-none"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Correo electrónico"
            required
            className="px-4 py-3 rounded-md border border-gray-300 w-full focus:ring-accent2 focus:outline-none"
          />
          <input
            name="pais"
            value={formData.pais}
            onChange={handleChange}
            type="text"
            placeholder="País de residencia"
            required
            className="px-4 py-3 rounded-md border border-gray-300 w-full focus:ring-accent2 focus:outline-none"
          />
          <input
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            type="tel"
            placeholder="Teléfono con código"
            required
            className="px-4 py-3 rounded-md border border-gray-300 w-full focus:ring-accent2 focus:outline-none"
          />
          <select
            name="servicio"
            value={formData.servicio}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-md border border-gray-300 w-full focus:ring-accent2 focus:outline-none"
          >
            <option value="">Servicio de tu interés</option>
            <option value="visa-us">Visa EE UU</option>
            <option value="visa-ca">Visa Canadá</option>
            <option value="servicios">Servicios Generales</option>
            <option value="empresa-us">Crear Empresa USA</option>
            <option value="otros">Otros</option>
          </select>
          <input
            name="comoEnteraste"
            value={formData.comoEnteraste}
            onChange={handleChange}
            type="text"
            placeholder="¿Cómo nos conociste?"
            className="px-4 py-3 rounded-md border border-gray-300 w-full focus:ring-accent2 focus:outline-none"
          />
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Cuéntanos tu situación..."
            rows={5}
            className="md:col-span-2 px-4 py-3 rounded-md border border-gray-300 w-full focus:ring-accent2 focus:outline-none"
          />

          <motion.button
            type="submit"
            className="md:col-span-2 bg-primary text-white flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <PaperAirplaneIcon className="w-5 h-5" />
            Enviar Mensaje
          </motion.button>
        </form>
      </div>
    </section>
  );
}
