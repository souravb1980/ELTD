import React, { useState } from 'react';

export const DiodeRectifierSim: React.FC = () => {
  const [rectifierType, setRectifierType] = useState<'half' | 'full' | 'bridge'>('bridge');
  const [vmInput, setVmInput] = useState<number>(12); // peak AC voltage Vm
  const [hasFilter, setHasFilter] = useState<boolean>(true);
  const [filterCap, setFilterCap] = useState<number>(100); // μF
  const [loadResistance, setLoadResistance] = useState<number>(1000); // 1kΩ

  // Math
  const mainsFreq = 50; // 50 Hz
  const rippleFreq = rectifierType === 'half' ? mainsFreq : 2 * mainsFreq;
  
  // Vdc without filter
  let vdcUnfiltered = 0;
  let efficiency = 0;
  let rippleFactorUnfiltered = 0;
  let piv = 0;

  if (rectifierType === 'half') {
    vdcUnfiltered = vmInput / Math.PI;
    efficiency = 40.6;
    rippleFactorUnfiltered = 1.21;
    piv = vmInput;
  } else if (rectifierType === 'full') {
    vdcUnfiltered = (2 * vmInput) / Math.PI;
    efficiency = 81.2;
    rippleFactorUnfiltered = 0.482;
    piv = 2 * vmInput;
  } else {
    // Bridge
    vdcUnfiltered = (2 * (vmInput - 1.4)) / Math.PI; // subtracting 2 diode drops (1.4V)
    if (vdcUnfiltered < 0) vdcUnfiltered = 0;
    efficiency = 81.2;
    rippleFactorUnfiltered = 0.482;
    piv = vmInput;
  }

  // Ripple with capacitor filter
  // Vr(p-p) ≈ Idc / (f_r · C) = Vdc / (f_r · C · RL)
  const capFarads = (filterCap || 1) * 1e-6;
  const vrPeakToPeak = vdcUnfiltered / (rippleFreq * capFarads * loadResistance);
  const vdcFiltered = Math.max(0, vmInput - (rectifierType === 'bridge' ? 1.4 : 0.7) - vrPeakToPeak / 2);
  const rippleFactorFiltered = vrPeakToPeak / (2 * Math.sqrt(3) * (vdcFiltered || 1));

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-lg font-semibold text-slate-900">Rectifier & Power Supply Simulator</h3>
        <p className="text-sm text-slate-500">Compare Half-Wave, Center-Tapped Full-Wave, and Bridge Rectifiers with capacitor smoothing.</p>
      </div>

      {/* Mode selection tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setRectifierType('bridge')}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${rectifierType === 'bridge' ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
        >
          Full-Wave Bridge (4 Diodes)
        </button>
        <button
          onClick={() => setRectifierType('full')}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${rectifierType === 'full' ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
        >
          Center-Tapped Full-Wave (2 Diodes)
        </button>
        <button
          onClick={() => setRectifierType('half')}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${rectifierType === 'half' ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
        >
          Half-Wave (1 Diode)
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-4 text-xs">
          <div>
            <div className="flex justify-between text-slate-700 mb-1">
              <span>Peak AC Input (Vm):</span>
              <span className="font-mono font-bold text-slate-900">{vmInput} V</span>
            </div>
            <input 
              type="range" min="3" max="30" step="1" value={vmInput}
              onChange={(e) => setVmInput(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
            <span className="text-slate-800 font-medium">Enable Shunt Capacitor Filter</span>
            <input 
              type="checkbox" 
              checked={hasFilter} 
              onChange={(e) => setHasFilter(e.target.checked)}
              className="w-4 h-4 text-blue-900 rounded cursor-pointer"
            />
          </div>

          {hasFilter && (
            <>
              <div>
                <div className="flex justify-between text-slate-700 mb-1">
                  <span>Filter Capacitor (C):</span>
                  <span className="font-mono font-bold text-slate-900">{filterCap} μF</span>
                </div>
                <input 
                  type="range" min="10" max="1000" step="10" value={filterCap}
                  onChange={(e) => setFilterCap(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-slate-700 mb-1">
                  <span>Load Resistor (RL):</span>
                  <span className="font-mono font-bold text-slate-900">{loadResistance} Ω</span>
                </div>
                <input 
                  type="range" min="100" max="5000" step="100" value={loadResistance}
                  onChange={(e) => setLoadResistance(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </>
          )}
        </div>

        {/* Calculated Metrics Cards */}
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <span className="text-xs text-blue-700 block">DC Output (Vdc)</span>
              <span className="text-xl font-mono font-bold text-blue-950">
                {(hasFilter ? vdcFiltered : vdcUnfiltered).toFixed(2)} V
              </span>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <span className="text-xs text-amber-700 block">Ripple Factor (γ)</span>
              <span className="text-xl font-mono font-bold text-amber-950">
                {(hasFilter ? rippleFactorFiltered : rippleFactorUnfiltered).toFixed(3)}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
              <span className="text-xs text-emerald-700 block">Max Efficiency (η)</span>
              <span className="text-lg font-mono font-bold text-emerald-950">{efficiency}%</span>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
              <span className="text-xs text-purple-700 block">Peak Inverse Voltage (PIV)</span>
              <span className="text-lg font-mono font-bold text-purple-950">{piv} V</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded border border-slate-200">
            <strong>CU Exam Note:</strong> In Full-Wave Bridge rectifiers, PIV is only <strong>Vm</strong> (compared to <strong>2Vm</strong> in Center-Tapped), making Bridge rectifiers cheaper and safer for high-voltage DC supplies.
          </div>
        </div>
      </div>
    </div>
  );
};
