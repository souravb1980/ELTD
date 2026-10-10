import React from 'react';
import { GraduationCap } from 'lucide-react';
import { courseModulesData } from '../data/coursesData';

interface FooterProps {
  onSelectModule: (moduleId: string) => void;
  onOpenExamModalities: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectModule, onOpenExamModalities }) => {
  return (
    <footer className="bg-[#0b172a] text-slate-300 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Course Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded bg-blue-900 flex items-center justify-center text-amber-300 font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="font-bold text-sm tracking-tight text-white">IDC Electronics (ELTD)</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Academic study and reference repository for Interdisciplinary Course in Electronics (IDC - ELTD) offered across Semester I, II, and III under the Curriculum and Credit Framework (CCF-2022) / NEP.
            </p>
          </div>

          {/* Col 2 & 3: Semesters I, II & III Modules (All Units) */}
          <div className="space-y-3 text-xs md:col-span-2">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px] mb-2 flex flex-wrap items-center justify-between border-b border-slate-800 pb-2 gap-2">
              <span>Semesters I, II & III Modules</span>
              <span className="text-[10px] text-amber-300 font-mono">All Units Under Common Syllabus</span>
            </div>
            
            <p className="text-[11px] text-slate-400 mb-2">
              All 7 curriculum units are common across Semester I, Semester II, and Semester III under the CCF-2022 framework:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {courseModulesData.map((m, idx) => (
                <button
                  key={m.id}
                  onClick={() => onSelectModule(m.id)}
                  className="hover:text-amber-300 text-slate-400 transition-colors text-left flex items-start gap-2 group"
                >
                  <span className="text-amber-400/80 font-mono text-[10px] font-bold shrink-0 mt-0.5 group-hover:text-amber-300">
                    {idx + 1}.
                  </span>
                  <span className="leading-snug">{m.title}</span>
                </button>
              ))}
            </div>

            <div className="pt-3 mt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-[11px]">
              <button
                onClick={onOpenExamModalities}
                className="hover:text-amber-300 text-amber-400 font-semibold transition-colors flex items-center gap-1"
              >
                <span>Exam Modalities & Marks Distribution (50 Theory + 25 Tutorial = 75 Marks)</span>
              </button>
            </div>
          </div>

          {/* Col 4: Examination & Academic Reference */}
          <div className="space-y-3 text-xs">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Evaluation Pattern
            </div>
            <p className="text-slate-400 leading-relaxed">
              Examinations follow the CU IDC pattern: End-Sem Theory (50 marks / 2 hrs) and Tutorial Assessment (25 marks: 5M Term Paper + 20M Written Exam). There is no practical examination and no viva-voce (Total: 75 marks / 3 Credits).
            </p>
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-[11px] text-slate-400">
              <span className="text-amber-300 font-semibold block mb-0.5">Written Theory (50 Marks):</span>
              10 out of 12 short questions (2M each = 20M) + 3 out of 5 broad questions (10M each = 30M). Only two groups.
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            @Sourav Kumar Bhowmick, Asutosh College. Developed for educational and revision purposes
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Kolkata, West Bengal, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
