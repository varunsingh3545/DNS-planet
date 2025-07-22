import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function EarthGlobe() {
  const globeRef = useRef<HTMLDivElement>(null);

  const dataNodes = [
    { top: "20%", left: "20%", color: "eco-green", delay: 0 },
    { top: "32%", right: "24%", color: "neon-blue", delay: 1 },
    { bottom: "24%", left: "32%", color: "infrared-orange", delay: 0.5 },
    { top: "48%", left: "48%", color: "eco-green", delay: 1.5 },
    { bottom: "32%", right: "20%", color: "neon-blue", delay: 2 },
    { top: "36%", right: "33%", color: "infrared-orange", delay: 1.2 },
  ];

  const floatingCards = [
    { 
      position: { top: "-2rem", right: "-2rem" },
      delay: 0,
      title: "2.3M Species",
      subtitle: "Monitored",
      trend: "↑ 12% this month",
      color: "eco-green"
    },
    { 
      position: { bottom: "-2rem", left: "-2rem" },
      delay: 1,
      title: "847 Alerts",
      subtitle: "Active",
      trend: "↑ 3 today",
      color: "infrared-orange"
    },
    { 
      position: { top: "50%", right: "-4rem" },
      delay: 2,
      title: "15.2°C",
      subtitle: "Global Temp",
      trend: "↑ 0.1°C",
      color: "neon-blue"
    }
  ];

  return (
    <motion.div 
      className="flex justify-center lg:justify-end relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="relative">
        {/* Main Earth Globe */}
        <motion.div
          ref={globeRef}
          className="w-80 h-80 sm:w-96 sm:h-96 rounded-full earth-glow animate-rotate-slow relative overflow-hidden"
          style={{
            background: "radial-gradient(circle at 30% 30%, #4A90E2 0%, #2E5984 25%, #1E3A5F 50%, #0F1B2C 75%, #000814 100%)"
          }}
        >
          {/* Continent overlays */}
          <div className="absolute inset-0 opacity-80">
            {/* North America */}
            <div 
              className="absolute top-16 left-12 w-20 h-16 bg-[hsl(var(--eco-green))]/30 rounded-full transform rotate-12"
              style={{
                clipPath: "polygon(20% 0%, 80% 10%, 90% 80%, 10% 90%)"
              }}
            />
            {/* South America */}
            <div 
              className="absolute top-40 left-16 w-12 h-24 bg-[hsl(var(--eco-green))]/30 rounded-full transform rotate-12"
              style={{
                clipPath: "polygon(30% 0%, 70% 0%, 80% 100%, 20% 100%)"
              }}
            />
            {/* Africa */}
            <div 
              className="absolute top-20 left-1/2 w-16 h-28 bg-[hsl(var(--eco-green))]/30 rounded-full transform -rotate-12"
              style={{
                clipPath: "polygon(40% 0%, 60% 0%, 90% 70%, 70% 100%, 30% 100%, 10% 70%)"
              }}
            />
            {/* Asia */}
            <div 
              className="absolute top-12 right-16 w-24 h-20 bg-[hsl(var(--eco-green))]/30 rounded-full transform rotate-45"
              style={{
                clipPath: "polygon(0% 20%, 100% 0%, 100% 80%, 20% 100%)"
              }}
            />
            {/* Australia */}
            <div className="absolute bottom-20 right-24 w-12 h-8 bg-[hsl(var(--eco-green))]/30 rounded-full transform rotate-30" />
          </div>

          {/* Data Nodes */}
          {dataNodes.map((node, index) => (
            <motion.div
              key={index}
              className={`absolute w-3 h-3 rounded-full data-node border-2 border-white/50`}
              style={{
                ...node,
                backgroundColor: `hsl(var(--${node.color}))`,
                animationDelay: `${node.delay}s`
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + node.delay, duration: 0.5 }}
            />
          ))}

          {/* Glowing rings */}
          <div className="absolute inset-0 rounded-full border-2 border-[hsl(var(--eco-green))]/30 glow-eco animate-pulse" />
          <div className="absolute inset-2 rounded-full border border-[hsl(var(--neon-blue))]/20 animate-pulse" 
               style={{ animationDelay: "1s" }} />
        </motion.div>

        {/* Floating data cards */}
        {floatingCards.map((card, index) => (
          <motion.div
            key={index}
<<<<<<< HEAD
            className="absolute glass-morphism rounded-lg p-3 cursor-pointer hover:bg-white/20 transition-all duration-300 animate-float"
            style={{ 
              ...card.position,
              animationDelay: `${card.delay}s`
            }}
=======
            className="absolute glass-morphism rounded-lg p-3 cursor-pointer hover:bg-white/20 transition-all duration-300"
            style={card.position}
>>>>>>> 5aa2486 (Rebuild the conservation platform with space-inspired UI/UX)
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                delay: 1.5 + card.delay,
                duration: 0.5
              }
            }}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              boxShadow: `0 10px 30px hsla(var(--${card.color}), 0.3)`
            }}
<<<<<<< HEAD
=======
            className={`animate-float ${index === 0 ? '' : index === 1 ? 'animation-delay-1000' : 'animation-delay-2000'}`}
>>>>>>> 5aa2486 (Rebuild the conservation platform with space-inspired UI/UX)
          >
            <div className={`text-[hsl(var(--${card.color}))] text-sm font-semibold`}>
              {card.title}
            </div>
            <div className="text-xs text-gray-300">{card.subtitle}</div>
            <div className={`text-xs text-[hsl(var(--${card.color}))] mt-1`}>
              {card.trend}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
