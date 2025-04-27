// // import React from 'react';
// // import Header from './Header';
// // import Footer from './Footer';
// // import { Outlet } from 'react-router-dom';

// // function Layout({ isLoggedIn, setIsLoggedIn, isDarkMode }) {
// //   return (
// //     <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
// //       <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isDarkMode={isDarkMode} />
// //       <Outlet />
// //       <Footer isDarkMode={isDarkMode} />
// //     </div>
// //   );
// // }

// // export default Layout;


// import React from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import { Outlet } from 'react-router-dom';

// function Layout({ isDarkMode }) {
//   return (
//     <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
//       <Header isDarkMode={isDarkMode} />
//       <Outlet />
//       <Footer isDarkMode={isDarkMode} />
//     </div>
//   );
// }

// export default Layout;


import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout({ isDarkMode }) {
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Header isDarkMode={isDarkMode} />
      <div className="pt-16"> {/* Add padding-top to account for fixed header */}
        <Outlet />
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default Layout;