import React from 'react';
import {
  NumberSystemsSvg,
  LogicGatesOverviewSvg,
  HalfAdderSvg,
  HalfSubtractorSvg,
  FullAdderSvg,
  MultiplexerSvg,
  DemultiplexerSvg,
  SRFlipFlopSvg,
  JKFlipFlopSvg,
  DFlipFlopSvg,
  TFlipFlopSvg
} from './DigitalCircuitSvgs';

// Electronic Component Symbols
export const SymbolSvg: React.FC<{ symbolType: string; className?: string }> = ({ symbolType, className = "w-32 h-24" }) => {
  switch (symbolType) {
    case 'resistor':
      return (
        <svg viewBox="0 0 160 80" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="10" y1="40" x2="35" y2="40" />
          <path d="M35 40 L45 20 L55 60 L65 20 L75 60 L85 20 L95 60 L105 20 L115 60 L125 40" stroke="#2563eb" />
          <line x1="125" y1="40" x2="150" y2="40" />
          <circle cx="10" cy="40" r="3" fill="#1e293b" />
          <circle cx="150" cy="40" r="3" fill="#1e293b" />
          <text x="75" y="15" textAnchor="middle" fill="#64748b" stroke="none" fontSize="11" fontFamily="sans-serif" fontWeight="600">R (Resistor - Unit: Ω)</text>
        </svg>
      );
    case 'variable_resistor':
      return (
        <svg viewBox="0 0 160 85" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="10" y1="45" x2="35" y2="45" />
          <path d="M35 45 L45 25 L55 65 L65 25 L75 65 L85 25 L95 65 L105 25 L115 65 L125 45" stroke="#2563eb" />
          <line x1="125" y1="45" x2="150" y2="45" />
          {/* Rheostat Arrow */}
          <line x1="45" y1="75" x2="110" y2="15" stroke="#dc2626" strokeWidth="2" />
          <polygon points="110,15 98,18 105,25" fill="#dc2626" stroke="#dc2626" />
          <circle cx="10" cy="45" r="3" fill="#1e293b" />
          <circle cx="150" cy="45" r="3" fill="#1e293b" />
          <text x="75" y="12" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="10" fontWeight="bold">Variable R / Potentiometer</text>
        </svg>
      );
    case 'transformer_step_up':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Header */}
          <text x="80" y="12" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="9.5" fontWeight="bold">Step-Up Transformer (Ns &gt; Np)</text>
          
          {/* Laminated Magnetic Iron Core (Two parallel lines) */}
          <line x1="78" y1="18" x2="78" y2="78" stroke="#64748b" strokeWidth="2" />
          <line x1="82" y1="18" x2="82" y2="78" stroke="#64748b" strokeWidth="2" />
          
          {/* Primary Winding (fewer turns: 3 turns, bulges inward towards core) */}
          <path d="M 66 26 A 8 8 0 0 1 66 42 A 8 8 0 0 1 66 58 A 8 8 0 0 1 66 74" stroke="#2563eb" strokeWidth="2.4" fill="none" />
          {/* Primary Leads & Terminals */}
          <line x1="14" y1="26" x2="66" y2="26" stroke="#1e293b" strokeWidth="2" />
          <circle cx="14" cy="26" r="3" fill="#1e293b" />
          <line x1="14" y1="74" x2="66" y2="74" stroke="#1e293b" strokeWidth="2" />
          <circle cx="14" cy="74" r="3" fill="#1e293b" />
          {/* Primary Polarity Dot */}
          <circle cx="56" cy="20" r="2.5" fill="#2563eb" stroke="none" />

          {/* Secondary Winding (more turns: 5 turns, bulges inward towards core) */}
          <path d="M 94 20 A 5.6 5.6 0 0 0 94 31.2 A 5.6 5.6 0 0 0 94 42.4 A 5.6 5.6 0 0 0 94 53.6 A 5.6 5.6 0 0 0 94 64.8 A 5.6 5.6 0 0 0 94 76" stroke="#059669" strokeWidth="2.4" fill="none" />
          {/* Secondary Leads & Terminals */}
          <line x1="94" y1="20" x2="146" y2="20" stroke="#1e293b" strokeWidth="2" />
          <circle cx="146" cy="20" r="3" fill="#1e293b" />
          <line x1="94" y1="76" x2="146" y2="76" stroke="#1e293b" strokeWidth="2" />
          <circle cx="146" cy="76" r="3" fill="#1e293b" />
          {/* Secondary Polarity Dot */}
          <circle cx="104" cy="14" r="2.5" fill="#059669" stroke="none" />

          {/* Labels */}
          <text x="36" y="86" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="8.5" fontWeight="bold">Np (Pri)</text>
          <text x="124" y="88" textAnchor="middle" fill="#059669" stroke="none" fontSize="8.5" fontWeight="bold">Ns (Sec)</text>
          <text x="80" y="96" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7.5">Vs &gt; Vp · Is &lt; Ip</text>
        </svg>
      );
    case 'transformer_step_down':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Header */}
          <text x="80" y="12" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="9.5" fontWeight="bold">Step-Down Transformer (Ns &lt; Np)</text>
          
          {/* Laminated Magnetic Iron Core (Two parallel lines) */}
          <line x1="78" y1="18" x2="78" y2="78" stroke="#64748b" strokeWidth="2" />
          <line x1="82" y1="18" x2="82" y2="78" stroke="#64748b" strokeWidth="2" />

          {/* Primary Winding (more turns: 5 turns, bulges inward towards core) */}
          <path d="M 66 20 A 5.6 5.6 0 0 1 66 31.2 A 5.6 5.6 0 0 1 66 42.4 A 5.6 5.6 0 0 1 66 53.6 A 5.6 5.6 0 0 1 66 64.8 A 5.6 5.6 0 0 1 66 76" stroke="#059669" strokeWidth="2.4" fill="none" />
          {/* Primary Leads & Terminals */}
          <line x1="14" y1="20" x2="66" y2="20" stroke="#1e293b" strokeWidth="2" />
          <circle cx="14" cy="20" r="3" fill="#1e293b" />
          <line x1="14" y1="76" x2="66" y2="76" stroke="#1e293b" strokeWidth="2" />
          <circle cx="14" cy="76" r="3" fill="#1e293b" />
          {/* Primary Polarity Dot */}
          <circle cx="56" cy="14" r="2.5" fill="#059669" stroke="none" />

          {/* Secondary Winding (fewer turns: 3 turns, bulges inward towards core) */}
          <path d="M 94 26 A 8 8 0 0 0 94 42 A 8 8 0 0 0 94 58 A 8 8 0 0 0 94 74" stroke="#2563eb" strokeWidth="2.4" fill="none" />
          {/* Secondary Leads & Terminals */}
          <line x1="94" y1="26" x2="146" y2="26" stroke="#1e293b" strokeWidth="2" />
          <circle cx="146" cy="26" r="3" fill="#1e293b" />
          <line x1="94" y1="74" x2="146" y2="74" stroke="#1e293b" strokeWidth="2" />
          <circle cx="146" cy="74" r="3" fill="#1e293b" />
          {/* Secondary Polarity Dot */}
          <circle cx="104" cy="20" r="2.5" fill="#2563eb" stroke="none" />

          {/* Labels */}
          <text x="36" y="88" textAnchor="middle" fill="#059669" stroke="none" fontSize="8.5" fontWeight="bold">Np (Pri)</text>
          <text x="124" y="86" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="8.5" fontWeight="bold">Ns (Sec)</text>
          <text x="80" y="96" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7.5">Vs &lt; Vp · Is &gt; Ip</text>
        </svg>
      );
    case 'voltage_source':
      return (
        <svg viewBox="0 0 160 90" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="65" cy="45" r="24" stroke="#2563eb" strokeWidth="2.5" fill="#f0f9ff" />
          <text x="65" y="38" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="16" fontWeight="bold">+</text>
          <text x="65" y="58" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="16" fontWeight="bold">-</text>
          {/* Leads */}
          <line x1="10" y1="45" x2="41" y2="45" stroke="#1e293b" />
          <line x1="89" y1="45" x2="115" y2="45" stroke="#1e293b" />
          {/* Internal series rs representation */}
          <path d="M115 45 L120 38 L125 52 L130 38 L135 52 L140 45" stroke="#64748b" strokeWidth="2" />
          <line x1="140" y1="45" x2="155" y2="45" stroke="#1e293b" />
          <text x="128" y="32" textAnchor="middle" fill="#64748b" stroke="none" fontSize="9">rs</text>
          <text x="65" y="82" textAnchor="middle" fill="#64748b" stroke="none" fontSize="10" fontWeight="600">Voltage Source (V)</text>
        </svg>
      );
    case 'current_source':
      return (
        <svg viewBox="0 0 160 90" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="80" cy="45" r="24" stroke="#059669" strokeWidth="2.5" fill="#ecfdf5" />
          {/* Directional arrow inside */}
          <line x1="65" y1="45" x2="95" y2="45" stroke="#059669" strokeWidth="2.5" />
          <polygon points="90,40 98,45 90,50" fill="#059669" stroke="#059669" />
          {/* Leads */}
          <line x1="10" y1="45" x2="56" y2="45" stroke="#1e293b" />
          <line x1="104" y1="45" x2="150" y2="45" stroke="#1e293b" />
          <circle cx="10" cy="45" r="3" fill="#1e293b" />
          <circle cx="150" cy="45" r="3" fill="#1e293b" />
          <text x="80" y="82" textAnchor="middle" fill="#64748b" stroke="none" fontSize="10" fontWeight="600">Current Source (I)</text>
        </svg>
      );
    case 'capacitor':
      return (
        <svg viewBox="0 0 160 80" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="10" y1="40" x2="70" y2="40" />
          <line x1="70" y1="20" x2="70" y2="60" stroke="#0284c7" strokeWidth="3" />
          <line x1="85" y1="20" x2="85" y2="60" stroke="#0284c7" strokeWidth="3" />
          <line x1="85" y1="40" x2="150" y2="40" />
          <circle cx="10" cy="40" r="3" fill="#1e293b" />
          <circle cx="150" cy="40" r="3" fill="#1e293b" />
          <text x="60" y="15" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="11" fontWeight="600">+</text>
          <text x="78" y="74" textAnchor="middle" fill="#64748b" stroke="none" fontSize="11" fontFamily="sans-serif" fontWeight="600">C (Capacitor)</text>
        </svg>
      );
    case 'inductor':
      return (
        <svg viewBox="0 0 160 80" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="10" y1="45" x2="35" y2="45" />
          <path d="M35 45 C35 25 55 25 55 45 C55 25 75 25 75 45 C75 25 95 25 95 45 C95 25 115 25 115 45" stroke="#7c3aed" />
          <line x1="115" y1="45" x2="150" y2="45" />
          <circle cx="10" cy="45" r="3" fill="#1e293b" />
          <circle cx="150" cy="45" r="3" fill="#1e293b" />
          <text x="75" y="18" textAnchor="middle" fill="#64748b" stroke="none" fontSize="11" fontFamily="sans-serif" fontWeight="600">L (Inductor)</text>
        </svg>
      );
    case 'diode':
      return (
        <svg viewBox="0 0 160 80" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="10" y1="40" x2="65" y2="40" />
          <polygon points="65,25 65,55 95,40" fill="#3b82f6" stroke="#2563eb" />
          <line x1="95" y1="25" x2="95" y2="55" stroke="#1e293b" strokeWidth="3" />
          <line x1="95" y1="40" x2="150" y2="40" />
          <circle cx="10" cy="40" r="3" fill="#1e293b" />
          <circle cx="150" cy="40" r="3" fill="#1e293b" />
          <text x="45" y="32" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="10" fontWeight="600">A (+)</text>
          <text x="115" y="32" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="10" fontWeight="600">K (-)</text>
          <text x="80" y="72" textAnchor="middle" fill="#64748b" stroke="none" fontSize="11" fontFamily="sans-serif" fontWeight="600">P-N Junction Diode</text>
        </svg>
      );
    case 'zener':
      return (
        <svg viewBox="0 0 160 80" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="10" y1="40" x2="65" y2="40" />
          <polygon points="65,25 65,55 95,40" fill="#0284c7" stroke="#0369a1" />
          {/* Zener cathode wings */}
          <path d="M85 25 L95 25 L95 55 L105 55" stroke="#1e293b" strokeWidth="2.5" />
          <line x1="95" y1="40" x2="150" y2="40" />
          <circle cx="10" cy="40" r="3" fill="#1e293b" />
          <circle cx="150" cy="40" r="3" fill="#1e293b" />
          <text x="45" y="32" textAnchor="middle" fill="#0369a1" stroke="none" fontSize="10" fontWeight="600">Anode</text>
          <text x="120" y="32" textAnchor="middle" fill="#0369a1" stroke="none" fontSize="10" fontWeight="600">Cathode</text>
          <text x="80" y="74" textAnchor="middle" fill="#64748b" stroke="none" fontSize="11" fontFamily="sans-serif" fontWeight="600">Zener Diode (Vz)</text>
        </svg>
      );
    case 'npn_bjt':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Package enclosure circle */}
          <circle cx="80" cy="50" r="36" fill="#f8fafc" stroke="#64748b" strokeWidth="1.8" />
          {/* Base Terminal & Lead */}
          <circle cx="14" cy="50" r="3.2" fill="#1e293b" stroke="#1e293b" />
          <line x1="14" y1="50" x2="62" y2="50" stroke="#1e293b" strokeWidth="2.4" />
          {/* Base Heavy Vertical Bar */}
          <line x1="62" y1="28" x2="62" y2="72" stroke="#0f172a" strokeWidth="4.2" strokeLinecap="round" />
          {/* Collector Branch (Top) */}
          <line x1="62" y1="38" x2="104" y2="18" stroke="#0284c7" strokeWidth="2.4" />
          <line x1="104" y1="18" x2="146" y2="18" stroke="#0284c7" strokeWidth="2.4" />
          <circle cx="146" cy="18" r="3.2" fill="#0284c7" stroke="#0284c7" />
          {/* Emitter Branch (Bottom) */}
          <line x1="62" y1="62" x2="104" y2="82" stroke="#dc2626" strokeWidth="2.4" />
          <line x1="104" y1="82" x2="146" y2="82" stroke="#dc2626" strokeWidth="2.4" />
          <circle cx="146" cy="82" r="3.2" fill="#dc2626" stroke="#dc2626" />
          {/* NPN Arrow: Points OUTWARDS along Emitter slant */}
          <polygon points="98,79 84,81 87,69" fill="#dc2626" stroke="#dc2626" strokeWidth="1" />
          {/* Terminal Labels */}
          <text x="14" y="42" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="10" fontWeight="bold">B</text>
          <text x="146" y="11" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="10" fontWeight="bold">C</text>
          <text x="146" y="97" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="10" fontWeight="bold">E</text>
          <text x="80" y="96" textAnchor="middle" fill="#475569" stroke="none" fontSize="9.5" fontWeight="600">NPN (Arrow Out)</text>
        </svg>
      );
    case 'pnp_bjt':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Package enclosure circle */}
          <circle cx="80" cy="50" r="36" fill="#f8fafc" stroke="#64748b" strokeWidth="1.8" />
          {/* Base Terminal & Lead */}
          <circle cx="14" cy="50" r="3.2" fill="#1e293b" stroke="#1e293b" />
          <line x1="14" y1="50" x2="62" y2="50" stroke="#1e293b" strokeWidth="2.4" />
          {/* Base Heavy Vertical Bar */}
          <line x1="62" y1="28" x2="62" y2="72" stroke="#0f172a" strokeWidth="4.2" strokeLinecap="round" />
          {/* Collector Branch (Top) */}
          <line x1="62" y1="38" x2="104" y2="18" stroke="#0284c7" strokeWidth="2.4" />
          <line x1="104" y1="18" x2="146" y2="18" stroke="#0284c7" strokeWidth="2.4" />
          <circle cx="146" cy="18" r="3.2" fill="#0284c7" stroke="#0284c7" />
          {/* Emitter Branch (Bottom) */}
          <line x1="62" y1="62" x2="104" y2="82" stroke="#dc2626" strokeWidth="2.4" />
          <line x1="104" y1="82" x2="146" y2="82" stroke="#dc2626" strokeWidth="2.4" />
          <circle cx="146" cy="82" r="3.2" fill="#dc2626" stroke="#dc2626" />
          {/* PNP Arrow: Points INWARDS towards Base bar along Emitter slant */}
          <polygon points="74,68 82,77 86,68" fill="#dc2626" stroke="#dc2626" strokeWidth="0.8" />
          {/* Terminal Labels */}
          <text x="14" y="42" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="10" fontWeight="bold">B</text>
          <text x="146" y="11" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="10" fontWeight="bold">C</text>
          <text x="146" y="97" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="10" fontWeight="bold">E</text>
          <text x="80" y="96" textAnchor="middle" fill="#475569" stroke="none" fontSize="9.5" fontWeight="600">PNP (Arrow In)</text>
        </svg>
      );
    case 'n_jfet':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="80" cy="50" r="36" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="75" y1="28" x2="75" y2="72" stroke="#1e293b" strokeWidth="3.5" />
          {/* Drain */}
          <line x1="75" y1="35" x2="110" y2="35" />
          <line x1="110" y1="35" x2="110" y2="15" stroke="#0284c7" />
          <line x1="110" y1="15" x2="140" y2="15" />
          {/* Source */}
          <line x1="75" y1="65" x2="110" y2="65" />
          <line x1="110" y1="65" x2="110" y2="85" stroke="#0284c7" />
          <line x1="110" y1="85" x2="140" y2="85" />
          {/* Gate with inward arrow for N-channel */}
          <line x1="20" y1="50" x2="75" y2="50" stroke="#7c3aed" />
          <polygon points="62,45 75,50 62,55" fill="#7c3aed" stroke="#7c3aed" />
          <text x="16" y="45" fill="#7c3aed" stroke="none" fontSize="10" fontWeight="bold">G</text>
          <text x="135" y="12" fill="#0284c7" stroke="none" fontSize="10" fontWeight="bold">D</text>
          <text x="135" y="98" fill="#0284c7" stroke="none" fontSize="10" fontWeight="bold">S</text>
          <text x="80" y="96" textAnchor="middle" fill="#64748b" stroke="none" fontSize="10" fontWeight="600">N-Channel JFET</text>
        </svg>
      );
    case 'n_mosfet':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="80" cy="50" r="36" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
          {/* Insulated gate plate */}
          <line x1="55" y1="28" x2="55" y2="72" stroke="#1e293b" strokeWidth="3" />
          <line x1="20" y1="50" x2="55" y2="50" stroke="#7c3aed" />
          {/* Channel segments */}
          <line x1="68" y1="28" x2="68" y2="38" stroke="#0284c7" strokeWidth="3" />
          <line x1="68" y1="45" x2="68" y2="55" stroke="#0284c7" strokeWidth="3" />
          <line x1="68" y1="62" x2="68" y2="72" stroke="#0284c7" strokeWidth="3" />
          {/* Drain */}
          <line x1="68" y1="33" x2="110" y2="33" />
          <line x1="110" y1="33" x2="110" y2="15" />
          <line x1="110" y1="15" x2="140" y2="15" />
          {/* Source & Bulk tied */}
          <line x1="68" y1="67" x2="110" y2="67" />
          <line x1="110" y1="67" x2="110" y2="85" />
          <line x1="110" y1="85" x2="140" y2="85" />
          {/* Substrate arrow inwards */}
          <line x1="68" y1="50" x2="100" y2="50" />
          <polygon points="78,46 68,50 78,54" fill="#0284c7" stroke="#0284c7" />
          <line x1="100" y1="50" x2="100" y2="67" />
          <text x="16" y="46" fill="#7c3aed" stroke="none" fontSize="10" fontWeight="bold">G</text>
          <text x="135" y="12" fill="#0284c7" stroke="none" fontSize="10" fontWeight="bold">D</text>
          <text x="135" y="98" fill="#0284c7" stroke="none" fontSize="10" fontWeight="bold">S</text>
          <text x="80" y="96" textAnchor="middle" fill="#64748b" stroke="none" fontSize="10" fontWeight="600">N-Ch E-MOSFET</text>
        </svg>
      );
    case 'p_mosfet':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="80" cy="50" r="36" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
          {/* Insulated gate plate */}
          <line x1="55" y1="28" x2="55" y2="72" stroke="#1e293b" strokeWidth="3" />
          <circle cx="48" cy="50" r="4" stroke="#dc2626" strokeWidth="1.8" />
          <line x1="20" y1="50" x2="44" y2="50" stroke="#7c3aed" />
          {/* Channel segments */}
          <line x1="68" y1="28" x2="68" y2="38" stroke="#dc2626" strokeWidth="3" />
          <line x1="68" y1="45" x2="68" y2="55" stroke="#dc2626" strokeWidth="3" />
          <line x1="68" y1="62" x2="68" y2="72" stroke="#dc2626" strokeWidth="3" />
          {/* Drain */}
          <line x1="68" y1="33" x2="110" y2="33" />
          <line x1="110" y1="33" x2="110" y2="15" />
          <line x1="110" y1="15" x2="140" y2="15" />
          {/* Source & Bulk tied */}
          <line x1="68" y1="67" x2="110" y2="67" />
          <line x1="110" y1="67" x2="110" y2="85" />
          <line x1="110" y1="85" x2="140" y2="85" />
          {/* Substrate arrow outwards */}
          <line x1="68" y1="50" x2="100" y2="50" />
          <polygon points="90,46 100,50 90,54" fill="#dc2626" stroke="#dc2626" />
          <line x1="100" y1="50" x2="100" y2="67" />
          <text x="14" y="46" fill="#7c3aed" stroke="none" fontSize="10" fontWeight="bold">G</text>
          <text x="135" y="12" fill="#dc2626" stroke="none" fontSize="10" fontWeight="bold">D</text>
          <text x="135" y="98" fill="#dc2626" stroke="none" fontSize="10" fontWeight="bold">S</text>
          <text x="80" y="96" textAnchor="middle" fill="#64748b" stroke="none" fontSize="10" fontWeight="600">P-Ch E-MOSFET</text>
        </svg>
      );
    case 'opamp':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="45,15 45,85 115,50" fill="#f8fafc" stroke="#2563eb" strokeWidth="2.5" />
          {/* Inverting input */}
          <line x1="15" y1="32" x2="45" y2="32" stroke="#1e293b" />
          <line x1="52" y1="32" x2="60" y2="32" stroke="#dc2626" strokeWidth="2.5" /> {/* minus sign */}
          {/* Non-inverting input */}
          <line x1="15" y1="68" x2="45" y2="68" stroke="#1e293b" />
          <line x1="52" y1="68" x2="60" y2="68" stroke="#059669" strokeWidth="2.5" /> {/* plus sign */}
          <line x1="56" y1="64" x2="56" y2="72" stroke="#059669" strokeWidth="2.5" />
          {/* Output */}
          <line x1="115" y1="50" x2="148" y2="50" stroke="#1e293b" strokeWidth="2.5" />
          <circle cx="15" cy="32" r="3" fill="#1e293b" />
          <circle cx="15" cy="68" r="3" fill="#1e293b" />
          <circle cx="148" cy="50" r="3" fill="#1e293b" />
          <text x="10" y="24" fill="#dc2626" stroke="none" fontSize="9" fontWeight="bold">V- (Inv)</text>
          <text x="10" y="88" fill="#059669" stroke="none" fontSize="9" fontWeight="bold">V+ (Non)</text>
          <text x="135" y="42" fill="#2563eb" stroke="none" fontSize="10" fontWeight="bold">Vout</text>
          <text x="80" y="96" textAnchor="middle" fill="#64748b" stroke="none" fontSize="9" fontWeight="600">Op-Amp (741)</text>
        </svg>
      );
    case 'logic_gates':
    case 'nand_gate':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* NAND Gate */}
          <line x1="15" y1="32" x2="52" y2="32" stroke="#1e293b" />
          <line x1="15" y1="58" x2="52" y2="58" stroke="#1e293b" />
          <path d="M52 20 L72 20 C92 20 104 32 104 45 C104 58 92 70 72 70 L52 70 Z" fill="#f8fafc" stroke="#4f46e5" />
          <circle cx="110" cy="45" r="5" stroke="#4f46e5" fill="#ffffff" strokeWidth="2" />
          <line x1="116" y1="45" x2="148" y2="45" stroke="#1e293b" />
          <text x="20" y="26" fill="#64748b" stroke="none" fontSize="10">A</text>
          <text x="20" y="74" fill="#64748b" stroke="none" fontSize="10">B</text>
          <text x="122" y="38" fill="#4f46e5" stroke="none" fontSize="10" fontWeight="bold">Y=(A·B)'</text>
          <text x="80" y="94" textAnchor="middle" fill="#64748b" stroke="none" fontSize="10" fontWeight="600">NAND Gate (7400)</text>
        </svg>
      );
    case 'and_gate':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* AND Gate */}
          <line x1="15" y1="32" x2="55" y2="32" stroke="#1e293b" />
          <line x1="15" y1="58" x2="55" y2="58" stroke="#1e293b" />
          <path d="M55 20 L78 20 C100 20 110 32 110 45 C110 58 100 70 78 70 L55 70 Z" fill="#f8fafc" stroke="#0284c7" />
          <line x1="110" y1="45" x2="148" y2="45" stroke="#1e293b" />
          <text x="20" y="26" fill="#64748b" stroke="none" fontSize="10">A</text>
          <text x="20" y="74" fill="#64748b" stroke="none" fontSize="10">B</text>
          <text x="122" y="38" fill="#0284c7" stroke="none" fontSize="10" fontWeight="bold">Y = A·B</text>
          <text x="80" y="94" textAnchor="middle" fill="#64748b" stroke="none" fontSize="10" fontWeight="600">AND Gate (7408)</text>
        </svg>
      );
    case 'or_gate':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* OR Gate */}
          <line x1="15" y1="32" x2="58" y2="32" stroke="#1e293b" />
          <line x1="15" y1="58" x2="58" y2="58" stroke="#1e293b" />
          <path d="M50 20 Q65 45 50 70 C85 68 105 56 118 45 C105 34 85 22 50 20 Z" fill="#f8fafc" stroke="#dc2626" />
          <line x1="118" y1="45" x2="148" y2="45" stroke="#1e293b" />
          <text x="20" y="26" fill="#64748b" stroke="none" fontSize="10">A</text>
          <text x="20" y="74" fill="#64748b" stroke="none" fontSize="10">B</text>
          <text x="122" y="38" fill="#dc2626" stroke="none" fontSize="10" fontWeight="bold">Y = A+B</text>
          <text x="80" y="94" textAnchor="middle" fill="#64748b" stroke="none" fontSize="10" fontWeight="600">OR Gate (7432)</text>
        </svg>
      );
    case 'not_gate':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* NOT Gate (Inverter) */}
          <line x1="18" y1="45" x2="55" y2="45" stroke="#1e293b" />
          <polygon points="55,20 55,70 100,45" fill="#f8fafc" stroke="#d97706" />
          <circle cx="106" cy="45" r="5" stroke="#d97706" fill="#ffffff" strokeWidth="2" />
          <line x1="112" y1="45" x2="148" y2="45" stroke="#1e293b" />
          <text x="24" y="38" fill="#64748b" stroke="none" fontSize="10">A</text>
          <text x="126" y="38" fill="#d97706" stroke="none" fontSize="10" fontWeight="bold">Y = A'</text>
          <text x="80" y="94" textAnchor="middle" fill="#64748b" stroke="none" fontSize="10" fontWeight="600">NOT Inverter (7404)</text>
        </svg>
      );
    case 'nor_gate':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* NOR Gate */}
          <line x1="15" y1="32" x2="56" y2="32" stroke="#1e293b" />
          <line x1="15" y1="58" x2="56" y2="58" stroke="#1e293b" />
          <path d="M48 20 Q63 45 48 70 C83 68 102 56 112 45 C102 34 83 22 48 20 Z" fill="#f8fafc" stroke="#7c3aed" />
          <circle cx="118" cy="45" r="5" stroke="#7c3aed" fill="#ffffff" strokeWidth="2" />
          <line x1="124" y1="45" x2="148" y2="45" stroke="#1e293b" />
          <text x="20" y="26" fill="#64748b" stroke="none" fontSize="10">A</text>
          <text x="20" y="74" fill="#64748b" stroke="none" fontSize="10">B</text>
          <text x="120" y="38" fill="#7c3aed" stroke="none" fontSize="10" fontWeight="bold">Y=(A+B)'</text>
          <text x="80" y="94" textAnchor="middle" fill="#64748b" stroke="none" fontSize="10" fontWeight="600">NOR Gate (7402)</text>
        </svg>
      );
    case 'xor_gate':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* XOR Gate */}
          <line x1="15" y1="32" x2="48" y2="32" stroke="#1e293b" />
          <line x1="15" y1="58" x2="48" y2="58" stroke="#1e293b" />
          <path d="M42 20 Q56 45 42 70" stroke="#059669" strokeWidth="2.5" />
          <path d="M50 20 Q64 45 50 70 C85 68 105 56 118 45 C105 34 85 22 50 20 Z" fill="#f8fafc" stroke="#059669" />
          <line x1="118" y1="45" x2="148" y2="45" stroke="#1e293b" />
          <text x="20" y="26" fill="#64748b" stroke="none" fontSize="10">A</text>
          <text x="20" y="74" fill="#64748b" stroke="none" fontSize="10">B</text>
          <text x="122" y="38" fill="#059669" stroke="none" fontSize="10" fontWeight="bold">Y=A⊕B</text>
          <text x="80" y="94" textAnchor="middle" fill="#64748b" stroke="none" fontSize="10" fontWeight="600">XOR Gate (7486)</text>
        </svg>
      );
    case 'xnor_gate':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* XNOR Gate */}
          <line x1="15" y1="32" x2="44" y2="32" stroke="#1e293b" />
          <line x1="15" y1="58" x2="44" y2="58" stroke="#1e293b" />
          <path d="M38 20 Q52 45 38 70" stroke="#ea580c" strokeWidth="2.5" />
          <path d="M46 20 Q60 45 46 70 C81 68 100 56 112 45 C100 34 81 22 46 20 Z" fill="#f8fafc" stroke="#ea580c" />
          <circle cx="118" cy="45" r="5" stroke="#ea580c" fill="#ffffff" strokeWidth="2" />
          <line x1="124" y1="45" x2="148" y2="45" stroke="#1e293b" />
          <text x="20" y="26" fill="#64748b" stroke="none" fontSize="10">A</text>
          <text x="20" y="74" fill="#64748b" stroke="none" fontSize="10">B</text>
          <text x="120" y="38" fill="#ea580c" stroke="none" fontSize="10" fontWeight="bold">Y=(A⊕B)'</text>
          <text x="80" y="94" textAnchor="middle" fill="#64748b" stroke="none" fontSize="10" fontWeight="600">XNOR Gate (74266)</text>
        </svg>
      );
    case 'flip_flop_sr':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="45" y="15" width="70" height="70" rx="4" fill="#f8fafc" stroke="#1e293b" strokeWidth="2" />
          {/* Inputs S and R */}
          <line x1="15" y1="30" x2="45" y2="30" stroke="#1e293b" />
          <line x1="15" y1="70" x2="45" y2="70" stroke="#1e293b" />
          {/* Clock triangle */}
          <line x1="15" y1="50" x2="45" y2="50" stroke="#1e293b" />
          <polyline points="45,45 53,50 45,55" stroke="#1e293b" fill="none" strokeWidth="1.5" />
          {/* Outputs Q and Q' */}
          <line x1="115" y1="30" x2="145" y2="30" stroke="#1e293b" />
          <line x1="115" y1="70" x2="145" y2="70" stroke="#1e293b" />
          <circle cx="118" cy="70" r="3" fill="#ffffff" stroke="#1e293b" strokeWidth="1.5" />
          <text x="52" y="34" fill="#1e293b" stroke="none" fontSize="10" fontWeight="bold">S</text>
          <text x="52" y="74" fill="#1e293b" stroke="none" fontSize="10" fontWeight="bold">R</text>
          <text x="24" y="47" fill="#64748b" stroke="none" fontSize="8" fontWeight="bold">CLK</text>
          <text x="100" y="34" fill="#1e293b" stroke="none" fontSize="10" fontWeight="bold">Q</text>
          <text x="100" y="74" fill="#1e293b" stroke="none" fontSize="10" fontWeight="bold">Q'</text>
          <text x="80" y="96" textAnchor="middle" fill="#64748b" stroke="none" fontSize="9" fontWeight="600">SR Flip-Flop</text>
        </svg>
      );
    case 'flip_flop_jk':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="45" y="15" width="70" height="70" rx="4" fill="#f8fafc" stroke="#1e293b" strokeWidth="2" />
          <line x1="15" y1="30" x2="45" y2="30" stroke="#1e293b" />
          <line x1="15" y1="70" x2="45" y2="70" stroke="#1e293b" />
          <line x1="15" y1="50" x2="45" y2="50" stroke="#1e293b" />
          <polyline points="45,45 53,50 45,55" stroke="#1e293b" fill="none" strokeWidth="1.5" />
          <line x1="115" y1="30" x2="145" y2="30" stroke="#1e293b" />
          <line x1="115" y1="70" x2="145" y2="70" stroke="#1e293b" />
          <circle cx="118" cy="70" r="3" fill="#ffffff" stroke="#1e293b" strokeWidth="1.5" />
          <text x="52" y="34" fill="#1e293b" stroke="none" fontSize="10" fontWeight="bold">J</text>
          <text x="52" y="74" fill="#1e293b" stroke="none" fontSize="10" fontWeight="bold">K</text>
          <text x="24" y="47" fill="#64748b" stroke="none" fontSize="8" fontWeight="bold">CLK</text>
          <text x="100" y="34" fill="#1e293b" stroke="none" fontSize="10" fontWeight="bold">Q</text>
          <text x="100" y="74" fill="#1e293b" stroke="none" fontSize="10" fontWeight="bold">Q'</text>
          <text x="80" y="96" textAnchor="middle" fill="#64748b" stroke="none" fontSize="9" fontWeight="600">JK Flip-Flop (7476)</text>
        </svg>
      );
    case 'flip_flop_d':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="45" y="15" width="70" height="70" rx="4" fill="#f8fafc" stroke="#1e293b" strokeWidth="2" />
          <line x1="15" y1="30" x2="45" y2="30" stroke="#1e293b" />
          <line x1="15" y1="50" x2="45" y2="50" stroke="#1e293b" />
          <polyline points="45,45 53,50 45,55" stroke="#1e293b" fill="none" strokeWidth="1.5" />
          <line x1="115" y1="30" x2="145" y2="30" stroke="#1e293b" />
          <line x1="115" y1="70" x2="145" y2="70" stroke="#1e293b" />
          <circle cx="118" cy="70" r="3" fill="#ffffff" stroke="#1e293b" strokeWidth="1.5" />
          <text x="52" y="34" fill="#1e293b" stroke="none" fontSize="10" fontWeight="bold">D</text>
          <text x="24" y="47" fill="#64748b" stroke="none" fontSize="8" fontWeight="bold">CLK</text>
          <text x="100" y="34" fill="#1e293b" stroke="none" fontSize="10" fontWeight="bold">Q</text>
          <text x="100" y="74" fill="#1e293b" stroke="none" fontSize="10" fontWeight="bold">Q'</text>
          <text x="80" y="96" textAnchor="middle" fill="#64748b" stroke="none" fontSize="9" fontWeight="600">D Flip-Flop (7474)</text>
        </svg>
      );
    case 'flip_flop_t':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="45" y="15" width="70" height="70" rx="4" fill="#f8fafc" stroke="#1e293b" strokeWidth="2" />
          <line x1="15" y1="30" x2="45" y2="30" stroke="#1e293b" />
          <line x1="15" y1="50" x2="45" y2="50" stroke="#1e293b" />
          <polyline points="45,45 53,50 45,55" stroke="#1e293b" fill="none" strokeWidth="1.5" />
          <line x1="115" y1="30" x2="145" y2="30" stroke="#1e293b" />
          <line x1="115" y1="70" x2="145" y2="70" stroke="#1e293b" />
          <circle cx="118" cy="70" r="3" fill="#ffffff" stroke="#1e293b" strokeWidth="1.5" />
          <text x="52" y="34" fill="#1e293b" stroke="none" fontSize="10" fontWeight="bold">T</text>
          <text x="24" y="47" fill="#64748b" stroke="none" fontSize="8" fontWeight="bold">CLK</text>
          <text x="100" y="34" fill="#1e293b" stroke="none" fontSize="10" fontWeight="bold">Q</text>
          <text x="100" y="74" fill="#1e293b" stroke="none" fontSize="10" fontWeight="bold">Q'</text>
          <text x="80" y="96" textAnchor="middle" fill="#64748b" stroke="none" fontSize="9" fontWeight="600">T Flip-Flop (Toggle)</text>
        </svg>
      );
    case 'multiplexer_sym':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Trapezoid MUX */}
          <polygon points="50,15 110,25 110,75 50,85" fill="#f8fafc" stroke="#1e293b" strokeWidth="2" />
          <line x1="20" y1="26" x2="50" y2="26" stroke="#1e293b" />
          <line x1="20" y1="40" x2="50" y2="40" stroke="#1e293b" />
          <line x1="20" y1="60" x2="50" y2="60" stroke="#1e293b" />
          <line x1="20" y1="74" x2="50" y2="74" stroke="#1e293b" />
          <line x1="110" y1="50" x2="140" y2="50" stroke="#1e293b" strokeWidth="2.5" />
          {/* Select lines underneath */}
          <line x1="70" y1="81" x2="70" y2="95" stroke="#4f46e5" strokeWidth="1.5" />
          <line x1="90" y1="78" x2="90" y2="95" stroke="#4f46e5" strokeWidth="1.5" />
          <text x="56" y="30" fill="#64748b" stroke="none" fontSize="8">I0</text>
          <text x="56" y="44" fill="#64748b" stroke="none" fontSize="8">I1</text>
          <text x="56" y="64" fill="#64748b" stroke="none" fontSize="8">I2</text>
          <text x="56" y="78" fill="#64748b" stroke="none" fontSize="8">I3</text>
          <text x="96" y="53" fill="#1e293b" stroke="none" fontSize="9" fontWeight="bold">Y</text>
          <text x="64" y="94" fill="#4f46e5" stroke="none" fontSize="7" fontWeight="bold">S1</text>
          <text x="84" y="94" fill="#4f46e5" stroke="none" fontSize="7" fontWeight="bold">S0</text>
          <text x="80" y="53" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="10" fontWeight="bold">4:1 MUX</text>
        </svg>
      );
    case 'demultiplexer_sym':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Inverted Trapezoid DeMUX */}
          <polygon points="50,25 110,15 110,85 50,75" fill="#f8fafc" stroke="#1e293b" strokeWidth="2" />
          <line x1="20" y1="50" x2="50" y2="50" stroke="#1e293b" strokeWidth="2.5" />
          <line x1="110" y1="26" x2="140" y2="26" stroke="#1e293b" />
          <line x1="110" y1="40" x2="140" y2="40" stroke="#1e293b" />
          <line x1="110" y1="60" x2="140" y2="60" stroke="#1e293b" />
          <line x1="110" y1="74" x2="140" y2="74" stroke="#1e293b" />
          <line x1="70" y1="78" x2="70" y2="95" stroke="#4f46e5" strokeWidth="1.5" />
          <line x1="90" y1="81" x2="90" y2="95" stroke="#4f46e5" strokeWidth="1.5" />
          <text x="54" y="53" fill="#1e293b" stroke="none" fontSize="8" fontWeight="bold">Din</text>
          <text x="96" y="30" fill="#64748b" stroke="none" fontSize="8">Y0</text>
          <text x="96" y="44" fill="#64748b" stroke="none" fontSize="8">Y1</text>
          <text x="96" y="64" fill="#64748b" stroke="none" fontSize="8">Y2</text>
          <text x="96" y="78" fill="#64748b" stroke="none" fontSize="8">Y3</text>
          <text x="64" y="94" fill="#4f46e5" stroke="none" fontSize="7" fontWeight="bold">S1</text>
          <text x="84" y="94" fill="#4f46e5" stroke="none" fontSize="7" fontWeight="bold">S0</text>
          <text x="80" y="53" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="9" fontWeight="bold">1:4 DeMUX</text>
        </svg>
      );
    case 'am_comm':
      return (
        <svg viewBox="0 0 160 90" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Antenna */}
          <line x1="30" y1="65" x2="30" y2="20" stroke="#0284c7" strokeWidth="2.5" />
          <line x1="15" y1="20" x2="45" y2="20" stroke="#0284c7" strokeWidth="2.5" />
          <line x1="30" y1="20" x2="18" y2="10" stroke="#0284c7" strokeWidth="2" />
          <line x1="30" y1="20" x2="42" y2="10" stroke="#0284c7" strokeWidth="2" />
          {/* Waves */}
          <path d="M55 25 C65 15 75 15 85 25 C95 35 105 35 115 25 C125 15 135 15 145 25" stroke="#6366f1" strokeWidth="2" />
          <path d="M55 45 C65 35 75 35 85 45 C95 55 105 55 115 45 C125 35 135 35 145 45" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 2" />
          <text x="80" y="80" textAnchor="middle" fill="#64748b" stroke="none" fontSize="10" fontWeight="600">RF Carrier + Mod. Signal</text>
        </svg>
      );
    default:
      return null;
  }
};

