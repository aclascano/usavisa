// src/components/organisms/Navbar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Acerca de", href: "/#acerca" },
  { label: "Visas", href: "/#visas" },
  { label: "Crear Empresa", href: "/#empresa" },
  { label: "Testimonios", href: "/#testimonios" },
  { label: "Contacto", href: "/#contacto" },
];

export function Navbar() {
  const path = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img
              src="/logo.png"
              alt="VisaApp Logo"
              className="h-24 w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Menú Desktop */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => {
            const isActive = path === item.href;
            return (
              <Link key={item.href} href={item.href} className="relative group">
                <motion.span
                  className={`font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#E31B23]"
                      : "text-gray-700 hover:text-[#E31B23]"
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.span>
                {/* Underline animado */}
                <motion.div
                  className="absolute left-0 bottom-[-2px] h-0.5 bg-[#E31B23]"
                  initial={{ width: 0 }}
                  animate={{ width: isActive ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Botón “Solicitar Ahora” */}
        <div className="hidden md:flex">
          <Link
            href="/solicitar"
            className="
              inline-flex items-center 
              bg-[#E31B23] text-white 
              px-4 py-2 rounded-full 
              hover:bg-[#C91B1B] 
              transition-all duration-200 shadow-lg
            "
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5 mr-1" />
            Solicitar Ahora
          </Link>
        </div>

        {/* Menú Mobile (ícono hamburguesa simple) */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-[#E31B23] transition-colors duration-200">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
