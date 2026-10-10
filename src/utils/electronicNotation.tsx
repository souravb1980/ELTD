import React from 'react';

/**
 * Utility to format electronic notation terms (specifically BJT and circuit parameters)
 * such that suffixes / indices (B, C, E, CE, CBO, CEO, CC, BE, etc.) are rendered in proper subscript (<sub>).
 *
 * Example:
 *   "IE = IB + IC, IC = α IE + ICBO = β IB + ICEO, VCE, VBE, RC, RB, VCC"
 *   becomes
 *   "I_E = I_B + I_C, I_C = α I_E + I_CBO = β I_B + I_CEO, V_CE, V_BE, R_C, R_B, V_CC"
 *   rendered cleanly with React <sub> elements.
 */

const ELECTRONIC_NOTATION_REGEX = /(VCE\(sat\)|IC\(sat\)|IB\(sat\)|ICBO|ICEO|BVCEO|BVCBO|VCEQ|ICQ|IEQ|IBQ|VCE|VBE|VCC|Vcc|VBB|VCB|VEB|InE|IpE|IrB|InC|hfe|hie|hre|hoe|hfb|re'|r_e'|A_v|A_i|A_p|R_in|R_out|Vth|Rth|IB|IE|\bIC\b|\bRC\b|\bRB\b|\bRE\b|\bRL\b|I_[A-Za-z0-9()']+|V_[A-Za-z0-9()']+|R_[A-Za-z0-9()']+|A_[A-Za-z0-9()']+|C_[A-Za-z0-9()']+)/g;

function isIntegratedCircuitContext(fullText: string, matchIndex: number): boolean {
  const before = fullText.slice(Math.max(0, matchIndex - 15), matchIndex).toLowerCase();
  const after = fullText.slice(matchIndex + 2, matchIndex + 15).toLowerCase();
  if (/(741|555|timer|digital|analog|linear|integrated|consumer)\s*$/.test(before)) return true;
  if (/^\s*(741|555|timer|chip|package|op-amp|socket)/.test(after)) return true;
  return false;
}

function splitBaseSubscript(token: string): { base: string; sub: string } {
  if (
    token.startsWith('I_') ||
    token.startsWith('V_') ||
    token.startsWith('R_') ||
    token.startsWith('A_') ||
    token.startsWith('C_')
  ) {
    return { base: token[0], sub: token.slice(2) };
  }
  if (token === "r_e'" || token === "re'") return { base: 'r', sub: "e'" };
  if (token.startsWith('BV')) return { base: 'BV', sub: token.slice(2) };
  if (token.startsWith('h') && ['hfe', 'hie', 'hre', 'hoe', 'hfb'].includes(token)) {
    return { base: 'h', sub: token.slice(1) };
  }
  if (token.startsWith('Vcc') || token.startsWith('VCC')) return { base: 'V', sub: 'CC' };
  if (token === 'Vth') return { base: 'V', sub: 'th' };
  if (token === 'Rth') return { base: 'R', sub: 'th' };
  if (token.startsWith('In') || token.startsWith('Ip') || token.startsWith('Ir')) {
    return { base: 'I', sub: token.slice(1) };
  }
  if (token.startsWith('VCE(sat)')) return { base: 'V', sub: 'CE(sat)' };
  if (token.startsWith('IC(sat)')) return { base: 'I', sub: 'C(sat)' };
  if (token.startsWith('IB(sat)')) return { base: 'I', sub: 'B(sat)' };
  if (token.startsWith('V') || token.startsWith('I') || token.startsWith('R') || token.startsWith('C')) {
    return { base: token[0], sub: token.slice(1) };
  }
  return { base: token, sub: '' };
}

export function formatElectronicText(text: string): React.ReactNode {
  if (!text) return text;

  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  // Reset regex state
  ELECTRONIC_NOTATION_REGEX.lastIndex = 0;

  while ((match = ELECTRONIC_NOTATION_REGEX.exec(text)) !== null) {
    const matchIndex = match.index;
    const token = match[0];

    // Push text preceding this match
    if (matchIndex > lastIndex) {
      elements.push(text.substring(lastIndex, matchIndex));
    }

    // Special check for "IC" (Integrated Circuit vs Collector Current)
    if (token === 'IC' && isIntegratedCircuitContext(text, matchIndex)) {
      elements.push(token);
    } else {
      const { base, sub } = splitBaseSubscript(token);
      if (sub) {
        elements.push(
          <span key={`sub-${matchIndex}`} className="inline-block whitespace-nowrap">
            {base}
            <sub className="text-[75%] font-bold tracking-normal align-sub select-all">{sub}</sub>
          </span>
        );
      } else {
        elements.push(token);
      }
    }

    lastIndex = matchIndex + token.length;
  }

  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return <>{elements}</>;
}

export const ElectronicText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  return <span className={className}>{formatElectronicText(text)}</span>;
};
