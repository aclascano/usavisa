// src/components/organisms/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Acerca de", href: "/#acerca" },
  { label: "Visas", href: "/#visas" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Crear Empresa", href: "/#empresa" },
  { label: "Contacto", href: "/#contacto" },
];

export function Navbar() {
  const path = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <AnimatePresence>
            {isScrolled && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Link href="/">
                  <img
                    src="/logo.png"
                    alt="VisaApp Logo"
                    className="h-24 w-auto cursor-pointer"
                  />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Menú Desktop */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => {
            const isActive = path === item.href;
            // color blanco si no scrolled, gris/rojo si scrolled
            const baseColor = isScrolled
              ? isActive
                ? "text-[#E31B23]"
                : "text-gray-700 hover:text-[#E31B23]"
              : isActive
              ? "text-white"
              : "text-white/80 hover:text-white";
            return (
              <Link key={item.href} href={item.href} className="relative py-3">
                {/* Label */}
                <span
                  className={`font-medium transition-colors duration-200 ${baseColor}`}
                >
                  {item.label}
                </span>
                {/* Underline animado */}
                <motion.div
                  className="absolute left-0 bottom-0 h-0.5 bg-[#E31B23]"
                  initial={{ width: 0 }}
                  animate={{ width: isActive ? "100%" : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Botón “Solicitar Ahora” */}
        <div className="hidden md:flex">
          <AnimatePresence>
            {isScrolled && (
              <motion.div
                key="solicitar-btn"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Menú Mobile */}
        <div className="md:hidden">
          <button className={isScrolled ? "text-gray-700" : "text-white"}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
