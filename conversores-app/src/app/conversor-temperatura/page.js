"use client";

import { useState } from "react";

export default function ConversorTemperatura() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(value ? ((value * 9) / 5 + 32).toFixed(2) : "");
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(value ? (((value - 32) * 5) / 9).toFixed(2) : "");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-4">Conversor de Temperatura</h1>
      <div className="flex flex-col gap-4 w-64">
        <input
          type="number"
          placeholder="Temperatura em °C"
          value={celsius}
          onChange={handleCelsiusChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Temperatura em °F"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          className="border p-2 rounded"
        />
      </div>
    </main>
  );
}
