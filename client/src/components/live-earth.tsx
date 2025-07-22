import { useState } from "react";
import { motion } from "framer-motion";
import { ZoomIn, ZoomOut, RotateCcw, Satellite, Thermometer, Cloud, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function LiveEarth() {
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);
  const [activeLayer, setActiveLayer] = useState("satellite");

  const hotspots = [
    {
      id: "amazon",
      top: "40%",
      left: "25%",
      color: "eco-green",
      title: "Amazon Basin",
      description: "Real-time deforestation monitoring and biodiversity tracking in the world's largest rainforest.",
      stats: { forestCover: "94.7%", species: "2,341" }
    },
    {
      id: "reef",
      top: "55%",
      right: "20%",
      color: "neon-blue",
      title: "Great Barrier Reef",
      description: "Coral health monitoring and marine life tracking in Australia's iconic reef system.",
      stats: { coralHealth: "72%", marineSpecies: "1,847" }
    },
    {
      id: "arctic",
      top: "15%",
      left: "50%",
      color: "infrared-orange",
      title: "Arctic Circle",
      description: "Ice sheet monitoring and polar wildlife tracking in Earth's most climate-sensitive region.",
      stats: { temperature: "-2.1°C", iceCoverage: "89.2%" }
    },
    {
      id: "serengeti",
      bottom: "30%",
      right: "35%",
      color: "eco-green",
      title: "Serengeti Plains",
      description: "Wildlife migration patterns and ecosystem health in Africa's most famous savanna.",
      stats: { animalsTracked: "147K", activeTags: "847" }
    },
    {
      id: "madagascar",
      bottom: "25%",
      right: "25%",
      color: "neon-blue",
      title: "Madagascar",
      description: "Unique species conservation and forest protection programs.",
      stats: { endemicSpecies: "12K", protectedArea: "85%" }
    },
    {
      id: "pacific",
      top: "35%",
      left: "15%",
      color: "neon-blue",
      title: "Pacific Ocean",
      description: "Marine sanctuary monitoring and whale migration tracking.",
      stats: { sanctuaryArea: "2.3M km²", whalesTracked: "450" }
    }
  ];

  const layerControls = [
    { id: "satellite", icon: Satellite, label: "Satellite View", color: "eco-green" },
    { id: "temperature", icon: Thermometer, label: "Temperature", color: "infrared-orange" },
    { id: "weather", icon: Cloud, label: "Weather", color: "neon-blue" },
    { id: "wildlife", icon: TreePine, label: "Wildlife", color: "eco-green" }
  ];

  return (
    <section id="live-earth" className="py-20 bg-[hsl(var(--space-black))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Live Earth Visualization</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time 3D visualization of Earth with live data overlays from our global sensor network
          </p>
        </motion.div>

        {/* Earth Visualization Interface */}
        <motion.div 
          className="glass-morphism rounded-2xl p-6 mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <h3 className="text-2xl font-bold gradient-text mb-4 lg:mb-0">Interactive Earth Model</h3>
            
            {/* Control Panel */}
            <div className="flex flex-wrap gap-4">
              {layerControls.map((control) => {
                const Icon = control.icon;
                const isActive = activeLayer === control.id;
                return (
                  <Button
                    key={control.id}
                    onClick={() => setActiveLayer(control.id)}
                    variant={isActive ? "default" : "outline"}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? `bg-[hsl(var(--${control.color}))]/20 text-[hsl(var(--${control.color}))] border-[hsl(var(--${control.color}))]/30` 
                        : 'glass-morphism border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="mr-2" size={16} />
                    {control.label}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Large Earth Visualization Area */}
          <div className="relative">
            <div className="h-96 lg:h-[600px] bg-gradient-to-b from-blue-900/20 to-[hsl(var(--space-black))] rounded-xl border border-[hsl(var(--eco-green))]/20 overflow-hidden">
              
              {/* Enhanced Earth Globe */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  
                  {/* Main Earth sphere */}
                  <motion.div 
                    className="w-full h-full rounded-full earth-glow animate-rotate-slow relative overflow-hidden" 
                    style={{
                      background: "radial-gradient(circle at 30% 30%, #4A90E2 0%, #2E5984 25%, #1E3A5F 50%, #0F1B2C 75%, #000814 100%)",
                      boxShadow: "inset -30px -30px 80px rgba(0,0,0,0.8), 0 0 150px rgba(0, 255, 136, 0.3)"
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    
                    {/* Enhanced continent overlays */}
                    <div className="absolute inset-0 opacity-90">
                      {/* North America */}
                      <div 
                        className="absolute top-16 left-12 w-24 h-20 bg-[hsl(var(--eco-green))]/40 rounded-full transform rotate-12" 
                        style={{ clipPath: "polygon(20% 0%, 80% 10%, 90% 80%, 10% 90%)" }}
                      />
                      {/* South America */}
                      <div 
                        className="absolute top-44 left-20 w-16 h-32 bg-[hsl(var(--eco-green))]/40 rounded-full transform rotate-15" 
                        style={{ clipPath: "polygon(30% 0%, 70% 0%, 80% 100%, 20% 100%)" }}
                      />
                      {/* Africa */}
                      <div 
                        className="absolute top-24 left-1/2 w-20 h-36 bg-[hsl(var(--eco-green))]/40 rounded-full transform -rotate-12" 
                        style={{ clipPath: "polygon(40% 0%, 60% 0%, 90% 70%, 70% 100%, 30% 100%, 10% 70%)" }}
                      />
                      {/* Europe */}
                      <div className="absolute top-12 left-1/2 w-16 h-12 bg-[hsl(var(--eco-green))]/40 rounded-full transform rotate-20" />
                      {/* Asia */}
                      <div 
                        className="absolute top-8 right-16 w-32 h-24 bg-[hsl(var(--eco-green))]/40 rounded-full transform rotate-45" 
                        style={{ clipPath: "polygon(0% 20%, 100% 0%, 100% 80%, 20% 100%)" }}
                      />
                      {/* Australia */}
                      <div className="absolute bottom-20 right-24 w-12 h-8 bg-[hsl(var(--eco-green))]/40 rounded-full transform rotate-30" />
                    </div>

                    {/* Enhanced data nodes with different types */}
                    {hotspots.map((hotspot, index) => (
                      <motion.div
                        key={hotspot.id}
                        className={`absolute w-4 h-4 bg-[hsl(var(--${hotspot.color}))] rounded-full data-node border-2 border-white/50 cursor-pointer z-10`}
                        style={{
                          top: hotspot.top,
                          left: hotspot.left,
                          right: hotspot.right,
                          bottom: hotspot.bottom,
                          animationDelay: `${index * 0.5}s`
                        }}
                        onClick={() => setSelectedHotspot(selectedHotspot === hotspot.id ? null : hotspot.id)}
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 1.2 }}
                      />
                    ))}
                    
                    {/* Orbital rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-[hsl(var(--eco-green))]/20 glow-eco animate-pulse" />
                    <div className="absolute inset-2 rounded-full border border-[hsl(var(--neon-blue))]/20 animate-pulse" style={{ animationDelay: '1s' }} />
                  </motion.div>
                </div>
              </div>

              {/* Interactive overlay controls */}
              <div className="absolute top-4 left-4 space-y-2">
                <Button size="sm" variant="outline" className="glass-morphism p-3 rounded-lg hover:bg-white/20 transition-all duration-300">
                  <ZoomIn className="text-[hsl(var(--eco-green))]" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="glass-morphism p-3 rounded-lg hover:bg-white/20 transition-all duration-300">
                  <ZoomOut className="text-[hsl(var(--eco-green))]" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="glass-morphism p-3 rounded-lg hover:bg-white/20 transition-all duration-300">
                  <RotateCcw className="text-[hsl(var(--eco-green))]" size={16} />
                </Button>
              </div>

              {/* Layer toggles */}
              <div className="absolute top-4 right-4 space-y-2">
                <div className="glass-morphism p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-[hsl(var(--eco-green))] rounded-full" />
                    <span className="text-sm text-white">Wildlife</span>
                    <input type="checkbox" defaultChecked className="ml-2" />
                  </div>
                </div>
                <div className="glass-morphism p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-[hsl(var(--neon-blue))] rounded-full" />
                    <span className="text-sm text-white">Climate</span>
                    <input type="checkbox" defaultChecked className="ml-2" />
                  </div>
                </div>
                <div className="glass-morphism p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-[hsl(var(--infrared-orange))] rounded-full" />
                    <span className="text-sm text-white">Threats</span>
                    <input type="checkbox" className="ml-2" />
                  </div>
                </div>
              </div>

              {/* Hotspot info panel */}
              {selectedHotspot && (
                <motion.div 
                  className="absolute bottom-6 right-6 glass-morphism rounded-lg p-4 max-w-xs"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  {(() => {
                    const hotspot = hotspots.find(h => h.id === selectedHotspot);
                    if (!hotspot) return null;
                    return (
                      <>
                        <h4 className={`font-semibold text-[hsl(var(--${hotspot.color}))] mb-2`}>
                          {hotspot.title}
                        </h4>
                        <p className="text-sm text-gray-300 mb-3">{hotspot.description}</p>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          {Object.entries(hotspot.stats).map(([key, value]) => (
                            <div key={key}>
                              <div className={`text-[hsl(var(--${hotspot.color}))] font-semibold`}>{value}</div>
                              <div className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                            </div>
                          ))}
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              )}

              {/* Status bar */}
              <div className="absolute bottom-4 left-4 right-4 glass-morphism rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[hsl(var(--eco-green))] rounded-full mr-2 animate-pulse" />
                      <span className="text-sm text-white">Live Data Stream</span>
                    </div>
                    <div className="text-sm text-gray-300">Last Update: 2 seconds ago</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-300">Lat: 40.7128°</span>
                    <span className="text-sm text-gray-300">Lng: -74.0060°</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Clickable Hotspots Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotspots.map((hotspot, index) => (
            <motion.div
              key={hotspot.id}
              className="glass-morphism rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedHotspot(selectedHotspot === hotspot.id ? null : hotspot.id)}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-[hsl(var(--${hotspot.color}))]/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-[hsl(var(--${hotspot.color}))]/30 transition-all duration-300`}>
                  <div className={`w-3 h-3 bg-[hsl(var(--${hotspot.color}))] rounded-full animate-pulse`} />
                </div>
                <h4 className={`text-lg font-bold text-[hsl(var(--${hotspot.color}))]`}>{hotspot.title}</h4>
              </div>
              <p className="text-sm text-gray-300 mb-3">{hotspot.description}</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {Object.entries(hotspot.stats).map(([key, value]) => (
                  <div key={key}>
                    <div className={`text-[hsl(var(--${hotspot.color}))] font-semibold`}>{value}</div>
                    <div className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
