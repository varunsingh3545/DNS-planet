import { Navigation } from "@/components/navigation";
import { EarthGlobe } from "@/components/earth-globe";
import { AIAgentsPanel } from "@/components/ai-agents-panel";
import { Dashboard } from "@/components/dashboard";
import { PublicLayer } from "@/components/public-layer";
import { ResearchPortal } from "@/components/research-portal";
import { LiveEarth } from "@/components/live-earth";
import { AboutSection } from "@/components/about-section";
import { InvestorSection } from "@/components/investor-section";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Search, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--space-black))] text-white overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen hero-bg flex items-center justify-center relative overflow-hidden neural-pattern">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-10 left-10 w-3 h-3 bg-[hsl(var(--eco-green))] rounded-full data-node glow-eco"></div>
          <div className="absolute top-20 right-20 w-2 h-2 bg-[hsl(var(--neon-blue))] rounded-full data-node glow-neon" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-20 left-20 w-3 h-3 bg-[hsl(var(--infrared-orange))] rounded-full data-node glow-infrared" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[hsl(var(--eco-green))] rounded-full data-node glow-eco" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[hsl(var(--neon-blue))] rounded-full data-node glow-neon" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Enhanced gradient overlays */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[hsl(var(--eco-green))]/5 via-transparent to-[hsl(var(--neon-blue))]/5"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--space-black))_70%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="px-4 py-2 glass-morphism-bright rounded-full text-sm font-medium gradient-text-eco border border-[hsl(var(--eco-green))]/30">
                🌍 Planetary Intelligence System
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            >
              Digital <span className="gradient-text text-glow">Nervous System</span> of the Planet
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              AI-powered ecosystem monitoring at planetary scale. Real-time conservation insights from wildlife behavior to climate patterns using advanced neural networks.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection('#public-layer')}
                className="px-8 py-4 bg-gradient-to-r from-[hsl(var(--eco-green))] to-[hsl(var(--neon-blue))] text-black font-semibold rounded-lg shadow-2xl shimmer-border card-hover-effect relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center">
                  <Search className="mr-2" size={20} />
                  Explore Public Layer
                </span>
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('#research')}
                className="px-8 py-4 glass-morphism-bright border border-[hsl(var(--eco-green))]/50 text-[hsl(var(--eco-green))] font-semibold rounded-lg card-hover-effect glow-eco"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center">
                  <Globe className="mr-2" size={20} />
                  Enter Research Portal
                </span>
              </motion.button>
            </motion.div>

            {/* Stats preview */}
            <motion.div 
              className="mt-12 grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <div className="text-center glass-morphism rounded-lg p-4 card-hover-effect">
                <div className="text-2xl font-bold gradient-text-eco">247k+</div>
                <div className="text-sm text-gray-400">Species Monitored</div>
              </div>
              <div className="text-center glass-morphism rounded-lg p-4 card-hover-effect">
                <div className="text-2xl font-bold gradient-text-neon">15k+</div>
                <div className="text-sm text-gray-400">Active Sensors</div>
              </div>
              <div className="text-center glass-morphism rounded-lg p-4 card-hover-effect">
                <div className="text-2xl font-bold gradient-text-infrared">98.7%</div>
                <div className="text-sm text-gray-400">Accuracy Rate</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative h-96 lg:h-[500px]"
          >
            <EarthGlobe />
          </motion.div>
        </div>
      </section>

      {/* AI Agents Panel */}
      <AIAgentsPanel />

      {/* Real-Time Ecosystem Dashboard */}
      <Dashboard />

      {/* Public Layer Page */}
      <PublicLayer />

      {/* Private Research Layer */}
      <ResearchPortal />

      {/* Live Earth Visual Page */}
      <LiveEarth />

      {/* About + Vision Page */}
      <AboutSection />

      {/* Investor CTA Section */}
      <InvestorSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
