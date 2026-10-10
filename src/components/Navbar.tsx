import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  GraduationCap, 
  Sliders,
  Cpu
} from 'lucide-react';
import { courseModulesData } from '../data/coursesData';

interface NavbarProps {
  currentModuleId: string | null;
  onNavigateHome: () => void;
  onSelectModule: (moduleId: string) => void;
  onOpenExamModalities: () => void;
  onOpenQuestionBank?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentModuleId,
  onNavigateHome,
  onSelectModule,
  onOpenExamModalities,
  onOpenQuestionBank
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [semDropdownOpen, setSemDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const sem1Modules = courseModulesData.filter(m => m.semester === 'sem1');
  const sem2Modules = courseModulesData.filter(m => m.semester === 'sem2');
  const sem3Modules = courseModulesData.filter(m => m.semester === 'sem3');

  const filteredSearchResults = searchQuery.trim() === '' ? [] : courseModulesData.filter(m => 
    m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.theoreticalSections.some(s => s.title.toLowerCase().includes(searchQuery.toLowerCase()) || s.summary.toLowerCase().includes(searchQuery.toLowerCase())) ||
    m.formulas.some(f => f.name.toLowerCase().includes(searchQuery.toLowerCase()) || f.formula.toLowerCase().includes(searchQuery.toLowerCase())) ||
    m.circuits.some(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      {/* Top Academic Ribbon */}
      <div className="bg-[#0f1d38] text-slate-300 text-xs py-1.5 px-4 border-b border-blue-950">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold tracking-wider text-amber-300">CU</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">Interdisciplinary Course in Electronics (IDC - ELTD)</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">CCF & NEP Curriculum (Semesters I, II, III)</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo & Brand */}
          <button 
            onClick={onNavigateHome}
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#002b66] flex items-center justify-center text-amber-300 shadow-sm group-hover:bg-[#003882] transition-colors">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-slate-900 tracking-tight text-base sm:text-lg flex items-center gap-1.5">
                <span>IDC Electronics</span>
                <span className="text-xs bg-blue-100 text-blue-900 px-1.5 py-0.5 rounded font-mono font-medium">ELTD</span>
              </div>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={onNavigateHome}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${currentModuleId === null ? 'text-blue-900 bg-blue-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              Home
            </button>

            {/* Courses / Semesters Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setSemDropdownOpen(!semDropdownOpen)}
                onMouseEnter={() => setSemDropdownOpen(true)}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors flex items-center gap-1"
              >
                <span>Course Modules</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600" />
              </button>

              {semDropdownOpen && (
                <div 
                  onMouseLeave={() => setSemDropdownOpen(false)}
                  className="absolute left-0 top-full mt-1 w-80 bg-white border border-slate-200 rounded-xl shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-2"
                >
                  <div className="mb-2 pb-2 border-b border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    <span>Semesters I, II & III Modules</span>
                    <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded font-mono font-bold">Common Syllabus</span>
                  </div>
                  
                  <div className="space-y-1">
                    {courseModulesData.map((m, idx) => (
                      <button
                        key={m.id}
                        onClick={() => {
                          onSelectModule(m.id);
                          setSemDropdownOpen(false);
                        }}
                        className={`w-full text-left px-2.5 py-2 text-xs rounded-lg transition-colors flex items-center gap-2 ${currentModuleId === m.id ? 'bg-blue-50 text-blue-900 font-bold' : 'text-slate-700 hover:bg-slate-100'}`}
                      >
                        <span className="text-amber-600 font-mono text-[10px] font-bold shrink-0">{idx + 1}.</span>
                        <span className="truncate">{m.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Direct buttons for common study topics */}
            <button
              onClick={() => onSelectModule('basic_circuit_components')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${currentModuleId === 'basic_circuit_components' ? 'text-blue-900 bg-blue-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              Components
            </button>
            <button
              onClick={() => onSelectModule('semiconductor_devices_circuits')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${currentModuleId === 'semiconductor_devices_circuits' ? 'text-blue-900 bg-blue-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              Semiconductors
            </button>
            <button
              onClick={() => onSelectModule('bipolar_junction_transistors')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${currentModuleId === 'bipolar_junction_transistors' ? 'text-blue-900 bg-blue-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              BJT
            </button>
            <button
              onClick={() => onSelectModule('field_effect_transistor')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${currentModuleId === 'field_effect_transistor' ? 'text-blue-900 bg-blue-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              FET
            </button>
            <button
              onClick={() => onSelectModule('operational_amplifiers_applications')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${currentModuleId === 'operational_amplifiers_applications' ? 'text-blue-900 bg-blue-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              Op-Amps
            </button>
            <button
              onClick={() => onSelectModule('digital_logic_circuits')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${currentModuleId === 'digital_logic_circuits' ? 'text-blue-900 bg-blue-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              Digital Logic
            </button>
            <button
              onClick={() => onSelectModule('electronic_communication')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${currentModuleId === 'electronic_communication' ? 'text-blue-900 bg-blue-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              Communication
            </button>
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchModalOpen(true)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1 text-xs"
              title="Search syllabus, formulas & circuits"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Search</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <span className="text-xs font-semibold text-slate-500 uppercase">IDC Electronics (ELTD)</span>
            </div>

            <div className="space-y-1">
              <button
                onClick={() => { onNavigateHome(); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 rounded-md"
              >
                Home & Overview
              </button>

              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-3 pt-2">
                Semesters I, II & III Modules
              </div>
              {courseModulesData.map((m, idx) => (
                <button
                  key={m.id}
                  onClick={() => { onSelectModule(m.id); setMobileMenuOpen(false); }}
                  className={`w-full text-left px-3 py-1.5 text-xs rounded-md flex items-center gap-2 ${currentModuleId === m.id ? 'bg-blue-50 text-blue-900 font-bold' : 'text-slate-700 hover:bg-slate-100'}`}
                >
                  <span className="text-amber-600 font-mono text-[10px] font-bold shrink-0">{idx + 1}.</span>
                  <span>{m.title}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-start justify-center p-4 sm:pt-20">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95">
            <div className="p-4 border-b border-slate-200 flex items-center gap-3">
              <Search className="w-5 h-5 text-slate-400" />
              <input
                type="text"
                autoFocus
                placeholder="Search topics, laws, circuits, formulas (e.g., KCL, Zener, BJT CE, Shockley, Op-Amp, Full Adder, Superhet)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm bg-transparent outline-none text-slate-900 placeholder:text-slate-400"
              />
              <button
                onClick={() => setSearchModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto p-4 space-y-3">
              {searchQuery.trim() === '' ? (
                <div className="text-center py-6 text-slate-500 text-xs">
                  Type a topic name, circuit component, or mathematical theorem to search across all 7 IDC Electronics units.
                </div>
              ) : filteredSearchResults.length === 0 ? (
                <div className="text-center py-6 text-slate-500 text-xs">
                  No matching syllabus topics found for "{searchQuery}". Try searching for diode, transistor, op-amp, or KCL.
                </div>
              ) : (
                filteredSearchResults.map(m => (
                  <div
                    key={m.id}
                    onClick={() => {
                      onSelectModule(m.id);
                      setSearchModalOpen(false);
                    }}
                    className="p-3 rounded-lg border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 cursor-pointer transition-all"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-slate-900 text-sm">{m.title}</span>
                      <span className="text-[11px] text-blue-800 font-mono">{m.semesterLabel} · {m.paperCode}</span>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-2">{m.overview}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5 text-[10px] text-slate-500">
                      {m.circuits.map(c => (
                        <span key={c.id} className="bg-slate-100 px-2 py-0.5 rounded">Schematic: {c.title}</span>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
