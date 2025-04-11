import Button from '../components/common/Button'

function PromptDetail() {
  // In a real app, you would fetch the prompt data based on URL params
  const prompt = {
    id: "prompt1",
    title: "Creative Story Generator",
    description: "This prompt helps generate creative short stories based on a few input parameters. Perfect for writers experiencing block or looking for new ideas.",
    category: "Writing",
    price: 4.99,
    popularity: 4.8,
    imageUrl: "https://via.placeholder.com/300x200",
    fullDescription: "This advanced prompt is designed to help writers overcome creative blocks by generating unique story ideas and plotlines. It works by analyzing patterns from thousands of successful short stories and novels, then creating new combinations that feel fresh and engaging. You can specify genre, tone, character types, and even plot elements you want to include or avoid."
  }
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        {prompt.imageUrl && (
          <div className="h-64 overflow-hidden">
            <img 
              src={prompt.imageUrl} 
              alt={prompt.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-2xl font-bold">{prompt.title}</h1>
            <span className="text-lg bg-blue-100 text-blue-800 px-3 py-1 rounded">
              ${prompt.price.toFixed(2)}
            </span>
          </div>
          
          <div className="mb-6">
            <span className="inline-block bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm mr-2">
              {prompt.category}
            </span>
            <span className="text-sm text-gray-600">
              ⭐ {prompt.popularity.toFixed(1)} rating
            </span>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {prompt.description}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              {prompt.fullDescription}
            </p>
          </div>
          
          <div className="flex justify-between items-center">
            <Button variant="outline" onClick={() => window.history.back()}>
              Back
            </Button>
            <Button onClick={() => alert(`Adding prompt ${prompt.id} to cart!`)}>
              Purchase Prompt
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromptDetail