// src/components/organisms/Navbar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

export function Navbar() {
  const path = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img
              src="/logo_transparent.png"
              alt="VisaApp Logo"
              className="h-8 w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Menú Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className={`text-neutral-dark hover:text-primary transition-colors duration-200 font-medium ${
              path === "/" ? "text-primary font-semibold" : ""
            }`}
          >
            Inicio
          </Link>
          <Link
            href="/#servicios"
            className="text-neutral-dark hover:text-primary transition-colors duration-200 font-medium"
          >
            Servicios
          </Link>
          <Link
            href="/#acerca"
            className="text-neutral-dark hover:text-primary transition-colors duration-200 font-medium"
          >
            Acerca de
          </Link>
          <Link
            href="/#visas"
            className="text-neutral-dark hover:text-primary transition-colors duration-200 font-medium"
          >
            Visas
          </Link>
          <Link
            href="/#empresa"
            className="text-neutral-dark hover:text-primary transition-colors duration-200 font-medium"
          >
            Crear Empresa
          </Link>
          <Link
            href="/#testimonios"
            className="text-neutral-dark hover:text-primary transition-colors duration-200 font-medium"
          >
            Testimonios
          </Link>
          <Link
            href="/#contacto"
            className="text-neutral-dark hover:text-primary transition-colors duration-200 font-medium"
          >
            Contacto
          </Link>
        </nav>

        {/* Botón “Solicitar Ahora” */}
        <div className="hidden md:flex">
          <Link
            href="/solicitar"
            className="inline-flex items-center bg-accent-red text-white px-4 py-2 rounded-full hover:bg-accent-coral transition-all duration-200 shadow-lg"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5 mr-1" />
            Solicitar Ahora
          </Link>
        </div>

        {/* Menú Mobile (solo icono hamburguesa de ejemplo) */}
        <div className="md:hidden">
          <button className="text-neutral-dark hover:text-primary">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
