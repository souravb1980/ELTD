import React from 'react';

// 1. Number Systems & Binary Arithmetic SVG
export const NumberSystemsSvg: React.FC<{ className?: string }> = ({ className = "w-full max-w-3xl h-auto" }) => (
  <svg viewBox="0 0 740 340" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="740" height="340" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
    <rect x="0" y="0" width="740" height="38" rx="10" fill="#0f172a" />
    <text x="20" y="24" fill="#38bdf8" stroke="none" fontSize="13" fontWeight="bold">Number Systems &amp; Binary Arithmetic (1's &amp; 2's Complement)</text>
    <text x="720" y="24" textAnchor="end" fill="#94a3b8" stroke="none" fontSize="10">Base 2 · Base 10 · Base 16</text>

    {/* Section 1: Number Systems Radix Table */}
    <rect x="15" y="48" width="345" height="130" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
    <text x="25" y="66" fill="#0f172a" stroke="none" fontSize="11" fontWeight="bold">1. Radix, Base &amp; Place Value Comparison</text>
    
    {/* Table headers */}
    <rect x="25" y="74" width="325" height="20" rx="3" fill="#f1f5f9" stroke="none" />
    <text x="32" y="88" fill="#475569" stroke="none" fontSize="9" fontWeight="bold">System</text>
    <text x="95" y="88" fill="#475569" stroke="none" fontSize="9" fontWeight="bold">Base (r)</text>
    <text x="145" y="88" fill="#475569" stroke="none" fontSize="9" fontWeight="bold">Allowed Digits</text>
    <text x="270" y="88" fill="#475569" stroke="none" fontSize="9" fontWeight="bold">Example</text>

    <text x="32" y="108" fill="#0369a1" stroke="none" fontSize="8.5" fontWeight="bold">Binary</text>
    <text x="95" y="108" fill="#334155" stroke="none" fontSize="8.5">2</text>
    <text x="145" y="108" fill="#334155" stroke="none" fontSize="8.5">{`{0, 1}`}</text>
    <text x="270" y="108" fill="#0369a1" stroke="none" fontSize="8.5" fontWeight="bold">(110101.11)₂</text>

    <text x="32" y="128" fill="#b45309" stroke="none" fontSize="8.5" fontWeight="bold">Decimal</text>
    <text x="95" y="128" fill="#334155" stroke="none" fontSize="8.5">10</text>
    <text x="145" y="128" fill="#334155" stroke="none" fontSize="8.5">{`{0, 1, 2, ..., 9}`}</text>
    <text x="270" y="128" fill="#b45309" stroke="none" fontSize="8.5" fontWeight="bold">(53.75)₁₀</text>

    <text x="32" y="148" fill="#7c3aed" stroke="none" fontSize="8.5" fontWeight="bold">Hex</text>
    <text x="95" y="148" fill="#334155" stroke="none" fontSize="8.5">16</text>
    <text x="145" y="148" fill="#334155" stroke="none" fontSize="8.5">{`{0-9, A-F (A=10..F=15)}`}</text>
    <text x="270" y="148" fill="#7c3aed" stroke="none" fontSize="8.5" fontWeight="bold">(35.C)₁₆</text>

    <text x="25" y="168" fill="#64748b" stroke="none" fontSize="8">Positional Weight: Value = Σ di · r^i  (Integer: r⁰, r¹, r²... Fractional: r⁻¹, r⁻²...)</text>

    {/* Section 2: Conversions Step-by-Step */}
    <rect x="375" y="48" width="350" height="130" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
    <text x="385" y="66" fill="#0f172a" stroke="none" fontSize="11" fontWeight="bold">2. Inter-System Conversion Methods</text>

    <rect x="385" y="74" width="330" height="46" rx="4" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="0.8" />
    <text x="392" y="88" fill="#1e40af" stroke="none" fontSize="8.5" fontWeight="bold">• Binary to Decimal Conversion (Positional Expansion):</text>
    <text x="392" y="100" fill="#1e3a8a" stroke="none" fontSize="8">(110101.11)₂ = 1·2⁵ + 1·2⁴ + 0·2³ + 1·2² + 0·2¹ + 1·2⁰ + 1·2⁻¹ + 1·2⁻²</text>
    <text x="392" y="112" fill="#1e3a8a" stroke="none" fontSize="8">= 32 + 16 + 0 + 4 + 0 + 1 + 0.5 + 0.25 = <tspan fontWeight="bold" fill="#0284c7">53.75₁₀</tspan></text>

    <rect x="385" y="124" width="330" height="48" rx="4" fill="#faf5ff" stroke="#e9d5ff" strokeWidth="0.8" />
    <text x="392" y="138" fill="#6b21a8" stroke="none" fontSize="8.5" fontWeight="bold">• Binary &lt;-&gt; Hexadecimal Conversion (4-bit Nibble Grouping):</text>
    <text x="392" y="150" fill="#581c87" stroke="none" fontSize="8">Group by 4 bits from radix point: (0011 0101 . 1100)₂</text>
    <text x="392" y="162" fill="#581c87" stroke="none" fontSize="8">Nibble lookup: 0011₂ = 3₁₆, 0101₂ = 5₁₆, 1100₂ = C₁₆ ⇒ <tspan fontWeight="bold" fill="#7c3aed">(35.C)₁₆</tspan></text>

    {/* Section 3: Binary Addition Rules & Example */}
    <rect x="15" y="188" width="345" height="140" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
    <text x="25" y="206" fill="#0f172a" stroke="none" fontSize="11" fontWeight="bold">3. Binary Addition Rules &amp; Multi-Bit Addition</text>
    
    <g transform="translate(25, 214)">
      <rect x="0" y="0" width="150" height="74" rx="4" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="0.8" />
      <text x="6" y="14" fill="#166534" stroke="none" fontSize="8" fontWeight="bold">Fundamental Rules:</text>
      <text x="6" y="27" fill="#15803d" stroke="none" fontSize="8">0 + 0 = 0 (Carry 0)</text>
      <text x="6" y="40" fill="#15803d" stroke="none" fontSize="8">0 + 1 = 1 (Carry 0)</text>
      <text x="6" y="53" fill="#15803d" stroke="none" fontSize="8">1 + 0 = 1 (Carry 0)</text>
      <text x="6" y="66" fill="#15803d" stroke="none" fontSize="8">1 + 1 = 0 (Carry 1) | 1+1+1=1 (C=1)</text>

      <rect x="160" y="0" width="165" height="74" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.8" />
      <text x="166" y="14" fill="#0f172a" stroke="none" fontSize="8" fontWeight="bold">Worked Example:</text>
      <text x="166" y="27" fill="#dc2626" stroke="none" fontSize="7.5 font-mono">Carry:  1 1 1 1 0</text>
      <text x="166" y="40" fill="#0f172a" stroke="none" fontSize="8 font-mono">         1 0 1 1 0 1  (45₁₀)</text>
      <text x="166" y="52" fill="#0f172a" stroke="none" fontSize="8 font-mono">      +  0 1 1 0 1 1  (27₁₀)</text>
      <line x1="166" y1="56" x2="315" y2="56" stroke="#94a3b8" />
      <text x="166" y="68" fill="#16a34a" stroke="none" fontSize="8.5" fontWeight="bold" fontFamily="monospace">Sum:   1 0 0 1 0 0  (72₁₀)</text>
    </g>
    <text x="25" y="318" fill="#64748b" stroke="none" fontSize="8">Multi-bit adders propagate carry output Cin → Cout stage-by-stage.</text>

    {/* Section 4: 1's & 2's Complement Subtraction */}
    <rect x="375" y="188" width="350" height="140" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
    <text x="385" y="206" fill="#0f172a" stroke="none" fontSize="11" fontWeight="bold">4. Binary Subtraction: 1's &amp; 2's Complement</text>

    <g transform="translate(385, 214)">
      <rect x="0" y="0" width="330" height="50" rx="4" fill="#fffbeb" stroke="#fde68a" strokeWidth="0.8" />
      <text x="8" y="14" fill="#92400e" stroke="none" fontSize="8" fontWeight="bold">1's Complement Method (A - B):</text>
      <text x="8" y="26" fill="#78350f" stroke="none" fontSize="7.5">1. Take 1's complement of B (invert 0↔1). 2. Add to A.</text>
      <text x="8" y="38" fill="#78350f" stroke="none" fontSize="7.5">3. If end-around carry occurs, ADD 1 to LSB (result is positive).</text>
      <text x="8" y="47" fill="#78350f" stroke="none" fontSize="7.5">4. If no carry, take 1's complement of sum and affix negative (-) sign.</text>

      <rect x="0" y="55" width="330" height="56" rx="4" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="0.8" />
      <text x="8" y="69" fill="#065f46" stroke="none" fontSize="8" fontWeight="bold">2's Complement Method (A - B = A + [2's comp of B]):</text>
      <text x="8" y="81" fill="#047857" stroke="none" fontSize="7.5">Rule: 2's Complement = (1's Complement + 1).</text>
      <text x="8" y="93" fill="#047857" stroke="none" fontSize="7.5">Example: 1101₂ (13₁₀) - 0110₂ (6₁₀): 2's comp of 0110 is 1001 + 1 = 1010₂.</text>
      <text x="8" y="105" fill="#047857" stroke="none" fontSize="7.5">Sum: 1101 + 1010 = <tspan fontWeight="bold" fill="#059669">1 0111₂</tspan> → Discard end carry → <tspan fontWeight="bold" fill="#059669">0111₂ (+7₁₀)</tspan>.</text>
    </g>
  </svg>
);

