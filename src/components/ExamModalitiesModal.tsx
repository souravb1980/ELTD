import React from 'react';
import { X, Award, Clock, FileCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { examModalitiesData } from '../data/coursesData';

interface ExamModalitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExamModalitiesModal: React.FC<ExamModalitiesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 my-8">
        {/* Header */}
        <div className="p-6 bg-[#002b66] text-white flex justify-between items-start">
          <div>
            <div className="text-amber-300 font-semibold text-xs tracking-wider uppercase">CU · CCF-2022 / NEP</div>
            <h2 className="text-2xl font-bold mt-1">Examination Modalities & Evaluation Framework</h2>
            <p className="text-xs text-slate-300 mt-1">
              Course Code: ELTD (Interdisciplinary Course in Electronics) · Semesters I, II, & III
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-8 text-slate-800 text-sm">
          {/* Overview of the 3-Credit Structure */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-900" />
              <span>Credit & Marks Distribution (Per Semester)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="text-xs text-slate-500 block">End-Sem Theory</span>
                <span className="text-xl font-bold font-mono text-blue-900">50 Marks</span>
                <span className="text-[10px] text-slate-500 block">2 Hours Written Exam (50M)</span>
              </div>
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                <span className="text-xs text-emerald-800 font-semibold block">Tutorial Evaluation</span>
                <span className="text-xl font-bold font-mono text-emerald-950">25 Marks</span>
                <span className="text-[10px] text-emerald-700 block">Term Paper (5M) + Written Exam (20M)</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="text-xs text-slate-500 block">Total Course Marks</span>
                <span className="text-xl font-bold font-mono text-blue-900">75 Marks</span>
                <span className="text-[10px] text-slate-500 block">3 Credits (2 Theory + 1 Tutorial)</span>
              </div>
            </div>

            {/* Note on Zero Practical and Zero Attendance marks */}
            <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-xl space-y-1.5 text-xs text-blue-900">
              <div className="flex items-center gap-2 font-semibold">
                <AlertCircle className="w-4 h-4 text-blue-700 shrink-0" />
                <span>
                  All Three Semesters (Semester I, II, & III) Share the Exact Same Syllabus:
                </span>
              </div>
              <p className="text-blue-950/80 leading-relaxed pl-6">
                Under the CU CCF-2022 / NEP framework, students taking IDC Electronics in <strong>Semester I, Semester II, or Semester III</strong> are enrolled in the same course curriculum (ELTD-IDC). The syllabus units, textbook references, examination duration (2 Hours), written question paper pattern (50 Marks), and continuous tutorial assessment (25 Marks) are <strong>completely identical across all three semesters</strong>.
              </p>
              <div className="pl-6 text-[11px] text-emerald-800 font-medium">
                ✓ Tutorial: 25 Marks [Term Paper (5M) + Written Exam (20M)] · ✓ Theory: 50 Marks · Total: 75 Marks · ✕ No Practical Marks · ✕ No Class Attendance Marks · ✕ No Viva-Voce.
              </div>
            </div>
          </div>

          {/* 7 Common Syllabus Units Covered in Sem I, II, and III */}
          <div className="border border-slate-200 rounded-xl p-5 bg-white space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-blue-900" />
                <span>7 Core Units of the Common Syllabus (Semesters I, II, & III)</span>
              </h3>
              <span className="text-xs bg-blue-100 text-blue-900 font-semibold px-2 py-0.5 rounded">
                Same for All 3 Semesters
              </span>
            </div>
            
            <p className="text-xs text-slate-600 leading-relaxed">
              Every student appearing for the IDC Electronics examination—whether in Semester I (ELTD-IDC-1), Semester II (ELTD-IDC-2), or Semester III (ELTD-IDC-3)—is examined on the following 7 core units:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-blue-950 block">Unit 1. Basic Circuit Components</span>
                <span className="text-slate-600 text-[11px] leading-relaxed">Circuit Elements: Resistors, Inductors, Capacitors, Transformers, concept of voltage and current sources, Kirchhoff’s current and voltage laws, concept of impedance, equivalent impedance of series and parallel combinations of R, L and C.</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-blue-950 block">Unit 2. Semiconductor Devices and Circuits</span>
                <span className="text-slate-600 text-[11px] leading-relaxed">Intrinsic and Extrinsic Semiconductors, Direct and Indirect Bandgap Semiconductors, Basic Concept of P-N Junction, P-N Junction Diode, Zener Diode, Solar Cell, LED and their I-V Characteristics, Use of Diode as Half-Wave and Full-Wave (Center Tapped) Rectifier.</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-blue-950 block">Unit 3. Bipolar Junction Transistors (BJT)</span>
                <span className="text-slate-600 text-[11px] leading-relaxed">NPN and PNP Transistors, Energy Band Diagram, Working Principle of Transistor as Amplifier and Switch, CE, CB, CC Configurations, Input and Output Characteristics of NPN Transistor in CB and CE modes, Cut-off, Active and Saturation Regions, Current Components in Active Mode, Need for Biasing and Bias Stability, Operating (Q) Point, Small Signal h-Parameter Model of CE Transistor.</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-blue-950 block">Unit 4. Field Effect Transistor</span>
                <span className="text-slate-600 text-[11px] leading-relaxed">MOSFET Structure, Depletion and Enhancement Modes, Complimentary MOS (CMOS).</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-blue-950 block">Unit 5. Operational Amplifiers and Its Applications</span>
                <span className="text-slate-600 text-[11px] leading-relaxed">Op-Amp and its Characteristics (Ideal and practical), Open and Closed Loop Configuration, Concept of virtual ground, Inverting, Non-Inverting, Summing and Difference Amplifiers.</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-blue-950 block">Unit 6. Digital Logic Circuits</span>
                <span className="text-slate-600 text-[11px] leading-relaxed">Number Systems (Binary, Decimal, Hexadecimal), Addition and Subtraction (using 1’s and 2’s complement method) of Binary Numbers, Basic Postulates and Fundamental Theorems of Boolean Algebra, De Morgan’s Theorems, Logic Symbol and Truth Tables of Basic Logic Gates (AND, OR, NOT), Derived Logic Gates (NAND, NOR, XOR and XNOR), Universal Property of NOR and NAND gates, Karnaugh Map Simplification (up to 4 Variables), Half-Adder and Full-Adder Circuits, Multiplexer, de-Multiplexer, SR, JK, D and T Flip Flops (Truth Table Only).</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 md:col-span-2">
                <span className="font-bold text-blue-950 block">Unit 7. Electronic Communication</span>
                <span className="text-slate-600 text-[11px] leading-relaxed">Introduction to Communication, Need for Modulation, Concept of AM and FM (Qualitative Discussions, No Derivations).</span>
              </div>
            </div>
          </div>

          {/* Semester-wise breakdown table */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-blue-900" />
              <span>Examination Paper Structure (Identical for Sem I, II, & III)</span>
            </h3>

            <div className="space-y-4">
              {examModalitiesData.map((em, idx) => (
                <div key={idx} className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-blue-900 text-white rounded text-xs font-bold">{em.semester}</span>
                      <span className="font-mono text-xs font-semibold text-slate-700">{em.courseCode}</span>
                      <span className="text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-medium">
                        Same Common Syllabus
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{em.examDuration}</span>
                      <span>· Total {em.totalMarks} Marks</span>
                    </div>
                  </div>

                  <div className="font-semibold text-slate-900 text-sm">{em.courseTitle}</div>

                  <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-2 text-xs">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="font-semibold text-blue-950 uppercase tracking-wider text-[11px]">
                        Theory Question Paper Pattern (50 Marks):
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                        Only Two Groups (Group A & Group B)
                      </span>
                    </div>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>{em.questionPattern.groupA}</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>{em.questionPattern.groupB}</strong></span>
                      </li>
                    </ul>
                    <div className="pt-1.5 text-[11px] text-slate-600 border-t border-slate-100 flex flex-wrap items-center justify-between gap-1">
                      <span><strong>Total Theory:</strong> 20 Marks (Group A) + 30 Marks (Group B) = <strong>50 Marks</strong> · 2 Hours</span>
                      <span className="text-blue-900 font-bold">Strictly Two Groups Only</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tutorial Evaluation Guidelines (25 Marks) */}
          <div className="border border-emerald-200 rounded-xl p-5 bg-emerald-50/40 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Tutorial Evaluation Framework (25 Marks) — No Practical Component</span>
              </h4>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300 w-fit">
                No Viva-Voce
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">1. Term Paper / Project Assignment</span>
                  <span className="px-2.5 py-0.5 bg-blue-100 text-blue-800 font-bold rounded-full font-mono text-xs">5 Marks</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Comprehensive academic term paper, circuit study report, schematic analysis, or component application assignment submitted by the student and evaluated by college faculty.
                </p>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">2. Written Examination of short type questions</span>
                  <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded-full font-mono text-xs">20 Marks</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Written examination consisting of short-type conceptual questions, problem-solving, schematic identification, and circuit calculations. <strong>No viva voce</strong>.
                </p>
              </div>
            </div>

            <div className="text-[11px] text-slate-600 bg-white/80 p-2.5 rounded-lg border border-emerald-100 flex items-center justify-between flex-wrap gap-2">
              <span><strong>Total Tutorial Marks:</strong> 5 Marks (Term Paper) + 20 Marks (Written Exam) = <strong>25 Marks</strong>.</span>
              <span className="text-emerald-800 font-semibold">Strictly Written / Assignment Based · No Oral / Viva-Voce Component</span>
            </div>
          </div>

          {/* Evaluation Rules */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs text-slate-600">
            <div className="font-bold text-slate-900">Passing Criteria & Evaluation Scheme:</div>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Marks Breakdown:</strong> End-Semester Theory = 50 Marks (2 Hours) + Tutorial = 25 Marks [5 Marks (Term Paper) + 20 Marks (Written Exam)] = Total 75 Marks per semester.</li>
              <li><strong>Zero Practical & Zero Attendance Marks:</strong> As per the IDC Electronics syllabus modalities, there is <strong>no practical examination</strong>, <strong>no class attendance marks</strong>, and <strong>no viva-voce</strong>. Tutorial carries the full 25 marks: <strong>1. Term Paper / Project Assignment (5 Marks)</strong> and <strong>2. Written Examination of short type questions (20 Marks)</strong>.</li>
              <li><strong>Passing Requirement:</strong> A student must secure a minimum of 30% marks in the Theoretical and Tutorial components separately, and 40% aggregate to earn the 3 academic credits for the semester.</li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
