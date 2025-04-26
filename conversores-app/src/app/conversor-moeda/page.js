"use client";

import { useState } from "react";

export default function ConversorMoeda() {
  const [real, setReal] = useState("");
  const [dolar, setDolar] = useState("");

  const cotacao = 5.10; // fixo, como pedido

  const handleRealChange = (e) => {
    const value = e.target.value;
    setReal(value);
    setDolar(value ? (value / cotacao).toFixed(2) : "");
  };

  const handleDolarChange = (e) => {
    const value = e.target.value;
    setDolar(value);
    setReal(value ? (value * cotacao).toFixed(2) : "");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-4">Conversor de Moeda</h1>
      <div className="flex flex-col gap-4 w-64">
        <input
          type="number"
          placeholder="Valor em Real (R$)"
          value={real}
          onChange={handleRealChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Valor em Dólar (US$)"
          value={dolar}
          onChange={handleDolarChange}
          className="border p-2 rounded"
        />
      </div>
    </main>
  );
}