// 2. Logic Gates (AND, OR, NOT, NAND, NOR, XOR, XNOR) Truth Tables & Expressions
export const LogicGatesOverviewSvg: React.FC<{ className?: string }> = ({ className = "w-full max-w-3xl h-auto" }) => (
  <svg viewBox="0 0 740 370" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="740" height="370" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
    <rect x="0" y="0" width="740" height="36" rx="10" fill="#0f172a" />
    <text x="20" y="23" fill="#38bdf8" stroke="none" fontSize="13" fontWeight="bold">Complete Logic Gates Matrix: Symbols, Boolean Expressions &amp; Truth Tables</text>
    <text x="720" y="23" textAnchor="end" fill="#94a3b8" stroke="none" fontSize="10">IEEE Std 91 / ANSI Y32.14</text>

    {/* Row 1: Basic Gates: AND, OR, NOT */}
    {/* AND GATE */}
    <g transform="translate(15, 46)">
      <rect width="225" height="150" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="0" y="0" width="225" height="24" rx="6" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="0.8" />
      <text x="10" y="16" fill="#0369a1" stroke="none" fontSize="10" fontWeight="bold">AND Gate (7408)</text>
      <text x="215" y="16" textAnchor="end" fill="#0284c7" stroke="none" fontSize="10" fontWeight="bold">Y = A · B</text>
      
      {/* Symbol */}
      <g transform="translate(10, 32)">
        <line x1="5" y1="18" x2="25" y2="18" stroke="#1e293b" />
        <line x1="5" y1="38" x2="25" y2="38" stroke="#1e293b" />
        <path d="M25 8 L45 8 C60 8 70 18 70 28 C70 38 60 48 45 48 L25 48 Z" fill="#f0f9ff" stroke="#0284c7" strokeWidth="1.8" />
        <line x1="70" y1="28" x2="90" y2="28" stroke="#1e293b" strokeWidth="1.8" />
        <text x="2" y="16" fill="#64748b" stroke="none" fontSize="7.5">A</text>
        <text x="2" y="42" fill="#64748b" stroke="none" fontSize="7.5">B</text>
        <text x="92" y="31" fill="#0284c7" stroke="none" fontSize="8" fontWeight="bold">Y</text>
      </g>

      {/* Truth Table */}
      <g transform="translate(115, 30)">
        <rect width="98" height="60" rx="3" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />
        <line x1="0" y1="15" x2="98" y2="15" stroke="#cbd5e1" />
        <line x1="32" y1="0" x2="32" y2="60" stroke="#cbd5e1" />
        <line x1="64" y1="0" x2="64" y2="60" stroke="#cbd5e1" />
        <text x="16" y="11" textAnchor="middle" fill="#475569" stroke="none" fontSize="8" fontWeight="bold">A</text>
        <text x="48" y="11" textAnchor="middle" fill="#475569" stroke="none" fontSize="8" fontWeight="bold">B</text>
        <text x="81" y="11" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="8" fontWeight="bold">Y</text>
        <text x="16" y="24" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">0</text><text x="48" y="24" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">0</text><text x="81" y="24" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="7.5" fontWeight="bold">0</text>
        <text x="16" y="35" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">0</text><text x="48" y="35" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">1</text><text x="81" y="35" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="7.5" fontWeight="bold">0</text>
        <text x="16" y="46" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">1</text><text x="48" y="46" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">0</text><text x="81" y="46" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="7.5" fontWeight="bold">0</text>
        <text x="16" y="57" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">1</text><text x="48" y="57" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">1</text><text x="81" y="57" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="7.5" fontWeight="bold">1</text>
      </g>
      <text x="10" y="105" fill="#475569" stroke="none" fontSize="7.8">Output is HIGH (1) if and only if ALL inputs are HIGH.</text>
      <text x="10" y="118" fill="#64748b" stroke="none" fontSize="7">Logical Multiplication · Series Switch Analogy</text>
      <text x="10" y="130" fill="#0369a1" stroke="none" fontSize="7" fontWeight="bold">K-Map Minterm: m₃</text>
    </g>

    {/* OR GATE */}
    <g transform="translate(255, 46)">
      <rect width="225" height="150" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="0" y="0" width="225" height="24" rx="6" fill="#fef2f2" stroke="#fecaca" strokeWidth="0.8" />
      <text x="10" y="16" fill="#b91c1c" stroke="none" fontSize="10" fontWeight="bold">OR Gate (7432)</text>
      <text x="215" y="16" textAnchor="end" fill="#dc2626" stroke="none" fontSize="10" fontWeight="bold">Y = A + B</text>

      {/* Symbol */}
      <g transform="translate(10, 32)">
        <line x1="5" y1="18" x2="25" y2="18" stroke="#1e293b" />
        <line x1="5" y1="38" x2="25" y2="38" stroke="#1e293b" />
        <path d="M22 8 Q33 28 22 48 C48 46 62 36 72 28 C62 20 48 10 22 8 Z" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.8" />
        <line x1="72" y1="28" x2="90" y2="28" stroke="#1e293b" strokeWidth="1.8" />
        <text x="2" y="16" fill="#64748b" stroke="none" fontSize="7.5">A</text>
        <text x="2" y="42" fill="#64748b" stroke="none" fontSize="7.5">B</text>
        <text x="92" y="31" fill="#dc2626" stroke="none" fontSize="8" fontWeight="bold">Y</text>
      </g>

      {/* Truth Table */}
      <g transform="translate(115, 30)">
        <rect width="98" height="60" rx="3" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />
        <line x1="0" y1="15" x2="98" y2="15" stroke="#cbd5e1" />
        <line x1="32" y1="0" x2="32" y2="60" stroke="#cbd5e1" />
        <line x1="64" y1="0" x2="64" y2="60" stroke="#cbd5e1" />
        <text x="16" y="11" textAnchor="middle" fill="#475569" stroke="none" fontSize="8" fontWeight="bold">A</text>
        <text x="48" y="11" textAnchor="middle" fill="#475569" stroke="none" fontSize="8" fontWeight="bold">B</text>
        <text x="81" y="11" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="8" fontWeight="bold">Y</text>
        <text x="16" y="24" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">0</text><text x="48" y="24" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">0</text><text x="81" y="24" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">0</text>
        <text x="16" y="35" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">0</text><text x="48" y="35" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">1</text><text x="81" y="35" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">1</text>
        <text x="16" y="46" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">1</text><text x="48" y="46" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">0</text><text x="81" y="46" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">1</text>
        <text x="16" y="57" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">1</text><text x="48" y="57" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">1</text><text x="81" y="57" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">1</text>
      </g>
      <text x="10" y="105" fill="#475569" stroke="none" fontSize="7.8">Output is HIGH (1) if AT LEAST ONE input is HIGH.</text>
      <text x="10" y="118" fill="#64748b" stroke="none" fontSize="7">Logical Addition · Parallel Switch Analogy</text>
      <text x="10" y="130" fill="#b91c1c" stroke="none" fontSize="7" fontWeight="bold">K-Map Minterms: m₁ + m₂ + m₃</text>
    </g>

    {/* NOT GATE */}
    <g transform="translate(495, 46)">
      <rect width="230" height="150" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="0" y="0" width="230" height="24" rx="6" fill="#fffbeb" stroke="#fde68a" strokeWidth="0.8" />
      <text x="10" y="16" fill="#b45309" stroke="none" fontSize="10" fontWeight="bold">NOT Gate (7404)</text>
      <text x="220" y="16" textAnchor="end" fill="#d97706" stroke="none" fontSize="10" fontWeight="bold">Y = A' = Ā</text>

      {/* Symbol */}
      <g transform="translate(10, 32)">
        <line x1="5" y1="28" x2="25" y2="28" stroke="#1e293b" />
        <polygon points="25,12 25,44 55,28" fill="#fffbeb" stroke="#d97706" strokeWidth="1.8" />
        <circle cx="60" cy="28" r="4" fill="#ffffff" stroke="#d97706" strokeWidth="1.5" />
        <line x1="64" y1="28" x2="88" y2="28" stroke="#1e293b" strokeWidth="1.8" />
        <text x="2" y="26" fill="#64748b" stroke="none" fontSize="7.5">A</text>
        <text x="90" y="31" fill="#d97706" stroke="none" fontSize="8" fontWeight="bold">Y</text>
      </g>

      {/* Truth Table */}
      <g transform="translate(125, 30)">
        <rect width="85" height="42" rx="3" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />
        <line x1="0" y1="15" x2="85" y2="15" stroke="#cbd5e1" />
        <line x1="42" y1="0" x2="42" y2="42" stroke="#cbd5e1" />
        <text x="21" y="11" textAnchor="middle" fill="#475569" stroke="none" fontSize="8" fontWeight="bold">A</text>
        <text x="63" y="11" textAnchor="middle" fill="#d97706" stroke="none" fontSize="8" fontWeight="bold">Y = Ā</text>
        <text x="21" y="25" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">0</text><text x="63" y="25" textAnchor="middle" fill="#d97706" stroke="none" fontSize="7.5" fontWeight="bold">1</text>
        <text x="21" y="36" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">1</text><text x="63" y="36" textAnchor="middle" fill="#d97706" stroke="none" fontSize="7.5" fontWeight="bold">0</text>
      </g>
      <text x="10" y="105" fill="#475569" stroke="none" fontSize="7.8">Inverts input state: HIGH becomes LOW, LOW becomes HIGH.</text>
      <text x="10" y="118" fill="#64748b" stroke="none" fontSize="7">Single-input Unary Logic Inverter</text>
      <text x="10" y="130" fill="#b45309" stroke="none" fontSize="7" fontWeight="bold">Double Inversion Law: (Ā)' = A</text>
    </g>

    {/* Row 2: Derived & Universal Gates: NAND, NOR, XOR, XNOR */}
    {/* NAND GATE */}
    <g transform="translate(15, 204)">
      <rect width="170" height="155" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="0" y="0" width="170" height="22" rx="6" fill="#eef2ff" stroke="#c7d2fe" strokeWidth="0.8" />
      <text x="8" y="15" fill="#4338ca" stroke="none" fontSize="9" fontWeight="bold">NAND Gate (Universal)</text>
      <text x="162" y="15" textAnchor="end" fill="#4f46e5" stroke="none" fontSize="8.5" fontWeight="bold">Y = (A·B)'</text>

      {/* Symbol */}
      <g transform="translate(8, 28)">
        <line x1="3" y1="14" x2="18" y2="14" stroke="#1e293b" />
        <line x1="3" y1="30" x2="18" y2="30" stroke="#1e293b" />
        <path d="M18 6 L32 6 C42 6 48 14 48 22 C48 30 42 38 32 38 L18 38 Z" fill="#eef2ff" stroke="#4f46e5" strokeWidth="1.5" />
        <circle cx="52" cy="22" r="3" fill="#ffffff" stroke="#4f46e5" strokeWidth="1.3" />
        <line x1="55" y1="22" x2="68" y2="22" stroke="#1e293b" strokeWidth="1.5" />
      </g>

      {/* Truth Table */}
      <g transform="translate(80, 26)">
        <rect width="80" height="52" rx="3" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.7" />
        <line x1="0" y1="13" x2="80" y2="13" stroke="#cbd5e1" />
        <line x1="26" y1="0" x2="26" y2="52" stroke="#cbd5e1" />
        <line x1="52" y1="0" x2="52" y2="52" stroke="#cbd5e1" />
        <text x="13" y="10" textAnchor="middle" fill="#475569" stroke="none" fontSize="7" fontWeight="bold">A</text>
        <text x="39" y="10" textAnchor="middle" fill="#475569" stroke="none" fontSize="7" fontWeight="bold">B</text>
        <text x="66" y="10" textAnchor="middle" fill="#4f46e5" stroke="none" fontSize="7" fontWeight="bold">Y</text>
        <text x="13" y="22" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">0</text><text x="39" y="22" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">0</text><text x="66" y="22" textAnchor="middle" fill="#4f46e5" stroke="none" fontSize="6.5" fontWeight="bold">1</text>
        <text x="13" y="31" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">0</text><text x="39" y="31" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">1</text><text x="66" y="31" textAnchor="middle" fill="#4f46e5" stroke="none" fontSize="6.5" fontWeight="bold">1</text>
        <text x="13" y="40" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">1</text><text x="39" y="40" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">0</text><text x="66" y="40" textAnchor="middle" fill="#4f46e5" stroke="none" fontSize="6.5" fontWeight="bold">1</text>
        <text x="13" y="49" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">1</text><text x="39" y="49" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">1</text><text x="66" y="49" textAnchor="middle" fill="#4f46e5" stroke="none" fontSize="6.5" fontWeight="bold">0</text>
      </g>
      <text x="8" y="94" fill="#334155" stroke="none" fontSize="7">LOW only when BOTH inputs are HIGH.</text>
      <text x="8" y="105" fill="#4338ca" stroke="none" fontSize="7" fontWeight="bold">De Morgan: (A·B)' = A' + B'</text>
      <text x="8" y="117" fill="#64748b" stroke="none" fontSize="6.5">Universal Gate: synthesizes all circuits.</text>
    </g>

    {/* NOR GATE */}
    <g transform="translate(195, 204)">
      <rect width="170" height="155" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="0" y="0" width="170" height="22" rx="6" fill="#f5f3ff" stroke="#ddd6fe" strokeWidth="0.8" />
      <text x="8" y="15" fill="#6d28d9" stroke="none" fontSize="9" fontWeight="bold">NOR Gate (Universal)</text>
      <text x="162" y="15" textAnchor="end" fill="#7c3aed" stroke="none" fontSize="8.5" fontWeight="bold">Y = (A+B)'</text>

      {/* Symbol */}
      <g transform="translate(8, 28)">
        <line x1="3" y1="14" x2="16" y2="14" stroke="#1e293b" />
        <line x1="3" y1="30" x2="16" y2="30" stroke="#1e293b" />
        <path d="M14 6 Q22 22 14 38 C32 36 42 28 48 22 C42 16 32 8 14 6 Z" fill="#f5f3ff" stroke="#7c3aed" strokeWidth="1.5" />
        <circle cx="52" cy="22" r="3" fill="#ffffff" stroke="#7c3aed" strokeWidth="1.3" />
        <line x1="55" y1="22" x2="68" y2="22" stroke="#1e293b" strokeWidth="1.5" />
      </g>

      {/* Truth Table */}
      <g transform="translate(80, 26)">
        <rect width="80" height="52" rx="3" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.7" />
        <line x1="0" y1="13" x2="80" y2="13" stroke="#cbd5e1" />
        <line x1="26" y1="0" x2="26" y2="52" stroke="#cbd5e1" />
        <line x1="52" y1="0" x2="52" y2="52" stroke="#cbd5e1" />
        <text x="13" y="10" textAnchor="middle" fill="#475569" stroke="none" fontSize="7" fontWeight="bold">A</text>
        <text x="39" y="10" textAnchor="middle" fill="#475569" stroke="none" fontSize="7" fontWeight="bold">B</text>
        <text x="66" y="10" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="7" fontWeight="bold">Y</text>
        <text x="13" y="22" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">0</text><text x="39" y="22" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">0</text><text x="66" y="22" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="6.5" fontWeight="bold">1</text>
        <text x="13" y="31" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">0</text><text x="39" y="31" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">1</text><text x="66" y="31" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="6.5" fontWeight="bold">0</text>
        <text x="13" y="40" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">1</text><text x="39" y="40" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">0</text><text x="66" y="40" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="6.5" fontWeight="bold">0</text>
        <text x="13" y="49" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">1</text><text x="39" y="49" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">1</text><text x="66" y="49" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="6.5" fontWeight="bold">0</text>
      </g>
      <text x="8" y="94" fill="#334155" stroke="none" fontSize="7">HIGH only when BOTH inputs are LOW.</text>
      <text x="8" y="105" fill="#6d28d9" stroke="none" fontSize="7" fontWeight="bold">De Morgan: (A+B)' = A' · B'</text>
      <text x="8" y="117" fill="#64748b" stroke="none" fontSize="6.5">Universal Gate: synthesizes all circuits.</text>
    </g>

    {/* XOR GATE */}
    <g transform="translate(375, 204)">
      <rect width="170" height="155" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="0" y="0" width="170" height="22" rx="6" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="0.8" />
      <text x="8" y="15" fill="#15803d" stroke="none" fontSize="9" fontWeight="bold">XOR Gate (7486)</text>
      <text x="162" y="15" textAnchor="end" fill="#16a34a" stroke="none" fontSize="8.5" fontWeight="bold">Y = A ⊕ B</text>

      {/* Symbol */}
      <g transform="translate(8, 28)">
        <line x1="3" y1="14" x2="13" y2="14" stroke="#1e293b" />
        <line x1="3" y1="30" x2="13" y2="30" stroke="#1e293b" />
        <path d="M11 6 Q19 22 11 38" stroke="#16a34a" strokeWidth="1.5" />
        <path d="M16 6 Q24 22 16 38 C34 36 44 28 50 22 C44 16 34 8 16 6 Z" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
        <line x1="50" y1="22" x2="68" y2="22" stroke="#1e293b" strokeWidth="1.5" />
      </g>

      {/* Truth Table */}
      <g transform="translate(80, 26)">
        <rect width="80" height="52" rx="3" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.7" />
        <line x1="0" y1="13" x2="80" y2="13" stroke="#cbd5e1" />
        <line x1="26" y1="0" x2="26" y2="52" stroke="#cbd5e1" />
        <line x1="52" y1="0" x2="52" y2="52" stroke="#cbd5e1" />
        <text x="13" y="10" textAnchor="middle" fill="#475569" stroke="none" fontSize="7" fontWeight="bold">A</text>
        <text x="39" y="10" textAnchor="middle" fill="#475569" stroke="none" fontSize="7" fontWeight="bold">B</text>
        <text x="66" y="10" textAnchor="middle" fill="#16a34a" stroke="none" fontSize="7" fontWeight="bold">Y</text>
        <text x="13" y="22" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">0</text><text x="39" y="22" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">0</text><text x="66" y="22" textAnchor="middle" fill="#16a34a" stroke="none" fontSize="6.5" fontWeight="bold">0</text>
        <text x="13" y="31" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">0</text><text x="39" y="31" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">1</text><text x="66" y="31" textAnchor="middle" fill="#16a34a" stroke="none" fontSize="6.5" fontWeight="bold">1</text>
        <text x="13" y="40" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">1</text><text x="39" y="40" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">0</text><text x="66" y="40" textAnchor="middle" fill="#16a34a" stroke="none" fontSize="6.5" fontWeight="bold">1</text>
        <text x="13" y="49" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">1</text><text x="39" y="49" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">1</text><text x="66" y="49" textAnchor="middle" fill="#16a34a" stroke="none" fontSize="6.5" fontWeight="bold">0</text>
      </g>
      <text x="8" y="94" fill="#334155" stroke="none" fontSize="7">HIGH when inputs are DIFFERENT.</text>
      <text x="8" y="105" fill="#15803d" stroke="none" fontSize="7" fontWeight="bold">Y = A'B + AB'</text>
      <text x="8" y="117" fill="#64748b" stroke="none" fontSize="6.5">Modulo-2 Adder · Odd Parity Checker</text>
    </g>

    {/* XNOR GATE */}
    <g transform="translate(555, 204)">
      <rect width="170" height="155" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="0" y="0" width="170" height="22" rx="6" fill="#fff7ed" stroke="#ffedd5" strokeWidth="0.8" />
      <text x="8" y="15" fill="#c2410c" stroke="none" fontSize="9" fontWeight="bold">XNOR Gate (74266)</text>
      <text x="162" y="15" textAnchor="end" fill="#ea580c" stroke="none" fontSize="8.5" fontWeight="bold">Y = (A⊕B)'</text>

      {/* Symbol */}
      <g transform="translate(8, 28)">
        <line x1="3" y1="14" x2="12" y2="14" stroke="#1e293b" />
        <line x1="3" y1="30" x2="12" y2="30" stroke="#1e293b" />
        <path d="M10 6 Q18 22 10 38" stroke="#ea580c" strokeWidth="1.5" />
        <path d="M15 6 Q23 22 15 38 C33 36 43 28 48 22 C43 16 33 8 15 6 Z" fill="#fff7ed" stroke="#ea580c" strokeWidth="1.5" />
        <circle cx="52" cy="22" r="3" fill="#ffffff" stroke="#ea580c" strokeWidth="1.3" />
        <line x1="55" y1="22" x2="68" y2="22" stroke="#1e293b" strokeWidth="1.5" />
      </g>

      {/* Truth Table */}
      <g transform="translate(80, 26)">
        <rect width="80" height="52" rx="3" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.7" />
        <line x1="0" y1="13" x2="80" y2="13" stroke="#cbd5e1" />
        <line x1="26" y1="0" x2="26" y2="52" stroke="#cbd5e1" />
        <line x1="52" y1="0" x2="52" y2="52" stroke="#cbd5e1" />
        <text x="13" y="10" textAnchor="middle" fill="#475569" stroke="none" fontSize="7" fontWeight="bold">A</text>
        <text x="39" y="10" textAnchor="middle" fill="#475569" stroke="none" fontSize="7" fontWeight="bold">B</text>
        <text x="66" y="10" textAnchor="middle" fill="#ea580c" stroke="none" fontSize="7" fontWeight="bold">Y</text>
        <text x="13" y="22" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">0</text><text x="39" y="22" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">0</text><text x="66" y="22" textAnchor="middle" fill="#ea580c" stroke="none" fontSize="6.5" fontWeight="bold">1</text>
        <text x="13" y="31" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">0</text><text x="39" y="31" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">1</text><text x="66" y="31" textAnchor="middle" fill="#ea580c" stroke="none" fontSize="6.5" fontWeight="bold">0</text>
        <text x="13" y="40" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">1</text><text x="39" y="40" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">0</text><text x="66" y="40" textAnchor="middle" fill="#ea580c" stroke="none" fontSize="6.5" fontWeight="bold">0</text>
        <text x="13" y="49" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">1</text><text x="39" y="49" textAnchor="middle" fill="#334155" stroke="none" fontSize="6.5">1</text><text x="66" y="49" textAnchor="middle" fill="#ea580c" stroke="none" fontSize="6.5" fontWeight="bold">1</text>
      </g>
      <text x="8" y="94" fill="#334155" stroke="none" fontSize="7">HIGH when inputs are EQUAL (Same).</text>
      <text x="8" y="105" fill="#c2410c" stroke="none" fontSize="7" fontWeight="bold">Y = AB + A'B'</text>
      <text x="8" y="117" fill="#64748b" stroke="none" fontSize="6.5">Equivalence Gate · Even Parity Checker</text>
    </g>
  </svg>
);

