"use client";

import { useEffect, useState } from "react";
import { VisaCard } from "../molecules/VisaCard";
import { VisaFilters } from "../molecules/VisaFilters";
import { VisaModal } from "../molecules/VisaModal";
import { AnimatePresence, motion } from "framer-motion";

export function VisaCatalogSection() {
  const [visas, setVisas] = useState([]);
  const [filter, setFilter] = useState({ country: "usa", keyword: "" });
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("/visa_catalog.json")
      .then((res) => res.json())
      .then(setVisas);
  }, []);

  // Mapeamos alias del filtro a lo que realmente hay en el JSON
  const countryAlias = {
    usa: ["usa", "ee.uu.", "eeuu", "estados unidos"],
    canada: ["canada", "canadá"],
  };

  const filtered = visas.filter((visa) => {
    const visaCountry = visa.country.toLowerCase();
    const activeFilter = filter.country.toLowerCase();

    const matchCountry =
      filter.country === "all" ||
      (countryAlias[activeFilter]?.some((alias) =>
        visaCountry.includes(alias)
      ) ??
        visaCountry.includes(activeFilter));

    const keyword = filter.keyword.toLowerCase();
    const matchKeyword =
      keyword === "" ||
      visa.title.toLowerCase().includes(keyword) ||
      visa.tags?.some((t) => t.toLowerCase().includes(keyword));

    return matchCountry && matchKeyword;
  });

  const getBackgroundImage = () => {
    const c = filter.country.toLowerCase();
    if (c === "usa") return "/CatalogBackgroundWhiteHouse.png";
    if (c === "canada") return "/CatalogBackgrounCataratas.png";
    return null;
  };

  const fade = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      {/* Fondo animado */}
      <AnimatePresence mode="wait">
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

      {filter.country === "canada" ? (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2027]/80 via-[#2C5364]/60 to-[#00c6ff]/70 z-0" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#041E42]/80 via-[#E31B23]/60 to-[#FFC72C]/70 z-0" />
      )}

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-14">
        <h1 className="text-6xl font-extrabold text-center mb-10 text-white drop-shadow">
          Catálogo de Visas
        </h1>

        {/* Botones para país */}
        <div className="flex justify-center space-x-6 mb-6">
          <button
            onClick={() => setFilter((prev) => ({ ...prev, country: "usa" }))}
            className={`px-6 py-2 rounded-full text-white font-semibold shadow-lg transition-all ${
              filter.country === "usa"
                ? "bg-[#041E42]"
                : "bg-white text-[#041E42] hover:bg-[#E31B23] hover:text-white"
            }`}
          >
            Visa EE UU
          </button>
          <button
            onClick={() =>
              setFilter((prev) => ({ ...prev, country: "canada" }))
            }
            className={`px-6 py-2 rounded-full text-white font-semibold shadow-lg transition-all ${
              filter.country === "canada"
                ? "bg-[#041E42]"
                : "bg-white text-[#041E42] hover:bg-[#E31B23] hover:text-white"
            }`}
          >
            Visa Canadá
          </button>
        </div>

        {/* Input de búsqueda */}
        <VisaFilters setFilter={setFilter} />

        {/* Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10">
          {filtered.map((visa) => (
            <VisaCard
              key={visa.id}
              visa={visa}
              onClick={() => setSelected(visa)}
            />
          ))}
        </div>

        {/* Modal de visa */}
        {selected && (
          <VisaModal visa={selected} onClose={() => setSelected(null)} />
        )}
      </div>
    </section>
  );
}
