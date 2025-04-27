import React from 'react';
import { useTheme } from '../context/theme';

const FAQ = () => {
  const { isDarkMode } = useTheme();

  const faqs = [
    {
      question: "What is PantryChef?",
      answer: "PantryChef is a kitchen genie that transforms your basic ingredients into gourmet delights. No more dinner dilemmas, just delectable dishes!"
    },
    {
      question: "How does PantryChef work?",
      answer: "You simply input the ingredients you have at home, select the meal type, cooking time, skill level, and available utensils. PantryChef will then generate a recipe based on your inputs."
    },
    {
      question: "Is PantryChef free to use?",
      answer: "Yes, PantryChef is free to use. Enjoy creating delicious recipes with what you have at home!"
    },
    {
      question: "Can I save my recipes?",
      answer: "Currently, there is no option to save recipes directly within PantryChef. However, you can copy and save the recipes manually."
    },
    {
      question: "Who can use PantryChef?",
      answer: "Anyone who loves cooking or wants to try out new recipes with the ingredients they have at home can use PantryChef."
    },
  ];

  return (
    <div className={`min-h-screen font-sans ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-opacity-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-lg">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default FAQ;