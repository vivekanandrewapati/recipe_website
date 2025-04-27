// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import useTheme from '../context/theme';
// import RecipeDisplay from '../components/RecipeDisplay';
// function SavedRecipes() {
//     const { isDarkMode } = useTheme();
//     const [savedRecipes, setSavedRecipes] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         fetchSavedRecipes();
//     }, []);

//     const fetchSavedRecipes = async () => {
//         try {
//             const response = await axios.get('http://localhost:8000/api/v1/saved-recipes', {
//                 withCredentials: true
//             });
//             setSavedRecipes(response.data.data);
//             setLoading(false);
//         } catch (error) {
//             console.error('Error fetching saved recipes:', error);
//             setError('Failed to load saved recipes. Please try again.');
//             setLoading(false);
//         }
//     };

//     if (loading) {
//         return <div className="text-center">Loading...</div>;
//     }

//     return (
//         <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
//             <div className="max-w-4xl mx-auto pt-10">
//                 <h1 className="text-3xl font-bold mb-6">Saved Recipes</h1>
//                 {error && <p className="text-red-500 mb-4">{error}</p>}
//                 {savedRecipes.map((savedRecipe) => (
//                     <div key={savedRecipe._id} className="mb-8 p-4 border rounded">
//                         <h2 className="text-xl font-semibold mb-2">Recipe from {savedRecipe.source}</h2>
//                         <RecipeDisplay recipe={savedRecipe.recipe} isDarkMode={isDarkMode} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default SavedRecipes;