// 3. Half Adder Schematic & Truth Table
export const HalfAdderSvg: React.FC<{ className?: string }> = ({ className = "w-full max-w-3xl h-auto" }) => (
  <svg viewBox="0 0 680 260" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="680" height="260" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
    <rect x="0" y="0" width="680" height="34" rx="10" fill="#0f172a" />
    <text x="20" y="22" fill="#38bdf8" stroke="none" fontSize="12" fontWeight="bold">Half Adder Combinational Circuit Schematic &amp; Truth Table</text>
    <text x="660" y="22" textAnchor="end" fill="#94a3b8" stroke="none" fontSize="10">Sum S = A ⊕ B  ·  Carry C = A · B</text>

    {/* Circuit Left Side */}
    <g transform="translate(30, 48)">
      <rect width="360" height="195" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="15" y="22" fill="#0f172a" stroke="none" fontSize="11" fontWeight="bold">Circuit Schematic (1 XOR + 1 AND)</text>

      {/* Inputs A & B */}
      <line x1="20" y1="55" x2="110" y2="55" stroke="#1e293b" strokeWidth="2" />
      <circle cx="20" cy="55" r="3" fill="#1e293b" />
      <text x="10" y="59" fill="#1e293b" stroke="none" fontSize="12" fontWeight="bold">A</text>

      <line x1="20" y1="85" x2="110" y2="85" stroke="#1e293b" strokeWidth="2" />
      <circle cx="20" cy="85" r="3" fill="#1e293b" />
      <text x="10" y="89" fill="#1e293b" stroke="none" fontSize="12" fontWeight="bold">B</text>

      {/* Taps for AND gate */}
      <line x1="50" y1="55" x2="50" y2="140" stroke="#1e293b" />
      <circle cx="50" cy="55" r="3" fill="#1e293b" />
      <line x1="50" y1="140" x2="110" y2="140" stroke="#1e293b" />

      <line x1="75" y1="85" x2="75" y2="165" stroke="#1e293b" />
      <circle cx="75" cy="85" r="3" fill="#1e293b" />
      <line x1="75" y1="165" x2="110" y2="165" stroke="#1e293b" />

      {/* XOR Gate for Sum */}
      <path d="M102 45 Q112 70 102 95" stroke="#059669" strokeWidth="2" />
      <path d="M110 45 Q120 70 110 95 C145 92 165 78 178 70 C165 62 145 48 110 45 Z" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
      <text x="130" y="74" fill="#059669" stroke="none" fontSize="9" fontWeight="bold">XOR</text>
      <line x1="178" y1="70" x2="310" y2="70" stroke="#059669" strokeWidth="2" />
      <circle cx="310" cy="70" r="4" fill="#059669" />
      <text x="210" y="62" fill="#059669" stroke="none" fontSize="10" fontWeight="bold">Sum S = A ⊕ B</text>

      {/* AND Gate for Carry */}
      <path d="M110 130 L135 130 C155 130 165 142 165 152 C165 162 155 175 135 175 L110 175 Z" fill="#eff6ff" stroke="#0284c7" strokeWidth="2" />
      <text x="124" y="156" fill="#0284c7" stroke="none" fontSize="9" fontWeight="bold">AND</text>
      <line x1="165" y1="152" x2="310" y2="152" stroke="#0284c7" strokeWidth="2" />
      <circle cx="310" cy="152" r="4" fill="#0284c7" />
      <text x="210" y="145" fill="#0284c7" stroke="none" fontSize="10" fontWeight="bold">Carry C = A · B</text>

      <text x="15" y="190" fill="#64748b" stroke="none" fontSize="8">Adds two 1-bit binary inputs with zero input carry.</text>
    </g>

    {/* Truth Table Right Side */}
    <g transform="translate(410, 48)">
      <rect width="240" height="195" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="15" y="22" fill="#0f172a" stroke="none" fontSize="11" fontWeight="bold">Half Adder Truth Table</text>

      <g transform="translate(20, 36)">
        <rect width="200" height="110" rx="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />
        <line x1="0" y1="24" x2="200" y2="24" stroke="#cbd5e1" strokeWidth="1" />
        <line x1="50" y1="0" x2="50" y2="110" stroke="#cbd5e1" />
        <line x1="100" y1="0" x2="100" y2="110" stroke="#cbd5e1" />
        <line x1="150" y1="0" x2="150" y2="110" stroke="#cbd5e1" />

        <text x="25" y="17" textAnchor="middle" fill="#475569" stroke="none" fontSize="9" fontWeight="bold">A</text>
        <text x="75" y="17" textAnchor="middle" fill="#475569" stroke="none" fontSize="9" fontWeight="bold">B</text>
        <text x="125" y="17" textAnchor="middle" fill="#059669" stroke="none" fontSize="9" fontWeight="bold">Sum (S)</text>
        <text x="175" y="17" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="9" fontWeight="bold">Carry (C)</text>

        <text x="25" y="42" textAnchor="middle" fill="#334155" stroke="none" fontSize="9">0</text>
        <text x="75" y="42" textAnchor="middle" fill="#334155" stroke="none" fontSize="9">0</text>
        <text x="125" y="42" textAnchor="middle" fill="#059669" stroke="none" fontSize="9" fontWeight="bold">0</text>
        <text x="175" y="42" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="9" fontWeight="bold">0</text>

        <text x="25" y="63" textAnchor="middle" fill="#334155" stroke="none" fontSize="9">0</text>
        <text x="75" y="63" textAnchor="middle" fill="#334155" stroke="none" fontSize="9">1</text>
        <text x="125" y="63" textAnchor="middle" fill="#059669" stroke="none" fontSize="9" fontWeight="bold">1</text>
        <text x="175" y="63" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="9" fontWeight="bold">0</text>

        <text x="25" y="84" textAnchor="middle" fill="#334155" stroke="none" fontSize="9">1</text>
        <text x="75" y="84" textAnchor="middle" fill="#334155" stroke="none" fontSize="9">0</text>
        <text x="125" y="84" textAnchor="middle" fill="#059669" stroke="none" fontSize="9" fontWeight="bold">1</text>
        <text x="175" y="84" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="9" fontWeight="bold">0</text>

        <text x="25" y="102" textAnchor="middle" fill="#334155" stroke="none" fontSize="9">1</text>
        <text x="75" y="102" textAnchor="middle" fill="#334155" stroke="none" fontSize="9">1</text>
        <text x="125" y="102" textAnchor="middle" fill="#059669" stroke="none" fontSize="9" fontWeight="bold">0</text>
        <text x="175" y="102" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="9" fontWeight="bold">1</text>
      </g>
      <text x="20" y="166" fill="#1e3a8a" stroke="none" fontSize="8" fontWeight="bold">Sum S = A'B + AB' = A ⊕ B</text>
      <text x="20" y="179" fill="#1e3a8a" stroke="none" fontSize="8" fontWeight="bold">Carry C = A · B</text>
      <text x="20" y="190" fill="#64748b" stroke="none" fontSize="7.5">2 Half Adders + 1 OR gate synthesize a Full Adder.</text>
    </g>
  </svg>
);

// 4. Half Subtractor Schematic & Truth Table
export const HalfSubtractorSvg: React.FC<{ className?: string }> = ({ className = "w-full max-w-3xl h-auto" }) => (
  <svg viewBox="0 0 680 260" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="680" height="260" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
    <rect x="0" y="0" width="680" height="34" rx="10" fill="#0f172a" />
    <text x="20" y="22" fill="#38bdf8" stroke="none" fontSize="12" fontWeight="bold">Half Subtractor Circuit Schematic &amp; Truth Table</text>
    <text x="660" y="22" textAnchor="end" fill="#94a3b8" stroke="none" fontSize="10">Diff D = A ⊕ B  ·  Borrow Bout = A' · B</text>

    {/* Circuit Left Side */}
    <g transform="translate(30, 48)">
      <rect width="360" height="195" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="15" y="22" fill="#0f172a" stroke="none" fontSize="11" fontWeight="bold">Circuit Schematic (1 XOR + 1 NOT + 1 AND)</text>

      {/* Inputs A & B */}
      <line x1="20" y1="55" x2="110" y2="55" stroke="#1e293b" strokeWidth="2" />
      <circle cx="20" cy="55" r="3" fill="#1e293b" />
      <text x="10" y="59" fill="#1e293b" stroke="none" fontSize="12" fontWeight="bold">A</text>

      <line x1="20" y1="85" x2="110" y2="85" stroke="#1e293b" strokeWidth="2" />
      <circle cx="20" cy="85" r="3" fill="#1e293b" />
      <text x="10" y="89" fill="#1e293b" stroke="none" fontSize="12" fontWeight="bold">B</text>

      {/* Tap for NOT gate on A */}
      <line x1="45" y1="55" x2="45" y2="140" stroke="#1e293b" />
      <circle cx="45" cy="55" r="3" fill="#1e293b" />
      <line x1="45" y1="140" x2="70" y2="140" stroke="#1e293b" />

      {/* NOT Inverter */}
      <polygon points="70,132 70,148 88,140" fill="#fffbeb" stroke="#d97706" strokeWidth="1.5" />
      <circle cx="92" cy="140" r="3" fill="#ffffff" stroke="#d97706" strokeWidth="1.2" />
      <line x1="95" y1="140" x2="125" y2="140" stroke="#1e293b" />
      <text x="96" y="132" fill="#d97706" stroke="none" fontSize="8" fontWeight="bold">A'</text>

      {/* Tap for B straight to AND gate */}
      <line x1="60" y1="85" x2="60" y2="165" stroke="#1e293b" />
      <circle cx="60" cy="85" r="3" fill="#1e293b" />
      <line x1="60" y1="165" x2="125" y2="165" stroke="#1e293b" />

      {/* XOR Gate for Difference */}
      <path d="M102 45 Q112 70 102 95" stroke="#7c3aed" strokeWidth="2" />
      <path d="M110 45 Q120 70 110 95 C145 92 165 78 178 70 C165 62 145 48 110 45 Z" fill="#faf5ff" stroke="#7c3aed" strokeWidth="2" />
      <text x="130" y="74" fill="#7c3aed" stroke="none" fontSize="9" fontWeight="bold">XOR</text>
      <line x1="178" y1="70" x2="310" y2="70" stroke="#7c3aed" strokeWidth="2" />
      <circle cx="310" cy="70" r="4" fill="#7c3aed" />
      <text x="200" y="62" fill="#7c3aed" stroke="none" fontSize="10" fontWeight="bold">Difference D = A ⊕ B</text>

      {/* AND Gate for Borrow */}
      <path d="M125 130 L150 130 C170 130 180 142 180 152 C180 162 170 175 150 175 L125 175 Z" fill="#fef2f2" stroke="#dc2626" strokeWidth="2" />
      <text x="139" y="156" fill="#dc2626" stroke="none" fontSize="9" fontWeight="bold">AND</text>
      <line x1="180" y1="152" x2="310" y2="152" stroke="#dc2626" strokeWidth="2" />
      <circle cx="310" cy="152" r="4" fill="#dc2626" />
      <text x="200" y="145" fill="#dc2626" stroke="none" fontSize="10" fontWeight="bold">Borrow Bout = A' · B</text>

      <text x="15" y="190" fill="#64748b" stroke="none" fontSize="8">Computes (A - B) for single bits without prior borrow.</text>
    </g>

    {/* Truth Table Right Side */}
    <g transform="translate(410, 48)">
      <rect width="240" height="195" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="15" y="22" fill="#0f172a" stroke="none" fontSize="11" fontWeight="bold">Half Subtractor Truth Table</text>

      <g transform="translate(20, 36)">
        <rect width="200" height="110" rx="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />
        <line x1="0" y1="24" x2="200" y2="24" stroke="#cbd5e1" strokeWidth="1" />
        <line x1="50" y1="0" x2="50" y2="110" stroke="#cbd5e1" />
        <line x1="100" y1="0" x2="100" y2="110" stroke="#cbd5e1" />
        <line x1="150" y1="0" x2="150" y2="110" stroke="#cbd5e1" />

        <text x="25" y="17" textAnchor="middle" fill="#475569" stroke="none" fontSize="9" fontWeight="bold">A</text>
        <text x="75" y="17" textAnchor="middle" fill="#475569" stroke="none" fontSize="9" fontWeight="bold">B</text>
        <text x="125" y="17" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="9" fontWeight="bold">Diff (D)</text>
        <text x="175" y="17" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="9" fontWeight="bold">Borrow (B)</text>

        <text x="25" y="42" textAnchor="middle" fill="#334155" stroke="none" fontSize="9">0</text>
        <text x="75" y="42" textAnchor="middle" fill="#334155" stroke="none" fontSize="9">0</text>
        <text x="125" y="42" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="9" fontWeight="bold">0</text>
        <text x="175" y="42" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="9" fontWeight="bold">0</text>

        <text x="25" y="63" textAnchor="middle" fill="#334155" stroke="none" fontSize="9">0</text>
        <text x="75" y="63" textAnchor="middle" fill="#334155" stroke="none" fontSize="9">1</text>
        <text x="125" y="63" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="9" fontWeight="bold">1</text>
        <text x="175" y="63" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="9" fontWeight="bold">1 (0 - 1)</text>

        <text x="25" y="84" textAnchor="middle" fill="#334155" stroke="none" fontSize="9">1</text>
        <text x="75" y="84" textAnchor="middle" fill="#334155" stroke="none" fontSize="9">0</text>
        <text x="125" y="84" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="9" fontWeight="bold">1</text>
        <text x="175" y="84" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="9" fontWeight="bold">0</text>

        <text x="25" y="102" textAnchor="middle" fill="#334155" stroke="none" fontSize="9">1</text>
        <text x="75" y="102" textAnchor="middle" fill="#334155" stroke="none" fontSize="9">1</text>
        <text x="125" y="102" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="9" fontWeight="bold">0</text>
        <text x="175" y="102" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="9" fontWeight="bold">0</text>
      </g>
      <text x="20" y="166" fill="#1e3a8a" stroke="none" fontSize="8" fontWeight="bold">Difference D = A ⊕ B  (Identical to Adder Sum)</text>
      <text x="20" y="179" fill="#dc2626" stroke="none" fontSize="8" fontWeight="bold">Borrow Bout = A' · B  (Requires inverter on Minuend A)</text>
    </g>
  </svg>
);

