export function Card({ children, className = "" }) {
    return (
      <div className={`p-6 bg-white shadow-lg rounded-2xl ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardContent({ children, className = "" }) {
    return <div className={`mt-4 ${className}`}>{children}</div>;
  }
  