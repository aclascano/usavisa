// src/app/visa-procesos/page.tsx
import React from "react";
import { Navbar } from "../../components/organisms/Navbar";
import { Footer } from "../../components/organisms/Footer";
import { ProcesosUsaWizard } from "@/components/templates/ProcesosUsaWizard";

export default function ProcesosUsaPage() {
  return (
    <>
      <main className="pt-20 bg-gray-50 min-h-screen">
        <ProcesosUsaWizard />
      </main>
    </>
  );
}
