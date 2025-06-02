import "../styles/globals.css";
import { Navbar } from "../components/organisms/Navbar";
import { Footer } from "../components/organisms/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "VisaApp - Solicita tu visa USA o Canadá",
  description: "Agencia de visas. Solicita tu visa de manera fácil y segura.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-fg)]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
