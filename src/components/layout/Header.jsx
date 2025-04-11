import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header({ isDarkMode, onThemeToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={`sticky top-0 z-10 shadow-sm ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold">AI Prompt Marketplace</Link>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <a href="#" className="hover:text-blue-500">Categories</a>
          <a href="#" className="hover:text-blue-500">About</a>
          <button 
            onClick={onThemeToggle}
            className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={onThemeToggle}
            className={`p-2 mr-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
          >
            ☰
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} py-2`}>
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <Link to="/" className="py-2 hover:text-blue-500">Home</Link>
            <a href="#" className="py-2 hover:text-blue-500">Categories</a>
            <a href="#" className="py-2 hover:text-blue-500">About</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header