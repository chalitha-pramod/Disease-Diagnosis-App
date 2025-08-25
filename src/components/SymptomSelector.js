import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { translations } from '../data/mockData';

const SymptomSelector = () => {
  const { 
    language, 
    symptoms, 
    selectedSymptoms, 
    addSymptom, 
    removeSymptom, 
    clearSymptoms,
    diagnoseSymptoms,
    setCurrentPage
  } = useApp();

  const handleSymptomToggle = (symptomId) => {
    if (selectedSymptoms.includes(symptomId)) {
      removeSymptom(symptomId);
    } else {
      addSymptom(symptomId);
    }
  };

  const handleDiagnose = () => {
    const results = diagnoseSymptoms();
    if (results.length > 0) {
      setCurrentPage('diagnosis');
    }
  };

  const getSymptomName = (symptom) => {
    if (language === 'en') return symptom.name;
    if (language === 'si') return symptom.name_si;
    if (language === 'ta') return symptom.name_ta;
    return symptom.name;
  };

  // Group symptoms by category for better organization
  const symptomCategories = {
    'General': [1, 4, 6, 13, 14, 15], // Fever, Fatigue, Dizziness, Loss of Appetite, Insomnia, Anxiety
    'Respiratory': [2, 7, 8], // Cough, Chest Pain, Shortness of Breath
    'Pain & Discomfort': [3, 5, 9, 10], // Headache, Nausea, Joint Pain, Abdominal Pain
    'Skin & Visible': [11, 12] // Rash, Swelling
  };

  const getCategoryName = (category) => {
    const categoryNames = {
      'General': {
        en: 'General Symptoms',
        si: 'සාමාන්‍ය රෝග ලක්ෂණ',
        ta: 'பொதுவான அறிகுறிகள்'
      },
      'Respiratory': {
        en: 'Respiratory Symptoms',
        si: 'සාශ්වාස රෝග ලක්ෂණ',
        ta: 'சுவாச அறிகுறிகள்'
      },
      'Pain & Discomfort': {
        en: 'Pain & Discomfort',
        si: 'වේදනාව සහ අපහසුතාව',
        ta: 'வலி மற்றும் சங்கடம்'
      },
      'Skin & Visible': {
        en: 'Skin & Visible Symptoms',
        si: 'සම සහ දෘශ්‍ය රෝග ලක්ෂණ',
        ta: 'தோல் மற்றும் காணக்கூடிய அறிகுறிகள்'
      }
    };
    
    return categoryNames[category][language] || categoryNames[category]['en'];
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'General': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      'Respiratory': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      'Pain & Discomfort': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
      'Skin & Visible': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      )
    };
    return icons[category];
  };

  const getSymptomIcon = (symptomId) => {
    const icons = {
      1: ( // Fever
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      2: ( // Cough
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      3: ( // Headache
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      4: ( // Fatigue
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      5: ( // Nausea
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a1 1 0 01-1.57-.854l-.158-.316a6 6 0 00-3.86-.517L6.1 15.272a2 2 0 00-1.022.547L4.428 19a2 2 0 002.572 2.572l.543-.271a8 8 0 013.861-.517l.318.158a1 1 0 001.57-.854l.158-.316a8 8 0 013.861-.517l.543.271A2 2 0 0021.428 19l-1.022-3.572z" />
        </svg>
      ),
      6: ( // Dizziness
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      7: ( // Chest Pain
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      8: ( // Shortness of Breath
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      9: ( // Joint Pain
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
        </svg>
      ),
      10: ( // Abdominal Pain
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      11: ( // Rash
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      12: ( // Swelling
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      13: ( // Loss of Appetite
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
        </svg>
      ),
      14: ( // Insomnia
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      15: ( // Anxiety
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
        </svg>
      )
    };
    return icons[symptomId] || (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  };

  return (
    <motion.div 
      className="w-full max-w-6xl mx-auto space-y-6 sm:space-y-8 px-4 sm:px-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
          {translations[language].selectSymptoms}
        </h2>
        <p className="text-gray-600 text-base sm:text-lg px-4">
          Select all the symptoms you are experiencing to get the most accurate diagnosis
        </p>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          {selectedSymptoms.length} {translations[language].selectedSymptoms}
        </p>
      </div>

      {/* Selected Symptoms Display */}
      {selectedSymptoms.length > 0 && (
        <motion.div 
          className="bg-gradient-to-r from-primary-50 to-health-50 rounded-xl p-4 sm:p-6 border border-primary-200 mx-4 sm:mx-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
            <h3 className="text-lg sm:text-xl font-semibold text-primary-800 text-center sm:text-left">
              {translations[language].selectedSymptoms}
            </h3>
            <motion.button
              onClick={clearSymptoms}
              className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 font-medium transition-colors duration-200 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {translations[language].clearAll}
            </motion.button>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
            {selectedSymptoms.map((symptomId) => {
              const symptom = symptoms.find(s => s.id === symptomId);
              return (
                <motion.span
                  key={symptomId}
                  className="inline-flex items-center px-3 sm:px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium shadow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  {getSymptomIcon(symptomId)}
                  <span className="ml-2">{getSymptomName(symptom)}</span>
                  <button
                    onClick={() => removeSymptom(symptomId)}
                    className="ml-2 sm:ml-3 text-primary-600 hover:text-primary-800 font-bold text-lg p-1"
                  >
                    ×
                  </button>
                </motion.span>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Symptoms by Category */}
      <div className="space-y-6 sm:space-y-8">
        {Object.entries(symptomCategories).map(([category, symptomIds]) => (
          <motion.div
            key={category}
            className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6 mx-4 sm:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center justify-center mb-4 gap-2">
              <div className="text-primary-600">
                {getCategoryIcon(category)}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                {getCategoryName(category)}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {symptomIds.map((symptomId) => {
                const symptom = symptoms.find(s => s.id === symptomId);
                const isSelected = selectedSymptoms.includes(symptomId);
                
                return (
                  <motion.div
                    key={symptomId}
                    className={`relative p-3 sm:p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'border-primary-500 bg-primary-50 shadow-md'
                        : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-sm'
                    }`}
                    onClick={() => handleSymptomToggle(symptomId)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded border-2 flex items-center justify-center mt-0.5 flex-shrink-0 ${
                        isSelected
                          ? 'border-primary-500 bg-primary-500'
                          : 'border-gray-300'
                      }`}>
                        {isSelected && (
                          <motion.svg
                            className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </motion.svg>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="text-gray-500 flex-shrink-0">
                            {getSymptomIcon(symptomId)}
                          </div>
                          <h4 className={`font-medium text-sm sm:text-base truncate ${
                            isSelected ? 'text-primary-800' : 'text-gray-800'
                          }`}>
                            {getSymptomName(symptom)}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Diagnose Button */}
      {selectedSymptoms.length > 0 && (
        <motion.div 
          className="text-center pt-6 sm:pt-8 px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button
            onClick={handleDiagnose}
            className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-primary-500 to-health-500 text-white text-lg sm:text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {translations[language].diagnose}
          </motion.button>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            You have selected {selectedSymptoms.length} symptom{selectedSymptoms.length !== 1 ? 's' : ''}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SymptomSelector;
