import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { TreePine, Fish, Thermometer, Leaf, Microscope, GraduationCap } from "lucide-react";

const agentIcons = {
  wildlife: TreePine,
  marine: Fish,
  climate: Thermometer,
  forest: Leaf,
  research: Microscope,
  education: GraduationCap,
};

const agentColors = {
  wildlife: "eco-green",
  marine: "neon-blue",
  climate: "infrared-orange",
  forest: "eco-green",
  research: "neon-blue",
  education: "infrared-orange",
};

export function AIAgentsPanel() {
  const { data, isLoading } = useQuery({
    queryKey: ["/api/ai-agents"],
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  if (isLoading) {
    return (
      <section id="ai-agents" className="py-20 bg-gradient-to-b from-[hsl(var(--space-black))] to-[hsl(var(--space-dark))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 bg-gray-700 rounded animate-pulse mx-auto max-w-md mb-6" />
            <div className="h-6 bg-gray-700 rounded animate-pulse mx-auto max-w-2xl" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass-morphism rounded-2xl p-6 animate-pulse">
                <div className="h-24 bg-gray-700 rounded mb-4" />
                <div className="h-4 bg-gray-700 rounded mb-2" />
                <div className="h-16 bg-gray-700 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const agents = (data as any)?.agents || [];

  return (
    <section id="ai-agents" className="py-20 bg-gradient-to-b from-[hsl(var(--space-black))] to-[hsl(var(--space-dark))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">AI Neural Network</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Six specialized AI agents working in harmony to monitor, analyze, and protect our planet's ecosystems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent: any, index: number) => {
            const Icon = agentIcons[agent.id as keyof typeof agentIcons];
            const color = agentColors[agent.id as keyof typeof agentColors];
            
            return (
              <motion.div
                key={agent.id}
                className="group glass-morphism-bright rounded-2xl p-6 card-hover-effect cursor-pointer shimmer-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                  rotateY: 5
                }}
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-r from-[hsl(var(--${color}))] to-[hsl(var(--${color === 'eco-green' ? 'neon-blue' : color === 'neon-blue' ? 'infrared-orange' : 'eco-green'}))] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-black" />
                  </motion.div>
                  <h3 className={`text-2xl font-bold text-[hsl(var(--${color}))]`}>
                    {agent.name}
                  </h3>
                </div>

                <p className="text-gray-300 mb-4">
                  {agent.id === 'wildlife' && "Real-time species tracking, migration monitoring, and population analytics using computer vision and IoT sensors."}
                  {agent.id === 'marine' && "Ocean health monitoring, marine life tracking, and coral reef assessment through underwater sensor networks."}
                  {agent.id === 'climate' && "Weather pattern analysis, climate change modeling, and extreme event prediction using satellite imagery."}
                  {agent.id === 'forest' && "Deforestation detection, forest health assessment, and biodiversity mapping using hyperspectral imaging."}
                  {agent.id === 'research' && "Scientific literature analysis, research collaboration, and hypothesis generation from global conservation data."}
                  {agent.id === 'education' && "Personalized learning pathways, citizen science coordination, and conservation education content generation."}
                </p>
                
                {/* Data Preview */}
                <div className={`bg-[hsl(var(--space-dark))]/50 rounded-lg p-4 border border-[hsl(var(--${color}))]/20`}>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {agent.id === 'wildlife' && (
                      <>
                        <div>
                          <div className={`text-[hsl(var(--${color}))] font-semibold`}>
                            {agent.speciesDetected?.toLocaleString()}
                          </div>
                          <div className="text-gray-400">Species Tracked</div>
                        </div>
                        <div>
                          <div className={`text-[hsl(var(--${color}))] font-semibold`}>
                            {agent.activeCameras?.toLocaleString()}
                          </div>
                          <div className="text-gray-400">Active Cameras</div>
                        </div>
                      </>
                    )}
                    {agent.id === 'marine' && (
                      <>
                        <div>
                          <div className={`text-[hsl(var(--${color}))] font-semibold`}>
                            {(agent.oceanCoverage / 1000000).toFixed(1)}M km 82
                          </div>
                          <div className="text-gray-400">Ocean Coverage</div>
                        </div>
                        <div>
                          <div className={`text-[hsl(var(--${color}))] font-semibold`}>
                            {agent.marineSpecies?.toLocaleString()}
                          </div>
                          <div className="text-gray-400">Marine Species</div>
                        </div>
                      </>
                    )}
                    {agent.id === 'climate' && (
                      <>
                        <div>
                          <div className={`text-[hsl(var(--${color}))] font-semibold`}>
                            {agent.weatherStations?.toLocaleString()}
                          </div>
                          <div className="text-gray-400">Weather Stations</div>
                        </div>
                        <div>
                          <div className={`text-[hsl(var(--${color}))] font-semibold`}>
                            {agent.climateModels}
                          </div>
                          <div className="text-gray-400">Climate Models</div>
                        </div>
                      </>
                    )}
                    {agent.id === 'forest' && (
                      <>
                        <div>
                          <div className={`text-[hsl(var(--${color}))] font-semibold`}>
                            {(agent.forestCoverage / 1000000).toFixed(0)}M
                          </div>
                          <div className="text-gray-400">Hectares Monitored</div>
                        </div>
                        <div>
                          <div className={`text-[hsl(var(--${color}))] font-semibold`}>
                            {agent.deforestationAlerts}
                          </div>
                          <div className="text-gray-400">Active Alerts</div>
                        </div>
                      </>
                    )}
                    {agent.id === 'research' && (
                      <>
                        <div>
                          <div className={`text-[hsl(var(--${color}))] font-semibold`}>
                            {agent.researchPapers?.toLocaleString()}
                          </div>
                          <div className="text-gray-400">Papers Analyzed</div>
                        </div>
                        <div>
                          <div className={`text-[hsl(var(--${color}))] font-semibold`}>
                            {agent.collaborators?.toLocaleString()}
                          </div>
                          <div className="text-gray-400">Collaborators</div>
                        </div>
                      </>
                    )}
                    {agent.id === 'education' && (
                      <>
                        <div>
                          <div className={`text-[hsl(var(--${color}))] font-semibold`}>
                            {agent.studentsReached?.toLocaleString()}
                          </div>
                          <div className="text-gray-400">Students Reached</div>
                        </div>
                        <div>
                          <div className={`text-[hsl(var(--${color}))] font-semibold`}>
                            {agent.coursesAvailable}
                          </div>
                          <div className="text-gray-400">Courses Available</div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
