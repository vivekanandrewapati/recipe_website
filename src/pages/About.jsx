import React from 'react';
import { useTheme } from '../context/theme';

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen font-sans ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <main className="container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-green-500">ChefGPT</span>
            </h1>
            <p className={`text-lg md:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Your AI-Powered Kitchen Assistant
            </p>
          </section>

          {/* Main Content Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Mission Section */}
            <div className={`${isDarkMode
                ? 'bg-gray-800 border-gray-700'
                : 'bg-white border-gray-100'
              } p-6 md:p-8 rounded-xl shadow-lg border transition-all duration-200 hover:shadow-xl`}>
              <h2 className={`text-2xl md:text-3xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                Our Mission
              </h2>
              <p className={`text-base md:text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                ChefGPT aims to revolutionize how people approach cooking by leveraging
                AI technology to provide personalized recipe recommendations and
                cooking assistance. We believe everyone can be a great cook with
                the right guidance.
              </p>
            </div>

            {/* Features Section */}
            <div className={`${isDarkMode
                ? 'bg-gray-800 border-gray-700'
                : 'bg-white border-gray-100'
              } p-6 md:p-8 rounded-xl shadow-lg border transition-all duration-200 hover:shadow-xl`}>
              <h2 className={`text-2xl md:text-3xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                What We Offer
              </h2>
              <ul className="space-y-4">
                {[
                  'AI-powered recipe recommendations',
                  'Mood-based recipe suggestions',
                  'Ingredient-based recipe finder',
                  'Dietary restriction considerations'
                ].map((feature, index) => (
                  <li key={index} className={`flex items-center text-base md:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                    <span className="text-green-500 mr-3">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Contact Section */}
          <section className={`${isDarkMode
              ? 'bg-gray-800 border-gray-700'
              : 'bg-white border-gray-100'
            } p-6 md:p-8 rounded-xl shadow-lg border transition-all duration-200 hover:shadow-xl text-center mb-12`}>
            <h2 className={`text-2xl md:text-3xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
              Contact Us
            </h2>
            <p className={`text-base md:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Have questions or suggestions? Reach out to us at{" "}
              <a
                href="mailto:contact@chefgpt.com"
                className="text-green-500 hover:text-green-600 font-medium transition-colors"
              >
                contact@chefgpt.com
              </a>
            </p>
          </section>

          {/* Footer */}
          <footer className="text-center py-8">
            <p className={`text-sm md:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
              ChefGPT © 2024. All rights reserved.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default About;