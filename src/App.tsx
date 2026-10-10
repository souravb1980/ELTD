import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ModulePage } from './pages/ModulePage';
import { ExamModalitiesModal } from './components/ExamModalitiesModal';
import { CUQuestionBankModal } from './components/CUQuestionBankModal';
import { courseModulesData } from './data/coursesData';

export default function App() {
  const [currentModuleId, setCurrentModuleId] = useState<string | null>(null);
  const [examModalitiesOpen, setExamModalitiesOpen] = useState<boolean>(false);
  const [questionBankOpen, setQuestionBankOpen] = useState<boolean>(false);

  // Synchronize hash in URL for direct bookmarking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'exam-modalities') {
        setExamModalitiesOpen(true);
      } else if (hash === 'question-bank') {
        setQuestionBankOpen(true);
      } else {
        const matchingModule = courseModulesData.find(m => m.id === hash || m.slug === hash);
        if (matchingModule) {
          setCurrentModuleId(matchingModule.id);
        } else if (hash === '' || hash === 'home') {
          setCurrentModuleId(null);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToModule = (moduleId: string) => {
    setCurrentModuleId(moduleId);
    window.location.hash = moduleId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentModuleId(null);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeModule = currentModuleId 
    ? courseModulesData.find(m => m.id === currentModuleId) || null
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <Navbar
        currentModuleId={currentModuleId}
        onNavigateHome={navigateToHome}
        onSelectModule={navigateToModule}
        onOpenExamModalities={() => setExamModalitiesOpen(true)}
        onOpenQuestionBank={() => setQuestionBankOpen(true)}
      />

      {/* Main Content Area */}
      <div className="flex-1">
        {activeModule ? (
          <ModulePage
            module={activeModule}
            onNavigateHome={navigateToHome}
            onSelectModule={navigateToModule}
            allModules={courseModulesData}
            onOpenExamModalities={() => setExamModalitiesOpen(true)}
            onOpenQuestionBank={() => setQuestionBankOpen(true)}
          />
        ) : (
          <HomePage
            modules={courseModulesData}
            onSelectModule={navigateToModule}
            onOpenExamModalities={() => setExamModalitiesOpen(true)}
            onOpenQuestionBank={() => setQuestionBankOpen(true)}
          />
        )}
      </div>

      {/* Footer */}
      <Footer
        onSelectModule={navigateToModule}
        onOpenExamModalities={() => setExamModalitiesOpen(true)}
      />

      {/* Examination Modalities Detailed Modal */}
      <ExamModalitiesModal
        isOpen={examModalitiesOpen}
        onClose={() => setExamModalitiesOpen(false)}
      />

      {/* CU Examination Question Bank (80 Questions from PDF) */}
      <CUQuestionBankModal
        isOpen={questionBankOpen}
        onClose={() => setQuestionBankOpen(false)}
        onSelectModule={navigateToModule}
        initialModuleId={currentModuleId}
      />
    </div>
  );
}
