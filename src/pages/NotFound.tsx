
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-smallai-black">
      <div className="text-center px-4">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-smallai-purple bg-smallai-purple bg-opacity-10 text-sm font-medium text-smallai-purple">
          404 Error
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Page Not Found</h1>
        <p className="text-xl text-gray-400 mb-8 max-w-xl mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Button 
          className="bg-smallai-purple hover:bg-smallai-purple-dark text-white rounded-full px-6 button-glow"
          asChild
        >
          <a href="/">
            <ArrowLeft className="mr-2 h-5 w-5" /> Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
