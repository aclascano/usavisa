import React from "react";
import { Button } from "../atoms/Button";

export function FormLinksSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-primary)]">
          DILIGÊNCIA AQUÍ TU FORMULARIO Y EMPIEZA EL PROCESO DE VISADO
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <p className="mb-2 font-medium">Formulario Visa Estados Unidos</p>
            <Button variant="primary">Ir al Formulario USA</Button>
          </div>
          <div className="flex flex-col items-center">
            <p className="mb-2 font-medium">Formulario Procesos USA</p>
            <Button variant="primary">Ir a Procesos USA</Button>
          </div>
          <div className="flex flex-col items-center">
            <p className="mb-2 font-medium">Formulario Canadá</p>
            <Button variant="primary">Ir al Formulario Canadá</Button>
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          *Si tienes alguna duda con el diligenciamiento del formulario no dudes en contactar a tu asesora.
        </p>
      </div>
    </section>
  );
}
