import { useState } from 'react'
import FilterBar from '../components/features/FilterBar'
import CategoryTabs from '../components/features/CategoryTabs'
import PromptGrid from '../components/features/PromptGrid'
import { mockPrompts, mockCategories } from '../utils/index'

function Home() {
  const [prompts, setPrompts] = useState(mockPrompts)
  const [filteredPrompts, setFilteredPrompts] = useState(mockPrompts)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const handleSearch = (query) => {
    setIsLoading(true)
    setSearchQuery(query)
    
    // Simulate API request
    setTimeout(() => {
      const filtered = prompts.filter(prompt => 
        prompt.title.toLowerCase().includes(query.toLowerCase()) ||
        prompt.description.toLowerCase().includes(query.toLowerCase())
      )
      
      applyFilters(filtered, selectedCategory)
      setIsLoading(false)
    }, 500)
  }
  
  const handleCategorySelect = (category) => {
    setIsLoading(true)
    setSelectedCategory(category)
    
    // Simulate API request
    setTimeout(() => {
      let filtered = prompts
      
      if (searchQuery) {
        filtered = filtered.filter(prompt => 
          prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          prompt.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }
      
      applyFilters(filtered, category)
      setIsLoading(false)
    }, 300)
  }
  
  const handleSort = (sortOption) => {
    setIsLoading(true)
    
    // Simulate API request
    setTimeout(() => {
      let sorted = [...filteredPrompts]
      
      switch (sortOption) {
        case 'popularity':
          sorted.sort((a, b) => b.popularity - a.popularity)
          break
        case 'priceLow':
          sorted.sort((a, b) => a.price - b.price)
          break
        case 'priceHigh':
          sorted.sort((a, b) => b.price - a.price)
          break
        case 'newest':
          // Assuming newer items have higher IDs in mock data
          sorted.sort((a, b) => b.id.localeCompare(a.id))
          break
        default:
          break
      }
      
      setFilteredPrompts(sorted)
      setIsLoading(false)
    }, 300)
  }
  
  const applyFilters = (promptsToFilter, category) => {
    if (category) {
      const filtered = promptsToFilter.filter(prompt => prompt.category === category)
      setFilteredPrompts(filtered)
    } else {
      setFilteredPrompts(promptsToFilter)
    }
  }
  
  const handleBuy = (id) => {
    // In a real app, this would redirect to checkout or add to cart
    alert(`Adding prompt ${id} to cart!`)
  }
  
  const handleViewDetails = (id) => {
    // In a real app, this would navigate to the detail page
    alert(`Viewing details for prompt ${id}`)
  }
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">AI Prompt Marketplace</h1>
      
      <FilterBar 
        categories={mockCategories}
        onSearch={handleSearch}
        onCategorySelect={handleCategorySelect}
        onSort={handleSort}
      />
      
      <CategoryTabs 
        categories={mockCategories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      
      <PromptGrid 
        prompts={filteredPrompts}
        isLoading={isLoading}
        onBuy={handleBuy}
        onViewDetails={handleViewDetails}
      />
    </div>
  )
}

export default Home