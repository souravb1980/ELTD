import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  Cpu, 
  GitFork, 
  Calculator, 
  HelpCircle, 
  Share2, 
  Printer, 
  FileText, 
  Check, 
  Sparkles,
  ExternalLink,
  Search,
  Copy,
  GraduationCap,
  ChevronDown,
  Layers
} from 'lucide-react';
import { CourseModule } from '../types';
import { CU_DRIVE_FOLDER_URL } from '../data/coursesData';
import { SymbolSvg, CircuitDiagramSvg } from '../components/CircuitSvg';
import { ResistorCalculator } from '../components/InteractiveSimulators/ResistorCalculator';
import { DiodeRectifierSim } from '../components/InteractiveSimulators/DiodeRectifierSim';
import { BjtLoadLineSim } from '../components/InteractiveSimulators/BjtLoadLineSim';
import { FetTransferCurveSim } from '../components/InteractiveSimulators/FetTransferCurveSim';
import { OpAmpGainSim } from '../components/InteractiveSimulators/OpAmpGainSim';
import { LogicGateSim } from '../components/InteractiveSimulators/LogicGateSim';
import { CommunicationSim } from '../components/InteractiveSimulators/CommunicationSim';
import { CU_QUESTION_BANK_2024 } from '../data/questionBank2024';
import { formatElectronicText } from '../utils/electronicNotation';

interface ModulePageProps {
  module: CourseModule;
  onNavigateHome: () => void;
  onSelectModule: (moduleId: string) => void;
  allModules: CourseModule[];
  onOpenExamModalities: () => void;
  onOpenQuestionBank?: () => void;
}

