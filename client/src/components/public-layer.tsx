import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Search, Users, GraduationCap, Briefcase, AlertTriangle, TreePine, Fish, Thermometer, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function PublicLayer() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const { data: alertsData } = useQuery({
    queryKey: ["/api/alerts"],
    refetchInterval: 30000,
  });

  const { data: projectsData } = useQuery({
    queryKey: ["/api/projects"],
  });

  const alerts = alertsData?.alerts || [];
  const projects = projectsData?.projects || [];

  // Group alerts by type for the control center
  const alertsByType = alerts.reduce((acc, alert) => {
    acc[alert.type] = (acc[alert.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <section id="public-layer" className="py-20 bg-gradient-to-b from-[hsl(var(--space-dark))] to-[hsl(var(--space-black))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Public Conservation Layer</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Access open conservation data, participate in citizen science, and join our global conservation community
          </p>
          
          {/* Search Bar */}
          <motion.div 
            className="max-w-2xl mx-auto relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search Conservation Insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-32 py-4 bg-[hsl(var(--space-dark))]/80 border border-[hsl(var(--eco-green))]/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-[hsl(var(--eco-green))] focus:ring-2 focus:ring-[hsl(var(--eco-green))]/20 transition-all duration-300"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[hsl(var(--eco-green))] to-[hsl(var(--neon-blue))] text-black px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                <Search size={16} className="mr-2" />
                Search
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Public Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Citizen Science */}
          <motion.div
            className="glass-morphism rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[hsl(var(--eco-green))] to-[hsl(var(--neon-blue))] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold gradient-text">Citizen Science</h3>
            </div>
            
            <p className="text-gray-300 mb-6">Join millions of volunteers contributing to conservation research through data collection and species observations.</p>
            
            <div className="space-y-4">
              {projects.filter(p => p.type === 'wildlife').slice(0, 2).map((project) => (
                <div key={project.id} className="bg-[hsl(var(--space-dark))]/50 rounded-lg p-4 border border-[hsl(var(--eco-green))]/20">
                  <h4 className="font-semibold text-[hsl(var(--eco-green))] mb-2">{project.name}</h4>
                  <p className="text-sm text-gray-300">{project.description}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs bg-[hsl(var(--eco-green))]/20 text-[hsl(var(--eco-green))] px-2 py-1 rounded">Active</span>
                    <span className="text-xs text-gray-400 ml-2">{project.participants} participants</span>
                  </div>
                </div>
              ))}
              
              <div className="bg-[hsl(var(--space-dark))]/50 rounded-lg p-4 border border-[hsl(var(--neon-blue))]/20">
                <h4 className="font-semibold text-[hsl(var(--neon-blue))] mb-2">Ocean Plastic Monitoring</h4>
                <p className="text-sm text-gray-300">Report plastic pollution observations</p>
                <div className="flex items-center mt-2">
                  <span className="text-xs bg-[hsl(var(--neon-blue))]/20 text-[hsl(var(--neon-blue))] px-2 py-1 rounded">Recruiting</span>
                  <span className="text-xs text-gray-400 ml-2">847 participants</span>
                </div>
              </div>
            </div>
            
            <Button className="mt-6 w-full py-3 bg-gradient-to-r from-[hsl(var(--eco-green))] to-[hsl(var(--neon-blue))] text-black font-semibold rounded-xl hover:shadow-lg transition-all duration-300">
              Join Projects
            </Button>
          </motion.div>

          {/* Education Hub */}
          <motion.div
            className="glass-morphism rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold gradient-text">Education Hub</h3>
            </div>
            
            <p className="text-gray-300 mb-6">Access comprehensive conservation education, from beginner courses to advanced research methodologies.</p>
            
            <div className="space-y-4">
              <div className="bg-[hsl(var(--space-dark))]/50 rounded-lg p-4 border border-yellow-500/20">
                <h4 className="font-semibold text-yellow-500 mb-2">Conservation 101</h4>
                <p className="text-sm text-gray-300">Introduction to biodiversity and ecosystem protection</p>
                <div className="flex items-center mt-2">
                  <span className="text-xs bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded">Free</span>
                  <span className="text-xs text-gray-400 ml-2">15,247 enrolled</span>
                </div>
              </div>
              
              <div className="bg-[hsl(var(--space-dark))]/50 rounded-lg p-4 border border-orange-500/20">
                <h4 className="font-semibold text-orange-500 mb-2">Marine Biology Fundamentals</h4>
                <p className="text-sm text-gray-300">Ocean ecosystems and marine conservation</p>
                <div className="flex items-center mt-2">
                  <span className="text-xs bg-orange-500/20 text-orange-500 px-2 py-1 rounded">Premium</span>
                  <span className="text-xs text-gray-400 ml-2">3,892 enrolled</span>
                </div>
              </div>
            </div>
            
            <Button variant="outline" className="mt-6 w-full py-3 border border-yellow-500/30 text-yellow-500 font-semibold rounded-xl hover:bg-yellow-500/10 transition-all duration-300">
              Browse Courses
            </Button>
          </motion.div>

          {/* Career Portal */}
          <motion.div
            className="glass-morphism rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold gradient-text">Career Portal</h3>
            </div>
            
            <p className="text-gray-300 mb-6">Find internships, research positions, and career opportunities in conservation and environmental science.</p>
            
            <div className="space-y-4">
              <div className="bg-[hsl(var(--space-dark))]/50 rounded-lg p-4 border border-purple-500/20">
                <h4 className="font-semibold text-purple-500 mb-2">Research Internship</h4>
                <p className="text-sm text-gray-300">Stanford Marine Lab - Summer 2024</p>
                <div className="flex items-center mt-2">
                  <span className="text-xs bg-purple-500/20 text-purple-500 px-2 py-1 rounded">Remote</span>
                  <span className="text-xs text-gray-400 ml-2">Apply by Mar 15</span>
                </div>
              </div>
              
              <div className="bg-[hsl(var(--space-dark))]/50 rounded-lg p-4 border border-pink-500/20">
                <h4 className="font-semibold text-pink-500 mb-2">AI Research Position</h4>
                <p className="text-sm text-gray-300">Wildlife Monitoring Systems Engineer</p>
                <div className="flex items-center mt-2">
                  <span className="text-xs bg-pink-500/20 text-pink-500 px-2 py-1 rounded">Full-time</span>
                  <span className="text-xs text-gray-400 ml-2">San Francisco, CA</span>
                </div>
              </div>
            </div>
            
            <Button variant="outline" className="mt-6 w-full py-3 border border-purple-500/30 text-purple-500 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-300">
              View All Jobs
            </Button>
          </motion.div>
        </div>

        {/* Live Conservation Alerts Control Center */}
        <motion.div 
          className="glass-morphism rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <AlertTriangle className="text-[hsl(var(--eco-green))] mr-3" />
            <span className="gradient-text">Global Conservation Command Center</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Climate Alerts */}
            <motion.div 
              className="bg-[hsl(var(--infrared-orange))]/10 border border-[hsl(var(--infrared-orange))]/30 rounded-xl p-6 text-center group hover:bg-[hsl(var(--infrared-orange))]/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Thermometer className="text-[hsl(var(--infrared-orange))] text-2xl mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl font-bold text-[hsl(var(--infrared-orange))] mb-2">
                {alertsByType.climate || 23}
              </div>
              <div className="text-sm text-gray-300">Climate Alerts</div>
              <div className="text-xs text-[hsl(var(--infrared-orange))] mt-2">↑ 3 in last hour</div>
            </motion.div>
            
            {/* Forest Alerts */}
            <motion.div 
              className="bg-[hsl(var(--eco-green))]/10 border border-[hsl(var(--eco-green))]/30 rounded-xl p-6 text-center group hover:bg-[hsl(var(--eco-green))]/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <TreePine className="text-[hsl(var(--eco-green))] text-2xl mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl font-bold text-[hsl(var(--eco-green))] mb-2">
                {alertsByType.forest || 7}
              </div>
              <div className="text-sm text-gray-300">Forest Alerts</div>
              <div className="text-xs text-[hsl(var(--eco-green))] mt-2">↓ 2 from yesterday</div>
            </motion.div>
            
            {/* Wildlife Alerts */}
            <motion.div 
              className="bg-[hsl(var(--neon-blue))]/10 border border-[hsl(var(--neon-blue))]/30 rounded-xl p-6 text-center group hover:bg-[hsl(var(--neon-blue))]/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <TreePine className="text-[hsl(var(--neon-blue))] text-2xl mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl font-bold text-[hsl(var(--neon-blue))] mb-2">
                {alertsByType.wildlife || 41}
              </div>
              <div className="text-sm text-gray-300">Wildlife Alerts</div>
              <div className="text-xs text-[hsl(var(--neon-blue))] mt-2">Migration season</div>
            </motion.div>
            
            {/* Marine Alerts */}
            <motion.div 
              className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 text-center group hover:bg-purple-500/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Fish className="text-purple-500 text-2xl mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl font-bold text-purple-500 mb-2">
                {alertsByType.marine || 15}
              </div>
              <div className="text-sm text-gray-300">Marine Alerts</div>
              <div className="text-xs text-purple-500 mt-2">Coral bleaching events</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
