import React, { useState } from 'react';

export const FetTransferCurveSim: React.FC = () => {
  const [idss, setIdss] = useState<number>(10); // IDSS in mA
  const [vp, setVp] = useState<number>(-4); // VP in Volts
  const [vgs, setVgs] = useState<number>(-1.5); // VGS in Volts

  // Shockley's Equation: ID = IDSS * (1 - VGS/VP)^2
  // Note: VGS is between 0 and VP (which is negative for N-channel JFET)
  const isCutoff = vgs <= vp;
  const idCalc = isCutoff ? 0 : idss * Math.pow(1 - vgs / vp, 2);
  const gm0 = (2 * idss) / Math.abs(vp); // in mS
  const gm = isCutoff ? 0 : gm0 * (1 - vgs / vp);

  // Generate curve coordinates
  const points = [];
  for (let v = vp; v <= 0; v += 0.2) {
    const cur = idss * Math.pow(1 - v / vp, 2);
    // map v [vp, 0] to x [30, 240]
    const x = 30 + ((v - vp) / (0 - vp)) * 210;
    // map cur [0, idss] to y [120, 20]
    const y = 120 - (cur / idss) * 100;
    points.push(`${x},${y}`);
  }
  const pathD = `M ${points.join(' L ')}`;

  // Current point
  const currentX = 30 + ((Math.max(vp, Math.min(0, vgs)) - vp) / (0 - vp)) * 210;
  const currentY = 120 - (idCalc / idss) * 100;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-lg font-semibold text-slate-900">JFET Shockley Transfer Curve Simulator</h3>
        <p className="text-sm text-slate-500">Explore Shockley's square-law drain current equation ID = IDSS · (1 - VGS/VP)².</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sliders */}
        <div className="space-y-4 text-xs">
          <div>
            <div className="flex justify-between text-slate-700 mb-1">
              <span>Saturation Drain Current (IDSS):</span>
              <span className="font-mono font-bold text-slate-900">{idss} mA</span>
            </div>
            <input 
              type="range" min="4" max="20" step="1" value={idss}
              onChange={(e) => setIdss(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-700 mb-1">
              <span>Pinch-off Voltage (VP):</span>
              <span className="font-mono font-bold text-slate-900">{vp} V</span>
            </div>
            <input 
              type="range" min="-8" max="-2" step="0.5" value={vp}
              onChange={(e) => {
                const newVp = Number(e.target.value);
                setVp(newVp);
                if (vgs < newVp) setVgs(newVp);
              }}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-700 mb-1">
              <span>Gate-Source Voltage (VGS):</span>
              <span className="font-mono font-bold text-slate-900">{vgs} V</span>
            </div>
            <input 
              type="range" min={vp} max={0} step="0.1" value={vgs}
              onChange={(e) => setVgs(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 text-center">
            <div className="p-3 bg-sky-50 border border-sky-200 rounded-lg">
              <span className="text-xs text-sky-800 block">Drain Current ID</span>
              <span className="text-xl font-mono font-bold text-sky-950">{idCalc.toFixed(2)} mA</span>
            </div>
            <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
              <span className="text-xs text-purple-800 block">Transconductance gm</span>
              <span className="text-xl font-mono font-bold text-purple-950">{gm.toFixed(2)} mS</span>
            </div>
          </div>
        </div>

        {/* Transfer curve plot */}
        <div className="space-y-2">
          <div className="bg-slate-900 rounded-lg p-3 text-slate-100">
            <svg viewBox="0 0 280 150" className="w-full h-40">
              {/* Axes */}
              <line x1="30" y1="120" x2="260" y2="120" stroke="#64748b" strokeWidth="1.5" />
              <line x1="240" y1="10" x2="240" y2="120" stroke="#64748b" strokeWidth="1.5" />
              
              <text x="30" y="135" fill="#94a3b8" fontSize="9">VP ({vp}V)</text>
              <text x="235" y="135" fill="#94a3b8" fontSize="9">0V</text>
              <text x="245" y="20" fill="#94a3b8" fontSize="9">IDSS ({idss}mA)</text>
              <text x="130" y="142" textAnchor="middle" fill="#94a3b8" fontSize="10">VGS (Negative Bias)</text>

              {/* Curve */}
              <path d={pathD} fill="none" stroke="#38bdf8" strokeWidth="2.5" />

              {/* Operating Point */}
              <circle cx={currentX} cy={currentY} r="5" fill="#f43f5e" stroke="#ffffff" strokeWidth="1.5" />
              <text x={Math.min(180, currentX - 20)} y={Math.max(30, currentY - 8)} fill="#fda4af" fontSize="10" fontWeight="bold">
                ({vgs.toFixed(1)}V, {idCalc.toFixed(1)}mA)
              </text>
            </svg>
          </div>

          <div className="p-2.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-600">
            <strong>Key takeaway:</strong> Notice how the curve is parabolic (square-law). At VGS = 0V, current is maximum (IDSS). As VGS becomes more negative, the channel is pinched off until current drops to zero at VP.
          </div>
        </div>
      </div>
    </div>
  );
};