// 5. Full Adder Combinational Circuit (2 Half Adders + 1 OR Gate) & Truth Table
export const FullAdderSvg: React.FC<{ className?: string }> = ({ className = "w-full max-w-3xl h-auto" }) => (
  <svg viewBox="0 0 740 290" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="740" height="290" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
    <rect x="0" y="0" width="740" height="34" rx="10" fill="#0f172a" />
    <text x="20" y="22" fill="#38bdf8" stroke="none" fontSize="12" fontWeight="bold">Full Adder Logic Circuit (2 Half Adders + 1 OR Gate) &amp; Truth Table</text>
    <text x="720" y="22" textAnchor="end" fill="#94a3b8" stroke="none" fontSize="10">Sum S = A ⊕ B ⊕ Cin  ·  Carry Cout = AB + Cin(A ⊕ B)</text>

    {/* Logic Schematic Left */}
    <g transform="translate(18, 44)">
      <rect width="455" height="234" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="14" y="18" fill="#0f172a" stroke="none" fontSize="10.5" fontWeight="bold">Full Adder Synthesis (HA1: XOR1+AND1 · HA2: XOR2+AND2 · OR Gate)</text>

      {/* HA1 Boundary Box */}
      <rect x="52" y="24" width="136" height="152" rx="4" fill="#f0fdf4" stroke="#86efac" strokeWidth="1" strokeDasharray="3 3" />
      <text x="58" y="36" fill="#15803d" stroke="none" fontSize="8" fontWeight="bold">Half Adder 1 (HA1)</text>

      {/* Inputs A and B */}
      <line x1="12" y1="52" x2="88" y2="52" stroke="#1e293b" strokeWidth="2" />
      <circle cx="12" cy="52" r="3" fill="#1e293b" />
      <text x="4" y="56" fill="#1e293b" stroke="none" fontSize="11" fontWeight="bold">A</text>

      <line x1="12" y1="78" x2="88" y2="78" stroke="#1e293b" strokeWidth="2" />
      <circle cx="12" cy="78" r="3" fill="#1e293b" />
      <text x="4" y="82" fill="#1e293b" stroke="none" fontSize="11" fontWeight="bold">B</text>

      {/* Input Cin */}
      <line x1="12" y1="116" x2="225" y2="116" stroke="#4f46e5" strokeWidth="2" />
      <circle cx="12" cy="116" r="3" fill="#4f46e5" />
      <text x="2" y="120" fill="#4f46e5" stroke="none" fontSize="10" fontWeight="bold">Cin</text>

      {/* XOR1 Gate (HA1) */}
      <path d="M84 44 Q92 65 84 86" stroke="#15803d" strokeWidth="1.5" />
      <path d="M90 44 Q98 65 90 86 C116 84 126 72 135 65 C126 58 116 46 90 44 Z" fill="#ecfdf5" stroke="#15803d" strokeWidth="1.5" />
      <text x="100" y="68" fill="#15803d" stroke="none" fontSize="8" fontWeight="bold">XOR1</text>
      {/* S1 = A XOR B output */}
      <line x1="135" y1="65" x2="225" y2="65" stroke="#15803d" strokeWidth="1.8" />
      <circle cx="175" cy="65" r="3" fill="#15803d" />
      <text x="142" y="58" fill="#15803d" stroke="none" fontSize="7.5" fontWeight="bold">S1 = A⊕B</text>

      {/* HA1 AND1 Gate (C1 = A · B) */}
      <line x1="38" y1="52" x2="38" y2="135" stroke="#1e293b" />
      <circle cx="38" cy="52" r="2.5" fill="#1e293b" />
      <line x1="38" y1="135" x2="88" y2="135" stroke="#1e293b" />

      <line x1="48" y1="78" x2="48" y2="153" stroke="#1e293b" />
      <circle cx="48" cy="78" r="2.5" fill="#1e293b" />
      <line x1="48" y1="153" x2="88" y2="153" stroke="#1e293b" />

      <path d="M88 126 L108 126 C124 126 132 134 132 144 C132 154 124 162 108 162 L88 162 Z" fill="#eff6ff" stroke="#0284c7" strokeWidth="1.5" />
      <text x="96" y="148" fill="#0284c7" stroke="none" fontSize="8" fontWeight="bold">AND1</text>
      {/* C1 line to OR gate */}
      <line x1="132" y1="144" x2="160" y2="144" stroke="#0284c7" strokeWidth="1.5" />
      <text x="136" y="140" fill="#0284c7" stroke="none" fontSize="7.5" fontWeight="bold">C1 = A·B</text>
      <line x1="160" y1="144" x2="160" y2="198" stroke="#0284c7" strokeWidth="1.5" />
      <line x1="160" y1="198" x2="345" y2="198" stroke="#0284c7" strokeWidth="1.5" />

      {/* HA2 Boundary Box */}
      <rect x="208" y="24" width="132" height="152" rx="4" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3 3" />
      <text x="214" y="36" fill="#1d4ed8" stroke="none" fontSize="8" fontWeight="bold">Half Adder 2 (HA2)</text>

      {/* XOR2 Gate (HA2 - Final Sum) */}
      <path d="M222 55 Q230 73 222 91" stroke="#059669" strokeWidth="1.5" />
      <path d="M228 55 Q236 73 228 91 C252 89 262 79 270 73 C262 67 252 57 228 55 Z" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
      <line x1="225" y1="82" x2="228" y2="82" stroke="#4f46e5" strokeWidth="1.5" />
      <line x1="210" y1="116" x2="210" y2="82" stroke="#4f46e5" strokeWidth="1.5" />
      <circle cx="210" cy="116" r="3" fill="#4f46e5" />
      <line x1="210" y1="82" x2="225" y2="82" stroke="#4f46e5" strokeWidth="1.5" />
      <text x="236" y="76" fill="#059669" stroke="none" fontSize="8" fontWeight="bold">XOR2</text>
      {/* Final Sum S line */}
      <line x1="270" y1="73" x2="395" y2="73" stroke="#059669" strokeWidth="2.2" />
      <circle cx="395" cy="73" r="4" fill="#059669" />
      <text x="402" y="77" fill="#059669" stroke="none" fontSize="10.5" fontWeight="bold">Sum S = A ⊕ B ⊕ Cin</text>

      {/* HA2 AND2 Gate (C2 = Cin · S1) */}
      <line x1="175" y1="65" x2="175" y2="135" stroke="#15803d" strokeWidth="1.5" />
      <line x1="175" y1="135" x2="230" y2="135" stroke="#15803d" strokeWidth="1.5" />

      <line x1="218" y1="116" x2="218" y2="152" stroke="#4f46e5" strokeWidth="1.5" />
      <circle cx="218" cy="116" r="2.5" fill="#4f46e5" />
      <line x1="218" y1="152" x2="230" y2="152" stroke="#4f46e5" strokeWidth="1.5" />

      <path d="M230 126 L250 126 C266 126 274 134 274 144 C274 154 266 162 250 162 L230 162 Z" fill="#eff6ff" stroke="#0284c7" strokeWidth="1.5" />
      <text x="238" y="148" fill="#0284c7" stroke="none" fontSize="8" fontWeight="bold">AND2</text>
      {/* C2 line to OR gate */}
      <line x1="274" y1="144" x2="310" y2="144" stroke="#0284c7" strokeWidth="1.5" />
      <text x="278" y="139" fill="#0284c7" stroke="none" fontSize="7" fontWeight="bold">C2 = Cin(A⊕B)</text>
      <line x1="310" y1="144" x2="310" y2="182" stroke="#0284c7" strokeWidth="1.5" />
      <line x1="310" y1="182" x2="345" y2="182" stroke="#0284c7" strokeWidth="1.5" />

      {/* OR Gate for Carry Cout */}
      <path d="M345 174 Q355 190 345 206 C368 204 378 195 385 190 C378 185 368 176 345 174 Z" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.8" />
      <text x="353" y="193" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">OR</text>
      {/* Final Cout line */}
      <line x1="385" y1="190" x2="415" y2="190" stroke="#dc2626" strokeWidth="2.2" />
      <circle cx="415" cy="190" r="4" fill="#dc2626" />
      <text x="300" y="218" fill="#dc2626" stroke="none" fontSize="9.5" fontWeight="bold">Cout = AB + Cin(A ⊕ B)</text>

      <text x="14" y="224" fill="#64748b" stroke="none" fontSize="7.5">2 Half Adders (HA1: XOR1+AND1, HA2: XOR2+AND2) + 1 OR Gate.</text>
    </g>

    {/* Truth Table Right Side */}
    <g transform="translate(488, 44)">
      <rect width="234" height="234" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="14" y="18" fill="#0f172a" stroke="none" fontSize="10.5" fontWeight="bold">Full Adder Truth Table (2³ = 8)</text>

      <g transform="translate(14, 26)">
        <rect width="206" height="150" rx="3" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />
        <line x1="0" y1="20" x2="206" y2="20" stroke="#cbd5e1" strokeWidth="1" />
        <line x1="38" y1="0" x2="38" y2="150" stroke="#cbd5e1" />
        <line x1="76" y1="0" x2="76" y2="150" stroke="#cbd5e1" />
        <line x1="118" y1="0" x2="118" y2="150" stroke="#cbd5e1" />
        <line x1="162" y1="0" x2="162" y2="150" stroke="#cbd5e1" />

        <text x="19" y="14" textAnchor="middle" fill="#475569" stroke="none" fontSize="8" fontWeight="bold">A</text>
        <text x="57" y="14" textAnchor="middle" fill="#475569" stroke="none" fontSize="8" fontWeight="bold">B</text>
        <text x="97" y="14" textAnchor="middle" fill="#4f46e5" stroke="none" fontSize="8" fontWeight="bold">Cin</text>
        <text x="140" y="14" textAnchor="middle" fill="#059669" stroke="none" fontSize="8" fontWeight="bold">Sum (S)</text>
        <text x="184" y="14" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="8" fontWeight="bold">Cout</text>

        <text x="19" y="34" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">0</text><text x="57" y="34" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">0</text><text x="97" y="34" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">0</text><text x="140" y="34" textAnchor="middle" fill="#059669" stroke="none" fontSize="7.5" fontWeight="bold">0</text><text x="184" y="34" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">0</text>
        <text x="19" y="50" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">0</text><text x="57" y="50" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">0</text><text x="97" y="50" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">1</text><text x="140" y="50" textAnchor="middle" fill="#059669" stroke="none" fontSize="7.5" fontWeight="bold">1</text><text x="184" y="50" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">0</text>
        <text x="19" y="66" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">0</text><text x="57" y="66" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">1</text><text x="97" y="66" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">0</text><text x="140" y="66" textAnchor="middle" fill="#059669" stroke="none" fontSize="7.5" fontWeight="bold">1</text><text x="184" y="66" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">0</text>
        <text x="19" y="82" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">0</text><text x="57" y="82" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">1</text><text x="97" y="82" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">1</text><text x="140" y="82" textAnchor="middle" fill="#059669" stroke="none" fontSize="7.5" fontWeight="bold">0</text><text x="184" y="82" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">1</text>
        <text x="19" y="98" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">1</text><text x="57" y="98" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">0</text><text x="97" y="98" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">0</text><text x="140" y="98" textAnchor="middle" fill="#059669" stroke="none" fontSize="7.5" fontWeight="bold">1</text><text x="184" y="98" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">0</text>
        <text x="19" y="114" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">1</text><text x="57" y="114" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">0</text><text x="97" y="114" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">1</text><text x="140" y="114" textAnchor="middle" fill="#059669" stroke="none" fontSize="7.5" fontWeight="bold">0</text><text x="184" y="114" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">1</text>
        <text x="19" y="130" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">1</text><text x="57" y="130" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">1</text><text x="97" y="130" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">0</text><text x="140" y="130" textAnchor="middle" fill="#059669" stroke="none" fontSize="7.5" fontWeight="bold">0</text><text x="184" y="130" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">1</text>
        <text x="19" y="144" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">1</text><text x="57" y="144" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">1</text><text x="97" y="144" textAnchor="middle" fill="#334155" stroke="none" fontSize="7.5">1</text><text x="140" y="144" textAnchor="middle" fill="#059669" stroke="none" fontSize="7.5" fontWeight="bold">1</text><text x="184" y="144" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">1</text>
      </g>
      <text x="14" y="196" fill="#059669" stroke="none" fontSize="7.5" fontWeight="bold">Sum S = Σm(1, 2, 4, 7)</text>
      <text x="14" y="210" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">Cout = Σm(3, 5, 6, 7) = AB + BCin + ACin</text>
      <text x="14" y="224" fill="#64748b" stroke="none" fontSize="7">CU Standard: 2 Half Adders synthesize Full Adder.</text>
    </g>
  </svg>
);

