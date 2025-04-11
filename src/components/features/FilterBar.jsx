import { useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'

function FilterBar({ categories, onSearch, onCategorySelect, onSort }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [sortOption, setSortOption] = useState('popularity')
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }
  
  const handleSearchSubmit = (e) => {
    e.preventDefault()
    onSearch(searchQuery)
  }
  
  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    onCategorySelect(category)
  }
  
  const handleSortChange = (e) => {
    setSortOption(e.target.value)
    onSort(e.target.value)
  }
  
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <form onSubmit={handleSearchSubmit} className="flex-1 mr-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search prompts..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pr-10"
            />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              🔍
            </button>
          </div>
        </form>
        
        {/* Mobile filter toggle */}
        <Button 
          variant="secondary"
          className="md:hidden"
          onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
        >
          Filters {isMobileFiltersOpen ? '▲' : '▼'}
        </Button>
        
        {/* Desktop filters */}
        <div className="hidden md:flex items-center space-x-4">
          <select 
            value={sortOption}
            onChange={handleSortChange}
            className="px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="popularity">Most Popular</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
      
      {/* Mobile filters - expanded */}
      {isMobileFiltersOpen && (
        <div className="md:hidden mb-4">
          <select 
            value={sortOption}
            onChange={handleSortChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
          >
            <option value="popularity">Most Popular</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      )}
    </div>
  )
}

export default FilterBar