"use client";

import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer className="bg-primary py-10 text-neutralLight">
      <div className="max-w-7xl mx-auto px-4 space-y-6 text-center">
        <p>© 2025 VisaApp. Todos los derechos reservados.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="mailto:contacto@usavisaecuador.com" className="text-accent hover:underline">
            contacto@usavisaecuador.com
          </Link>
          <Link href="tel:+13058427207" className="text-accent hover:underline">
            +1 305 842 7207
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-neutralLight">
          <span>Miami – USA: 400 Kingspoint Dr. Sunny Isles, FL</span>
          <span>Bogotá – Colombia</span>
          <span>Quito – Ecuador</span>
        </div>
        <p>Recibimos todos los medios de pago</p>
      </div>
    </footer>
  );
}