// 6. Multiplexer 4:1 Schematic & Function Table
export const MultiplexerSvg: React.FC<{ className?: string }> = ({ className = "w-full max-w-3xl h-auto" }) => (
  <svg viewBox="0 0 740 290" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="740" height="290" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
    <rect x="0" y="0" width="740" height="34" rx="10" fill="#0f172a" />
    <text x="20" y="22" fill="#38bdf8" stroke="none" fontSize="12" fontWeight="bold">4-to-1 Multiplexer (Data Selector) Gate Logic &amp; Truth Table</text>
    <text x="720" y="22" textAnchor="end" fill="#94a3b8" stroke="none" fontSize="10">Y = S1'S0'I0 + S1'S0 I1 + S1 S0'I2 + S1 S0 I3</text>

    {/* Logic Schematic Left */}
    <g transform="translate(18, 44)">
      <rect width="455" height="234" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="14" y="18" fill="#0f172a" stroke="none" fontSize="10.5" fontWeight="bold">4:1 MUX Internal Gate Synthesis (4 3-input AND + 1 4-input OR + 2 Inverters)</text>

      {/* Select Lines S1 and S0 with Inverters */}
      {/* S1 Line */}
      <line x1="32" y1="26" x2="32" y2="216" stroke="#4f46e5" strokeWidth="1.5" />
      <text x="26" y="24" fill="#4f46e5" stroke="none" fontSize="8.5" fontWeight="bold">S1</text>

      {/* S1 Inverter */}
      <line x1="32" y1="36" x2="40" y2="36" stroke="#4f46e5" />
      <circle cx="32" cy="36" r="2.5" fill="#4f46e5" />
      <polygon points="40,30 40,42 50,36" fill="#fffbeb" stroke="#d97706" strokeWidth="1.2" />
      <circle cx="53" cy="36" r="2.5" fill="#ffffff" stroke="#d97706" strokeWidth="1.2" />
      <line x1="56" y1="36" x2="62" y2="36" stroke="#9333ea" />
      <line x1="62" y1="36" x2="62" y2="216" stroke="#9333ea" strokeWidth="1.5" />
      <text x="57" y="24" fill="#9333ea" stroke="none" fontSize="8.5" fontWeight="bold">S1'</text>

      {/* S0 Line */}
      <line x1="82" y1="26" x2="82" y2="216" stroke="#4f46e5" strokeWidth="1.5" />
      <text x="76" y="24" fill="#4f46e5" stroke="none" fontSize="8.5" fontWeight="bold">S0</text>

      {/* S0 Inverter */}
      <line x1="82" y1="36" x2="90" y2="36" stroke="#4f46e5" />
      <circle cx="82" cy="36" r="2.5" fill="#4f46e5" />
      <polygon points="90,30 90,42 100,36" fill="#fffbeb" stroke="#d97706" strokeWidth="1.2" />
      <circle cx="103" cy="36" r="2.5" fill="#ffffff" stroke="#d97706" strokeWidth="1.2" />
      <line x1="106" y1="36" x2="112" y2="36" stroke="#9333ea" />
      <line x1="112" y1="36" x2="112" y2="216" stroke="#9333ea" strokeWidth="1.5" />
      <text x="107" y="24" fill="#9333ea" stroke="none" fontSize="8.5" fontWeight="bold">S0'</text>

      {/* --- AND Gate 0 (I0 · S1' · S0') --- */}
      <line x1="130" y1="52" x2="175" y2="52" stroke="#0284c7" strokeWidth="1.5" />
      <circle cx="130" cy="52" r="2.5" fill="#0284c7" />
      <text x="120" y="55" fill="#0284c7" stroke="none" fontSize="9" fontWeight="bold">I0</text>

      <line x1="62" y1="60" x2="175" y2="60" stroke="#9333ea" strokeWidth="1.2" />
      <circle cx="62" cy="60" r="2.5" fill="#9333ea" />

      <line x1="112" y1="68" x2="175" y2="68" stroke="#9333ea" strokeWidth="1.2" />
      <circle cx="112" cy="68" r="2.5" fill="#9333ea" />

      <path d="M175 46 L195 46 C210 46 218 53 218 60 C218 67 210 74 195 74 L175 74 Z" fill="#eff6ff" stroke="#0284c7" strokeWidth="1.5" />
      <text x="184" y="63" fill="#0284c7" stroke="none" fontSize="7.5" fontWeight="bold">AND0</text>

      {/* --- AND Gate 1 (I1 · S1' · S0) --- */}
      <line x1="130" y1="92" x2="175" y2="92" stroke="#0284c7" strokeWidth="1.5" />
      <circle cx="130" cy="92" r="2.5" fill="#0284c7" />
      <text x="120" y="95" fill="#0284c7" stroke="none" fontSize="9" fontWeight="bold">I1</text>

      <line x1="62" y1="100" x2="175" y2="100" stroke="#9333ea" strokeWidth="1.2" />
      <circle cx="62" cy="100" r="2.5" fill="#9333ea" />

      <line x1="82" y1="108" x2="175" y2="108" stroke="#4f46e5" strokeWidth="1.2" />
      <circle cx="82" cy="108" r="2.5" fill="#4f46e5" />

      <path d="M175 86 L195 86 C210 86 218 93 218 100 C218 107 210 114 195 114 L175 114 Z" fill="#eff6ff" stroke="#0284c7" strokeWidth="1.5" />
      <text x="184" y="103" fill="#0284c7" stroke="none" fontSize="7.5" fontWeight="bold">AND1</text>

      {/* --- AND Gate 2 (I2 · S1 · S0') --- */}
      <line x1="130" y1="132" x2="175" y2="132" stroke="#0284c7" strokeWidth="1.5" />
      <circle cx="130" cy="132" r="2.5" fill="#0284c7" />
      <text x="120" y="135" fill="#0284c7" stroke="none" fontSize="9" fontWeight="bold">I2</text>

      <line x1="32" y1="140" x2="175" y2="140" stroke="#4f46e5" strokeWidth="1.2" />
      <circle cx="32" cy="140" r="2.5" fill="#4f46e5" />

      <line x1="112" y1="148" x2="175" y2="148" stroke="#9333ea" strokeWidth="1.2" />
      <circle cx="112" cy="148" r="2.5" fill="#9333ea" />

      <path d="M175 126 L195 126 C210 126 218 133 218 140 C218 147 210 154 195 154 L175 154 Z" fill="#eff6ff" stroke="#0284c7" strokeWidth="1.5" />
      <text x="184" y="143" fill="#0284c7" stroke="none" fontSize="7.5" fontWeight="bold">AND2</text>

      {/* --- AND Gate 3 (I3 · S1 · S0) --- */}
      <line x1="130" y1="172" x2="175" y2="172" stroke="#0284c7" strokeWidth="1.5" />
      <circle cx="130" cy="172" r="2.5" fill="#0284c7" />
      <text x="120" y="175" fill="#0284c7" stroke="none" fontSize="9" fontWeight="bold">I3</text>

      <line x1="32" y1="180" x2="175" y2="180" stroke="#4f46e5" strokeWidth="1.2" />
      <circle cx="32" cy="180" r="2.5" fill="#4f46e5" />

      <line x1="82" y1="188" x2="175" y2="188" stroke="#4f46e5" strokeWidth="1.2" />
      <circle cx="82" cy="188" r="2.5" fill="#4f46e5" />

      <path d="M175 166 L195 166 C210 166 218 173 218 180 C218 187 210 194 195 194 L175 194 Z" fill="#eff6ff" stroke="#0284c7" strokeWidth="1.5" />
      <text x="184" y="183" fill="#0284c7" stroke="none" fontSize="7.5" fontWeight="bold">AND3</text>

      {/* Routing into 4-input OR Gate */}
      <line x1="218" y1="60" x2="275" y2="60" stroke="#1e293b" />
      <line x1="275" y1="60" x2="295" y2="105" stroke="#1e293b" />

      <line x1="218" y1="100" x2="280" y2="100" stroke="#1e293b" />
      <line x1="280" y1="100" x2="295" y2="114" stroke="#1e293b" />

      <line x1="218" y1="140" x2="280" y2="140" stroke="#1e293b" />
      <line x1="280" y1="140" x2="295" y2="126" stroke="#1e293b" />

      <line x1="218" y1="180" x2="275" y2="180" stroke="#1e293b" />
      <line x1="275" y1="180" x2="295" y2="135" stroke="#1e293b" />

      {/* 4-Input OR Gate */}
      <path d="M295 95 Q310 120 295 145 C328 142 342 128 350 120 C342 112 328 98 295 95 Z" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.8" />
      <text x="312" y="123" fill="#dc2626" stroke="none" fontSize="8" fontWeight="bold">OR</text>

      {/* Output Y */}
      <line x1="350" y1="120" x2="415" y2="120" stroke="#dc2626" strokeWidth="2.2" />
      <circle cx="415" cy="120" r="4" fill="#dc2626" />
      <text x="422" y="124" fill="#dc2626" stroke="none" fontSize="11" fontWeight="bold">Output Y</text>

      <text x="14" y="224" fill="#64748b" stroke="none" fontSize="7.5">Output Equation: Y = S1'S0'I0 + S1'S0 I1 + S1 S0'I2 + S1 S0 I3</text>
    </g>

    {/* Function Table Right */}
    <g transform="translate(488, 44)">
      <rect width="234" height="234" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="14" y="18" fill="#0f172a" stroke="none" fontSize="10.5" fontWeight="bold">4:1 MUX Function Table</text>

      <g transform="translate(14, 28)">
        <rect width="206" height="120" rx="3" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />
        <line x1="0" y1="24" x2="206" y2="24" stroke="#cbd5e1" strokeWidth="1" />
        <line x1="45" y1="0" x2="45" y2="120" stroke="#cbd5e1" />
        <line x1="90" y1="0" x2="90" y2="120" stroke="#cbd5e1" />
        <line x1="145" y1="0" x2="145" y2="120" stroke="#cbd5e1" />

        <text x="22" y="16" textAnchor="middle" fill="#4f46e5" stroke="none" fontSize="8.5" fontWeight="bold">S1</text>
        <text x="67" y="16" textAnchor="middle" fill="#4f46e5" stroke="none" fontSize="8.5" fontWeight="bold">S0</text>
        <text x="117" y="16" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="8.5" fontWeight="bold">Output Y</text>
        <text x="175" y="16" textAnchor="middle" fill="#475569" stroke="none" fontSize="8" fontWeight="bold">Channel</text>

        <text x="22" y="44" textAnchor="middle" fill="#334155" stroke="none" fontSize="8.5">0</text>
        <text x="67" y="44" textAnchor="middle" fill="#334155" stroke="none" fontSize="8.5">0</text>
        <text x="117" y="44" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="8.5" fontWeight="bold">I0</text>
        <text x="175" y="44" textAnchor="middle" fill="#64748b" stroke="none" fontSize="8">Ch 0</text>

        <text x="22" y="68" textAnchor="middle" fill="#334155" stroke="none" fontSize="8.5">0</text>
        <text x="67" y="68" textAnchor="middle" fill="#334155" stroke="none" fontSize="8.5">1</text>
        <text x="117" y="68" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="8.5" fontWeight="bold">I1</text>
        <text x="175" y="68" textAnchor="middle" fill="#64748b" stroke="none" fontSize="8">Ch 1</text>

        <text x="22" y="92" textAnchor="middle" fill="#334155" stroke="none" fontSize="8.5">1</text>
        <text x="67" y="92" textAnchor="middle" fill="#334155" stroke="none" fontSize="8.5">0</text>
        <text x="117" y="92" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="8.5" fontWeight="bold">I2</text>
        <text x="175" y="92" textAnchor="middle" fill="#64748b" stroke="none" fontSize="8">Ch 2</text>

        <text x="22" y="112" textAnchor="middle" fill="#334155" stroke="none" fontSize="8.5">1</text>
        <text x="67" y="112" textAnchor="middle" fill="#334155" stroke="none" fontSize="8.5">1</text>
        <text x="117" y="112" textAnchor="middle" fill="#0284c7" stroke="none" fontSize="8.5" fontWeight="bold">I3</text>
        <text x="175" y="112" textAnchor="middle" fill="#64748b" stroke="none" fontSize="8">Ch 3</text>
      </g>
      <text x="14" y="172" fill="#1e3a8a" stroke="none" fontSize="8" fontWeight="bold">Select Lines Rule: 2^n = N inputs (n=2 ⇒ 4 inputs)</text>
      <text x="14" y="188" fill="#475569" stroke="none" fontSize="7.5">Universal Function Generator: Any 3-variable Boolean</text>
      <text x="14" y="200" fill="#475569" stroke="none" fontSize="7.5">logic function F(A, B, C) can be synthesized on 4:1 MUX.</text>
      <text x="14" y="218" fill="#15803d" stroke="none" fontSize="7.5" fontWeight="bold">CU Exam: Implement F(A,B,C)=Σm(1,2,4,5,7) via MUX.</text>
    </g>
  </svg>
);

