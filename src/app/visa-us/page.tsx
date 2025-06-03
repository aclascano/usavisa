// src/app/visa-us/page.tsx
"use client";

import React from "react";
import { Navbar } from "../../components/organisms/Navbar";
import { Footer } from "../../components/organisms/Footer";
import { VisaUsWizard } from "../../components/templates/VisaUsWizard";

export default function VisaUsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-neutral-light min-h-screen">
        <VisaUsWizard />
      </main>
      <Footer />
    </>
  );
}
