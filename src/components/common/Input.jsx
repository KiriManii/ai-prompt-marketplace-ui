function Input({ label, id, className = '', ...props }) {
    return (
      <div className="mb-4">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium mb-1">
            {label}
          </label>
        )}
        <input
          id={id}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
          {...props}
        />
      </div>
    )
  }
  
  export default Input