// Full Circuit Schematics Renderer
export const CircuitDiagramSvg: React.FC<{ circuitId: string; className?: string }> = ({ circuitId, className = "w-full max-w-3xl h-auto" }) => {
  switch (circuitId) {
    // 1. Basic Circuit Components: Kirchhoff's Laws (KCL & KVL)
    case 'kirchhoff_laws_circuit':
      return (
        <svg viewBox="0 0 540 250" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="540" height="250" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          
          {/* Dividing dashed separator */}
          <line x1="270" y1="20" x2="270" y2="230" stroke="#cbd5e1" strokeDasharray="4 4" />

          {/* LEFT: Kirchhoff's Current Law (KCL) Node */}
          <text x="135" y="32" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="13" fontWeight="bold">Kirchhoff's Current Law (KCL)</text>
          <text x="135" y="48" textAnchor="middle" fill="#64748b" stroke="none" fontSize="10">At Node: Σ I_in = Σ I_out</text>

          {/* Central Node Dot */}
          <circle cx="135" cy="130" r="7" fill="#dc2626" stroke="#1e293b" strokeWidth="2" />
          <text x="148" y="125" fill="#dc2626" stroke="none" fontSize="11" fontWeight="bold">Node A</text>

          {/* Incoming Branch 1 (I1) */}
          <line x1="40" y1="80" x2="135" y2="130" stroke="#2563eb" strokeWidth="2.5" />
          <polygon points="80,97 90,105 84,110" fill="#2563eb" stroke="#2563eb" />
          <text x="45" y="75" fill="#2563eb" stroke="none" fontSize="11" fontWeight="bold">I1 (In)</text>

          {/* Incoming Branch 2 (I2) */}
          <line x1="40" y1="180" x2="135" y2="130" stroke="#2563eb" strokeWidth="2.5" />
          <polygon points="85,152 93,148 90,158" fill="#2563eb" stroke="#2563eb" />
          <text x="45" y="195" fill="#2563eb" stroke="none" fontSize="11" fontWeight="bold">I2 (In)</text>

          {/* Outgoing Branch 3 (I3) */}
          <line x1="135" y1="130" x2="230" y2="80" stroke="#059669" strokeWidth="2.5" />
          <polygon points="180,102 190,98 185,110" fill="#059669" stroke="#059669" />
          <text x="225" y="75" fill="#059669" stroke="none" fontSize="11" fontWeight="bold">I3 (Out)</text>

          {/* Outgoing Branch 4 (I4) */}
          <line x1="135" y1="130" x2="230" y2="180" stroke="#059669" strokeWidth="2.5" />
          <polygon points="182,152 192,158 185,165" fill="#059669" stroke="#059669" />
          <text x="225" y="195" fill="#059669" stroke="none" fontSize="11" fontWeight="bold">I4 (Out)</text>

          <text x="135" y="228" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="11" fontWeight="600">
            I1 + I2 = I3 + I4 (Conservation of Charge)
          </text>

          {/* RIGHT: Kirchhoff's Voltage Law (KVL) Loop */}
          <text x="405" y="32" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="13" fontWeight="bold">Kirchhoff's Voltage Law (KVL)</text>
          <text x="405" y="48" textAnchor="middle" fill="#64748b" stroke="none" fontSize="10">Around Closed Mesh: Σ V = 0</text>

          {/* Mesh Rectangular Circuit */}
          <rect x="310" y="70" width="190" height="120" rx="4" fill="none" stroke="#1e293b" strokeWidth="2" />

          {/* DC Source E on Left side */}
          <circle cx="310" cy="130" r="18" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
          <text x="310" y="124" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="14" fontWeight="bold">+</text>
          <text x="310" y="142" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="14" fontWeight="bold">-</text>
          <text x="282" y="134" fill="#2563eb" stroke="none" fontSize="12" fontWeight="bold">Vs</text>

          {/* Resistor R1 on Top */}
          <rect x="375" y="62" width="60" height="16" fill="#ffffff" stroke="#1e293b" />
          <path d="M375 70 L385 64 L395 76 L405 64 L415 76 L425 64 L435 70" stroke="#1e293b" strokeWidth="2" />
          <text x="405" y="56" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="11" fontWeight="bold">R1 (Drop V1 = I·R1)</text>

          {/* Resistor R2 on Right side */}
          <rect x="492" y="105" width="16" height="50" fill="#ffffff" stroke="#1e293b" />
          <path d="M500 105 L494 115 L506 125 L494 135 L506 145 L500 155" stroke="#1e293b" strokeWidth="2" />
          <text x="500" y="172" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="10" fontWeight="bold">R2 (V2)</text>

          {/* Clockwise Loop Arrow */}
          <path d="M390 120 A20 20 0 1 1 420 135" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
          <polygon points="420,135 418,127 426,130" fill="#dc2626" stroke="#dc2626" />
          <text x="405" y="132" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="9" fontWeight="bold">Loop I</text>

          <text x="405" y="228" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="11" fontWeight="600">
            Vs - I·R1 - I·R2 = 0 (Conservation of Energy)
          </text>
        </svg>
      );

    // 1. Basic Circuit Components: Equivalent Impedance of Series & Parallel R-C
    case 'rc_impedance_circuit':
      return (
        <svg viewBox="0 0 560 280" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="560" height="280" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />

          {/* Title Header */}
          <text x="280" y="26" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="13" fontWeight="bold">
            Equivalent Impedance of Series & Parallel R-C Circuits
          </text>
          <text x="280" y="42" textAnchor="middle" fill="#64748b" stroke="none" fontSize="10">
            Capacitive Reactance Xc = 1/(2πfC) = 1/(ωC) · Current Leads Voltage (Leading Power Factor)
          </text>

          {/* Vertical dividing line */}
          <line x1="280" y1="52" x2="280" y2="245" stroke="#cbd5e1" strokeDasharray="3 3" />

          {/* LEFT: Series R-C Circuit */}
          <rect x="15" y="52" width="255" height="190" rx="6" fill="#f1f5f9" fillOpacity="0.4" stroke="#e2e8f0" />
          <text x="25" y="70" fill="#2563eb" stroke="none" fontSize="11" fontWeight="bold">1. Series R-C Combination:</text>

          {/* AC Supply */}
          <circle cx="45" cy="125" r="15" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
          <path d="M38 125 Q42 118 45 125 T52 125" stroke="#2563eb" strokeWidth="1.5" />
          <text x="45" y="152" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="8" fontWeight="bold">v=Vm sin ωt</text>

          {/* Top Wire with R and C */}
          <line x1="45" y1="110" x2="45" y2="92" stroke="#1e293b" />
          <line x1="45" y1="92" x2="75" y2="92" stroke="#1e293b" />

          {/* Resistor R */}
          <path d="M75 92 L81 85 L88 99 L95 85 L102 99 L109 85 L115 92" stroke="#2563eb" strokeWidth="2" />
          <text x="95" y="80" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="10" fontWeight="bold">R (VR)</text>

          <line x1="115" y1="92" x2="135" y2="92" stroke="#1e293b" />

          {/* Capacitor C */}
          <line x1="135" y1="82" x2="135" y2="102" stroke="#0284c7" strokeWidth="2.5" />
          <line x1="142" y1="82" x2="142" y2="102" stroke="#0284c7" strokeWidth="2.5" />
          <text x="138" y="77" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="10" fontWeight="bold">C (Vc)</text>

          <line x1="142" y1="92" x2="185" y2="92" stroke="#1e293b" />
          <line x1="185" y1="92" x2="185" y2="160" stroke="#1e293b" />
          <line x1="185" y1="160" x2="45" y2="160" stroke="#1e293b" />
          <line x1="45" y1="160" x2="45" y2="140" stroke="#1e293b" />

          {/* Series Impedance Triangle */}
          <g transform="translate(195, 75)">
            <line x1="10" y1="10" x2="55" y2="10" stroke="#2563eb" strokeWidth="2" />
            <text x="32" y="6" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="8" fontWeight="bold">R</text>
            <line x1="55" y1="10" x2="55" y2="45" stroke="#0284c7" strokeWidth="2" />
            <text x="65" y="30" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="8" fontWeight="bold">-jXc</text>
            <line x1="10" y1="10" x2="55" y2="45" stroke="#dc2626" strokeWidth="2" />
            <text x="25" y="35" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="9" fontWeight="bold">Zs</text>
            <path d="M22 10 A12 12 0 0 1 20 18" stroke="#d97706" strokeWidth="1" fill="none" />
            <text x="24" y="20" fill="#d97706" stroke="none" fontSize="7" fontWeight="bold">-θ</text>
          </g>

          {/* Series Formulas */}
          <text x="142" y="185" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="9.5" fontWeight="bold">
            Zs = R - j Xc = √[R² + (1/ωC)²] ∠ -θ
          </text>
          <text x="142" y="200" textAnchor="middle" fill="#475569" stroke="none" fontSize="8.5">
            θ = tan⁻¹(Xc / R) · cos θ = R / |Zs| (Leading PF)
          </text>
          <text x="142" y="215" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="8.5" fontWeight="600">
            Total Voltage V = √[VR² + Vc²] (Current leads by θ)
          </text>

          {/* RIGHT: Parallel R-C Circuit */}
          <rect x="290" y="52" width="255" height="190" rx="6" fill="#f1f5f9" fillOpacity="0.4" stroke="#e2e8f0" />
          <text x="300" y="70" fill="#059669" stroke="none" fontSize="11" fontWeight="bold">2. Parallel R-C Combination:</text>

          {/* AC Supply */}
          <circle cx="318" cy="125" r="15" fill="#ffffff" stroke="#059669" strokeWidth="2" />
          <path d="M311 125 Q315 118 318 125 T325 125" stroke="#059669" strokeWidth="1.5" />
          <text x="318" y="152" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="8" fontWeight="bold">v=Vm sin ωt</text>

          {/* Rails */}
          <line x1="318" y1="110" x2="318" y2="88" stroke="#1e293b" />
          <line x1="318" y1="88" x2="430" y2="88" stroke="#1e293b" />
          <line x1="318" y1="140" x2="318" y2="162" stroke="#1e293b" />
          <line x1="318" y1="162" x2="430" y2="162" stroke="#1e293b" />

          {/* Branch 1: Resistor R */}
          <line x1="365" y1="88" x2="365" y2="105" stroke="#1e293b" />
          <path d="M365 105 L358 111 L372 118 L358 125 L372 132 L358 139 L365 145" stroke="#2563eb" strokeWidth="2" />
          <line x1="365" y1="145" x2="365" y2="162" stroke="#1e293b" />
          <text x="345" y="127" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="9" fontWeight="bold">R (IR)</text>

          {/* Branch 2: Capacitor C */}
          <line x1="420" y1="88" x2="420" y2="120" stroke="#1e293b" />
          <line x1="412" y1="120" x2="428" y2="120" stroke="#0284c7" strokeWidth="2.5" />
          <line x1="412" y1="128" x2="428" y2="128" stroke="#0284c7" strokeWidth="2.5" />
          <line x1="420" y1="128" x2="420" y2="162" stroke="#1e293b" />
          <text x="440" y="126" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="9" fontWeight="bold">C (Ic)</text>

          {/* Parallel Current Phasor */}
          <g transform="translate(450, 75)">
            <line x1="10" y1="40" x2="45" y2="40" stroke="#2563eb" strokeWidth="2" />
            <text x="28" y="50" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="7.5" fontWeight="bold">IR = V/R</text>
            <line x1="10" y1="40" x2="10" y2="10" stroke="#0284c7" strokeWidth="2" />
            <text x="2" y="25" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="7.5" fontWeight="bold">Ic</text>
            <line x1="10" y1="40" x2="45" y2="10" stroke="#dc2626" strokeWidth="2" />
            <text x="36" y="22" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="8" fontWeight="bold">I</text>
          </g>

          {/* Parallel Formulas */}
          <text x="418" y="185" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="9.5" fontWeight="bold">
            Yp = 1/R + j ωC  ·  Zp = (R · Xc) / √[R² + Xc²]
          </text>
          <text x="418" y="200" textAnchor="middle" fill="#475569" stroke="none" fontSize="8.5">
            Z_parallel = R / (1 + j ω C R) ∠ -tan⁻¹(R/Xc)
          </text>
          <text x="418" y="215" textAnchor="middle" fill="#059669" stroke="none" fontSize="8.5" fontWeight="600">
            Total Current I = √[IR² + Ic²] = V · |Yp|
          </text>

          {/* Bottom Summary Bar */}
          <text x="280" y="265" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="10" fontWeight="600">
            Frequency Response: At DC (f=0), Xc = ∞ (Open Circuit, Zs=∞, Zp=R). At high frequency (f→∞), Xc → 0 (Short Circuit, Zs=R, Zp→0).
          </text>
        </svg>
      );

    // 1. Basic Circuit Components: Equivalent Impedance of Series & Parallel R-L
    case 'rl_impedance_circuit':
      return (
        <svg viewBox="0 0 560 280" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="560" height="280" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />

          {/* Title Header */}
          <text x="280" y="26" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="13" fontWeight="bold">
            Equivalent Impedance of Series & Parallel R-L Circuits
          </text>
          <text x="280" y="42" textAnchor="middle" fill="#64748b" stroke="none" fontSize="10">
            Inductive Reactance XL = 2πfL = ωL · Voltage Leads Current by θ (Lagging Power Factor)
          </text>

          {/* Vertical dividing line */}
          <line x1="280" y1="52" x2="280" y2="245" stroke="#cbd5e1" strokeDasharray="3 3" />

          {/* LEFT: Series R-L Circuit */}
          <rect x="15" y="52" width="255" height="190" rx="6" fill="#f1f5f9" fillOpacity="0.4" stroke="#e2e8f0" />
          <text x="25" y="70" fill="#2563eb" stroke="none" fontSize="11" fontWeight="bold">1. Series R-L Combination:</text>

          {/* AC Supply */}
          <circle cx="45" cy="125" r="15" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
          <path d="M38 125 Q42 118 45 125 T52 125" stroke="#2563eb" strokeWidth="1.5" />
          <text x="45" y="152" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="8" fontWeight="bold">v=Vm sin ωt</text>

          {/* Top Wire with R and L */}
          <line x1="45" y1="110" x2="45" y2="92" stroke="#1e293b" />
          <line x1="45" y1="92" x2="75" y2="92" stroke="#1e293b" />

          {/* Resistor R */}
          <path d="M75 92 L81 85 L88 99 L95 85 L102 99 L109 85 L115 92" stroke="#2563eb" strokeWidth="2" />
          <text x="95" y="80" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="10" fontWeight="bold">R (VR)</text>

          <line x1="115" y1="92" x2="130" y2="92" stroke="#1e293b" />

          {/* Inductor L */}
          <path d="M130 92 C130 82 138 82 138 92 C138 82 146 82 146 92 C146 82 154 82 154 92" stroke="#7c3aed" strokeWidth="2" />
          <text x="142" y="77" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="10" fontWeight="bold">L (VL)</text>

          <line x1="154" y1="92" x2="185" y2="92" stroke="#1e293b" />
          <line x1="185" y1="92" x2="185" y2="160" stroke="#1e293b" />
          <line x1="185" y1="160" x2="45" y2="160" stroke="#1e293b" />
          <line x1="45" y1="160" x2="45" y2="140" stroke="#1e293b" />

          {/* Series Impedance Triangle */}
          <g transform="translate(195, 75)">
            <line x1="10" y1="45" x2="55" y2="45" stroke="#2563eb" strokeWidth="2" />
            <text x="32" y="55" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="8" fontWeight="bold">R</text>
            <line x1="55" y1="45" x2="55" y2="10" stroke="#7c3aed" strokeWidth="2" />
            <text x="65" y="28" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="8" fontWeight="bold">+jXL</text>
            <line x1="10" y1="45" x2="55" y2="10" stroke="#dc2626" strokeWidth="2" />
            <text x="25" y="24" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="9" fontWeight="bold">Zs</text>
            <path d="M22 45 A12 12 0 0 0 20 37" stroke="#d97706" strokeWidth="1" fill="none" />
            <text x="24" y="38" fill="#d97706" stroke="none" fontSize="7" fontWeight="bold">+θ</text>
          </g>

          {/* Series Formulas */}
          <text x="142" y="185" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="9.5" fontWeight="bold">
            Zs = R + j XL = √[R² + (ωL)²] ∠ +θ
          </text>
          <text x="142" y="200" textAnchor="middle" fill="#475569" stroke="none" fontSize="8.5">
            θ = tan⁻¹(XL / R) · cos θ = R / |Zs| (Lagging PF)
          </text>
          <text x="142" y="215" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="8.5" fontWeight="600">
            Total Voltage V = √[VR² + VL²] (Voltage leads by θ)
          </text>

          {/* RIGHT: Parallel R-L Circuit */}
          <rect x="290" y="52" width="255" height="190" rx="6" fill="#f1f5f9" fillOpacity="0.4" stroke="#e2e8f0" />
          <text x="300" y="70" fill="#7c3aed" stroke="none" fontSize="11" fontWeight="bold">2. Parallel R-L Combination:</text>

          {/* AC Supply */}
          <circle cx="318" cy="125" r="15" fill="#ffffff" stroke="#7c3aed" strokeWidth="2" />
          <path d="M311 125 Q315 118 318 125 T325 125" stroke="#7c3aed" strokeWidth="1.5" />
          <text x="318" y="152" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="8" fontWeight="bold">v=Vm sin ωt</text>

          {/* Rails */}
          <line x1="318" y1="110" x2="318" y2="88" stroke="#1e293b" />
          <line x1="318" y1="88" x2="430" y2="88" stroke="#1e293b" />
          <line x1="318" y1="140" x2="318" y2="162" stroke="#1e293b" />
          <line x1="318" y1="162" x2="430" y2="162" stroke="#1e293b" />

          {/* Branch 1: Resistor R */}
          <line x1="365" y1="88" x2="365" y2="105" stroke="#1e293b" />
          <path d="M365 105 L358 111 L372 118 L358 125 L372 132 L358 139 L365 145" stroke="#2563eb" strokeWidth="2" />
          <line x1="365" y1="145" x2="365" y2="162" stroke="#1e293b" />
          <text x="345" y="127" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="9" fontWeight="bold">R (IR)</text>

          {/* Branch 2: Inductor L */}
          <line x1="420" y1="88" x2="420" y2="110" stroke="#1e293b" />
          <path d="M420 110 C428 110 428 118 420 118 C428 118 428 126 420 126 C428 126 428 134 420 134" stroke="#7c3aed" strokeWidth="2" />
          <line x1="420" y1="134" x2="420" y2="162" stroke="#1e293b" />
          <text x="440" y="126" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="9" fontWeight="bold">L (IL)</text>

          {/* Parallel Current Phasor */}
          <g transform="translate(450, 75)">
            <line x1="10" y1="10" x2="45" y2="10" stroke="#2563eb" strokeWidth="2" />
            <text x="28" y="6" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="7.5" fontWeight="bold">IR = V/R</text>
            <line x1="10" y1="10" x2="10" y2="40" stroke="#7c3aed" strokeWidth="2" />
            <text x="2" y="28" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="7.5" fontWeight="bold">IL</text>
            <line x1="10" y1="10" x2="45" y2="40" stroke="#dc2626" strokeWidth="2" />
            <text x="36" y="32" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="8" fontWeight="bold">I</text>
          </g>

          {/* Parallel Formulas */}
          <text x="418" y="185" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="9.5" fontWeight="bold">
            Yp = 1/R - j (1/ωL)  ·  Zp = (R · XL) / √[R² + XL²]
          </text>
          <text x="418" y="200" textAnchor="middle" fill="#475569" stroke="none" fontSize="8.5">
            Z_parallel = (j ω L R) / (R + j ω L) ∠ +tan⁻¹(R/XL)
          </text>
          <text x="418" y="215" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="8.5" fontWeight="600">
            Total Current I = √[IR² + IL²] = V · |Yp|
          </text>

          {/* Bottom Summary Bar */}
          <text x="280" y="265" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="10" fontWeight="600">
            Frequency Response: At DC (f=0), XL = 0 (Short Circuit, Zs=R, Zp=0). At high frequency (f→∞), XL → ∞ (Inductor chokes AC, Zs→∞, Zp=R).
          </text>
        </svg>
      );

    // 1. Basic Circuit Components: Equivalent Impedance of Series & Parallel R-L-C & Resonance
    case 'rlc_impedance_circuit':
      return (
        <svg viewBox="0 0 560 280" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="560" height="280" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />

          {/* Title Header */}
          <text x="280" y="26" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="13" fontWeight="bold">
            Equivalent Impedance of Series & Parallel R-L-C Circuits & Resonance
          </text>
          <text x="280" y="42" textAnchor="middle" fill="#64748b" stroke="none" fontSize="10">
            Net Reactance X = XL - Xc · Resonance Frequency f₀ = 1 / (2π√[LC])
          </text>

          {/* Vertical dividing line */}
          <line x1="280" y1="52" x2="280" y2="245" stroke="#cbd5e1" strokeDasharray="3 3" />

          {/* LEFT: Series R-L-C Circuit */}
          <rect x="15" y="52" width="255" height="190" rx="6" fill="#f1f5f9" fillOpacity="0.4" stroke="#e2e8f0" />
          <text x="25" y="70" fill="#2563eb" stroke="none" fontSize="11" fontWeight="bold">1. Series R-L-C Combination:</text>

          {/* AC Supply */}
          <circle cx="45" cy="125" r="15" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
          <path d="M38 125 Q42 118 45 125 T52 125" stroke="#2563eb" strokeWidth="1.5" />
          <text x="45" y="152" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="8" fontWeight="bold">v=Vm sin ωt</text>

          <line x1="45" y1="110" x2="45" y2="88" stroke="#1e293b" />
          <line x1="45" y1="88" x2="70" y2="88" stroke="#1e293b" />

          {/* Resistor R */}
          <path d="M70 88 L75 82 L81 94 L87 82 L93 94 L99 82 L105 88" stroke="#2563eb" strokeWidth="2" />
          <text x="87" y="78" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="9" fontWeight="bold">R</text>

          <line x1="105" y1="88" x2="118" y2="88" stroke="#1e293b" />

          {/* Inductor L */}
          <path d="M118 88 C118 78 125 78 125 88 C125 78 132 78 132 88 C132 78 139 78 139 88" stroke="#7c3aed" strokeWidth="2" />
          <text x="128" y="76" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="9" fontWeight="bold">L</text>

          <line x1="139" y1="88" x2="152" y2="88" stroke="#1e293b" />

          {/* Capacitor C */}
          <line x1="152" y1="78" x2="152" y2="98" stroke="#0284c7" strokeWidth="2.5" />
          <line x1="158" y1="78" x2="158" y2="98" stroke="#0284c7" strokeWidth="2.5" />
          <text x="155" y="74" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="9" fontWeight="bold">C</text>

          <line x1="158" y1="88" x2="185" y2="88" stroke="#1e293b" />
          <line x1="185" y1="88" x2="185" y2="160" stroke="#1e293b" />
          <line x1="185" y1="160" x2="45" y2="160" stroke="#1e293b" />
          <line x1="45" y1="160" x2="45" y2="140" stroke="#1e293b" />

          {/* Impedance Triangle */}
          <g transform="translate(195, 75)">
            <line x1="10" y1="40" x2="55" y2="40" stroke="#2563eb" strokeWidth="2" />
            <text x="32" y="50" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="8" fontWeight="bold">R</text>
            <line x1="55" y1="40" x2="55" y2="15" stroke="#7c3aed" strokeWidth="2" />
            <text x="64" y="28" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="7.5" fontWeight="bold">XL-Xc</text>
            <line x1="10" y1="40" x2="55" y2="15" stroke="#dc2626" strokeWidth="2" />
            <text x="25" y="22" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="8.5" fontWeight="bold">Zs</text>
          </g>

          {/* Series Formulas */}
          <text x="142" y="185" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="9.5" fontWeight="bold">
            Zs = R + j(XL - Xc) = √[R² + (ωL - 1/ωC)²] ∠ θ
          </text>
          <text x="142" y="200" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="8.5" fontWeight="600">
            Series Resonance: XL = Xc → Z_min = R (Unity PF cos θ = 1)
          </text>
          <text x="142" y="215" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="8.5" fontWeight="bold">
            Resonant Freq f₀ = 1 / (2π√[LC]) · Current is Maximum (I = V/R)
          </text>

          {/* RIGHT: Parallel R-L-C Circuit */}
          <rect x="290" y="52" width="255" height="190" rx="6" fill="#f1f5f9" fillOpacity="0.4" stroke="#e2e8f0" />
          <text x="300" y="70" fill="#7c3aed" stroke="none" fontSize="11" fontWeight="bold">2. Parallel R-L-C Combination:</text>

          {/* AC Supply */}
          <circle cx="314" cy="125" r="14" fill="#ffffff" stroke="#7c3aed" strokeWidth="2" />
          <path d="M308 125 Q311 118 314 125 T320 125" stroke="#7c3aed" strokeWidth="1.5" />
          <text x="314" y="152" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="8" fontWeight="bold">v(t)</text>

          {/* Rails */}
          <line x1="314" y1="111" x2="314" y2="88" stroke="#1e293b" />
          <line x1="314" y1="88" x2="445" y2="88" stroke="#1e293b" />
          <line x1="314" y1="139" x2="314" y2="162" stroke="#1e293b" />
          <line x1="314" y1="162" x2="445" y2="162" stroke="#1e293b" />

          {/* Branch 1: Resistor R */}
          <line x1="350" y1="88" x2="350" y2="105" stroke="#1e293b" />
          <path d="M350 105 L344 111 L356 118 L344 125 L356 132 L344 139 L350 145" stroke="#2563eb" strokeWidth="2" />
          <line x1="350" y1="145" x2="350" y2="162" stroke="#1e293b" />
          <text x="336" y="128" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="8.5" fontWeight="bold">R</text>

          {/* Branch 2: Inductor L */}
          <line x1="395" y1="88" x2="395" y2="110" stroke="#1e293b" />
          <path d="M395 110 C402 110 402 118 395 118 C402 118 402 126 395 126 C402 126 402 134 395 134" stroke="#7c3aed" strokeWidth="2" />
          <line x1="395" y1="134" x2="395" y2="162" stroke="#1e293b" />
          <text x="382" y="128" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="8.5" fontWeight="bold">L</text>

          {/* Branch 3: Capacitor C */}
          <line x1="440" y1="88" x2="440" y2="120" stroke="#1e293b" />
          <line x1="432" y1="120" x2="448" y2="120" stroke="#0284c7" strokeWidth="2.5" />
          <line x1="432" y1="128" x2="448" y2="128" stroke="#0284c7" strokeWidth="2.5" />
          <line x1="440" y1="128" x2="440" y2="162" stroke="#1e293b" />
          <text x="456" y="126" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="8.5" fontWeight="bold">C</text>

          {/* Parallel Formulas */}
          <text x="418" y="185" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="9.5" fontWeight="bold">
            Yp = 1/R + j(ωC - 1/ωL)  ·  Zp = 1 / |Yp|
          </text>
          <text x="418" y="200" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="8.5" fontWeight="600">
            Parallel Resonance (Anti-Resonance): ωC = 1/ωL → f₀ = 1/(2π√LC)
          </text>
          <text x="418" y="215" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="8.5" fontWeight="bold">
            Dynamic Impedance Zd = L / (C · R) (Maximum, line current minimum)
          </text>

          {/* Bottom Summary Bar */}
          <text x="280" y="265" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="10" fontWeight="600">
            Resonance Contrast: Series RLC is an Acceptor circuit (Z minimum, I maximum); Parallel RLC is a Rejector circuit (Z maximum, I minimum).
          </text>
        </svg>
      );

    // Basic Circuit Components: Transformers (Step-Up and Step-Down)
    case 'transformers_circuit':
      return (
        <svg viewBox="0 0 540 260" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="540" height="260" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />

          <text x="270" y="28" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="13" fontWeight="bold">
            Transformers: Step-Up vs Step-Down & Operating Principle
          </text>

          {/* LEFT: Step-Up Transformer */}
          <rect x="25" y="45" width="235" height="155" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
          <text x="142" y="65" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="11" fontWeight="bold">Step-Up Transformer (Ns &gt; Np)</text>

          {/* Core (Laminated Iron Core) */}
          <line x1="140" y1="75" x2="140" y2="155" stroke="#64748b" strokeWidth="2" />
          <line x1="144" y1="75" x2="144" y2="155" stroke="#64748b" strokeWidth="2" />

          {/* Primary (Fewer turns: 3 turns, bulges inward towards core at x=140) */}
          <path d="M 126 92 A 7.5 7.5 0 0 1 126 107 A 7.5 7.5 0 0 1 126 122 A 7.5 7.5 0 0 1 126 137" stroke="#2563eb" strokeWidth="2.5" fill="none" />
          <line x1="48" y1="92" x2="126" y2="92" stroke="#1e293b" />
          <circle cx="48" cy="92" r="3" fill="#1e293b" />
          <line x1="48" y1="137" x2="126" y2="137" stroke="#1e293b" />
          <circle cx="48" cy="137" r="3" fill="#1e293b" />
          {/* Primary Polarity Dot */}
          <circle cx="116" cy="85" r="2.5" fill="#2563eb" stroke="none" />
          <text x="48" y="82" fill="#2563eb" stroke="none" fontSize="9.5" fontWeight="bold">Vp (Input AC)</text>
          <text x="86" y="154" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="8.5" fontWeight="bold">Np (Fewer turns: 3)</text>

          {/* Secondary (More turns: 5 turns, bulges inward towards core at x=144) */}
          <path d="M 158 80 A 7 7 0 0 0 158 94 A 7 7 0 0 0 158 108 A 7 7 0 0 0 158 122 A 7 7 0 0 0 158 136 A 7 7 0 0 0 158 150" stroke="#059669" strokeWidth="2.5" fill="none" />
          <line x1="158" y1="80" x2="236" y2="80" stroke="#1e293b" />
          <circle cx="236" cy="80" r="3" fill="#1e293b" />
          <line x1="158" y1="150" x2="236" y2="150" stroke="#1e293b" />
          <circle cx="236" cy="150" r="3" fill="#1e293b" />
          {/* Secondary Polarity Dot */}
          <circle cx="168" cy="73" r="2.5" fill="#059669" stroke="none" />
          <text x="236" y="72" textAnchor="end" fill="#059669" stroke="none" fontSize="9.5" fontWeight="bold">Vs (High Output AC)</text>
          <text x="198" y="163" textAnchor="middle" fill="#059669" stroke="none" fontSize="8.5" fontWeight="bold">Ns (More turns: 5)</text>

          <text x="142" y="188" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="9.5" fontWeight="600">
            Vs &gt; Vp  ·  Is &lt; Ip (Apparent Power P = V·I constant)
          </text>

          {/* RIGHT: Step-Down Transformer */}
          <rect x="280" y="45" width="235" height="155" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
          <text x="397" y="65" textAnchor="middle" fill="#059669" stroke="none" fontSize="11" fontWeight="bold">Step-Down Transformer (Ns &lt; Np)</text>

          {/* Core (Laminated Iron Core) */}
          <line x1="395" y1="75" x2="395" y2="155" stroke="#64748b" strokeWidth="2" />
          <line x1="399" y1="75" x2="399" y2="155" stroke="#64748b" strokeWidth="2" />

          {/* Primary (More turns: 5 turns, bulges inward towards core at x=395) */}
          <path d="M 381 80 A 7 7 0 0 1 381 94 A 7 7 0 0 1 381 108 A 7 7 0 0 1 381 122 A 7 7 0 0 1 381 136 A 7 7 0 0 1 381 150" stroke="#059669" strokeWidth="2.5" fill="none" />
          <line x1="304" y1="80" x2="381" y2="80" stroke="#1e293b" />
          <circle cx="304" cy="80" r="3" fill="#1e293b" />
          <line x1="304" y1="150" x2="381" y2="150" stroke="#1e293b" />
          <circle cx="304" cy="150" r="3" fill="#1e293b" />
          {/* Primary Polarity Dot */}
          <circle cx="371" cy="73" r="2.5" fill="#059669" stroke="none" />
          <text x="304" y="72" fill="#059669" stroke="none" fontSize="9.5" fontWeight="bold">Vp (230V Mains AC)</text>
          <text x="342" y="163" textAnchor="middle" fill="#059669" stroke="none" fontSize="8.5" fontWeight="bold">Np (More turns: 5)</text>

          {/* Secondary (Fewer turns: 3 turns, bulges inward towards core at x=399) */}
          <path d="M 413 92 A 7.5 7.5 0 0 0 413 107 A 7.5 7.5 0 0 0 413 122 A 7.5 7.5 0 0 0 413 137" stroke="#2563eb" strokeWidth="2.5" fill="none" />
          <line x1="413" y1="92" x2="492" y2="92" stroke="#1e293b" />
          <circle cx="492" cy="92" r="3" fill="#1e293b" />
          <line x1="413" y1="137" x2="492" y2="137" stroke="#1e293b" />
          <circle cx="492" cy="137" r="3" fill="#1e293b" />
          {/* Secondary Polarity Dot */}
          <circle cx="423" cy="85" r="2.5" fill="#2563eb" stroke="none" />
          <text x="492" y="72" textAnchor="end" fill="#2563eb" stroke="none" fontSize="9.5" fontWeight="bold">Vs (12V AC Adapter)</text>
          <text x="454" y="154" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="8.5" fontWeight="bold">Ns (Fewer turns: 3)</text>

          <text x="397" y="188" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="9.5" fontWeight="600">
            Vs &lt; Vp  ·  Is &gt; Ip  ·  Turns Ratio k = Ns / Np
          </text>

          {/* Bottom: Why Required */}
          <text x="270" y="235" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="10.5" fontWeight="500">
            Why Required: 1. Voltage Conversion (230V to 5V/12V DC) · 2. Galvanic Safety Isolation · 3. Impedance Matching (Zp = (Np/Ns)² · Zs)
          </text>
        </svg>
      );

    // 1. Basic Circuit Components: Thevenin Equivalent Circuit
    case 'thevenin_equivalent':
      return (
        <svg viewBox="0 0 540 240" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="540" height="240" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          {/* Border for Thevenin Box */}
          <rect x="30" y="30" width="310" height="175" rx="6" stroke="#94a3b8" strokeDasharray="6 4" strokeWidth="1.5" fill="#f1f5f9" fillOpacity="0.4" />
          <text x="45" y="52" fill="#64748b" stroke="none" fontSize="12" fontWeight="600">Thevenin Equivalent Generator</text>
          
          {/* Independent Voltage Source Vth */}
          <circle cx="100" cy="120" r="26" stroke="#2563eb" strokeWidth="2.5" fill="#ffffff" />
          <text x="100" y="112" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="18" fontWeight="bold">+</text>
          <text x="100" y="134" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="18" fontWeight="bold">-</text>
          <text x="50" y="125" fill="#1e293b" stroke="none" fontSize="13" fontWeight="bold">Vth</text>
          
          {/* Wire from Vth to Rth */}
          <line x1="100" y1="94" x2="100" y2="70" stroke="#1e293b" />
          <line x1="100" y1="70" x2="170" y2="70" stroke="#1e293b" />
          
          {/* Resistor Rth */}
          <path d="M170 70 L180 58 L190 82 L200 58 L210 82 L220 58 L230 82 L240 70" stroke="#2563eb" strokeWidth="2.5" />
          <text x="205" y="48" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="13" fontWeight="bold">Rth</text>
          
          {/* Wire to Terminal A */}
          <line x1="240" y1="70" x2="360" y2="70" stroke="#1e293b" />
          <circle cx="360" cy="70" r="5" fill="#2563eb" stroke="#1e293b" strokeWidth="2" />
          <text x="360" y="52" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="14" fontWeight="bold">A</text>
          
          {/* Return wire */}
          <line x1="100" y1="146" x2="100" y2="175" stroke="#1e293b" />
          <line x1="100" y1="175" x2="360" y2="175" stroke="#1e293b" />
          <circle cx="360" cy="175" r="5" fill="#2563eb" stroke="#1e293b" strokeWidth="2" />
          <text x="360" y="198" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="14" fontWeight="bold">B</text>
          
          {/* Load Resistor RL */}
          <line x1="360" y1="70" x2="450" y2="70" stroke="#dc2626" />
          <line x1="450" y1="70" x2="450" y2="95" stroke="#dc2626" />
          <path d="M450 95 L438 105 L462 115 L438 125 L462 135 L450 145" stroke="#dc2626" strokeWidth="2.5" />
          <line x1="450" y1="145" x2="450" y2="175" stroke="#dc2626" />
          <line x1="450" y1="175" x2="360" y2="175" stroke="#dc2626" />
          <text x="480" y="125" fill="#dc2626" stroke="none" fontSize="13" fontWeight="bold">RL (Load)</text>
          
          {/* Load current arrow IL */}
          <path d="M380 62 L420 62" stroke="#dc2626" strokeWidth="2" />
          <polygon points="420,59 428,62 420,65" fill="#dc2626" stroke="#dc2626" />
          <text x="400" y="55" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="11" fontWeight="bold">IL</text>

          {/* Formula caption */}
          <text x="270" y="222" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="12" fontWeight="500">
            IL = Vth / (Rth + RL) · Maximum Power Theorem: RL = Rth (Efficiency = 50%)
          </text>
        </svg>
      );

    // 2. Semiconductor: P-N Junction Diode I-V Characteristics & Depletion Physics
    case 'pn_junction_iv_characteristic':
    case 'diode_iv_characteristic':
    case 'pn_junction_physics':
    case 'diode_iv_curve':
      return (
        <svg viewBox="0 0 740 375" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="740" height="375" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />

          {/* Header */}
          <text x="370" y="24" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="13.5" fontWeight="bold">
            P-N Junction Diode Complete I-V Characteristics & Depletion Layer Physics
          </text>
          <text x="370" y="39" textAnchor="middle" fill="#64748b" stroke="none" fontSize="9.5">
            Silicon (Cut-in Vγ = 0.7V, I₀ ~ nA) vs Germanium (Cut-in Vγ = 0.3V, I₀ ~ μA) · Shockley Equation · Space Charge Depletion Region
          </text>

          {/* ======================================================== */}
          {/* LEFT PANEL: 4-QUADRANT I-V CHARACTERISTIC GRAPH          */}
          {/* ======================================================== */}
          <rect x="12" y="48" width="415" height="315" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="22" y="65" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">
            Experimental & Theoretical I-V Characteristic Curve:
          </text>

          {/* Grid lines */}
          <g stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3">
            <line x1="45" y1="90" x2="400" y2="90" />
            <line x1="45" y1="130" x2="400" y2="130" />
            <line x1="45" y1="170" x2="400" y2="170" />
            <line x1="45" y1="250" x2="400" y2="250" />
            <line x1="45" y1="290" x2="400" y2="290" />
            <line x1="90" y1="75" x2="90" y2="330" />
            <line x1="140" y1="75" x2="140" y2="330" />
            <line x1="240" y1="75" x2="240" y2="330" />
            <line x1="290" y1="75" x2="290" y2="330" />
            <line x1="340" y1="75" x2="340" y2="330" />
          </g>

          {/* Cartesian Axes intersecting at Origin (180, 210) */}
          {/* X Axis (Voltage V) */}
          <line x1="35" y1="210" x2="405" y2="210" stroke="#334155" strokeWidth="1.8" />
          <polygon points="405,210 398,206 398,214" fill="#334155" stroke="none" />
          <polygon points="35,210 42,206 42,214" fill="#334155" stroke="none" />
          
          {/* Y Axis (Current I) */}
          <line x1="180" y1="340" x2="180" y2="72" stroke="#334155" strokeWidth="1.8" />
          <polygon points="180,72 176,79 184,79" fill="#334155" stroke="none" />
          <polygon points="180,340 176,333 184,333" fill="#334155" stroke="none" />

          {/* Axis Labels */}
          <text x="395" y="202" textAnchor="end" fill="#0f172a" stroke="none" fontSize="10" fontWeight="bold">+VF (Volts)</text>
          <text x="45" y="202" fill="#0f172a" stroke="none" fontSize="10" fontWeight="bold">-VR (Volts)</text>
          <text x="188" y="84" fill="#0f172a" stroke="none" fontSize="10" fontWeight="bold">+IF (mA)</text>
          <text x="188" y="336" fill="#0f172a" stroke="none" fontSize="9.5" fontWeight="bold">-IR (μA / nA)</text>
          <text x="172" y="223" textAnchor="end" fill="#64748b" stroke="none" fontSize="9" fontWeight="bold">0</text>

          {/* Forward Voltage Tick Marks */}
          <text x="235" y="223" textAnchor="middle" fill="#64748b" stroke="none" fontSize="8">0.3V</text>
          <line x1="235" y1="207" x2="235" y2="213" stroke="#64748b" strokeWidth="1" />
          <text x="295" y="223" textAnchor="middle" fill="#64748b" stroke="none" fontSize="8">0.7V</text>
          <line x1="295" y1="207" x2="295" y2="213" stroke="#64748b" strokeWidth="1" />
          <text x="345" y="223" textAnchor="middle" fill="#64748b" stroke="none" fontSize="8">1.0V</text>
          <line x1="345" y1="207" x2="345" y2="213" stroke="#64748b" strokeWidth="1" />

          {/* Reverse Voltage Tick Marks */}
          <text x="80" y="223" textAnchor="middle" fill="#64748b" stroke="none" fontSize="8">-VBR</text>
          <line x1="80" y1="207" x2="80" y2="213" stroke="#64748b" strokeWidth="1" />

          {/* Shaded Knee / Barrier lines */}
          <line x1="235" y1="90" x2="235" y2="210" stroke="#059669" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="295" y1="90" x2="295" y2="210" stroke="#2563eb" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="80" y1="210" x2="80" y2="330" stroke="#dc2626" strokeWidth="1" strokeDasharray="2 2" />

          {/* 1. GERMANIUM (Ge) CURVE (Green) */}
          {/* Forward: Flat 0->0.2V, bends at 0.25V, knee at 0.3V (235, 208), steep through (255, 90) */}
          <path d="M180 210 Q215 210 230 206 Q245 190 255 90" stroke="#059669" strokeWidth="2.4" fill="none" />
          {/* Reverse: Microamp saturation current drop */}
          <path d="M180 210 Q175 224 160 225 L100 225" stroke="#059669" strokeWidth="1.8" fill="none" />

          {/* 2. SILICON (Si) CURVE (Blue) */}
          {/* Forward: Flat 0->0.55V, bends at 0.6V, knee at 0.7V (295, 207), very steep exponential through (315, 85) */}
          <path d="M180 210 Q250 210 280 205 Q305 185 315 85" stroke="#2563eb" strokeWidth="2.5" fill="none" />
          {/* Reverse: Nanoamp leakage (barely below axis) then sharp breakdown */}
          <path d="M180 210 L85 212 Q80 214 80 320" stroke="#2563eb" strokeWidth="2.2" fill="none" />

          {/* Dynamic Resistance ΔV / ΔI Triangle on Silicon Curve */}
          <polygon points="302,150 312,150 312,110" fill="#dbeafe" stroke="#2563eb" strokeWidth="1" />
          <text x="316" y="132" fill="#1e40af" stroke="none" fontSize="7.5" fontWeight="bold">ΔIF</text>
          <text x="307" y="160" textAnchor="middle" fill="#1e40af" stroke="none" fontSize="7.5" fontWeight="bold">ΔVF</text>
          <text x="330" y="145" fill="#1e40af" stroke="none" fontSize="7.5" fontWeight="600">rd = ΔVF/ΔIF</text>

          {/* Callouts & Markers */}
          {/* Ge Knee Marker */}
          <circle cx="235" cy="204" r="3.5" fill="#059669" stroke="#ffffff" strokeWidth="1" />
          <rect x="195" y="172" width="70" height="20" rx="3" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1" />
          <text x="230" y="186" textAnchor="middle" fill="#065f46" stroke="none" fontSize="8" fontWeight="bold">Ge: Vγ ≈ 0.3V</text>

          {/* Si Knee Marker */}
          <circle cx="295" cy="200" r="3.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1" />
          <rect x="255" y="145" width="70" height="20" rx="3" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
          <text x="290" y="159" textAnchor="middle" fill="#1e40af" stroke="none" fontSize="8" fontWeight="bold">Si: Vγ ≈ 0.7V</text>

          {/* Reverse Saturation Callout */}
          <text x="135" y="240" textAnchor="middle" fill="#065f46" stroke="none" fontSize="7.5" fontWeight="bold">Ge I₀ ≈ 1 - 10 μA</text>
          <text x="135" y="202" textAnchor="middle" fill="#1e40af" stroke="none" fontSize="7.5" fontWeight="bold">Si I₀ ≈ 1 - 10 nA</text>

          {/* Breakdown Voltage Callout */}
          <circle cx="80" cy="280" r="3" fill="#dc2626" stroke="#ffffff" strokeWidth="1" />
          <rect x="22" y="270" width="78" height="26" rx="3" fill="#fef2f2" stroke="#fecaca" strokeWidth="1" />
          <text x="61" y="282" textAnchor="middle" fill="#991b1b" stroke="none" fontSize="7.5" fontWeight="bold">Zener / Avalanche</text>
          <text x="61" y="292" textAnchor="middle" fill="#991b1b" stroke="none" fontSize="7.5" fontWeight="bold">Breakdown VBR</text>

          {/* Bottom Shockley Formula Box inside Left Panel */}
          <rect x="22" y="318" width="395" height="36" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <text x="219" y="333" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="8.5" fontWeight="bold">
            Shockley Equation: I = I₀ · [ exp(q·V / (η·k·T)) - 1 ] = I₀ · [ exp(V / (η·VT)) - 1 ]
          </text>
          <text x="219" y="346" textAnchor="middle" fill="#475569" stroke="none" fontSize="7.8">
            VT = kT/q ≈ 25.86 mV at 300K · Ideality Factor η: Ge ≈ 1, Si ≈ 2 (low-medium current) / 1 (high current)
          </text>

          {/* ======================================================== */}
          {/* RIGHT PANEL: P-N JUNCTION FORMATION & DEPLETION PHYSICS   */}
          {/* ======================================================== */}
          <rect x="435" y="48" width="293" height="315" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="445" y="65" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">
            P-N Junction Formation & Depletion Layer:
          </text>

          {/* Semiconductor Crystal Block with Depletion Region */}
          <g transform="translate(445, 75)">
            {/* Total Block Outline */}
            <rect x="0" y="0" width="273" height="95" rx="5" fill="#ffffff" stroke="#334155" strokeWidth="1.5" />

            {/* P-Region (Left) */}
            <rect x="0" y="0" width="95" height="95" fill="#fee2e2" fillOpacity="0.6" stroke="none" />
            <text x="47" y="16" textAnchor="middle" fill="#991b1b" stroke="none" fontSize="10" fontWeight="bold">p-type (Anode)</text>
            <text x="47" y="27" textAnchor="middle" fill="#7f1d1d" stroke="none" fontSize="7.5">Majority: Holes (h⁺)</text>
            <text x="47" y="36" textAnchor="middle" fill="#7f1d1d" stroke="none" fontSize="7.5">Fixed: Acceptors (Na⁻)</text>

            {/* Acceptor Ions (Circled Minus) & Mobile Holes in P Region */}
            <circle cx="22" cy="55" r="7" fill="#fca5a5" stroke="#dc2626" strokeWidth="1" />
            <text x="22" y="58" textAnchor="middle" fill="#991b1b" stroke="none" fontSize="10" fontWeight="bold">-</text>
            <circle cx="33" cy="52" r="3" fill="#ffffff" stroke="#dc2626" strokeWidth="1.2" />

            <circle cx="65" cy="55" r="7" fill="#fca5a5" stroke="#dc2626" strokeWidth="1" />
            <text x="65" y="58" textAnchor="middle" fill="#991b1b" stroke="none" fontSize="10" fontWeight="bold">-</text>
            <circle cx="76" cy="58" r="3" fill="#ffffff" stroke="#dc2626" strokeWidth="1.2" />

            <circle cx="42" cy="78" r="7" fill="#fca5a5" stroke="#dc2626" strokeWidth="1" />
            <text x="42" y="81" textAnchor="middle" fill="#991b1b" stroke="none" fontSize="10" fontWeight="bold">-</text>
            <circle cx="53" cy="75" r="3" fill="#ffffff" stroke="#dc2626" strokeWidth="1.2" />

            {/* Depletion Region (Center) */}
            <rect x="95" y="0" width="83" height="95" fill="#fef9c3" fillOpacity="0.8" stroke="#ca8a04" strokeWidth="1" strokeDasharray="3 3" />
            <text x="136" y="16" textAnchor="middle" fill="#854d0e" stroke="none" fontSize="9" fontWeight="bold">Depletion Layer</text>
            <text x="136" y="26" textAnchor="middle" fill="#a16207" stroke="none" fontSize="7">Width W (No free carriers)</text>

            {/* Immobile Uncompensated Space-Charge Ions in Depletion Layer */}
            {/* Negative Ions on p-side of junction */}
            <circle cx="112" cy="46" r="6.5" fill="#f87171" stroke="#b91c1c" strokeWidth="1" />
            <text x="112" y="49" textAnchor="middle" fill="#ffffff" stroke="none" fontSize="9" fontWeight="bold">-</text>
            <circle cx="112" cy="70" r="6.5" fill="#f87171" stroke="#b91c1c" strokeWidth="1" />
            <text x="112" y="73" textAnchor="middle" fill="#ffffff" stroke="none" fontSize="9" fontWeight="bold">-</text>

            {/* Positive Ions on n-side of junction */}
            <circle cx="160" cy="46" r="6.5" fill="#60a5fa" stroke="#1d4ed8" strokeWidth="1" />
            <text x="160" y="49" textAnchor="middle" fill="#ffffff" stroke="none" fontSize="8" fontWeight="bold">+</text>
            <circle cx="160" cy="70" r="6.5" fill="#60a5fa" stroke="#1d4ed8" strokeWidth="1" />
            <text x="160" y="73" textAnchor="middle" fill="#ffffff" stroke="none" fontSize="8" fontWeight="bold">+</text>

            {/* Metallurgical Junction Line */}
            <line x1="136" y1="30" x2="136" y2="95" stroke="#ca8a04" strokeWidth="1.5" strokeDasharray="2 2" />

            {/* Built-in Field Arrow (from N to P) */}
            <line x1="162" y1="86" x2="110" y2="86" stroke="#b45309" strokeWidth="1.8" />
            <polygon points="110,86 116,83 116,89" fill="#b45309" stroke="none" />
            <text x="136" y="83" textAnchor="middle" fill="#b45309" stroke="none" fontSize="7.5" fontWeight="bold">Built-in E Field</text>

            {/* N-Region (Right) */}
            <rect x="178" y="0" width="95" height="95" fill="#e0f2fe" fillOpacity="0.6" stroke="none" />
            <text x="225" y="16" textAnchor="middle" fill="#0369a1" stroke="none" fontSize="10" fontWeight="bold">n-type (Cathode)</text>
            <text x="225" y="27" textAnchor="middle" fill="#075985" stroke="none" fontSize="7.5">Majority: Electrons (e⁻)</text>
            <text x="225" y="36" textAnchor="middle" fill="#075985" stroke="none" fontSize="7.5">Fixed: Donors (Nd⁺)</text>

            {/* Donor Ions (Circled Plus) & Mobile Electrons in N Region */}
            <circle cx="205" cy="55" r="7" fill="#93c5fd" stroke="#2563eb" strokeWidth="1" />
            <text x="205" y="58" textAnchor="middle" fill="#1e3a8a" stroke="none" fontSize="9" fontWeight="bold">+</text>
            <circle cx="216" cy="52" r="3" fill="#1e3a8a" stroke="none" />

            <circle cx="250" cy="55" r="7" fill="#93c5fd" stroke="#2563eb" strokeWidth="1" />
            <text x="250" y="58" textAnchor="middle" fill="#1e3a8a" stroke="none" fontSize="9" fontWeight="bold">+</text>
            <circle cx="261" cy="58" r="3" fill="#1e3a8a" stroke="none" />

            <circle cx="228" cy="78" r="7" fill="#93c5fd" stroke="#2563eb" strokeWidth="1" />
            <text x="228" y="81" textAnchor="middle" fill="#1e3a8a" stroke="none" fontSize="9" fontWeight="bold">+</text>
            <circle cx="239" cy="75" r="3" fill="#1e3a8a" stroke="none" />
          </g>

          {/* Built-in Potential Profile Curve */}
          <g transform="translate(445, 178)">
            <rect x="0" y="0" width="273" height="42" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="8" y="14" fill="#475569" stroke="none" fontSize="8" fontWeight="bold">Barrier Potential Step Profile V(x):</text>
            {/* Profile Line */}
            <path d="M20 32 L95 32 Q136 32 136 22 Q136 12 178 12 L250 12" stroke="#d97706" strokeWidth="2" fill="none" />
            {/* Step height indicator */}
            <line x1="210" y1="32" x2="210" y2="12" stroke="#b45309" strokeWidth="1" strokeDasharray="2 2" />
            <text x="215" y="24" fill="#b45309" stroke="none" fontSize="8" fontWeight="bold">V₀ ≈ 0.7V (Si) / 0.3V (Ge)</text>
          </g>

          {/* Forward Bias vs Reverse Bias Summary Table */}
          <g transform="translate(445, 228)">
            {/* Forward Bias Block */}
            <rect x="0" y="0" width="273" height="60" rx="5" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
            <text x="8" y="14" fill="#1e40af" stroke="none" fontSize="8.5" fontWeight="bold">Forward Bias (Anode &gt; Cathode, VF &gt; 0):</text>
            <text x="8" y="27" fill="#1e3a8a" stroke="none" fontSize="7.8">
              • External voltage opposes built-in field → Depletion width W shrinks.
            </text>
            <text x="8" y="39" fill="#1e3a8a" stroke="none" fontSize="7.8">
              • Once VF &gt; Vγ (0.7V Si, 0.3V Ge), barrier is overcome.
            </text>
            <text x="8" y="51" fill="#1e3a8a" stroke="none" fontSize="7.8">
              • Huge majority carrier diffusion current IF increases exponentially!
            </text>

            {/* Reverse Bias Block */}
            <rect x="0" y="66" width="273" height="60" rx="5" fill="#fef2f2" stroke="#fecaca" strokeWidth="1" />
            <text x="8" y="80" fill="#991b1b" stroke="none" fontSize="8.5" fontWeight="bold">Reverse Bias (Cathode &gt; Anode, VR &gt; 0):</text>
            <text x="8" y="93" fill="#7f1d1d" stroke="none" fontSize="7.8">
              • External voltage aids built-in field → Depletion width W expands.
            </text>
            <text x="8" y="105" fill="#7f1d1d" stroke="none" fontSize="7.8">
              • Majority diffusion is completely blocked (open switch behavior).
            </text>
            <text x="8" y="117" fill="#7f1d1d" stroke="none" fontSize="7.8">
              • Only tiny minority carrier saturation current I₀ flows until breakdown.
            </text>
          </g>
        </svg>
      );

    // 2. Semiconductor: Zener Diode I-V Characteristics & Voltage Regulator
    case 'zener_iv_characteristics':
    case 'zener_characteristics':
    case 'zener_voltage_regulator':
      return (
        <svg viewBox="0 0 740 340" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="740" height="340" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />

          {/* Header */}
          <text x="370" y="24" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="13.5" fontWeight="bold">
            Zener Diode 4-Quadrant I-V Characteristic Curve &amp; Shunt DC Voltage Regulator
          </text>
          <text x="370" y="39" textAnchor="middle" fill="#64748b" stroke="none" fontSize="9.5">
            Forward Conduction (Vγ ≈ 0.7V) · Sharp Reverse Breakdown (VZ) · Knee (IZK) to Max (IZM) · Line &amp; Load Regulation
          </text>

          {/* LEFT: 4-Quadrant I-V Curve */}
          <rect x="12" y="48" width="415" height="280" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="22" y="65" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">
            Experimental I-V Characteristic Curve:
          </text>

          {/* Grid lines */}
          <g stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3">
            <line x1="45" y1="100" x2="400" y2="100" />
            <line x1="45" y1="140" x2="400" y2="140" />
            <line x1="45" y1="240" x2="400" y2="240" />
            <line x1="45" y1="280" x2="400" y2="280" />
            <line x1="100" y1="80" x2="100" y2="300" />
            <line x1="280" y1="80" x2="280" y2="300" />
            <line x1="340" y1="80" x2="340" y2="300" />
          </g>

          {/* Axes at (200, 190) */}
          <line x1="35" y1="190" x2="405" y2="190" stroke="#334155" strokeWidth="1.8" />
          <polygon points="405,190 398,186 398,194" fill="#334155" stroke="none" />
          <polygon points="35,190 42,186 42,194" fill="#334155" stroke="none" />
          <text x="395" y="182" textAnchor="end" fill="#0f172a" stroke="none" fontSize="10" fontWeight="bold">+VF (V)</text>
          <text x="45" y="182" fill="#0f172a" stroke="none" fontSize="10" fontWeight="bold">-VR (V)</text>

          <line x1="200" y1="310" x2="200" y2="75" stroke="#334155" strokeWidth="1.8" />
          <polygon points="200,75 196,82 204,82" fill="#334155" stroke="none" />
          <polygon points="200,310 196,303 204,303" fill="#334155" stroke="none" />
          <text x="208" y="86" fill="#0f172a" stroke="none" fontSize="10" fontWeight="bold">+IF (mA)</text>
          <text x="208" y="306" fill="#0f172a" stroke="none" fontSize="9.5" fontWeight="bold">-IZ (mA)</text>
          <text x="192" y="202" textAnchor="end" fill="#64748b" stroke="none" fontSize="9">0</text>

          {/* Forward Bias Curve (Normal Diode) */}
          <path d="M200 190 Q270 190 285 186 Q305 160 315 90" stroke="#2563eb" strokeWidth="2.4" fill="none" />
          <text x="285" y="202" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="8" fontWeight="bold">Vγ ≈ 0.7V</text>

          {/* Reverse Bias Zener Curve */}
          <path d="M200 190 L102 192 Q98 196 98 215 L98 295" stroke="#059669" strokeWidth="2.4" fill="none" />
          <circle cx="98" cy="190" r="3" fill="#059669" />
          <line x1="98" y1="184" x2="98" y2="196" stroke="#059669" strokeWidth="1.5" />
          <text x="98" y="182" textAnchor="middle" fill="#059669" stroke="none" fontSize="8.5" fontWeight="bold">-VZ</text>

          {/* Knee, Test, Max Current Points */}
          <circle cx="98" cy="215" r="3" fill="#b45309" />
          <text x="106" y="218" fill="#b45309" stroke="none" fontSize="7.5" fontWeight="bold">IZK (Knee)</text>

          <circle cx="98" cy="250" r="3" fill="#0284c7" />
          <text x="106" y="253" fill="#0284c7" stroke="none" fontSize="7.5" fontWeight="bold">IZT (Test)</text>

          <circle cx="98" cy="290" r="3" fill="#dc2626" />
          <text x="106" y="293" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">IZM (Max Power)</text>

          {/* Dynamic Impedance rz */}
          <polygon points="98,240 108,240 98,260" fill="#ecfdf5" stroke="#059669" strokeWidth="1" />
          <text x="120" y="238" fill="#065f46" stroke="none" fontSize="7" fontWeight="bold">rz = ΔVZ / ΔIZ ≈ 2-10Ω</text>

          {/* RIGHT: Voltage Regulator Circuit */}
          <rect x="435" y="48" width="293" height="280" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="445" y="65" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">
            Zener Shunt Voltage Regulator Circuit:
          </text>

          {/* Circuit Drawing */}
          <g transform="translate(450, 75)">
            {/* Vin unregulated */}
            <circle cx="20" cy="50" r="14" stroke="#2563eb" fill="#ffffff" />
            <text x="20" y="47" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="10" fontWeight="bold">+</text>
            <text x="20" y="58" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="10" fontWeight="bold">-</text>
            <text x="20" y="78" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="8" fontWeight="bold">Vin (DC)</text>

            {/* Wire to RS */}
            <line x1="34" y1="50" x2="65" y2="50" stroke="#1e293b" />
            <path d="M65 50 L71 44 L77 56 L83 44 L89 56 L95 44 L101 50" stroke="#1e293b" strokeWidth="2" />
            <text x="83" y="38" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="9" fontWeight="bold">Rs</text>
            <line x1="101" y1="50" x2="160" y2="50" stroke="#1e293b" />

            {/* Current Is arrow */}
            <line x1="110" y1="44" x2="125" y2="44" stroke="#dc2626" strokeWidth="1.5" />
            <polygon points="125,44 120,41 120,47" fill="#dc2626" />
            <text x="118" y="38" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">IS</text>

            {/* Zener Diode in Shunt (Cathode UP, Anode DOWN) */}
            <line x1="160" y1="50" x2="160" y2="70" stroke="#1e293b" />
            <polygon points="150,90 170,90 160,75" fill="#0284c7" stroke="#0369a1" />
            <path d="M152 75 L160 75 L168 75 L168 70" stroke="#0f172a" strokeWidth="2" />
            <line x1="160" y1="90" x2="160" y2="125" stroke="#1e293b" />
            <text x="180" y="85" fill="#0284c7" stroke="none" fontSize="8" fontWeight="bold">Zener (Vz)</text>

            {/* Current Iz arrow */}
            <line x1="167" y1="96" x2="167" y2="108" stroke="#059669" strokeWidth="1.5" />
            <polygon points="167,108 164,103 170,103" fill="#059669" />
            <text x="175" y="104" fill="#059669" stroke="none" fontSize="7.5" fontWeight="bold">IZ</text>

            {/* Load Resistor RL */}
            <line x1="160" y1="50" x2="235" y2="50" stroke="#1e293b" />
            <line x1="235" y1="50" x2="235" y2="65" stroke="#1e293b" />
            <path d="M235 65 L230 71 L240 77 L230 83 L240 89 L230 95 L235 101" stroke="#1e293b" strokeWidth="2" />
            <line x1="235" y1="101" x2="235" y2="125" stroke="#1e293b" />
            <text x="250" y="85" fill="#1e293b" stroke="none" fontSize="9" fontWeight="bold">RL</text>

            {/* Current IL arrow */}
            <line x1="190" y1="44" x2="205" y2="44" stroke="#2563eb" strokeWidth="1.5" />
            <polygon points="205,44 200,41 200,47" fill="#2563eb" />
            <text x="198" y="38" fill="#2563eb" stroke="none" fontSize="7.5" fontWeight="bold">IL</text>

            {/* Bottom GND rail */}
            <line x1="20" y1="125" x2="250" y2="125" stroke="#1e293b" />
            <line x1="20" y1="64" x2="20" y2="125" stroke="#1e293b" />

            {/* Regulated Output Vout = Vz */}
            <line x1="235" y1="50" x2="258" y2="50" stroke="#1e293b" />
            <circle cx="258" cy="50" r="3" fill="#059669" />
            <circle cx="258" cy="125" r="3" fill="#1e293b" />
            <text x="264" y="90" fill="#059669" stroke="none" fontSize="9" fontWeight="bold">Vout = Vz</text>

            {/* Formulas Box */}
            <rect x="0" y="145" width="263" height="90" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="131" y="162" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="8.5" fontWeight="bold">
              Design &amp; Regulation Equations:
            </text>
            <text x="10" y="178" fill="#334155" stroke="none" fontSize="7.8">
              • IS = IZ + IL (Kirchhoff's Current Law)
            </text>
            <text x="10" y="192" fill="#334155" stroke="none" fontSize="7.8">
              • Rs = (Vin,min - Vz) / (IL,max + Iz,min)
            </text>
            <text x="10" y="206" fill="#334155" stroke="none" fontSize="7.8">
              • Line: Vin ↑ → IS ↑ → IZ ↑ while Vout pinned to VZ
            </text>
            <text x="10" y="220" fill="#334155" stroke="none" fontSize="7.8">
              • Safe Power: PZ = VZ · IZ,max ≤ PZ,max (Rating)
            </text>
          </g>
        </svg>
      );

    // 2. Semiconductor: Half-Wave Rectifier with Step-Down Transformer & Waveforms
    case 'half_wave_rectifier':
      return (
        <svg viewBox="0 0 560 280" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="560" height="280" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />

          {/* Header */}
          <text x="280" y="24" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="13" fontWeight="bold">
            Half-Wave Rectifier Circuit with Transformer & Waveforms
          </text>
          <text x="280" y="40" textAnchor="middle" fill="#64748b" stroke="none" fontSize="9.5">
            Single Diode Conducting During Positive Half-Cycle Only · PIV = Vm · Ripple Factor γ = 1.21
          </text>

          {/* LEFT: Circuit Schematic Box */}
          <rect x="15" y="48" width="315" height="195" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="25" y="66" fill="#2563eb" stroke="none" fontSize="10.5" fontWeight="bold">Transformer & Diode Schematic:</text>

          {/* 230V AC Mains Source */}
          <circle cx="45" cy="130" r="14" fill="#ffffff" stroke="#2563eb" strokeWidth="1.8" />
          <path d="M39 130 Q42 124 45 130 T51 130" stroke="#2563eb" strokeWidth="1.5" />
          <text x="45" y="156" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="8" fontWeight="bold">230V AC</text>

          {/* Primary Winding Connection */}
          <line x1="45" y1="116" x2="45" y2="95" stroke="#1e293b" />
          <line x1="45" y1="95" x2="66" y2="95" stroke="#1e293b" />
          <line x1="45" y1="144" x2="45" y2="165" stroke="#1e293b" />
          <line x1="45" y1="165" x2="66" y2="165" stroke="#1e293b" />

          {/* Primary Coil Arcs (5 turns, bulges inward towards core at x=78) */}
          <path d="M 66 95 A 7 7 0 0 1 66 109 A 7 7 0 0 1 66 123 A 7 7 0 0 1 66 137 A 7 7 0 0 1 66 151 A 7 7 0 0 1 66 165" stroke="#2563eb" strokeWidth="2.5" fill="none" />
          <circle cx="58" cy="88" r="2.2" fill="#2563eb" stroke="none" />
          <text x="56" y="86" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="8" fontWeight="bold">Np (Primary)</text>

          {/* Laminated Iron Core */}
          <line x1="78" y1="88" x2="78" y2="172" stroke="#64748b" strokeWidth="2" />
          <line x1="82" y1="88" x2="82" y2="172" stroke="#64748b" strokeWidth="2" />
          <text x="80" y="82" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7.5">Core</text>

          {/* Secondary Coil Arcs (Step-down: 3 turns, bulges inward towards core at x=82) */}
          <path d="M 94 95 A 11.67 11.67 0 0 0 94 118.33 A 11.67 11.67 0 0 0 94 141.67 A 11.67 11.67 0 0 0 94 165" stroke="#059669" strokeWidth="2.5" fill="none" />
          <circle cx="102" cy="88" r="2.2" fill="#059669" stroke="none" />
          <text x="108" y="86" textAnchor="middle" fill="#059669" stroke="none" fontSize="8" fontWeight="bold">Ns (vs = Vm sin ωt)</text>

          {/* Secondary Top Wire to Diode */}
          <line x1="94" y1="95" x2="145" y2="95" stroke="#1e293b" />
          <text x="115" y="107" fill="#2563eb" stroke="none" fontSize="10" fontWeight="bold">+</text>

          {/* Diode D */}
          <g transform="translate(145, 95)">
            {/* Diode Triangle */}
            <polygon points="0,-10 0,10 18,0" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
            {/* Cathode Bar */}
            <line x1="18" y1="-10" x2="18" y2="10" stroke="#1e293b" strokeWidth="2.5" />
          </g>
          <text x="154" y="78" textAnchor="middle" fill="#1d4ed8" stroke="none" fontSize="9" fontWeight="bold">D (1N4007)</text>

          {/* Wire to Load Resistor */}
          <line x1="163" y1="95" x2="265" y2="95" stroke="#1e293b" />
          <line x1="265" y1="95" x2="265" y2="110" stroke="#1e293b" />

          {/* Load Current Arrow */}
          <line x1="185" y1="87" x2="225" y2="87" stroke="#dc2626" strokeWidth="1.5" />
          <polygon points="225,84 232,87 225,90" fill="#dc2626" stroke="#dc2626" />
          <text x="208" y="82" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="8" fontWeight="bold">iL (Pos Half)</text>

          {/* Load Resistor RL */}
          <path d="M265 110 L257 116 L273 124 L257 132 L273 140 L265 146" stroke="#dc2626" strokeWidth="2" />
          <text x="290" y="132" fill="#dc2626" stroke="none" fontSize="10" fontWeight="bold">RL</text>

          {/* Output Voltage Polarity */}
          <text x="250" y="112" fill="#dc2626" stroke="none" fontSize="11" fontWeight="bold">+</text>
          <text x="250" y="152" fill="#dc2626" stroke="none" fontSize="13" fontWeight="bold">-</text>
          <text x="242" y="133" fill="#dc2626" stroke="none" fontSize="8" fontWeight="bold">Vo</text>

          {/* Return Wire */}
          <line x1="265" y1="146" x2="265" y2="165" stroke="#1e293b" />
          <line x1="265" y1="165" x2="94" y2="165" stroke="#1e293b" />
          <text x="115" y="160" fill="#2563eb" stroke="none" fontSize="11" fontWeight="bold">-</text>

          {/* Ground Symbol */}
          <line x1="180" y1="165" x2="180" y2="175" stroke="#1e293b" />
          <line x1="172" y1="175" x2="188" y2="175" stroke="#1e293b" strokeWidth="1.5" />
          <line x1="175" y1="178" x2="185" y2="178" stroke="#1e293b" />
          <line x1="178" y1="181" x2="182" y2="181" stroke="#1e293b" />

          {/* Operation Status Annotations */}
          <text x="172" y="206" textAnchor="middle" fill="#059669" stroke="none" fontSize="8.2" fontWeight="600">
            Positive Half-Cycle (0 to π): Diode Forward Biased (ON) → Vo ≈ Vm sin ωt - 0.7V
          </text>
          <text x="172" y="222" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="8.2" fontWeight="600">
            Negative Half-Cycle (π to 2π): Diode Reverse Biased (OFF) → Vo = 0V, Diode drops -Vm (PIV)
          </text>

          {/* RIGHT: Waveforms Box */}
          <rect x="340" y="48" width="205" height="195" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="350" y="66" fill="#059669" stroke="none" fontSize="10.5" fontWeight="bold">Waveforms & Timing:</text>

          {/* 1. AC Secondary Input Waveform vs(t) */}
          <text x="350" y="83" fill="#2563eb" stroke="none" fontSize="8" fontWeight="bold">AC Secondary vs(t):</text>
          <line x1="355" y1="108" x2="530" y2="108" stroke="#94a3b8" strokeWidth="1" />
          <line x1="355" y1="88" x2="355" y2="128" stroke="#94a3b8" strokeWidth="1" />
          <path d="M355 108 Q375 88 395 108 Q415 128 435 108 Q455 88 475 108 Q495 128 515 108" stroke="#2563eb" strokeWidth="1.8" fill="none" />
          <text x="375" y="85" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="7.5" fontWeight="bold">+Vm</text>
          <text x="415" y="136" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="7.5" fontWeight="bold">-Vm</text>
          <text x="435" y="105" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7">T</text>
          <text x="515" y="105" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7">2T</text>

          {/* 2. Output Rectified Waveform Vo(t) */}
          <text x="350" y="152" fill="#dc2626" stroke="none" fontSize="8" fontWeight="bold">Rectified Load Voltage Vo(t):</text>
          <line x1="355" y1="185" x2="530" y2="185" stroke="#94a3b8" strokeWidth="1" />
          <line x1="355" y1="158" x2="355" y2="195" stroke="#94a3b8" strokeWidth="1" />
          {/* Half wave rectified pulses */}
          <path d="M355 185 Q375 160 395 185 L435 185 Q455 160 475 185 L515 185" stroke="#dc2626" strokeWidth="2" fill="none" />
          <text x="375" y="158" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">+Vm</text>
          <text x="415" y="196" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7.5">0V (Cut-off)</text>
          <text x="435" y="182" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7">T</text>
          <text x="515" y="182" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7">2T</text>

          {/* Conduction notes */}
          <text x="442" y="218" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="7.8" fontWeight="bold">
            Ripple Frequency fr = f (50 Hz)
          </text>
          <text x="442" y="232" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7.5">
            Conduction Angle θ = 180° (Half of Cycle)
          </text>

          {/* Bottom Summary Bar */}
          <text x="280" y="264" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="9.5" fontWeight="bold">
            Vdc = Vm / π ≈ 0.318 Vm  ·  Vrms = Vm / 2  ·  Efficiency η = 40.6%  ·  Ripple Factor γ = 1.21  ·  PIV = Vm
          </text>
        </svg>
      );

    // 2. Semiconductor: Full-Wave Center-Tapped Transformer Rectifier & Waveforms
    case 'center_tapped_full_wave_rectifier':
    case 'full_wave_rectifier':
    case 'full_wave_center_tapped':
      return (
        <svg viewBox="0 0 580 300" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="580" height="300" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />

          {/* Header */}
          <text x="290" y="24" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="13.5" fontWeight="bold">
            Full-Wave Center-Tapped Transformer Rectifier & Waveforms
          </text>
          <text x="290" y="40" textAnchor="middle" fill="#64748b" stroke="none" fontSize="10">
            Alternate Conduction via Diodes D1 & D2 with Common Center-Tap Return · PIV = 2Vm · η = 81.2%
          </text>

          {/* LEFT: Schematic Box */}
          <rect x="12" y="50" width="340" height="215" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="24" y="68" fill="#2563eb" stroke="none" fontSize="11" fontWeight="bold">Circuit Schematic Diagram:</text>

          {/* 230V AC Mains */}
          <circle cx="38" cy="135" r="13" fill="#ffffff" stroke="#2563eb" strokeWidth="1.8" />
          <path d="M32 135 Q35 130 38 135 T44 135" stroke="#2563eb" strokeWidth="1.5" />
          <text x="38" y="159" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="7.5" fontWeight="bold">230V AC</text>

          {/* Primary Connections */}
          <line x1="38" y1="122" x2="38" y2="90" stroke="#1e293b" />
          <line x1="38" y1="90" x2="58" y2="90" stroke="#1e293b" />
          <line x1="38" y1="148" x2="38" y2="180" stroke="#1e293b" />
          <line x1="38" y1="180" x2="58" y2="180" stroke="#1e293b" />

          {/* Primary Coil (6 turns, bulges inward towards core at x=70) */}
          <path d="M 58 90 A 7.5 7.5 0 0 1 58 105 A 7.5 7.5 0 0 1 58 120 A 7.5 7.5 0 0 1 58 135 A 7.5 7.5 0 0 1 58 150 A 7.5 7.5 0 0 1 58 165 A 7.5 7.5 0 0 1 58 180" stroke="#2563eb" strokeWidth="2.5" fill="none" />
          <circle cx="50" cy="84" r="2.2" fill="#2563eb" stroke="none" />
          <text x="48" y="82" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="8" fontWeight="bold">Np</text>

          {/* Laminated Iron Core */}
          <line x1="70" y1="80" x2="70" y2="190" stroke="#64748b" strokeWidth="2" />
          <line x1="74" y1="80" x2="74" y2="190" stroke="#64748b" strokeWidth="2" />
          <text x="72" y="75" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7">Core</text>

          {/* Secondary Upper Coil (Terminal A to CT: 2 turns, bulges inward towards core at x=74) */}
          <path d="M 86 90 A 11.25 11.25 0 0 0 86 112.5 A 11.25 11.25 0 0 0 86 135" stroke="#059669" strokeWidth="2.5" fill="none" />
          <circle cx="94" cy="84" r="2.2" fill="#059669" stroke="none" />
          <text x="98" y="84" fill="#2563eb" stroke="none" fontSize="9" fontWeight="bold">A (+vs)</text>

          {/* Secondary Lower Coil (CT to Terminal B: 2 turns, bulges inward towards core at x=74) */}
          <path d="M 86 135 A 11.25 11.25 0 0 0 86 157.5 A 11.25 11.25 0 0 0 86 180" stroke="#059669" strokeWidth="2.5" fill="none" />
          <circle cx="94" cy="186" r="2.2" fill="#7c3aed" stroke="none" />
          <text x="98" y="194" fill="#7c3aed" stroke="none" fontSize="9" fontWeight="bold">B (-vs)</text>

          {/* Center Tap (CT) Node */}
          <circle cx="86" cy="135" r="3" fill="#1e293b" />
          <text x="96" y="132" fill="#1e293b" stroke="none" fontSize="8" fontWeight="bold">CT</text>

          {/* Upper Branch: Lead to Diode D1 */}
          <line x1="86" y1="90" x2="135" y2="90" stroke="#1e293b" />
          {/* Diode D1 Symbol */}
          <polygon points="135,80 135,100 155,90" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.8" />
          <line x1="155" y1="80" x2="155" y2="100" stroke="#1e293b" strokeWidth="2.5" />
          <text x="145" y="74" textAnchor="middle" fill="#1d4ed8" stroke="none" fontSize="9.5" fontWeight="bold">D1</text>
          <line x1="155" y1="90" x2="210" y2="90" stroke="#dc2626" strokeWidth="2" />

          {/* Lower Branch: Lead to Diode D2 */}
          <line x1="86" y1="180" x2="135" y2="180" stroke="#1e293b" />
          {/* Diode D2 Symbol */}
          <polygon points="135,170 135,190 155,180" fill="#7c3aed" stroke="#6d28d9" strokeWidth="1.8" />
          <line x1="155" y1="170" x2="155" y2="190" stroke="#1e293b" strokeWidth="2.5" />
          <text x="145" y="204" textAnchor="middle" fill="#6d28d9" stroke="none" fontSize="9.5" fontWeight="bold">D2</text>
          <line x1="155" y1="180" x2="210" y2="180" stroke="#dc2626" strokeWidth="2" />

          {/* Vertical Bus Joining D1 and D2 Cathodes */}
          <line x1="210" y1="90" x2="210" y2="180" stroke="#dc2626" strokeWidth="2" />
          <circle cx="210" cy="90" r="3.5" fill="#dc2626" />
          <circle cx="210" cy="180" r="3.5" fill="#dc2626" />

          {/* Positive DC Rail from Cathode Junction to Top of RL */}
          <line x1="210" y1="90" x2="295" y2="90" stroke="#dc2626" strokeWidth="2" />
          <text x="248" y="82" fill="#dc2626" stroke="none" fontSize="9" fontWeight="bold">+ Vdc Rail</text>

          {/* Center Tap Ground Return Wire (Clean, zero overlap, routes below) */}
          <line x1="86" y1="135" x2="105" y2="135" stroke="#1e293b" />
          <line x1="105" y1="135" x2="105" y2="210" stroke="#1e293b" />
          <line x1="105" y1="210" x2="295" y2="210" stroke="#1e293b" strokeWidth="2" />

          {/* CT Ground Symbol */}
          <line x1="180" y1="210" x2="180" y2="218" stroke="#1e293b" />
          <line x1="172" y1="218" x2="188" y2="218" stroke="#1e293b" strokeWidth="1.5" />
          <line x1="175" y1="221" x2="185" y2="221" stroke="#1e293b" />
          <text x="180" y="232" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7.5">CT Ground (0V)</text>

          {/* Load Resistor RL between Top Rail (y=90) and Bottom CT Return (y=210) */}
          <line x1="295" y1="90" x2="295" y2="120" stroke="#dc2626" strokeWidth="2" />
          {/* Resistor Zigzag */}
          <path d="M295 120 L287 127 L303 137 L287 147 L303 157 L287 167 L303 174 L295 180" stroke="#dc2626" strokeWidth="2.2" />
          <line x1="295" y1="180" x2="295" y2="210" stroke="#dc2626" strokeWidth="2" />

          <text x="320" y="153" fill="#dc2626" stroke="none" fontSize="11" fontWeight="bold">RL</text>
          <text x="282" y="112" fill="#dc2626" stroke="none" fontSize="13" fontWeight="bold">+</text>
          <text x="282" y="195" fill="#dc2626" stroke="none" fontSize="15" fontWeight="bold">-</text>
          <text x="276" y="153" fill="#dc2626" stroke="none" fontSize="9" fontWeight="bold">Vo</text>

          {/* Downward Current Arrow through RL */}
          <line x1="284" y1="126" x2="284" y2="168" stroke="#dc2626" strokeWidth="1.8" />
          <polygon points="280,168 284,175 288,168" fill="#dc2626" stroke="#dc2626" />
          <text x="272" y="146" textAnchor="end" fill="#dc2626" stroke="none" fontSize="8" fontWeight="bold">iL</text>

          {/* Conduction cycle annotations */}
          <text x="175" y="246" textAnchor="middle" fill="#059669" stroke="none" fontSize="8.2" fontWeight="bold">
            Pos Half (0 to π): A is (+), D1 conducts → Current flows A → D1 → RL (down) → CT
          </text>
          <text x="175" y="259" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="8.2" fontWeight="bold">
            Neg Half (π to 2π): B is (+), D2 conducts → Current flows B → D2 → RL (down) → CT
          </text>

          {/* RIGHT: Waveforms Box */}
          <rect x="362" y="50" width="206" height="215" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="372" y="68" fill="#059669" stroke="none" fontSize="11" fontWeight="bold">Waveforms & Timing Analysis:</text>

          {/* Waveform 1: Secondary Anti-Phase Inputs */}
          <text x="372" y="84" fill="#2563eb" stroke="none" fontSize="7.8" fontWeight="bold">Secondary vA (D1) &amp; vB (D2):</text>
          <line x1="375" y1="108" x2="555" y2="108" stroke="#94a3b8" strokeWidth="1" />
          <path d="M375 108 Q395 86 415 108 Q435 130 455 108 Q475 86 495 108 Q515 130 535 108" stroke="#2563eb" strokeWidth="1.8" fill="none" />
          <path d="M375 108 Q395 130 415 108 Q435 86 455 108 Q475 130 495 108 Q515 86 535 108" stroke="#7c3aed" strokeWidth="1.3" strokeDasharray="3 2" fill="none" />
          <text x="395" y="83" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="7" fontWeight="bold">+Vm (vA)</text>
          <text x="435" y="83" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="7" fontWeight="bold">+Vm (vB)</text>

          {/* Waveform 2: Full-Wave Rectified Output */}
          <text x="372" y="146" fill="#dc2626" stroke="none" fontSize="7.8" fontWeight="bold">Full-Wave Rectified Vo across RL:</text>
          <line x1="375" y1="175" x2="555" y2="175" stroke="#94a3b8" strokeWidth="1" />
          {/* Continuous positive arches */}
          <path d="M375 175 Q395 142 415 175 Q435 142 455 175 Q475 142 495 175 Q515 142 535 175" stroke="#dc2626" strokeWidth="2.2" fill="none" />

          <text x="395" y="152" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="7.5" fontWeight="bold">D1 ON</text>
          <text x="435" y="152" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="7.5" fontWeight="bold">D2 ON</text>
          <text x="475" y="152" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="7.5" fontWeight="bold">D1 ON</text>
          <text x="515" y="152" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="7.5" fontWeight="bold">D2 ON</text>

          <text x="465" y="210" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="8.5" fontWeight="bold">
            Ripple Frequency fr = 2f = 100 Hz
          </text>
          <text x="465" y="224" textAnchor="middle" fill="#059669" stroke="none" fontSize="8" fontWeight="600">
            Efficiency η = 81.2% (Double of Half-Wave)
          </text>
          <text x="465" y="238" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="8" fontWeight="bold">
            PIV Rating per Diode = 2 Vm
          </text>
          <text x="465" y="252" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7.5">
            Ripple Factor γ = 0.482 · Conduction 360°
          </text>

          {/* Bottom Summary Bar */}
          <text x="290" y="284" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="10" fontWeight="bold">
            Vdc = 2Vm/π ≈ 0.636 Vm · Vrms = Vm/√2 ≈ 0.707 Vm · Efficiency η = 81.2% · Ripple Factor γ = 0.482 · PIV = 2Vm
          </text>
        </svg>
      );

    // 2. Semiconductor: Full-Wave Bridge Rectifier with Capacitor Filter & Waveforms
    case 'bridge_rectifier':
    case 'full_wave_bridge_rectifier':
    case 'bridge_full_wave_rectifier':
      return (
        <svg viewBox="0 0 580 300" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="580" height="300" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />

          {/* Header */}
          <text x="290" y="24" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="13.5" fontWeight="bold">
            Full-Wave Bridge Rectifier with Shunt Capacitor Filter & Waveforms
          </text>
          <text x="290" y="40" textAnchor="middle" fill="#64748b" stroke="none" fontSize="10">
            Four Diodes in Closed Loop · PIV = Vm (No Center-Tap Needed) · Ripple γ = 1 / (4√3 f C RL)
          </text>

          {/* LEFT/CENTER: Full Schematic Box */}
          <rect x="12" y="50" width="395" height="215" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="24" y="68" fill="#2563eb" stroke="none" fontSize="11" fontWeight="bold">Full-Wave Bridge Rectifier with C-Filter:</text>

          {/* AC Input Source & Transformer */}
          <circle cx="36" cy="135" r="13" fill="#ffffff" stroke="#2563eb" strokeWidth="1.8" />
          <path d="M30 135 Q33 130 36 135 T42 135" stroke="#2563eb" strokeWidth="1.5" />
          <text x="36" y="159" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="7.5" fontWeight="bold">230V AC</text>

          <line x1="36" y1="122" x2="36" y2="90" stroke="#1e293b" />
          <line x1="36" y1="90" x2="56" y2="90" stroke="#1e293b" />
          <line x1="36" y1="148" x2="36" y2="180" stroke="#1e293b" />
          <line x1="36" y1="180" x2="56" y2="180" stroke="#1e293b" />

          {/* Primary & Core (6 turns, bulges inward towards core at x=68) */}
          <path d="M 56 90 A 7.5 7.5 0 0 1 56 105 A 7.5 7.5 0 0 1 56 120 A 7.5 7.5 0 0 1 56 135 A 7.5 7.5 0 0 1 56 150 A 7.5 7.5 0 0 1 56 165 A 7.5 7.5 0 0 1 56 180" stroke="#2563eb" strokeWidth="2.2" fill="none" />
          <circle cx="48" cy="84" r="2.2" fill="#2563eb" stroke="none" />
          <line x1="68" y1="80" x2="68" y2="190" stroke="#64748b" strokeWidth="2" />
          <line x1="72" y1="80" x2="72" y2="190" stroke="#64748b" strokeWidth="2" />

          {/* Secondary (Step-down: 4 turns, bulges inward towards core at x=72) */}
          <path d="M 84 95 A 10 10 0 0 0 84 115 A 10 10 0 0 0 84 135 A 10 10 0 0 0 84 155 A 10 10 0 0 0 84 175" stroke="#059669" strokeWidth="2.5" fill="none" />
          <circle cx="92" cy="88" r="2.2" fill="#059669" stroke="none" />
          <text x="86" y="86" textAnchor="middle" fill="#059669" stroke="none" fontSize="8" fontWeight="bold">vs = Vm sin ωt</text>

          {/* AC Feed: Secondary Top (84, 95) to Left Bridge Node (145, 135) */}
          <line x1="84" y1="95" x2="115" y2="95" stroke="#1e293b" />
          <line x1="115" y1="95" x2="115" y2="135" stroke="#1e293b" />
          <line x1="115" y1="135" x2="145" y2="135" stroke="#1e293b" strokeWidth="2" />

          {/* AC Feed: Secondary Bottom (84, 175) to Right Bridge Node (245, 135) - Routed below diamond */}
          <line x1="84" y1="175" x2="100" y2="175" stroke="#1e293b" />
          <line x1="100" y1="175" x2="100" y2="225" stroke="#1e293b" />
          <line x1="100" y1="225" x2="265" y2="225" stroke="#1e293b" />
          <line x1="265" y1="225" x2="265" y2="135" stroke="#1e293b" />
          <line x1="265" y1="135" x2="245" y2="135" stroke="#1e293b" strokeWidth="2" />

          {/* ================= PERFECT 4-DIODE BRIDGE DIAMOND ================= */}
          {/* Node Left: (145, 135) | Node Top: (195, 75) | Node Right: (245, 135) | Node Bottom: (195, 195) */}

          {/* Arm 1: Left to Top -> Diode D1 (Cathode points to Top Node) */}
          <line x1="145" y1="135" x2="163" y2="113" stroke="#1e293b" strokeWidth="2" />
          {/* D1 Triangle */}
          <polygon points="157,108 169,118 177,97" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
          {/* D1 Cathode Bar */}
          <line x1="171" y1="92" x2="183" y2="102" stroke="#1e293b" strokeWidth="2.5" />
          <line x1="177" y1="97" x2="195" y2="75" stroke="#1e293b" strokeWidth="2" />
          <text x="156" y="94" fill="#1d4ed8" stroke="none" fontSize="9.5" fontWeight="bold">D1</text>

          {/* Arm 2: Bottom to Left -> Diode D2 (Cathode points to Left Node) */}
          <line x1="195" y1="195" x2="177" y2="173" stroke="#1e293b" strokeWidth="2" />
          {/* D2 Triangle */}
          <polygon points="183,168 171,178 163,157" fill="#059669" stroke="#047857" strokeWidth="1.5" />
          {/* D2 Cathode Bar */}
          <line x1="169" y1="152" x2="157" y2="162" stroke="#1e293b" strokeWidth="2.5" />
          <line x1="163" y1="157" x2="145" y2="135" stroke="#1e293b" strokeWidth="2" />
          <text x="156" y="184" fill="#047857" stroke="none" fontSize="9.5" fontWeight="bold">D2</text>

          {/* Arm 3: Right to Top -> Diode D3 (Cathode points to Top Node) */}
          <line x1="245" y1="135" x2="227" y2="113" stroke="#1e293b" strokeWidth="2" />
          {/* D3 Triangle */}
          <polygon points="233,108 221,118 213,97" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
          {/* D3 Cathode Bar */}
          <line x1="207" y1="102" x2="219" y2="92" stroke="#1e293b" strokeWidth="2.5" />
          <line x1="213" y1="97" x2="195" y2="75" stroke="#1e293b" strokeWidth="2" />
          <text x="234" y="94" fill="#1d4ed8" stroke="none" fontSize="9.5" fontWeight="bold">D3</text>

          {/* Arm 4: Bottom to Right -> Diode D4 (Cathode points to Right Node) */}
          <line x1="195" y1="195" x2="213" y2="173" stroke="#1e293b" strokeWidth="2" />
          {/* D4 Triangle */}
          <polygon points="207,168 219,178 227,157" fill="#059669" stroke="#047857" strokeWidth="1.5" />
          {/* D4 Cathode Bar */}
          <line x1="221" y1="152" x2="233" y2="162" stroke="#1e293b" strokeWidth="2.5" />
          <line x1="227" y1="157" x2="245" y2="135" stroke="#1e293b" strokeWidth="2" />
          <text x="234" y="184" fill="#047857" stroke="none" fontSize="9.5" fontWeight="bold">D4</text>

          {/* Bridge Junction Dots */}
          <circle cx="145" cy="135" r="3" fill="#2563eb" />
          <circle cx="245" cy="135" r="3" fill="#2563eb" />
          <circle cx="195" cy="75" r="3.5" fill="#dc2626" />
          <circle cx="195" cy="195" r="3.5" fill="#1e293b" />

          {/* DC Positive Output Rail (Red) */}
          <line x1="195" y1="75" x2="385" y2="75" stroke="#dc2626" strokeWidth="2.5" />
          <text x="270" y="68" fill="#dc2626" stroke="none" fontSize="9" fontWeight="bold">+ Vdc Rail</text>

          {/* DC Negative Return Rail (Neutral/Ground) */}
          <line x1="195" y1="195" x2="385" y2="195" stroke="#1e293b" strokeWidth="2.5" />
          <text x="270" y="209" fill="#1e293b" stroke="none" fontSize="9" fontWeight="bold">- Return (GND)</text>

          {/* Ground on Return Rail */}
          <line x1="245" y1="195" x2="245" y2="203" stroke="#1e293b" />
          <line x1="237" y1="203" x2="253" y2="203" stroke="#1e293b" strokeWidth="1.5" />
          <line x1="240" y1="206" x2="250" y2="206" stroke="#1e293b" />

          {/* Shunt Filter Capacitor C */}
          <line x1="315" y1="75" x2="315" y2="127" stroke="#1e293b" />
          <line x1="303" y1="127" x2="327" y2="127" stroke="#0284c7" strokeWidth="3" />
          <line x1="303" y1="135" x2="327" y2="135" stroke="#0284c7" strokeWidth="3" />
          <line x1="315" y1="135" x2="315" y2="195" stroke="#1e293b" />
          <text x="332" y="134" fill="#0284c7" stroke="none" fontSize="9" fontWeight="bold">C (Filter)</text>
          <text x="315" y="122" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="8" fontWeight="bold">+</text>

          {/* Load Resistor RL */}
          <line x1="370" y1="75" x2="370" y2="110" stroke="#dc2626" strokeWidth="2" />
          {/* Resistor Zigzag */}
          <path d="M370 110 L362 116 L378 126 L362 136 L378 146 L362 156 L370 162" stroke="#dc2626" strokeWidth="2.2" />
          <line x1="370" y1="162" x2="370" y2="195" stroke="#dc2626" strokeWidth="2" />

          <text x="390" y="139" fill="#dc2626" stroke="none" fontSize="10.5" fontWeight="bold">RL</text>
          <text x="357" y="105" fill="#dc2626" stroke="none" fontSize="12" fontWeight="bold">+</text>
          <text x="357" y="175" fill="#dc2626" stroke="none" fontSize="14" fontWeight="bold">-</text>
          <text x="352" y="138" fill="#dc2626" stroke="none" fontSize="8.5" fontWeight="bold">Vo</text>

          {/* Operation Status Annotations */}
          <text x="207" y="246" textAnchor="middle" fill="#059669" stroke="none" fontSize="8" fontWeight="bold">
            Pos Half (0-π): Upper AC (+), D1 &amp; D4 conduct in series through RL (D2 &amp; D3 OFF)
          </text>
          <text x="207" y="259" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="8" fontWeight="bold">
            Neg Half (π-2π): Lower AC (+), D3 &amp; D2 conduct in series through RL (D1 &amp; D4 OFF)
          </text>

          {/* RIGHT: Smoothing Waveforms Panel */}
          <rect x="415" y="50" width="153" height="215" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="423" y="68" fill="#059669" stroke="none" fontSize="10.5" fontWeight="bold">Filter Smoothing:</text>

          {/* 1. Unfiltered Pulsating Full-Wave DC */}
          <text x="423" y="84" fill="#64748b" stroke="none" fontSize="7.5" fontWeight="bold">Unfiltered DC (Ripple 48.2%):</text>
          <line x1="422" y1="108" x2="558" y2="108" stroke="#94a3b8" strokeWidth="1" />
          <path d="M422 108 Q433 86 444 108 Q455 86 466 108 Q477 86 488 108 Q499 86 510 108 Q521 86 532 108 Q543 86 554 108" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="2 2" fill="none" />

          {/* 2. Filtered Smooth DC with Shunt Capacitor */}
          <text x="423" y="132" fill="#0284c7" stroke="none" fontSize="7.5" fontWeight="bold">Filtered with Capacitor C:</text>
          <line x1="422" y1="175" x2="558" y2="175" stroke="#94a3b8" strokeWidth="1" />
          {/* Triangular discharge ripple */}
          <path d="M422 150 L438 140 L452 150 L468 140 L482 150 L498 140 L512 150 L528 140 L542 150 L558 140" stroke="#0284c7" strokeWidth="2.2" fill="none" />
          <line x1="438" y1="140" x2="528" y2="140" stroke="#dc2626" strokeWidth="1" strokeDasharray="2 2" />
          <text x="548" y="136" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">Vm</text>
          <text x="480" y="162" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">Ripple Vr(p-p)</text>

          {/* Metrics */}
          <text x="490" y="210" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="8.2" fontWeight="bold">
            fr = 2f = 100 Hz
          </text>
          <text x="490" y="224" textAnchor="middle" fill="#059669" stroke="none" fontSize="7.8" fontWeight="bold">
            Efficiency η = 81.2%
          </text>
          <text x="490" y="238" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="7.8" fontWeight="bold">
            PIV = Vm (Key Advantage)
          </text>
          <text x="490" y="252" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7">
            γ = 1 / (4√3 f C RL)
          </text>

          {/* Bottom Summary Bar */}
          <text x="290" y="284" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="10" fontWeight="bold">
            Vdc = 2Vm/π ≈ 0.636 Vm · PIV = Vm (Half of Center-Tapped) · η = 81.2% · TUF = 81.2%
          </text>
        </svg>
      );

    // 3. BJT: Input & Output Characteristics, Operating Regions & DC Load Line
    case 'bjt_characteristics':
    case 'bjt_input_output_characteristics':
      return (
        <svg viewBox="0 0 740 375" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="740" height="375" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />

          {/* Header */}
          <text x="370" y="24" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="13.5" fontWeight="bold">
            BJT (NPN) Common Emitter (CE) Input &amp; Output Characteristics
          </text>
          <text x="370" y="39" textAnchor="middle" fill="#64748b" stroke="none" fontSize="9.5">
            Active, Saturation (V<tspan baselineShift="sub" fontSize="75%">CE(sat)</tspan> ≈ 0.2V) &amp; Cutoff Regions · DC Load Line &amp; Quiescent (Q) Point · Input Knee (V<tspan baselineShift="sub" fontSize="75%">γ</tspan> ≈ 0.7V)
          </text>

          {/* ======================================================== */}
          {/* LEFT PANEL: CE OUTPUT CHARACTERISTICS (IC vs VCE)         */}
          {/* ======================================================== */}
          <rect x="12" y="48" width="430" height="315" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="22" y="66" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">
            CE Output Characteristics (I<tspan baselineShift="sub" fontSize="75%">C</tspan> vs V<tspan baselineShift="sub" fontSize="75%">CE</tspan>) &amp; DC Load Line:
          </text>

          {/* Shaded Saturation Region (0 to 0.7V VCE, left of knee line) */}
          <path d="M60 280 L60 85 L90 85 L90 280 Z" fill="#fef3c7" fillOpacity="0.6" stroke="none" />
          <text x="75" y="100" textAnchor="middle" fill="#b45309" stroke="none" fontSize="7.5" fontWeight="bold">Saturation</text>
          <text x="75" y="110" textAnchor="middle" fill="#b45309" stroke="none" fontSize="6.8">V<tspan baselineShift="sub" fontSize="75%">CE</tspan> &lt; 0.2V</text>

          {/* Shaded Cutoff Region (IB <= 0 at bottom) */}
          <rect x="60" y="272" width="365" height="10" fill="#fee2e2" fillOpacity="0.7" stroke="none" />
          <text x="360" y="279" fill="#991b1b" stroke="none" fontSize="7.5" fontWeight="bold">Cutoff Region (I<tspan baselineShift="sub" fontSize="75%">B</tspan> = 0)</text>

          {/* Active Region Label in Center */}
          <rect x="160" y="70" width="130" height="18" rx="4" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="0.8" />
          <text x="225" y="82" textAnchor="middle" fill="#1e40af" stroke="none" fontSize="8" fontWeight="bold">
            Active Region (I<tspan baselineShift="sub" fontSize="75%">C</tspan> = β · I<tspan baselineShift="sub" fontSize="75%">B</tspan>)
          </text>

          {/* Grid lines */}
          <g stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3">
            <line x1="60" y1="120" x2="425" y2="120" />
            <line x1="60" y1="160" x2="425" y2="160" />
            <line x1="60" y1="200" x2="425" y2="200" />
            <line x1="60" y1="240" x2="425" y2="240" />
            <line x1="140" y1="80" x2="140" y2="280" />
            <line x1="220" y1="80" x2="220" y2="280" />
            <line x1="300" y1="80" x2="300" y2="280" />
            <line x1="380" y1="80" x2="380" y2="280" />
          </g>

          {/* Axes */}
          {/* X-Axis: VCE */}
          <line x1="55" y1="280" x2="430" y2="280" stroke="#1e293b" strokeWidth="1.8" />
          <polygon points="430,280 422,276 422,284" fill="#1e293b" stroke="none" />
          <text x="425" y="295" textAnchor="end" fill="#0f172a" stroke="none" fontSize="9.5" fontWeight="bold">V<tspan baselineShift="sub" fontSize="75%">CE</tspan> (Volts) →</text>

          {/* Y-Axis: IC */}
          <line x1="60" y1="285" x2="60" y2="70" stroke="#1e293b" strokeWidth="1.8" />
          <polygon points="60,70 56,78 64,78" fill="#1e293b" stroke="none" />
          <text x="50" y="78" textAnchor="end" fill="#0f172a" stroke="none" fontSize="9.5" fontWeight="bold">I<tspan baselineShift="sub" fontSize="75%">C</tspan> (mA) ↑</text>
          <text x="50" y="285" fill="#64748b" stroke="none" fontSize="9">0</text>

          {/* Tick marks on VCE axis */}
          <text x="90" y="292" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7.5">0.2V</text>
          <line x1="90" y1="277" x2="90" y2="283" stroke="#64748b" strokeWidth="1" />
          <text x="140" y="292" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7.5">2V</text>
          <text x="220" y="292" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7.5">4V</text>
          <text x="300" y="292" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7.5">6V</text>
          <text x="380" y="292" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7.5">8V (V<tspan baselineShift="sub" fontSize="75%">CC</tspan>)</text>

          {/* Family of IC curves for IB = 40μA, 30μA, 20μA, 10μA, 0μA */}
          {/* IB = 40 μA */}
          <path d="M60 280 Q75 110 90 108 L420 102" stroke="#2563eb" strokeWidth="2.2" fill="none" />
          <text x="422" y="100" fill="#1e40af" stroke="none" fontSize="8" fontWeight="bold">I<tspan baselineShift="sub" fontSize="75%">B</tspan> = 40 μA</text>

          {/* IB = 30 μA */}
          <path d="M60 280 Q75 150 90 148 L420 144" stroke="#2563eb" strokeWidth="2.2" fill="none" />
          <text x="422" y="142" fill="#1e40af" stroke="none" fontSize="8" fontWeight="bold">I<tspan baselineShift="sub" fontSize="75%">B</tspan> = 30 μA</text>

          {/* IB = 20 μA (Q-point curve) */}
          <path d="M60 280 Q75 190 90 188 L420 184" stroke="#0284c7" strokeWidth="2.4" fill="none" />
          <text x="422" y="182" fill="#0369a1" stroke="none" fontSize="8" fontWeight="bold">I<tspan baselineShift="sub" fontSize="75%">B</tspan> = 20 μA (Q-curve)</text>

          {/* IB = 10 μA */}
          <path d="M60 280 Q75 230 90 228 L420 226" stroke="#2563eb" strokeWidth="2.2" fill="none" />
          <text x="422" y="224" fill="#1e40af" stroke="none" fontSize="8" fontWeight="bold">I<tspan baselineShift="sub" fontSize="75%">B</tspan> = 10 μA</text>

          {/* IB = 0 (Cutoff) */}
          <line x1="60" y1="278" x2="420" y2="278" stroke="#dc2626" strokeWidth="1.8" strokeDasharray="3 3" />
          <text x="422" y="276" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">I<tspan baselineShift="sub" fontSize="75%">B</tspan> = 0 (I<tspan baselineShift="sub" fontSize="75%">CEO</tspan>)</text>

          {/* DC LOAD LINE in Crimson Dashed */}
          <line x1="60" y1="95" x2="380" y2="280" stroke="#dc2626" strokeWidth="2.2" strokeDasharray="5 4" />
          <circle cx="60" cy="95" r="3.5" fill="#dc2626" stroke="#ffffff" strokeWidth="1" />
          <text x="65" y="93" fill="#dc2626" stroke="none" fontSize="7.8" fontWeight="bold">V<tspan baselineShift="sub" fontSize="75%">CC</tspan>/R<tspan baselineShift="sub" fontSize="75%">C</tspan> (Sat)</text>
          <circle cx="380" cy="280" r="3.5" fill="#dc2626" stroke="#ffffff" strokeWidth="1" />
          <text x="380" y="272" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="7.8" fontWeight="bold">V<tspan baselineShift="sub" fontSize="75%">CC</tspan> (Cutoff)</text>

          {/* Quiescent Q-Point at Intersection of DC Load Line & IB = 20 μA curve */}
          <circle cx="225" cy="186" r="5" fill="#dc2626" stroke="#ffffff" strokeWidth="1.5" />
          <line x1="225" y1="186" x2="225" y2="280" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="2 2" />
          <line x1="60" y1="186" x2="225" y2="186" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="2 2" />
          
          {/* Q-Point Callout Box */}
          <rect x="235" y="166" width="95" height="30" rx="4" fill="#fef2f2" stroke="#fecaca" strokeWidth="1" />
          <text x="282" y="178" textAnchor="middle" fill="#991b1b" stroke="none" fontSize="8" fontWeight="bold">Operating Point Q</text>
          <text x="282" y="190" textAnchor="middle" fill="#7f1d1d" stroke="none" fontSize="7.2">V<tspan baselineShift="sub" fontSize="75%">CEQ</tspan> ≈ V<tspan baselineShift="sub" fontSize="75%">CC</tspan>/2 · I<tspan baselineShift="sub" fontSize="75%">CQ</tspan> = β·I<tspan baselineShift="sub" fontSize="75%">B</tspan></text>

          {/* Bottom Left Formula Box */}
          <rect x="22" y="322" width="410" height="32" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <text x="227" y="335" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="8" fontWeight="bold">
            DC Load Line: V<tspan baselineShift="sub" fontSize="75%">CE</tspan> = V<tspan baselineShift="sub" fontSize="75%">CC</tspan> - I<tspan baselineShift="sub" fontSize="75%">C</tspan> · (R<tspan baselineShift="sub" fontSize="75%">C</tspan> + R<tspan baselineShift="sub" fontSize="75%">E</tspan>) · Active: I<tspan baselineShift="sub" fontSize="75%">C</tspan> = β · I<tspan baselineShift="sub" fontSize="75%">B</tspan> + I<tspan baselineShift="sub" fontSize="75%">CEO</tspan>
          </text>
          <text x="227" y="347" textAnchor="middle" fill="#475569" stroke="none" fontSize="7.2">
            Early Effect: Extrapolations meet at -V<tspan baselineShift="sub" fontSize="75%">A</tspan> on negative axis · Saturation: V<tspan baselineShift="sub" fontSize="75%">CE(sat)</tspan> ≈ 0.2V
          </text>

          {/* ======================================================== */}
          {/* RIGHT PANEL: CE INPUT CURVE & REGION MATRIX              */}
          {/* ======================================================== */}
          <rect x="452" y="48" width="276" height="315" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="462" y="66" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">
            CE Input Characteristic (I<tspan baselineShift="sub" fontSize="75%">B</tspan> vs V<tspan baselineShift="sub" fontSize="75%">BE</tspan>):
          </text>

          {/* Small Input Graph Area */}
          <g transform="translate(470, 78)">
            {/* Grid */}
            <line x1="25" y1="40" x2="235" y2="40" stroke="#f1f5f9" strokeDasharray="2 2" />
            <line x1="25" y1="75" x2="235" y2="75" stroke="#f1f5f9" strokeDasharray="2 2" />
            <line x1="130" y1="15" x2="130" y2="105" stroke="#f1f5f9" strokeDasharray="2 2" />

            {/* Axes */}
            <line x1="25" y1="105" x2="235" y2="105" stroke="#1e293b" strokeWidth="1.5" />
            <polygon points="235,105 228,102 228,108" fill="#1e293b" stroke="none" />
            <text x="235" y="117" textAnchor="end" fill="#0f172a" stroke="none" fontSize="8.5" fontWeight="bold">V<tspan baselineShift="sub" fontSize="75%">BE</tspan> (V)</text>

            <line x1="25" y1="105" x2="25" y2="15" stroke="#1e293b" strokeWidth="1.5" />
            <polygon points="25,15 22,22 28,22" fill="#1e293b" stroke="none" />
            <text x="22" y="13" textAnchor="end" fill="#0f172a" stroke="none" fontSize="8.5" fontWeight="bold">I<tspan baselineShift="sub" fontSize="75%">B</tspan> (μA)</text>

            {/* Knee Voltage Vγ Marker */}
            <line x1="130" y1="20" x2="130" y2="105" stroke="#2563eb" strokeWidth="1" strokeDasharray="2 2" />
            <text x="130" y="117" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="7.8" fontWeight="bold">0.7V (Knee V<tspan baselineShift="sub" fontSize="75%">γ</tspan>)</text>

            {/* Input Curves for VCE = 1V and VCE = 10V */}
            <path d="M25 105 L110 105 Q128 103 140 70 L155 20" stroke="#2563eb" strokeWidth="2.2" fill="none" />
            <text x="160" y="24" fill="#1e40af" stroke="none" fontSize="7.5" fontWeight="bold">V<tspan baselineShift="sub" fontSize="75%">CE</tspan> = 1V</text>

            <path d="M25 105 L120 105 Q135 103 148 70 L165 20" stroke="#059669" strokeWidth="1.8" strokeDasharray="3 2" fill="none" />
            <text x="170" y="38" fill="#065f46" stroke="none" fontSize="7.5" fontWeight="bold">V<tspan baselineShift="sub" fontSize="75%">CE</tspan> = 10V</text>

            {/* Dynamic Resistance hie Triangle */}
            <polygon points="144,55 152,55 152,35" fill="#dbeafe" stroke="#2563eb" strokeWidth="0.8" />
            <text x="160" y="52" fill="#1e40af" stroke="none" fontSize="7">h<tspan baselineShift="sub" fontSize="75%">ie</tspan> = ΔV<tspan baselineShift="sub" fontSize="75%">BE</tspan> / ΔI<tspan baselineShift="sub" fontSize="75%">B</tspan></text>
          </g>

          {/* Transistor Operating Regions Table in Lower Half */}
          <g transform="translate(460, 206)">
            <rect x="0" y="0" width="260" height="148" rx="5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
            <text x="130" y="15" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="8.5" fontWeight="bold">
              BJT Junction Biasing &amp; Applications:
            </text>

            {/* Active Mode */}
            <rect x="8" y="22" width="244" height="36" rx="3" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="0.8" />
            <text x="14" y="34" fill="#1e40af" stroke="none" fontSize="8" fontWeight="bold">1. Active Mode (Linear Amplifiers):</text>
            <text x="14" y="44" fill="#1e3a8a" stroke="none" fontSize="7.2">• E-B Junction: Forward Biased (V<tspan baselineShift="sub" fontSize="75%">BE</tspan> ≈ 0.7V)</text>
            <text x="14" y="53" fill="#1e3a8a" stroke="none" fontSize="7.2">• C-B Junction: Reverse Biased (V<tspan baselineShift="sub" fontSize="75%">CB</tspan> &gt; 0) · I<tspan baselineShift="sub" fontSize="75%">C</tspan> = β·I<tspan baselineShift="sub" fontSize="75%">B</tspan></text>

            {/* Saturation Mode */}
            <rect x="8" y="62" width="244" height="36" rx="3" fill="#fef3c7" stroke="#fde68a" strokeWidth="0.8" />
            <text x="14" y="74" fill="#92400e" stroke="none" fontSize="8" fontWeight="bold">2. Saturation Mode (Switch CLOSED / ON):</text>
            <text x="14" y="84" fill="#78350f" stroke="none" fontSize="7.2">• E-B Forward Biased · C-B Forward Biased</text>
            <text x="14" y="93" fill="#78350f" stroke="none" fontSize="7.2">• V<tspan baselineShift="sub" fontSize="75%">CE(sat)</tspan> ≈ 0.2V · Max Current I<tspan baselineShift="sub" fontSize="75%">C</tspan> = V<tspan baselineShift="sub" fontSize="75%">CC</tspan> / R<tspan baselineShift="sub" fontSize="75%">C</tspan></text>

            {/* Cutoff Mode */}
            <rect x="8" y="102" width="244" height="36" rx="3" fill="#fef2f2" stroke="#fecaca" strokeWidth="0.8" />
            <text x="14" y="114" fill="#991b1b" stroke="none" fontSize="8" fontWeight="bold">3. Cutoff Mode (Switch OPEN / OFF):</text>
            <text x="14" y="124" fill="#7f1d1d" stroke="none" fontSize="7.2">• E-B Reverse Biased · C-B Reverse Biased</text>
            <text x="14" y="133" fill="#7f1d1d" stroke="none" fontSize="7.2">• I<tspan baselineShift="sub" fontSize="75%">B</tspan> = 0 · I<tspan baselineShift="sub" fontSize="75%">C</tspan> = I<tspan baselineShift="sub" fontSize="75%">CEO</tspan> ≈ 0 · V<tspan baselineShift="sub" fontSize="75%">CE</tspan> = V<tspan baselineShift="sub" fontSize="75%">CC</tspan></text>
          </g>
        </svg>
      );

    // 3. BJT: Physical Block Diagram (NPN vs PNP)
    case 'bjt_block_diagram':
      return (
        <svg viewBox="0 0 740 335" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="740" height="335" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />

          {/* Header */}
          <text x="370" y="24" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="13.5" fontWeight="bold">
            BJT Physical Structure: NPN vs PNP Block Diagrams &amp; Charge Transport
          </text>
          <text x="370" y="39" textAnchor="middle" fill="#64748b" stroke="none" fontSize="9.5">
            Heavily Doped Emitter (n⁺/p⁺) · Ultra-Thin Lightly Doped Base (p/n) · Moderately Doped Collector (n/p)
          </text>

          {/* LEFT: NPN Panel */}
          <rect x="14" y="48" width="350" height="275" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="24" y="66" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">1. NPN BJT: Physical Block &amp; Schematic Symbol</text>

          {/* NPN Physical Block */}
          <g>
            {/* Emitter Region (n+) */}
            <rect x="42" y="80" width="64" height="68" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
            <text x="74" y="96" textAnchor="middle" fill="#0369a1" stroke="none" fontSize="8" fontWeight="bold">Emitter (n⁺)</text>
            <text x="74" y="107" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="6.8">Heavily Doped</text>
            <text x="74" y="118" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="6.8">Electrons (e⁻)</text>
            {/* Emitter Terminal Contact & Wire */}
            <rect x="38" y="98" width="4" height="32" fill="#64748b" />
            <line x1="22" y1="114" x2="38" y2="114" stroke="#dc2626" strokeWidth="2" />
            <circle cx="22" cy="114" r="3" fill="#dc2626" />
            <text x="16" y="118" textAnchor="end" fill="#dc2626" stroke="none" fontSize="9" fontWeight="bold">E</text>
            {/* Emitter Current Direction (IE leaves) */}
            <polygon points="26,114 32,111 32,117" fill="#dc2626" />

            {/* E-B Depletion Region (Forward Biased - Narrow) */}
            <rect x="106" y="80" width="8" height="68" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 1" />
            <text x="110" y="75" textAnchor="middle" fill="#d97706" stroke="none" fontSize="6" fontWeight="bold">E-B</text>

            {/* Base Region (p) - Thin & Lightly Doped */}
            <rect x="114" y="80" width="30" height="68" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="129" y="96" textAnchor="middle" fill="#991b1b" stroke="none" fontSize="7.5" fontWeight="bold">Base (p)</text>
            <text x="129" y="107" textAnchor="middle" fill="#991b1b" stroke="none" fontSize="6.5">Thin ~1μm</text>
            <text x="129" y="118" textAnchor="middle" fill="#991b1b" stroke="none" fontSize="6.5">Holes (h⁺)</text>
            {/* Base Terminal Contact & Wire */}
            <rect x="121" y="148" width="16" height="4" fill="#64748b" />
            <line x1="129" y1="152" x2="129" y2="175" stroke="#1e293b" strokeWidth="2" />
            <circle cx="129" cy="175" r="3" fill="#1e293b" />
            <text x="129" y="187" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="9" fontWeight="bold">B</text>
            {/* Base Current Direction (IB enters) */}
            <polygon points="129,154 126,159 132,159" fill="#1e293b" />

            {/* C-B Depletion Region (Reverse Biased - Wide) */}
            <rect x="144" y="80" width="18" height="68" fill="#fef3c7" stroke="#d97706" strokeWidth="1" strokeDasharray="2 1" />
            <text x="153" y="75" textAnchor="middle" fill="#d97706" stroke="none" fontSize="6" fontWeight="bold">C-B</text>

            {/* Collector Region (n) - Large Area */}
            <rect x="162" y="80" width="80" height="68" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
            <text x="202" y="96" textAnchor="middle" fill="#0369a1" stroke="none" fontSize="8" fontWeight="bold">Collector (n)</text>
            <text x="202" y="107" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="6.8">Moderate Doping</text>
            <text x="202" y="118" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="6.8">Largest Area</text>
            {/* Collector Terminal Contact & Wire */}
            <rect x="242" y="98" width="4" height="32" fill="#64748b" />
            <line x1="246" y1="114" x2="260" y2="114" stroke="#0284c7" strokeWidth="2" />
            <circle cx="260" cy="114" r="3" fill="#0284c7" />
            <text x="266" y="118" fill="#0284c7" stroke="none" fontSize="9" fontWeight="bold">C</text>
            {/* Collector Current Direction (IC enters) */}
            <polygon points="248,114 253,111 253,117" fill="#0284c7" />

            {/* Carrier Flow Arrow (Electron Transport) */}
            <line x1="56" y1="134" x2="228" y2="134" stroke="#2563eb" strokeWidth="1.8" strokeDasharray="3 2" />
            <polygon points="228,134 222,131 222,137" fill="#2563eb" />
            <text x="142" y="143" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="6.8" fontWeight="bold">&gt;98% Electrons to Collector</text>
          </g>

          {/* NPN Circuit Symbol (Side-by-Side) */}
          <g transform="translate(315, 114)">
            <circle cx="0" cy="0" r="23" stroke="#64748b" fill="#f8fafc" />
            <text x="0" y="-7" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7.5" fontWeight="bold">NPN</text>
            {/* Base Bar */}
            <line x1="-12" y1="-14" x2="-12" y2="14" stroke="#0f172a" strokeWidth="3" />
            {/* Base Lead */}
            <line x1="-28" y1="0" x2="-12" y2="0" stroke="#1e293b" strokeWidth="1.8" />
            <circle cx="-28" cy="0" r="2.5" fill="#1e293b" />
            {/* Collector Lead */}
            <line x1="-12" y1="-7" x2="10" y2="-19" stroke="#0284c7" strokeWidth="1.8" />
            <line x1="10" y1="-19" x2="10" y2="-28" stroke="#0284c7" strokeWidth="1.8" />
            <circle cx="10" cy="-28" r="2.5" fill="#0284c7" />
            {/* Emitter Lead with Outward Arrow */}
            <line x1="-12" y1="7" x2="10" y2="19" stroke="#dc2626" strokeWidth="1.8" />
            <polygon points="2.9,15.1 -5.6,15.0 -1.8,8.0" fill="#dc2626" stroke="#dc2626" strokeWidth="0.5" />
            <line x1="10" y1="19" x2="10" y2="28" stroke="#dc2626" strokeWidth="1.8" />
            <circle cx="10" cy="28" r="2.5" fill="#dc2626" />
            <text x="16" y="-25" fill="#0284c7" stroke="none" fontSize="7.5" fontWeight="bold">C</text>
            <text x="-32" y="3" textAnchor="end" fill="#1e293b" stroke="none" fontSize="7.5" fontWeight="bold">B</text>
            <text x="16" y="31" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">E</text>
          </g>

          {/* NPN Summary & Governing Physics Box */}
          <rect x="22" y="202" width="334" height="113" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <text x="32" y="217" fill="#0f172a" stroke="none" fontSize="8.2" fontWeight="bold">NPN Operational Physics &amp; Relations:</text>
          <text x="32" y="230" fill="#334155" stroke="none" fontSize="7.5">• Doping Profile: Emitter (n⁺) ≫ Collector (n) ≫ Base (p)</text>
          <text x="32" y="242" fill="#334155" stroke="none" fontSize="7.5">• Physical Size: Collector Area &gt; Emitter Area ≫ Base Width (W<tspan baselineShift="sub" fontSize="75%">B</tspan> ≪ L<tspan baselineShift="sub" fontSize="75%">n</tspan>)</text>
          <text x="32" y="254" fill="#334155" stroke="none" fontSize="7.5">• Junction Biases: E-B Forward Biased (V<tspan baselineShift="sub" fontSize="75%">BE</tspan> ≈ 0.7V) · C-B Reverse Biased</text>
          <text x="32" y="266" fill="#334155" stroke="none" fontSize="7.5">• Current Conservation: I<tspan baselineShift="sub" fontSize="75%">E</tspan> = I<tspan baselineShift="sub" fontSize="75%">B</tspan> + I<tspan baselineShift="sub" fontSize="75%">C</tspan> (Kirchhoff's Node Law)</text>
          <text x="32" y="278" fill="#334155" stroke="none" fontSize="7.5">• Current Gains: α = I<tspan baselineShift="sub" fontSize="75%">C</tspan> / I<tspan baselineShift="sub" fontSize="75%">E</tspan> ≈ 0.98 · β = I<tspan baselineShift="sub" fontSize="75%">C</tspan> / I<tspan baselineShift="sub" fontSize="75%">B</tspan> = α / (1 - α) ≈ 50-300</text>
          <text x="32" y="290" fill="#1e40af" stroke="none" fontSize="7.5" fontWeight="bold">• Majority Carriers: High-mobility electrons (μ<tspan baselineShift="sub" fontSize="75%">n</tspan> ≈ 1400 cm²/V·s)</text>
          <text x="32" y="303" fill="#64748b" stroke="none" fontSize="7.2">• Terminal Directions: I<tspan baselineShift="sub" fontSize="75%">E</tspan> leaves E · I<tspan baselineShift="sub" fontSize="75%">B</tspan> enters B · I<tspan baselineShift="sub" fontSize="75%">C</tspan> enters C</text>

          {/* RIGHT: PNP Panel */}
          <rect x="376" y="48" width="350" height="275" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="386" y="66" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">2. PNP BJT: Physical Block &amp; Schematic Symbol</text>

          {/* PNP Physical Block */}
          <g>
            {/* Emitter Region (p+) */}
            <rect x="404" y="80" width="64" height="68" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5" />
            <text x="436" y="96" textAnchor="middle" fill="#991b1b" stroke="none" fontSize="8" fontWeight="bold">Emitter (p⁺)</text>
            <text x="436" y="107" textAnchor="middle" fill="#991b1b" stroke="none" fontSize="6.8">Heavily Doped</text>
            <text x="436" y="118" textAnchor="middle" fill="#991b1b" stroke="none" fontSize="6.8">Holes (h⁺)</text>
            {/* Emitter Terminal Contact & Wire */}
            <rect x="400" y="98" width="4" height="32" fill="#64748b" />
            <line x1="384" y1="114" x2="400" y2="114" stroke="#dc2626" strokeWidth="2" />
            <circle cx="384" cy="114" r="3" fill="#dc2626" />
            <text x="378" y="118" textAnchor="end" fill="#dc2626" stroke="none" fontSize="9" fontWeight="bold">E</text>
            {/* Emitter Current Direction (IE enters) */}
            <polygon points="396,114 390,111 390,117" fill="#dc2626" />

            {/* E-B Depletion Region (Forward Biased - Narrow) */}
            <rect x="468" y="80" width="8" height="68" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 1" />
            <text x="472" y="75" textAnchor="middle" fill="#d97706" stroke="none" fontSize="6" fontWeight="bold">E-B</text>

            {/* Base Region (n) - Thin & Lightly Doped */}
            <rect x="476" y="80" width="30" height="68" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="491" y="96" textAnchor="middle" fill="#0369a1" stroke="none" fontSize="7.5" fontWeight="bold">Base (n)</text>
            <text x="491" y="107" textAnchor="middle" fill="#0369a1" stroke="none" fontSize="6.5">Thin ~1μm</text>
            <text x="491" y="118" textAnchor="middle" fill="#0369a1" stroke="none" fontSize="6.5">Electrons</text>
            {/* Base Terminal Contact & Wire */}
            <rect x="483" y="148" width="16" height="4" fill="#64748b" />
            <line x1="491" y1="152" x2="491" y2="175" stroke="#1e293b" strokeWidth="2" />
            <circle cx="491" cy="175" r="3" fill="#1e293b" />
            <text x="491" y="187" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="9" fontWeight="bold">B</text>
            {/* Base Current Direction (IB leaves) */}
            <polygon points="491,173 488,168 494,168" fill="#1e293b" />

            {/* C-B Depletion Region (Reverse Biased - Wide) */}
            <rect x="506" y="80" width="18" height="68" fill="#fef3c7" stroke="#d97706" strokeWidth="1" strokeDasharray="2 1" />
            <text x="515" y="75" textAnchor="middle" fill="#d97706" stroke="none" fontSize="6" fontWeight="bold">C-B</text>

            {/* Collector Region (p) - Large Area */}
            <rect x="524" y="80" width="80" height="68" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5" />
            <text x="564" y="96" textAnchor="middle" fill="#991b1b" stroke="none" fontSize="8" fontWeight="bold">Collector (p)</text>
            <text x="564" y="107" textAnchor="middle" fill="#991b1b" stroke="none" fontSize="6.8">Moderate Doping</text>
            <text x="564" y="118" textAnchor="middle" fill="#991b1b" stroke="none" fontSize="6.8">Largest Area</text>
            {/* Collector Terminal Contact & Wire */}
            <rect x="604" y="98" width="4" height="32" fill="#64748b" />
            <line x1="608" y1="114" x2="622" y2="114" stroke="#dc2626" strokeWidth="2" />
            <circle cx="622" cy="114" r="3" fill="#dc2626" />
            <text x="628" y="118" fill="#dc2626" stroke="none" fontSize="9" fontWeight="bold">C</text>
            {/* Collector Current Direction (IC leaves) */}
            <polygon points="620,114 615,111 615,117" fill="#dc2626" />

            {/* Carrier Flow Arrow (Hole Transport) */}
            <line x1="418" y1="134" x2="590" y2="134" stroke="#dc2626" strokeWidth="1.8" strokeDasharray="3 2" />
            <polygon points="590,134 584,131 584,137" fill="#dc2626" />
            <text x="504" y="143" textAnchor="middle" fill="#991b1b" stroke="none" fontSize="6.8" fontWeight="bold">&gt;98% Holes to Collector</text>
          </g>

          {/* PNP Circuit Symbol (Side-by-Side) */}
          <g transform="translate(678, 114)">
            <circle cx="0" cy="0" r="23" stroke="#64748b" fill="#f8fafc" />
            <text x="0" y="-7" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7.5" fontWeight="bold">PNP</text>
            {/* Base Bar */}
            <line x1="-12" y1="-14" x2="-12" y2="14" stroke="#0f172a" strokeWidth="3" />
            {/* Base Lead */}
            <line x1="-28" y1="0" x2="-12" y2="0" stroke="#1e293b" strokeWidth="1.8" />
            <circle cx="-28" cy="0" r="2.5" fill="#1e293b" />
            {/* Collector Lead */}
            <line x1="-12" y1="-7" x2="10" y2="-19" stroke="#dc2626" strokeWidth="1.8" />
            <line x1="10" y1="-19" x2="10" y2="-28" stroke="#dc2626" strokeWidth="1.8" />
            <circle cx="10" cy="-28" r="2.5" fill="#dc2626" />
            {/* Emitter Lead with Inward Arrow (pointing directly towards Base bar along slant) */}
            <line x1="-12" y1="7" x2="10" y2="19" stroke="#dc2626" strokeWidth="1.8" />
            <polygon points="-8.5,8.9 -3.8,16.0 0.0,9.0" fill="#dc2626" stroke="#dc2626" strokeWidth="0.5" />
            <line x1="10" y1="19" x2="10" y2="28" stroke="#dc2626" strokeWidth="1.8" />
            <circle cx="10" cy="28" r="2.5" fill="#dc2626" />
            <text x="16" y="-25" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">C</text>
            <text x="-32" y="3" textAnchor="end" fill="#1e293b" stroke="none" fontSize="7.5" fontWeight="bold">B</text>
            <text x="16" y="31" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">E</text>
          </g>

          {/* PNP Summary & Governing Physics Box */}
          <rect x="384" y="202" width="334" height="113" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <text x="394" y="217" fill="#0f172a" stroke="none" fontSize="8.2" fontWeight="bold">PNP Operational Physics &amp; Relations:</text>
          <text x="394" y="230" fill="#334155" stroke="none" fontSize="7.5">• Doping Profile: Emitter (p⁺) ≫ Collector (p) ≫ Base (n)</text>
          <text x="394" y="242" fill="#334155" stroke="none" fontSize="7.5">• Physical Size: Collector Area &gt; Emitter Area ≫ Base Width (W<tspan baselineShift="sub" fontSize="75%">B</tspan> ≪ L<tspan baselineShift="sub" fontSize="75%">p</tspan>)</text>
          <text x="394" y="254" fill="#334155" stroke="none" fontSize="7.5">• Junction Biases: E-B Forward Biased (V<tspan baselineShift="sub" fontSize="75%">EB</tspan> ≈ 0.7V) · C-B Reverse Biased</text>
          <text x="394" y="266" fill="#334155" stroke="none" fontSize="7.5">• Current Conservation: I<tspan baselineShift="sub" fontSize="75%">E</tspan> = I<tspan baselineShift="sub" fontSize="75%">B</tspan> + I<tspan baselineShift="sub" fontSize="75%">C</tspan> (Current enters Emitter terminal)</text>
          <text x="394" y="278" fill="#334155" stroke="none" fontSize="7.5">• Current Gains: α = I<tspan baselineShift="sub" fontSize="75%">C</tspan> / I<tspan baselineShift="sub" fontSize="75%">E</tspan> ≈ 0.98 · β = I<tspan baselineShift="sub" fontSize="75%">C</tspan> / I<tspan baselineShift="sub" fontSize="75%">B</tspan> = α / (1 - α) ≈ 50-300</text>
          <text x="394" y="290" fill="#991b1b" stroke="none" fontSize="7.5" fontWeight="bold">• Majority Carriers: Holes with lower mobility (μ<tspan baselineShift="sub" fontSize="75%">p</tspan> ≈ 450 cm²/V·s)</text>
          <text x="394" y="303" fill="#64748b" stroke="none" fontSize="7.2">• Terminal Directions: I<tspan baselineShift="sub" fontSize="75%">E</tspan> enters E · I<tspan baselineShift="sub" fontSize="75%">B</tspan> leaves B · I<tspan baselineShift="sub" fontSize="75%">C</tspan> leaves C</text>
        </svg>
      );

    // 3. BJT: CE, CB, and CC Configurations
    case 'bjt_configurations':
      return (
        <svg viewBox="0 0 740 320" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="740" height="320" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />

          {/* Header */}
          <text x="370" y="24" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="13.5" fontWeight="bold">
            BJT Three Configurations: Common Emitter (CE), Common Base (CB) &amp; Common Collector (CC)
          </text>
          <text x="370" y="39" textAnchor="middle" fill="#64748b" stroke="none" fontSize="9.5">
            Comparison of Input/Output Terminals, Gain Characteristics, Impedances and Phase Shift
          </text>

          {/* Panel 1: CE */}
          <rect x="12" y="48" width="225" height="255" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="124" y="66" textAnchor="middle" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">1. Common Emitter (CE)</text>
          <g transform="translate(25, 75)">
            <circle cx="85" cy="50" r="28" stroke="#64748b" fill="#f8fafc" />
            <line x1="72" y1="34" x2="72" y2="66" stroke="#0f172a" strokeWidth="3" />
            <line x1="40" y1="50" x2="72" y2="50" stroke="#1e293b" />
            <line x1="72" y1="40" x2="100" y2="28" stroke="#0284c7" />
            <line x1="100" y1="28" x2="135" y2="28" stroke="#0284c7" />
            <line x1="72" y1="60" x2="100" y2="72" stroke="#dc2626" />
            <polygon points="98,71 88,72 90,64" fill="#dc2626" />
            <line x1="100" y1="72" x2="100" y2="90" stroke="#dc2626" />
            {/* Ground symbol at Emitter */}
            <line x1="90" y1="90" x2="110" y2="90" stroke="#1e293b" />
            <line x1="94" y1="93" x2="106" y2="93" stroke="#1e293b" />
            <text x="30" y="54" textAnchor="end" fill="#2563eb" stroke="none" fontSize="8" fontWeight="bold">In (B)</text>
            <text x="140" y="32" fill="#0284c7" stroke="none" fontSize="8" fontWeight="bold">Out (C)</text>
            <text x="100" y="105" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7.5">GND (E)</text>
          </g>
          <rect x="20" y="195" width="209" height="98" rx="4" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="0.8" />
          <text x="26" y="210" fill="#1e40af" stroke="none" fontSize="7.8" fontWeight="bold">• Input: Base · Output: Collector</text>
          <text x="26" y="224" fill="#1e3a8a" stroke="none" fontSize="7.5">• R<tspan baselineShift="sub" fontSize="75%">in</tspan>: Moderate (~1-2 kΩ)</text>
          <text x="26" y="238" fill="#1e3a8a" stroke="none" fontSize="7.5">• R<tspan baselineShift="sub" fontSize="75%">out</tspan>: Moderate (~50 kΩ)</text>
          <text x="26" y="252" fill="#1e3a8a" stroke="none" fontSize="7.5">• Voltage Gain A<tspan baselineShift="sub" fontSize="75%">v</tspan>: High (~100-500)</text>
          <text x="26" y="266" fill="#1e3a8a" stroke="none" fontSize="7.5">• Current Gain A<tspan baselineShift="sub" fontSize="75%">i</tspan>: β (High, 50-300)</text>
          <text x="26" y="280" fill="#991b1b" stroke="none" fontSize="7.5" fontWeight="bold">• Phase Shift: 180° Inversion (Audio Amp)</text>

          {/* Panel 2: CB */}
          <rect x="257" y="48" width="225" height="255" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="369" y="66" textAnchor="middle" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">2. Common Base (CB)</text>
          <g transform="translate(270, 75)">
            <circle cx="85" cy="50" r="28" stroke="#64748b" fill="#f8fafc" />
            <text x="85" y="43" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7.5" fontWeight="bold">NPN</text>
            {/* Base Bar (Ground Reference) */}
            <line x1="70" y1="62" x2="102" y2="62" stroke="#0f172a" strokeWidth="3" />
            <line x1="86" y1="62" x2="86" y2="90" stroke="#1e293b" />
            <line x1="76" y1="90" x2="96" y2="90" stroke="#1e293b" />
            <line x1="80" y1="93" x2="92" y2="93" stroke="#1e293b" />
            {/* Emitter branch (Input) with arrow pointing OUTWARD from base towards emitter */}
            <line x1="76" y1="62" x2="60" y2="35" stroke="#dc2626" />
            <polygon points="62,38 70,43 63,47" fill="#dc2626" />
            <line x1="60" y1="35" x2="25" y2="35" stroke="#dc2626" />
            {/* Input signal arrow */}
            <polygon points="25,35 17,32 17,38" fill="#dc2626" />
            {/* Collector branch (Output) */}
            <line x1="96" y1="62" x2="112" y2="35" stroke="#0284c7" />
            <line x1="112" y1="35" x2="145" y2="35" stroke="#0284c7" />
            {/* Output signal arrow */}
            <polygon points="145,35 137,32 137,38" fill="#0284c7" />
            <text x="20" y="27" textAnchor="end" fill="#dc2626" stroke="none" fontSize="8" fontWeight="bold">In (E)</text>
            <text x="150" y="27" fill="#0284c7" stroke="none" fontSize="8" fontWeight="bold">Out (C)</text>
            <text x="86" y="105" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7.5">GND (B)</text>
          </g>
          <rect x="265" y="195" width="209" height="98" rx="4" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="0.8" />
          <text x="271" y="210" fill="#166534" stroke="none" fontSize="7.8" fontWeight="bold">• Input: Emitter · Output: Collector</text>
          <text x="271" y="224" fill="#14532d" stroke="none" fontSize="7.5">• R<tspan baselineShift="sub" fontSize="75%">in</tspan>: Very Low (~20-50 Ω)</text>
          <text x="271" y="238" fill="#14532d" stroke="none" fontSize="7.5">• R<tspan baselineShift="sub" fontSize="75%">out</tspan>: Very High (~1 MΩ)</text>
          <text x="271" y="252" fill="#14532d" stroke="none" fontSize="7.5">• Voltage Gain A<tspan baselineShift="sub" fontSize="75%">v</tspan>: High (~100-500)</text>
          <text x="271" y="266" fill="#14532d" stroke="none" fontSize="7.5">• Current Gain A<tspan baselineShift="sub" fontSize="75%">i</tspan>: α &lt; 1 (~0.98)</text>
          <text x="271" y="280" fill="#166534" stroke="none" fontSize="7.5" fontWeight="bold">• Phase Shift: 0° In-Phase (VHF/RF)</text>

          {/* Panel 3: CC */}
          <rect x="502" y="48" width="225" height="255" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="614" y="66" textAnchor="middle" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">3. Common Collector (CC)</text>
          <g transform="translate(515, 75)">
            <circle cx="85" cy="50" r="28" stroke="#64748b" fill="#f8fafc" />
            <line x1="72" y1="34" x2="72" y2="66" stroke="#0f172a" strokeWidth="3" />
            <line x1="40" y1="50" x2="72" y2="50" stroke="#1e293b" />
            {/* Collector tied to AC GND */}
            <line x1="72" y1="40" x2="100" y2="28" stroke="#0284c7" />
            <line x1="100" y1="28" x2="100" y2="12" stroke="#0284c7" />
            <line x1="94" y1="12" x2="106" y2="12" stroke="#1e293b" />
            {/* Emitter output */}
            <line x1="72" y1="60" x2="100" y2="72" stroke="#dc2626" />
            <polygon points="98,71 88,72 90,64" fill="#dc2626" />
            <line x1="100" y1="72" x2="135" y2="72" stroke="#dc2626" />
            <text x="30" y="54" textAnchor="end" fill="#2563eb" stroke="none" fontSize="8" fontWeight="bold">In (B)</text>
            <text x="140" y="76" fill="#dc2626" stroke="none" fontSize="8" fontWeight="bold">Out (E)</text>
            <text x="100" y="5" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7.5">AC GND (C)</text>
          </g>
          <rect x="510" y="195" width="209" height="98" rx="4" fill="#faf5ff" stroke="#e9d5ff" strokeWidth="0.8" />
          <text x="516" y="210" fill="#6b21a8" stroke="none" fontSize="7.8" fontWeight="bold">• Input: Base · Output: Emitter</text>
          <text x="516" y="224" fill="#581c87" stroke="none" fontSize="7.5">• R<tspan baselineShift="sub" fontSize="75%">in</tspan>: Very High (~100-500 kΩ)</text>
          <text x="516" y="238" fill="#581c87" stroke="none" fontSize="7.5">• R<tspan baselineShift="sub" fontSize="75%">out</tspan>: Very Low (~10-50 Ω)</text>
          <text x="516" y="252" fill="#581c87" stroke="none" fontSize="7.5">• Voltage Gain A<tspan baselineShift="sub" fontSize="75%">v</tspan>: ~1 (&lt; 1, Unity Follower)</text>
          <text x="516" y="266" fill="#581c87" stroke="none" fontSize="7.5">• Current Gain A<tspan baselineShift="sub" fontSize="75%">i</tspan>: 1 + β (Very High)</text>
          <text x="516" y="280" fill="#6b21a8" stroke="none" fontSize="7.5" fontWeight="bold">• Phase: 0° In-Phase (Buffer / Driver)</text>
        </svg>
      );

    // 3. BJT: Transistor as an Electronic Switch
    case 'bjt_switch_circuit':
      return (
        <svg viewBox="0 0 740 300" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="740" height="300" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />

          {/* Header */}
          <text x="370" y="24" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="13.5" fontWeight="bold">
            Transistor as an Electronic Switch: Circuit &amp; Cutoff / Saturation States
          </text>
          <text x="370" y="39" textAnchor="middle" fill="#64748b" stroke="none" fontSize="9.5">
            Digital Binary Operation: Open Switch (Cutoff, OFF) vs Closed Switch (Saturation, ON) with Load Control
          </text>

          {/* LEFT: Switch Circuit */}
          <rect x="15" y="48" width="375" height="240" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="25" y="68" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">Switch Circuit Schematic (NPN Inverter / Driver):</text>
          
          <g>
            {/* Vin pulse generator */}
            <rect x="25" y="152" width="32" height="38" rx="3" fill="#eff6ff" stroke="#93c5fd" />
            <path d="M29 178 L35 178 L35 160 L45 160 L45 178 L53 178" stroke="#2563eb" strokeWidth="1.8" fill="none" />
            <text x="41" y="146" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="8" fontWeight="bold">V<tspan baselineShift="sub" fontSize="75%">in</tspan> (0V / 5V)</text>

            {/* Base Resistor RB */}
            <line x1="57" y1="172" x2="82" y2="172" stroke="#1e293b" />
            <path d="M82 172 L88 166 L94 178 L100 166 L106 178 L112 166 L118 178 L122 172" stroke="#1e293b" strokeWidth="2" fill="none" />
            <line x1="122" y1="172" x2="152" y2="172" stroke="#1e293b" />
            <text x="102" y="160" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="8.5" fontWeight="bold">R<tspan baselineShift="sub" fontSize="75%">B</tspan></text>

            {/* BJT Transistor Symbol */}
            <circle cx="176" cy="172" r="23" stroke="#64748b" fill="#f8fafc" />
            <text x="176" y="164" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7" fontWeight="bold">NPN</text>
            {/* Base Bar */}
            <line x1="165" y1="158" x2="165" y2="186" stroke="#0f172a" strokeWidth="3" />
            <line x1="152" y1="172" x2="165" y2="172" stroke="#1e293b" />
            {/* Collector Branch */}
            <line x1="165" y1="163" x2="192" y2="150" stroke="#0284c7" strokeWidth="2" />
            {/* Emitter Branch with Arrow pointing outward */}
            <line x1="165" y1="181" x2="192" y2="194" stroke="#dc2626" strokeWidth="2" />
            <polygon points="191,193 182,194 184,187" fill="#dc2626" />
            <line x1="192" y1="194" x2="192" y2="218" stroke="#dc2626" strokeWidth="2" />

            {/* Ground symbol */}
            <line x1="180" y1="218" x2="204" y2="218" stroke="#1e293b" strokeWidth="2" />
            <line x1="184" y1="222" x2="200" y2="222" stroke="#1e293b" strokeWidth="1.6" />
            <line x1="188" y1="226" x2="196" y2="226" stroke="#1e293b" strokeWidth="1.2" />
            <text x="192" y="236" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7.5">GND (0V)</text>

            {/* Collector Load Resistor RC */}
            <line x1="192" y1="88" x2="192" y2="98" stroke="#1e293b" />
            <path d="M192 98 L186 104 L198 110 L186 116 L198 122 L186 128 L192 134" stroke="#1e293b" strokeWidth="2" fill="none" />
            <line x1="192" y1="134" x2="192" y2="150" stroke="#1e293b" />
            <text x="206" y="118" fill="#1e293b" stroke="none" fontSize="9" fontWeight="bold">R<tspan baselineShift="sub" fontSize="75%">C</tspan> / Load</text>
            
            {/* +VCC Rail terminal */}
            <circle cx="192" cy="88" r="4" fill="#dc2626" />
            <text x="202" y="92" fill="#dc2626" stroke="none" fontSize="10" fontWeight="bold">+V<tspan baselineShift="sub" fontSize="75%">CC</tspan> (+5V)</text>

            {/* Collector Output Node & Vout */}
            <circle cx="192" cy="150" r="3.5" fill="#1e293b" />
            <line x1="192" y1="150" x2="275" y2="150" stroke="#2563eb" strokeWidth="2" />
            <circle cx="275" cy="150" r="3.5" fill="#2563eb" />
            <text x="283" y="148" fill="#2563eb" stroke="none" fontSize="9.5" fontWeight="bold">V<tspan baselineShift="sub" fontSize="75%">out</tspan> (V<tspan baselineShift="sub" fontSize="75%">CE</tspan>)</text>
            <text x="283" y="160" fill="#64748b" stroke="none" fontSize="7.5">OFF: V<tspan baselineShift="sub" fontSize="75%">CC</tspan> · ON: 0.2V</text>

            {/* Bottom calculation strip */}
            <rect x="25" y="244" width="355" height="34" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.8" />
            <text x="33" y="257" fill="#0f172a" stroke="none" fontSize="7.5" fontWeight="bold">• Base Drive: I<tspan baselineShift="sub" fontSize="75%">B</tspan> = (V<tspan baselineShift="sub" fontSize="75%">in</tspan> - 0.7V) / R<tspan baselineShift="sub" fontSize="75%">B</tspan></text>
            <text x="33" y="269" fill="#0f172a" stroke="none" fontSize="7.5">• Saturation Condition: I<tspan baselineShift="sub" fontSize="75%">B</tspan> ≥ I<tspan baselineShift="sub" fontSize="75%">C(sat)</tspan> / β<tspan baselineShift="sub" fontSize="75%">forced</tspan> where I<tspan baselineShift="sub" fontSize="75%">C(sat)</tspan> ≈ V<tspan baselineShift="sub" fontSize="75%">CC</tspan> / R<tspan baselineShift="sub" fontSize="75%">C</tspan></text>
          </g>

          {/* RIGHT: Operational States */}
          <rect x="405" y="48" width="320" height="240" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="415" y="66" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">Two Operating States:</text>

          {/* OFF State Box */}
          <rect x="415" y="76" width="300" height="92" rx="5" fill="#fef2f2" stroke="#fecaca" strokeWidth="1" />
          <text x="425" y="93" fill="#991b1b" stroke="none" fontSize="9" fontWeight="bold">1. OFF State (Cutoff Region) - Switch OPEN:</text>
          <text x="425" y="108" fill="#7f1d1d" stroke="none" fontSize="8">• V<tspan baselineShift="sub" fontSize="75%">in</tspan> = 0V (or &lt; 0.5V) → Base-Emitter reverse biased</text>
          <text x="425" y="122" fill="#7f1d1d" stroke="none" fontSize="8">• I<tspan baselineShift="sub" fontSize="75%">B</tspan> = 0 → Collector current I<tspan baselineShift="sub" fontSize="75%">C</tspan> = I<tspan baselineShift="sub" fontSize="75%">CEO</tspan> ≈ 0</text>
          <text x="425" y="136" fill="#7f1d1d" stroke="none" fontSize="8">• Zero voltage drop across R<tspan baselineShift="sub" fontSize="75%">C</tspan> → V<tspan baselineShift="sub" fontSize="75%">out</tspan> = V<tspan baselineShift="sub" fontSize="75%">CE</tspan> = V<tspan baselineShift="sub" fontSize="75%">CC</tspan></text>
          <text x="425" y="150" fill="#991b1b" stroke="none" fontSize="8" fontWeight="bold">• Load (LED / Motor) is OFF · Zero Power Dissipated</text>

          {/* ON State Box */}
          <rect x="415" y="178" width="300" height="98" rx="5" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
          <text x="425" y="195" fill="#166534" stroke="none" fontSize="9" fontWeight="bold">2. ON State (Saturation Region) - Switch CLOSED:</text>
          <text x="425" y="210" fill="#14532d" stroke="none" fontSize="8">• V<tspan baselineShift="sub" fontSize="75%">in</tspan> = HIGH (5V) → I<tspan baselineShift="sub" fontSize="75%">B</tspan> ≥ I<tspan baselineShift="sub" fontSize="75%">C(sat)</tspan> / β<tspan baselineShift="sub" fontSize="75%">forced</tspan></text>
          <text x="425" y="224" fill="#14532d" stroke="none" fontSize="8">• Both EB and CB forward-biased → Transistor fully saturates</text>
          <text x="425" y="238" fill="#14532d" stroke="none" fontSize="8">• V<tspan baselineShift="sub" fontSize="75%">out</tspan> = V<tspan baselineShift="sub" fontSize="75%">CE(sat)</tspan> ≈ 0.2V (Nearly a short to GND!)</text>
          <text x="425" y="252" fill="#14532d" stroke="none" fontSize="8">• Full current I<tspan baselineShift="sub" fontSize="75%">C</tspan> = (V<tspan baselineShift="sub" fontSize="75%">CC</tspan> - 0.2V) / R<tspan baselineShift="sub" fontSize="75%">C</tspan> flows through Load</text>
          <text x="425" y="266" fill="#166534" stroke="none" fontSize="8" fontWeight="bold">• Load is fully turned ON</text>
        </svg>
      );

    // 3. BJT: Common Emitter (CE) Voltage Divider Bias Amplifier
    case 'bjt_ce_amplifier':
      return (
        <svg viewBox="0 0 580 285" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="580" height="285" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          
          {/* Header Title */}
          <text x="290" y="20" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="12" fontWeight="bold">
            Single-Stage Common Emitter (CE) Voltage Divider Biased Amplifier
          </text>

          {/* VCC Rail (+Vcc) */}
          <line x1="40" y1="36" x2="520" y2="36" stroke="#dc2626" strokeWidth="2" />
          <circle cx="520" cy="36" r="4" fill="#dc2626" />
          <text x="530" y="40" fill="#dc2626" stroke="none" fontSize="11.5" fontWeight="bold">+V<tspan baselineShift="sub" fontSize="75%">CC</tspan></text>
          
          {/* GND Rail (0V) */}
          <line x1="40" y1="236" x2="520" y2="236" stroke="#1e293b" strokeWidth="2" />
          <line x1="280" y1="236" x2="280" y2="248" stroke="#1e293b" />
          <line x1="270" y1="248" x2="290" y2="248" stroke="#1e293b" strokeWidth="2" />
          <line x1="274" y1="252" x2="286" y2="252" stroke="#1e293b" strokeWidth="1.5" />
          <line x1="277" y1="256" x2="283" y2="256" stroke="#1e293b" strokeWidth="1" />
          <text x="298" y="252" fill="#64748b" stroke="none" fontSize="9.5" fontWeight="bold">GND (0V)</text>
          
          {/* Resistor R1 (Upper Divider) */}
          <circle cx="150" cy="36" r="3" fill="#dc2626" />
          <line x1="150" y1="36" x2="150" y2="60" stroke="#1e293b" />
          <path d="M150 60 L142 66 L158 74 L142 82 L158 90 L150 96" stroke="#1e293b" strokeWidth="2" fill="none" />
          <line x1="150" y1="96" x2="150" y2="125" stroke="#1e293b" />
          <text x="126" y="80" fill="#1e293b" stroke="none" fontSize="10.5" fontWeight="bold">R<tspan baselineShift="sub" fontSize="75%">1</tspan></text>
          
          {/* Base Node B */}
          <circle cx="150" cy="125" r="3.5" fill="#1e293b" />
          <text x="142" y="120" textAnchor="end" fill="#2563eb" stroke="none" fontSize="9" fontWeight="bold">V<tspan baselineShift="sub" fontSize="75%">B</tspan></text>

          {/* Resistor R2 (Lower Divider) */}
          <line x1="150" y1="125" x2="150" y2="148" stroke="#1e293b" />
          <path d="M150 148 L142 154 L158 162 L142 170 L158 178 L150 184" stroke="#1e293b" strokeWidth="2" fill="none" />
          <line x1="150" y1="184" x2="150" y2="236" stroke="#1e293b" />
          <circle cx="150" cy="236" r="3" fill="#1e293b" />
          <text x="126" y="168" fill="#1e293b" stroke="none" fontSize="10.5" fontWeight="bold">R<tspan baselineShift="sub" fontSize="75%">2</tspan></text>
          
          {/* Input Source Vin & Coupling Capacitor Cin */}
          <circle cx="45" cy="125" r="13" stroke="#2563eb" fill="#ffffff" />
          <path d="M38 125 Q42 119 45 125 T52 125" stroke="#2563eb" strokeWidth="1.5" fill="none" />
          <text x="45" y="150" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="9" fontWeight="bold">V<tspan baselineShift="sub" fontSize="75%">in</tspan></text>
          <line x1="58" y1="125" x2="88" y2="125" stroke="#1e293b" />
          {/* Cin Capacitor */}
          <line x1="88" y1="114" x2="88" y2="136" stroke="#0284c7" strokeWidth="2.5" />
          <line x1="95" y1="114" x2="95" y2="136" stroke="#0284c7" strokeWidth="2.5" />
          <line x1="95" y1="125" x2="150" y2="125" stroke="#1e293b" />
          <text x="91" y="106" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="9.5" fontWeight="bold">C<tspan baselineShift="sub" fontSize="75%">in</tspan></text>
          
          {/* Base Wire to NPN BJT */}
          <line x1="150" y1="125" x2="222" y2="125" stroke="#1e293b" />
          <circle cx="238" cy="125" r="23" stroke="#94a3b8" strokeDasharray="3 3" />
          <text x="238" y="118" textAnchor="middle" fill="#94a3b8" stroke="none" fontSize="7" fontWeight="bold">BC547</text>
          {/* Base bar */}
          <line x1="222" y1="111" x2="222" y2="139" stroke="#0f172a" strokeWidth="3.2" />
          {/* Collector branch */}
          <line x1="222" y1="117" x2="246" y2="102" stroke="#0284c7" strokeWidth="1.8" />
          <line x1="246" y1="102" x2="246" y2="90" stroke="#0284c7" strokeWidth="1.8" />
          {/* Emitter branch with outward arrow */}
          <line x1="222" y1="133" x2="246" y2="148" stroke="#dc2626" strokeWidth="1.8" />
          <polygon points="245,147 236,147 239,140" fill="#dc2626" />
          <line x1="246" y1="148" x2="246" y2="160" stroke="#dc2626" strokeWidth="1.8" />
          
          {/* Collector Resistor RC (NO SHORT CIRCUIT WIRE!) */}
          <circle cx="246" cy="36" r="3" fill="#dc2626" />
          <line x1="246" y1="36" x2="246" y2="52" stroke="#1e293b" />
          <path d="M246 52 L238 58 L254 66 L238 74 L254 82 L246 88" stroke="#1e293b" strokeWidth="2" fill="none" />
          <line x1="246" y1="88" x2="246" y2="90" stroke="#1e293b" />
          <text x="262" y="72" fill="#1e293b" stroke="none" fontSize="10.5" fontWeight="bold">R<tspan baselineShift="sub" fontSize="75%">C</tspan></text>
          
          {/* Collector Node C */}
          <circle cx="246" cy="90" r="3.5" fill="#1e293b" />

          {/* Output Coupling Capacitor Cout */}
          <line x1="246" y1="90" x2="330" y2="90" stroke="#1e293b" />
          <line x1="330" y1="79" x2="330" y2="101" stroke="#0284c7" strokeWidth="2.5" />
          <line x1="337" y1="79" x2="337" y2="101" stroke="#0284c7" strokeWidth="2.5" />
          <text x="333" y="73" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="9.5" fontWeight="bold">C<tspan baselineShift="sub" fontSize="75%">out</tspan></text>

          {/* Output Node after Cout */}
          <line x1="337" y1="90" x2="415" y2="90" stroke="#1e293b" />
          <circle cx="415" cy="90" r="3.5" fill="#1e293b" />

          {/* Load Resistor RL */}
          <line x1="415" y1="90" x2="415" y2="135" stroke="#1e293b" />
          <path d="M415 135 L407 141 L423 149 L407 157 L423 165 L415 171" stroke="#1e293b" strokeWidth="2" fill="none" />
          <line x1="415" y1="171" x2="415" y2="236" stroke="#1e293b" />
          <circle cx="415" cy="236" r="3" fill="#1e293b" />
          <text x="432" y="155" fill="#1e293b" stroke="none" fontSize="10.5" fontWeight="bold">R<tspan baselineShift="sub" fontSize="75%">L</tspan></text>

          {/* Vout Output Terminal */}
          <line x1="415" y1="90" x2="480" y2="90" stroke="#2563eb" strokeWidth="2" />
          <circle cx="480" cy="90" r="4" fill="#2563eb" />
          <text x="490" y="86" fill="#2563eb" stroke="none" fontSize="11" fontWeight="bold">V<tspan baselineShift="sub" fontSize="75%">out</tspan></text>
          <text x="490" y="98" fill="#dc2626" stroke="none" fontSize="8" fontWeight="bold">(180° Inverted)</text>
          {/* Large Inverted Output Waveform */}
          <path d="M490 114 Q498 126 506 114 T522 114" stroke="#dc2626" strokeWidth="1.8" fill="none" />

          {/* Emitter Node E */}
          <circle cx="246" cy="160" r="3.5" fill="#1e293b" />
          <text x="238" y="165" textAnchor="end" fill="#dc2626" stroke="none" fontSize="9" fontWeight="bold">V<tspan baselineShift="sub" fontSize="75%">E</tspan></text>

          {/* Emitter Resistor RE */}
          <line x1="246" y1="160" x2="246" y2="178" stroke="#1e293b" />
          <path d="M246 178 L238 184 L254 192 L238 200 L254 208 L246 214" stroke="#1e293b" strokeWidth="2" fill="none" />
          <line x1="246" y1="214" x2="246" y2="236" stroke="#1e293b" />
          <circle cx="246" cy="236" r="3" fill="#1e293b" />
          <text x="220" y="198" fill="#1e293b" stroke="none" fontSize="10.5" fontWeight="bold">R<tspan baselineShift="sub" fontSize="75%">E</tspan></text>
          
          {/* Parallel Bypass Capacitor CE */}
          <line x1="246" y1="160" x2="295" y2="160" stroke="#1e293b" />
          <line x1="295" y1="160" x2="295" y2="188" stroke="#1e293b" />
          <line x1="287" y1="188" x2="303" y2="188" stroke="#0284c7" strokeWidth="2.5" />
          <line x1="287" y1="195" x2="303" y2="195" stroke="#0284c7" strokeWidth="2.5" />
          <line x1="295" y1="195" x2="295" y2="236" stroke="#1e293b" />
          <circle cx="295" cy="236" r="3" fill="#1e293b" />
          <text x="312" y="195" fill="#0284c7" stroke="none" fontSize="9.5" fontWeight="bold">C<tspan baselineShift="sub" fontSize="75%">E</tspan></text>
          <text x="312" y="206" fill="#64748b" stroke="none" fontSize="7.5">(Bypass)</text>

          {/* Key Formula Footer */}
          <text x="290" y="275" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="10" fontWeight="600">
            Gain: A<tspan baselineShift="sub" fontSize="75%">v</tspan> ≈ - (R<tspan baselineShift="sub" fontSize="75%">C</tspan> || R<tspan baselineShift="sub" fontSize="75%">L</tspan>) / r<tspan baselineShift="sub" fontSize="75%">e</tspan>' · R<tspan baselineShift="sub" fontSize="75%">in</tspan> ≈ R<tspan baselineShift="sub" fontSize="75%">1</tspan> || R<tspan baselineShift="sub" fontSize="75%">2</tspan> || (β·r<tspan baselineShift="sub" fontSize="75%">e</tspan>') · DC Stability: S ≈ 1 + (R<tspan baselineShift="sub" fontSize="75%">B</tspan> / R<tspan baselineShift="sub" fontSize="75%">E</tspan>)
          </text>
        </svg>
      );

    // 4. FET: Common Source JFET Amplifier
    case 'jfet_cs_amplifier':
      return (
        <svg viewBox="0 0 540 260" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="540" height="260" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          
          {/* VDD line */}
          <line x1="80" y1="30" x2="460" y2="30" stroke="#dc2626" strokeWidth="2" />
          <text x="470" y="34" fill="#dc2626" stroke="none" fontSize="12" fontWeight="bold">+VDD</text>
          
          {/* Ground line */}
          <line x1="80" y1="225" x2="460" y2="225" stroke="#1e293b" strokeWidth="2" />
          <text x="470" y="229" fill="#64748b" stroke="none" fontSize="11">GND</text>
          
          {/* Gate Resistor RG */}
          <line x1="160" y1="120" x2="160" y2="150" stroke="#1e293b" />
          <path d="M160 150 L152 156 L168 164 L152 172 L168 180 L160 186" stroke="#1e293b" strokeWidth="2" />
          <line x1="160" y1="186" x2="160" y2="225" stroke="#1e293b" />
          <text x="135" y="172" fill="#1e293b" stroke="none" fontSize="11" fontWeight="bold">RG (1MΩ)</text>
          
          {/* Input Capacitor Cin */}
          <circle cx="60" cy="120" r="14" stroke="#2563eb" fill="#ffffff" />
          <path d="M53 120 Q57 113 60 120 T67 120" stroke="#2563eb" strokeWidth="1.5" />
          <text x="60" y="148" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="10" fontWeight="bold">Vin</text>
          <line x1="74" y1="120" x2="105" y2="120" stroke="#1e293b" />
          <line x1="105" y1="110" x2="105" y2="130" stroke="#0284c7" strokeWidth="2.5" />
          <line x1="112" y1="110" x2="112" y2="130" stroke="#0284c7" strokeWidth="2.5" />
          <line x1="112" y1="120" x2="160" y2="120" stroke="#1e293b" />
          <text x="108" y="102" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="10" fontWeight="bold">C1</text>
          
          {/* N-Channel JFET */}
          <line x1="160" y1="120" x2="230" y2="120" stroke="#1e293b" />
          <polygon points="218,116 230,120 218,124" fill="#7c3aed" stroke="#7c3aed" />
          <line x1="230" y1="100" x2="230" y2="140" stroke="#1e293b" strokeWidth="3.5" />
          
          {/* Drain connection */}
          <line x1="230" y1="108" x2="260" y2="108" stroke="#0284c7" />
          <line x1="260" y1="108" x2="260" y2="80" stroke="#0284c7" />
          {/* Drain Resistor RD */}
          <line x1="260" y1="80" x2="260" y2="30" stroke="#1e293b" />
          <path d="M260 45 L252 51 L268 59 L252 67 L268 75 L260 81" stroke="#1e293b" strokeWidth="2" />
          <text x="278" y="65" fill="#1e293b" stroke="none" fontSize="11" fontWeight="bold">RD</text>
          
          {/* Output coupling C2 & Vout */}
          <line x1="260" y1="80" x2="350" y2="80" stroke="#1e293b" />
          <line x1="350" y1="70" x2="350" y2="90" stroke="#0284c7" strokeWidth="2.5" />
          <line x1="357" y1="70" x2="357" y2="90" stroke="#0284c7" strokeWidth="2.5" />
          <line x1="357" y1="80" x2="420" y2="80" stroke="#1e293b" />
          <circle cx="420" cy="80" r="4" fill="#2563eb" />
          <text x="430" y="84" fill="#2563eb" stroke="none" fontSize="12" fontWeight="bold">Vout</text>
          
          {/* Source connection: Self-bias RS and CS */}
          <line x1="230" y1="132" x2="260" y2="132" stroke="#0284c7" />
          <line x1="260" y1="132" x2="260" y2="160" stroke="#0284c7" />
          <path d="M260 160 L252 166 L268 174 L252 182 L268 190 L260 196" stroke="#1e293b" strokeWidth="2" />
          <line x1="260" y1="196" x2="260" y2="225" stroke="#1e293b" />
          <text x="232" y="180" fill="#1e293b" stroke="none" fontSize="11" fontWeight="bold">RS</text>
          
          {/* Source bypass capacitor CS */}
          <line x1="260" y1="150" x2="310" y2="150" stroke="#1e293b" />
          <line x1="310" y1="150" x2="310" y2="168" stroke="#1e293b" />
          <line x1="300" y1="168" x2="320" y2="168" stroke="#0284c7" strokeWidth="2.5" />
          <line x1="300" y1="176" x2="320" y2="176" stroke="#0284c7" strokeWidth="2.5" />
          <line x1="310" y1="176" x2="310" y2="225" stroke="#1e293b" />
          <text x="330" y="174" fill="#0284c7" stroke="none" fontSize="10" fontWeight="bold">CS</text>
          
          <text x="270" y="250" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="11" fontWeight="500">
            Av = - gm · (RD || rd) · Shockley: ID = IDSS · (1 - VGS/VP)² · High Rin (≥ 100 MΩ)
          </text>
        </svg>
      );

    // 5. Op-Amp: Inverting Amplifier & Summing Amplifier
    case 'opamp_inverting':
      return (
        <svg viewBox="0 0 540 250" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="540" height="250" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          
          {/* Input Source Vin */}
          <circle cx="50" cy="100" r="16" stroke="#2563eb" fill="#ffffff" />
          <text x="50" y="97" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="12" fontWeight="bold">+</text>
          <text x="50" y="110" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="12" fontWeight="bold">-</text>
          <text x="50" y="132" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="10" fontWeight="bold">Vin</text>
          
          {/* Input Resistor R1 */}
          <line x1="66" y1="100" x2="110" y2="100" stroke="#1e293b" />
          <path d="M110 100 L118 92 L126 108 L134 92 L142 108 L150 92 L158 100" stroke="#1e293b" strokeWidth="2" />
          <text x="134" y="82" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="11" fontWeight="bold">R1 (Rin)</text>
          <line x1="158" y1="100" x2="220" y2="100" stroke="#1e293b" />
          
          {/* Virtual Ground Node */}
          <circle cx="220" cy="100" r="4" fill="#dc2626" />
          <text x="215" y="85" fill="#dc2626" stroke="none" fontSize="10" fontWeight="bold">Virtual GND (V- ≈ 0V)</text>
          
          {/* Feedback Resistor Rf */}
          <line x1="220" y1="100" x2="220" y2="40" stroke="#1e293b" />
          <line x1="220" y1="40" x2="260" y2="40" stroke="#1e293b" />
          <path d="M260 40 L268 32 L276 48 L284 32 L292 48 L300 32 L308 40" stroke="#1e293b" strokeWidth="2" />
          <line x1="308" y1="40" x2="380" y2="40" stroke="#1e293b" />
          <line x1="380" y1="40" x2="380" y2="115" stroke="#1e293b" />
          <text x="284" y="24" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="11" fontWeight="bold">Rf (Feedback)</text>
          
          {/* Op-Amp Triangle */}
          <polygon points="240,80 240,150 320,115" fill="#ffffff" stroke="#2563eb" strokeWidth="2.5" />
          
          {/* Inverting input (-) */}
          <line x1="220" y1="100" x2="240" y2="100" stroke="#1e293b" />
          <text x="248" y="103" fill="#dc2626" stroke="none" fontSize="12" fontWeight="bold">-</text>
          
          {/* Non-inverting input (+) to Ground */}
          <line x1="220" y1="130" x2="240" y2="130" stroke="#1e293b" />
          <text x="248" y="133" fill="#059669" stroke="none" fontSize="12" fontWeight="bold">+</text>
          <line x1="220" y1="130" x2="220" y2="170" stroke="#1e293b" />
          <line x1="210" y1="170" x2="230" y2="170" stroke="#1e293b" strokeWidth="2" />
          <line x1="214" y1="174" x2="226" y2="174" stroke="#1e293b" strokeWidth="1.5" />
          <line x1="217" y1="178" x2="223" y2="178" stroke="#1e293b" strokeWidth="1" />
          <text x="180" y="174" fill="#64748b" stroke="none" fontSize="10">0V (GND)</text>
          
          {/* Op-Amp Output */}
          <line x1="320" y1="115" x2="430" y2="115" stroke="#1e293b" strokeWidth="2" />
          <circle cx="430" cy="115" r="5" fill="#2563eb" />
          <text x="440" y="120" fill="#2563eb" stroke="none" fontSize="14" fontWeight="bold">Vout</text>
          
          {/* Ground reference for output */}
          <line x1="430" y1="180" x2="430" y2="190" stroke="#1e293b" />
          <line x1="420" y1="190" x2="440" y2="190" stroke="#1e293b" strokeWidth="2" />
          <line x1="424" y1="194" x2="436" y2="194" stroke="#1e293b" strokeWidth="1.5" />
          
          <text x="270" y="225" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="12" fontWeight="600">
            Vout = - (Rf / R1) · Vin · Inverting Gain Av = - Rf / R1
          </text>
        </svg>
      );

    // 6. Digital Logic Circuits
    case 'number_systems_conversion':
      return <NumberSystemsSvg className={className} />;
    case 'logic_gates_truth_tables':
      return <LogicGatesOverviewSvg className={className} />;
    case 'digital_half_adder':
      return <HalfAdderSvg className={className} />;
    case 'digital_half_subtractor':
      return <HalfSubtractorSvg className={className} />;
    case 'digital_multiplexer':
      return <MultiplexerSvg className={className} />;
    case 'digital_demultiplexer':
      return <DemultiplexerSvg className={className} />;
    case 'digital_sr_flipflop':
      return <SRFlipFlopSvg className={className} />;
    case 'digital_jk_flipflop':
      return <JKFlipFlopSvg className={className} />;
    case 'digital_d_flipflop':
      return <DFlipFlopSvg className={className} />;
    case 'digital_t_flipflop':
      return <TFlipFlopSvg className={className} />;

    // 6. Digital Logic: Full Adder Circuit Schematic (2 Half Adders + 1 OR Gate)
    case 'digital_full_adder':
      return <FullAdderSvg className={className} />;

    // 7. Electronic Communication: Superheterodyne AM Receiver Block Diagram
    case 'superhet_receiver':
      return (
        <svg viewBox="0 0 540 260" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="540" height="260" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          
          {/* Receiving Antenna */}
          <line x1="35" y1="85" x2="35" y2="55" stroke="#0284c7" strokeWidth="2" />
          <line x1="25" y1="55" x2="45" y2="55" stroke="#0284c7" strokeWidth="2" />
          <line x1="35" y1="55" x2="27" y2="45" stroke="#0284c7" strokeWidth="1.5" />
          <line x1="35" y1="55" x2="43" y2="45" stroke="#0284c7" strokeWidth="1.5" />
          <line x1="35" y1="85" x2="60" y2="85" stroke="#1e293b" />
          
          {/* 1. RF Tuner / Amp */}
          <rect x="60" y="65" width="70" height="40" rx="4" fill="#ffffff" stroke="#2563eb" strokeWidth="1.5" />
          <text x="95" y="82" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="10" fontWeight="bold">RF Amp</text>
          <text x="95" y="96" textAnchor="middle" fill="#64748b" stroke="none" fontSize="8">(fs: RF)</text>
          
          {/* Arrow */}
          <line x1="130" y1="85" x2="160" y2="85" stroke="#1e293b" />
          <polygon points="155,82 162,85 155,88" fill="#1e293b" />
          
          {/* 2. Mixer */}
          <rect x="162" y="65" width="60" height="40" rx="4" fill="#f0f9ff" stroke="#0284c7" strokeWidth="1.5" />
          <text x="192" y="82" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="10" fontWeight="bold">Mixer</text>
          <text x="192" y="96" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="8">(fLO - fs)</text>
          
          {/* Local Oscillator */}
          <line x1="192" y1="160" x2="192" y2="105" stroke="#1e293b" />
          <polygon points="189,112 192,105 195,112" fill="#1e293b" />
          <rect x="157" y="160" width="70" height="36" rx="4" fill="#ffffff" stroke="#7c3aed" strokeWidth="1.5" />
          <text x="192" y="176" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="9" fontWeight="bold">Local Osc.</text>
          <text x="192" y="189" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="8">(fLO = fs+IF)</text>
          
          {/* Arrow */}
          <line x1="222" y1="85" x2="252" y2="85" stroke="#1e293b" />
          <polygon points="247,82 254,85 247,88" fill="#1e293b" />
          
          {/* 3. IF Amplifier */}
          <rect x="254" y="65" width="70" height="40" rx="4" fill="#ffffff" stroke="#2563eb" strokeWidth="1.5" />
          <text x="289" y="82" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="10" fontWeight="bold">IF Amp</text>
          <text x="289" y="96" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="8">455 kHz</text>
          
          {/* Arrow */}
          <line x1="324" y1="85" x2="354" y2="85" stroke="#1e293b" />
          <polygon points="349,82 356,85 349,88" fill="#1e293b" />
          
          {/* 4. Detector / Demodulator */}
          <rect x="356" y="65" width="65" height="40" rx="4" fill="#ffffff" stroke="#059669" strokeWidth="1.5" />
          <text x="388" y="82" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="10" fontWeight="bold">Detector</text>
          <text x="388" y="96" textAnchor="middle" fill="#059669" stroke="none" fontSize="8">(Envelope)</text>
          
          {/* AGC line back to IF Amp */}
          <line x1="388" y1="105" x2="388" y2="135" stroke="#94a3b8" strokeDasharray="3 3" />
          <line x1="388" y1="135" x2="289" y2="135" stroke="#94a3b8" strokeDasharray="3 3" />
          <line x1="289" y1="135" x2="289" y2="105" stroke="#94a3b8" strokeDasharray="3 3" />
          <text x="339" y="146" textAnchor="middle" fill="#64748b" stroke="none" fontSize="8" fontWeight="bold">AGC Loop</text>
          
          {/* Arrow */}
          <line x1="421" y1="85" x2="445" y2="85" stroke="#1e293b" />
          <polygon points="440,82 447,85 440,88" fill="#1e293b" />
          
          {/* 5. AF / Power Amp */}
          <rect x="447" y="65" width="55" height="40" rx="4" fill="#ffffff" stroke="#2563eb" strokeWidth="1.5" />
          <text x="474" y="82" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="9" fontWeight="bold">AF Amp</text>
          <text x="474" y="96" textAnchor="middle" fill="#64748b" stroke="none" fontSize="8">(Audio)</text>
          
          {/* Loudspeaker */}
          <line x1="502" y1="85" x2="515" y2="85" stroke="#1e293b" />
          <path d="M515 78 L522 78 L530 70 L530 100 L522 92 L515 92 Z" fill="#1e293b" stroke="#1e293b" />
          <text x="522" y="112" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="8">Speaker</text>
          
          <text x="270" y="235" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="11" fontWeight="500">
            AM Intermediate Frequency (IF) = 455 kHz · Image Frequency fsi = fs + 2 · IF · High Selectivity
          </text>
        </svg>
      );

    // 1. Basic Components: Resistor Color Coding Chart & 4-Band / 5-Band Decoding
    case 'resistor_color_code':
    case 'resistor_color_coding':
      return (
        <svg viewBox="0 0 740 340" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="740" height="340" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />

          {/* Header */}
          <text x="370" y="24" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="13.5" fontWeight="bold">
            Resistor Color Coding System: 4-Band &amp; 5-Band Color Charts &amp; Multipliers
          </text>
          <text x="370" y="39" textAnchor="middle" fill="#64748b" stroke="none" fontSize="9.5">
            Mnemonic: B. B. ROY of Great Britain had a Very Good Wife · Color bands decode resistance value &amp; tolerance
          </text>

          {/* LEFT: Resistor Visual & Band Decoding */}
          <rect x="14" y="48" width="355" height="280" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="24" y="66" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">
            4-Band Resistor Color Code Example:
          </text>

          {/* Resistor Body */}
          <g transform="translate(45, 80)">
            {/* Left Wire Lead */}
            <line x1="-30" y1="40" x2="30" y2="40" stroke="#64748b" strokeWidth="4" />
            <circle cx="-30" cy="40" r="4" fill="#64748b" />

            {/* Ceramic / Carbon Resistor Body with flared ends */}
            <path d="M30 20 Q40 40 30 60 L230 60 Q220 40 230 20 Z" fill="#fde68a" stroke="#d97706" strokeWidth="2" />

            {/* Band 1: Yellow (4) */}
            <rect x="55" y="20" width="16" height="40" fill="#eab308" stroke="#ca8a04" strokeWidth="1" />
            <text x="63" y="14" textAnchor="middle" fill="#854d0e" stroke="none" fontSize="8" fontWeight="bold">1st: 4</text>
            <text x="63" y="75" textAnchor="middle" fill="#854d0e" stroke="none" fontSize="7.5">Yellow</text>

            {/* Band 2: Violet (7) */}
            <rect x="90" y="20" width="16" height="40" fill="#8b5cf6" stroke="#7c3aed" strokeWidth="1" />
            <text x="98" y="14" textAnchor="middle" fill="#6d28d9" stroke="none" fontSize="8" fontWeight="bold">2nd: 7</text>
            <text x="98" y="75" textAnchor="middle" fill="#6d28d9" stroke="none" fontSize="7.5">Violet</text>

            {/* Band 3: Orange (×10³ Multiplier) */}
            <rect x="135" y="20" width="16" height="40" fill="#f97316" stroke="#ea580c" strokeWidth="1" />
            <text x="143" y="14" textAnchor="middle" fill="#c2410c" stroke="none" fontSize="8" fontWeight="bold">×10³</text>
            <text x="143" y="75" textAnchor="middle" fill="#c2410c" stroke="none" fontSize="7.5">Orange</text>

            {/* Band 4: Gold (±5% Tolerance) */}
            <rect x="195" y="20" width="16" height="40" fill="#eab308" stroke="#ca8a04" strokeWidth="1.2" strokeDasharray="2 1" />
            <text x="203" y="14" textAnchor="middle" fill="#b45309" stroke="none" fontSize="8" fontWeight="bold">±5%</text>
            <text x="203" y="75" textAnchor="middle" fill="#b45309" stroke="none" fontSize="7.5">Gold</text>

            {/* Right Wire Lead */}
            <line x1="230" y1="40" x2="290" y2="40" stroke="#64748b" strokeWidth="4" />
            <circle cx="290" cy="40" r="4" fill="#64748b" />
          </g>

          {/* Decoding Formula Callout */}
          <rect x="25" y="180" width="332" height="136" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <text x="35" y="198" fill="#0f172a" stroke="none" fontSize="9" fontWeight="bold">
            Decoded Resistance Value:
          </text>
          <text x="35" y="215" fill="#1e3a8a" stroke="none" fontSize="11" fontWeight="bold">
            R = (Band 1 · 10 + Band 2) × Multiplier ± Tolerance
          </text>
          <text x="35" y="232" fill="#059669" stroke="none" fontSize="10.5" fontWeight="bold">
            R = (47) × 10³ Ω ± 5% = 47,000 Ω ± 5% = 47 kΩ ± 5%
          </text>
          <text x="35" y="249" fill="#475569" stroke="none" fontSize="8">
            • Minimum Value: 47,000 - 5% (2,350 Ω) = 44,650 Ω (44.65 kΩ)
          </text>
          <text x="35" y="262" fill="#475569" stroke="none" fontSize="8">
            • Maximum Value: 47,000 + 5% (2,350 Ω) = 49,350 Ω (49.35 kΩ)
          </text>
          <text x="35" y="278" fill="#1e40af" stroke="none" fontSize="8" fontWeight="bold">
            5-Band Resistor Rule: 1st, 2nd, 3rd bands = 3 Significant Digits,
          </text>
          <text x="35" y="291" fill="#1e40af" stroke="none" fontSize="8">
            4th band = Multiplier, 5th band = Tolerance (e.g., Brown = ±1% precision).
          </text>

          {/* RIGHT: Complete Color Code Reference Table */}
          <rect x="378" y="48" width="348" height="280" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="388" y="66" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">
            EIA Standard Resistor Color Chart:
          </text>

          <g transform="translate(388, 75)">
            {/* Table Header */}
            <rect x="0" y="0" width="328" height="18" fill="#0f172a" rx="3" />
            <text x="12" y="12" fill="#ffffff" stroke="none" fontSize="8" fontWeight="bold">Color</text>
            <text x="90" y="12" fill="#ffffff" stroke="none" fontSize="8" fontWeight="bold">Digit</text>
            <text x="160" y="12" fill="#ffffff" stroke="none" fontSize="8" fontWeight="bold">Multiplier</text>
            <text x="250" y="12" fill="#ffffff" stroke="none" fontSize="8" fontWeight="bold">Tolerance</text>

            {/* Rows */}
            {[
              { color: 'Black', digit: '0', mult: '×10⁰ (1)', tol: '—', bg: '#000000', text: '#ffffff' },
              { color: 'Brown', digit: '1', mult: '×10¹ (10)', tol: '±1%', bg: '#78350f', text: '#ffffff' },
              { color: 'Red', digit: '2', mult: '×10² (100)', tol: '±2%', bg: '#dc2626', text: '#ffffff' },
              { color: 'Orange', digit: '3', mult: '×10³ (1k)', tol: '—', bg: '#ea580c', text: '#ffffff' },
              { color: 'Yellow', digit: '4', mult: '×10⁴ (10k)', tol: '—', bg: '#eab308', text: '#000000' },
              { color: 'Green', digit: '5', mult: '×10⁵ (100k)', tol: '±0.5%', bg: '#16a34a', text: '#ffffff' },
              { color: 'Blue', digit: '6', mult: '×10⁶ (1M)', tol: '±0.25%', bg: '#2563eb', text: '#ffffff' },
              { color: 'Violet', digit: '7', mult: '×10⁷ (10M)', tol: '±0.1%', bg: '#7c3aed', text: '#ffffff' },
              { color: 'Gray', digit: '8', mult: '×10⁸ (100M)', tol: '±0.05%', bg: '#64748b', text: '#ffffff' },
              { color: 'White', digit: '9', mult: '×10⁹ (1G)', tol: '—', bg: '#f1f5f9', text: '#0f172a' },
              { color: 'Gold', digit: '—', mult: '×0.1 (10⁻¹)', tol: '±5%', bg: '#f59e0b', text: '#000000' },
              { color: 'Silver', digit: '—', mult: '×0.01 (10⁻²)', tol: '±10%', bg: '#cbd5e1', text: '#0f172a' },
            ].map((row, idx) => (
              <g key={idx} transform={`translate(0, ${22 + idx * 17.5})`}>
                <rect x="0" y="0" width="328" height="15" fill={idx % 2 === 0 ? '#f8fafc' : '#ffffff'} />
                <rect x="10" y="2" width="55" height="11" rx="2" fill={row.bg} />
                <text x="37" y="10" textAnchor="middle" fill={row.text} stroke="none" fontSize="7" fontWeight="bold">{row.color}</text>
                <text x="100" y="11" fill="#0f172a" stroke="none" fontSize="8" fontWeight="bold">{row.digit}</text>
                <text x="160" y="11" fill="#334155" stroke="none" fontSize="7.5">{row.mult}</text>
                <text x="255" y="11" fill="#047857" stroke="none" fontSize="7.5" fontWeight="bold">{row.tol}</text>
              </g>
            ))}
          </g>
        </svg>
      );

    // 4. FET: MOSFET Basic Construction & Inversion Layer Cross-Section
    case 'mosfet_basic_construction':
      return (
        <svg viewBox="0 0 740 330" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="740" height="330" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />

          {/* Header */}
          <text x="370" y="24" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="13.5" fontWeight="bold">
            MOSFET Basic Physical Construction: Cross-Sectional Structure &amp; Inversion Layer
          </text>
          <text x="370" y="39" textAnchor="middle" fill="#64748b" stroke="none" fontSize="9.5">
            Metal/Poly Gate · Insulating Silicon Dioxide (SiO₂) Layer · N⁺ Wells · P-Substrate · Inversion Channel
          </text>

          {/* LEFT: Physical Cross-Section */}
          <rect x="14" y="48" width="445" height="270" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="24" y="66" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">
            N-Channel Enhancement MOSFET Cross-Section:
          </text>

          <g transform="translate(30, 85)">
            {/* P-Type Silicon Substrate (Body) */}
            <rect x="0" y="50" width="380" height="110" fill="#fce7f3" stroke="#db2777" strokeWidth="1.5" />
            <text x="190" y="140" textAnchor="middle" fill="#be185d" stroke="none" fontSize="10" fontWeight="bold">
              P-Type Silicon Substrate (Body / Bulk, B)
            </text>

            {/* Source N+ well */}
            <rect x="25" y="50" width="80" height="45" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
            <text x="65" y="75" textAnchor="middle" fill="#0369a1" stroke="none" fontSize="9" fontWeight="bold">Source (N⁺)</text>
            <text x="65" y="87" textAnchor="middle" fill="#0369a1" stroke="none" fontSize="7">Heavily Doped</text>

            {/* Drain N+ well */}
            <rect x="275" y="50" width="80" height="45" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
            <text x="315" y="75" textAnchor="middle" fill="#0369a1" stroke="none" fontSize="9" fontWeight="bold">Drain (N⁺)</text>
            <text x="315" y="87" textAnchor="middle" fill="#0369a1" stroke="none" fontSize="7">Heavily Doped</text>

            {/* Induced N-Channel Inversion Layer */}
            <rect x="105" y="50" width="170" height="15" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.2" strokeDasharray="3 2" />
            <text x="190" y="61" textAnchor="middle" fill="#854d0e" stroke="none" fontSize="7.5" fontWeight="bold">
              Induced N-Channel (Inversion Layer when VGS &gt; Vth)
            </text>

            {/* Depletion Region Border */}
            <path d="M15 98 Q65 110 105 75 Q190 85 275 75 Q315 110 365 98" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
            <text x="190" y="95" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7">Space-Charge Depletion Region</text>

            {/* Thin SiO2 Insulating Layer */}
            <rect x="95" y="32" width="190" height="18" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
            <text x="190" y="44" textAnchor="middle" fill="#065f46" stroke="none" fontSize="8" fontWeight="bold">
              Silicon Dioxide (SiO₂) Insulating Dielectric (tox ~ 5-20 nm)
            </text>

            {/* Gate Metal / Polysilicon Plate */}
            <rect x="110" y="16" width="160" height="16" fill="#475569" stroke="#1e293b" strokeWidth="1.5" />
            <text x="190" y="28" textAnchor="middle" fill="#ffffff" stroke="none" fontSize="8.5" fontWeight="bold">
              Gate Electrode (Polysilicon / Metal)
            </text>

            {/* Terminal Leads */}
            {/* Gate Lead */}
            <line x1="190" y1="16" x2="190" y2="-15" stroke="#7c3aed" strokeWidth="2.5" />
            <circle cx="190" cy="-15" r="4" fill="#7c3aed" />
            <text x="190" y="-22" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="9.5" fontWeight="bold">Gate (G)</text>

            {/* Source Lead */}
            <rect x="45" y="42" width="40" height="8" fill="#94a3b8" />
            <line x1="65" y1="42" x2="65" y2="-15" stroke="#0284c7" strokeWidth="2.5" />
            <circle cx="65" cy="-15" r="4" fill="#0284c7" />
            <text x="65" y="-22" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="9.5" fontWeight="bold">Source (S)</text>

            {/* Drain Lead */}
            <rect x="295" y="42" width="40" height="8" fill="#94a3b8" />
            <line x1="315" y1="42" x2="315" y2="-15" stroke="#0284c7" strokeWidth="2.5" />
            <circle cx="315" cy="-15" r="4" fill="#0284c7" />
            <text x="315" y="-22" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="9.5" fontWeight="bold">Drain (D)</text>

            {/* Substrate Body Lead */}
            <rect x="160" y="160" width="60" height="8" fill="#94a3b8" />
            <line x1="190" y1="168" x2="190" y2="190" stroke="#db2777" strokeWidth="2.5" />
            <circle cx="190" cy="190" r="4" fill="#db2777" />
            <text x="190" y="202" textAnchor="middle" fill="#db2777" stroke="none" fontSize="9.5" fontWeight="bold">Body / Bulk (B)</text>
          </g>

          {/* RIGHT: Operational Principles & Key Takeaways */}
          <rect x="468" y="48" width="258" height="270" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="478" y="66" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">
            Core Structural Highlights:
          </text>

          <g transform="translate(478, 78)">
            <rect x="0" y="0" width="238" height="48" rx="4" fill="#f0fdf4" stroke="#86efac" strokeWidth="0.8" />
            <text x="8" y="14" fill="#166534" stroke="none" fontSize="8" fontWeight="bold">1. SiO₂ Gate Insulation:</text>
            <text x="8" y="26" fill="#14532d" stroke="none" fontSize="7.2">• Gate is physically isolated by oxide (Rin &gt; 10¹² Ω).</text>
            <text x="8" y="38" fill="#14532d" stroke="none" fontSize="7.2">• Static Gate DC Current IG ≈ 0 pA.</text>

            <rect x="0" y="55" width="238" height="60" rx="4" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="0.8" />
            <text x="8" y="69" fill="#1e40af" stroke="none" fontSize="8" fontWeight="bold">2. Inversion Layer &amp; Threshold (Vth):</text>
            <text x="8" y="81" fill="#1e3a8a" stroke="none" fontSize="7.2">• When VGS &gt; 0, electric field repels holes.</text>
            <text x="8" y="93" fill="#1e3a8a" stroke="none" fontSize="7.2">• For VGS &gt; Vth, minority electrons invert</text>
            <text x="8" y="105" fill="#1e3a8a" stroke="none" fontSize="7.2">  the surface into an n-type conducting channel.</text>

            <rect x="0" y="122" width="238" height="52" rx="4" fill="#fef2f2" stroke="#fecaca" strokeWidth="0.8" />
            <text x="8" y="136" fill="#991b1b" stroke="none" fontSize="8" fontWeight="bold">3. Voltage-Controlled Current (ID):</text>
            <text x="8" y="148" fill="#7f1d1d" stroke="none" fontSize="7.2">• Triode / Ohmic (small VDS): ID ∝ (VGS - Vth) · VDS</text>
            <text x="8" y="160" fill="#7f1d1d" stroke="none" fontSize="7.2">• Saturation (VDS ≥ VGS - Vth): ID = k · (VGS - Vth)²</text>

            <rect x="0" y="180" width="238" height="52" rx="4" fill="#faf5ff" stroke="#e9d5ff" strokeWidth="0.8" />
            <text x="8" y="194" fill="#6b21a8" stroke="none" fontSize="8" fontWeight="bold">4. Unipolar Conduction:</text>
            <text x="8" y="206" fill="#581c87" stroke="none" fontSize="7.2">• Purely majority electron conduction in NMOS.</text>
            <text x="8" y="218" fill="#581c87" stroke="none" fontSize="7.2">• No minority carrier storage → Ultra-fast switching.</text>
          </g>
        </svg>
      );

    // 4. FET: P-Channel vs N-Channel MOSFET Comparison
    case 'mosfet_p_and_n_channel':
      return (
        <svg viewBox="0 0 740 330" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="740" height="330" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />

          {/* Header */}
          <text x="370" y="24" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="13.5" fontWeight="bold">
            N-Channel vs P-Channel MOSFETs: Doping, Carrier Transport &amp; IEEE Symbols
          </text>
          <text x="370" y="39" textAnchor="middle" fill="#64748b" stroke="none" fontSize="9.5">
            NMOS (High-Mobility Electron Conduction) vs PMOS (Hole Conduction, Pull-Up Complementary Partner)
          </text>

          {/* LEFT: N-Channel MOSFET */}
          <rect x="14" y="48" width="348" height="270" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="24" y="66" fill="#1e3a8a" stroke="none" fontSize="11" fontWeight="bold">
            1. N-Channel MOSFET (NMOS)
          </text>

          {/* NMOS Symbol */}
          <g transform="translate(145, 75)">
            <circle cx="45" cy="40" r="30" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" />
            <line x1="25" y1="20" x2="25" y2="60" stroke="#1e293b" strokeWidth="3" />
            <line x1="0" y1="40" x2="25" y2="40" stroke="#7c3aed" strokeWidth="2" />
            {/* 3 channel dashes */}
            <line x1="38" y1="20" x2="38" y2="30" stroke="#0284c7" strokeWidth="3" />
            <line x1="38" y1="35" x2="38" y2="45" stroke="#0284c7" strokeWidth="3" />
            <line x1="38" y1="50" x2="38" y2="60" stroke="#0284c7" strokeWidth="3" />
            {/* Drain */}
            <line x1="38" y1="25" x2="70" y2="25" stroke="#0284c7" strokeWidth="2" />
            <line x1="70" y1="25" x2="70" y2="5" stroke="#0284c7" strokeWidth="2" />
            {/* Source & Bulk tied */}
            <line x1="38" y1="55" x2="70" y2="55" stroke="#0284c7" strokeWidth="2" />
            <line x1="70" y1="55" x2="70" y2="75" stroke="#0284c7" strokeWidth="2" />
            {/* Substrate inward arrow */}
            <line x1="38" y1="40" x2="65" y2="40" stroke="#0284c7" strokeWidth="2" />
            <polygon points="46,37 38,40 46,43" fill="#0284c7" stroke="#0284c7" />
            <line x1="65" y1="40" x2="65" y2="55" stroke="#0284c7" strokeWidth="2" />

            <text x="-8" y="44" fill="#7c3aed" stroke="none" fontSize="9" fontWeight="bold">G</text>
            <text x="75" y="8" fill="#0284c7" stroke="none" fontSize="9" fontWeight="bold">D</text>
            <text x="75" y="82" fill="#0284c7" stroke="none" fontSize="9" fontWeight="bold">S</text>
          </g>

          {/* NMOS Properties Box */}
          <rect x="25" y="165" width="326" height="142" rx="6" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="0.8" />
          <text x="35" y="182" fill="#0369a1" stroke="none" fontSize="8.5" fontWeight="bold">• Substrate Body: P-type Silicon</text>
          <text x="35" y="196" fill="#0369a1" stroke="none" fontSize="8.5">• Source/Drain Wells: Heavily Doped N⁺</text>
          <text x="35" y="210" fill="#0369a1" stroke="none" fontSize="8.5">• Conducting Carriers: Free Electrons (e⁻)</text>
          <text x="35" y="224" fill="#0369a1" stroke="none" fontSize="8.5">• Electron Mobility: μn ≈ 1400 cm²/V·s (High Speed)</text>
          <text x="35" y="238" fill="#0369a1" stroke="none" fontSize="8.5">• Threshold Voltage: Vth,n &gt; 0 (Positive, e.g., +1.0V to +2.5V)</text>
          <text x="35" y="252" fill="#0369a1" stroke="none" fontSize="8.5">• Turn-On Condition: VGS &gt; Vth,n (Positive gate turns ON)</text>
          <text x="35" y="266" fill="#0369a1" stroke="none" fontSize="8.5">• Substrate Arrow: Points INWARD toward the channel</text>
          <text x="35" y="280" fill="#0284c7" stroke="none" fontSize="8.5" fontWeight="bold">• Role in CMOS: Pull-Down Network (connects to GND)</text>

          {/* RIGHT: P-Channel MOSFET */}
          <rect x="378" y="48" width="348" height="270" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="388" y="66" fill="#991b1b" stroke="none" fontSize="11" fontWeight="bold">
            2. P-Channel MOSFET (PMOS)
          </text>

          {/* PMOS Symbol */}
          <g transform="translate(510, 75)">
            <circle cx="45" cy="40" r="30" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" />
            <line x1="25" y1="20" x2="25" y2="60" stroke="#1e293b" strokeWidth="3" />
            <circle cx="19" cy="40" r="3.5" stroke="#dc2626" strokeWidth="1.5" />
            <line x1="0" y1="40" x2="15" y2="40" stroke="#7c3aed" strokeWidth="2" />
            {/* 3 channel dashes */}
            <line x1="38" y1="20" x2="38" y2="30" stroke="#dc2626" strokeWidth="3" />
            <line x1="38" y1="35" x2="38" y2="45" stroke="#dc2626" strokeWidth="3" />
            <line x1="38" y1="50" x2="38" y2="60" stroke="#dc2626" strokeWidth="3" />
            {/* Source at top for PMOS */}
            <line x1="38" y1="25" x2="70" y2="25" stroke="#dc2626" strokeWidth="2" />
            <line x1="70" y1="25" x2="70" y2="5" stroke="#dc2626" strokeWidth="2" />
            {/* Drain at bottom */}
            <line x1="38" y1="55" x2="70" y2="55" stroke="#dc2626" strokeWidth="2" />
            <line x1="70" y1="55" x2="70" y2="75" stroke="#dc2626" strokeWidth="2" />
            {/* Substrate OUTWARD arrow */}
            <line x1="38" y1="40" x2="65" y2="40" stroke="#dc2626" strokeWidth="2" />
            <polygon points="56,37 64,40 56,43" fill="#dc2626" stroke="#dc2626" />
            <line x1="65" y1="40" x2="65" y2="25" stroke="#dc2626" strokeWidth="2" />

            <text x="-8" y="44" fill="#7c3aed" stroke="none" fontSize="9" fontWeight="bold">G</text>
            <text x="75" y="8" fill="#dc2626" stroke="none" fontSize="9" fontWeight="bold">S</text>
            <text x="75" y="82" fill="#dc2626" stroke="none" fontSize="9" fontWeight="bold">D</text>
          </g>

          {/* PMOS Properties Box */}
          <rect x="388" y="165" width="326" height="142" rx="6" fill="#fef2f2" stroke="#fecaca" strokeWidth="0.8" />
          <text x="398" y="182" fill="#991b1b" stroke="none" fontSize="8.5" fontWeight="bold">• Substrate Body: N-type Silicon (N-well)</text>
          <text x="398" y="196" fill="#991b1b" stroke="none" fontSize="8.5">• Source/Drain Wells: Heavily Doped P⁺</text>
          <text x="398" y="210" fill="#991b1b" stroke="none" fontSize="8.5">• Conducting Carriers: Holes (h⁺)</text>
          <text x="398" y="224" fill="#991b1b" stroke="none" fontSize="8.5">• Hole Mobility: μp ≈ 450 cm²/V·s (Requires ~2.5× wider channel)</text>
          <text x="398" y="238" fill="#991b1b" stroke="none" fontSize="8.5">• Threshold Voltage: Vth,p &lt; 0 (Negative, e.g., -1.0V to -2.0V)</text>
          <text x="398" y="252" fill="#991b1b" stroke="none" fontSize="8.5">• Turn-On Condition: VGS &lt; Vth,p (Negative gate turns ON)</text>
          <text x="398" y="266" fill="#991b1b" stroke="none" fontSize="8.5">• Substrate Arrow: Points OUTWARD (or gate inversion circle)</text>
          <text x="398" y="280" fill="#dc2626" stroke="none" fontSize="8.5" fontWeight="bold">• Role in CMOS: Pull-Up Network (connects to VDD)</text>
        </svg>
      );

    // 4. FET: Enhancement vs Depletion MOSFET Comparison
    case 'mosfet_enhancement_depletion':
      return (
        <svg viewBox="0 0 740 330" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="740" height="330" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />

          {/* Header */}
          <text x="370" y="24" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="13.5" fontWeight="bold">
            Enhancement Mode vs Depletion Mode MOSFETs: Operating Physics &amp; Transfer Curves
          </text>
          <text x="370" y="39" textAnchor="middle" fill="#64748b" stroke="none" fontSize="9.5">
            Normally-OFF (Enhancement, Induced Channel) vs Normally-ON (Depletion, Built-In Channel)
          </text>

          {/* LEFT: Enhancement Mode */}
          <rect x="14" y="48" width="348" height="270" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="24" y="66" fill="#1e3a8a" stroke="none" fontSize="11" fontWeight="bold">
            1. Enhancement-Mode MOSFET (E-MOSFET)
          </text>

          {/* Transfer Curve for E-MOSFET */}
          <g transform="translate(30, 80)">
            {/* Axes */}
            <line x1="20" y1="75" x2="140" y2="75" stroke="#334155" strokeWidth="1.5" />
            <line x1="30" y1="80" x2="30" y2="10" stroke="#334155" strokeWidth="1.5" />
            <polygon points="140,75 133,72 133,78" fill="#334155" stroke="none" />
            <polygon points="30,10 27,17 33,17" fill="#334155" stroke="none" />
            <text x="140" y="87" textAnchor="end" fill="#334155" stroke="none" fontSize="7.5" fontWeight="bold">+VGS</text>
            <text x="25" y="12" textAnchor="end" fill="#334155" stroke="none" fontSize="7.5" fontWeight="bold">ID</text>

            {/* Curve */}
            <line x1="30" y1="75" x2="70" y2="75" stroke="#0284c7" strokeWidth="2.5" />
            <path d="M70 75 Q90 75 130 18" stroke="#0284c7" strokeWidth="2.5" fill="none" />
            <circle cx="70" cy="75" r="2.5" fill="#0284c7" />
            <text x="70" y="87" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="7.5" fontWeight="bold">Vth</text>
            <text x="75" y="40" fill="#0369a1" stroke="none" fontSize="7">ID = k(VGS - Vth)²</text>
          </g>

          {/* Symbol */}
          <g transform="translate(190, 80)">
            <circle cx="35" cy="40" r="28" stroke="#94a3b8" strokeDasharray="3 3" />
            <line x1="18" y1="20" x2="18" y2="60" stroke="#1e293b" strokeWidth="2.5" />
            <line x1="0" y1="40" x2="18" y2="40" stroke="#7c3aed" strokeWidth="1.8" />
            {/* Dashed line indicates NO physical channel */}
            <line x1="28" y1="20" x2="28" y2="30" stroke="#0284c7" strokeWidth="2.5" />
            <line x1="28" y1="35" x2="28" y2="45" stroke="#0284c7" strokeWidth="2.5" />
            <line x1="28" y1="50" x2="28" y2="60" stroke="#0284c7" strokeWidth="2.5" />
            <line x1="28" y1="25" x2="55" y2="25" stroke="#0284c7" />
            <line x1="55" y1="25" x2="55" y2="10" stroke="#0284c7" />
            <line x1="28" y1="55" x2="55" y2="55" stroke="#0284c7" />
            <line x1="55" y1="55" x2="55" y2="70" stroke="#0284c7" />
            <text x="35" y="82" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7">Broken Channel = Normally OFF</text>
          </g>

          {/* Key Points E-MOSFET */}
          <rect x="25" y="170" width="326" height="135" rx="6" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="0.8" />
          <text x="35" y="188" fill="#0369a1" stroke="none" fontSize="8.5" fontWeight="bold">• Normally OFF: No physical channel at VGS = 0V (ID = 0).</text>
          <text x="35" y="202" fill="#0369a1" stroke="none" fontSize="8.5">• Turn-On Requirement: Channel forms ONLY when VGS &gt; Vth.</text>
          <text x="35" y="216" fill="#0369a1" stroke="none" fontSize="8.5">• Saturation Current: ID = k · (VGS - Vth)² where k = μ·Cox·(W/2L).</text>
          <text x="35" y="230" fill="#0369a1" stroke="none" fontSize="8.5">• Dominant Technology: Used in 99.9% of modern VLSI,</text>
          <text x="35" y="244" fill="#0369a1" stroke="none" fontSize="8.5">  microprocessors, and computer memory chips (CMOS).</text>
          <text x="35" y="258" fill="#0369a1" stroke="none" fontSize="8.5">• Safe Fail State: Transistor defaults to OFF if gate loses drive.</text>
          <text x="35" y="272" fill="#0284c7" stroke="none" fontSize="8.5" fontWeight="bold">• Symbol: Broken/dashed channel line represents normally-open.</text>

          {/* RIGHT: Depletion Mode */}
          <rect x="378" y="48" width="348" height="270" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="388" y="66" fill="#991b1b" stroke="none" fontSize="11" fontWeight="bold">
            2. Depletion-Mode MOSFET (D-MOSFET)
          </text>

          {/* Transfer Curve for D-MOSFET */}
          <g transform="translate(390, 80)">
            {/* Axes */}
            <line x1="20" y1="75" x2="140" y2="75" stroke="#334155" strokeWidth="1.5" />
            <line x1="75" y1="80" x2="75" y2="10" stroke="#334155" strokeWidth="1.5" />
            <polygon points="140,75 133,72 133,78" fill="#334155" stroke="none" />
            <polygon points="75,10 72,17 78,17" fill="#334155" stroke="none" />
            <text x="140" y="87" textAnchor="end" fill="#334155" stroke="none" fontSize="7.5" fontWeight="bold">+VGS</text>
            <text x="20" y="87" fill="#334155" stroke="none" fontSize="7.5" fontWeight="bold">-VGS</text>
            <text x="70" y="12" textAnchor="end" fill="#334155" stroke="none" fontSize="7.5" fontWeight="bold">ID</text>

            {/* Continuous curve across 0 */}
            <path d="M35 75 Q55 75 75 50 Q105 20 135 15" stroke="#059669" strokeWidth="2.5" fill="none" />
            <circle cx="35" cy="75" r="2.5" fill="#059669" />
            <circle cx="75" cy="50" r="2.5" fill="#059669" />
            <text x="35" y="87" textAnchor="middle" fill="#059669" stroke="none" fontSize="7.5" fontWeight="bold">VP</text>
            <text x="82" y="52" fill="#059669" stroke="none" fontSize="7.5" fontWeight="bold">IDSS (VGS=0)</text>
            <text x="40" y="42" fill="#047857" stroke="none" fontSize="6.8">Depletion Mode</text>
            <text x="95" y="42" fill="#047857" stroke="none" fontSize="6.8">Enhancement Mode</text>
          </g>

          {/* Symbol */}
          <g transform="translate(560, 80)">
            <circle cx="35" cy="40" r="28" stroke="#94a3b8" strokeDasharray="3 3" />
            <line x1="18" y1="20" x2="18" y2="60" stroke="#1e293b" strokeWidth="2.5" />
            <line x1="0" y1="40" x2="18" y2="40" stroke="#7c3aed" strokeWidth="1.8" />
            {/* SOLID line indicates BUILT-IN physical channel */}
            <line x1="28" y1="20" x2="28" y2="60" stroke="#059669" strokeWidth="3" />
            <line x1="28" y1="25" x2="55" y2="25" stroke="#059669" />
            <line x1="55" y1="25" x2="55" y2="10" stroke="#059669" />
            <line x1="28" y1="55" x2="55" y2="55" stroke="#059669" />
            <line x1="55" y1="55" x2="55" y2="70" stroke="#059669" />
            <text x="35" y="82" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7">Solid Channel = Normally ON</text>
          </g>

          {/* Key Points D-MOSFET */}
          <rect x="388" y="170" width="326" height="135" rx="6" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="0.8" />
          <text x="398" y="188" fill="#166534" stroke="none" fontSize="8.5" fontWeight="bold">• Normally ON: Built-in physical channel conducts IDSS at VGS = 0.</text>
          <text x="398" y="202" fill="#166534" stroke="none" fontSize="8.5">• Dual-Mode Operation:</text>
          <text x="408" y="216" fill="#166534" stroke="none" fontSize="8">1. Depletion Mode (VGS &lt; 0): Negative gate repels electrons (ID &lt; IDSS).</text>
          <text x="408" y="230" fill="#166534" stroke="none" fontSize="8">2. Enhancement Mode (VGS &gt; 0): Positive gate attracts electrons (ID &gt; IDSS).</text>
          <text x="398" y="244" fill="#166534" stroke="none" fontSize="8.5">• Pinch-off Voltage (VP): Negative gate voltage where ID drops to zero.</text>
          <text x="398" y="258" fill="#166534" stroke="none" fontSize="8.5">• Drain Current Equation: ID = IDSS · (1 - VGS / VP)² (Shockley).</text>
          <text x="398" y="272" fill="#15803d" stroke="none" fontSize="8.5" fontWeight="bold">• Symbol: Solid continuous channel line represents normally-closed.</text>
        </svg>
      );

    // 4. FET: CMOS Inverter Circuit & Static Characteristics
    case 'cmos_inverter_circuit':
    case 'cmos_inverter':
      return (
        <svg viewBox="0 0 740 330" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="740" height="330" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />

          {/* Header */}
          <text x="370" y="24" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="13.5" fontWeight="bold">
            Complementary MOS (CMOS): Inverter Circuit Schematic &amp; Operation
          </text>
          <text x="370" y="39" textAnchor="middle" fill="#64748b" stroke="none" fontSize="9.5">
            PMOS Pull-Up + NMOS Pull-Down · Rail-to-Rail Output Swing · Zero Static Power Dissipation
          </text>

          {/* LEFT: Circuit Schematic */}
          <rect x="14" y="48" width="375" height="270" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="24" y="66" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">
            CMOS Inverter Circuit Schematic:
          </text>

          <g transform="translate(80, 80)">
            {/* VDD Power Rail */}
            <line x1="80" y1="0" x2="160" y2="0" stroke="#dc2626" strokeWidth="2.5" />
            <circle cx="120" cy="0" r="3.5" fill="#dc2626" />
            <text x="120" y="-8" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="10" fontWeight="bold">+VDD (+5V / +3.3V)</text>

            {/* Wire to PMOS Source */}
            <line x1="120" y1="0" x2="120" y2="25" stroke="#1e293b" />

            {/* PMOS Transistor (Top Pull-Up) */}
            <circle cx="120" cy="50" r="24" stroke="#94a3b8" strokeDasharray="2 2" />
            {/* Gate bar & bubble */}
            <line x1="105" y1="35" x2="105" y2="65" stroke="#1e293b" strokeWidth="2.5" />
            <circle cx="97" cy="50" r="3.5" stroke="#dc2626" strokeWidth="1.5" />
            <line x1="115" y1="35" x2="115" y2="65" stroke="#dc2626" strokeWidth="2.5" />
            {/* Source top */}
            <line x1="115" y1="40" x2="120" y2="40" stroke="#1e293b" />
            <line x1="120" y1="25" x2="120" y2="40" stroke="#1e293b" />
            {/* Drain bottom */}
            <line x1="115" y1="60" x2="120" y2="60" stroke="#1e293b" />
            <line x1="120" y1="60" x2="120" y2="85" stroke="#1e293b" />
            <text x="150" y="52" fill="#dc2626" stroke="none" fontSize="9" fontWeight="bold">PMOS (Qp)</text>
            <text x="150" y="63" fill="#64748b" stroke="none" fontSize="7.5">Pull-Up Network</text>

            {/* Intermediate Node (Output) */}
            <line x1="120" y1="85" x2="120" y2="120" stroke="#1e293b" strokeWidth="2" />
            <circle cx="120" cy="102" r="3.5" fill="#1e293b" />
            <line x1="120" y1="102" x2="215" y2="102" stroke="#2563eb" strokeWidth="2.5" />
            <circle cx="215" cy="102" r="4" fill="#2563eb" />
            <text x="225" y="106" fill="#2563eb" stroke="none" fontSize="10.5" fontWeight="bold">VOUT</text>

            {/* NMOS Transistor (Bottom Pull-Down) */}
            <circle cx="120" cy="145" r="24" stroke="#94a3b8" strokeDasharray="2 2" />
            <line x1="105" y1="130" x2="105" y2="160" stroke="#1e293b" strokeWidth="2.5" />
            <line x1="97" y1="145" x2="105" y2="145" stroke="#7c3aed" strokeWidth="2" />
            <line x1="115" y1="130" x2="115" y2="160" stroke="#0284c7" strokeWidth="2.5" />
            {/* Drain top */}
            <line x1="115" y1="135" x2="120" y2="135" stroke="#1e293b" />
            <line x1="120" y1="120" x2="120" y2="135" stroke="#1e293b" />
            {/* Source bottom */}
            <line x1="115" y1="155" x2="120" y2="155" stroke="#1e293b" />
            <line x1="120" y1="155" x2="120" y2="180" stroke="#1e293b" />
            <text x="150" y="147" fill="#0284c7" stroke="none" fontSize="9" fontWeight="bold">NMOS (Qn)</text>
            <text x="150" y="158" fill="#64748b" stroke="none" fontSize="7.5">Pull-Down Network</text>

            {/* Common Input Tie */}
            <line x1="93" y1="50" x2="60" y2="50" stroke="#7c3aed" strokeWidth="2" />
            <line x1="97" y1="145" x2="60" y2="145" stroke="#7c3aed" strokeWidth="2" />
            <line x1="60" y1="50" x2="60" y2="145" stroke="#7c3aed" strokeWidth="2" />
            <circle cx="60" cy="102" r="3.5" fill="#7c3aed" />
            <line x1="60" y1="102" x2="5" y2="102" stroke="#7c3aed" strokeWidth="2.5" />
            <circle cx="5" cy="102" r="4" fill="#7c3aed" />
            <text x="-5" y="106" textAnchor="end" fill="#7c3aed" stroke="none" fontSize="10.5" fontWeight="bold">VIN</text>

            {/* Ground Rail */}
            <line x1="120" y1="180" x2="120" y2="195" stroke="#1e293b" strokeWidth="2" />
            <line x1="100" y1="195" x2="140" y2="195" stroke="#1e293b" strokeWidth="2.5" />
            <line x1="108" y1="199" x2="132" y2="199" stroke="#1e293b" strokeWidth="1.8" />
            <line x1="115" y1="203" x2="125" y2="203" stroke="#1e293b" strokeWidth="1.2" />
            <text x="120" y="215" textAnchor="middle" fill="#64748b" stroke="none" fontSize="8" fontWeight="bold">GND (0V)</text>
          </g>

          {/* RIGHT: Operational Analysis & Truth Table */}
          <rect x="402" y="48" width="324" height="270" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="412" y="66" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">
            CMOS Inverter Switching States &amp; Table:
          </text>

          <g transform="translate(412, 75)">
            {/* Truth Table */}
            <rect x="0" y="0" width="304" height="20" fill="#0f172a" rx="3" />
            <text x="15" y="14" fill="#ffffff" stroke="none" fontSize="8" fontWeight="bold">VIN (State)</text>
            <text x="80" y="14" fill="#ffffff" stroke="none" fontSize="8" fontWeight="bold">PMOS (Qp)</text>
            <text x="155" y="14" fill="#ffffff" stroke="none" fontSize="8" fontWeight="bold">NMOS (Qn)</text>
            <text x="235" y="14" fill="#ffffff" stroke="none" fontSize="8" fontWeight="bold">VOUT</text>

            {/* Row 1: LOW Input */}
            <rect x="0" y="24" width="304" height="26" fill="#eff6ff" rx="3" />
            <text x="15" y="40" fill="#1e40af" stroke="none" fontSize="8.5" fontWeight="bold">LOW (0V)</text>
            <text x="80" y="40" fill="#16a34a" stroke="none" fontSize="8.5" fontWeight="bold">ON (Closed)</text>
            <text x="155" y="40" fill="#dc2626" stroke="none" fontSize="8.5" fontWeight="bold">OFF (Open)</text>
            <text x="235" y="40" fill="#1e40af" stroke="none" fontSize="8.5" fontWeight="bold">HIGH (+VDD)</text>

            {/* Row 2: HIGH Input */}
            <rect x="0" y="54" width="304" height="26" fill="#fef2f2" rx="3" />
            <text x="15" y="70" fill="#991b1b" stroke="none" fontSize="8.5" fontWeight="bold">HIGH (VDD)</text>
            <text x="80" y="70" fill="#dc2626" stroke="none" fontSize="8.5" fontWeight="bold">OFF (Open)</text>
            <text x="155" y="70" fill="#16a34a" stroke="none" fontSize="8.5" fontWeight="bold">ON (Closed)</text>
            <text x="235" y="70" fill="#991b1b" stroke="none" fontSize="8.5" fontWeight="bold">LOW (0V)</text>

            {/* Key Advantages */}
            <rect x="0" y="88" width="304" height="145" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="10" y="104" fill="#0f172a" stroke="none" fontSize="8.5" fontWeight="bold">Distinctive Engineering Advantages of CMOS:</text>
            <text x="10" y="120" fill="#334155" stroke="none" fontSize="7.8">• Zero Static Power Dissipation: In both logic states (0 or 1),</text>
            <text x="18" y="132" fill="#334155" stroke="none" fontSize="7.5">one of the two transistors is strictly OFF, blocking any direct</text>
            <text x="18" y="144" fill="#334155" stroke="none" fontSize="7.5">DC current path from VDD to GND (Pstatic ≈ 0 nW).</text>
            <text x="10" y="160" fill="#334155" stroke="none" fontSize="7.8">• Full Rail-to-Rail Logic Swing: Outputs achieve true 0V and true VDD.</text>
            <text x="10" y="176" fill="#334155" stroke="none" fontSize="7.8">• High Noise Margin: Switching threshold is centered near VDD / 2.</text>
            <text x="10" y="192" fill="#334155" stroke="none" fontSize="7.8">• Ultra-High Input Impedance: Gate oxide SiO₂ prevents any DC input draw.</text>
            <text x="10" y="208" fill="#1e40af" stroke="none" fontSize="7.8" fontWeight="bold">• Dynamic Power: Power is consumed ONLY during switching (Pd = C·V²·f).</text>
          </g>
        </svg>
      );

    // 5. Op-Amp: Non-Inverting Amplifier
    case 'opamp_non_inverting':
      return (
        <svg viewBox="0 0 740 320" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="740" height="320" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />

          {/* Header */}
          <text x="370" y="24" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="13.5" fontWeight="bold">
            Non-Inverting Operational Amplifier: Circuit &amp; Virtual Short Derivation
          </text>
          <text x="370" y="39" textAnchor="middle" fill="#64748b" stroke="none" fontSize="9.5">
            Input applied to (+) non-inverting terminal · Negative feedback via Rf and R1 · Zero phase shift (Av ≥ 1)
          </text>

          {/* LEFT: Circuit Schematic */}
          <rect x="14" y="48" width="415" height="255" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="24" y="66" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">
            Non-Inverting Op-Amp Circuit Schematic:
          </text>

          <g transform="translate(30, 80)">
            {/* Op-Amp Triangle */}
            <polygon points="170,40 170,140 270,90" fill="#f8fafc" stroke="#2563eb" strokeWidth="2.5" />
            <text x="180" y="66" fill="#dc2626" stroke="none" fontSize="15" fontWeight="bold">-</text>
            <text x="180" y="126" fill="#16a34a" stroke="none" fontSize="15" fontWeight="bold">+</text>

            {/* Non-inverting input terminal (+) - runs horizontally, clean and unobstructed */}
            <line x1="30" y1="120" x2="170" y2="120" stroke="#16a34a" strokeWidth="2.5" />
            <circle cx="30" cy="120" r="4" fill="#16a34a" />
            <text x="22" y="124" textAnchor="end" fill="#16a34a" stroke="none" fontSize="10.5" fontWeight="bold">Vin (+)</text>

            {/* Virtual Short Indication */}
            <line x1="150" y1="60" x2="150" y2="120" stroke="#9333ea" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="145" y="93" textAnchor="end" fill="#9333ea" stroke="none" fontSize="8" fontWeight="bold">Virtual Short: V- ≈ V+ = Vin</text>

            {/* Inverting input (-) line & Node V- */}
            <line x1="170" y1="60" x2="110" y2="60" stroke="#1e293b" strokeWidth="2" />
            <circle cx="110" cy="60" r="3.5" fill="#dc2626" />
            <text x="110" y="50" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="8.5" fontWeight="bold">V-</text>

            {/* Resistor R1 to Ground - horizontally to the left (NEVER CROSSES Vin) */}
            <line x1="110" y1="60" x2="92" y2="60" stroke="#1e293b" strokeWidth="2" />
            <path d="M92 60 L86 54 L80 66 L74 54 L68 66 L62 54 L56 66 L52 60" stroke="#1e293b" strokeWidth="2" fill="none" />
            <text x="72" y="46" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="9" fontWeight="bold">R1</text>
            <line x1="52" y1="60" x2="30" y2="60" stroke="#1e293b" strokeWidth="2" />
            
            {/* Ground symbol for R1 */}
            <line x1="30" y1="48" x2="30" y2="72" stroke="#1e293b" strokeWidth="2" />
            <line x1="26" y1="52" x2="26" y2="68" stroke="#1e293b" strokeWidth="1.6" />
            <line x1="22" y1="56" x2="22" y2="64" stroke="#1e293b" strokeWidth="1.2" />
            <text x="16" y="63" textAnchor="end" fill="#64748b" stroke="none" fontSize="7.5" fontWeight="bold">GND</text>

            {/* Current I1 arrow */}
            <line x1="78" y1="72" x2="62" y2="72" stroke="#dc2626" strokeWidth="1.2" />
            <polygon points="62,72 67,69 67,75" fill="#dc2626" />
            <text x="70" y="82" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">I1 = Vin / R1</text>

            {/* Feedback Resistor Rf loop */}
            <line x1="110" y1="60" x2="110" y2="15" stroke="#1e293b" strokeWidth="2" />
            <line x1="110" y1="15" x2="170" y2="15" stroke="#1e293b" strokeWidth="2" />
            <path d="M170 15 L176 9 L184 21 L192 9 L200 21 L208 9 L216 21 L224 9 L230 15" stroke="#1e293b" strokeWidth="2" fill="none" />
            <text x="200" y="4" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="9" fontWeight="bold">Rf (Feedback Resistor)</text>
            <line x1="230" y1="15" x2="310" y2="15" stroke="#1e293b" strokeWidth="2" />
            <line x1="310" y1="15" x2="310" y2="90" stroke="#1e293b" strokeWidth="2" />

            {/* Op-Amp Output */}
            <line x1="270" y1="90" x2="370" y2="90" stroke="#2563eb" strokeWidth="2.5" />
            <circle cx="310" cy="90" r="3.5" fill="#1e293b" />
            <circle cx="370" cy="90" r="4" fill="#2563eb" />
            <text x="375" y="94" fill="#2563eb" stroke="none" fontSize="10.5" fontWeight="bold">Vout</text>

            {/* Zero phase shift waveforms */}
            <g transform="translate(10, 175)">
              <text x="0" y="0" fill="#16a34a" stroke="none" fontSize="7.8" fontWeight="bold">Vin: In-Phase Input</text>
              <path d="M0 16 Q15 2 30 16 T60 16" stroke="#16a34a" strokeWidth="1.8" fill="none" />
              <text x="150" y="0" fill="#2563eb" stroke="none" fontSize="7.8" fontWeight="bold">Vout: Amplified Sine (0° Phase Shift / Non-Inverted)</text>
              <path d="M150 16 Q170 -8 190 16 T230 16" stroke="#2563eb" strokeWidth="2.2" fill="none" />
            </g>
          </g>

          {/* RIGHT: Step-by-Step Mathematical Derivation */}
          <rect x="440" y="48" width="286" height="255" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="450" y="66" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">
            Step-by-Step Gain Derivation:
          </text>

          <g transform="translate(450, 78)">
            <rect x="0" y="0" width="266" height="42" rx="4" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="0.8" />
            <text x="8" y="14" fill="#1e40af" stroke="none" fontSize="8" fontWeight="bold">1. Virtual Short Principle:</text>
            <text x="8" y="26" fill="#1e3a8a" stroke="none" fontSize="7.5">• For infinite open-loop gain Aol → ∞:</text>
            <text x="8" y="37" fill="#1e3a8a" stroke="none" fontSize="7.5">• Vd = V+ - V- = 0  ⇒  V- = V+ = Vin</text>

            <rect x="0" y="48" width="266" height="52" rx="4" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="0.8" />
            <text x="8" y="62" fill="#166534" stroke="none" fontSize="8" fontWeight="bold">2. Current Through R1 (I1):</text>
            <text x="8" y="74" fill="#14532d" stroke="none" fontSize="7.5">• I1 = (V- - 0) / R1 = Vin / R1</text>
            <text x="8" y="86" fill="#14532d" stroke="none" fontSize="7.5">• Since Op-Amp input draw Iin = 0, current</text>
            <text x="8" y="96" fill="#14532d" stroke="none" fontSize="7.5">  through Rf is identical: If = I1.</text>

            <rect x="0" y="106" width="266" height="58" rx="4" fill="#fef2f2" stroke="#fecaca" strokeWidth="0.8" />
            <text x="8" y="120" fill="#991b1b" stroke="none" fontSize="8" fontWeight="bold">3. Output Voltage Formula:</text>
            <text x="8" y="132" fill="#7f1d1d" stroke="none" fontSize="7.8">• Vout = V- + If · Rf = Vin + (Vin / R1) · Rf</text>
            <text x="8" y="146" fill="#dc2626" stroke="none" fontSize="8.5" fontWeight="bold">• Vout = Vin · (1 + Rf / R1)</text>
            <text x="8" y="159" fill="#991b1b" stroke="none" fontSize="8.2" fontWeight="bold">• Voltage Gain: Av = Vout / Vin = 1 + (Rf / R1)</text>

            <rect x="0" y="170" width="266" height="48" rx="4" fill="#faf5ff" stroke="#e9d5ff" strokeWidth="0.8" />
            <text x="8" y="184" fill="#6b21a8" stroke="none" fontSize="8" fontWeight="bold">Key Attributes:</text>
            <text x="8" y="196" fill="#581c87" stroke="none" fontSize="7.5">• Minimum possible gain is unity (Av ≥ 1 for Rf=0).</text>
            <text x="8" y="208" fill="#581c87" stroke="none" fontSize="7.5">• Zero phase shift (output in-phase with input).</text>
          </g>
        </svg>
      );

    // 5. Op-Amp: Summing Amplifier (Adder)
    case 'opamp_summing':
    case 'opamp_summing_amplifier':
      return (
        <svg viewBox="0 0 740 320" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="740" height="320" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />

          {/* Header */}
          <text x="370" y="24" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="13.5" fontWeight="bold">
            Inverting Summing Amplifier (Analog Adder): Circuit &amp; Superposition Analysis
          </text>
          <text x="370" y="39" textAnchor="middle" fill="#64748b" stroke="none" fontSize="9.5">
            Weighted input summation at virtual ground node · Output Vout = - Rf · [ (V1/R1) + (V2/R2) + (V3/R3) ]
          </text>

          {/* LEFT: Circuit Schematic */}
          <rect x="14" y="48" width="415" height="255" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="24" y="66" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">
            3-Input Summing Amplifier Circuit:
          </text>

          <g transform="translate(30, 75)">
            {/* Op-Amp Triangle */}
            <polygon points="210,40 210,140 310,90" fill="#f8fafc" stroke="#2563eb" strokeWidth="2.5" />
            <text x="225" y="65" fill="#dc2626" stroke="none" fontSize="14" fontWeight="bold">-</text>
            <text x="225" y="125" fill="#16a34a" stroke="none" fontSize="14" fontWeight="bold">+</text>

            {/* Non-inverting input (+) tied to Ground */}
            <line x1="210" y1="120" x2="160" y2="120" stroke="#1e293b" strokeWidth="2" />
            <line x1="160" y1="120" x2="160" y2="145" stroke="#1e293b" strokeWidth="2" />
            <line x1="145" y1="145" x2="175" y2="145" stroke="#1e293b" strokeWidth="2.5" />
            <line x1="151" y1="149" x2="169" y2="149" stroke="#1e293b" strokeWidth="1.8" />
            <line x1="157" y1="153" x2="163" y2="153" stroke="#1e293b" strokeWidth="1.2" />
            <text x="160" y="165" textAnchor="middle" fill="#64748b" stroke="none" fontSize="7.5">V+ = 0V</text>

            {/* Virtual Ground Junction Node S */}
            <line x1="210" y1="60" x2="140" y2="60" stroke="#dc2626" strokeWidth="2" />
            <circle cx="140" cy="60" r="3.5" fill="#dc2626" />
            <text x="140" y="52" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">S (Virtual GND, 0V)</text>

            {/* Branch 1: V1 via R1 */}
            <line x1="20" y1="20" x2="60" y2="20" stroke="#1e293b" strokeWidth="2" />
            <circle cx="20" cy="20" r="3.5" fill="#2563eb" />
            <text x="12" y="24" textAnchor="end" fill="#2563eb" stroke="none" fontSize="9" fontWeight="bold">V1</text>
            <path d="M60 20 L66 14 L78 26 L90 14 L102 26 L114 14 L120 20" stroke="#1e293b" strokeWidth="2" />
            <text x="90" y="10" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="8" fontWeight="bold">R1</text>
            <line x1="120" y1="20" x2="140" y2="20" stroke="#1e293b" strokeWidth="2" />
            <line x1="140" y1="20" x2="140" y2="60" stroke="#1e293b" strokeWidth="2" />

            {/* Branch 2: V2 via R2 */}
            <line x1="20" y1="60" x2="60" y2="60" stroke="#1e293b" strokeWidth="2" />
            <circle cx="20" cy="60" r="3.5" fill="#2563eb" />
            <text x="12" y="64" textAnchor="end" fill="#2563eb" stroke="none" fontSize="9" fontWeight="bold">V2</text>
            <path d="M60 60 L66 54 L78 66 L90 54 L102 66 L114 54 L120 60" stroke="#1e293b" strokeWidth="2" />
            <text x="90" y="50" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="8" fontWeight="bold">R2</text>
            <line x1="120" y1="60" x2="140" y2="60" stroke="#1e293b" strokeWidth="2" />

            {/* Branch 3: V3 via R3 */}
            <line x1="20" y1="100" x2="60" y2="100" stroke="#1e293b" strokeWidth="2" />
            <circle cx="20" cy="100" r="3.5" fill="#2563eb" />
            <text x="12" y="104" textAnchor="end" fill="#2563eb" stroke="none" fontSize="9" fontWeight="bold">V3</text>
            <path d="M60 100 L66 94 L78 106 L90 94 L102 106 L114 94 L120 100" stroke="#1e293b" strokeWidth="2" />
            <text x="90" y="90" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="8" fontWeight="bold">R3</text>
            <line x1="120" y1="100" x2="140" y2="100" stroke="#1e293b" strokeWidth="2" />
            <line x1="140" y1="100" x2="140" y2="60" stroke="#1e293b" strokeWidth="2" />

            {/* Feedback Resistor Rf Loop */}
            <line x1="140" y1="60" x2="140" y2="-10" stroke="#1e293b" strokeWidth="2" />
            <line x1="140" y1="-10" x2="220" y2="-10" stroke="#1e293b" strokeWidth="2" />
            <path d="M220 -10 L226 -16 L238 -4 L250 -16 L262 -4 L274 -16 L280 -10" stroke="#1e293b" strokeWidth="2" />
            <text x="250" y="-22" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="8.5" fontWeight="bold">Rf (Feedback)</text>
            <line x1="280" y1="-10" x2="350" y2="-10" stroke="#1e293b" strokeWidth="2" />
            <line x1="350" y1="-10" x2="350" y2="90" stroke="#1e293b" strokeWidth="2" />

            {/* Output */}
            <line x1="310" y1="90" x2="385" y2="90" stroke="#2563eb" strokeWidth="2.5" />
            <circle cx="350" cy="90" r="3.5" fill="#1e293b" />
            <circle cx="385" cy="90" r="4" fill="#2563eb" />
            <text x="390" y="94" fill="#2563eb" stroke="none" fontSize="10" fontWeight="bold">Vout</text>
          </g>

          {/* RIGHT: Formulas & Applications */}
          <rect x="440" y="48" width="286" height="255" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="450" y="66" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">
            Kirchhoff's Current Law (KCL) Analysis:
          </text>

          <g transform="translate(450, 78)">
            <rect x="0" y="0" width="266" height="52" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.8" />
            <text x="8" y="14" fill="#0f172a" stroke="none" fontSize="8" fontWeight="bold">1. KCL at Virtual Ground Node S (Vs = 0):</text>
            <text x="8" y="27" fill="#334155" stroke="none" fontSize="7.5">• I1 + I2 + I3 + If = 0  (since I_in = 0)</text>
            <text x="8" y="41" fill="#334155" stroke="none" fontSize="7.5">• (V1/R1) + (V2/R2) + (V3/R3) + (Vout/Rf) = 0</text>

            <rect x="0" y="58" width="266" height="52" rx="4" fill="#fef2f2" stroke="#fecaca" strokeWidth="0.8" />
            <text x="8" y="72" fill="#991b1b" stroke="none" fontSize="8" fontWeight="bold">2. General Output Formula:</text>
            <text x="8" y="87" fill="#dc2626" stroke="none" fontSize="8.5" fontWeight="bold">Vout = - Rf · [ (V1/R1) + (V2/R2) + (V3/R3) ]</text>
            <text x="8" y="100" fill="#7f1d1d" stroke="none" fontSize="7.5">• Each input voltage is weighted by ratio (Rf / Rk).</text>

            <rect x="0" y="116" width="266" height="90" rx="4" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="0.8" />
            <text x="8" y="130" fill="#1e40af" stroke="none" fontSize="8" fontWeight="bold">3. Special Circuit Configurations:</text>
            <text x="8" y="143" fill="#1e3a8a" stroke="none" fontSize="7.5">• Equal Resistors (R1 = R2 = R3 = R):</text>
            <text x="16" y="155" fill="#1e3a8a" stroke="none" fontSize="7.5">Vout = - (Rf / R) · (V1 + V2 + V3)</text>
            <text x="8" y="169" fill="#1e3a8a" stroke="none" fontSize="7.5">• Inverting Adder (Rf = R): Vout = - (V1 + V2 + V3)</text>
            <text x="8" y="183" fill="#1e3a8a" stroke="none" fontSize="7.5">• Averaging Amplifier (Rf = R/3):</text>
            <text x="16" y="196" fill="#1e3a8a" stroke="none" fontSize="7.5">Vout = - (V1 + V2 + V3) / 3</text>
          </g>
        </svg>
      );

    // 5. Op-Amp: Voltage Follower (Unity Gain Buffer)
    case 'opamp_voltage_follower':
    case 'voltage_follower':
    case 'opamp_buffer':
      return (
        <svg viewBox="0 0 740 320" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="740" height="320" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />

          {/* Header */}
          <text x="370" y="24" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="13.5" fontWeight="bold">
            Op-Amp Voltage Follower (Unity Gain Buffer): Circuit &amp; Impedance Isolation
          </text>
          <text x="370" y="39" textAnchor="middle" fill="#64748b" stroke="none" fontSize="9.5">
            100% Negative Feedback (Rf = 0, R1 = ∞) · Unity Gain Av = 1 · Infinite Zin &amp; Zero Zout
          </text>

          {/* LEFT: Circuit Schematic */}
          <rect x="14" y="48" width="415" height="255" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="24" y="66" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">
            Voltage Follower Circuit Schematic:
          </text>

          <g transform="translate(30, 80)">
            {/* Op-Amp Triangle */}
            <polygon points="170,40 170,140 270,90" fill="#f8fafc" stroke="#2563eb" strokeWidth="2.5" />
            <text x="185" y="65" fill="#dc2626" stroke="none" fontSize="14" fontWeight="bold">-</text>
            <text x="185" y="125" fill="#16a34a" stroke="none" fontSize="14" fontWeight="bold">+</text>

            {/* Non-inverting input terminal (+) receiving Vin */}
            <line x1="30" y1="120" x2="170" y2="120" stroke="#16a34a" strokeWidth="2.5" />
            <circle cx="30" cy="120" r="4" fill="#16a34a" />
            <text x="20" y="124" textAnchor="end" fill="#16a34a" stroke="none" fontSize="10.5" fontWeight="bold">Vin (+)</text>

            {/* Direct 100% Negative Feedback Loop (Rf = 0) */}
            <line x1="170" y1="60" x2="130" y2="60" stroke="#1e293b" strokeWidth="2" />
            <line x1="130" y1="60" x2="130" y2="20" stroke="#1e293b" strokeWidth="2" />
            <line x1="130" y1="20" x2="310" y2="20" stroke="#1e293b" strokeWidth="2" />
            <line x1="310" y1="20" x2="310" y2="90" stroke="#1e293b" strokeWidth="2" />
            <text x="220" y="12" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="8.5" fontWeight="bold">
              Direct Zero-Ohm Feedback Link (Rf = 0 Ω)
            </text>

            {/* Output terminal */}
            <line x1="270" y1="90" x2="370" y2="90" stroke="#2563eb" strokeWidth="2.5" />
            <circle cx="310" cy="90" r="3.5" fill="#1e293b" />
            <circle cx="370" cy="90" r="4" fill="#2563eb" />
            <text x="375" y="94" fill="#2563eb" stroke="none" fontSize="10.5" fontWeight="bold">Vout</text>

            {/* Waveform Comparison */}
            <g transform="translate(10, 175)">
              <text x="0" y="0" fill="#16a34a" stroke="none" fontSize="7.5" fontWeight="bold">Vin (Input Waveform)</text>
              <path d="M0 15 Q20 -5 40 15 T80 15" stroke="#16a34a" strokeWidth="1.8" fill="none" />
              <text x="180" y="0" fill="#2563eb" stroke="none" fontSize="7.5" fontWeight="bold">Vout = Vin (Exact Replica, Zero Loss)</text>
              <path d="M180 15 Q200 -5 220 15 T260 15" stroke="#2563eb" strokeWidth="1.8" fill="none" />
            </g>
          </g>

          {/* RIGHT: Operational Principles & Advantages */}
          <rect x="440" y="48" width="286" height="255" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="450" y="66" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">
            Buffer Action &amp; Mathematical Analysis:
          </text>

          <g transform="translate(450, 78)">
            <rect x="0" y="0" width="266" height="48" rx="4" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="0.8" />
            <text x="8" y="14" fill="#1e40af" stroke="none" fontSize="8" fontWeight="bold">1. Unity Voltage Gain Derivation:</text>
            <text x="8" y="26" fill="#1e3a8a" stroke="none" fontSize="7.5">• From non-inverting gain: Av = 1 + (Rf / R1)</text>
            <text x="8" y="38" fill="#1e3a8a" stroke="none" fontSize="7.5">• Substituting Rf = 0 and R1 = ∞: Av = 1 + 0 = 1</text>
            <text x="8" y="49" fill="#1e40af" stroke="none" fontSize="8" fontWeight="bold">• Output Voltage: Vout = Vin</text>

            <rect x="0" y="56" width="266" height="52" rx="4" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="0.8" />
            <text x="8" y="70" fill="#166534" stroke="none" fontSize="8" fontWeight="bold">2. Ultra-High Input Impedance (Zin):</text>
            <text x="8" y="82" fill="#14532d" stroke="none" fontSize="7.5">• Zin ≈ (1 + Aol) · R_diff → ∞ (&gt; 10¹² Ω for FET input)</text>
            <text x="8" y="94" fill="#14532d" stroke="none" fontSize="7.5">• Draws virtually ZERO current from source</text>
            <text x="8" y="104" fill="#14532d" stroke="none" fontSize="7.5">• Completely prevents loading of sensitive sensors</text>

            <rect x="0" y="114" width="266" height="48" rx="4" fill="#fef2f2" stroke="#fecaca" strokeWidth="0.8" />
            <text x="8" y="128" fill="#991b1b" stroke="none" fontSize="8" fontWeight="bold">3. Near-Zero Output Impedance (Zout):</text>
            <text x="8" y="140" fill="#7f1d1d" stroke="none" fontSize="7.5">• Zout = Ro / (1 + Aol) → 0 (&lt; 0.01 Ω)</text>
            <text x="8" y="152" fill="#7f1d1d" stroke="none" fontSize="7.5">• Can drive heavy low-impedance cables without drop</text>

            <rect x="0" y="168" width="266" height="38" rx="4" fill="#faf5ff" stroke="#e9d5ff" strokeWidth="0.8" />
            <text x="8" y="181" fill="#6b21a8" stroke="none" fontSize="8" fontWeight="bold">Primary Application:</text>
            <text x="8" y="193" fill="#581c87" stroke="none" fontSize="7.5">• Impedance-matching isolation buffer between stages.</text>
          </g>
        </svg>
      );

    // 7. Electronic Communication: Concept of Frequency Modulation (FM)
    case 'fm_concept':
    case 'fm_modulation':
      return (
        <svg viewBox="0 0 740 340" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="740" height="340" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />

          {/* Header */}
          <text x="370" y="24" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="13.5" fontWeight="bold">
            Frequency Modulation (FM) Principle: Instantaneous Frequency &amp; Modulation Index
          </text>
          <text x="370" y="39" textAnchor="middle" fill="#64748b" stroke="none" fontSize="9.5">
            Instantaneous frequency fi(t) = fc + kf · m(t) · Constant envelope (Ac) · Carson's Bandwidth BT = 2(Δf + fm)
          </text>

          {/* LEFT: FM Waveforms */}
          <rect x="14" y="48" width="415" height="280" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="24" y="66" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">
            FM Signal Generation Waveforms:
          </text>

          <g transform="translate(30, 75)">
            {/* 1. Modulating Message Signal m(t) */}
            <text x="0" y="12" fill="#2563eb" stroke="none" fontSize="8.5" fontWeight="bold">
              1. Modulating Signal m(t) = Am · cos(2π fm t) (Audio Message):
            </text>
            <line x1="0" y1="35" x2="370" y2="35" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M0 35 Q46 10 92 35 T185 35 T277 35 T370 35" stroke="#2563eb" strokeWidth="2.2" fill="none" />
            <text x="92" y="16" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="7.5">+Am (Peak)</text>
            <text x="185" y="58" textAnchor="middle" fill="#2563eb" stroke="none" fontSize="7.5">-Am (Valley)</text>

            {/* 2. Unmodulated Carrier c(t) */}
            <text x="0" y="75" fill="#64748b" stroke="none" fontSize="8.5" fontWeight="bold">
              2. High-Frequency Carrier c(t) = Ac · cos(2π fc t) (Constant fc):
            </text>
            <line x1="0" y1="98" x2="370" y2="98" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
            {/* Rapid sine waves */}
            <path d="M0 98 Q7 83 14 98 T28 98 T42 98 T56 98 T70 98 T84 98 T98 98 T112 98 T126 98 T140 98 T154 98 T168 98 T182 98 T196 98 T210 98 T224 98 T238 98 T252 98 T266 98 T280 98 T294 98 T308 98 T322 98 T336 98 T350 98 T364 98 T370 98" stroke="#64748b" strokeWidth="1.2" fill="none" />

            {/* 3. Frequency Modulated Wave s(t) */}
            <text x="0" y="138" fill="#059669" stroke="none" fontSize="8.5" fontWeight="bold">
              3. Frequency Modulated Wave s(t) (Constant Amplitude Ac, Variable Frequency):
            </text>
            <line x1="0" y1="165" x2="370" y2="165" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
            {/* Amplitude boundary rails showing constant envelope */}
            <line x1="0" y1="145" x2="370" y2="145" stroke="#e2e8f0" strokeWidth="1.2" strokeDasharray="2 2" />
            <line x1="0" y1="185" x2="370" y2="185" stroke="#e2e8f0" strokeWidth="1.2" strokeDasharray="2 2" />
            <text x="375" y="148" fill="#64748b" stroke="none" fontSize="7">+Ac</text>
            <text x="375" y="188" fill="#64748b" stroke="none" fontSize="7">-Ac</text>

            {/* FM wave: High frequency (compressed) when m(t) is positive, low frequency (expanded) when m(t) is negative */}
            {/* Compressed section 0-92 (positive m(t)) */}
            <path d="M0 165 Q4 145 8 165 T16 165 T24 165 T32 165 T40 165 T48 165 T56 165 T64 165 T72 165 T80 165 T88 165 
                     Q100 145 112 165 T136 165 T160 165 T185 165 
                     Q192 145 200 165 T208 165 T216 165 T224 165 T232 165 T240 165 T248 165 T256 165 T264 165 T272 165 
                     Q285 145 298 165 T322 165 T346 165 T370 165" 
                  stroke="#059669" strokeWidth="2" fill="none" />

            {/* Annotation callouts under FM wave */}
            <rect x="20" y="195" width="100" height="28" rx="3" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="0.8" />
            <text x="70" y="207" textAnchor="middle" fill="#065f46" stroke="none" fontSize="7.5" fontWeight="bold">High Frequency</text>
            <text x="70" y="217" textAnchor="middle" fill="#047857" stroke="none" fontSize="7">fmax = fc + Δf</text>

            <rect x="135" y="195" width="100" height="28" rx="3" fill="#fef2f2" stroke="#fecaca" strokeWidth="0.8" />
            <text x="185" y="207" textAnchor="middle" fill="#991b1b" stroke="none" fontSize="7.5" fontWeight="bold">Low Frequency</text>
            <text x="185" y="217" textAnchor="middle" fill="#7f1d1d" stroke="none" fontSize="7">fmin = fc - Δf</text>

            <rect x="250" y="195" width="100" height="28" rx="3" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="0.8" />
            <text x="300" y="207" textAnchor="middle" fill="#065f46" stroke="none" fontSize="7.5" fontWeight="bold">High Frequency</text>
            <text x="300" y="217" textAnchor="middle" fill="#047857" stroke="none" fontSize="7">fmax = fc + Δf</text>
          </g>

          {/* RIGHT: Mathematical Concept & Carson's Rule */}
          <rect x="440" y="48" width="286" height="280" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="450" y="66" fill="#1e3a8a" stroke="none" fontSize="10.5" fontWeight="bold">
            FM Mathematical Formulation:
          </text>

          <g transform="translate(450, 78)">
            <rect x="0" y="0" width="266" height="52" rx="4" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="0.8" />
            <text x="8" y="14" fill="#1e40af" stroke="none" fontSize="8" fontWeight="bold">1. Instantaneous Frequency fi(t):</text>
            <text x="8" y="27" fill="#1e3a8a" stroke="none" fontSize="7.8">• fi(t) = fc + kf · m(t)</text>
            <text x="8" y="39" fill="#1e3a8a" stroke="none" fontSize="7.5">• Frequency Sensitivity: kf (Hz / Volt)</text>
            <text x="8" y="49" fill="#1e3a8a" stroke="none" fontSize="7.5">• Peak Deviation: Δf = kf · Am</text>

            <rect x="0" y="58" width="266" height="56" rx="4" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="0.8" />
            <text x="8" y="72" fill="#166534" stroke="none" fontSize="8" fontWeight="bold">2. Modulation Index (β):</text>
            <text x="8" y="85" fill="#15803d" stroke="none" fontSize="8.5" fontWeight="bold">• β = Δf / fm  (Dimensionless ratio)</text>
            <text x="8" y="98" fill="#14532d" stroke="none" fontSize="7.5">• Narrowband FM (NBFM): β &lt; 1 (like AM)</text>
            <text x="8" y="108" fill="#14532d" stroke="none" fontSize="7.5">• Wideband FM (WBFM): β &gt;&gt; 1 (Broadcast FM, β ~ 5)</text>

            <rect x="0" y="120" width="266" height="52" rx="4" fill="#fef2f2" stroke="#fecaca" strokeWidth="0.8" />
            <text x="8" y="134" fill="#991b1b" stroke="none" fontSize="8" fontWeight="bold">3. Carson's Rule for FM Bandwidth:</text>
            <text x="8" y="148" fill="#dc2626" stroke="none" fontSize="8.5" fontWeight="bold">• BT = 2 · (Δf + fm) = 2 · fm · (β + 1)</text>
            <text x="8" y="161" fill="#7f1d1d" stroke="none" fontSize="7.5">• Accounts for &gt;98% of total transmitted signal power.</text>

            <rect x="0" y="178" width="266" height="58" rx="4" fill="#faf5ff" stroke="#e9d5ff" strokeWidth="0.8" />
            <text x="8" y="192" fill="#6b21a8" stroke="none" fontSize="8" fontWeight="bold">Key Advantages of FM over AM:</text>
            <text x="8" y="204" fill="#581c87" stroke="none" fontSize="7.5">• Superior Noise Immunity: Noise distorts amplitude, which</text>
            <text x="8" y="215" fill="#581c87" stroke="none" fontSize="7.5">  is stripped off by limiters without affecting frequency.</text>
            <text x="8" y="226" fill="#581c87" stroke="none" fontSize="7.5">• Constant power output allows high-efficiency Class-C amplifiers.</text>
          </g>
        </svg>
      );

    default:
      return null;
  }
};
