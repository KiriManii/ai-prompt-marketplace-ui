import { createContext, useContext, useState, useEffect } from 'react';
import { mockPrompts, mockCategories } from '../utils/index';

// Create context
const AppContext = createContext();

// Create provider component
export function AppProvider({ children }) {
  const [prompts, setPrompts] = useState([]);
  const [filteredPrompts, setFilteredPrompts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Fetch data (simulated)
  useEffect(() => {
    setIsLoading(true);
    try {
      // Simulate API request
      setTimeout(() => {
        setPrompts(mockPrompts);
        setFilteredPrompts(mockPrompts);
        setCategories(mockCategories);
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      setError('Failed to fetch prompts');
      setIsLoading(false);
    }
  }, []);

  const handleSearch = (query) => {
    setIsLoading(true);
    setSearchQuery(query);
    
    try {
      setTimeout(() => {
        const filtered = prompts.filter(prompt => 
          prompt.title.toLowerCase().includes(query.toLowerCase()) ||
          prompt.description.toLowerCase().includes(query.toLowerCase())
        );
        applyFilters(filtered, selectedCategory);
        setIsLoading(false);
      }, 500);
    } catch (err) {
      setError('Search failed');
      setIsLoading(false);
    }
  };
  
  const handleCategorySelect = (category) => {
    setIsLoading(true);
    setSelectedCategory(category);
    
    try {
      setTimeout(() => {
        let filtered = prompts;
        
        if (searchQuery) {
          filtered = filtered.filter(prompt => 
            prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prompt.description.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }
        
        applyFilters(filtered, category);
        setIsLoading(false);
      }, 300);
    } catch (err) {
      setError('Category filtering failed');
      setIsLoading(false);
    }
  };
  
  const handleSort = (sortOption) => {
    setIsLoading(true);
    
    try {
      setTimeout(() => {
        let sorted = [...filteredPrompts];
        
        switch (sortOption) {
          case 'popularity':
            sorted.sort((a, b) => b.popularity - a.popularity);
            break;
          case 'priceLow':
            sorted.sort((a, b) => a.price - b.price);
            break;
          case 'priceHigh':
            sorted.sort((a, b) => b.price - a.price);
            break;
          case 'newest':
            sorted.sort((a, b) => b.id.localeCompare(a.id));
            break;
          default:
            break;
        }
        
        setFilteredPrompts(sorted);
        setIsLoading(false);
      }, 300);
    } catch (err) {
      setError('Sorting failed');
      setIsLoading(false);
    }
  };
  
  const applyFilters = (promptsToFilter, category) => {
    if (category) {
      const filtered = promptsToFilter.filter(prompt => prompt.category === category);
      setFilteredPrompts(filtered);
    } else {
      setFilteredPrompts(promptsToFilter);
    }
  };

  const getPromptById = (id) => {
    return prompts.find(prompt => prompt.id === id);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <AppContext.Provider value={{
      prompts,
      filteredPrompts,
      categories,
      selectedCategory,
      searchQuery,
      isLoading,
      error,
      isDarkMode,
      handleSearch,
      handleCategorySelect,
      handleSort,
      getPromptById,
      toggleTheme
    }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to use the context
export function useAppContext() {
  return useContext(AppContext);
}
