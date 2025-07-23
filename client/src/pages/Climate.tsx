import React from 'react';
import { Thermometer, Wind, CloudRain, Sun, TrendingUp, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import climateBg from '@assets/climate-bg.jpg';


const Climate = () => {
  const climateData = [
    { region: 'Arctic', temp: '-8.2°C', change: '+2.1°C', trend: 'warming' },
    { region: 'Tropical', temp: '28.5°C', change: '+1.3°C', trend: 'warming' },
    { region: 'Temperate', temp: '15.8°C', change: '+1.8°C', trend: 'warming' },
    { region: 'Desert', temp: '35.2°C', change: '+2.5°C', trend: 'warming' }
  ];

  const extremeEvents = [
    { event: 'Hurricane Category 5', location: 'Atlantic Basin', severity: 'Critical', time: '6 hours ago' },
    { event: 'Drought Alert', location: 'Sub-Saharan Africa', severity: 'High', time: '12 hours ago' },
    { event: 'Wildfire Risk', location: 'California', severity: 'High', time: '1 day ago' },
    { event: 'Flood Warning', location: 'Bangladesh', severity: 'Moderate', time: '2 days ago' }
  ];

  const predictions = [
    { metric: 'Global Temp Rise', current: '+1.2°C', predicted: '+1.8°C', year: '2030' },
    { metric: 'Sea Level Rise', current: '+3.2mm/yr', predicted: '+4.8mm/yr', year: '2030' },
    { metric: 'CO2 Concentration', current: '421 ppm', predicted: '435 ppm', year: '2030' },
    { metric: 'Arctic Ice Loss', current: '-13%', predicted: '-22%', year: '2030' }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${climateBg})` }}
      />
      <div className="absolute inset-0 bg-climate/80" />
      
      {/* Content */}
      <div className="relative z-10 pt-20">
        <div className="container mx-auto px-4 py-8">
          
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <Thermometer className="h-16 w-16 text-climate-accent mx-auto mb-4 animate-float" />
            <h1 className="text-4xl md:text-5xl font-bold text-climate-foreground drop-shadow-lg mb-4">
              Climate Intelligence Center
            </h1>
            <p className="text-xl text-climate-foreground/80 max-w-3xl mx-auto">
              Advanced climate modeling, extreme weather prediction, and environmental pattern analysis
            </p>
          </div>

          {/* Global Climate Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Global Temp', value: '+1.2°C', icon: Thermometer, color: 'text-red-400' },
              { label: 'CO2 Levels', value: '421 ppm', icon: Wind, color: 'text-climate-accent' },
              { label: 'Sea Level', value: '+3.2mm', icon: CloudRain, color: 'text-blue-400' },
              { label: 'Solar Activity', value: '94.2%', icon: Sun, color: 'text-yellow-400' }
            ].map((stat, index) => (
              <Card key={index} className="glass-card text-center hover:bg-climate-accent/10">
                <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-2xl font-bold text-climate-foreground mb-1">{stat.value}</div>
                <div className="text-climate-foreground/70">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            
            {/* Regional Temperature Data */}
            <Card className="glass-card">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-climate-foreground mb-6 flex items-center">
                  <Thermometer className="h-6 w-6 text-climate-accent mr-2" />
                  Regional Temperature Analysis
                </h2>
                
                <div className="space-y-4">
                  {climateData.map((region, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-4 rounded-lg bg-climate-accent/10 hover:bg-climate-accent/20 transition-all duration-300"
                    >
                      <div>
                        <h3 className="font-semibold text-climate-foreground">{region.region}</h3>
                        <p className="text-sm text-climate-foreground/70">Current: {region.temp}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-red-400 font-medium">{region.change}</div>
                        <div className="flex items-center text-sm text-red-300">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          {region.trend}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-6 bg-climate-accent hover:bg-climate-accent/80">
                  Detailed Climate Report
                </Button>
              </div>
            </Card>

            {/* Extreme Weather Events */}
            <Card className="glass-card">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-climate-foreground mb-6 flex items-center">
                  <Wind className="h-6 w-6 text-climate-accent mr-2" />
                  Extreme Weather Alerts
                </h2>
                
                <div className="space-y-4">
                  {extremeEvents.map((event, index) => (
                    <div 
                      key={index} 
                      className={`p-4 rounded-lg border-l-4 ${
                        event.severity === 'Critical' ? 'border-red-500 bg-red-500/10' :
                        event.severity === 'High' ? 'border-orange-500 bg-orange-500/10' :
                        'border-yellow-500 bg-yellow-500/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-climate-foreground">{event.event}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          event.severity === 'Critical' ? 'bg-red-500/20 text-red-300' :
                          event.severity === 'High' ? 'bg-orange-500/20 text-orange-300' :
                          'bg-yellow-500/20 text-yellow-300'
                        }`}>
                          {event.severity}
                        </span>
                      </div>
                      <p className="text-sm text-climate-foreground/70">{event.location}</p>
                      <p className="text-xs text-climate-foreground/50 mt-1">{event.time}</p>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-6 btn-secondary">
                  Weather Alert System
                </Button>
              </div>
            </Card>
          </div>

          {/* Climate Predictions */}
          <Card className="glass-card mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-climate-foreground mb-6 flex items-center">
                <Globe className="h-6 w-6 text-climate-accent mr-2" />
                AI Climate Predictions
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {predictions.map((prediction, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-climate-accent/10 hover:bg-climate-accent/20 transition-all duration-300"
                  >
                    <h3 className="font-semibold text-climate-foreground mb-2">{prediction.metric}</h3>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-climate-foreground/70">Current:</span>
                        <span className="text-climate-foreground">{prediction.current}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-climate-foreground/70">Predicted ({prediction.year}):</span>
                        <span className="text-red-400 font-medium">{prediction.predicted}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Climate Visualization */}
          <Card className="glass-card">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-climate-foreground mb-4 flex items-center">
                <Sun className="h-6 w-6 text-climate-accent mr-2" />
                Global Climate Patterns
              </h2>
              <div className="h-64 bg-climate-accent/20 rounded-lg flex items-center justify-center">
                <div className="text-center text-climate-foreground/60">
                  <Sun className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>Real-time climate data visualization</p>
                  <p className="text-sm">Temperature gradients, weather patterns, and climate zones</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Climate;