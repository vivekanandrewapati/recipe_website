// import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// import Layout from './components/Layout.jsx';
// import Home from './pages/Home.jsx';
// import About from './pages/About.jsx';
// import Faq from './pages/Faq.jsx';
// import Moodbased from './pages/MoodBased.jsx';
// import Pantrychef from './pages/Pantrychef.jsx';
// import { ThemeProvider } from './context/theme.js';
// import Login from './pages/Login.jsx';
// import Register from './pages/Register.jsx';
// import UserProfile from './pages/Profile/UserProfile.jsx';
// import Details from './pages/Profile/Details.jsx';
// import Email from './pages/Profile/Email.jsx';
// import Password from './pages/Profile/Password.jsx';
// import SavedRecipe from './pages/SavedRecipe.jsx';



// const Main = () => {
//   const [isDarkMode, setDarkMode] = useState(false);
//   const themeMode = isDarkMode ? 'dark' : 'light';
//   const [isLoggedIn, setIsLoggedIn] = useState(false);


//   const toggleDarkMode = () => {
//     setDarkMode(!isDarkMode);
//   };

//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path='/' element={<Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isDarkMode={isDarkMode} />}>
//         <Route index element={<Home isDarkMode={isDarkMode} />} />
//         <Route path='about' element={<About isDarkMode={isDarkMode} />} />
//         <Route path='faq' element={<Faq isDarkMode={isDarkMode} />} />
//         <Route path='moodbased' element={<Moodbased isDarkMode={isDarkMode} />} />
//         <Route path='pantrychef' element={<Pantrychef isDarkMode={isDarkMode} />} />
//         <Route path='login' element={<Login setIsLoggedIn={setIsLoggedIn} isDarkMode={isDarkMode} />} />
//         <Route path='register' element={<Register isDarkMode={isDarkMode} />} />
//         <Route path='saved-recipes' element={<SavedRecipe isDarkMode={isDarkMode} />} />
//         <Route path='profile' element={<UserProfile isDarkMode={isDarkMode} />} >
//           <Route path='details' element={<Details isDarkMode={isDarkMode} />} />
//           <Route path='email' element={<Email isDarkMode={isDarkMode} />} />
//           <Route path='password' element={<Password isDarkMode={isDarkMode} />} />
//         </Route>
//       </Route>
//     )
//   );

//   return (
//     <ThemeProvider value={{ isDarkMode, toggleDarkMode }}>
//       <RouterProvider router={router} />
//     </ThemeProvider>
//   );
// };

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Main />
//   </StrictMode>
// );



import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Faq from './pages/Faq.jsx';
import Moodbased from './pages/MoodBased.jsx';
import Pantrychef from './pages/Pantrychef.jsx';
import { ThemeProvider } from './context/theme.js';

const Main = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const themeMode = isDarkMode ? 'dark' : 'light';

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout isDarkMode={isDarkMode} />}>
        <Route index element={<Home isDarkMode={isDarkMode} />} />
        <Route path='about' element={<About isDarkMode={isDarkMode} />} />
        <Route path='faq' element={<Faq isDarkMode={isDarkMode} />} />
        <Route path='moodbased' element={<Moodbased isDarkMode={isDarkMode} />} />
        <Route path='pantrychef' element={<Pantrychef isDarkMode={isDarkMode} />} />
      </Route>
    )
  );

  return (
    <ThemeProvider value={{ isDarkMode, toggleDarkMode }}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);