import { useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Header isDarkMode={isDarkMode} onThemeToggle={toggleTheme} />
      <main className="container mx-auto px-4 py-8">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
