// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { Ghost } from 'lucide-react'; // Assuming Ghost is imported from lucide-react
// import { ThemeContext } from '../context/theme';


// const Footer = () => {

//   const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
//   return (
//     <footer
//       className={`py-8 mt-12 ${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-900'}`}
//     >
//       <div className="container mx-auto px-4 text-center ">
//         <div className="mb-4">
//           <Ghost className="text-green-400 mx-auto mb-2" size={48} />
//           <h1 className="text-xl font-bold text-white">ChefGPT</h1>
//         </div>
//         <p className="text-lg mb-4">Your AI Powered Digital Chef</p>
//         <p className="text-sm mb-4">2024 ChefGPT. All Rights Reserved.</p>
//         <div className="text-sm mx-3 flex justify-center items-center">
//           <Link to="/about" className="hover:text-green-400">
//             About Us
//           </Link>
//           <span className="mx-2 text-gray-400">|</span>
//           <Link to="/faq" className="hover:text-green-400">
//             FAQ
//           </Link>
//           <span className="mx-2 text-gray-400">|</span>
//           <a
//             href="mailto:contact@chefgpt.xyz"
//             className="hover:text-green-400"
//           >
//             Contact
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import { Link } from 'react-router-dom';
import { Ghost } from 'lucide-react';
import { useTheme } from '../context/theme';

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer
      className={`py-8 mt-12 ${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <Ghost className="text-green-400 mx-auto mb-2" size={48} />
          <h1 className="text-xl font-bold text-white">ChefGPT</h1>
        </div>
        <p className="text-lg mb-4">Your AI Powered Digital Chef</p>
        <p className="text-sm mb-4">2024 ChefGPT. All Rights Reserved.</p>
        <div className="text-sm flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
          <Link to="/about" className="hover:text-green-400">
            About Us
          </Link>
          <span className="hidden md:inline text-gray-400">|</span>
          <Link to="/faq" className="hover:text-green-400">
            FAQ
          </Link>
          <span className="hidden md:inline text-gray-400">|</span>
          <a
            href="mailto:contact@chefgpt.xyz"
            className="hover:text-green-400"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;