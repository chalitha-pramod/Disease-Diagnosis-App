import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { translations } from '../data/mockData';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useApp();
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'si', name: 'සිංහල', flag: '🇱🇰' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' }
  ];

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
  };

  return (
    <motion.div 
      className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 bg-white rounded-lg shadow-md p-2 sm:p-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
        {translations[language].language}:
      </span>
      <div className="flex space-x-1">
        {languages.map((lang) => (
          <motion.button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
              language === lang.code 
                ? 'bg-primary-500 text-white shadow-md' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-1">{lang.flag}</span>
            <span className="hidden sm:inline">{lang.name}</span>
            <span className="sm:hidden">{lang.code.toUpperCase()}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default LanguageSwitcher;
