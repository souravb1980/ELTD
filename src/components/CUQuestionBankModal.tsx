import React, { useState, useMemo } from 'react';
import { 
  X, 
  Search, 
  BookOpen, 
  ExternalLink, 
  Printer, 
  Copy, 
  Check, 
  FileText, 
  Sparkles, 
  Filter, 
  ArrowRight,
  Layers,
  GraduationCap,
  HelpCircle,
  Code
} from 'lucide-react';
import { CU_QUESTION_BANK_2024 } from '../data/questionBank2024';
import { CU_DRIVE_FOLDER_URL } from '../data/coursesData';

interface CUQuestionBankModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectModule: (moduleId: string) => void;
  initialModuleId?: string | null;
}

export const CUQuestionBankModal: React.FC<CUQuestionBankModalProps> = ({
  isOpen,
  onClose,
  onSelectModule,
  initialModuleId
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModuleFilter, setSelectedModuleFilter] = useState<string>(initialModuleId || 'all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  // Module filter options
  const moduleOptions = [
    { id: 'all', label: 'All 80 Questions', count: CU_QUESTION_BANK_2024.length },
    { id: 'basic_circuit_components', label: '1. Basic Circuit Components (Q1-Q19)', count: 19 },
    { id: 'semiconductor_devices_circuits', label: '2. Semiconductor Devices and Circuits (Q20-Q39)', count: 20 },
    { id: 'bipolar_junction_transistors', label: '3. Bipolar Junction Transistors (BJT) (Q40-Q50)', count: 11 },
    { id: 'field_effect_transistor', label: '4. Field Effect Transistor (Q51-Q53)', count: 3 },
    { id: 'operational_amplifiers_applications', label: '5. Operational Amplifiers and Its Applications (Q54-Q58)', count: 5 },
    { id: 'electronic_communication', label: '6. Electronic Communication (Q59-Q62)', count: 4 },
    { id: 'digital_logic_circuits', label: '7. Digital Logic Circuits (Q63-Q80)', count: 18 },
  ];

  const filteredQuestions = useMemo(() => {
    return CU_QUESTION_BANK_2024.filter(q => {
      const matchesModule = selectedModuleFilter === 'all' || q.moduleId === selectedModuleFilter;
      if (!matchesModule) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase().trim();
      const matchNumber = q.qNumber?.toString() === query || `q${q.qNumber}` === query || `#${q.qNumber}` === query;
      const matchText = q.question.toLowerCase().includes(query);
      const matchAnswer = q.answerHint.toLowerCase().includes(query);
      const matchTag = q.topicTag?.toLowerCase().includes(query);
      const matchGroup = q.group?.toLowerCase().includes(query);

      return matchNumber || matchText || matchAnswer || matchTag || matchGroup;
    });
  }, [searchQuery, selectedModuleFilter]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200 bg-gradient-to-r from-[#00224d] via-[#002b66] to-[#0a3575] text-white flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-bold text-[10px] uppercase tracking-wider">
                CU Examination Question Bank
              </span>
              <span className="text-xs text-blue-200 font-mono">
                80 Questions Transcribed from PDF
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-amber-300" />
              <span>CU Examination Question Bank (ELTD)</span>
            </h2>
            <p className="text-xs text-blue-100/80 max-w-2xl leading-relaxed">
              Complete official repository containing all 80 questions from the CU IDC Electronics examination PDF across Semester I, II, and III, with step-by-step examiner solution guides.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print Question Bank"
              className="p-2 text-blue-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors hidden sm:flex items-center gap-1 text-xs"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>
            <a
              href={CU_DRIVE_FOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-amber-300 hover:text-amber-200 hover:bg-white/10 rounded-lg transition-colors hidden sm:flex items-center gap-1 text-xs"
              title="Open Official Google Drive Folder"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Drive PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search & Module Filters */}
        <div className="p-4 border-b border-slate-200 bg-white space-y-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search by question number (e.g. 12, Q47) or keyword (e.g. transformer, color code, KCL, bridge, Zener, Op-Amp, XOR)..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-800 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Module Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              <span className="text-[11px] font-semibold text-slate-500 shrink-0 mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3" /> Filter:
              </span>
              {moduleOptions.map(opt => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedModuleFilter(opt.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedModuleFilter === opt.id
                      ? 'bg-blue-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50">
          {filteredQuestions.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
                <HelpCircle className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <h3 className="font-semibold text-slate-800 text-sm">No questions matched your search</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                  Try searching for another keyword or switch the module filter to "All 80 Questions".
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedModuleFilter('all'); }}
                  className="mt-3 px-3 py-1.5 bg-blue-900 text-white rounded-lg text-xs font-medium"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 px-1">
                  <span>Showing {filteredQuestions.length} of {CU_QUESTION_BANK_2024.length} official PDF questions</span>
                  <span className="font-mono text-[11px]">CU · ELTD</span>
                </div>

                {filteredQuestions.map((q) => (
                  <div 
                    key={q.id}
                    className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-sm space-y-3 hover:border-blue-300 transition-colors"
                  >
                    {/* Top Meta Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-blue-900 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                          #{q.qNumber}
                        </span>
                        <div>
                          <span className="text-xs font-bold text-blue-950 block">
                            {q.moduleName}
                          </span>
                          <div className="flex items-center gap-2 text-[10px] text-slate-500">
                            <span className="font-medium text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                              {q.group}
                            </span>
                            {q.topicTag && (
                              <span>• {q.topicTag}</span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleCopy(q.id, `Q#${q.qNumber}: ${q.question}\n\nAnswer: ${q.answerHint}`)}
                          className="px-2 py-1 rounded bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 text-[11px] font-medium flex items-center gap-1 transition-colors"
                          title="Copy Question & Answer"
                        >
                          {copiedId === q.id ? (
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

                        <button
                          onClick={() => {
                            onClose();
                            onSelectModule(q.moduleId);
                          }}
                          className="px-2.5 py-1 rounded bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 text-[11px] font-semibold flex items-center gap-1 transition-colors"
                        >
                          <span>Study Unit</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Question text */}
                    <h3 className="font-semibold text-slate-900 text-sm leading-snug">
                      {q.question}
                    </h3>

                    {/* Solution / Answer Guide */}
                    <div className="bg-slate-50/90 border border-slate-200/80 rounded-lg p-3 sm:p-4 text-xs space-y-1.5">
                      <div className="flex items-center gap-1.5 text-blue-900 font-bold text-[11px] uppercase tracking-wider">
                        <Sparkles className="w-3 h-3 text-amber-500" />
                        <span>CU Examiner Solution Guide & Key Points:</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed font-sans">
                        {q.answerHint}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-white flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-600 text-[11px]">
            <span className="font-semibold text-slate-800">CU (ELTD-IDC)</span>
            <span>•</span>
            <span>Tutorial: 20 Marks</span>
            <span>•</span>
            <span>Theory: 50 Marks</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={CU_DRIVE_FOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 font-semibold inline-flex items-center gap-1"
            >
              <span>View Original Google Drive PDF Folder</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
