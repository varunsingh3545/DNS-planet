import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Users, Activity, FileText, MessageSquare, Share2, Database, Settings, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ResearchPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "", token: "" });

  const { data: researchData, isLoading } = useQuery({
    queryKey: ["/api/research/dashboard"],
    enabled: isAuthenticated,
    refetchInterval: 10000,
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would make an API call to authenticate
    // For demo purposes, we'll simulate authentication
    if (credentials.email && credentials.password) {
      setIsAuthenticated(true);
    }
  };

  const LoginInterface = () => (
    <motion.div 
      className="max-w-md mx-auto mb-16"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="glass-morphism border border-[hsl(var(--eco-green))]/30">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--eco-green))] to-[hsl(var(--neon-blue))] rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold gradient-text">Secure Access</h3>
            <p className="text-gray-300 mt-2">Research Portal Authentication</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Institution Email</label>
              <Input
                type="email"
                placeholder="researcher@institution.edu"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                className="w-full bg-[hsl(var(--space-dark))]/80 border border-gray-600 text-white placeholder-gray-400"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Access Code</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="w-full bg-[hsl(var(--space-dark))]/80 border border-gray-600 text-white placeholder-gray-400"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">2FA Token (Optional)</label>
              <Input
                type="text"
                placeholder="123456"
                value={credentials.token}
                onChange={(e) => setCredentials({ ...credentials, token: e.target.value })}
                className="w-full bg-[hsl(var(--space-dark))]/80 border border-gray-600 text-white placeholder-gray-400"
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[hsl(var(--eco-green))] to-[hsl(var(--neon-blue))] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[hsl(var(--eco-green))]/25 transition-all duration-300"
            >
              <Lock className="w-4 h-4 mr-2" />
              Access Research Portal
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-[hsl(var(--eco-green))] hover:text-[hsl(var(--neon-blue))] transition-colors duration-300">
              Request Research Access
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const ResearchDashboard = () => {
    const stats = researchData?.stats || {};
    const projects = researchData?.projects || [];
    const collaborators = researchData?.collaborators || [];

    if (isLoading) {
      return (
        <div className="grid lg:grid-cols-4 gap-8 animate-pulse">
          <div className="lg:col-span-1 space-y-4">
            <div className="h-64 glass-morphism rounded-2xl"></div>
            <div className="h-48 glass-morphism rounded-2xl"></div>
          </div>
          <div className="lg:col-span-3 space-y-6">
            <div className="h-32 glass-morphism rounded-2xl"></div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="h-64 glass-morphism rounded-2xl"></div>
              <div className="h-64 glass-morphism rounded-2xl"></div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <motion.div 
        className="grid lg:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Sidebar Navigation */}
        <div className="space-y-6">
          <Card className="glass-morphism">
            <CardHeader>
              <CardTitle className="text-xl text-[hsl(var(--neon-blue))]">Navigation</CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="space-y-2">
                <Button variant="secondary" className="w-full justify-start bg-[hsl(var(--neon-blue))]/20 text-[hsl(var(--neon-blue))] hover:bg-[hsl(var(--neon-blue))]/30">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-700">
                  <Share2 className="w-4 h-4 mr-2" />
                  AI Modules
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-700">
                  <FileText className="w-4 h-4 mr-2" />
                  Projects
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-700">
                  <Users className="w-4 h-4 mr-2" />
                  Collaboration
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-700">
                  <Database className="w-4 h-4 mr-2" />
                  Data Sets
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-700">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </nav>
            </CardContent>
          </Card>

          <Card className="glass-morphism">
            <CardHeader>
              <CardTitle className="text-xl text-[hsl(var(--eco-green))]">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[hsl(var(--eco-green))]">
                    {stats.activeProjects || 1234}
                  </div>
                  <div className="text-xs text-gray-400">Active Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[hsl(var(--neon-blue))]">
                    {stats.researchers || 8901}
                  </div>
                  <div className="text-xs text-gray-400">Researchers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[hsl(var(--infrared-orange))]">
                    {stats.dataProcessed || 456}TB
                  </div>
                  <div className="text-xs text-gray-400">Data Processed</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* AI Module Switcher */}
          <Card className="glass-morphism">
            <CardHeader>
              <CardTitle className="text-2xl text-white">AI Research Modules</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <motion.button 
                  className="p-4 bg-[hsl(var(--eco-green))]/20 border border-[hsl(var(--eco-green))] rounded-lg text-[hsl(var(--eco-green))] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Activity className="w-8 h-8 mb-2 mx-auto" />
                  <div className="font-semibold">Forest AI</div>
                  <div className="text-xs opacity-80">Active Analysis</div>
                </motion.button>
                <motion.button 
                  className="p-4 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Activity className="w-8 h-8 mb-2 mx-auto" />
                  <div className="font-semibold">Marine AI</div>
                  <div className="text-xs opacity-80">Standby</div>
                </motion.button>
                <motion.button 
                  className="p-4 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Activity className="w-8 h-8 mb-2 mx-auto" />
                  <div className="font-semibold">Climate AI</div>
                  <div className="text-xs opacity-80">Standby</div>
                </motion.button>
              </div>
            </CardContent>
          </Card>

          {/* Research Collaboration */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-morphism">
              <CardHeader>
                <CardTitle className="text-xl text-[hsl(var(--neon-blue))] flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Live Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {collaborators.map((collab, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-8 h-8 bg-[hsl(var(--eco-green))] rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-black">
                          {collab.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm">{collab.name}</div>
                        <div className="text-xs text-gray-400">{collab.activity}</div>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${collab.status === 'online' ? 'bg-[hsl(var(--eco-green))] animate-pulse' : 'bg-gray-500'}`}></div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-morphism">
              <CardHeader>
                <CardTitle className="text-xl text-[hsl(var(--eco-green))] flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Shared Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {projects.slice(0, 2).map((project, index) => (
                    <motion.div
                      key={project.id}
                      className="bg-gray-800 rounded-lg p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <h4 className="font-semibold text-[hsl(var(--neon-blue))] mb-2">{project.name}</h4>
                      <div className="text-sm text-gray-400 mb-2">{project.participants} collaborators • Updated 2h ago</div>
                      <div className="flex justify-between items-center">
                        <span className="px-2 py-1 bg-[hsl(var(--eco-green))] text-black rounded text-xs">Active</span>
                        <span className="text-xs text-gray-400">78% Complete</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* File Sharing Tools */}
          <Card className="glass-morphism">
            <CardHeader>
              <CardTitle className="text-xl text-[hsl(var(--infrared-orange))] flex items-center">
                <Database className="w-5 h-5 mr-2" />
                Research Data Exchange
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div 
                  className="text-center p-6 border border-dashed border-gray-600 rounded-lg hover:border-[hsl(var(--eco-green))] transition-colors cursor-pointer"
                  whileHover={{ scale: 1.02, borderColor: 'hsl(var(--eco-green))' }}
                >
                  <Database className="w-12 h-12 text-[hsl(var(--eco-green))] mb-4 mx-auto" />
                  <h4 className="font-semibold text-[hsl(var(--eco-green))] mb-2">Upload Dataset</h4>
                  <p className="text-sm text-gray-400">Share your research data</p>
                </motion.div>
                <motion.div 
                  className="text-center p-6 border border-dashed border-gray-600 rounded-lg hover:border-[hsl(var(--neon-blue))] transition-colors cursor-pointer"
                  whileHover={{ scale: 1.02, borderColor: 'hsl(var(--neon-blue))' }}
                >
                  <Activity className="w-12 h-12 text-[hsl(var(--neon-blue))] mb-4 mx-auto" />
                  <h4 className="font-semibold text-[hsl(var(--neon-blue))] mb-2">Browse Data</h4>
                  <p className="text-sm text-gray-400">Find relevant datasets</p>
                </motion.div>
                <motion.div 
                  className="text-center p-6 border border-dashed border-gray-600 rounded-lg hover:border-[hsl(var(--infrared-orange))] transition-colors cursor-pointer"
                  whileHover={{ scale: 1.02, borderColor: 'hsl(var(--infrared-orange))' }}
                >
                  <BarChart3 className="w-12 h-12 text-[hsl(var(--infrared-orange))] mb-4 mx-auto" />
                  <h4 className="font-semibold text-[hsl(var(--infrared-orange))] mb-2">Analysis Tools</h4>
                  <p className="text-sm text-gray-400">Advanced data processing</p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="research" className="py-20 bg-gradient-to-b from-[hsl(var(--space-dark))] to-[hsl(var(--space-black))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Private Research Layer</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Secure collaboration platform for research institutions, conservation organizations, and scientific teams
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isAuthenticated ? (
            <motion.div
              key="login"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LoginInterface />
              
              {/* Post-Login Dashboard Preview */}
              <div className="space-y-8 opacity-50 pointer-events-none">
                <div className="text-center">
                  <h3 className="text-2xl font-bold gradient-text mb-4">Research Dashboard Preview</h3>
                  <p className="text-gray-300">Available after authentication</p>
                </div>
                
                <div className="grid lg:grid-cols-4 gap-8">
                  <div className="lg:col-span-1 space-y-4">
                    <div className="glass-morphism rounded-2xl p-6 h-64" />
                    <div className="glass-morphism rounded-2xl p-6 h-48" />
                  </div>
                  <div className="lg:col-span-3 space-y-6">
                    <div className="glass-morphism rounded-2xl p-6 h-32" />
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="glass-morphism rounded-2xl p-6 h-64" />
                      <div className="glass-morphism rounded-2xl p-6 h-64" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <ResearchDashboard />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
