import { useLocation } from "wouter";
import { useEffect } from "react";

const NotFound = () => {
  const [location] = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location
    );
  }, [location]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center glass-card p-8">
        <h1 className="text-6xl font-bold mb-4 text-accent">404</h1>
        <p className="text-xl text-foreground/80 mb-6">Oops! Page not found</p>
        <p className="text-foreground/60 mb-8">
          The page you're looking for doesn't exist in our digital ecosystem.
        </p>
        <a href="/" className="btn-primary inline-flex items-center">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
