# Disease Diagnosis App

A modern, responsive web application built with React.js that helps users diagnose possible diseases based on selected symptoms. The app features multilingual support (English, Sinhala, Tamil) and provides comprehensive disease information with WHO resource links.

## 🚀 Features

### Core Functionality
- **Comprehensive Symptom Selection**: Choose from all available symptoms without limits
- **Disease Diagnosis**: AI-powered symptom matching algorithm with 60%+ accuracy threshold
- **Organized Symptom Categories**: Symptoms grouped by type for easy selection
- **Multilingual Support**: English, Sinhala (සිංහල), and Tamil (தமிழ்)

### User Experience
- **Multilingual Support**: English, Sinhala (සිංහල), and Tamil (தமிழ்)
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Modern UI**: Healthcare-themed design with soft colors and rounded cards

### Disease Information
- **Comprehensive Data**: Disease names, descriptions, causes, and prevention methods
- **Severity Levels**: Color-coded severity indicators (Mild, Moderate, High)
- **WHO Integration**: Direct links to World Health Organization resources
- **Expandable Cards**: Detailed information with expand/collapse functionality

## 🛠️ Technical Stack

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **State Management**: React Context API
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── DiseaseCard.js   # Individual disease display
│   ├── DiagnosisResults.js # Results page
│   ├── LanguageSwitcher.js # Language selection
│   └── SymptomSelector.js # Symptom selection interface
├── context/             # State management
│   └── AppContext.js    # React Context for global state
├── data/                # Mock data and translations
│   └── mockData.js      # Symptoms, diseases, and translations
├── App.js               # Main application component
├── index.js             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd disease-diagnosis-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 🎯 How to Use

### 1. Symptom Selection
- Browse through organized symptom categories:
  - **General Symptoms**: Fever, Fatigue, Dizziness, Loss of Appetite, Insomnia, Anxiety
  - **Respiratory Symptoms**: Cough, Chest Pain, Shortness of Breath
  - **Pain & Discomfort**: Headache, Nausea, Joint Pain, Abdominal Pain
  - **Skin & Visible Symptoms**: Rash, Swelling
- Click on symptoms to select them (no limit on selection)
- Selected symptoms are displayed at the top with easy removal
- Click the "Get Diagnosis" button when ready

### 2. Language Switching
- Use the language switcher in the header
- Choose between English, Sinhala, or Tamil
- All content updates immediately

### 3. Viewing Results
- Diagnosis results show possible diseases
- Each disease card displays:
  - Disease name and description
  - Severity level
  - Causes and prevention methods
  - WHO resource links
- Click "Show More" to expand detailed information

## 🔧 Configuration

### Adding New Symptoms
Edit `src/data/mockData.js` and add new symptoms to the `symptoms` array:

```javascript
{
  id: 16,
  name: 'New Symptom',
  name_si: 'නව රෝග ලක්ෂණ',
  name_ta: 'புதிய அறிகுறி'
}
```

### Adding New Diseases
Add new diseases to the `diseases` array with complete information:

```javascript
{
  id: 7,
  name: 'New Disease',
  name_si: 'නව රෝගය',
  name_ta: 'புதிய நோய்',
  description: 'Description in English',
  description_si: 'Description in Sinhala',
  description_ta: 'Description in Tamil',
  symptoms: [1, 2, 3], // Array of symptom IDs
  causes: 'Causes in English',
  causes_si: 'Causes in Sinhala',
  causes_ta: 'Causes in Tamil',
  prevention: 'Prevention in English',
  prevention_si: 'Prevention in Sinhala',
  prevention_ta: 'Prevention in Tamil',
  whoLink: 'https://www.who.int/health-topics/disease',
  severity: 'Moderate'
}
```

### Customizing Symptom Categories
Modify the `symptomCategories` object in `SymptomSelector.js` to organize symptoms differently:

```javascript
const symptomCategories = {
  'New Category': [1, 2, 3], // Array of symptom IDs
  // ... other categories
};
```

### Customizing Colors
Modify `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom primary colors
      },
      health: {
        // Your custom health colors
      }
    }
  }
}
```

## 🌐 Multilingual Support

The app supports three languages:

- **English (en)**: Default language
- **Sinhala (si)**: සිංහල
- **Tamil (ta)**: தமிழ்

All text content, including symptoms, diseases, and UI elements, is available in all three languages.

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🔒 Security Notes

- This is a frontend-only application
- No personal health data is stored or transmitted
- All disease information is for educational purposes
- Always consult healthcare professionals for medical advice

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## ⚠️ Disclaimer

This application is for educational and informational purposes only. It should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified healthcare providers with questions you may have regarding medical conditions.

## 🆘 Support

If you encounter any issues or have questions:
1. Check the browser console for errors
2. Ensure all dependencies are properly installed
3. Verify Node.js version compatibility
4. Create an issue in the repository

## 🚀 Future Enhancements

- Integration with real WHO API
- User accounts and symptom history
- More sophisticated AI algorithms
- Additional languages
- Offline functionality
- Export/import functionality
- More symptom categories and diseases