// 7. De-Multiplexer 1:4 (4-to-1 Data Distributor) Schematic & Function Table
export const DemultiplexerSvg: React.FC<{ className?: string }> = ({ className = "w-full max-w-3xl h-auto" }) => (
  <svg viewBox="0 0 740 290" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="740" height="290" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
    <rect x="0" y="0" width="740" height="34" rx="10" fill="#0f172a" />
    <text x="20" y="22" fill="#38bdf8" stroke="none" fontSize="12" fontWeight="bold">1-to-4 De-Multiplexer (4-to-1 Data Distributor / 2:4 Decoder) Schematic &amp; Table</text>
    <text x="720" y="22" textAnchor="end" fill="#94a3b8" stroke="none" fontSize="10">Y0 = Din·S1'S0'  ·  Y3 = Din·S1·S0</text>

    {/* Logic Schematic Left */}
    <g transform="translate(18, 44)">
      <rect width="455" height="234" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="14" y="18" fill="#0f172a" stroke="none" fontSize="10.5" fontWeight="bold">1:4 DeMUX Logic Architecture (4 3-input AND Gates + 2 Inverters)</text>

      {/* Din Line (Emerald) */}
      <line x1="12" y1="36" x2="22" y2="36" stroke="#059669" strokeWidth="2" />
      <circle cx="12" cy="36" r="3" fill="#059669" />
      <text x="4" y="40" fill="#059669" stroke="none" fontSize="9.5" fontWeight="bold">Din</text>
      <line x1="22" y1="36" x2="22" y2="216" stroke="#059669" strokeWidth="1.8" />

      {/* S1 Line and Inverter */}
      <line x1="50" y1="26" x2="50" y2="216" stroke="#4f46e5" strokeWidth="1.5" />
      <text x="44" y="24" fill="#4f46e5" stroke="none" fontSize="8.5" fontWeight="bold">S1</text>

      <line x1="50" y1="36" x2="58" y2="36" stroke="#4f46e5" />
      <circle cx="50" cy="36" r="2.5" fill="#4f46e5" />
      <polygon points="58,30 58,42 68,36" fill="#fffbeb" stroke="#d97706" strokeWidth="1.2" />
      <circle cx="71" cy="36" r="2.5" fill="#ffffff" stroke="#d97706" strokeWidth="1.2" />
      <line x1="74" y1="36" x2="80" y2="36" stroke="#9333ea" />
      <line x1="80" y1="36" x2="80" y2="216" stroke="#9333ea" strokeWidth="1.5" />
      <text x="75" y="24" fill="#9333ea" stroke="none" fontSize="8.5" fontWeight="bold">S1'</text>

      {/* S0 Line and Inverter */}
      <line x1="102" y1="26" x2="102" y2="216" stroke="#4f46e5" strokeWidth="1.5" />
      <text x="96" y="24" fill="#4f46e5" stroke="none" fontSize="8.5" fontWeight="bold">S0</text>

      <line x1="102" y1="36" x2="110" y2="36" stroke="#4f46e5" />
      <circle cx="102" cy="36" r="2.5" fill="#4f46e5" />
      <polygon points="110,30 110,42 120,36" fill="#fffbeb" stroke="#d97706" strokeWidth="1.2" />
      <circle cx="123" cy="36" r="2.5" fill="#ffffff" stroke="#d97706" strokeWidth="1.2" />
      <line x1="126" y1="36" x2="132" y2="36" stroke="#9333ea" />
      <line x1="132" y1="36" x2="132" y2="216" stroke="#9333ea" strokeWidth="1.5" />
      <text x="127" y="24" fill="#9333ea" stroke="none" fontSize="8.5" fontWeight="bold">S0'</text>

      {/* --- AND Gate 0 (Y0 = Din · S1' · S0') --- */}
      <line x1="22" y1="52" x2="185" y2="52" stroke="#059669" strokeWidth="1.2" />
      <circle cx="22" cy="52" r="2.5" fill="#059669" />

      <line x1="80" y1="60" x2="185" y2="60" stroke="#9333ea" strokeWidth="1.2" />
      <circle cx="80" cy="60" r="2.5" fill="#9333ea" />

      <line x1="132" y1="68" x2="185" y2="68" stroke="#9333ea" strokeWidth="1.2" />
      <circle cx="132" cy="68" r="2.5" fill="#9333ea" />

      <path d="M185 46 L205 46 C220 46 228 53 228 60 C228 67 220 74 205 74 L185 74 Z" fill="#faf5ff" stroke="#7c3aed" strokeWidth="1.5" />
      <text x="194" y="63" fill="#7c3aed" stroke="none" fontSize="7.5" fontWeight="bold">AND0</text>
      <line x1="228" y1="60" x2="330" y2="60" stroke="#7c3aed" strokeWidth="2" />
      <circle cx="330" cy="60" r="3.5" fill="#7c3aed" />
      <text x="338" y="64" fill="#7c3aed" stroke="none" fontSize="9.5" fontWeight="bold">Y0 = Din · S1' · S0'</text>

      {/* --- AND Gate 1 (Y1 = Din · S1' · S0) --- */}
      <line x1="22" y1="92" x2="185" y2="92" stroke="#059669" strokeWidth="1.2" />
      <circle cx="22" cy="92" r="2.5" fill="#059669" />

      <line x1="80" y1="100" x2="185" y2="100" stroke="#9333ea" strokeWidth="1.2" />
      <circle cx="80" cy="100" r="2.5" fill="#9333ea" />

      <line x1="102" y1="108" x2="185" y2="108" stroke="#4f46e5" strokeWidth="1.2" />
      <circle cx="102" cy="108" r="2.5" fill="#4f46e5" />

      <path d="M185 86 L205 86 C220 86 228 93 228 100 C228 107 220 114 205 114 L185 114 Z" fill="#faf5ff" stroke="#7c3aed" strokeWidth="1.5" />
      <text x="194" y="103" fill="#7c3aed" stroke="none" fontSize="7.5" fontWeight="bold">AND1</text>
      <line x1="228" y1="100" x2="330" y2="100" stroke="#7c3aed" strokeWidth="2" />
      <circle cx="330" cy="100" r="3.5" fill="#7c3aed" />
      <text x="338" y="104" fill="#7c3aed" stroke="none" fontSize="9.5" fontWeight="bold">Y1 = Din · S1' · S0</text>

      {/* --- AND Gate 2 (Y2 = Din · S1 · S0') --- */}
      <line x1="22" y1="132" x2="185" y2="132" stroke="#059669" strokeWidth="1.2" />
      <circle cx="22" cy="132" r="2.5" fill="#059669" />

      <line x1="50" y1="140" x2="185" y2="140" stroke="#4f46e5" strokeWidth="1.2" />
      <circle cx="50" cy="140" r="2.5" fill="#4f46e5" />

      <line x1="132" y1="148" x2="185" y2="148" stroke="#9333ea" strokeWidth="1.2" />
      <circle cx="132" cy="148" r="2.5" fill="#9333ea" />

      <path d="M185 126 L205 126 C220 126 228 133 228 140 C228 147 220 154 205 154 L185 154 Z" fill="#faf5ff" stroke="#7c3aed" strokeWidth="1.5" />
      <text x="194" y="143" fill="#7c3aed" stroke="none" fontSize="7.5" fontWeight="bold">AND2</text>
      <line x1="228" y1="140" x2="330" y2="140" stroke="#7c3aed" strokeWidth="2" />
      <circle cx="330" cy="140" r="3.5" fill="#7c3aed" />
      <text x="338" y="144" fill="#7c3aed" stroke="none" fontSize="9.5" fontWeight="bold">Y2 = Din · S1 · S0'</text>

      {/* --- AND Gate 3 (Y3 = Din · S1 · S0) --- */}
      <line x1="22" y1="172" x2="185" y2="172" stroke="#059669" strokeWidth="1.2" />
      <circle cx="22" cy="172" r="2.5" fill="#059669" />

      <line x1="50" y1="180" x2="185" y2="180" stroke="#4f46e5" strokeWidth="1.2" />
      <circle cx="50" cy="180" r="2.5" fill="#4f46e5" />

      <line x1="102" y1="188" x2="185" y2="188" stroke="#4f46e5" strokeWidth="1.2" />
      <circle cx="102" cy="188" r="2.5" fill="#4f46e5" />

      <path d="M185 166 L205 166 C220 166 228 173 228 180 C228 187 220 194 205 194 L185 194 Z" fill="#faf5ff" stroke="#7c3aed" strokeWidth="1.5" />
      <text x="194" y="183" fill="#7c3aed" stroke="none" fontSize="7.5" fontWeight="bold">AND3</text>
      <line x1="228" y1="180" x2="330" y2="180" stroke="#7c3aed" strokeWidth="2" />
      <circle cx="330" cy="180" r="3.5" fill="#7c3aed" />
      <text x="338" y="184" fill="#7c3aed" stroke="none" fontSize="9.5" fontWeight="bold">Y3 = Din · S1 · S0</text>

      <text x="14" y="224" fill="#64748b" stroke="none" fontSize="7.5">Single data line Din is steered into 1 of 4 output lines according to binary code on S1, S0.</text>
    </g>

    {/* Function Table Right */}
    <g transform="translate(488, 44)">
      <rect width="234" height="234" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="14" y="18" fill="#0f172a" stroke="none" fontSize="10.5" fontWeight="bold">1:4 DeMUX Function Table</text>

      <g transform="translate(10, 28)">
        <rect width="214" height="120" rx="3" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />
        <line x1="0" y1="24" x2="214" y2="24" stroke="#cbd5e1" strokeWidth="1" />
        <line x1="32" y1="0" x2="32" y2="120" stroke="#cbd5e1" />
        <line x1="64" y1="0" x2="64" y2="120" stroke="#cbd5e1" />
        <line x1="101" y1="0" x2="101" y2="120" stroke="#cbd5e1" />
        <line x1="138" y1="0" x2="138" y2="120" stroke="#cbd5e1" />
        <line x1="175" y1="0" x2="175" y2="120" stroke="#cbd5e1" />

        <text x="16" y="16" textAnchor="middle" fill="#4f46e5" stroke="none" fontSize="8" fontWeight="bold">S1</text>
        <text x="48" y="16" textAnchor="middle" fill="#4f46e5" stroke="none" fontSize="8" fontWeight="bold">S0</text>
        <text x="82" y="16" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="8" fontWeight="bold">Y0</text>
        <text x="120" y="16" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="8" fontWeight="bold">Y1</text>
        <text x="156" y="16" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="8" fontWeight="bold">Y2</text>
        <text x="194" y="16" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="8" fontWeight="bold">Y3</text>

        <text x="16" y="44" textAnchor="middle" fill="#334155" stroke="none" fontSize="8">0</text>
        <text x="48" y="44" textAnchor="middle" fill="#334155" stroke="none" fontSize="8">0</text>
        <text x="82" y="44" textAnchor="middle" fill="#059669" stroke="none" fontSize="8" fontWeight="bold">Din</text>
        <text x="120" y="44" textAnchor="middle" fill="#94a3b8" stroke="none" fontSize="8">0</text>
        <text x="156" y="44" textAnchor="middle" fill="#94a3b8" stroke="none" fontSize="8">0</text>
        <text x="194" y="44" textAnchor="middle" fill="#94a3b8" stroke="none" fontSize="8">0</text>

        <text x="16" y="68" textAnchor="middle" fill="#334155" stroke="none" fontSize="8">0</text>
        <text x="48" y="68" textAnchor="middle" fill="#334155" stroke="none" fontSize="8">1</text>
        <text x="82" y="68" textAnchor="middle" fill="#94a3b8" stroke="none" fontSize="8">0</text>
        <text x="120" y="68" textAnchor="middle" fill="#059669" stroke="none" fontSize="8" fontWeight="bold">Din</text>
        <text x="156" y="68" textAnchor="middle" fill="#94a3b8" stroke="none" fontSize="8">0</text>
        <text x="194" y="68" textAnchor="middle" fill="#94a3b8" stroke="none" fontSize="8">0</text>

        <text x="16" y="92" textAnchor="middle" fill="#334155" stroke="none" fontSize="8">1</text>
        <text x="48" y="92" textAnchor="middle" fill="#334155" stroke="none" fontSize="8">0</text>
        <text x="82" y="92" textAnchor="middle" fill="#94a3b8" stroke="none" fontSize="8">0</text>
        <text x="120" y="92" textAnchor="middle" fill="#94a3b8" stroke="none" fontSize="8">0</text>
        <text x="156" y="92" textAnchor="middle" fill="#059669" stroke="none" fontSize="8" fontWeight="bold">Din</text>
        <text x="194" y="92" textAnchor="middle" fill="#94a3b8" stroke="none" fontSize="8">0</text>

        <text x="16" y="112" textAnchor="middle" fill="#334155" stroke="none" fontSize="8">1</text>
        <text x="48" y="112" textAnchor="middle" fill="#334155" stroke="none" fontSize="8">1</text>
        <text x="82" y="112" textAnchor="middle" fill="#94a3b8" stroke="none" fontSize="8">0</text>
        <text x="120" y="112" textAnchor="middle" fill="#94a3b8" stroke="none" fontSize="8">0</text>
        <text x="156" y="112" textAnchor="middle" fill="#94a3b8" stroke="none" fontSize="8">0</text>
        <text x="194" y="112" textAnchor="middle" fill="#059669" stroke="none" fontSize="8" fontWeight="bold">Din</text>
      </g>
      <text x="14" y="172" fill="#1e3a8a" stroke="none" fontSize="8" fontWeight="bold">Data Distribution: 1 line → 2^n lines (n=2 ⇒ 4 outputs)</text>
      <text x="14" y="188" fill="#475569" stroke="none" fontSize="7.5">2-to-4 Decoder Operation: When Din = 1 (Enable pin),</text>
      <text x="14" y="200" fill="#475569" stroke="none" fontSize="7.5">outputs Y0..Y3 generate active-HIGH minterms m0..m3.</text>
      <text x="14" y="218" fill="#15803d" stroke="none" fontSize="7.5" fontWeight="bold">CU Exam: Explain DeMUX working and decoder equivalence.</text>
    </g>
  </svg>
);

// 7. Simple SR Flip-Flop Circuit with Gates & Truth Table
export const SRFlipFlopSvg: React.FC<{ className?: string }> = ({ className = "w-full max-w-3xl h-auto" }) => (
  <svg viewBox="0 0 720 280" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="720" height="280" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
    <rect x="0" y="0" width="720" height="34" rx="10" fill="#0f172a" />
    <text x="20" y="22" fill="#38bdf8" stroke="none" fontSize="12" fontWeight="bold">Simple Clocked SR Flip-Flop Circuit (4 NAND Gates) &amp; Truth Table</text>
    <text x="700" y="22" textAnchor="end" fill="#94a3b8" stroke="none" fontSize="10">Q(t+1) = S + R' · Q  (Valid strictly for SR = 0)</text>

    {/* Logic Schematic Left */}
    <g transform="translate(18, 44)">
      <rect width="425" height="224" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="14" y="18" fill="#0f172a" stroke="none" fontSize="10.5" fontWeight="bold">Gate-Level Schematic: Steering Gates (G1, G2) + Cross-Coupled Latch (G3, G4)</text>

      {/* Input S */}
      <line x1="16" y1="58" x2="75" y2="58" stroke="#1e293b" strokeWidth="2" />
      <circle cx="16" cy="58" r="3" fill="#1e293b" />
      <text x="6" y="62" fill="#1e293b" stroke="none" fontSize="11" fontWeight="bold">S</text>

      {/* Clock line CLK */}
      <line x1="16" y1="110" x2="52" y2="110" stroke="#4f46e5" strokeWidth="2" />
      <circle cx="16" cy="110" r="3" fill="#4f46e5" />
      <circle cx="52" cy="110" r="3" fill="#4f46e5" />
      <text x="4" y="125" fill="#4f46e5" stroke="none" fontSize="8.5" fontWeight="bold">CLK</text>
      <polyline points="52,110 52,74 75,74" stroke="#4f46e5" strokeWidth="1.6" />
      <polyline points="52,110 52,146 75,146" stroke="#4f46e5" strokeWidth="1.6" />

      {/* Input R */}
      <line x1="16" y1="162" x2="75" y2="162" stroke="#1e293b" strokeWidth="2" />
      <circle cx="16" cy="162" r="3" fill="#1e293b" />
      <text x="6" y="166" fill="#1e293b" stroke="none" fontSize="11" fontWeight="bold">R</text>

      {/* G1: Top Steering NAND */}
      <path d="M75 44 L95 44 C112 44 122 54 122 66 C122 78 112 88 95 88 L75 88 Z" fill="#eef2ff" stroke="#4f46e5" strokeWidth="1.6" />
      <circle cx="126" cy="66" r="3.5" fill="#ffffff" stroke="#4f46e5" strokeWidth="1.3" />
      <text x="94" y="69" textAnchor="middle" fill="#4f46e5" stroke="none" fontSize="8" fontWeight="bold">G1</text>
      <line x1="130" y1="66" x2="175" y2="66" stroke="#1e293b" strokeWidth="1.6" />
      <text x="145" y="60" fill="#64748b" stroke="none" fontSize="7.5">(S·CLK)'</text>

      {/* G2: Bottom Steering NAND */}
      <path d="M75 132 L95 132 C112 132 122 142 122 154 C122 166 112 176 95 176 L75 176 Z" fill="#eef2ff" stroke="#4f46e5" strokeWidth="1.6" />
      <circle cx="126" cy="154" r="3.5" fill="#ffffff" stroke="#4f46e5" strokeWidth="1.3" />
      <text x="94" y="157" textAnchor="middle" fill="#4f46e5" stroke="none" fontSize="8" fontWeight="bold">G2</text>
      <line x1="130" y1="154" x2="175" y2="154" stroke="#1e293b" strokeWidth="1.6" />
      <text x="145" y="172" fill="#64748b" stroke="none" fontSize="7.5">(R·CLK)'</text>

      {/* G3: Top Latch NAND */}
      <path d="M175 54 L198 54 C214 54 224 64 224 74 C224 84 214 94 198 94 L175 94 Z" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.8" />
      <circle cx="228" cy="74" r="3.5" fill="#ffffff" stroke="#1e293b" strokeWidth="1.4" />
      <text x="195" y="77" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="8" fontWeight="bold">G3</text>
      <line x1="232" y1="74" x2="340" y2="74" stroke="#1e293b" strokeWidth="2" />
      <circle cx="340" cy="74" r="4" fill="#059669" />
      <text x="350" y="78" fill="#059669" stroke="none" fontSize="13" fontWeight="bold">Q</text>

      {/* G4: Bottom Latch NAND */}
      <path d="M175 126 L198 126 C214 126 224 136 224 146 C224 156 214 166 198 166 L175 166 Z" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.8" />
      <circle cx="228" cy="146" r="3.5" fill="#ffffff" stroke="#1e293b" strokeWidth="1.4" />
      <text x="195" y="149" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="8" fontWeight="bold">G4</text>
      <line x1="232" y1="146" x2="340" y2="146" stroke="#1e293b" strokeWidth="2" />
      <circle cx="340" cy="146" r="4" fill="#dc2626" />
      <text x="350" y="150" fill="#dc2626" stroke="none" fontSize="13" fontWeight="bold">Q'</text>

      {/* Clean Cross-Coupling without overlapping wires */}
      {/* Feedback Q -> G4 bottom input */}
      <circle cx="265" cy="74" r="2.5" fill="#059669" />
      <polyline points="265,74 265,118 152,118 152,138 175,138" stroke="#059669" strokeWidth="1.3" />

      {/* Feedback Q' -> G3 top input */}
      <circle cx="285" cy="146" r="2.5" fill="#dc2626" />
      <polyline points="285,146 285,102 162,102 162,82 175,82" stroke="#dc2626" strokeWidth="1.3" />

      <text x="210" y="114" fill="#64748b" stroke="none" fontSize="7" fontStyle="italic">Cross-Coupled Feedback</text>
      <text x="16" y="210" fill="#1e3a8a" stroke="none" fontSize="8" fontWeight="bold">Steering NANDs G1 &amp; G2 gate S &amp; R with CLK; Cross-coupled G3 &amp; G4 store 1 bit.</text>
    </g>

    {/* Truth Table Right */}
    <g transform="translate(455, 44)">
      <rect width="250" height="224" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="15" y="20" fill="#0f172a" stroke="none" fontSize="10.5" fontWeight="bold">SR Flip-Flop Truth Table</text>

      <g transform="translate(15, 30)">
        <rect width="220" height="115" rx="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />
        <line x1="0" y1="24" x2="220" y2="24" stroke="#cbd5e1" strokeWidth="1" />
        <line x1="38" y1="0" x2="38" y2="115" stroke="#cbd5e1" />
        <line x1="76" y1="0" x2="76" y2="115" stroke="#cbd5e1" />
        <line x1="114" y1="0" x2="114" y2="115" stroke="#cbd5e1" />

        <text x="19" y="16" textAnchor="middle" fill="#4f46e5" stroke="none" fontSize="8" fontWeight="bold">CLK</text>
        <text x="57" y="16" textAnchor="middle" fill="#475569" stroke="none" fontSize="8" fontWeight="bold">S</text>
        <text x="95" y="16" textAnchor="middle" fill="#475569" stroke="none" fontSize="8" fontWeight="bold">R</text>
        <text x="167" y="16" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="8" fontWeight="bold">Next State Q(t+1)</text>

        <text x="19" y="42" textAnchor="middle" fill="#64748b" stroke="none" fontSize="8">1</text>
        <text x="57" y="42" textAnchor="middle" fill="#334155" stroke="none" fontSize="8">0</text>
        <text x="95" y="42" textAnchor="middle" fill="#334155" stroke="none" fontSize="8">0</text>
        <text x="167" y="42" textAnchor="middle" fill="#0369a1" stroke="none" fontSize="8" fontWeight="bold">Q(t) [Hold / No Change]</text>

        <text x="19" y="65" textAnchor="middle" fill="#64748b" stroke="none" fontSize="8">1</text>
        <text x="57" y="65" textAnchor="middle" fill="#334155" stroke="none" fontSize="8">0</text>
        <text x="95" y="65" textAnchor="middle" fill="#334155" stroke="none" fontSize="8">1</text>
        <text x="167" y="65" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="8" fontWeight="bold">0 [Reset State]</text>

        <text x="19" y="88" textAnchor="middle" fill="#64748b" stroke="none" fontSize="8">1</text>
        <text x="57" y="88" textAnchor="middle" fill="#334155" stroke="none" fontSize="8">1</text>
        <text x="95" y="88" textAnchor="middle" fill="#334155" stroke="none" fontSize="8">0</text>
        <text x="167" y="88" textAnchor="middle" fill="#16a34a" stroke="none" fontSize="8" fontWeight="bold">1 [Set State]</text>

        <text x="19" y="108" textAnchor="middle" fill="#64748b" stroke="none" fontSize="8">1</text>
        <text x="57" y="108" textAnchor="middle" fill="#334155" stroke="none" fontSize="8">1</text>
        <text x="95" y="108" textAnchor="middle" fill="#334155" stroke="none" fontSize="8">1</text>
        <text x="167" y="108" textAnchor="middle" fill="#b91c1c" stroke="none" fontSize="8" fontWeight="bold">Indeterminate (Invalid)</text>
      </g>
      <text x="15" y="165" fill="#b91c1c" stroke="none" fontSize="8" fontWeight="bold">Forbidden Condition: S = R = 1 produces Q = Q' = 1,</text>
      <text x="15" y="178" fill="#b91c1c" stroke="none" fontSize="7.5">violating logical complementarity and causing racing.</text>
      <text x="15" y="194" fill="#1e40af" stroke="none" fontSize="7.5" fontWeight="bold">JK Flip-Flop resolves this flaw through feedback!</text>
    </g>
  </svg>
);

