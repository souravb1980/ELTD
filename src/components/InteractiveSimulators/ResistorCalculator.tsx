import React, { useState } from 'react';

export const ResistorCalculator: React.FC = () => {
  const [tab, setTab] = useState<'impedance' | 'combinations' | 'transformer' | 'color_code'>('impedance');

  // Series & Parallel Component States
  const [r1, setR1] = useState<number>(100);
  const [r2, setR2] = useState<number>(200);
  const [c1, setC1] = useState<number>(10); // μF
  const [c2, setC2] = useState<number>(20); // μF
  const [l1, setL1] = useState<number>(50); // mH
  const [l2, setL2] = useState<number>(50); // mH

  // Impedance RLC States
  const [rlcR, setRlcR] = useState<number>(50); // Ω
  const [rlcL, setRlcL] = useState<number>(100); // mH
  const [rlcC, setRlcC] = useState<number>(10); // μF
  const [freq, setFreq] = useState<number>(50); // Hz

  // Transformer States
  const [vp, setVp] = useState<number>(230); // Volts Primary
  const [np, setNp] = useState<number>(1000); // Turns Primary
  const [ns, setNs] = useState<number>(100); // Turns Secondary

  // Math Calculations:
  // 1. Series/Parallel Resistors
  const rSeries = r1 + r2;
  const rParallel = (r1 * r2) / ((r1 + r2) || 1);

  // 2. Series/Parallel Capacitors
  const cSeries = (c1 * c2) / ((c1 + c2) || 1);
  const cParallel = c1 + c2;

  // 3. Series/Parallel Inductors
  const lSeries = l1 + l2;
  const lParallel = (l1 * l2) / ((l1 + l2) || 1);

  // 4. Impedance RLC
  const omega = 2 * Math.PI * (freq || 1);
  const xl = omega * (rlcL * 1e-3);
  const xc = 1 / (omega * (rlcC * 1e-6));
  const netReactance = xl - xc;
  const zSeries = Math.sqrt(Math.pow(rlcR, 2) + Math.pow(netReactance, 2));
  const phaseAngleDeg = (Math.atan2(netReactance, rlcR) * 180) / Math.PI;
  const powerFactor = Math.cos((phaseAngleDeg * Math.PI) / 180);
  // Resonance frequency f0 = 1 / (2*pi*sqrt(L*C))
  const fResonance = 1 / (2 * Math.PI * Math.sqrt((rlcL * 1e-3) * (rlcC * 1e-6)));

  // 5. Transformer: Vs = Vp * (Ns / Np)
  const vs = vp * (ns / (np || 1));
  const turnsRatio = ns / (np || 1);
  const isStepUp = ns > np;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-lg font-semibold text-slate-900">Basic Circuit Components & Impedance Laboratory</h3>
        <p className="text-sm text-slate-500">
          Calculate Series/Parallel equivalent values (R, L, C), RLC complex impedance (Z = R + jX), and Transformer turn ratios.
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="flex flex-wrap gap-2 text-xs font-semibold">
        <button
          onClick={() => setTab('impedance')}
          className={`px-3 py-1.5 rounded-lg transition-colors ${tab === 'impedance' ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
        >
          1. Equivalent Impedance (Z = R + jX)
        </button>
        <button
          onClick={() => setTab('combinations')}
          className={`px-3 py-1.5 rounded-lg transition-colors ${tab === 'combinations' ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
        >
          2. Series & Parallel Combinations (R, L, C)
        </button>
        <button
          onClick={() => setTab('transformer')}
          className={`px-3 py-1.5 rounded-lg transition-colors ${tab === 'transformer' ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
        >
          3. Transformer (Step-Up / Step-Down)
        </button>
      </div>

      {/* 1. IMPEDANCE TAB */}
      {tab === 'impedance' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in">
          {/* Sliders */}
          <div className="space-y-4 text-xs">
            <div>
              <div className="flex justify-between text-slate-700 mb-1">
                <span>Resistance (R):</span>
                <span className="font-mono font-bold text-slate-900">{rlcR} Ω</span>
              </div>
              <input 
                type="range" min="1" max="200" step="1" value={rlcR}
                onChange={(e) => setRlcR(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-700 mb-1">
                <span>Inductance (L):</span>
                <span className="font-mono font-bold text-slate-900">{rlcL} mH</span>
              </div>
              <input 
                type="range" min="5" max="500" step="5" value={rlcL}
                onChange={(e) => setRlcL(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-700 mb-1">
                <span>Capacitance (C):</span>
                <span className="font-mono font-bold text-slate-900">{rlcC} μF</span>
              </div>
              <input 
                type="range" min="0.5" max="100" step="0.5" value={rlcC}
                onChange={(e) => setRlcC(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-700 mb-1">
                <span>Frequency (f):</span>
                <span className="font-mono font-bold text-slate-900">{freq} Hz</span>
              </div>
              <input 
                type="range" min="10" max="500" step="5" value={freq}
                onChange={(e) => setFreq(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-900 text-xs font-mono">
              Impedance: Z = {rlcR} + j({netReactance.toFixed(1)}) Ω
            </div>
          </div>

          {/* Results Output */}
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <span className="text-xs text-blue-700 block">Total Impedance |Z|</span>
                <span className="text-2xl font-mono font-bold text-blue-950">{zSeries.toFixed(1)} Ω</span>
                <span className="text-[10px] text-slate-500 block">|Z| = √(R² + (XL-Xc)²)</span>
              </div>
              <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
                <span className="text-xs text-indigo-700 block">Phase Angle (θ)</span>
                <span className="text-2xl font-mono font-bold text-indigo-950">{phaseAngleDeg.toFixed(1)}°</span>
                <span className="text-[10px] text-slate-500 block">
                  {phaseAngleDeg > 0 ? 'Inductive (Current lags)' : phaseAngleDeg < 0 ? 'Capacitive (Current leads)' : 'In Phase (Resistive)'}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-center text-xs">
              <div className="p-2.5 bg-purple-50 border border-purple-200 rounded-lg">
                <span className="text-purple-800 block">Inductive XL</span>
                <span className="text-base font-mono font-bold text-purple-950">{xl.toFixed(1)} Ω</span>
                <span className="text-[10px] text-slate-500">2πfL</span>
              </div>
              <div className="p-2.5 bg-sky-50 border border-sky-200 rounded-lg">
                <span className="text-sky-800 block">Capacitive Xc</span>
                <span className="text-base font-mono font-bold text-sky-950">{xc.toFixed(1)} Ω</span>
                <span className="text-[10px] text-slate-500">1/(2πfC)</span>
              </div>
            </div>

            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-amber-900 font-semibold">Resonant Frequency (f₀):</span>
                <span className="font-mono font-bold text-amber-950">{fResonance.toFixed(1)} Hz</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-900 font-semibold">Circuit Power Factor (cos θ):</span>
                <span className="font-mono font-bold text-amber-950">{powerFactor.toFixed(3)}</span>
              </div>
              <p className="text-[11px] text-amber-800 pt-1 border-t border-amber-200">
                At resonance (f = {fResonance.toFixed(1)} Hz), XL = Xc, impedance drops to pure resistance R = {rlcR} Ω, and current reaches its maximum.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 2. SERIES & PARALLEL COMBINATIONS TAB */}
      {tab === 'combinations' && (
        <div className="space-y-6 animate-in fade-in text-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Resistors */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <span className="font-bold text-slate-900 text-sm block">1. Resistors (Unit: Ω)</span>
              <div>
                <label className="text-slate-600 block mb-1">R1: {r1} Ω</label>
                <input type="range" min="10" max="500" value={r1} onChange={e => setR1(Number(e.target.value))} className="w-full" />
              </div>
              <div>
                <label className="text-slate-600 block mb-1">R2: {r2} Ω</label>
                <input type="range" min="10" max="500" value={r2} onChange={e => setR2(Number(e.target.value))} className="w-full" />
              </div>

              <div className="space-y-1.5 pt-2 border-t border-slate-200 font-mono">
                <div className="p-2 bg-blue-100/60 rounded flex justify-between">
                  <span className="text-blue-900">Series (R1+R2):</span>
                  <span className="font-bold text-blue-950">{rSeries} Ω</span>
                </div>
                <div className="p-2 bg-blue-100/60 rounded flex justify-between">
                  <span className="text-blue-900">Parallel (R1||R2):</span>
                  <span className="font-bold text-blue-950">{rParallel.toFixed(1)} Ω</span>
                </div>
              </div>
            </div>

            {/* Capacitors */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <span className="font-bold text-slate-900 text-sm block">2. Capacitors (Unit: μF)</span>
              <div>
                <label className="text-slate-600 block mb-1">C1: {c1} μF</label>
                <input type="range" min="1" max="100" value={c1} onChange={e => setC1(Number(e.target.value))} className="w-full" />
              </div>
              <div>
                <label className="text-slate-600 block mb-1">C2: {c2} μF</label>
                <input type="range" min="1" max="100" value={c2} onChange={e => setC2(Number(e.target.value))} className="w-full" />
              </div>

              <div className="space-y-1.5 pt-2 border-t border-slate-200 font-mono">
                <div className="p-2 bg-sky-100/60 rounded flex justify-between">
                  <span className="text-sky-900">Series (C1·C2/(C1+C2)):</span>
                  <span className="font-bold text-sky-950">{cSeries.toFixed(1)} μF</span>
                </div>
                <div className="p-2 bg-sky-100/60 rounded flex justify-between">
                  <span className="text-sky-900">Parallel (C1+C2):</span>
                  <span className="font-bold text-sky-950">{cParallel} μF</span>
                </div>
              </div>
            </div>

            {/* Inductors */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <span className="font-bold text-slate-900 text-sm block">3. Inductors (Unit: mH)</span>
              <div>
                <label className="text-slate-600 block mb-1">L1: {l1} mH</label>
                <input type="range" min="5" max="200" value={l1} onChange={e => setL1(Number(e.target.value))} className="w-full" />
              </div>
              <div>
                <label className="text-slate-600 block mb-1">L2: {l2} mH</label>
                <input type="range" min="5" max="200" value={l2} onChange={e => setL2(Number(e.target.value))} className="w-full" />
              </div>

              <div className="space-y-1.5 pt-2 border-t border-slate-200 font-mono">
                <div className="p-2 bg-purple-100/60 rounded flex justify-between">
                  <span className="text-purple-900">Series (L1+L2):</span>
                  <span className="font-bold text-purple-950">{lSeries} mH</span>
                </div>
                <div className="p-2 bg-purple-100/60 rounded flex justify-between">
                  <span className="text-purple-900">Parallel (L1||L2):</span>
                  <span className="font-bold text-purple-950">{lParallel.toFixed(1)} mH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. TRANSFORMER TAB */}
      {tab === 'transformer' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in text-xs">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-slate-700 mb-1">
                <span>Primary Voltage (Vp):</span>
                <span className="font-mono font-bold text-slate-900">{vp} V (AC)</span>
              </div>
              <input 
                type="range" min="12" max="440" step="2" value={vp}
                onChange={(e) => setVp(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-700 mb-1">
                <span>Primary Turns (Np):</span>
                <span className="font-mono font-bold text-slate-900">{np} turns</span>
              </div>
              <input 
                type="range" min="50" max="2000" step="50" value={np}
                onChange={(e) => setNp(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-700 mb-1">
                <span>Secondary Turns (Ns):</span>
                <span className="font-mono font-bold text-slate-900">{ns} turns</span>
              </div>
              <input 
                type="range" min="10" max="2000" step="20" value={ns}
                onChange={(e) => setNs(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-1">
              <span className="text-xs text-emerald-800 font-semibold block">
                {isStepUp ? 'Step-Up Transformer (Ns > Np)' : 'Step-Down Transformer (Ns < Np)'}
              </span>
              <span className="text-3xl font-mono font-bold text-emerald-950 block">
                Vs = {vs.toFixed(1)} V
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                Turns Ratio k = Ns / Np = {turnsRatio.toFixed(3)}
              </span>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5 text-slate-700">
              <div className="font-bold text-slate-900 text-xs">Why Transformers are Required:</div>
              <ul className="list-disc list-inside space-y-1 text-[11px] text-slate-600">
                <li><strong>Voltage Stepping:</strong> Step down 230V AC mains to low safe voltages (5V/12V) for electronic power supplies, or step up for transmission.</li>
                <li><strong>Galvanic Isolation:</strong> Magnetically transfers power across core without electrical connection, protecting users from electric shocks.</li>
                <li><strong>Impedance Matching:</strong> Matches source impedance to load impedance: Zp = (Np / Ns)² · Zs for maximum power transfer.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
