function Button({ children, onClick, variant = 'primary', className = '', ...props }) {
    const baseClasses = "px-4 py-2 rounded font-medium transition-colors"
    
    const variantClasses = {
      primary: "bg-blue-600 hover:bg-blue-700 text-white",
      secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
      outline: "border border-blue-600 text-blue-600 hover:bg-blue-50"
    }
    
    return (
      <button 
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    )
  }
  
  export default Button