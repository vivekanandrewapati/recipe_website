import React, { useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import ListItem from '../components/ListItem';
import RecipeDisplay from '../components/RecipeDisplay';

const Pantrychef = ({ isDarkMode }) => {
  const [mealType, setMealType] = useState('Lunch');
  const [cookingTime, setCookingTime] = useState(5);
  const [skillLevel, setSkillLevel] = useState('Novice');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [allergens, setAllergens] = useState('');
  const [recipe, setRecipe] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = import.meta.env.VITE_API_KEY;

  const generateRecipe = useCallback(async () => {
    if (!ingredients.trim() || !mealType.trim() || !cookingTime || !skillLevel.trim()) {
      setError('Please fill out all fields before generating a recipe.');
      return;
    }
    setLoading(true);
    setError('');

    setRecipe('');

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `Generate a recipe with nutritional information based on the following details:\nIngredients: ${ingredients} \nAllergens: ${allergens} \nSpecial instructions: ${instructions}\nMeal Type: ${mealType}\nCooking Time: ${cookingTime} minutes\nSkill Level: ${skillLevel}` }] }]
        }),
      });

      const data = await response.json();

      if (data.candidates && data.candidates.length > 0) {
        const generatedRecipe = data.candidates[0].content.parts[0].text;
        setRecipe(generatedRecipe);
      } else {
        setError('No recipe generated. Please try again.');
      }
    } catch (error) {
      console.error('Error generating recipe:', error);
      setError('An error occurred while generating the recipe. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [ingredients, mealType, cookingTime, skillLevel, allergens, instructions]);

  return (
    <div className={`min-h-screen font-sans ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <main className="container mx-auto px-4 pt-20">
        <section className="flex flex-col md:flex-row justify-between items-center py-8 md:py-12 gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Where Ingredients<br />Turn into<br />
              <span className="text-green-500">Masterpieces!</span>
            </h1>
            <p className={`text-lg md:text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Never a wasted pantry! Just NO recipe inspiration? PantryChef is the kitchen genie that
              transforms your basic ingredients into gourmet delights. No more dinner dilemmas, just
              delectable dishes!
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
          <div className="space-y-6">
            {[
              {
                title: "1. Add the ingredients you have at home",
                value: ingredients,
                onChange: setIngredients,
                placeholder: "Add ingredients (e.g., chicken, rice, tomatoes)"
              },
              {
                title: "2. Add Special Instructions",
                value: instructions,
                onChange: setInstructions,
                placeholder: "Any special instructions (e.g., vegetarian, low-carb)"
              },
              {
                title: "3. Add allergens",
                value: allergens,
                onChange: setAllergens,
                placeholder: "List any allergens to avoid"
              }
            ].map((field, index) => (
              <div key={index}
                className={`${isDarkMode
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-white border-gray-100'
                  } p-6 rounded-xl shadow-lg border transition-all duration-200 hover:shadow-xl`}
              >
                <h3 className={`text-xl md:text-2xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                  {field.title}
                </h3>
                <input
                  type="text"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  placeholder={field.placeholder}
                  className={`w-full p-3 rounded-lg border ${isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500'
                    } focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors`}
                />
              </div>
            ))}

            <div className={`${isDarkMode
              ? 'bg-gray-800 border-gray-700'
              : 'bg-white border-gray-100'
              } p-6 rounded-xl shadow-lg border transition-all duration-200 hover:shadow-xl`}>
              <h3 className={`text-xl md:text-2xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                4. Select what meal you want to cook
              </h3>
              <div className="relative">
                <select
                  value={mealType}
                  onChange={(e) => setMealType(e.target.value)}
                  className={`w-full p-3 rounded-lg border appearance-none ${isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-gray-50 border-gray-200 text-gray-900'
                    } focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors`}
                >
                  <option>Breakfast</option>
                  <option>Lunch</option>
                  <option>Dinner</option>
                  <option>Snack</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                  <svg className={`h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className={`${isDarkMode
              ? 'bg-gray-800 border-gray-700'
              : 'bg-white border-gray-100'
              } p-6 rounded-xl shadow-lg border transition-all duration-200 hover:shadow-xl`}>
              <h3 className={`text-xl md:text-2xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                5. Select how much time you have
              </h3>
              <div className="space-y-2">
                <input
                  type="range"
                  min="5"
                  max="120"
                  value={cookingTime}
                  onChange={(e) => setCookingTime(e.target.value)}
                  className="w-full accent-green-500"
                />
                <p className={`text-right ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {cookingTime} minutes
                </p>
              </div>
            </div>

            <div className={`${isDarkMode
              ? 'bg-gray-800 border-gray-700'
              : 'bg-white border-gray-100'
              } p-6 rounded-xl shadow-lg border transition-all duration-200 hover:shadow-xl`}>
              <h3 className={`text-xl md:text-2xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                6. Select your skill level
              </h3>
              <div className="relative">
                <select
                  value={skillLevel}
                  onChange={(e) => setSkillLevel(e.target.value)}
                  className={`w-full p-3 rounded-lg border appearance-none ${isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-gray-50 border-gray-200 text-gray-900'
                    } focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors`}
                >
                  <option>Novice</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                  <option>Expert</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                  <svg className={`h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-6">
            <button
              onClick={generateRecipe}
              disabled={loading}
              className={`w-full md:w-auto px-8 py-4 rounded-xl text-white font-medium text-lg
                ${loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-500 hover:bg-green-600 active:bg-green-700 shadow-lg hover:shadow-xl'
                } transition-all duration-200`}
            >
              {loading ? 'Generating...' : 'Generate Recipe'}
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

        {recipe && (
          <section className="max-w-3xl mx-auto mb-12">
            <RecipeDisplay recipe={recipe} isDarkMode={isDarkMode} />
          </section>
        )}
      </main>
    </div>
  );
};

export default Pantrychef;