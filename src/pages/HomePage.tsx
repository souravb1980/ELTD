import React, { useState } from 'react';
import { 
  GraduationCap, 
  ExternalLink, 
  BookOpen, 
  FileText, 
  ArrowRight, 
  Cpu, 
  GitFork, 
  Calculator, 
  Award, 
  Clock, 
  CheckCircle2, 
  Search,
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import { CourseModule, ExamModality } from '../types';
import { SymbolSvg } from '../components/CircuitSvg';
import { examModalitiesData, CU_DRIVE_FOLDER_URL } from '../data/coursesData';
import { CU_QUESTION_BANK_2024 } from '../data/questionBank2024';

interface HomePageProps {
  modules: CourseModule[];
  onSelectModule: (moduleId: string) => void;
  onOpenExamModalities: () => void;
  onOpenQuestionBank?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  modules,
  onSelectModule,
  onOpenExamModalities,
  onOpenQuestionBank
}) => {
  const [selectedSemesterTab, setSelectedSemesterTab] = useState<'all' | 'sem1' | 'sem2' | 'sem3'>('all');
  const [homeQuestionSearch, setHomeQuestionSearch] = useState<string>('');
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);

  const filteredModules = selectedSemesterTab === 'all' 
    ? modules 
    : modules.filter(m => m.semester === selectedSemesterTab);

  const previewQuestions = CU_QUESTION_BANK_2024.filter(q => {
    if (!homeQuestionSearch.trim()) return true;
    const s = homeQuestionSearch.toLowerCase();
    return (
      q.qNumber?.toString() === s ||
      q.question.toLowerCase().includes(s) ||
      q.answerHint.toLowerCase().includes(s) ||
      q.moduleName.toLowerCase().includes(s) ||
      q.topicTag?.toLowerCase().includes(s)
    );
  }).slice(0, 6);

  return (
    <div className="space-y-16 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#00224d] via-[#002b66] to-[#041c3b] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        {/* Subtle geometric background grid pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
            {/* CU Seal Banner */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/60 text-xs text-amber-300 font-medium">
              <GraduationCap className="w-4 h-4" />
              <span>CU · CCF Curriculum</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              IDC Electronics <span className="text-amber-300">(ELTD)</span>
              <span className="block text-xl sm:text-2xl font-medium text-blue-200 mt-2">
                Study Portal & Examination Modalities
              </span>
            </h1>

            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-2xl font-normal">
              Academic learning companion for the Interdisciplinary Course (IDC) in Electronics. Featuring complete course notes, high-precision circuit schematics, standard IEEE symbols, interactive calculators, and full examination modalities for <strong>Semester I, II, and III</strong>.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="#courses"
                className="px-5 py-3 bg-blue-800 hover:bg-blue-700 text-white rounded-xl font-bold text-xs sm:text-sm transition-all shadow-lg shadow-blue-950/20 flex items-center gap-2 border border-blue-500/40"
              >
                <BookOpen className="w-4 h-4 text-amber-300" />
                <span>Explore 7 Course Modules</span>
              </a>

              <a
                href={CU_DRIVE_FOLDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-lg shadow-amber-950/20 flex items-center gap-2"
                title="Open official CU Question Bank PDF on Google Drive"
              >
                <FileText className="w-4 h-4 text-slate-950" />
                <span>Question Bank</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
              </a>

              <a
                href="#exam-modalities"
                className="px-5 py-3 bg-blue-900/80 hover:bg-blue-800 text-white border border-blue-600 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-amber-300" />
                <span>Exam Modalities</span>
              </a>
            </div>

            {/* Metric pill row */}
            <div className="pt-8 border-t border-blue-800/60 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-2xl font-bold font-mono text-amber-300">3</span>
                <span className="text-xs text-blue-200 block">Semesters (I, II, III)</span>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-2xl font-bold font-mono text-amber-300">7</span>
                <span className="text-xs text-blue-200 block">Core Syllabus Modules</span>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-2xl font-bold font-mono text-amber-300">3 Credits</span>
                <span className="text-xs text-blue-200 block">Per Semester Course</span>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-2xl font-bold font-mono text-amber-300">75</span>
                <span className="text-xs text-blue-200 block">Total Marks Per Sem</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEMESTER CURRICULUM ARCHITECTURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold">
            <span>CU · CCF-2022 / NEP</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Curriculum Architecture: Same Syllabus Across Semesters I, II, & III
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Under CU regulations, students enrolled in IDC Electronics (ELTD) in <strong>Semester I, Semester II, or Semester III</strong> follow the <strong>exact same common syllabus</strong> covering all 7 core modules. Depending on their college major stream, students take this course in any one of the first three semesters with identical study material and evaluation modalities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Semester I Card */}
          <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-blue-100 text-blue-900 rounded-lg text-xs font-bold">
                  Semester I Enrollment
                </span>
                <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">ELTD-IDC-1</span>
              </div>

              <h3 className="font-bold text-slate-900 text-lg">IDC Electronics (Sem I)</h3>
              <div className="text-xs text-amber-800 font-semibold bg-amber-50 px-2.5 py-1 rounded border border-amber-200 inline-block">
                ✓ Full 7-Unit Common Syllabus
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Covers complete course: Basic Circuit Components, Semiconductor Devices and Circuits, BJT, Field Effect Transistor, Op-Amps, Digital Logic, and Electronic Communication.
              </p>

              <div className="pt-2 space-y-1.5 text-xs text-slate-700">
                <div className="p-2 bg-slate-50 rounded border border-slate-200 flex items-center justify-between">
                  <span>Units 1 & 2: Components & Semiconductors</span>
                  <ChevronRight className="w-3.5 h-3.5 text-blue-700" />
                </div>
                <div className="p-2 bg-slate-50 rounded border border-slate-200 flex items-center justify-between">
                  <span>Units 3, 4 & 5: BJT, FET & Op-Amps</span>
                  <ChevronRight className="w-3.5 h-3.5 text-blue-700" />
                </div>
                <div className="p-2 bg-slate-50 rounded border border-slate-200 flex items-center justify-between">
                  <span>Units 6 & 7: Digital Logic & Comm</span>
                  <ChevronRight className="w-3.5 h-3.5 text-blue-700" />
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>3 Credits (2 Theory + 1 Tutorial)</span>
              <span className="font-mono font-bold text-blue-900">75 Marks</span>
            </div>
          </div>

          {/* Semester II Card */}
          <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-indigo-100 text-indigo-900 rounded-lg text-xs font-bold">
                  Semester II Enrollment
                </span>
                <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">ELTD-IDC-2</span>
              </div>

              <h3 className="font-bold text-slate-900 text-lg">IDC Electronics (Sem II)</h3>
              <div className="text-xs text-amber-800 font-semibold bg-amber-50 px-2.5 py-1 rounded border border-amber-200 inline-block">
                ✓ Full 7-Unit Common Syllabus
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Identical syllabus curriculum: Basic Circuit Components, Semiconductor Devices and Circuits, BJT, Field Effect Transistor, Op-Amps, Digital Logic, and Electronic Communication.
              </p>

              <div className="pt-2 space-y-1.5 text-xs text-slate-700">
                <div className="p-2 bg-slate-50 rounded border border-slate-200 flex items-center justify-between">
                  <span>Units 1 & 2: Components & Semiconductors</span>
                  <ChevronRight className="w-3.5 h-3.5 text-indigo-700" />
                </div>
                <div className="p-2 bg-slate-50 rounded border border-slate-200 flex items-center justify-between">
                  <span>Units 3, 4 & 5: BJT, FET & Op-Amps</span>
                  <ChevronRight className="w-3.5 h-3.5 text-indigo-700" />
                </div>
                <div className="p-2 bg-slate-50 rounded border border-slate-200 flex items-center justify-between">
                  <span>Units 6 & 7: Digital Logic & Comm</span>
                  <ChevronRight className="w-3.5 h-3.5 text-indigo-700" />
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>3 Credits (2 Theory + 1 Tutorial)</span>
              <span className="font-mono font-bold text-indigo-900">75 Marks</span>
            </div>
          </div>

          {/* Semester III Card */}
          <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-purple-100 text-purple-900 rounded-lg text-xs font-bold">
                  Semester III Enrollment
                </span>
                <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">ELTD-IDC-3</span>
              </div>

              <h3 className="font-bold text-slate-900 text-lg">IDC Electronics (Sem III)</h3>
              <div className="text-xs text-amber-800 font-semibold bg-amber-50 px-2.5 py-1 rounded border border-amber-200 inline-block">
                ✓ Full 7-Unit Common Syllabus
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Identical syllabus curriculum: Basic Circuit Components, Semiconductor Devices and Circuits, BJT, Field Effect Transistor, Op-Amps, Digital Logic, and Electronic Communication.
              </p>

              <div className="pt-2 space-y-1.5 text-xs text-slate-700">
                <div className="p-2 bg-slate-50 rounded border border-slate-200 flex items-center justify-between">
                  <span>Units 1 & 2: Components & Semiconductors</span>
                  <ChevronRight className="w-3.5 h-3.5 text-purple-700" />
                </div>
                <div className="p-2 bg-slate-50 rounded border border-slate-200 flex items-center justify-between">
                  <span>Units 3, 4 & 5: BJT, FET & Op-Amps</span>
                  <ChevronRight className="w-3.5 h-3.5 text-purple-700" />
                </div>
                <div className="p-2 bg-slate-50 rounded border border-slate-200 flex items-center justify-between">
                  <span>Units 6 & 7: Digital Logic & Comm</span>
                  <ChevronRight className="w-3.5 h-3.5 text-purple-700" />
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>3 Credits (2 Theory + 1 Tutorial)</span>
              <span className="font-mono font-bold text-purple-900">75 Marks</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE STUDY MATERIAL MODULES GRID */}
      <section id="courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Comprehensive Syllabus</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Study Material Pages</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Select any course to view full lecture notes, circuit schematics, component symbols, and CU exam solutions.
            </p>
          </div>

          {/* Filter segment */}
          <div className="flex items-center gap-2 bg-blue-50 px-3.5 py-2 rounded-xl border border-blue-200 text-xs font-semibold text-blue-900">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Semesters I, II & III Common Syllabus (All 7 Units)</span>
          </div>
        </div>

        {/* Modules List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module) => (
            <div
              key={module.id}
              onClick={() => onSelectModule(module.id)}
              className="group bg-white border border-slate-200 hover:border-blue-400 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header row */}
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-blue-50 text-blue-900">
                    IDC Electronics
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">Course Code: ELTD</span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {module.overview}
                  </p>
                </div>

                {/* Circuit / Symbol Preview Graphic */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center h-28 group-hover:bg-blue-50/40 transition-colors">
                  {module.symbols[0] ? (
                    <SymbolSvg symbolType={module.symbols[0].symbolType} className="w-36 h-24" />
                  ) : (
                    <Cpu className="w-12 h-12 text-blue-900" />
                  )}
                </div>

                {/* Highlights */}
                <div className="space-y-1 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                    <GitFork className="w-3.5 h-3.5 text-blue-700" />
                    <span>Schematic: {module.circuits[0]?.title || 'Circuit Analysis'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Calculator className="w-3.5 h-3.5 text-slate-400" />
                    <span>{module.formulas.length} Core Formulas · Interactive Lab</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-900 group-hover:text-blue-700">
                <span>Open Full Study Material</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ABOUT EXAM MODALITIES & EVALUATION PATTERN */}
      <section id="exam-modalities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-blue-900/50 space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-blue-800/60 pb-6">
            <div>
              <div className="text-amber-300 font-semibold text-xs uppercase tracking-wider">
                CU Official Regulations
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Examination Modalities & Marks Distribution
              </h2>
              <p className="text-xs sm:text-sm text-blue-200 mt-1 max-w-2xl">
                Evaluation scheme for IDC Electronics (ELTD) under the 4-year undergraduate CCF-2022 framework across Semester-I, II, and III.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenExamModalities}
                className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>Examination Modalities</span>
                <FileText className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Marks Breakdown Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <span className="text-xs text-blue-200 block">End-Semester Theory</span>
              <span className="text-2xl font-bold font-mono text-amber-300">50 Marks</span>
              <span className="text-[11px] text-slate-300 block mt-1">2 Hours Written Exam (50M)</span>
            </div>
            <div className="bg-emerald-500/20 backdrop-blur-sm p-4 rounded-xl border border-emerald-400/30">
              <span className="text-xs text-emerald-300 font-semibold block">Tutorial Evaluation</span>
              <span className="text-2xl font-bold font-mono text-amber-300">25 Marks</span>
              <span className="text-[11px] text-emerald-200 block mt-1">Term Paper (5M) + Written Exam (20M)</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <span className="text-xs text-blue-200 block">Total Course Marks</span>
              <span className="text-2xl font-bold font-mono text-amber-300">75 Marks</span>
              <span className="text-[11px] text-slate-300 block mt-1">3 Credits (2 Th + 1 Tut)</span>
            </div>
          </div>

          {/* Explicit Notice on Tutorial Evaluation Framework & Zero Practical */}
          <div className="p-4 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-xs text-emerald-100 space-y-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-bold text-white text-sm">
                  Tutorial Evaluation Framework (25 Marks) — No Practical Component
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-400 text-slate-950">
                No Viva-Voce
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="bg-white/10 p-3 rounded-lg border border-white/10">
                <span className="font-bold text-amber-300 block text-xs mb-0.5">1. Term Paper / Project Assignment (5 Marks)</span>
                <span className="text-slate-300 text-[11px] leading-relaxed block">
                  Study report, schematic analysis, or component application assignment evaluated by faculty.
                </span>
              </div>
              <div className="bg-white/10 p-3 rounded-lg border border-white/10">
                <span className="font-bold text-amber-300 block text-xs mb-0.5">2. Written Examination of short type questions (20 Marks)</span>
                <span className="text-slate-300 text-[11px] leading-relaxed block">
                  Written assessment of short conceptual questions and circuit numericals. <strong>No viva voce</strong>.
                </span>
              </div>
            </div>
          </div>

          {/* Question Paper Pattern */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" />
                <span>Theory Question Paper Pattern (50 Marks · 2 Hours)</span>
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400 text-slate-950 w-fit">
                Only Two Groups (Group A & Group B)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-blue-500/20 text-blue-300 font-bold rounded">Group A</span>
                  <span className="text-amber-300 font-bold font-mono">10 × 2M = 20 Marks</span>
                </div>
                <span className="font-bold text-white block text-sm">Short Questions (10 out of 12)</span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  <strong>10 out of 12 short questions of 2 marks each</strong> = <strong>20 Marks</strong>. Direct definitions, laws, symbols, formulas, and fundamental circuit concepts across all 7 modules.
                </p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold rounded">Group B</span>
                  <span className="text-amber-300 font-bold font-mono">3 × 10M = 30 Marks</span>
                </div>
                <span className="font-bold text-white block text-sm">Broad / Analytical / Numerical Questions (3 out of 5)</span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  <strong>3 out of 5 questions of 10 marks each</strong> {'{'}part mark not more than 5{'}'} = <strong>30 Marks</strong>. Derivations, circuit schematics, working principles, design calculations; part-marking strictly ≤ 5 marks (e.g. 5+5, 4+4+2).
                </p>
              </div>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs text-blue-200 flex flex-wrap items-center justify-between gap-2">
              <span><strong>Total Written Marks:</strong> Group A (20 Marks) + Group B (30 Marks) = <strong>50 Marks</strong> · 2 Hours</span>
              <span className="text-amber-300 font-semibold">Strictly Two Groups Only (No Group C)</span>
            </div>
          </div>

          {/* Modalities Box */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-blue-900/40 border border-blue-700/50 rounded-xl gap-4">
            <div className="text-xs text-blue-200">
              <span className="font-bold text-white block mb-0.5">Examination Modalities & Regulations:</span>
              View the detailed University evaluation scheme, question pattern, and credit framework.
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onOpenExamModalities}
                className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs transition-colors"
              >
                View Detailed Modal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PREVIEW OF STANDARD SCHEMATICS & LABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-3xl p-8 sm:p-10 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">
              Laboratory & Practical Integration
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              Interactive Circuit Simulators Built For Every Unit
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every study material module includes an interactive laboratory widget: test resistor color codes, simulate diode rectifiers, compute BJT Q-points, trace JFET transfer curves, configure Op-Amp gains, toggle digital logic gates, and analyze AM wave modulation index.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onSelectModule('basic_circuit_components')}
                className="px-4 py-2.5 bg-blue-900 hover:bg-blue-800 text-white rounded-xl text-xs font-semibold transition-colors inline-flex items-center gap-1.5"
              >
                <span>Launch Interactive Labs</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full md:w-auto text-center text-xs">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <SymbolSvg symbolType="opamp" className="w-24 h-16 mx-auto mb-1" />
              <span className="font-bold text-slate-800 block">Op-Amp 741</span>
              <span className="text-[10px] text-slate-500">Virtual Ground</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <SymbolSvg symbolType="npn_bjt" className="w-24 h-16 mx-auto mb-1" />
              <span className="font-bold text-slate-800 block">BJT NPN</span>
              <span className="text-[10px] text-slate-500">Active Bias</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <SymbolSvg symbolType="n_jfet" className="w-24 h-16 mx-auto mb-1" />
              <span className="font-bold text-slate-800 block">N-JFET</span>
              <span className="text-[10px] text-slate-500">Pinch-off VP</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <SymbolSvg symbolType="logic_gates" className="w-24 h-16 mx-auto mb-1" />
              <span className="font-bold text-slate-800 block">NAND Gate</span>
              <span className="text-[10px] text-slate-500">Universal Logic</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. UNIVERSITY EXAMINATION QUESTION BANK */}
      <section id="question-bank" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#00224d] via-[#002b66] to-[#0a3575] text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-blue-800/60 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-blue-200 font-mono">
                  80 Numbered Questions with Model Solutions
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                CU Examination Question Bank
              </h2>
              <p className="text-xs sm:text-sm text-blue-100/80 max-w-2xl leading-relaxed">
                Take questions directly from the official CU syllabus and examination PDF. Covers all 80 questions across Semesters I, II, and III with examiner solution keys, circuit diagrams, and formulas.
              </p>
            </div>
          </div>

          {/* Quick Search inside Question Bank */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-blue-300 absolute left-3.5 top-3" />
              <input
                type="text"
                value={homeQuestionSearch}
                onChange={e => setHomeQuestionSearch(e.target.value)}
                placeholder="Search any question from the PDF (e.g. 12, transformer, color code, KCL, bridge, Zener, Op-Amp, XOR)..."
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-xs sm:text-sm text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              {homeQuestionSearch && (
                <button
                  onClick={() => setHomeQuestionSearch('')}
                  className="absolute right-3 top-2.5 text-xs text-blue-300 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Questions Grid Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {previewQuestions.map((q) => {
                const isExpanded = expandedQuestionId === q.id;
                return (
                  <div
                    key={q.id}
                    className="bg-slate-900/80 border border-blue-900/60 rounded-xl p-4 space-y-2 hover:border-amber-400/50 transition-colors"
                  >
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="px-2 py-0.5 rounded bg-blue-800 text-amber-300 font-mono font-bold">
                        #{q.qNumber}
                      </span>
                      <span className="text-blue-200/80 text-[10px] font-medium truncate max-w-[140px]">
                        {q.moduleName}
                      </span>
                    </div>

                    <h4 className="text-xs font-semibold text-white line-clamp-2">
                      {q.question}
                    </h4>

                    {isExpanded && (
                      <div className="p-2.5 bg-blue-950/80 rounded-lg border border-blue-800/80 text-[11px] text-blue-100 leading-relaxed animate-in fade-in">
                        <span className="font-bold text-amber-300 block mb-1 uppercase text-[9px] tracking-wider">Solution:</span>
                        {q.answerHint}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                        className="text-[11px] text-amber-300 hover:text-amber-200 font-semibold"
                      >
                        {isExpanded ? 'Hide Answer' : 'View Answer →'}
                      </button>

                      <button
                        onClick={() => onSelectModule(q.moduleId)}
                        className="text-[10px] text-blue-300 hover:text-white underline"
                      >
                        Module notes
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-3 flex items-center justify-end text-xs text-blue-200/80 gap-3 border-t border-white/10">
              <a
                href="#courses"
                className="text-white hover:text-amber-200 hover:underline font-semibold flex items-center gap-1.5"
              >
                <span>View All 7 Modules & Notes</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
