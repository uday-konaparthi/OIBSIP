import React, { useState, useMemo } from "react";
import Header from "./components/Header";

export default function TemperatureConverter() {
  const [unit, setUnit] = useState("C");
  const [value, setValue] = useState("0");

  const { out1, out2 } = useMemo(() => {
    const raw = parseFloat(value);
    const val = isNaN(raw) ? 0 : raw;
    let c, f, k;

    if (unit === "C") {
      c = val;
      f = (val * 9) / 5 + 32;
      k = val + 273.15;
      return { out1: `${f.toFixed(2)} °F`, out2: `${k.toFixed(2)} K` };
    } else if (unit === "F") {
      c = ((val - 32) * 5) / 9;
      k = c + 273.15;
      return { out1: `${c.toFixed(2)} °C`, out2: `${k.toFixed(2)} K` };
    } else {
      c = val - 273.15;
      f = (c * 9) / 5 + 32;
      return { out1: `${c.toFixed(2)} °C`, out2: `${f.toFixed(2)} °F` };
    }
  }, [unit, value]);

  const labels = { C: "INPUT (°C)", F: "INPUT (°F)", K: "INPUT (K)" };

  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center p-6 font-serif">
      <div className="w-full max-w-md bg-stone-200 border border-stone-300 rounded-2xl shadow-2xl px-7 pt-7 pb-8">

        {/* Plate */}
        <Header />

        {/* Readout */}
        <div className="bg-neutral-900 rounded-xl px-5 py-6 mb-6 shadow-inner">
          <div className="font-mono text-[11px] text-green-400/80 tracking-widest mb-1.5">
            CONVERTED READING
          </div>
          <div className="font-mono text-3xl text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]">
            {out1}
          </div>
          <div className="font-mono text-xl text-green-400 mt-1 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]">
            {out2}
          </div>
        </div>

        {/* Unit dial */}
        <div className="flex gap-2.5 mb-5">
          {["C", "F", "K"].map((u) => (
            <button
              key={u}
              onClick={() => setUnit(u)}
              className={`flex-1 font-mono text-sm py-2.5 rounded-lg border transition ${
                unit === u
                  ? "bg-amber-700 text-amber-50 border-amber-700"
                  : "bg-transparent text-amber-800 border-amber-700 hover:bg-amber-700/10"
              }`}
            >
              {u === "C" ? "°C IN" : u === "F" ? "°F IN" : "K IN"}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="flex items-center justify-between bg-stone-100 border border-stone-300 rounded-lg px-4 py-3 ring-2 ring-amber-700/10">
          <label className="font-mono text-sm text-stone-500">{labels[unit]}</label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-32 text-right font-mono text-lg text-stone-800 bg-transparent border-b border-amber-700 outline-none px-1"
          />
        </div>

        <div className="text-center font-mono text-[11px] text-stone-500 tracking-wide mt-6">
          OIB-SIP · WEB DEVELOPMENT · LEVEL 1 TASK 3
        </div>
      </div>
    </div>
  );
}