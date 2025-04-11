import Button from '../common/Button'

function PromptCard({ prompt, onBuy, onViewDetails }) {
  const { id, title, description, price, category, popularity, imageUrl } = prompt
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {imageUrl && (
        <div className="h-40 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold truncate">{title}</h3>
          <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
            ${price.toFixed(2)}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
          {description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {category} • ⭐ {popularity.toFixed(1)}
          </span>
          
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              onClick={() => onViewDetails(id)}
              className="text-sm py-1 px-2"
            >
              Details
            </Button>
            <Button 
              onClick={() => onBuy(id)}
              className="text-sm py-1 px-2"
            >
              Buy
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromptCard