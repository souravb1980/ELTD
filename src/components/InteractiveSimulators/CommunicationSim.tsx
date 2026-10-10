import React, { useState } from 'react';

export const CommunicationSim: React.FC = () => {
  const [carrierAmp, setCarrierAmp] = useState<number>(10); // Ac in Volts
  const [modAmp, setModAmp] = useState<number>(5); // Am in Volts
  const [carrierFreq, setCarrierFreq] = useState<number>(1000); // fc in kHz (e.g. 1000 kHz = 1 MHz)
  const [modFreq, setModFreq] = useState<number>(5); // fm in kHz (e.g. 5 kHz audio)
  const [carrierPowerKW, setCarrierPowerKW] = useState<number>(10); // Pc in kW

  // Modulation index m = Am / Ac
  const m = modAmp / (carrierAmp || 1);
  const isOvermodulated = m > 1.0;

  // Power distribution: Pt = Pc * (1 + m^2 / 2)
  const totalPowerKW = carrierPowerKW * (1 + Math.pow(m, 2) / 2);
  const sidebandPowerKW = carrierPowerKW * (Math.pow(m, 2) / 2);
  const efficiencyPct = (sidebandPowerKW / (totalPowerKW || 1)) * 100;

  // Bandwidth = 2 * fm
  const bandwidthKhz = 2 * modFreq;

  // Superheterodyne IF = 455 kHz
  const intermediateFreq = 455;
  const localOscFreq = carrierFreq + intermediateFreq;
  const imageFreq = carrierFreq + 2 * intermediateFreq;

  // AM envelope wave simulation coordinates (simplified visual)
  const points = [];
  for (let t = 0; t <= 260; t += 2) {
    const angleMod = (t / 260) * 2 * Math.PI * 2; // 2 audio cycles
    const envelope = 1 + m * Math.cos(angleMod);
    const angleRf = (t / 260) * 2 * Math.PI * 30; // 30 RF cycles
    const amVal = envelope * Math.cos(angleRf);

    // Map to SVG coordinates: center y = 75, amplitude scale = 35
    const y = 75 + (amVal / (1 + (isOvermodulated ? m : 1))) * 35;
    points.push(`${t + 10},${y}`);
  }
  const wavePath = `M ${points.join(' L ')}`;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-lg font-semibold text-slate-900">AM Modulation & Spectrum Analyzer</h3>
        <p className="text-sm text-slate-500">Calculate modulation index m, sideband power, transmission bandwidth, and Superheterodyne IF parameters.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-3 text-xs">
          <div>
            <div className="flex justify-between text-slate-700 mb-1">
              <span>Modulating Signal Amplitude (Am):</span>
              <span className="font-mono font-bold text-slate-900">{modAmp} V</span>
            </div>
            <input 
              type="range" min="1" max="15" step="0.5" value={modAmp}
              onChange={(e) => setModAmp(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-700 mb-1">
              <span>Carrier Signal Amplitude (Ac):</span>
              <span className="font-mono font-bold text-slate-900">{carrierAmp} V</span>
            </div>
            <input 
              type="range" min="5" max="15" step="0.5" value={carrierAmp}
              onChange={(e) => setCarrierAmp(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-700 mb-1">
              <span>Carrier Frequency (fc):</span>
              <span className="font-mono font-bold text-slate-900">{carrierFreq} kHz</span>
            </div>
            <input 
              type="range" min="500" max="1600" step="50" value={carrierFreq}
              onChange={(e) => setCarrierFreq(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-700 mb-1">
              <span>Modulating Audio Frequency (fm):</span>
              <span className="font-mono font-bold text-slate-900">{modFreq} kHz</span>
            </div>
            <input 
              type="range" min="1" max="15" step="1" value={modFreq}
              onChange={(e) => setModFreq(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-700 mb-1">
              <span>Unmodulated Carrier Power (Pc):</span>
              <span className="font-mono font-bold text-slate-900">{carrierPowerKW} kW</span>
            </div>
            <input 
              type="range" min="1" max="50" step="1" value={carrierPowerKW}
              onChange={(e) => setCarrierPowerKW(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        {/* Visual Waveform & Metrics */}
        <div className="space-y-3">
          <div className="bg-slate-950 p-3 rounded-lg text-slate-100">
            <div className="text-[11px] text-slate-400 flex justify-between mb-1">
              <span>Simulated AM Time-Domain Waveform</span>
              <span className={isOvermodulated ? 'text-rose-400 font-bold' : 'text-emerald-400'}>
                {isOvermodulated ? 'Overmodulation (m > 1)' : 'Standard AM (m ≤ 1)'}
              </span>
            </div>
            <svg viewBox="0 0 280 150" className="w-full h-36">
              <line x1="10" y1="75" x2="270" y2="75" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
              <path d={wavePath} fill="none" stroke={isOvermodulated ? '#fb7185' : '#38bdf8'} strokeWidth="1.5" />
            </svg>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <span className="text-xs text-blue-700 block">Modulation Index (m)</span>
              <span className="text-xl font-mono font-bold text-blue-950">{(m * 100).toFixed(1)}%</span>
              <span className="text-[10px] text-slate-500 block">m = Am / Ac = {m.toFixed(2)}</span>
            </div>
            <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
              <span className="text-xs text-indigo-700 block">Total RF Power (Pt)</span>
              <span className="text-xl font-mono font-bold text-indigo-950">{totalPowerKW.toFixed(2)} kW</span>
              <span className="text-[10px] text-slate-500 block">Sidebands: {sidebandPowerKW.toFixed(2)} kW</span>
            </div>
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-1">
            <div className="flex justify-between">
              <span className="text-slate-600">RF Bandwidth (BW = 2·fm):</span>
              <span className="font-mono font-bold text-slate-900">{bandwidthKhz} kHz</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Local Oscillator (fLO = fs + 455kHz):</span>
              <span className="font-mono font-bold text-blue-900">{localOscFreq} kHz</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Superhet Image Frequency (fimage):</span>
              <span className="font-mono font-bold text-rose-700">{imageFreq} kHz</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
