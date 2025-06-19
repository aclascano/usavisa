"use client";

import { useEffect, useState } from "react";
import { VisaCard } from "../molecules/VisaCard";
import { VisaFilters } from "../molecules/VisaFilters";
import { VisaModal } from "../molecules/VisaModal";

export function VisaCatalogSection() {
  const [visas, setVisas] = useState([]);
  const [filter, setFilter] = useState({ country: "all", keyword: "" });
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("/visa_catalog.json")
      .then((res) => res.json())
      .then(setVisas);
  }, []);

  const filtered = visas.filter((visa) => {
    const matchCountry =
      filter.country === "all" || visa.country === filter.country;
    const matchKeyword =
      filter.keyword === "" ||
      visa.title.toLowerCase().includes(filter.keyword.toLowerCase()) ||
      visa.tags?.some((t) =>
        t.toLowerCase().includes(filter.keyword.toLowerCase())
      );
    return matchCountry && matchKeyword;
  });

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">
        Catálogo de Visas
      </h1>

      <VisaFilters setFilter={setFilter} />

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10">
        {filtered.map((visa) => (
          <VisaCard key={visa.id} visa={visa} onClick={() => setSelected(visa)} />
        ))}
      </div>

      {selected && (
        <VisaModal visa={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
