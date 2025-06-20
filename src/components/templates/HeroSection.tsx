"use client";

import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ShieldCheckIcon,
  AcademicCapIcon,
  ClockIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export function HeroSection() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 400], [0, 100]);

  const [showUS, setShowUS] = useState(true);
  useEffect(() => {
    const iv = setInterval(() => setShowUS((v) => !v), 10000);
    return () => clearInterval(iv);
  }, []);

  const backgrounds = {
    us: "/HeroBackgroundUS.png",
    ca: "/HeroBackgroundCanada.png",
  };
  const fade = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      {/* Cross-fade backgrounds */}
      <AnimatePresence>
        {showUS ? (
          <motion.div
            key="bg-us"
            className="absolute inset-0 bg-cover bg-center"
            style={{ y: yBg }}
            variants={fade}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1.5 }}
            style={{ backgroundImage: `url(${backgrounds.us})` } as any}
          />
        ) : (
          <motion.div
            key="bg-ca"
            className="absolute inset-0 bg-cover bg-center"
            style={{ y: yBg }}
            variants={fade}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1.5 }}
            style={{ backgroundImage: `url(${backgrounds.ca})` } as any}
          />
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-br from-[#041E42]/80 via-[#E31B23]/60 to-[#FFC72C]/80" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center h-full max-w-7xl mx-auto px-4">
        <div className="w-full lg:w-1/2 text-white space-y-6">
          <motion.h1
            className="text-4xl sm:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Tu Puerta de Entrada a los&nbsp;
            <span className="text-[#E31B23]">EE UU</span> y&nbsp;
            <span className="text-[#E31B23]">Canadá</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl max-w-md"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Servicios de inmigración profesionales, confiables y rápidos.
            <br />
            <span className="font-semibold">
              ¡Tu tranquilidad es nuestra prioridad!
            </span>
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              href="/catalogo?pais=usa"
              className="inline-block bg-[#041E42] text-white px-6 py-3 rounded-full hover:bg-[#E31B23] transition shadow-lg"
            >
              Visa EE UU
            </Link>
            <Link
              href="/catalogo?pais=canada"
              className="inline-block bg-[#041E42] text-white px-6 py-3 rounded-full hover:bg-[#E31B23] transition shadow-lg"
            >
              Visa Canadá
            </Link>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Link
              href="/solicitar"
              className="inline-flex items-center bg-[#E31B23] text-white px-6 py-3 rounded-full hover:bg-[#C91B1B] transition shadow-lg"
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
              Solicitar Ahora
            </Link>
          </motion.div>

          <motion.div
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="flex items-center bg-[#041E42]/50 p-4 rounded-lg space-x-3">
              <ShieldCheckIcon className="h-8 w-8 text-[#FFC72C]" />
              <span className="text-white font-medium">
                Asesoría 100% personalizada
              </span>
            </div>
            <div className="flex items-center bg-[#041E42]/50 p-4 rounded-lg space-x-3">
              <AcademicCapIcon className="h-8 w-8 text-[#FFC72C]" />
              <span className="text-white font-medium">
                +10 años de experiencia
              </span>
            </div>
            <div className="flex items-center bg-[#041E42]/50 p-4 rounded-lg space-x-3">
              <ClockIcon className="h-8 w-8 text-[#FFC72C]" />
              <span className="text-white font-medium">
                Proceso ágil y seguro
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        ></motion.div>
      </div>
    </section>
  );
}
