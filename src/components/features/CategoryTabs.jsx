function CategoryTabs({ categories, selectedCategory, onSelectCategory }) {
    return (
      <div className="mb-6 overflow-x-auto">
        <div className="flex space-x-2 pb-2">
          <button
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              selectedCategory === '' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => onSelectCategory('')}
          >
            All
          </button>
          
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    )
  }
  
  export default CategoryTabs