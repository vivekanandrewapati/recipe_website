
// src/pages/Home.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ThemeContext } from '../context/theme';

const Home = () => {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <div className="container mx-auto px-4">
            <header className="p-4 flex justify-between items-center">

            </header>
            <main className="container mx-auto px-4">


                <section className="flex flex-col md:flex-row items-center justify-between mt-8 md:mt-0">
                    <div className="w-full md:w-1/2 space-y-4 text-center md:text-left mb-8 md:mb-0">
                        <h2 className="text-left text-xl md:text-2xl text-green-500">Meet ChefGPT 👋</h2>
                        <h1 className={`text-4xl md:text-5xl lg:text-7xl font-extrabold ${isDarkMode ? 'text-white' : 'text-black-500'}`}>
                            <span>Never Worry<br /></span>
                            About<br />
                            <span className="text-green-500">What's for <br />Dinner Again!</span>
                        </h1>
                        <p className={`text-base md:text-lg lg:text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-900'}`}>
                            Say goodbye to boring meals, with AI-powered recipe recommendations, meal plans creation and more... 650,000+ dinners saved so far.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="https://www.chefgpt.xyz/assets/images/Hero_App_Image.webp"
                            alt="Hero"
                            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
                        />
                    </div>
                </section>

                <div className="border-t border-gray-400 my-12"></div>

                <section className={`flex flex-col md:flex-row items-center justify-between py-12 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
                    <div className="md:w-1/2 relative">
                        <img
                            src="https://www.chefgpt.xyz/assets/images/Feature%20PantryChef.webp"
                            alt="PantryChef Feature"
                            className="w-full max-w-md mx-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-emerald-500 opacity-50 rounded-full blur-3xl -z-10"></div>
                    </div>
                    <div className="md:w-1/2 p-8">
                        <div className="flex items-center mb-4">
                            <div className="bg-emerald-600 p-2 rounded-lg mr-4">
                                <img src="/path-to-your-icon.svg" alt="PantryChef icon" className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-semibold">PantryChef</h3>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Discover the power of cooking with what you already have with PantryChef.
                            Simply input the ingredients in your pantry and let our app generate a delicious recipe for you.
                        </p>
                        <p className="text-gray-400 mb-6">
                            Say goodbye to wasted food and money. Start cooking smarter with PantryChef today!
                        </p>
                        <Link to="/pantrychef" className="bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 flex items-center">
                            Discover PantryChef
                            <ArrowRight className="ml-2" size={20} />
                        </Link>
                    </div>
                </section>

                <div className="border-t border-gray-400 my-12"></div>

                <section className={`flex flex-col md:flex-row items-center justify-between py-12 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
                    <div className="md:w-1/2 p-8">
                        <div className="flex items-center mb-4">
                            <div className="bg-emerald-600 p-2 rounded-lg mr-4">
                                <img src="/path-to-your-icon.svg" alt="Icon" className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-semibold">Mood Based</h3>
                        </div>
                        <p className={`text-gray-400 mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-900'}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
                        </p>
                        <Link to="/moodbased" className="bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 flex items-center">
                            Discover Moodbased
                            <ArrowRight className="ml-2" size={20} />
                        </Link>
                    </div>
                    <div className="md:w-1/2 relative">
                        <img
                            src="https://www.chefgpt.xyz/assets/images/Feature%20MasterChef.webp"
                            alt="Feature Image"
                            className="w-full max-w-md mx-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-emerald-500 opacity-50 rounded-full blur-3xl -z-10"></div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;



