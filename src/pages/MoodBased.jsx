import React, { useState, useCallback } from 'react';
import RecipeDisplay from '../components/RecipeDisplay';
import { useTheme } from '../context/theme';

const Moodbased = () => {
  const { isDarkMode } = useTheme();
  const [mood, setMood] = useState('');
  const [moodDescription, setMoodDescription] = useState('');
  const [suggestedFood, setSuggestedFood] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  const API_KEY = import.meta.env.VITE_API_KEY;

  const generateFoodSuggestion = useCallback(async () => {
    if (!mood.trim() && !moodDescription.trim()) {
      setError('Please select or describe your mood before generating a food suggestion.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `Generate a food recipe based on the mood: ${mood}. Additional mood description: ${moodDescription}` }] }]
        }),
      });

      const data = await response.json();

      if (data.candidates && data.candidates.length > 0) {
        const generatedSuggestion = data.candidates[0].content.parts[0].text;
        setSuggestedFood(generatedSuggestion);
      } else {
        setError('No food suggestion generated. Please try again.');
      }
    } catch (error) {
      console.error('Error generating food suggestion:', error);
      setError('An error occurred while generating the food suggestion. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [mood, moodDescription]);

  return (
    <div className={`min-h-screen font-sans ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <main className="container mx-auto px-4 pt-20">
        <section className="flex flex-col md:flex-row justify-between items-center py-8 md:py-12 gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find the Perfect Food <br />for Your <span className="text-green-500">Mood!</span>
            </h1>
            <p className={`text-lg md:text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Feeling happy, sad, or stressed? Discover the best food to match your mood and boost your spirits!
            </p>
            <p className={`text-base md:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Scientific studies have shown that certain foods can influence our mood by altering brain chemistry and hormone levels. By selecting the right foods, you can enhance your emotional well-being and improve your overall mood.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://www.chefgpt.xyz/assets/images/Feature%20PantryChef.webp"
              alt="Phone mockup"
              className="max-w-xs md:max-w-sm rounded-2xl shadow-xl"
            />
          </div>
        </section>

        <section className="max-w-2xl mx-auto mb-12 space-y-6">
          <div className={`${isDarkMode
            ? 'bg-gray-800 border-gray-700'
            : 'bg-white border-gray-100'
            } p-6 rounded-xl shadow-lg border transition-all duration-200 hover:shadow-xl`}>
            <h3 className={`text-xl md:text-2xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
              Describe your mood
            </h3>
            <input
              type="text"
              value={moodDescription}
              onChange={(e) => setMoodDescription(e.target.value)}
              placeholder="How are you feeling today?"
              className={`w-full p-3 rounded-lg border ${isDarkMode
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500'
                } focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors`}
            />
          </div>

          <div className={`${isDarkMode
            ? 'bg-gray-800 border-gray-700'
            : 'bg-white border-gray-100'
            } p-6 rounded-xl shadow-lg border transition-all duration-200 hover:shadow-xl`}>
            <h3 className={`text-xl md:text-2xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
              Select your mood
            </h3>
            <div className="relative">
              <select
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className={`w-full p-3 rounded-lg border appearance-none ${isDarkMode
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-gray-50 border-gray-200 text-gray-900'
                  } focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors`}
              >
                <option value="" className="py-1.5">Choose a mood</option>
                <option value="happy" className="py-1.5">Happy</option>
                <option value="sad" className="py-1.5">Sad</option>
                <option value="stressed" className="py-1.5">Stressed</option>
                <option value="energetic" className="py-1.5">Energetic</option>
                <option value="tired" className="py-1.5">Tired</option>

              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className={`h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-6">
            <button
              onClick={generateFoodSuggestion}
              disabled={loading}
              className={`w-full md:w-auto px-8 py-4 rounded-xl text-white font-medium text-lg
                ${loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-500 hover:bg-green-600 active:bg-green-700 shadow-lg hover:shadow-xl'
                } transition-all duration-200`}
            >
              {loading ? 'Generating...' : 'Generate Food Suggestion'}
            </button>
          </div>
        </section>

        {error && (
          <div className="max-w-2xl mx-auto mb-8">
            <p className={`text-red-500 text-center p-4 rounded-lg ${isDarkMode ? 'bg-red-900/30' : 'bg-red-100'
              }`}>
              {error}
            </p>
          </div>
        )}

        {suggestedFood && (
          <section className="max-w-3xl mx-auto mb-12">
            <RecipeDisplay recipe={suggestedFood} isDarkMode={isDarkMode} />
          </section>
        )}
      </main>
    </div>
  );
};

export default Moodbased;