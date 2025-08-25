# 🚀 Quick Start Guide

## Immediate Setup

### Option 1: Windows Batch File
1. Double-click `setup.bat`
2. Wait for dependencies to install
3. Run `npm start`

### Option 2: PowerShell
1. Right-click `setup.ps1` → "Run with PowerShell"
2. Wait for dependencies to install
3. Run `npm start`

### Option 3: Manual Setup
1. Open terminal/command prompt
2. Run: `npm install`
3. Run: `npm start`

## What You'll Get

✅ **Complete Disease Diagnosis App** with:
- Comprehensive symptom selection (all 15 symptoms available)
- Organized symptom categories for easy selection
- Disease matching algorithm
- Multilingual support (English, Sinhala, Tamil)
- Responsive design
- Smooth animations

## Features Ready to Use

🎯 **Organized Symptom Selector**: 
- **General Symptoms**: Fever, Fatigue, Dizziness, Loss of Appetite, Insomnia, Anxiety
- **Respiratory Symptoms**: Cough, Chest Pain, Shortness of Breath  
- **Pain & Discomfort**: Headache, Nausea, Joint Pain, Abdominal Pain
- **Skin & Visible**: Rash, Swelling

🏥 **Disease Database**: 6 diseases with complete information
📱 **Mobile Friendly**: Works on all devices
🌐 **3 Languages**: Switch between English, Sinhala, Tamil
🎨 **Modern UI**: Healthcare-themed design with Tailwind CSS

## Next Steps

1. **Start the app**: `npm start`
2. **Open browser**: Navigate to `http://localhost:3000`
3. **Select symptoms**: Choose from organized categories (no limit)
4. **Get diagnosis**: Click "Get Diagnosis" button
5. **Explore results**: View possible diseases with details

## Troubleshooting

- **Port 3000 busy**: Try `npm start -- --port 3001`
- **Dependencies error**: Delete `node_modules` folder and run `npm install` again
- **Build errors**: Ensure Node.js version 14+ is installed

## Ready to Customize?

- Add symptoms: Edit `src/data/mockData.js`
- Add diseases: Extend the diseases array
- Change colors: Modify `tailwind.config.js`
- Add languages: Extend translations object
- Organize symptoms: Modify categories in `SymptomSelector.js`

---

**Happy Diagnosing! 🩺✨**
