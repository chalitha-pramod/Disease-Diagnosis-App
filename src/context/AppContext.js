import React, { createContext, useContext, useReducer } from 'react';
import { symptoms, diseases } from '../data/mockData';

const AppContext = createContext();

const initialState = {
  language: 'en',
  selectedSymptoms: [],
  searchQuery: '',
  textSymptoms: '',
  diagnosisResults: [],
  currentPage: 'home'
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    
    case 'ADD_SYMPTOM':
      return { 
        ...state, 
        selectedSymptoms: [...state.selectedSymptoms, action.payload] 
      };
    
    case 'REMOVE_SYMPTOM':
      return { 
        ...state, 
        selectedSymptoms: state.selectedSymptoms.filter(id => id !== action.payload) 
      };
    
    case 'CLEAR_SYMPTOMS':
      return { ...state, selectedSymptoms: [] };
    
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    
    case 'SET_TEXT_SYMPTOMS':
      return { ...state, textSymptoms: action.payload };
    
    case 'SET_DIAGNOSIS_RESULTS':
      return { ...state, diagnosisResults: action.payload };
    
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addSymptom = (symptomId) => {
    dispatch({ type: 'ADD_SYMPTOM', payload: symptomId });
  };

  const removeSymptom = (symptomId) => {
    dispatch({ type: 'REMOVE_SYMPTOM', payload: symptomId });
  };

  const clearSymptoms = () => {
    dispatch({ type: 'CLEAR_SYMPTOMS' });
  };

  const setLanguage = (language) => {
    dispatch({ type: 'SET_LANGUAGE', payload: language });
  };

  const setSearchQuery = (query) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
  };

  const setTextSymptoms = (text) => {
    dispatch({ type: 'SET_TEXT_SYMPTOMS', payload: text });
  };

  const setCurrentPage = (page) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page });
  };

  const diagnoseSymptoms = () => {
    if (state.selectedSymptoms.length === 0) return [];

    const matchingDiseases = diseases.filter(disease => {
      const symptomMatchCount = disease.symptoms.filter(symptomId => 
        state.selectedSymptoms.includes(symptomId)
      ).length;
      
      // Calculate match percentage (at least 60% match)
      const matchPercentage = (symptomMatchCount / state.selectedSymptoms.length) * 100;
      return matchPercentage >= 60;
    });

    // Sort by match percentage and severity
    const sortedDiseases = matchingDiseases.sort((a, b) => {
      const aMatchCount = a.symptoms.filter(symptomId => 
        state.selectedSymptoms.includes(symptomId)
      ).length;
      const bMatchCount = b.symptoms.filter(symptomId => 
        state.selectedSymptoms.includes(symptomId)
      ).length;
      
      const aMatchPercentage = (aMatchCount / state.selectedSymptoms.length) * 100;
      const bMatchPercentage = (bMatchCount / state.selectedSymptoms.length) * 100;
      
      if (aMatchPercentage !== bMatchPercentage) {
        return bMatchPercentage - aMatchPercentage;
      }
      
      // If match percentage is same, sort by severity
      const severityOrder = { 'High': 3, 'Moderate': 2, 'Mild': 1 };
      return severityOrder[b.severity] - severityOrder[a.severity];
    });

    dispatch({ type: 'SET_DIAGNOSIS_RESULTS', payload: sortedDiseases });
    return sortedDiseases;
  };

  const analyzeTextSymptoms = () => {
    if (!state.textSymptoms.trim()) return [];

    const text = state.textSymptoms.toLowerCase();
    const foundSymptoms = symptoms.filter(symptom => 
      text.includes(symptom.name.toLowerCase()) ||
      text.includes(symptom.name_si.toLowerCase()) ||
      text.includes(symptom.name_ta.toLowerCase())
    );

    if (foundSymptoms.length > 0) {
      // Auto-select found symptoms (up to 5)
      const symptomsToAdd = foundSymptoms.slice(0, 5).map(s => s.id);
      dispatch({ type: 'SET_DIAGNOSIS_RESULTS', payload: [] });
      return symptomsToAdd;
    }

    return [];
  };

  const searchDiseases = (query) => {
    if (!query.trim()) return [];

    const searchTerm = query.toLowerCase();
    const matchingDiseases = diseases.filter(disease => 
      disease.name.toLowerCase().includes(searchTerm) ||
      disease.description.toLowerCase().includes(searchTerm) ||
      disease.name_si.toLowerCase().includes(searchTerm) ||
      disease.name_ta.toLowerCase().includes(searchTerm)
    );

    return matchingDiseases;
  };

  const value = {
    ...state,
    symptoms,
    diseases,
    addSymptom,
    removeSymptom,
    clearSymptoms,
    setLanguage,
    setSearchQuery,
    setTextSymptoms,
    setCurrentPage,
    diagnoseSymptoms,
    analyzeTextSymptoms,
    searchDiseases
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
