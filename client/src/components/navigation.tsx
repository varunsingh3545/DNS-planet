import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#ai-agents", label: "AI Agents" },
    { href: "#dashboard", label: "Dashboard" },
    { href: "#public-layer", label: "Public Layer" },
    { href: "#research", label: "Research" },
    { href: "#live-earth", label: "Live Earth" },
    { href: "#about", label: "About" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
<<<<<<< HEAD
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass-morphism-bright backdrop-blur-xl shadow-lg shadow-black/20' : 'bg-transparent'
=======
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-morphism backdrop-blur-xl' : 'bg-transparent'
>>>>>>> 5aa2486 (Rebuild the conservation platform with space-inspired UI/UX)
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <motion.div 
<<<<<<< HEAD
              className="flex items-center space-x-3 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[hsl(var(--eco-green))] to-[hsl(var(--neon-blue))] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[hsl(var(--eco-green))]/30 transition-all duration-300">
                  <Globe className="w-5 h-5 text-black animate-breathe" />
                </div>
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[hsl(var(--eco-green))] to-[hsl(var(--neon-blue))] opacity-20 group-hover:opacity-40 transition-opacity duration-300 animate-pulse"></div>
              </div>
              <span className="text-xl font-bold gradient-text text-glow-subtle">DNS Planet</span>
=======
              className="flex items-center space-x-2 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[hsl(var(--eco-green))] to-[hsl(var(--neon-blue))] flex items-center justify-center">
                <Globe className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold gradient-text">DNS Planet</span>
>>>>>>> 5aa2486 (Rebuild the conservation platform with space-inspired UI/UX)
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
<<<<<<< HEAD
                className="relative text-gray-300 hover:text-[hsl(var(--eco-green))] transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/5"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{item.label}</span>
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-[hsl(var(--eco-green))]/10 to-[hsl(var(--neon-blue))]/10 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
=======
                className="text-gray-300 hover:text-[hsl(var(--eco-green))] transition-colors duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
>>>>>>> 5aa2486 (Rebuild the conservation platform with space-inspired UI/UX)
              </motion.button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button 
              className="px-4 py-2 glass-morphism rounded-lg hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
            <motion.button 
              className="px-6 py-2 bg-gradient-to-r from-[hsl(var(--eco-green))] to-[hsl(var(--neon-blue))] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[hsl(var(--eco-green))]/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Invest Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-morphism border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-gray-300 hover:text-[hsl(var(--eco-green))] py-2 transition-colors duration-300"
                  whileHover={{ x: 10 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/10">
                <motion.button 
                  className="w-full px-4 py-2 glass-morphism rounded-lg text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  Login
                </motion.button>
                <motion.button 
                  className="w-full px-4 py-2 bg-gradient-to-r from-[hsl(var(--eco-green))] to-[hsl(var(--neon-blue))] text-black font-semibold rounded-lg text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  Invest Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
