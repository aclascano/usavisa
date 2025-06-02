"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLink } from "../molecules/NavLink";
import { Button } from "../atoms/Button";
import { useMobile } from "../../hooks/useMobile";
import { motion } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobile();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo animado */}
        <Link href="/" className="flex-shrink-0 flex items-center">
          <motion.div
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/logo.png"
              alt="VisaApp Logo"
              width={150}
              height={50}
              priority
            />
          </motion.div>
        </Link>

        {/* Menú Desktop */}
        {!isMobile && (
          <nav className="flex space-x-6">
            <NavLink href="/" label="Inicio" />
            <NavLink href="/visa-us" label="Visa EE UU" />
            <NavLink href="/visa-ca" label="Visa Canadá" />
            <NavLink href="/services" label="Servicios" />
            <NavLink href="/#contacto" label="Contacto" />
          </nav>
        )}

        {/* Botón CTA Desktop */}
        {!isMobile && (
          <div>
            <Button variant="secondary">Solicitar Ahora</Button>
          </div>
        )}

        {/* Toggle Mobile */}
        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutralDark hover:text-primary focus:outline-none text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        )}
      </div>

      {/* Off-Canvas Mobile Menu */}
      {isMobile && isOpen && (
        <motion.div
          className="absolute top-16 right-0 w-3/4 h-[calc(100vh-4rem)] bg-white shadow-lg"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.25 }}
        >
          <nav className="flex flex-col p-4 space-y-4">
            <NavLink href="/" label="Inicio" />
            <NavLink href="/visa-us" label="Visa EE UU" />
            <NavLink href="/visa-ca" label="Visa Canadá" />
            <NavLink href="/services" label="Servicios" />
            <NavLink href="/#contacto" label="Contacto" />
            <Button variant="secondary" className="mt-4">
              Solicitar Ahora
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