// 8. Simple JK Flip-Flop Circuit with Gates & Truth Table
export const JKFlipFlopSvg: React.FC<{ className?: string }> = ({ className = "w-full max-w-3xl h-auto" }) => (
  <svg viewBox="0 0 740 285" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="740" height="285" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
    <rect x="0" y="0" width="740" height="34" rx="10" fill="#0f172a" />
    <text x="20" y="22" fill="#38bdf8" stroke="none" fontSize="12" fontWeight="bold">Simple JK Flip-Flop Logic Circuit (3-Input NANDs) &amp; Truth Table</text>
    <text x="720" y="22" textAnchor="end" fill="#94a3b8" stroke="none" fontSize="10">Q(t+1) = J · Q' + K' · Q</text>

    {/* Gate Schematic Left */}
    <g transform="translate(18, 44)">
      <rect width="445" height="228" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="14" y="18" fill="#0f172a" stroke="none" fontSize="10.5" fontWeight="bold">Logic Circuit: 3-Input Steering NANDs (G1, G2) with Perimeter Feedback</text>

      {/* Global Feedback from Q' (Red) across top margin */}
      <polyline points="330,146 390,146 390,20 62,20 62,52 80,52" stroke="#dc2626" strokeWidth="1.4" strokeDasharray="4 2" />
      <circle cx="330" cy="146" r="2.5" fill="#dc2626" />
      <text x="175" y="28" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">Feedback from Q' → Gate G1 (Top Pin)</text>

      {/* Global Feedback from Q (Green) across bottom margin */}
      <polyline points="310,74 375,74 375,202 62,202 62,168 80,168" stroke="#059669" strokeWidth="1.4" strokeDasharray="4 2" />
      <circle cx="310" cy="74" r="2.5" fill="#059669" />
      <text x="175" y="212" fill="#059669" stroke="none" fontSize="7.5" fontWeight="bold">Feedback from Q → Gate G2 (Bottom Pin)</text>

      {/* Input J */}
      <line x1="16" y1="66" x2="80" y2="66" stroke="#1e293b" strokeWidth="2" />
      <circle cx="16" cy="66" r="3" fill="#1e293b" />
      <text x="6" y="70" fill="#1e293b" stroke="none" fontSize="11" fontWeight="bold">J</text>

      {/* Clock line CLK */}
      <line x1="16" y1="110" x2="48" y2="110" stroke="#4f46e5" strokeWidth="2" />
      <circle cx="16" cy="110" r="3" fill="#4f46e5" />
      <circle cx="48" cy="110" r="3" fill="#4f46e5" />
      <text x="4" y="125" fill="#4f46e5" stroke="none" fontSize="8.5" fontWeight="bold">CLK</text>
      <polyline points="48,110 48,80 80,80" stroke="#4f46e5" strokeWidth="1.6" />
      <polyline points="48,110 48,140 80,140" stroke="#4f46e5" strokeWidth="1.6" />

      {/* Input K */}
      <line x1="16" y1="154" x2="80" y2="154" stroke="#1e293b" strokeWidth="2" />
      <circle cx="16" cy="154" r="3" fill="#1e293b" />
      <text x="6" y="158" fill="#1e293b" stroke="none" fontSize="11" fontWeight="bold">K</text>

      {/* G1: 3-Input NAND Gate */}
      <path d="M80 42 L104 42 C120 42 130 52 130 66 C130 80 120 90 104 90 L80 90 Z" fill="#eef2ff" stroke="#4f46e5" strokeWidth="1.6" />
      <circle cx="134" cy="66" r="3.5" fill="#ffffff" stroke="#4f46e5" strokeWidth="1.3" />
      <text x="103" y="69" textAnchor="middle" fill="#4f46e5" stroke="none" fontSize="8" fontWeight="bold">G1</text>
      <line x1="138" y1="66" x2="185" y2="66" stroke="#1e293b" strokeWidth="1.6" />

      {/* G2: 3-Input NAND Gate */}
      <path d="M80 130 L104 130 C120 130 130 140 130 154 C130 168 120 178 104 178 L80 178 Z" fill="#eef2ff" stroke="#4f46e5" strokeWidth="1.6" />
      <circle cx="134" cy="154" r="3.5" fill="#ffffff" stroke="#4f46e5" strokeWidth="1.3" />
      <text x="103" y="157" textAnchor="middle" fill="#4f46e5" stroke="none" fontSize="8" fontWeight="bold">G2</text>
      <line x1="138" y1="154" x2="185" y2="154" stroke="#1e293b" strokeWidth="1.6" />

      {/* G3: Top Latch NAND */}
      <path d="M185 54 L208 54 C224 54 234 64 234 74 C234 84 224 94 208 94 L185 94 Z" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.8" />
      <circle cx="238" cy="74" r="3.5" fill="#ffffff" stroke="#1e293b" strokeWidth="1.4" />
      <text x="205" y="77" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="8" fontWeight="bold">G3</text>
      <line x1="242" y1="74" x2="355" y2="74" stroke="#1e293b" strokeWidth="2" />
      <circle cx="355" cy="74" r="4" fill="#059669" />
      <text x="365" y="78" fill="#059669" stroke="none" fontSize="13" fontWeight="bold">Q</text>

      {/* G4: Bottom Latch NAND */}
      <path d="M185 126 L208 126 C224 126 234 136 234 146 C234 156 224 166 208 166 L185 166 Z" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.8" />
      <circle cx="238" cy="146" r="3.5" fill="#ffffff" stroke="#1e293b" strokeWidth="1.4" />
      <text x="205" y="149" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="8" fontWeight="bold">G4</text>
      <line x1="242" y1="146" x2="355" y2="146" stroke="#1e293b" strokeWidth="2" />
      <circle cx="355" cy="146" r="4" fill="#dc2626" />
      <text x="365" y="150" fill="#dc2626" stroke="none" fontSize="13" fontWeight="bold">Q'</text>

      {/* Non-overlapping Cross-Coupling in Latch */}
      <circle cx="270" cy="74" r="2.5" fill="#059669" />
      <polyline points="270,74 270,118 165,118 165,138 185,138" stroke="#059669" strokeWidth="1.3" />

      <circle cx="290" cy="146" r="2.5" fill="#dc2626" />
      <polyline points="290,146 290,102 175,102 175,82 185,82" stroke="#dc2626" strokeWidth="1.3" />
    </g>

    {/* Truth Table Right */}
    <g transform="translate(475, 44)">
      <rect width="250" height="228" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="15" y="20" fill="#0f172a" stroke="none" fontSize="10.5" fontWeight="bold">JK Flip-Flop Truth Table</text>

      <g transform="translate(15, 30)">
        <rect width="220" height="115" rx="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />
        <line x1="0" y1="24" x2="220" y2="24" stroke="#cbd5e1" strokeWidth="1" />
        <line x1="38" y1="0" x2="38" y2="115" stroke="#cbd5e1" />
        <line x1="76" y1="0" x2="76" y2="115" stroke="#cbd5e1" />
        <line x1="114" y1="0" x2="114" y2="115" stroke="#cbd5e1" />

        <text x="19" y="16" textAnchor="middle" fill="#4f46e5" stroke="none" fontSize="8" fontWeight="bold">CLK</text>
        <text x="57" y="16" textAnchor="middle" fill="#475569" stroke="none" fontSize="8" fontWeight="bold">J</text>
        <text x="95" y="16" textAnchor="middle" fill="#475569" stroke="none" fontSize="8" fontWeight="bold">K</text>
        <text x="167" y="16" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="8" fontWeight="bold">Next State Q(t+1)</text>

        <text x="19" y="42" textAnchor="middle" fill="#64748b" stroke="none" fontSize="8">1</text>
        <text x="57" y="42" textAnchor="middle" fill="#334155" stroke="none" fontSize="8">0</text>
        <text x="95" y="42" textAnchor="middle" fill="#334155" stroke="none" fontSize="8">0</text>
        <text x="167" y="42" textAnchor="middle" fill="#0369a1" stroke="none" fontSize="8" fontWeight="bold">Q(t) [Hold / No Change]</text>

        <text x="19" y="65" textAnchor="middle" fill="#64748b" stroke="none" fontSize="8">1</text>
        <text x="57" y="65" textAnchor="middle" fill="#334155" stroke="none" fontSize="8">0</text>
        <text x="95" y="65" textAnchor="middle" fill="#334155" stroke="none" fontSize="8">1</text>
        <text x="167" y="65" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="8" fontWeight="bold">0 [Reset State]</text>

        <text x="19" y="88" textAnchor="middle" fill="#64748b" stroke="none" fontSize="8">1</text>
        <text x="57" y="88" textAnchor="middle" fill="#334155" stroke="none" fontSize="8">1</text>
        <text x="95" y="88" textAnchor="middle" fill="#334155" stroke="none" fontSize="8">0</text>
        <text x="167" y="88" textAnchor="middle" fill="#16a34a" stroke="none" fontSize="8" fontWeight="bold">1 [Set State]</text>

        <text x="19" y="108" textAnchor="middle" fill="#64748b" stroke="none" fontSize="8">1</text>
        <text x="57" y="108" textAnchor="middle" fill="#334155" stroke="none" fontSize="8">1</text>
        <text x="95" y="108" textAnchor="middle" fill="#334155" stroke="none" fontSize="8">1</text>
        <text x="167" y="108" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="8" fontWeight="bold">Q'(t) [Toggle Mode]</text>
      </g>
      <text x="15" y="165" fill="#7c3aed" stroke="none" fontSize="8" fontWeight="bold">Toggle Mode (J = K = 1): Output inverts Q(t+1) = Q'(t).</text>
      <text x="15" y="178" fill="#1e3a8a" stroke="none" fontSize="7.5">Completely eliminates SR invalid condition: Q &amp; Q' are always complementary.</text>
      <text x="15" y="190" fill="#475569" stroke="none" fontSize="7.5">Characteristic Equation: Q(t+1) = J · Q' + K' · Q</text>
    </g>
  </svg>
);