export const ModulePage: React.FC<ModulePageProps> = ({
  module,
  onNavigateHome,
  onSelectModule,
  allModules,
  onOpenExamModalities,
  onOpenQuestionBank
}) => {
  const [activeTab, setActiveTab] = useState<'theory' | 'symbols' | 'circuits' | 'lab' | 'formulas' | 'questions'>('theory');
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);
  const [questionSearch, setQuestionSearch] = useState<string>('');
  const [questionFilter, setQuestionFilter] = useState<'all' | 'pdf' | 'comprehensive'>('all');
  const [copiedQuestionId, setCopiedQuestionId] = useState<string | null>(null);

  // Questions from the official CU PDF corresponding to this module
  const pdfQuestionsForModule = useMemo(() => {
    return CU_QUESTION_BANK_2024.filter(q => q.moduleId === module.id);
  }, [module.id]);

  const handleCopyQuestion = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedQuestionId(id);
    setTimeout(() => setCopiedQuestionId(null), 2000);
  };

  // Find previous and next modules
  const currentIndex = allModules.findIndex(m => m.id === module.id);
  const prevModule = currentIndex > 0 ? allModules[currentIndex - 1] : null;
  const nextModule = currentIndex < allModules.length - 1 ? allModules[currentIndex + 1] : null;

  const copyFormulaToClipboard = (formulaText: string) => {
    navigator.clipboard.writeText(formulaText);
    setCopiedFormula(formulaText);
    setTimeout(() => setCopiedFormula(null), 2000);
  };

  const renderSimulator = () => {
    switch (module.id) {
      case 'basic_circuit_components':
        return <ResistorCalculator />;
      case 'semiconductor_devices_circuits':
        return <DiodeRectifierSim />;
      case 'bipolar_junction_transistors':
        return <BjtLoadLineSim />;
      case 'field_effect_transistor':
        return <FetTransferCurveSim />;
      case 'operational_amplifiers_applications':
        return <OpAmpGainSim />;
      case 'digital_logic_circuits':
        return <LogicGateSim />;
      case 'electronic_communication':
        return <CommunicationSim />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/70 pb-20">
      {/* Breadcrumbs & Header */}
      <div className="bg-[#002b66] text-white border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-blue-200 mb-3">
            <button onClick={onNavigateHome} className="hover:text-white transition-colors">
              Home
            </button>
            <span>/</span>
            <span className="text-amber-300 font-medium">Study Material</span>
            <span>/</span>
            <span className="text-white font-medium">{module.title}</span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-blue-800 text-amber-300 text-xs font-bold rounded">
                  IDC Electronics (ELTD)
                </span>
                <span className="text-xs text-blue-200">CU</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
                {module.title}
              </h1>
              <p className="text-xs sm:text-sm text-blue-100 max-w-3xl mt-1.5 leading-relaxed">
                {module.overview}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => window.print()}
                className="px-3 py-2 bg-blue-900/80 hover:bg-blue-800 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors border border-blue-700/60"
                title="Print study material"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print Notes</span>
              </button>

              <button
                onClick={onOpenExamModalities}
                className="px-3 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-lg text-xs flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Exam Pattern</span>
              </button>
            </div>
          </div>

          {/* Mobile View: Dedicated Section Switcher (Ensures all 6 tabs are 100% visible & accessible on phones) */}
          <div className="sm:hidden mt-6 pt-3 border-t border-blue-800/80 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Jump To Section:</span>
              </span>
              <span className="text-[10px] bg-white/10 text-blue-200 px-2 py-0.5 rounded-full font-mono">
                6 Sections Available
              </span>
            </div>

            {/* Quick Touch Dropdown Selector */}
            <div className="relative">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value as any)}
                aria-label="Select module section"
                className="w-full bg-[#00183b] text-white font-bold text-xs py-3 pl-3 pr-10 rounded-xl border border-blue-600/90 shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400 appearance-none cursor-pointer"
              >
                <option value="theory">📖 1. Theory &amp; Syllabus Notes</option>
                <option value="symbols">⚡ 2. Symbols &amp; Terminals ({module.symbols.length})</option>
                <option value="circuits">🔌 3. Circuit Schematics ({module.circuits.length})</option>
                <option value="lab">🧪 4. Interactive Lab &amp; Simulator</option>
                <option value="formulas">📐 5. Key Formulas ({module.formulas.length})</option>
                <option value="questions">🎓 6. CU Exam Questions ({module.examQuestions.length})</option>
              </select>
              <ChevronDown className="w-4 h-4 text-amber-300 absolute right-3 top-3.5 pointer-events-none" />
            </div>

            {/* 6-Button Mobile Quick Switcher Grid */}
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              <button
                onClick={() => setActiveTab('circuits')}
                className={`py-2 px-1.5 rounded-lg text-[11px] font-bold flex flex-col items-center justify-center gap-1 border transition-all ${activeTab === 'circuits' ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md font-extrabold' : 'bg-blue-900/60 text-blue-100 border-blue-700/60 hover:bg-blue-800'}`}
              >
                <GitFork className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="truncate">Circuits ({module.circuits.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('lab')}
                className={`py-2 px-1.5 rounded-lg text-[11px] font-bold flex flex-col items-center justify-center gap-1 border transition-all ${activeTab === 'lab' ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md font-extrabold' : 'bg-blue-900/60 text-blue-100 border-blue-700/60 hover:bg-blue-800'}`}
              >
                <Calculator className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">Virtual Lab</span>
              </button>
              <button
                onClick={() => setActiveTab('formulas')}
                className={`py-2 px-1.5 rounded-lg text-[11px] font-bold flex flex-col items-center justify-center gap-1 border transition-all ${activeTab === 'formulas' ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md font-extrabold' : 'bg-blue-900/60 text-blue-100 border-blue-700/60 hover:bg-blue-800'}`}
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-300 shrink-0" />
                <span className="truncate">Formulas ({module.formulas.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('questions')}
                className={`py-2 px-1.5 rounded-lg text-[11px] font-bold flex flex-col items-center justify-center gap-1 border transition-all ${activeTab === 'questions' ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md font-extrabold' : 'bg-blue-900/60 text-blue-100 border-blue-700/60 hover:bg-blue-800'}`}
              >
                <HelpCircle className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span className="truncate">Exam Qs ({module.examQuestions.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('theory')}
                className={`py-2 px-1.5 rounded-lg text-[11px] font-bold flex flex-col items-center justify-center gap-1 border transition-all ${activeTab === 'theory' ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md font-extrabold' : 'bg-blue-900/60 text-blue-100 border-blue-700/60 hover:bg-blue-800'}`}
              >
                <BookOpen className="w-3.5 h-3.5 text-sky-300 shrink-0" />
                <span className="truncate">Theory</span>
              </button>
              <button
                onClick={() => setActiveTab('symbols')}
                className={`py-2 px-1.5 rounded-lg text-[11px] font-bold flex flex-col items-center justify-center gap-1 border transition-all ${activeTab === 'symbols' ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md font-extrabold' : 'bg-blue-900/60 text-blue-100 border-blue-700/60 hover:bg-blue-800'}`}
              >
                <Cpu className="w-3.5 h-3.5 text-indigo-300 shrink-0" />
                <span className="truncate">Symbols ({module.symbols.length})</span>
              </button>
            </div>
          </div>

          {/* Desktop & Tablet Tab Navigation */}
          <div className="hidden sm:flex mt-8 gap-1 overflow-x-auto pb-1 border-b border-blue-800/80 text-xs">
            <button
              onClick={() => setActiveTab('theory')}
              className={`px-4 py-2.5 font-semibold rounded-t-lg transition-colors flex items-center gap-1.5 shrink-0 ${activeTab === 'theory' ? 'bg-white text-blue-950 shadow-sm font-bold' : 'text-blue-100 hover:bg-blue-800/50 hover:text-white'}`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Theory &amp; Notes</span>
            </button>
            <button
              onClick={() => setActiveTab('symbols')}
              className={`px-4 py-2.5 font-semibold rounded-t-lg transition-colors flex items-center gap-1.5 shrink-0 ${activeTab === 'symbols' ? 'bg-white text-blue-950 shadow-sm font-bold' : 'text-blue-100 hover:bg-blue-800/50 hover:text-white'}`}
            >
              <Cpu className="w-4 h-4" />
              <span>Symbols &amp; Terminals ({module.symbols.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('circuits')}
              className={`px-4 py-2.5 font-semibold rounded-t-lg transition-colors flex items-center gap-1.5 shrink-0 ${activeTab === 'circuits' ? 'bg-white text-blue-950 shadow-sm font-bold' : 'text-blue-100 hover:bg-blue-800/50 hover:text-white'}`}
            >
              <GitFork className="w-4 h-4" />
              <span>Circuit Schematics ({module.circuits.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('lab')}
              className={`px-4 py-2.5 font-semibold rounded-t-lg transition-colors flex items-center gap-1.5 shrink-0 ${activeTab === 'lab' ? 'bg-white text-blue-950 shadow-sm font-bold' : 'text-blue-100 hover:bg-blue-800/50 hover:text-white'}`}
            >
              <Calculator className="w-4 h-4" />
              <span>Interactive Lab &amp; Simulator</span>
            </button>
            <button
              onClick={() => setActiveTab('formulas')}
              className={`px-4 py-2.5 font-semibold rounded-t-lg transition-colors flex items-center gap-1.5 shrink-0 ${activeTab === 'formulas' ? 'bg-white text-blue-950 shadow-sm font-bold' : 'text-blue-100 hover:bg-blue-800/50 hover:text-white'}`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Key Formulas ({module.formulas.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('questions')}
              className={`px-4 py-2.5 font-semibold rounded-t-lg transition-colors flex items-center gap-1.5 shrink-0 ${activeTab === 'questions' ? 'bg-white text-blue-950 shadow-sm font-bold' : 'text-blue-100 hover:bg-blue-800/50 hover:text-white'}`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>CU Exam Questions ({module.examQuestions.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-28 sm:pb-8">
        {/* 1. THEORY TAB */}
        {activeTab === 'theory' && (
          <div className="space-y-8 animate-in fade-in">
            {/* Official University Syllabus */}
            {module.officialSyllabus && (
              <div className="bg-gradient-to-r from-[#00224d] via-[#002b66] to-[#0a3575] text-white rounded-xl p-5 shadow-sm space-y-2 border border-blue-800">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-amber-300" />
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      Official University Syllabus Curriculum
                    </span>
                  </div>
                  <span className="text-[11px] bg-white/10 text-blue-200 px-2.5 py-0.5 rounded-full font-medium">
                    IDC Electronics (ELTD)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-100 font-medium leading-relaxed bg-white/10 p-3.5 rounded-lg border border-white/15">
                  {module.officialSyllabus}
                </p>
              </div>
            )}

            {/* Quick Navigation Cards: Interactive Study Hub (Guarantees immediate visibility of all 6 sections on mobile & desktop) */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-xl p-5 shadow-md border border-blue-800/80 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-4 h-4 text-amber-400" />
                    <span>Module Study Hub: All 6 Sections</span>
                  </h3>
                  <p className="text-xs text-blue-200 mt-0.5">
                    Tap any card below to jump directly into interactive circuits, virtual lab, formulas, or examination questions.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* 1. Circuit Schematics */}
                <button
                  onClick={() => setActiveTab('circuits')}
                  className="p-3.5 bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl text-left transition-all hover:scale-[1.02] flex flex-col justify-between group cursor-pointer"
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center">
                      <GitFork className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full uppercase">
                      {module.circuits.length} Circuits
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm group-hover:text-amber-300 transition-colors">Circuit Schematics</h4>
                    <p className="text-[11px] text-blue-200 mt-1 leading-snug">Full diagrams, gate connections, and complete truth tables.</p>
                  </div>
                  <span className="text-[11px] text-amber-300 font-semibold mt-3 flex items-center gap-1">
                    Open Circuits Tab →
                  </span>
                </button>

                {/* 2. Interactive Lab */}
                <button
                  onClick={() => setActiveTab('lab')}
                  className="p-3.5 bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl text-left transition-all hover:scale-[1.02] flex flex-col justify-between group cursor-pointer"
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold bg-emerald-400 text-slate-950 px-2 py-0.5 rounded-full uppercase">
                      Interactive
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm group-hover:text-amber-300 transition-colors">Interactive Lab &amp; Simulator</h4>
                    <p className="text-[11px] text-blue-200 mt-1 leading-snug">Virtual laboratory with dynamic parameter adjustments &amp; tests.</p>
                  </div>
                  <span className="text-[11px] text-amber-300 font-semibold mt-3 flex items-center gap-1">
                    Launch Simulator →
                  </span>
                </button>

                {/* 3. Key Formulas */}
                <button
                  onClick={() => setActiveTab('formulas')}
                  className="p-3.5 bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl text-left transition-all hover:scale-[1.02] flex flex-col justify-between group cursor-pointer"
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold bg-purple-300 text-slate-950 px-2 py-0.5 rounded-full uppercase">
                      {module.formulas.length} Formulas
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm group-hover:text-amber-300 transition-colors">Key Formulas &amp; Equations</h4>
                    <p className="text-[11px] text-blue-200 mt-1 leading-snug">Mathematical governing relations, theorems, and SI units.</p>
                  </div>
                  <span className="text-[11px] text-amber-300 font-semibold mt-3 flex items-center gap-1">
                    View Formulas →
                  </span>
                </button>

                {/* 4. CU Exam Questions */}
                <button
                  onClick={() => setActiveTab('questions')}
                  className="p-3.5 bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl text-left transition-all hover:scale-[1.02] flex flex-col justify-between group cursor-pointer"
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full uppercase">
                      {module.examQuestions.length} Questions
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm group-hover:text-amber-300 transition-colors">CU Exam Question Bank</h4>
                    <p className="text-[11px] text-blue-200 mt-1 leading-snug">Official University exam problems with detailed solution hints.</p>
                  </div>
                  <span className="text-[11px] text-amber-300 font-semibold mt-3 flex items-center gap-1">
                    Practice Exam Questions →
                  </span>
                </button>
              </div>
            </div>

            {/* Learning Objectives */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-900" />
                <span>CU Syllabus Learning Objectives</span>
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-700">
                {module.learningObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-900 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{formatElectronicText(obj)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Preview of Circuits & Symbols */}
            <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-blue-950 uppercase tracking-wider">
                  Associated Symbols & Main Circuit
                </span>
                <button
                  onClick={() => setActiveTab('symbols')}
                  className="text-xs text-blue-700 font-semibold hover:underline"
                >
                  View full symbols tab →
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {module.symbols.map((sym, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-lg border border-slate-200 text-center flex flex-col items-center">
                    <SymbolSvg symbolType={sym.symbolType} className="w-24 h-16" />
                    <span className="text-xs font-bold text-slate-800 mt-1">{sym.name}</span>
                    <span className="text-[10px] text-slate-500 font-mono">{sym.standard}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* In-depth Theoretical Sections */}
            <div className="space-y-6">
              {module.theoreticalSections.map((section, idx) => (
                <div key={section.id} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-[11px] font-semibold text-blue-800 uppercase tracking-wider">
                      Section {idx + 1}
                    </span>
                    <h2 className="text-xl font-bold text-slate-900 mt-0.5">{section.title}</h2>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed font-sans">
                    {formatElectronicText(section.summary)}
                  </p>

                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
                    <span className="text-xs font-bold text-slate-900 block">Core Technical Takeaways & Proofs:</span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {section.keyPoints.map((pt, ptIdx) => (
                        <li key={ptIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-700 shrink-0 mt-1.5"></span>
                          <span className="leading-relaxed">{formatElectronicText(pt)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Embedded Diagram if section has a circuitRef */}
                  {section.circuitRef && (() => {
                    const linkedCircuit = module.circuits.find(c => c.id === section.circuitRef);
                    return (
                      <div className="pt-2 space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                          <span className="text-xs font-bold text-slate-800 tracking-wide flex items-center gap-1.5">
                            <Cpu className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                            <span>Technical Diagram &amp; Characteristics: <span className="text-blue-900 font-semibold">{linkedCircuit ? linkedCircuit.title : 'Schematic'}</span></span>
                          </span>
                          <button
                            onClick={() => setActiveTab('circuits')}
                            className="text-xs text-blue-700 font-semibold hover:text-blue-900 flex items-center gap-1 self-start sm:self-auto shrink-0"
                          >
                            <span>View in Circuits tab</span>
                            <span>→</span>
                          </button>
                        </div>
                        {linkedCircuit?.subtitle && (
                          <p className="text-xs text-slate-500 italic pl-5">{linkedCircuit.subtitle}</p>
                        )}
                        <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200 overflow-hidden flex justify-center shadow-inner">
                          <CircuitDiagramSvg circuitId={section.circuitRef} className="w-full max-w-3xl h-auto" />
                        </div>
                      </div>
                    );
                  })()}
                </div>
              ))}
            </div>

            {/* Recommended Textbooks */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 text-xs">
              <span className="font-bold text-slate-900 block mb-2 uppercase text-[11px] tracking-wider">
                Prescribed CU Textbooks & References:
              </span>
              <ul className="list-disc list-inside space-y-1 text-slate-600">
                {module.recommendedBooks.map((bk, bIdx) => (
                  <li key={bIdx}>{bk}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* 2. SYMBOLS TAB */}
        {activeTab === 'symbols' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">Standard IEEE & IEC Component Symbols</h2>
              <p className="text-xs text-slate-500 mt-1">
                Pinouts, terminal polarities, and standardized circuit drawing conventions for {module.title}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {module.symbols.map((sym, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-slate-900 text-base">{sym.name}</h3>
                        <span className="text-[11px] text-slate-500 font-mono">{sym.standard}</span>
                      </div>
                      <span className="px-2 py-0.5 bg-blue-50 text-blue-800 text-[11px] font-semibold rounded">
                        Electronic Symbol
                      </span>
                    </div>

                    {/* SVG Graphic Box */}
                    <div className="my-4 p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center">
                      <SymbolSvg symbolType={sym.symbolType} className="w-48 h-28" />
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sym.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                    <div>
                      <span className="font-semibold text-slate-700">Terminal Connections: </span>
                      <span className="text-slate-600">{sym.terminalNames.join(' · ')}</span>
                    </div>
                    {sym.keyFormula && (
                      <div>
                        <span className="font-semibold text-slate-700">Governing Relation: </span>
                        <code className="text-blue-900 bg-blue-50 px-1.5 py-0.5 rounded font-mono text-[11px]">
                          {formatElectronicText(sym.keyFormula)}
                        </code>
                      </div>
                    )}
                    {sym.specs && (
                      <div className="text-[11px] text-slate-500">
                        <span className="font-semibold text-slate-600">Common Component IDs: </span>
                        {sym.specs}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. CIRCUITS TAB */}
        {activeTab === 'circuits' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">Engineering Circuit Schematics</h2>
              <p className="text-xs text-slate-500 mt-1">
                Full circuit schematics with component connections, bias calculations, and working analysis for University exams.
              </p>
            </div>

            <div className="space-y-8">
              {module.circuits.map((circ) => (
                <div key={circ.id} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6">
                  <div className="border-b border-slate-100 pb-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">{circ.circuitType}</span>
                      <span className="text-[11px] bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded font-semibold">
                        CU Model Circuit
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mt-1">{circ.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{circ.subtitle}</p>
                  </div>

                  {/* SVG Circuit Schematic */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center overflow-x-auto">
                    <CircuitDiagramSvg circuitId={circ.id} />
                  </div>

                  {/* Working Principle & Operations */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Circuit Working & Analysis:
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed font-sans">
                      {formatElectronicText(circ.description)}
                    </p>

                    <div className="space-y-1.5 text-xs text-slate-600">
                      {circ.keyOperation.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5"></span>
                          <span>{formatElectronicText(step)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Formulas & Component specs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100 text-xs">
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <span className="text-xs font-bold text-blue-950 block mb-1">Transfer Relation:</span>
                      <code className="text-blue-900 font-mono font-semibold block">{formatElectronicText(circ.inputOutputRelation)}</code>
                      <code className="text-slate-600 font-mono text-[11px] block mt-1">{formatElectronicText(circ.formula)}</code>
                    </div>

                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                      <span className="text-xs font-bold text-slate-900 block mb-1">Components Used:</span>
                      <ul className="text-slate-600 list-disc list-inside space-y-0.5 text-[11px]">
                        {circ.components.map((c, cIdx) => (
                          <li key={cIdx}>{formatElectronicText(c)}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Exam Tip */}
                  {circ.cuExamTip && (
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span><strong>CU Exam Tip:</strong> {formatElectronicText(circ.cuExamTip)}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. INTERACTIVE LAB TAB */}
        {activeTab === 'lab' && (
          <div className="space-y-6 animate-in fade-in">
            {renderSimulator()}
          </div>
        )}

        {/* 5. FORMULAS TAB */}
        {activeTab === 'formulas' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">Key Mathematical Equations & Theorems</h2>
              <p className="text-xs text-slate-500 mt-1">
                Essential numerical formulas and derivations for {module.title}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {module.formulas.map((form, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-slate-900 text-sm">{form.name}</h3>
                      <button
                        onClick={() => copyFormulaToClipboard(form.formula)}
                        className="text-xs text-slate-400 hover:text-blue-900 flex items-center gap-1 transition-colors"
                        title="Copy formula text"
                      >
                        {copiedFormula === form.formula ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-600 text-[10px]">Copied</span>
                          </>
                        ) : (
                          <>
                            <Share2 className="w-3.5 h-3.5" />
                            <span className="text-[10px]">Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="my-3 p-3 bg-blue-50/60 border border-blue-100 rounded-lg text-center">
                      <span className="text-base font-mono font-bold text-blue-950 block">
                        {formatElectronicText(form.formula)}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {formatElectronicText(form.explanation)}
                    </p>
                  </div>

                  {form.unit && (
                    <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                      <span className="font-semibold text-slate-700">SI Units: </span>
                      {form.unit}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. CU EXAM QUESTIONS TAB */}
        {activeTab === 'questions' && (
          <div className="space-y-6 animate-in fade-in">
            {/* Header Banner */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-bold text-[10px] uppercase tracking-wider">
                      CU · IDC Electronics (ELTD)
                    </span>
                    <span className="text-xs text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-medium">
                      {pdfQuestionsForModule.length} Questions from Official PDF
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">
                    CU Examination Questions: {module.title}
                  </h2>
                  <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
                    Official questions transcribed directly from the CU IDC Electronics PDF repository, complemented with comprehensive Group A, B, and C examination problems and examiner solution guides.
                  </p>
                </div>

                {onOpenQuestionBank && (
                  <button
                    onClick={onOpenQuestionBank}
                    className="px-4 py-2.5 bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-800 hover:to-indigo-800 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition-all shadow-sm"
                  >
                    <GraduationCap className="w-4 h-4 text-amber-300" />
                    <span>Open All 80 Questions Bank</span>
                  </button>
                )}
              </div>

              {/* In-Module Question Search & Filter Bar */}
              <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row gap-2 items-center justify-between">
                <div className="relative w-full sm:w-80">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={questionSearch}
                    onChange={e => setQuestionSearch(e.target.value)}
                    placeholder="Search questions in this topic..."
                    className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-blue-800 focus:bg-white transition-all"
                  />
                  {questionSearch && (
                    <button
                      onClick={() => setQuestionSearch('')}
                      className="absolute right-2.5 top-2 text-[10px] text-slate-400 hover:text-slate-600"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-1.5 self-start sm:self-auto text-xs">
                  <span className="text-[11px] text-slate-500 font-medium">Show:</span>
                  <button
                    onClick={() => setQuestionFilter('all')}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                      questionFilter === 'all'
                        ? 'bg-blue-900 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    All ({pdfQuestionsForModule.length + module.examQuestions.length})
                  </button>
                  <button
                    onClick={() => setQuestionFilter('pdf')}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                      questionFilter === 'pdf'
                        ? 'bg-blue-900 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Official PDF ({pdfQuestionsForModule.length})
                  </button>
                  <button
                    onClick={() => setQuestionFilter('comprehensive')}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                      questionFilter === 'comprehensive'
                        ? 'bg-blue-900 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Group A/B/C Problems ({module.examQuestions.length})
                  </button>
                </div>
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-4">
              {/* Section 1: Questions from Official PDF */}
              {(questionFilter === 'all' || questionFilter === 'pdf') && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between px-1">
                    <span className="text-xs font-bold text-blue-950 uppercase tracking-wider flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-blue-800" />
                      <span>Questions from Official CU PDF ({pdfQuestionsForModule.length} Questions)</span>
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">CU ELTD</span>
                  </div>

                  {pdfQuestionsForModule
                    .filter(q => {
                      if (!questionSearch.trim()) return true;
                      const s = questionSearch.toLowerCase();
                      return (
                        q.qNumber?.toString() === s ||
                        q.question.toLowerCase().includes(s) ||
                        q.answerHint.toLowerCase().includes(s) ||
                        q.topicTag?.toLowerCase().includes(s)
                      );
                    })
                    .map((q) => (
                      <div 
                        key={q.id} 
                        className="bg-white border border-slate-200 hover:border-blue-300 rounded-xl p-5 shadow-xs space-y-3 transition-colors"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-md bg-blue-900 text-white font-mono font-bold text-[11px] flex items-center justify-center">
                              #{q.qNumber}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-50 text-amber-900 border border-amber-200">
                              {q.group}
                            </span>
                            {q.topicTag && (
                              <span className="text-[11px] text-slate-500 font-medium">
                                • {q.topicTag}
                              </span>
                            )}
                          </div>

                          <button
                            onClick={() => handleCopyQuestion(q.id, `Q#${q.qNumber}: ${q.question}\n\nAnswer: ${q.answerHint}`)}
                            className="px-2 py-1 rounded bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 text-[11px] font-medium flex items-center gap-1 transition-colors"
                            title="Copy to clipboard"
                          >
                            {copiedQuestionId === q.id ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-600" />
                                <span className="text-emerald-700 text-[10px]">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span className="text-[10px]">Copy</span>
                              </>
                            )}
                          </button>
                        </div>

                        <h3 className="font-semibold text-slate-900 text-sm leading-snug">
                          {formatElectronicText(q.question)}
                        </h3>

                        <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-1">
                          <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wider text-blue-900 flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-amber-500" />
                            <span>CU Examiner Solution Guide & Key Points:</span>
                          </span>
                          <p className="text-slate-700 leading-relaxed font-sans">
                            {formatElectronicText(q.answerHint)}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              )}

              {/* Section 2: Comprehensive Group A, B, C Examination Problems */}
              {(questionFilter === 'all' || questionFilter === 'comprehensive') && (
                <div className="space-y-3 pt-4">
                  <div className="flex items-center justify-between px-1">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-indigo-700" />
                      <span>CU Group A, B & C Analytical Problems ({module.examQuestions.length} Questions)</span>
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">Past CU Papers & Model Solutions</span>
                  </div>

                  {module.examQuestions
                    .filter(q => {
                      if (!questionSearch.trim()) return true;
                      const s = questionSearch.toLowerCase();
                      return (
                        q.question.toLowerCase().includes(s) ||
                        q.answerHint.toLowerCase().includes(s) ||
                        q.group.toLowerCase().includes(s) ||
                        q.topicTag?.toLowerCase().includes(s)
                      );
                    })
                    .map((q) => (
                      <div key={q.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
                          <div className="flex items-center gap-2">
                            <span className={`px-2.5 py-0.5 rounded text-xs font-bold ${
                              q.group.includes('Group A') 
                                ? 'bg-sky-100 text-sky-900' 
                                : q.group.includes('Group B') 
                                ? 'bg-indigo-100 text-indigo-900' 
                                : 'bg-purple-100 text-purple-900'
                            }`}>
                              {q.group}
                            </span>
                            {q.marks && (
                              <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                                {q.marks} Marks
                              </span>
                            )}
                            {q.topicTag && (
                              <span className="text-[11px] text-slate-500">
                                • {q.topicTag}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            {q.year && (
                              <span className="text-xs font-mono font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                                {q.year} Exam
                              </span>
                            )}
                            <button
                              onClick={() => handleCopyQuestion(q.id, `${q.question}\n\nAnswer: ${q.answerHint}`)}
                              className="px-2 py-1 rounded bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 text-[11px] font-medium flex items-center gap-1 transition-colors"
                              title="Copy to clipboard"
                            >
                              {copiedQuestionId === q.id ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-600" />
                                  <span className="text-emerald-700 text-[10px]">Copied</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  <span className="text-[10px]">Copy</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>

                        <h3 className="font-semibold text-slate-900 text-sm leading-snug">
                          {formatElectronicText(q.question)}
                        </h3>

                        <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-1">
                          <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wider text-blue-900 flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-amber-500" />
                            <span>CU Examiner Solution Guide & Key Points:</span>
                          </span>
                          <p className="text-slate-700 leading-relaxed font-sans">
                            {formatElectronicText(q.answerHint)}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* Bottom Question Bank & Modalities Callout */}
            <div className="p-5 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="space-y-1 text-center sm:text-left">
                <span className="font-bold text-amber-300 text-sm block flex items-center justify-center sm:justify-start gap-1.5">
                  <FileText className="w-4 h-4" />
                  <span>Looking for more CU examination questions with solutions?</span>
                </span>
                <span className="text-xs text-blue-100/90 block">
                  Access the complete 80 model questions bank with circuit calculations and step-by-step solutions.
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <a
                  href={CU_DRIVE_FOLDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg text-xs font-bold transition-colors shadow-sm flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Question Bank</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                {onOpenQuestionBank && (
                  <button
                    onClick={onOpenQuestionBank}
                    className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg text-xs font-semibold transition-colors"
                  >
                    Question Bank (80 Qs)
                  </button>
                )}
                <button
                  onClick={onOpenExamModalities}
                  className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg text-xs font-semibold transition-colors"
                >
                  Exam Modalities
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Pagination */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          {prevModule ? (
            <button
              onClick={() => onSelectModule(prevModule.id)}
              className="w-full sm:w-auto px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 text-blue-900" />
              <div className="text-left">
                <span className="text-[10px] text-slate-400 block">Previous Topic</span>
                <span>{prevModule.title}</span>
              </div>
            </button>
          ) : <div />}

          {nextModule && (
            <button
              onClick={() => onSelectModule(nextModule.id)}
              className="w-full sm:w-auto px-4 py-2.5 bg-blue-900 hover:bg-blue-800 text-white rounded-xl text-xs font-semibold flex items-center justify-end gap-2 transition-colors shadow-sm ml-auto"
            >
              <div className="text-right">
                <span className="text-[10px] text-blue-200 block">Next Topic</span>
                <span>{nextModule.title}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>
          )}
        </div>
      </main>

      {/* Sticky Mobile Bottom Navigation Bar (Guarantees 1-tap thumb access to all sections on any mobile screen) */}
      <nav aria-label="Mobile section navigation" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#001433]/95 backdrop-blur-md border-t border-blue-700/80 px-2 py-1.5 flex justify-around items-center shadow-2xl">
        <button
          onClick={() => { setActiveTab('theory'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center justify-center p-1.5 rounded-lg transition-all ${activeTab === 'theory' ? 'text-amber-300 font-bold scale-105' : 'text-blue-200 hover:text-white'}`}
        >
          <BookOpen className="w-4 h-4 mb-0.5" />
          <span className="text-[10px]">Theory</span>
        </button>
        <button
          onClick={() => { setActiveTab('symbols'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center justify-center p-1.5 rounded-lg transition-all ${activeTab === 'symbols' ? 'text-amber-300 font-bold scale-105' : 'text-blue-200 hover:text-white'}`}
        >
          <Cpu className="w-4 h-4 mb-0.5" />
          <span className="text-[10px]">Symbols</span>
        </button>
        <button
          onClick={() => { setActiveTab('circuits'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center justify-center p-1.5 rounded-lg transition-all ${activeTab === 'circuits' ? 'text-amber-300 font-bold scale-105' : 'text-blue-200 hover:text-white'}`}
        >
          <GitFork className="w-4 h-4 mb-0.5" />
          <span className="text-[10px]">Circuits ({module.circuits.length})</span>
        </button>
        <button
          onClick={() => { setActiveTab('lab'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center justify-center p-1.5 rounded-lg transition-all ${activeTab === 'lab' ? 'text-amber-300 font-bold scale-105' : 'text-blue-200 hover:text-white'}`}
        >
          <Calculator className="w-4 h-4 mb-0.5" />
          <span className="text-[10px]">Lab</span>
        </button>
        <button
          onClick={() => { setActiveTab('formulas'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center justify-center p-1.5 rounded-lg transition-all ${activeTab === 'formulas' ? 'text-amber-300 font-bold scale-105' : 'text-blue-200 hover:text-white'}`}
        >
          <Sparkles className="w-4 h-4 mb-0.5" />
          <span className="text-[10px]">Formulas</span>
        </button>
        <button
          onClick={() => { setActiveTab('questions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center justify-center p-1.5 rounded-lg transition-all ${activeTab === 'questions' ? 'text-amber-300 font-bold scale-105' : 'text-blue-200 hover:text-white'}`}
        >
          <HelpCircle className="w-4 h-4 mb-0.5" />
          <span className="text-[10px]">Exam Qs</span>
        </button>
      </nav>
    </div>
  );
};
