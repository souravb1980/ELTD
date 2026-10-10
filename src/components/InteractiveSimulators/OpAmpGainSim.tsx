import React, { useState } from 'react';

export const OpAmpGainSim: React.FC = () => {
  const [config, setConfig] = useState<'inverting' | 'noninverting' | 'summing' | 'follower'>('inverting');
  const [rf, setRf] = useState<number>(20); // kΩ
  const [r1, setR1] = useState<number>(5); // kΩ
  const [vin, setVin] = useState<number>(1.5); // V
  const [v2, setV2] = useState<number>(0.8); // V for summing
  const [r2, setR2] = useState<number>(10); // kΩ for summing
  const [vSupply, setVSupply] = useState<number>(15); // ±15V rails

  let gain = 0;
  let voutTheoretical = 0;

  if (config === 'inverting') {
    gain = - (rf / (r1 || 0.1));
    voutTheoretical = gain * vin;
  } else if (config === 'noninverting') {
    gain = 1 + (rf / (r1 || 0.1));
    voutTheoretical = gain * vin;
  } else if (config === 'follower') {
    gain = 1;
    voutTheoretical = vin;
  } else if (config === 'summing') {
    voutTheoretical = - ( (rf / (r1 || 0.1)) * vin + (rf / (r2 || 0.1)) * v2 );
  }

  // Account for saturation at ±(Vsupply - 1.5V) for 741 Op-Amp
  const vSat = vSupply - 1.5;
  const isSaturated = Math.abs(voutTheoretical) > vSat;
  const voutActual = Math.max(-vSat, Math.min(vSat, voutTheoretical));

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-lg font-semibold text-slate-900">Op-Amp Closed-Loop Gain & Output Calculator</h3>
        <p className="text-sm text-slate-500">Calculate gain, phase shift, output voltage, and saturation behavior for standard configurations.</p>
      </div>

      {/* Configuration tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setConfig('inverting')}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${config === 'inverting' ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
        >
          Inverting Amplifier
        </button>
        <button
          onClick={() => setConfig('noninverting')}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${config === 'noninverting' ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
        >
          Non-Inverting Amplifier
        </button>
        <button
          onClick={() => setConfig('summing')}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${config === 'summing' ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
        >
          Summing Amplifier (Adder)
        </button>
        <button
          onClick={() => setConfig('follower')}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${config === 'follower' ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
        >
          Voltage Follower (Buffer)
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-3 text-xs">
          {config !== 'follower' && (
            <div>
              <div className="flex justify-between text-slate-700 mb-1">
                <span>Feedback Resistor (Rf):</span>
                <span className="font-mono font-bold text-slate-900">{rf} kΩ</span>
              </div>
              <input 
                type="range" min="1" max="100" step="1" value={rf}
                onChange={(e) => setRf(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          )}

          {config !== 'follower' && (
            <div>
              <div className="flex justify-between text-slate-700 mb-1">
                <span>Input Resistor (R1):</span>
                <span className="font-mono font-bold text-slate-900">{r1} kΩ</span>
              </div>
              <input 
                type="range" min="1" max="50" step="1" value={r1}
                onChange={(e) => setR1(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          )}

          <div>
            <div className="flex justify-between text-slate-700 mb-1">
              <span>Input Voltage (V1 / Vin):</span>
              <span className="font-mono font-bold text-slate-900">{vin} V</span>
            </div>
            <input 
              type="range" min="-5" max="5" step="0.1" value={vin}
              onChange={(e) => setVin(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {config === 'summing' && (
            <>
              <div>
                <div className="flex justify-between text-slate-700 mb-1">
                  <span>Second Input Voltage (V2):</span>
                  <span className="font-mono font-bold text-slate-900">{v2} V</span>
                </div>
                <input 
                  type="range" min="-5" max="5" step="0.1" value={v2}
                  onChange={(e) => setV2(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-slate-700 mb-1">
                  <span>Input Resistor (R2):</span>
                  <span className="font-mono font-bold text-slate-900">{r2} kΩ</span>
                </div>
                <input 
                  type="range" min="1" max="50" step="1" value={r2}
                  onChange={(e) => setR2(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </>
          )}

          <div>
            <div className="flex justify-between text-slate-700 mb-1">
              <span>Op-Amp DC Supply Rails:</span>
              <span className="font-mono font-bold text-slate-900">±{vSupply} V</span>
            </div>
            <input 
              type="range" min="5" max="18" step="1" value={vSupply}
              onChange={(e) => setVSupply(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2 text-center">
            <span className="text-xs text-slate-500 font-medium">Output Formula:</span>
            <div className="font-mono text-sm font-semibold text-blue-900 bg-white p-2 rounded border border-slate-200">
              {config === 'inverting' && `Vout = - (Rf / R1) · Vin = - (${rf}k / ${r1}k) · (${vin}V)`}
              {config === 'noninverting' && `Vout = (1 + Rf / R1) · Vin = (1 + ${rf}k / ${r1}k) · (${vin}V)`}
              {config === 'follower' && `Vout = Vin = ${vin}V (Unity Gain Buffer)`}
              {config === 'summing' && `Vout = - [ (${rf}k/${r1}k)·${vin}V + (${rf}k/${r2}k)·${v2}V ]`}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <span className="text-xs text-blue-700 block">Voltage Gain (Av)</span>
              <span className="text-xl font-mono font-bold text-blue-950">
                {config === 'summing' ? 'Weighted' : `${gain.toFixed(2)}x`}
              </span>
              <span className="text-[10px] text-slate-500 block">
                {config === 'inverting' || config === 'summing' ? '180° Inverted' : '0° Non-Inverted'}
              </span>
            </div>

            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
              <span className="text-xs text-emerald-700 block">Output Voltage (Vout)</span>
              <span className="text-xl font-mono font-bold text-emerald-950">
                {voutActual.toFixed(2)} V
              </span>
              <span className="text-[10px] text-slate-500 block">
                {isSaturated ? `Saturated at ±${vSat.toFixed(1)}V` : 'Linear Range'}
              </span>
            </div>
          </div>

          {isSaturated && (
            <div className="p-2.5 bg-amber-50 border border-amber-300 rounded text-amber-900 text-xs">
              ⚠️ <strong>Op-Amp Clipped / Saturated:</strong> Theoretical output ({voutTheoretical.toFixed(2)}V) exceeds the physical power supply limits (±{vSat.toFixed(1)}V).
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
