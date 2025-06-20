"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PhoneIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 text-xs">
      <div
        className="
          max-w-6xl mx-auto py-6
          grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-y-0 md:gap-x-64 px-4 md:px-12
        "
      >
        {/* 1. Logo + frase + redes */}
        <div className="justify-self-end flex flex-col items-start space-y-1 ">
          <Image
            src="/LogoFooter.png"
            alt="Logo Footer"
            width={120}
            height={30}
            className="object-contain"
          />
          <p className="text-[#E31B23] font-semibold">
            Tu tranquilidad es nuestra prioridad
          </p>
          <div className="flex space-x-3">
            <Link
              href="https://www.tiktok.com/@usa_immigration_services"
              target="_blank"
              rel="noopener"
            >
              <img src="/tiktok.png" alt="TikTok" className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.instagram.com/usa_immigration_servicess/"
              target="_blank"
              rel="noopener"
            >
              <img src="/instagram.png" alt="Instagram" className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.facebook.com/share/1CbvonaJYq/"
              target="_blank"
              rel="noopener"
            >
              <img src="/facebook.png" alt="Facebook" className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* 2. About Us */}
        <div className="justify-self-center flex flex-col items-center justify-end">
          <h4 className="font-semibold uppercase mb-1">About Us</h4>
          <p className="text-center text-gray-600">
            Asesoría profesional en trámites migratorios para EE.UU. y Canadá.
          </p>
        </div>

        {/* 3. Contacto + Ubicaciones */}
        <div className="flex flex-col md:flex-col items-start md:justify-between w-full space-y-4 md:space-y-0">
          {/* Contacto */}
          <div>
            <h4 className="font-semibold uppercase mb-1">Contáctanos</h4>
            <ul className="space-y-1">
              <li className="flex items-center space-x-2">
                <PhoneIcon className="h-4 w-4 text-[#E31B23]" />
                <a href="tel:5107497" className="hover:text-[#E31B23]">
                  Fijo: 5107497
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <DevicePhoneMobileIcon className="h-4 w-4 text-[#E31B23]" />
                <a href="tel:0990764732" className="hover:text-[#E31B23]">
                  Celular: 0990764732
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <EnvelopeIcon className="h-4 w-4 text-[#E31B23]" />
                <a
                  href="mailto:contacto@usavisaecuador.com"
                  className="hover:text-[#E31B23]"
                >
                  contacto@usavisaecuador.com
                </a>
              </li>
              {/* … resto de Contacto */}
            </ul>
          </div>
          {/* Ubicaciones */}
          <div>
            <h4 className="font-semibold uppercase mb-1">Ubicaciones</h4>
            <ul className="space-y-1">
              <li className="flex items-center space-x-2">
                <MapPinIcon className="h-4 w-4 text-[#FFC72C]" />
                <span>Miami, EE.UU.</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPinIcon className="h-4 w-4 text-[#FFC72C]" />
                <span>Quito, Ecuador</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPinIcon className="h-4 w-4 text-[#FFC72C]" />
                <span>Bogotá, Colombia</span>
              </li>
              {/* … resto de Ubicaciones */}
            </ul>
          </div>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="text-center text-gray-400 py-2">
        © {new Date().getFullYear()} US Immigration Services. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
