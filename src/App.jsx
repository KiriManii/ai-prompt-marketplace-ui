import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import PromptDetail from './pages/PromptDetail'
import { useAppContext } from './store/index.jsx'

function App() {
  const { isDarkMode, toggleTheme } = useAppContext();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Header isDarkMode={isDarkMode} onThemeToggle={toggleTheme} />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prompt/:id" element={<PromptDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
