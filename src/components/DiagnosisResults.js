import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { translations } from '../data/mockData';
import DiseaseCard from './DiseaseCard';

const DiagnosisResults = () => {
  const { 
    language, 
    diagnosisResults, 
    selectedSymptoms, 
    symptoms, 
    setCurrentPage 
  } = useApp();

  const getSymptomName = (symptom) => {
    if (language === 'en') return symptom.name;
    if (language === 'si') return symptom.name_si;
    if (language === 'ta') return symptom.name_ta;
    return symptom.name;
  };

  if (diagnosisResults.length === 0) {
    return (
      <motion.div 
        className="w-full max-w-4xl mx-auto text-center py-8 sm:py-12 px-4 sm:px-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100">
          <svg className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
          </svg>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
            {translations[language].noDiseasesFound}
          </h3>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Try selecting different symptoms or use the search function to find specific diseases.
          </p>
          <motion.button 
            onClick={() => setCurrentPage('home')} 
            className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 font-medium text-sm sm:text-base"
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            {translations[language].backToHome}
          </motion.button>
        </div>
      </motion.div>
    );
  }

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
          {translations[language].possibleDiseases}
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6 px-4">
          Based on your selected symptoms, here are the possible diseases:
        </p>
        
        {/* Selected Symptoms Summary */}
        <div className="bg-gradient-to-r from-primary-50 to-health-50 rounded-xl p-4 sm:p-6 border border-primary-200 inline-block mx-4 sm:mx-0">
          <h3 className="font-semibold text-primary-800 mb-2 text-sm sm:text-base">
            {translations[language].selectedSymptoms}:
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {selectedSymptoms.map((symptomId) => {
              const symptom = symptoms.find(s => s.id === symptomId);
              return (
                <span 
                  key={symptomId} 
                  className="px-2 sm:px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs sm:text-sm font-medium"
                >
                  {getSymptomName(symptom)}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-center">
        <p className="text-gray-600 text-sm sm:text-base">
          Found <span className="font-semibold text-primary-600">{diagnosisResults.length}</span> possible disease{diagnosisResults.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Disease Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {diagnosisResults.map((disease, index) => (
          <DiseaseCard 
            key={disease.id} 
            disease={disease} 
            index={index} 
          />
        ))}
      </div>

      {/* Back Button */}
      <div className="text-center pt-6 sm:pt-8">
        <motion.button
          onClick={() => setCurrentPage('home')}
          className="px-6 sm:px-8 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium text-sm sm:text-base"
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          {translations[language].backToHome}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default DiagnosisResults;
