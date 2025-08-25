import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppProvider, useApp } from './context/AppContext';
import { translations } from './data/mockData';
import LanguageSwitcher from './components/LanguageSwitcher';
import SymptomSelector from './components/SymptomSelector';
import DiagnosisResults from './components/DiagnosisResults';

const AppContent = () => {
  const { language, currentPage, setCurrentPage } = useApp();

  const renderPage = () => {
    switch (currentPage) {
      case 'diagnosis':
        return <DiagnosisResults />;
      default:
        return <SymptomSelector />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <motion.header 
        className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between h-auto sm:h-16 py-3 sm:py-0 gap-3 sm:gap-0">
            {/* Logo and Title */}
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => setCurrentPage('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary-500 to-health-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                  {translations[language].title}
                </h1>
                <p className="text-xs text-gray-500 hidden sm:block">
                  {translations[language].subtitle}
                </p>
              </div>
            </motion.div>

            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <motion.footer 
        className="bg-white border-t border-gray-100 mt-12 sm:mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="text-center text-gray-500 text-xs sm:text-sm">
            <p className="mb-2">
              This application is for educational purposes only and should not replace professional medical advice.
            </p>
            <p>
              Always consult with a healthcare professional for proper diagnosis and treatment.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

const App = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
