"use client";

import { useState } from "react";

export default function ConversorMedida() {
  const [metros, setMetros] = useState("");
  const [pes, setPes] = useState("");

  const metroParaPe = 3.28084; // 1 metro = 3.28084 pés

  const handleMetrosChange = (e) => {
    const value = e.target.value;
    setMetros(value);
    setPes(value ? (value * metroParaPe).toFixed(2) : "");
  };

  const handlePesChange = (e) => {
    const value = e.target.value;
    setPes(value);
    setMetros(value ? (value / metroParaPe).toFixed(2) : "");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-4">Conversor de Medida</h1>
      <div className="flex flex-col gap-4 w-64">
        <input
          type="number"
          placeholder="Metros (m)"
          value={metros}
          onChange={handleMetrosChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Pés (ft)"
          value={pes}
          onChange={handlePesChange}
          className="border p-2 rounded"
        />
      </div>
    </main>
  );
}
