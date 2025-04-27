// src/components/RecipeDisplay.jsx
import React from 'react';

const RecipeDisplay = ({ recipe, isDarkMode }) => {
    const formatRecipe = (text) => {
        return text.split('\n').map((line, index) => {
            if (line.startsWith('**')) {
                return <h3 key={index} className="font-bold mt-4 mb-2">{line.replace(/\*\*/g, '')}</h3>;
            } else if (line.startsWith('*')) {
                return <li key={index} className="ml-4">{line.replace(/^\*\s*/, '')}</li>;
            } else if (line.trim() === '') {
                return <br key={index} />;
            } else {
                return <p key={index} className="mb-2">{line}</p>;
            }
        });
    };

    return (
        <div className={`p-4 rounded-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}`}>
            {formatRecipe(recipe)}
        </div>
    );
};

export default RecipeDisplay;