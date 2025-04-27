

// import './App.css'
// import Home from './pages/Home'
// import Header from './components/Header'
// import Footer from './components/Footer'


// function App() {


//   return (
//     <ThemeProvider value={{ isDarkMode, toggleDarkMode }}>

//     </ThemeProvider>
//   )
// }

// export default App


import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from './context/theme'
import { useState } from 'react'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  return (
    <ThemeProvider value={{ isDarkMode, toggleDarkMode }}>
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <Header />
        <main className="flex-grow">
          <Home />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
