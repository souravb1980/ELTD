import React, { useState } from 'react';

export const BjtLoadLineSim: React.FC = () => {
  const [vcc, setVcc] = useState<number>(12); // Vcc in Volts
  const [rc, setRc] = useState<number>(2.2); // Rc in kΩ
  const [re, setRe] = useState<number>(1.0); // Re in kΩ
  const [ibMicroA, setIbMicroA] = useState<number>(25); // Ib in μA
  const [beta, setBeta] = useState<number>(100); // β gain

  // Math
  const rTotalK = rc + re;
  const icSatMA = vcc / rTotalK; // Saturation IC in mA
  const icActiveMA = (beta * ibMicroA) / 1000; // Active IC in mA
  
  // Clamped at saturation
  const isSaturated = icActiveMA >= icSatMA;
  const icQ = isSaturated ? icSatMA : icActiveMA;
  const vceQ = isSaturated ? 0.2 : Math.max(0.2, vcc - icQ * rTotalK);

  // Small signal gain
  const ieQ = icQ + ibMicroA / 1000;
  const rePrime = ieQ > 0 ? 26 / ieQ : 26; // in ohms
  const av = - (rc * 1000) / rePrime;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-lg font-semibold text-slate-900">BJT DC Load Line & Q-Point Explorer</h3>
        <p className="text-sm text-slate-500">Calculate quiescent operating point Q(VceQ, IcQ) on the DC load line.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-3 text-xs">
          <div>
            <div className="flex justify-between text-slate-700 mb-1">
              <span>Supply Voltage (V<sub>CC</sub>):</span>
              <span className="font-mono font-bold text-slate-900">{vcc} V</span>
            </div>
            <input 
              type="range" min="5" max="24" step="1" value={vcc}
              onChange={(e) => setVcc(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-700 mb-1">
              <span>Collector Resistor (R<sub>C</sub>):</span>
              <span className="font-mono font-bold text-slate-900">{rc} kΩ</span>
            </div>
            <input 
              type="range" min="0.5" max="10" step="0.1" value={rc}
              onChange={(e) => setRc(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-700 mb-1">
              <span>Emitter Resistor (R<sub>E</sub>):</span>
              <span className="font-mono font-bold text-slate-900">{re} kΩ</span>
            </div>
            <input 
              type="range" min="0.1" max="5" step="0.1" value={re}
              onChange={(e) => setRe(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-700 mb-1">
              <span>Base Current (I<sub>B</sub>):</span>
              <span className="font-mono font-bold text-slate-900">{ibMicroA} μA</span>
            </div>
            <input 
              type="range" min="0" max="60" step="1" value={ibMicroA}
              onChange={(e) => setIbMicroA(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-700 mb-1">
              <span>Transistor Beta (β / h<sub>FE</sub>):</span>
              <span className="font-mono font-bold text-slate-900">{beta}</span>
            </div>
            <input 
              type="range" min="50" max="300" step="10" value={beta}
              onChange={(e) => setBeta(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        {/* Load line visualization & Q-point results */}
        <div className="space-y-4">
          {/* Graphical representation */}
          <div className="bg-slate-900 rounded-lg p-3 text-slate-100 relative">
            <svg viewBox="0 0 280 150" className="w-full h-36">
              {/* Axes */}
              <line x1="30" y1="120" x2="260" y2="120" stroke="#64748b" strokeWidth="1.5" />
              <line x1="30" y1="10" x2="30" y2="120" stroke="#64748b" strokeWidth="1.5" />
              <text x="250" y="135" fill="#94a3b8" fontSize="10">V<tspan baselineShift="sub" fontSize="75%">CE</tspan> (V)</text>
              <text x="10" y="20" fill="#94a3b8" fontSize="10">I<tspan baselineShift="sub" fontSize="75%">C</tspan> (mA)</text>

              {/* Load line: (30, ySat) to (xCutoff, 120) */}
              <line x1="30" y1="25" x2="240" y2="120" stroke="#38bdf8" strokeWidth="2" />
              <text x="35" y="25" fill="#38bdf8" fontSize="9">I<tspan baselineShift="sub" fontSize="75%">C(sat)</tspan> = {icSatMA.toFixed(1)}mA</text>
              <text x="200" y="115" fill="#38bdf8" fontSize="9">V<tspan baselineShift="sub" fontSize="75%">CC</tspan> = {vcc}V</text>

              {/* Q-Point dot */}
              {(() => {
                const fractionV = Math.min(1, Math.max(0, vceQ / vcc));
                const qX = 30 + fractionV * 210;
                const fractionI = Math.min(1, Math.max(0, icQ / icSatMA));
                const qY = 120 - fractionI * 95;
                return (
                  <>
                    <circle cx={qX} cy={qY} r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                    <text x={Math.min(210, qX + 8)} y={Math.max(30, qY - 4)} fill="#fca5a5" fontSize="9.5" fontWeight="bold">
                      Q ({vceQ.toFixed(1)}V, {icQ.toFixed(1)}mA)
                    </text>
                  </>
                );
              })()}
            </svg>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center text-xs">
            <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-lg">
              <span className="text-slate-600 block">Collector Current (I<sub>CQ</sub>)</span>
              <span className="text-lg font-mono font-bold text-blue-900">{icQ.toFixed(2)} mA</span>
            </div>
            <div className="p-2.5 bg-indigo-50 border border-indigo-200 rounded-lg">
              <span className="text-slate-600 block">Collector-Emitter (V<sub>CEQ</sub>)</span>
              <span className="text-lg font-mono font-bold text-indigo-900">{vceQ.toFixed(2)} V</span>
            </div>
          </div>

          <div className="p-2 bg-slate-50 border border-slate-200 rounded text-center text-xs">
            <span className="text-slate-500">Operating Region: </span>
            <span className={`font-bold ${isSaturated ? 'text-amber-600' : vceQ > vcc * 0.9 ? 'text-slate-600' : 'text-emerald-700'}`}>
              {isSaturated ? 'Saturation Region (Closed Switch)' : vceQ > vcc * 0.9 ? 'Cutoff Region (Open Switch)' : 'Active Linear Region (Undistorted Amplification)'}
            </span>
            <span className="text-slate-500 block text-[11px] mt-0.5">Approx AC Gain A<sub>v</sub> ≈ {av.toFixed(0)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
