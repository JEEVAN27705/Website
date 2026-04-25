import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 mesh-bg opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center glass p-10 md:p-16 rounded-3xl card-shadow max-w-xl w-full"
      >
        {/* Big 404 */}
        <h1 className="text-6xl md:text-8xl font-extrabold gradient-text mb-4">
          404
        </h1>

        {/* Message */}
        <p className="text-xl md:text-2xl font-semibold mb-2">
          Page not found
        </p>
        <p className="text-muted-foreground mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild className="rounded-full px-6">
            <a href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </a>
          </Button>

          <Button
            variant="outline"
            className="rounded-full px-6"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
        
      </motion.div>
    </div>
  );
};

export default NotFound;