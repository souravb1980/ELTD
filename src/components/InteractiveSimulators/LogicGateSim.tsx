import React, { useState } from 'react';

type GateType = 'AND' | 'OR' | 'NOT' | 'NAND' | 'NOR' | 'XOR' | 'XNOR';
type LabMode = 'gates' | 'number_systems' | 'adders' | 'mux_demux' | 'flip_flops';

export const LogicGateSim: React.FC = () => {
  const [labMode, setLabMode] = useState<LabMode>('gates');

  // Gate State
  const [selectedGate, setSelectedGate] = useState<GateType>('NAND');
  const [inputA, setInputA] = useState<0 | 1>(1);
  const [inputB, setInputB] = useState<0 | 1>(0);

  // Number System State
  const [decInput, setDecInput] = useState<string>('53');
  const [subA, setSubA] = useState<number>(13);
  const [subB, setSubB] = useState<number>(6);

  // Adder/Subtractor State
  const [addA, setAddA] = useState<0 | 1>(1);
  const [addB, setAddB] = useState<0 | 1>(1);
  const [addCin, setAddCin] = useState<0 | 1>(0);

  // MUX & DeMUX State
  const [muxS1, setMuxS1] = useState<0 | 1>(0);
  const [muxS0, setMuxS0] = useState<0 | 1>(1);
  const [muxInputs, setMuxInputs] = useState<[0 | 1, 0 | 1, 0 | 1, 0 | 1]>([0, 1, 1, 0]);

  const [demuxS1, setDemuxS1] = useState<0 | 1>(0);
  const [demuxS0, setDemuxS0] = useState<0 | 1>(1);
  const [demuxDin, setDemuxDin] = useState<0 | 1>(1);

  // Flip-Flop State
  const [ffType, setFfType] = useState<'SR' | 'JK' | 'D' | 'T'>('JK');
  const [ffIn1, setFfIn1] = useState<0 | 1>(1); // S or J or D or T
  const [ffIn2, setFfIn2] = useState<0 | 1>(1); // R or K
  const [ffState, setFfState] = useState<0 | 1>(0);
  const [clockCount, setClockCount] = useState<number>(0);

  const calculateOutput = (gate: GateType, a: number, b: number): number => {
    switch (gate) {
      case 'AND': return (a && b) ? 1 : 0;
      case 'OR': return (a || b) ? 1 : 0;
      case 'NOT': return a === 0 ? 1 : 0;
      case 'NAND': return !(a && b) ? 1 : 0;
      case 'NOR': return !(a || b) ? 1 : 0;
      case 'XOR': return (a ^ b) ? 1 : 0;
      case 'XNOR': return !(a ^ b) ? 1 : 0;
    }
  };

  const output = calculateOutput(selectedGate, inputA, inputB);

  const truthTableRows: { a: number; b?: number; out: number }[] = 
    selectedGate === 'NOT'
      ? [
          { a: 0, out: 1 },
          { a: 1, out: 0 }
        ]
      : [
          { a: 0, b: 0, out: calculateOutput(selectedGate, 0, 0) },
          { a: 0, b: 1, out: calculateOutput(selectedGate, 0, 1) },
          { a: 1, b: 0, out: calculateOutput(selectedGate, 1, 0) },
          { a: 1, b: 1, out: calculateOutput(selectedGate, 1, 1) }
        ];

  // Number conversions
  const parsedDec = parseInt(decInput, 10);
  const validDec = !isNaN(parsedDec) && parsedDec >= 0;
  const binaryRep = validDec ? parsedDec.toString(2).padStart(8, '0') : '00000000';
  const hexRep = validDec ? parsedDec.toString(16).toUpperCase() : '0';

  // 1's and 2's complement of subB (8-bit)
  const bBits = subB.toString(2).padStart(8, '0');
  const bOnesComp = bBits.split('').map(b => b === '1' ? '0' : '1').join('');
  const bTwosCompVal = (parseInt(bOnesComp, 2) + 1) & 0xFF;
  const bTwosCompBits = bTwosCompVal.toString(2).padStart(8, '0');
  const subtractionResult = subA - subB;

  // Adders Calculation
  const haSum = (addA ^ addB) as 0 | 1;
  const haCarry = (addA & addB) as 0 | 1;

  const faSum = ((addA ^ addB) ^ addCin) as 0 | 1;
  const faCout = ((addA & addB) | (addCin & (addA ^ addB))) as 0 | 1;

  const hsDiff = (addA ^ addB) as 0 | 1;
  const hsBorrow = ((addA === 0 && addB === 1) ? 1 : 0) as 0 | 1;

  // MUX & DeMUX Calculations
  const muxSelectIndex = (muxS1 << 1) | muxS0;
  const muxOutput = muxInputs[muxSelectIndex];

  const demuxSelectIndex = (demuxS1 << 1) | demuxS0;
  const demuxY0 = demuxSelectIndex === 0 ? demuxDin : 0;
  const demuxY1 = demuxSelectIndex === 1 ? demuxDin : 0;
  const demuxY2 = demuxSelectIndex === 2 ? demuxDin : 0;
  const demuxY3 = demuxSelectIndex === 3 ? demuxDin : 0;

  // Clock Pulse Handler for Flip-Flop
  const triggerClockPulse = () => {
    setClockCount(prev => prev + 1);
    if (ffType === 'SR') {
      if (ffIn1 === 0 && ffIn2 === 0) {
        // Hold
      } else if (ffIn1 === 0 && ffIn2 === 1) {
        setFfState(0); // Reset
      } else if (ffIn1 === 1 && ffIn2 === 0) {
        setFfState(1); // Set
      } else {
        // Invalid S=R=1
        setFfState(Math.random() > 0.5 ? 1 : 0);
      }
    } else if (ffType === 'JK') {
      if (ffIn1 === 0 && ffIn2 === 0) {
        // Hold
      } else if (ffIn1 === 0 && ffIn2 === 1) {
        setFfState(0); // Reset
      } else if (ffIn1 === 1 && ffIn2 === 0) {
        setFfState(1); // Set
      } else {
        // Toggle
        setFfState(prev => prev === 1 ? 0 : 1);
      }
    } else if (ffType === 'D') {
      setFfState(ffIn1); // Next state = D
    } else if (ffType === 'T') {
      if (ffIn1 === 1) {
        setFfState(prev => prev === 1 ? 0 : 1); // Toggle
      }
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6">
      {/* Header and Lab Mode Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Digital Logic Virtual Laboratory</h3>
          <p className="text-xs text-slate-500">Test logic gates, number conversions, adders/subtractors, and sequential flip-flops.</p>
        </div>

        <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-lg">
          <button
            onClick={() => setLabMode('gates')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${labMode === 'gates' ? 'bg-blue-900 text-white shadow-xs' : 'text-slate-700 hover:text-slate-900'}`}
          >
            Logic Gates
          </button>
          <button
            onClick={() => setLabMode('number_systems')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${labMode === 'number_systems' ? 'bg-blue-900 text-white shadow-xs' : 'text-slate-700 hover:text-slate-900'}`}
          >
            Number Converter
          </button>
          <button
            onClick={() => setLabMode('adders')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${labMode === 'adders' ? 'bg-blue-900 text-white shadow-xs' : 'text-slate-700 hover:text-slate-900'}`}
          >
            Adders & Subtractors
          </button>
          <button
            onClick={() => setLabMode('mux_demux')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${labMode === 'mux_demux' ? 'bg-blue-900 text-white shadow-xs' : 'text-slate-700 hover:text-slate-900'}`}
          >
            MUX & DeMUX
          </button>
          <button
            onClick={() => setLabMode('flip_flops')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${labMode === 'flip_flops' ? 'bg-blue-900 text-white shadow-xs' : 'text-slate-700 hover:text-slate-900'}`}
          >
            Flip-Flop Clocker
          </button>
        </div>
      </div>

      {/* 1. GATES MODE */}
      {labMode === 'gates' && (
        <div className="space-y-6 animate-in fade-in">
          {/* Gate selection buttons */}
          <div className="flex flex-wrap gap-2">
            {(['AND', 'OR', 'NOT', 'NAND', 'NOR', 'XOR', 'XNOR'] as GateType[]).map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGate(g)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${selectedGate === g ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              >
                {g} {g === 'NAND' || g === 'NOR' ? '(Universal)' : ''}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Interactive gate canvas */}
            <div className="bg-slate-950 p-6 rounded-xl flex flex-col items-center justify-center space-y-4 text-white">
              <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">
                {selectedGate} Gate Logic Simulator
              </div>

              <div className="flex items-center gap-6">
                {/* Input switches */}
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => setInputA(inputA === 1 ? 0 : 1)}
                    className={`w-14 h-10 rounded font-mono font-bold text-sm flex items-center justify-center border transition-all ${inputA === 1 ? 'bg-emerald-600 border-emerald-400 text-white shadow-lg shadow-emerald-900/50' : 'bg-slate-800 border-slate-700 text-slate-400'}`}
                  >
                    A = {inputA}
                  </button>

                  {selectedGate !== 'NOT' && (
                    <button
                      onClick={() => setInputB(inputB === 1 ? 0 : 1)}
                      className={`w-14 h-10 rounded font-mono font-bold text-sm flex items-center justify-center border transition-all ${inputB === 1 ? 'bg-emerald-600 border-emerald-400 text-white shadow-lg shadow-emerald-900/50' : 'bg-slate-800 border-slate-700 text-slate-400'}`}
                    >
                      B = {inputB}
                    </button>
                  )}
                </div>

                {/* Gate indicator */}
                <div className="px-5 py-4 bg-slate-900 border border-slate-700 rounded-lg text-center font-mono">
                  <span className="text-xs text-sky-400 block font-semibold">{selectedGate}</span>
                  <span className="text-xs text-slate-400 block mt-1">Logic Operation</span>
                </div>

                {/* Output Lamp */}
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-12 rounded-lg font-mono font-bold text-lg flex items-center justify-center border transition-all ${output === 1 ? 'bg-amber-500 border-amber-300 text-slate-950 shadow-xl shadow-amber-500/50' : 'bg-slate-800 border-slate-700 text-slate-500'}`}>
                    Y = {output}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1">{output === 1 ? 'HIGH (Logic 1)' : 'LOW (Logic 0)'}</span>
                </div>
              </div>

              <div className="text-xs text-slate-400 font-mono">
                {selectedGate === 'AND' && 'Expression: Y = A · B'}
                {selectedGate === 'OR' && 'Expression: Y = A + B'}
                {selectedGate === 'NOT' && "Expression: Y = A'"}
                {selectedGate === 'NAND' && "Expression: Y = (A · B)'"}
                {selectedGate === 'NOR' && "Expression: Y = (A + B)'"}
                {selectedGate === 'XOR' && "Expression: Y = A ⊕ B = A'B + AB'"}
                {selectedGate === 'XNOR' && "Expression: Y = (A ⊕ B)' = AB + A'B'"}
              </div>
            </div>

            {/* Truth Table */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Verified Truth Table: {selectedGate} Gate
              </div>

              <table className="w-full text-xs text-left border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-100 text-slate-800 border-b border-slate-200">
                  <tr>
                    <th className="p-2.5">Input A</th>
                    {selectedGate !== 'NOT' && <th className="p-2.5">Input B</th>}
                    <th className="p-2.5">Output Y</th>
                    <th className="p-2.5">Active State</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-mono">
                  {truthTableRows.map((row, idx) => {
                    const isActive = row.a === inputA && (selectedGate === 'NOT' || row.b === inputB);
                    return (
                      <tr key={idx} className={isActive ? 'bg-blue-50 font-bold text-blue-950' : 'text-slate-700 hover:bg-slate-50'}>
                        <td className="p-2.5">{row.a}</td>
                        {selectedGate !== 'NOT' && <td className="p-2.5">{row.b}</td>}
                        <td className="p-2.5">
                          <span className={`px-2 py-0.5 rounded ${row.out === 1 ? 'bg-amber-100 text-amber-900 font-bold' : 'bg-slate-100 text-slate-600'}`}>
                            {row.out}
                          </span>
                        </td>
                        <td className="p-2.5 font-sans text-[11px]">
                          {isActive ? '● Current Input' : ''}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="text-[11px] text-slate-500">
                <strong>Universal Gate Note:</strong> Both NAND and NOR can synthesize all 3 basic logic operations (NOT, AND, OR), making IC inventory and manufacturing significantly simpler.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. NUMBER SYSTEMS & COMPLEMENT MODE */}
      {labMode === 'number_systems' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase">Decimal Value (Base 10)</label>
              <input
                type="number"
                min="0"
                max="65535"
                value={decInput}
                onChange={e => setDecInput(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg font-mono text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <span className="text-[11px] text-slate-500 block">Weights: 10⁰, 10¹, 10²...</span>
            </div>

            <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-xl space-y-2">
              <label className="text-xs font-bold text-blue-900 uppercase">Binary Equivalent (Base 2)</label>
              <div className="px-3 py-2 bg-white border border-blue-200 rounded-lg font-mono text-sm font-bold text-blue-800 break-all">
                {binaryRep}₂
              </div>
              <span className="text-[11px] text-blue-600 block">4-bit nibbles: {binaryRep.match(/.{1,4}/g)?.join(' ')}</span>
            </div>

            <div className="p-4 bg-purple-50/70 border border-purple-200 rounded-xl space-y-2">
              <label className="text-xs font-bold text-purple-900 uppercase">Hexadecimal (Base 16)</label>
              <div className="px-3 py-2 bg-white border border-purple-200 rounded-lg font-mono text-sm font-bold text-purple-800">
                0x{hexRep}₁₆
              </div>
              <span className="text-[11px] text-purple-600 block">Digits: 0-9 and A-F (A=10..F=15)</span>
            </div>
          </div>

          {/* 2's Complement Subtraction Test bench */}
          <div className="p-5 bg-slate-900 text-white rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                Live 2's Complement Subtraction: A - B
              </span>
              <span className="text-[11px] text-slate-400 font-mono">8-bit Signed Arithmetic</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] text-slate-300 block mb-1">Minuend A (Decimal 0-127):</label>
                <input
                  type="number"
                  min="0"
                  max="127"
                  value={subA}
                  onChange={e => setSubA(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full px-3 py-1.5 bg-slate-800 border border-slate-700 rounded text-sm font-mono text-white"
                />
                <span className="text-[10px] text-slate-400 font-mono mt-0.5 block">A = {subA.toString(2).padStart(8, '0')}₂</span>
              </div>

              <div>
                <label className="text-[11px] text-slate-300 block mb-1">Subtrahend B (Decimal 0-127):</label>
                <input
                  type="number"
                  min="0"
                  max="127"
                  value={subB}
                  onChange={e => setSubB(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full px-3 py-1.5 bg-slate-800 border border-slate-700 rounded text-sm font-mono text-white"
                />
                <span className="text-[10px] text-slate-400 font-mono mt-0.5 block">B = {bBits}₂</span>
              </div>
            </div>

            <div className="p-3 bg-slate-800/90 rounded-lg text-xs font-mono space-y-1 text-slate-200">
              <div>1. 1's Complement of B: <span className="text-amber-400">{bOnesComp}</span> (bitwise NOT)</div>
              <div>2. 2's Complement of B: <span className="text-emerald-400">{bTwosCompBits}</span> (1's comp + 1)</div>
              <div>3. Sum [A + 2's comp of B]: <span className="text-sky-300">{(subA + bTwosCompVal).toString(2).padStart(9, '0')}</span></div>
              <div className="pt-1 text-white font-bold">
                Result A - B = {subA} - {subB} = <span className="text-emerald-400 font-mono text-sm">{subtractionResult}</span>
                {subtractionResult >= 0 ? " (Positive: End Carry Discarded)" : " (Negative: Re-complement to verify)"}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. ADDERS & SUBTRACTORS MODE */}
      {labMode === 'adders' && (
        <div className="space-y-6 animate-in fade-in">
          {/* Input Bit Toggles */}
          <div className="flex flex-wrap items-center gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="text-xs font-bold text-slate-800 uppercase">Input Bit Controls:</span>
            <button
              onClick={() => setAddA(addA === 1 ? 0 : 1)}
              className={`px-4 py-2 rounded-lg font-mono font-bold text-xs flex items-center gap-1.5 transition-colors ${addA === 1 ? 'bg-blue-900 text-white' : 'bg-white border border-slate-300 text-slate-700'}`}
            >
              <span>Bit A = {addA}</span>
            </button>

            <button
              onClick={() => setAddB(addB === 1 ? 0 : 1)}
              className={`px-4 py-2 rounded-lg font-mono font-bold text-xs flex items-center gap-1.5 transition-colors ${addB === 1 ? 'bg-blue-900 text-white' : 'bg-white border border-slate-300 text-slate-700'}`}
            >
              <span>Bit B = {addB}</span>
            </button>

            <button
              onClick={() => setAddCin(addCin === 1 ? 0 : 1)}
              className={`px-4 py-2 rounded-lg font-mono font-bold text-xs flex items-center gap-1.5 transition-colors ${addCin === 1 ? 'bg-purple-900 text-white' : 'bg-white border border-slate-300 text-slate-700'}`}
            >
              <span>Carry-In (Cin) = {addCin}</span>
            </button>
          </div>

          {/* Cards for Half Adder, Full Adder, Half Subtractor */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Half Adder */}
            <div className="p-5 bg-white border border-emerald-200 rounded-xl shadow-xs space-y-3">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Half Adder (2-Bit)</span>
              <div className="flex justify-between items-center bg-emerald-50/70 p-3 rounded-lg font-mono">
                <div>
                  <span className="text-[10px] text-emerald-700 block font-sans">Sum S (A ⊕ B):</span>
                  <span className="text-lg font-bold text-emerald-950">{haSum}</span>
                </div>
                <div>
                  <span className="text-[10px] text-emerald-700 block font-sans">Carry C (A · B):</span>
                  <span className="text-lg font-bold text-emerald-950">{haCarry}</span>
                </div>
              </div>
              <div className="text-[11px] text-slate-600">
                Formula: S = A ⊕ B, C = A · B. No carry-in support.
              </div>
            </div>

            {/* Full Adder */}
            <div className="p-5 bg-white border border-blue-200 rounded-xl shadow-xs space-y-3">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">Full Adder (3-Bit)</span>
              <div className="flex justify-between items-center bg-blue-50/70 p-3 rounded-lg font-mono">
                <div>
                  <span className="text-[10px] text-blue-700 block font-sans">Sum S (A ⊕ B ⊕ Cin):</span>
                  <span className="text-lg font-bold text-blue-950">{faSum}</span>
                </div>
                <div>
                  <span className="text-[10px] text-blue-700 block font-sans">Cout:</span>
                  <span className="text-lg font-bold text-blue-950">{faCout}</span>
                </div>
              </div>
              <div className="text-[11px] text-slate-600">
                Formula: S = A ⊕ B ⊕ Cin, Cout = AB + Cin(A ⊕ B). Supports carry chains.
              </div>
            </div>

            {/* Half Subtractor */}
            <div className="p-5 bg-white border border-rose-200 rounded-xl shadow-xs space-y-3">
              <span className="text-xs font-bold text-rose-800 uppercase tracking-wider">Half Subtractor (A - B)</span>
              <div className="flex justify-between items-center bg-rose-50/70 p-3 rounded-lg font-mono">
                <div>
                  <span className="text-[10px] text-rose-700 block font-sans">Difference D:</span>
                  <span className="text-lg font-bold text-rose-950">{hsDiff}</span>
                </div>
                <div>
                  <span className="text-[10px] text-rose-700 block font-sans">Borrow Bout (A'B):</span>
                  <span className="text-lg font-bold text-rose-950">{hsBorrow}</span>
                </div>
              </div>
              <div className="text-[11px] text-slate-600">
                Formula: D = A ⊕ B, Bout = A' · B. High borrow when 0 - 1.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. MUX & DeMUX MODE */}
      {labMode === 'mux_demux' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 4:1 MULTIPLEXER SIMULATOR */}
            <div className="p-5 bg-white border border-blue-200 rounded-xl shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-blue-100 pb-2">
                <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                  4-to-1 Multiplexer (Data Selector)
                </span>
                <span className="text-[10px] font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
                  Active Ch: I{muxSelectIndex}
                </span>
              </div>

              {/* Select Line Controls */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-slate-700 uppercase">Select Address Lines (S1, S0):</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setMuxS1(muxS1 === 1 ? 0 : 1)}
                    className={`flex-1 py-1.5 rounded-lg font-mono text-xs font-bold border transition-colors ${muxS1 === 1 ? 'bg-indigo-900 text-white border-indigo-900' : 'bg-white text-indigo-900 border-indigo-200 hover:bg-indigo-50'}`}
                  >
                    S1 = {muxS1}
                  </button>
                  <button
                    onClick={() => setMuxS0(muxS0 === 1 ? 0 : 1)}
                    className={`flex-1 py-1.5 rounded-lg font-mono text-xs font-bold border transition-colors ${muxS0 === 1 ? 'bg-indigo-900 text-white border-indigo-900' : 'bg-white text-indigo-900 border-indigo-200 hover:bg-indigo-50'}`}
                  >
                    S0 = {muxS0}
                  </button>
                </div>
                <span className="text-[10px] text-indigo-600 block font-mono">
                  Code ({muxS1}{muxS0})₂ = Decimal {muxSelectIndex} → Channel I{muxSelectIndex} routed to Y
                </span>
              </div>

              {/* Data Input Lines */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-slate-700 uppercase">Data Inputs (I0, I1, I2, I3):</span>
                <div className="grid grid-cols-4 gap-2">
                  {([0, 1, 2, 3] as const).map(idx => (
                    <button
                      key={idx}
                      onClick={() => {
                        const next = [...muxInputs] as [0 | 1, 0 | 1, 0 | 1, 0 | 1];
                        next[idx] = next[idx] === 1 ? 0 : 1;
                        setMuxInputs(next);
                      }}
                      className={`p-2 rounded-lg font-mono text-xs flex flex-col items-center border transition-all ${
                        muxSelectIndex === idx
                          ? 'border-blue-600 bg-blue-50/80 shadow-xs ring-2 ring-blue-500/20'
                          : 'border-slate-200 bg-white hover:bg-slate-50'
                      }`}
                    >
                      <span className={`text-[10px] ${muxSelectIndex === idx ? 'text-blue-900 font-bold' : 'text-slate-500'}`}>I{idx} {muxSelectIndex === idx ? '★' : ''}</span>
                      <span className={`text-sm font-bold ${muxInputs[idx] === 1 ? 'text-emerald-600' : 'text-slate-400'}`}>{muxInputs[idx]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Multiplexer Output */}
              <div className="p-3 bg-slate-900 rounded-lg flex items-center justify-between text-white">
                <div>
                  <span className="text-[10px] uppercase font-sans text-slate-400 block">MUX Output Y</span>
                  <span className="text-xs font-mono text-amber-300">Selected: I{muxSelectIndex} ({muxInputs[muxSelectIndex]})</span>
                </div>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-mono text-2xl font-bold ${
                  muxOutput === 1 ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30' : 'bg-slate-800 text-slate-500'
                }`}>
                  {muxOutput}
                </div>
              </div>

              <div className="text-[11px] text-slate-500 font-mono">
                Equation: Y = S1'S0'I0 + S1'S0 I1 + S1 S0'I2 + S1 S0 I3
              </div>
            </div>

            {/* 1:4 DE-MULTIPLEXER SIMULATOR */}
            <div className="p-5 bg-white border border-purple-200 rounded-xl shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-purple-100 pb-2">
                <span className="text-xs font-bold text-purple-900 uppercase tracking-wider">
                  1-to-4 De-Multiplexer (4-to-1 Data Distributor)
                </span>
                <span className="text-[10px] font-mono bg-purple-50 text-purple-700 px-2 py-0.5 rounded">
                  Target: Y{demuxSelectIndex}
                </span>
              </div>

              {/* Data In Line */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-slate-700 uppercase">Single Data Input (Din / Enable):</span>
                <button
                  onClick={() => setDemuxDin(demuxDin === 1 ? 0 : 1)}
                  className={`w-full py-2 rounded-lg font-mono text-xs font-bold border transition-colors flex items-center justify-center gap-2 ${
                    demuxDin === 1 ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <span>Data In (Din) = {demuxDin}</span>
                  <span className="text-[10px] opacity-80">{demuxDin === 1 ? '(Transmitting HIGH)' : '(Transmitting LOW)'}</span>
                </button>
              </div>

              {/* Select Address Lines */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-slate-700 uppercase">Address Lines (S1, S0):</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setDemuxS1(demuxS1 === 1 ? 0 : 1)}
                    className={`flex-1 py-1.5 rounded-lg font-mono text-xs font-bold border transition-colors ${demuxS1 === 1 ? 'bg-purple-900 text-white border-purple-900' : 'bg-white text-purple-900 border-purple-200 hover:bg-purple-50'}`}
                  >
                    S1 = {demuxS1}
                  </button>
                  <button
                    onClick={() => setDemuxS0(demuxS0 === 1 ? 0 : 1)}
                    className={`flex-1 py-1.5 rounded-lg font-mono text-xs font-bold border transition-colors ${demuxS0 === 1 ? 'bg-purple-900 text-white border-purple-900' : 'bg-white text-purple-900 border-purple-200 hover:bg-purple-50'}`}
                  >
                    S0 = {demuxS0}
                  </button>
                </div>
              </div>

              {/* 4 Distributed Outputs */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-slate-700 uppercase">Distributed Channel Outputs:</span>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: 'Y0', val: demuxY0, idx: 0 },
                    { label: 'Y1', val: demuxY1, idx: 1 },
                    { label: 'Y2', val: demuxY2, idx: 2 },
                    { label: 'Y3', val: demuxY3, idx: 3 }
                  ].map(ch => (
                    <div
                      key={ch.label}
                      className={`p-2 rounded-lg font-mono text-xs flex flex-col items-center border transition-all ${
                        demuxSelectIndex === ch.idx
                          ? 'border-purple-600 bg-purple-50/80 shadow-xs ring-2 ring-purple-500/20'
                          : 'border-slate-200 bg-slate-50'
                      }`}
                    >
                      <span className={`text-[10px] ${demuxSelectIndex === ch.idx ? 'text-purple-900 font-bold' : 'text-slate-500'}`}>
                        {ch.label} {demuxSelectIndex === ch.idx ? '★' : ''}
                      </span>
                      <span className={`text-base font-bold ${ch.val === 1 ? 'text-purple-700' : 'text-slate-400'}`}>
                        {ch.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-[11px] text-slate-600 space-y-1">
                <div><strong>Dual Mode:</strong> Acts as 1:4 DeMUX or 2-to-4 Line Decoder (when Din = 1).</div>
                <div className="font-mono text-[10px] text-purple-800">
                  Active equation: Y{demuxSelectIndex} = Din · {demuxS1 === 1 ? 'S1' : "S1'"} · {demuxS0 === 1 ? 'S0' : "S0'"}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. FLIP-FLOP CLOCKER MODE */}
      {labMode === 'flip_flops' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="flex flex-wrap gap-2">
            {(['SR', 'JK', 'D', 'T'] as const).map(type => (
              <button
                key={type}
                onClick={() => setFfType(type)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${ffType === type ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              >
                {type} Flip-Flop
              </button>
            ))}
          </div>

          <div className="bg-slate-950 text-white p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs text-sky-400 font-mono font-bold uppercase tracking-wider block">
                {ffType} Clock-Synchronized Bistable Latch
              </span>

              {/* Inputs */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setFfIn1(ffIn1 === 1 ? 0 : 1)}
                  className={`w-14 h-10 rounded font-mono font-bold text-xs flex items-center justify-center border transition-all ${ffIn1 === 1 ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-slate-800 border-slate-700 text-slate-400'}`}
                >
                  {ffType === 'SR' ? 'S' : ffType === 'JK' ? 'J' : ffType === 'D' ? 'D' : 'T'} = {ffIn1}
                </button>

                {(ffType === 'SR' || ffType === 'JK') && (
                  <button
                    onClick={() => setFfIn2(ffIn2 === 1 ? 0 : 1)}
                    className={`w-14 h-10 rounded font-mono font-bold text-xs flex items-center justify-center border transition-all ${ffIn2 === 1 ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-slate-800 border-slate-700 text-slate-400'}`}
                  >
                    {ffType === 'SR' ? 'R' : 'K'} = {ffIn2}
                  </button>
                )}
              </div>

              <div className="text-[11px] text-slate-400">
                {ffType === 'SR' && 'S=1 sets Q, R=1 resets Q. (S=R=1 is forbidden!)'}
                {ffType === 'JK' && 'J=1 sets, K=1 resets, J=K=1 toggles output!'}
                {ffType === 'D' && 'Next state faithfully captures input D.'}
                {ffType === 'T' && 'T=0 holds state, T=1 toggles state (Frequency divider).'}
              </div>
            </div>

            {/* Clock Button & State Display */}
            <div className="flex items-center gap-6">
              <div className="text-center">
                <button
                  onClick={triggerClockPulse}
                  className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs flex flex-col items-center gap-1 shadow-lg shadow-amber-500/30 transition-transform active:scale-95"
                >
                  <span>Trigger CLK Pulse ↑</span>
                  <span className="text-[10px] font-mono text-slate-800">Count: #{clockCount}</span>
                </button>
              </div>

              <div className="flex gap-3">
                <div className={`w-16 h-16 rounded-xl border flex flex-col items-center justify-center font-mono ${ffState === 1 ? 'bg-emerald-600 border-emerald-400 text-white shadow-lg shadow-emerald-600/40' : 'bg-slate-900 border-slate-700 text-slate-500'}`}>
                  <span className="text-[10px] uppercase font-sans">Output Q</span>
                  <span className="text-2xl font-bold">{ffState}</span>
                </div>

                <div className={`w-16 h-16 rounded-xl border flex flex-col items-center justify-center font-mono ${ffState === 0 ? 'bg-emerald-600 border-emerald-400 text-white shadow-lg shadow-emerald-600/40' : 'bg-slate-900 border-slate-700 text-slate-500'}`}>
                  <span className="text-[10px] uppercase font-sans">Inverted Q'</span>
                  <span className="text-2xl font-bold">{ffState === 1 ? 0 : 1}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

