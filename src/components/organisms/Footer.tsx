// src/components/organisms/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import {
  PhoneIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export function Footer() {
  return (
    <footer className="bg-[#041E42] text-white">
      {/* Contenedor principal: 4 columnas con mayor separación horizontal */}
      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-12">
        {/* Columna 1: Sobre Nosotros */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">US Immigration Services</h3>
          <p className="text-sm leading-snug text-gray-200">
            En{" "}
            <span className="font-semibold text-white">
              US Immigration Services
            </span>{" "}
            te acompañamos en cada paso de tu trámite de visa. Confianza,
            seguridad y rapidez son nuestro compromiso.
          </p>
        </div>

        {/* Columna 2: Contacto Telefónico y Correo */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Contáctanos</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li className="flex items-center space-x-2">
              <PhoneIcon className="h-5 w-5 text-[#E31B23]" />
              <span>
                Fijo:{" "}
                <a href="tel:5107497" className="hover:text-[#FFAB91]">
                  5107497
                </a>
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <DevicePhoneMobileIcon className="h-5 w-5 text-[#E31B23]" />
              <span>
                Celular:{" "}
                <a href="tel:0990764732" className="hover:text-[#FFAB91]">
                  0990764732
                </a>
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <EnvelopeIcon className="h-5 w-5 text-[#E31B23]" />
              <span>
                Correo:{" "}
                <a
                  href="mailto:contacto@usavisaecuador.com"
                  className="hover:text-[#FFAB91]"
                >
                  contacto@usavisaecuador.com
                </a>
              </span>
            </li>
          </ul>
        </div>

        {/* Columna 3: Ubicaciones */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Ubicaciones</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li className="flex items-center space-x-2">
              <MapPinIcon className="h-5 w-5 text-[#0074D9]" />
              <span>Miami, EE UU</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPinIcon className="h-5 w-5 text-[#0074D9]" />
              <span>Quito, Ecuador</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPinIcon className="h-5 w-5 text-[#0074D9]" />
              <span>Bogotá, Colombia</span>
            </li>
          </ul>
        </div>

        {/* Columna 4: Redes Sociales */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Síguenos</h3>
          <div className="flex items-center space-x-6">
            {/* TikTok */}
            <Link
              href="https://www.tiktok.com/@usa_immigration_services?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-1 hover:scale-110 transition">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3046/3046123.png"
                  alt="TikTok"
                  className="h-6 w-6 filter brightness-0 invert"
                />
              </div>
            </Link>
            {/* Instagram */}
            <Link
              href="https://www.instagram.com/usa_immigration_servicess/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-1 hover:scale-110 transition">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                  alt="Instagram"
                  className="h-6 w-6 filter brightness-0 invert"
                />
              </div>
            </Link>
            {/* Facebook */}
            <Link
              href="https://www.facebook.com/share/1CbvonaJYq/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-1 hover:scale-110 transition">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  alt="Facebook"
                  className="h-6 w-6 filter brightness-0 invert"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-[#1A2748]">
        <div className="max-w-5xl mx-auto px-4 py-4 text-center text-gray-400 text-xs">
          © {new Date().getFullYear()} US Immigration Services. Todos los
          derechos reservados.
        </div>
      </div>
    </footer>
  );
}
