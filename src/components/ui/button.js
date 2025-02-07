export function Button({ children, onClick, className = "" }) {
    return (
      <button
        className={`px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  