function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">AI Prompt Marketplace</h3>
              <p className="text-sm text-gray-400">Find and share the best AI prompts</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} AI Prompt Marketplace. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer