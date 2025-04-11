import FilterBar from '../components/features/FilterBar'
import CategoryTabs from '../components/features/CategoryTabs'
import PromptGrid from '../components/features/PromptGrid'
import { useAppContext } from '../store/index.jsx'
import { useNavigate } from 'react-router-dom'

function Home() {
  const { 
    filteredPrompts, 
    categories, 
    selectedCategory, 
    isLoading, 
    error,
    handleSearch, 
    handleCategorySelect, 
    handleSort 
  } = useAppContext();
  
  const navigate = useNavigate();
  
  const handleBuy = (id) => {
    alert(`Adding prompt ${id} to cart!`);
  };
  
  const handleViewDetails = (id) => {
    navigate(`/prompt/${id}`);
  };
  
  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-red-600">{error}</p>
        <button 
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">AI Prompt Marketplace</h1>
      
      <FilterBar 
        onSearch={handleSearch}
        onSort={handleSort}
      />
      
      <CategoryTabs 
        categories={categories}
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