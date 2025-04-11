import PromptCard from './PromptCard'

function PromptGrid({ prompts, isLoading, onBuy, onViewDetails }) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-gray-200 rounded-lg h-64 animate-pulse"></div>
        ))}
      </div>
    )
  }
  
  if (prompts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-600">No prompts found. Try adjusting your filters.</p>
      </div>
    )
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {prompts.map(prompt => (
        <PromptCard 
          key={prompt.id}
          prompt={prompt}
          onBuy={onBuy}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  )
}

export default PromptGrid