// 9. Simple D Flip-Flop Circuit with Gates & Truth Table
export const DFlipFlopSvg: React.FC<{ className?: string }> = ({ className = "w-full max-w-3xl h-auto" }) => (
  <svg viewBox="0 0 740 280" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="740" height="280" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
    <rect x="0" y="0" width="740" height="34" rx="10" fill="#0f172a" />
    <text x="20" y="22" fill="#38bdf8" stroke="none" fontSize="12" fontWeight="bold">Simple D Flip-Flop Circuit (NAND Gates + Inverter) &amp; Truth Table</text>
    <text x="720" y="22" textAnchor="end" fill="#94a3b8" stroke="none" fontSize="10">Q(t+1) = D</text>

    {/* Gate Schematic Left */}
    <g transform="translate(18, 44)">
      <rect width="445" height="224" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="14" y="18" fill="#0f172a" stroke="none" fontSize="10.5" fontWeight="bold">Gate-Level Schematic: Data Input D + NOT Inverter ensuring S = D, R = D'</text>

      {/* Input D */}
      <line x1="16" y1="58" x2="42" y2="58" stroke="#1e293b" strokeWidth="2" />
      <circle cx="16" cy="58" r="3" fill="#1e293b" />
      <circle cx="42" cy="58" r="3" fill="#1e293b" />
      <line x1="42" y1="58" x2="95" y2="58" stroke="#1e293b" strokeWidth="1.8" />
      <text x="6" y="62" fill="#1e293b" stroke="none" fontSize="11" fontWeight="bold">D</text>

      {/* Inverter on D -> Bottom Steering Gate */}
      <polyline points="42,58 42,162 55,162" stroke="#d97706" strokeWidth="1.8" />
      <polygon points="55,154 55,170 70,162" fill="#fffbeb" stroke="#d97706" strokeWidth="1.3" />
      <circle cx="73" cy="162" r="2.5" fill="#ffffff" stroke="#d97706" strokeWidth="1.2" />
      <line x1="76" y1="162" x2="95" y2="162" stroke="#d97706" strokeWidth="1.8" />
      <text x="78" y="153" fill="#d97706" stroke="none" fontSize="8" fontWeight="bold">D'</text>

      {/* Clock line CLK */}
      <line x1="16" y1="110" x2="65" y2="110" stroke="#4f46e5" strokeWidth="2" />
      <circle cx="16" cy="110" r="3" fill="#4f46e5" />
      <circle cx="65" cy="110" r="3" fill="#4f46e5" />
      <text x="4" y="125" fill="#4f46e5" stroke="none" fontSize="8.5" fontWeight="bold">CLK</text>
      <polyline points="65,110 65,74 95,74" stroke="#4f46e5" strokeWidth="1.6" />
      <polyline points="65,110 65,146 95,146" stroke="#4f46e5" strokeWidth="1.6" />

      {/* G1: Steering NAND 1 */}
      <path d="M95 44 L118 44 C134 44 144 54 144 66 C144 78 134 88 118 88 L95 88 Z" fill="#eef2ff" stroke="#4f46e5" strokeWidth="1.6" />
      <circle cx="148" cy="66" r="3.5" fill="#ffffff" stroke="#4f46e5" strokeWidth="1.3" />
      <text x="117" y="69" textAnchor="middle" fill="#4f46e5" stroke="none" fontSize="8" fontWeight="bold">G1</text>
      <line x1="152" y1="66" x2="195" y2="66" stroke="#1e293b" strokeWidth="1.6" />

      {/* G2: Steering NAND 2 */}
      <path d="M95 132 L118 132 C134 132 144 142 144 154 C144 166 134 176 118 176 L95 176 Z" fill="#eef2ff" stroke="#4f46e5" strokeWidth="1.6" />
      <circle cx="148" cy="154" r="3.5" fill="#ffffff" stroke="#4f46e5" strokeWidth="1.3" />
      <text x="117" y="157" textAnchor="middle" fill="#4f46e5" stroke="none" fontSize="8" fontWeight="bold">G2</text>
      <line x1="152" y1="154" x2="195" y2="154" stroke="#1e293b" strokeWidth="1.6" />

      {/* G3: Top Latch NAND */}
      <path d="M195 54 L218 54 C234 54 244 64 244 74 C244 84 234 94 218 94 L195 94 Z" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.8" />
      <circle cx="248" cy="74" r="3.5" fill="#ffffff" stroke="#1e293b" strokeWidth="1.4" />
      <text x="215" y="77" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="8" fontWeight="bold">G3</text>
      <line x1="252" y1="74" x2="360" y2="74" stroke="#1e293b" strokeWidth="2" />
      <circle cx="360" cy="74" r="4" fill="#059669" />
      <text x="370" y="78" fill="#059669" stroke="none" fontSize="13" fontWeight="bold">Q</text>

      {/* G4: Bottom Latch NAND */}
      <path d="M195 126 L218 126 C234 126 244 136 244 146 C244 156 234 166 218 166 L195 166 Z" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.8" />
      <circle cx="248" cy="146" r="3.5" fill="#ffffff" stroke="#1e293b" strokeWidth="1.4" />
      <text x="215" y="149" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="8" fontWeight="bold">G4</text>
      <line x1="252" y1="146" x2="360" y2="146" stroke="#1e293b" strokeWidth="2" />
      <circle cx="360" cy="146" r="4" fill="#dc2626" />
      <text x="370" y="150" fill="#dc2626" stroke="none" fontSize="13" fontWeight="bold">Q'</text>

      {/* Non-overlapping Latch Cross-coupling */}
      <circle cx="280" cy="74" r="2.5" fill="#059669" />
      <polyline points="280,74 280,118 175,118 175,138 195,138" stroke="#059669" strokeWidth="1.3" />

      <circle cx="300" cy="146" r="2.5" fill="#dc2626" />
      <polyline points="300,146 300,102 185,102 185,82 195,82" stroke="#dc2626" strokeWidth="1.3" />
    </g>

    {/* Truth Table Right */}
    <g transform="translate(475, 44)">
      <rect width="250" height="224" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="15" y="20" fill="#0f172a" stroke="none" fontSize="10.5" fontWeight="bold">D Flip-Flop Truth Table</text>

      <g transform="translate(15, 32)">
        <rect width="220" height="85" rx="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />
        <line x1="0" y1="24" x2="220" y2="24" stroke="#cbd5e1" strokeWidth="1" />
        <line x1="55" y1="0" x2="55" y2="85" stroke="#cbd5e1" />
        <line x1="110" y1="0" x2="110" y2="85" stroke="#cbd5e1" />

        <text x="27" y="16" textAnchor="middle" fill="#4f46e5" stroke="none" fontSize="8" fontWeight="bold">CLK</text>
        <text x="82" y="16" textAnchor="middle" fill="#1e40af" stroke="none" fontSize="8" fontWeight="bold">Input D</text>
        <text x="165" y="16" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="8" fontWeight="bold">Next State Q(t+1)</text>

        <text x="27" y="46" textAnchor="middle" fill="#64748b" stroke="none" fontSize="8">1</text>
        <text x="82" y="46" textAnchor="middle" fill="#334155" stroke="none" fontSize="9">0</text>
        <text x="165" y="46" textAnchor="middle" fill="#dc2626" stroke="none" fontSize="9" fontWeight="bold">0 [Reset State]</text>

        <text x="27" y="72" textAnchor="middle" fill="#64748b" stroke="none" fontSize="8">1</text>
        <text x="82" y="72" textAnchor="middle" fill="#334155" stroke="none" fontSize="9">1</text>
        <text x="165" y="72" textAnchor="middle" fill="#059669" stroke="none" fontSize="9" fontWeight="bold">1 [Set State]</text>
      </g>
      <text x="15" y="145" fill="#1e40af" stroke="none" fontSize="8" fontWeight="bold">Characteristic Equation: Q(t+1) = D</text>
      <text x="15" y="158" fill="#475569" stroke="none" fontSize="7.5">• Prevents invalid state by guaranteeing complementary inputs S &amp; R.</text>
      <text x="15" y="170" fill="#475569" stroke="none" fontSize="7.5">• Stores exactly 1 bit; used in registers, pipeline buffers &amp; RAM cells.</text>
    </g>
  </svg>
);

// 10. Simple T Flip-Flop Circuit with Gates & Truth Table
export const TFlipFlopSvg: React.FC<{ className?: string }> = ({ className = "w-full max-w-3xl h-auto" }) => (
  <svg viewBox="0 0 740 285" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="740" height="285" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
    <rect x="0" y="0" width="740" height="34" rx="10" fill="#0f172a" />
    <text x="20" y="22" fill="#38bdf8" stroke="none" fontSize="12" fontWeight="bold">Simple T Flip-Flop Circuit (J &amp; K Tied Together to T) &amp; Truth Table</text>
    <text x="720" y="22" textAnchor="end" fill="#94a3b8" stroke="none" fontSize="10">Q(t+1) = T ⊕ Q</text>

    {/* Gate Schematic Left */}
    <g transform="translate(18, 44)">
      <rect width="445" height="228" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="14" y="18" fill="#0f172a" stroke="none" fontSize="10.5" fontWeight="bold">Gate-Level Schematic: T Tied to Both 3-Input NANDs (G1, G2) + Cross-Coupled Latch</text>

      {/* Global Feedback from Q' (Red) across top margin */}
      <polyline points="330,146 390,146 390,20 62,20 62,52 80,52" stroke="#dc2626" strokeWidth="1.4" strokeDasharray="4 2" />
      <circle cx="330" cy="146" r="2.5" fill="#dc2626" />
      <text x="175" y="28" fill="#dc2626" stroke="none" fontSize="7.5" fontWeight="bold">Feedback from Q' → Gate G1 (Top Pin)</text>

      {/* Global Feedback from Q (Green) across bottom margin */}
      <polyline points="310,74 375,74 375,202 62,202 62,168 80,168" stroke="#059669" strokeWidth="1.4" strokeDasharray="4 2" />
      <circle cx="310" cy="74" r="2.5" fill="#059669" />
      <text x="175" y="212" fill="#059669" stroke="none" fontSize="7.5" fontWeight="bold">Feedback from Q → Gate G2 (Bottom Pin)</text>

      {/* Input T tied to both top and bottom gates */}
      <line x1="16" y1="110" x2="36" y2="110" stroke="#7c3aed" strokeWidth="2.2" />
      <circle cx="16" cy="110" r="3" fill="#7c3aed" />
      <circle cx="36" cy="110" r="3" fill="#7c3aed" />
      <polyline points="36,110 36,66 80,66" stroke="#7c3aed" strokeWidth="1.8" />
      <polyline points="36,110 36,154 80,154" stroke="#7c3aed" strokeWidth="1.8" />
      <text x="6" y="104" fill="#7c3aed" stroke="none" fontSize="11" fontWeight="bold">T</text>
      <text x="4" y="122" fill="#6d28d9" stroke="none" fontSize="7" fontWeight="bold">(J=K=T)</text>

      {/* Clock line CLK */}
      <line x1="16" y1="130" x2="52" y2="130" stroke="#4f46e5" strokeWidth="2" />
      <circle cx="16" cy="130" r="3" fill="#4f46e5" />
      <circle cx="52" cy="130" r="3" fill="#4f46e5" />
      <text x="4" y="142" fill="#4f46e5" stroke="none" fontSize="8" fontWeight="bold">CLK</text>
      <polyline points="52,130 52,80 80,80" stroke="#4f46e5" strokeWidth="1.6" />
      <polyline points="52,130 52,140 80,140" stroke="#4f46e5" strokeWidth="1.6" />

      {/* G1: 3-Input NAND Gate */}
      <path d="M80 42 L104 42 C120 42 130 52 130 66 C130 80 120 90 104 90 L80 90 Z" fill="#faf5ff" stroke="#7c3aed" strokeWidth="1.6" />
      <circle cx="134" cy="66" r="3.5" fill="#ffffff" stroke="#7c3aed" strokeWidth="1.3" />
      <text x="103" y="69" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="8" fontWeight="bold">G1</text>
      <line x1="138" y1="66" x2="185" y2="66" stroke="#1e293b" strokeWidth="1.6" />

      {/* G2: 3-Input NAND Gate */}
      <path d="M80 130 L104 130 C120 130 130 140 130 154 C130 168 120 178 104 178 L80 178 Z" fill="#faf5ff" stroke="#7c3aed" strokeWidth="1.6" />
      <circle cx="134" cy="154" r="3.5" fill="#ffffff" stroke="#7c3aed" strokeWidth="1.3" />
      <text x="103" y="157" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="8" fontWeight="bold">G2</text>
      <line x1="138" y1="154" x2="185" y2="154" stroke="#1e293b" strokeWidth="1.6" />

      {/* G3: Top Latch NAND */}
      <path d="M185 54 L208 54 C224 54 234 64 234 74 C234 84 224 94 208 94 L185 94 Z" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.8" />
      <circle cx="238" cy="74" r="3.5" fill="#ffffff" stroke="#1e293b" strokeWidth="1.4" />
      <text x="205" y="77" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="8" fontWeight="bold">G3</text>
      <line x1="242" y1="74" x2="355" y2="74" stroke="#1e293b" strokeWidth="2" />
      <circle cx="355" cy="74" r="4" fill="#059669" />
      <text x="365" y="78" fill="#059669" stroke="none" fontSize="13" fontWeight="bold">Q</text>

      {/* G4: Bottom Latch NAND */}
      <path d="M185 126 L208 126 C224 126 234 136 234 146 C234 156 224 166 208 166 L185 166 Z" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.8" />
      <circle cx="238" cy="146" r="3.5" fill="#ffffff" stroke="#1e293b" strokeWidth="1.4" />
      <text x="205" y="149" textAnchor="middle" fill="#1e293b" stroke="none" fontSize="8" fontWeight="bold">G4</text>
      <line x1="242" y1="146" x2="355" y2="146" stroke="#1e293b" strokeWidth="2" />
      <circle cx="355" cy="146" r="4" fill="#dc2626" />
      <text x="365" y="150" fill="#dc2626" stroke="none" fontSize="13" fontWeight="bold">Q'</text>

      {/* Non-overlapping Latch Cross-coupling */}
      <circle cx="270" cy="74" r="2.5" fill="#059669" />
      <polyline points="270,74 270,118 165,118 165,138 185,138" stroke="#059669" strokeWidth="1.3" />

      <circle cx="290" cy="146" r="2.5" fill="#dc2626" />
      <polyline points="290,146 290,102 175,102 175,82 185,82" stroke="#dc2626" strokeWidth="1.3" />
    </g>

    {/* Truth Table Right */}
    <g transform="translate(475, 44)">
      <rect width="250" height="228" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="15" y="20" fill="#0f172a" stroke="none" fontSize="10.5" fontWeight="bold">T Flip-Flop Truth Table</text>

      <g transform="translate(15, 32)">
        <rect width="220" height="85" rx="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />
        <line x1="0" y1="24" x2="220" y2="24" stroke="#cbd5e1" strokeWidth="1" />
        <line x1="55" y1="0" x2="55" y2="85" stroke="#cbd5e1" />
        <line x1="110" y1="0" x2="110" y2="85" stroke="#cbd5e1" />

        <text x="27" y="16" textAnchor="middle" fill="#4f46e5" stroke="none" fontSize="8" fontWeight="bold">CLK</text>
        <text x="82" y="16" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="8" fontWeight="bold">Input T</text>
        <text x="165" y="16" textAnchor="middle" fill="#0f172a" stroke="none" fontSize="8" fontWeight="bold">Next State Q(t+1)</text>

        <text x="27" y="46" textAnchor="middle" fill="#64748b" stroke="none" fontSize="8">1</text>
        <text x="82" y="46" textAnchor="middle" fill="#334155" stroke="none" fontSize="9">0</text>
        <text x="165" y="46" textAnchor="middle" fill="#0369a1" stroke="none" fontSize="9" fontWeight="bold">Q(t) [Hold / No Change]</text>

        <text x="27" y="72" textAnchor="middle" fill="#64748b" stroke="none" fontSize="8">1</text>
        <text x="82" y="72" textAnchor="middle" fill="#334155" stroke="none" fontSize="9">1</text>
        <text x="165" y="72" textAnchor="middle" fill="#7c3aed" stroke="none" fontSize="9" fontWeight="bold">Q'(t) [Toggle Mode]</text>
      </g>
      <text x="15" y="145" fill="#7c3aed" stroke="none" fontSize="8" fontWeight="bold">Characteristic: Q(t+1) = T ⊕ Q = T·Q' + T'·Q</text>
      <text x="15" y="158" fill="#475569" stroke="none" fontSize="7.5">• Formed by connecting J and K inputs together (J = K = T).</text>
      <text x="15" y="170" fill="#475569" stroke="none" fontSize="7.5">• Frequency Halver: Output toggles at half clock frequency (f = f_clk / 2).</text>
    </g>
  </svg>
);

// Composite alias for backwards compatibility
export const DAndTFlipFlopSvg: React.FC<{ className?: string }> = ({ className = "w-full max-w-3xl h-auto" }) => (
  <DFlipFlopSvg className={className} />
);


