"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary py-12 text-neutralLight">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Logo y descripción */}
        <div className="space-y-4">
          <img
            src="/logo.jpg"
            alt="VisaApp Logo"
            className="h-10 w-auto"
          />
          <p className="text-sm text-gray-200">
            En USAVISA te acompañamos en cada paso de tu proceso de visa y creación de empresa en USA.
            Confianza, seguridad y rapidez son nuestro compromiso.
          </p>
        </div>

        {/* Columna 2: Contacto */}
        <div className="space-y-2">
          <h4 className="text-lg font-semibold text-white">Contáctanos</h4>
          <a
            href="mailto:contacto@usavisaecuador.com"
            className="text-gray-200 hover:text-accent transition"
          >
            contacto@usavisaecuador.com
          </a>
          <a
            href="tel:+13058427207"
            className="text-gray-200 hover:text-accent transition"
          >
            +1 305 842 7207
          </a>
          <p className="text-gray-200">
            Miami, EE UU – Quito, Ecuador – Bogotá, Colombia
          </p>
        </div>

        {/* Columna 3: Enlaces rápidos */}
        <div className="space-y-2">
          <h4 className="text-lg font-semibold text-white">Enlaces</h4>
          <Link href="/visa-us" className="block text-gray-200 hover:text-accent transition">
            Visa EE UU
          </Link>
          <Link href="/visa-ca" className="block text-gray-200 hover:text-accent transition">
            Visa Canadá
          </Link>
          <Link href="/crear-empresa-us" className="block text-gray-200 hover:text-accent transition">
            Crear Empresa USA
          </Link>
          <Link href="/services" className="block text-gray-200 hover:text-accent transition">
            Servicios
          </Link>
          <Link href="/#contacto" className="block text-gray-200 hover:text-accent transition">
            Contacto
          </Link>
          <Link href="/privacy" className="block text-gray-200 hover:text-accent transition">
            Privacidad
          </Link>
          <Link href="/terms" className="block text-gray-200 hover:text-accent transition">
            Términos
          </Link>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700"></div>
      <div className="mt-6 text-center text-sm text-gray-300">
        © 2025 VisaApp. Todos los derechos reservados.
      </div>
    </footer>
  );
}
