"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { VisaCard } from "../molecules/VisaCard";
import { VisaFilters } from "../molecules/VisaFilters";
import { VisaModal } from "../molecules/VisaModal";

import { Visa } from "../../types/visa";
import { Filter } from "../../types/filter";

export function VisaCatalogSection() {
  // ✨ Aquí tipamos correctamente:
  const [visas, setVisas] = useState<Visa[]>([]);
  const [filter, setFilter] = useState<Filter>({
    country: "usa",
    keyword: "",
  });
  const [selected, setSelected] = useState<Visa | null>(null);

  useEffect(() => {
    fetch("/visa_catalog.json")
      .then((res) => res.json())
      .then((data: Visa[]) => setVisas(data));
  }, []);

  const countryAlias: Record<string, string[]> = {
    usa: ["usa", "ee.uu.", "eeuu", "estados unidos"],
    canada: ["canada", "canadá"],
  };

  const filtered = visas.filter((visa) => {
    // ahora TypeScript sabe que visa.title, visa.country y visa.tags existen
    const vc = visa.country.toLowerCase();
    const fc = filter.country.toLowerCase();
    const matchCountry =
      filter.country === "all" ||
      countryAlias[fc]?.some((alias) => vc.includes(alias)) ||
      vc.includes(fc);

    const kw = filter.keyword.toLowerCase();
    const matchKeyword =
      kw === "" ||
      visa.title.toLowerCase().includes(kw) ||
      visa.tags.some((t) => t.toLowerCase().includes(kw));

    return matchCountry && matchKeyword;
  });

  const getBackgroundImage = () => {
    if (filter.country === "usa") return "/CatalogBackgroundWhiteHouse.png";
    if (filter.country === "canada") return "/CatalogBackgroundCataratas.png";
    return "";
  };

  const fade = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={filter.country}
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          variants={fade}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            backgroundImage: `url(${getBackgroundImage()})`,
            backgroundAttachment: "fixed",
          }}
        />
      </AnimatePresence>

      <div
        className={`absolute inset-0 z-0 ${
          filter.country === "canada"
            ? "bg-gradient-to-br from-[#0F2027]/80 via-[#2C5364]/60 to-[#00c6ff]/70"
            : "bg-gradient-to-br from-[#041E42]/80 via-[#E31B23]/60 to-[#FFC72C]/70"
        }`}
      />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 py-14"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-6xl font-extrabold text-center mb-10 text-white drop-shadow">
          Catálogo de Visas
        </h1>

        <div className="flex justify-center space-x-6 mb-6">
          <button
            onClick={() => setFilter((p) => ({ ...p, country: "usa" }))}
            className={`px-6 py-2 rounded-full font-semibold shadow-lg transition-all ${
              filter.country === "usa"
                ? "bg-[#041E42] text-white"
                : "bg-white text-[#041E42] hover:bg-[#E31B23] hover:text-white"
            }`}
          >
            Visa EE UU
          </button>
          <button
            onClick={() => setFilter((p) => ({ ...p, country: "canada" }))}
            className={`px-6 py-2 rounded-full font-semibold shadow-lg transition-all ${
              filter.country === "canada"
                ? "bg-[#041E42] text-white"
                : "bg-white text-[#041E42] hover:bg-[#2C5364] hover:text-white"
            }`}
          >
            Visa Canadá
          </button>
        </div>

        <VisaFilters setFilter={setFilter} />

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10">
          {filtered.map((visa) => (
            <VisaCard
              key={visa.id}
              visa={visa}
              onClick={() => setSelected(visa)}
            />
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <VisaModal visa={selected} onClose={() => setSelected(null)} />
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
