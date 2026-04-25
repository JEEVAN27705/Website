import { motion } from "framer-motion";
import { Hammer, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Indevelopment = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 mesh-bg opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center glass p-10 md:p-16 rounded-3xl card-shadow max-w-xl w-full"
      >
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent glow-shadow">
            <Hammer className="h-7 w-7 text-primary-foreground" />
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          🚧 Currently in Development
        </h1>

        <p className="text-muted-foreground mb-8">
          This project demo is being built. Check back soon for something awesome!
        </p>

        <Button
          variant="outline"
          className="rounded-full px-6"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go Back
        </Button>
      </motion.div>
    </div>
  );
};

export default Indevelopment;