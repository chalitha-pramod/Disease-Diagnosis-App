import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { translations } from '../data/mockData';

const DiseaseCard = ({ disease, index }) => {
  const { language } = useApp();
  const [isExpanded, setIsExpanded] = useState(false);

  const getDiseaseName = () => {
    if (language === 'en') return disease.name;
    if (language === 'si') return disease.name_si;
    if (language === 'ta') return disease.name_ta;
    return disease.name;
  };

  const getDescription = () => {
    if (language === 'en') return disease.description;
    if (language === 'si') return disease.description_si;
    if (language === 'ta') return disease.description_ta;
    return disease.description;
  };

  const getCauses = () => {
    if (language === 'en') return disease.causes;
    if (language === 'si') return disease.causes_si;
    if (language === 'ta') return disease.causes_ta;
    return disease.causes;
  };

  const getPrevention = () => {
    if (language === 'en') return disease.prevention;
    if (language === 'si') return disease.prevention_si;
    if (language === 'ta') return disease.prevention_ta;
    return disease.prevention;
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'High':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Moderate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Mild':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getDiseaseIcon = (diseaseName) => {
    const name = diseaseName.toLowerCase();
    if (name.includes('cold')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      );
    } else if (name.includes('flu') || name.includes('influenza')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    } else if (name.includes('covid')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      );
    } else if (name.includes('hypertension') || name.includes('blood pressure')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    } else if (name.includes('diabetes')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
        </svg>
      );
    } else if (name.includes('migraine')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      );
    }
    // Default icon
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
    >
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-3">
          <div className="flex items-start gap-3">
            <div className="text-primary-600 flex-shrink-0 mt-1">
              {getDiseaseIcon(getDiseaseName())}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                {getDiseaseName()}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {getDescription()}
              </p>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border self-start ${getSeverityColor(disease.severity)}`}>
            {translations[language].severity}: {disease.severity}
          </span>
        </div>
      </div>

      {/* Expandable Content */}
      <motion.div 
        className="overflow-hidden" 
        initial={false} 
        animate={{ height: isExpanded ? 'auto' : 0 }} 
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="p-4 sm:p-6 space-y-4">
          {/* Causes */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span className="text-sm sm:text-base">{translations[language].causes}</span>
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              {getCauses()}
            </p>
          </div>

          {/* Prevention */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm sm:text-base">{translations[language].prevention}</span>
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              {getPrevention()}
            </p>
          </div>

          {/* WHO Link */}
          {disease.whoLink && (
            <div className="pt-2">
              <a
                href={disease.whoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {translations[language].learnMore}
              </a>
            </div>
          )}
        </div>
      </motion.div>

      {/* Expand/Collapse Button */}
      <div className="px-4 sm:px-6 py-3 bg-gray-50 border-t border-gray-100">
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200 gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-sm sm:text-base">
            {isExpanded ? 'Show Less' : 'Show More'}
          </span>
          <motion.svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ rotate: isExpanded ? 180 : 0 }} 
            transition={{ duration: 0.3 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default DiseaseCard;
