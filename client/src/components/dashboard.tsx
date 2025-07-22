import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { TrendingUp, AlertTriangle, Satellite, Server, Database } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from "recharts";

export function Dashboard() {
  const { data, isLoading } = useQuery({
    queryKey: ["/api/dashboard"],
    refetchInterval: 5000, // Refresh every 5 seconds for live feel
  });

  const { data: alertsData } = useQuery({
    queryKey: ["/api/alerts"],
    refetchInterval: 10000,
  });

  const { data: sensorData } = useQuery({
    queryKey: ["/api/sensor-data", { limit: 10 }],
    refetchInterval: 3000,
  });

  if (isLoading) {
    return (
      <section id="dashboard" className="py-20 bg-[hsl(var(--space-dark))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 bg-gray-700 rounded animate-pulse mx-auto max-w-md mb-6" />
            <div className="h-6 bg-gray-700 rounded animate-pulse mx-auto max-w-2xl" />
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="glass-morphism rounded-xl p-6 animate-pulse">
                    <div className="h-16 bg-gray-700 rounded" />
                  </div>
                ))}
              </div>
              <div className="h-96 glass-morphism rounded-2xl p-6 animate-pulse">
                <div className="h-full bg-gray-700 rounded" />
              </div>
            </div>
            <div className="space-y-8">
              <div className="h-80 glass-morphism rounded-2xl p-6 animate-pulse">
                <div className="h-full bg-gray-700 rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const stats = (data as any)?.stats || {};
  const alerts = (alertsData as any)?.alerts || [];
  const recentSensorData = (sensorData as any)?.data || [];

  // Mock chart data for temperature trends
  const temperatureData = [
    { name: '2020', value: 14.8 },
    { name: '2021', value: 14.9 },
    { name: '2022', value: 15.1 },
    { name: '2023', value: 15.3 },
    { name: '2024', value: 15.2 },
  ];

  // Mock deforestation chart data
  const deforestationData = [
    { name: 'Jan', alerts: 120 },
    { name: 'Feb', alerts: 85 },
    { name: 'Mar', alerts: 156 },
    { name: 'Apr', alerts: 98 },
    { name: 'May', alerts: 142 },
    { name: 'Jun', alerts: 167 },
  ];

  return (
    <section id="dashboard" className="py-20 bg-[hsl(var(--space-dark))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Live Ecosystem Dashboard</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time monitoring of Earth's vital signs through our global sensor network
          </p>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Global Stats Cards */}
            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="glass-morphism rounded-xl p-6 text-center group hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="text-3xl font-bold text-[hsl(var(--eco-green))] mb-2 group-hover:text-glow">
                  {(stats.speciesMonitored / 1000000).toFixed(1)}M
                </div>
                <div className="text-sm text-gray-300">Species Monitored</div>
                <div className="text-xs text-[hsl(var(--eco-green))] mt-1"> 191 12% this month</div>
              </motion.div>
              
              <motion.div 
                className="glass-morphism rounded-xl p-6 text-center group hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="text-3xl font-bold text-[hsl(var(--infrared-orange))] mb-2 group-hover:text-glow">
                  {stats.activeAlerts || 0}
                </div>
                <div className="text-sm text-gray-300">Active Alerts</div>
                <div className="text-xs text-[hsl(var(--infrared-orange))] mt-1"> 191 3 today</div>
              </motion.div>
              
              <motion.div 
                className="glass-morphism rounded-xl p-6 text-center group hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="text-3xl font-bold text-[hsl(var(--neon-blue))] mb-2 group-hover:text-glow">
                  {(stats.activeSensors / 1000).toFixed(0)}K
                </div>
                <div className="text-sm text-gray-300">Active Sensors</div>
                <div className="text-xs text-[hsl(var(--neon-blue))] mt-1">99.7% uptime</div>
              </motion.div>
              
              <motion.div 
                className="glass-morphism rounded-xl p-6 text-center group hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-glow">
                  {stats.dataProcessed}TB
                </div>
                <div className="text-sm text-gray-300">Data/Hour</div>
                <div className="text-xs text-white mt-1">Processing</div>
              </motion.div>
            </motion.div>

            {/* Chart Section */}
            <motion.div 
              className="glass-morphism rounded-2xl p-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <TrendingUp className="text-[hsl(var(--eco-green))] mr-2" />
                Global Temperature Trends
              </h3>
              
              <div className="h-64 bg-[hsl(var(--space-black))]/30 rounded-lg p-4 border border-[hsl(var(--eco-green))]/20">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={temperatureData}>
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false}
                      tick={{ fill: '#9CA3AF', fontSize: 12 }}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false}
                      tick={{ fill: '#9CA3AF', fontSize: 12 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="hsl(var(--eco-green))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--eco-green))', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, fill: 'hsl(var(--neon-blue))' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* World Map Section */}
            <motion.div 
              className="glass-morphism rounded-2xl p-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Satellite className="text-[hsl(var(--neon-blue))] mr-2" />
                Global Sensor Network
              </h3>
              
              <div className="relative h-80 bg-[hsl(var(--space-black))]/30 rounded-lg overflow-hidden border border-[hsl(var(--neon-blue))]/20">
                {/* Simplified world map with data points */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full max-w-2xl">
                    {/* Continents representation */}
                    <div className="absolute top-16 left-24 w-12 h-8 bg-[hsl(var(--eco-green))]/30 rounded transform rotate-12" />
                    <div className="absolute top-32 left-48 w-8 h-12 bg-[hsl(var(--eco-green))]/30 rounded transform rotate-12" />
                    <div className="absolute top-20 right-32 w-16 h-16 bg-[hsl(var(--eco-green))]/30 rounded transform -rotate-12" />
                    
                    {/* Active sensor points */}
                    <motion.div 
                      className="absolute top-16 left-24 w-3 h-3 bg-[hsl(var(--eco-green))] rounded-full data-node glow-eco"
                      whileHover={{ scale: 2 }}
                    />
                    <motion.div 
                      className="absolute top-32 left-48 w-2 h-2 bg-[hsl(var(--neon-blue))] rounded-full data-node glow-neon"
                      whileHover={{ scale: 2 }}
                    />
                    <motion.div 
                      className="absolute top-48 right-32 w-2.5 h-2.5 bg-[hsl(var(--infrared-orange))] rounded-full data-node glow-infrared"
                      whileHover={{ scale: 2 }}
                    />
                    <motion.div 
                      className="absolute bottom-24 left-1/3 w-2 h-2 bg-[hsl(var(--eco-green))] rounded-full data-node glow-eco"
                      whileHover={{ scale: 2 }}
                    />
                    <motion.div 
                      className="absolute top-20 right-20 w-2 h-2 bg-[hsl(var(--neon-blue))] rounded-full data-node glow-neon"
                      whileHover={{ scale: 2 }}
                    />
                  </div>
                </div>
                
                {/* Legend */}
                <div className="absolute bottom-4 left-4 glass-morphism rounded-lg p-3">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[hsl(var(--eco-green))] rounded-full mr-2"></div>
                      <span>Active</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[hsl(var(--neon-blue))] rounded-full mr-2"></div>
                      <span>Processing</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[hsl(var(--infrared-orange))] rounded-full mr-2"></div>
                      <span>Alert</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            
            {/* Live Alerts */}
            <motion.div 
              className="glass-morphism rounded-2xl p-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <AlertTriangle className="text-[hsl(var(--infrared-orange))] mr-2" />
                Live Alerts
              </h3>
              
              <div className="space-y-4">
                {alerts.slice(0, 3).map((alert: any, index: number) => (
                  <motion.div
                    key={alert.id}
                    className={`bg-[hsl(var(--${alert.severity === 'high' || alert.severity === 'critical' ? 'infrared-orange' : 'neon-blue'})]/10 border border-[hsl(var(--${alert.severity === 'high' || alert.severity === 'critical' ? 'infrared-orange' : 'neon-blue'})]/30 rounded-lg p-4`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-sm font-semibold text-[hsl(var(--${alert.severity === 'high' || alert.severity === 'critical' ? 'infrared-orange' : 'neon-blue'}))]`}>
                        {alert.title}
                      </span>
                      <span className="text-xs text-gray-400">
                        {new Date(alert.createdAt).toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300">{alert.location} - {alert.description}</p>
                  </motion.div>
                ))}
                
                {alerts.length === 0 && (
                  <div className="text-center text-gray-400 py-8">
                    <AlertTriangle className="mx-auto mb-2 opacity-50" size={24} />
                    <p>No active alerts</p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* System Status */}
            <motion.div 
              className="glass-morphism rounded-2xl p-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Server className="text-[hsl(var(--eco-green))] mr-2" />
                System Status
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">AI Processing</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[hsl(var(--eco-green))] rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm text-[hsl(var(--eco-green))]">Online</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Satellite Network</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[hsl(var(--eco-green))] rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm text-[hsl(var(--eco-green))]">Active</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Data Pipeline</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[hsl(var(--eco-green))] rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm text-[hsl(var(--eco-green))]">Processing</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Global Sensors</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[hsl(var(--neon-blue))] rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm text-[hsl(var(--neon-blue))]">94.7% Uptime</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Recent Sensor Data */}
            <motion.div 
              className="glass-morphism rounded-2xl p-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Database className="text-[hsl(var(--neon-blue))] mr-2" />
                Live Data Stream
              </h3>
              
              <div className="space-y-3 max-h-48 overflow-y-auto">
                {recentSensorData.slice(0, 5).map((data: any, index: number) => (
                  <motion.div
                    key={data.id}
                    className="flex items-center justify-between py-2 border-b border-gray-700/50 last:border-b-0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div>
                      <div className="text-sm font-medium capitalize">
                        {data.type.replace('_', ' ')}
                      </div>
                      <div className="text-xs text-gray-400">
                        {data.sensorId}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-[hsl(var(--neon-blue))]">
                        {data.value}
                      </div>
                      <div className="text-xs text-gray-400">
                        {new Date(data.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {recentSensorData.length === 0 && (
                  <div className="text-center text-gray-400 py-8">
                    <Database className="mx-auto mb-2 opacity-50" size={24} />
                    <p>No recent sensor data</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
