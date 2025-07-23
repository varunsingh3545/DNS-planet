import React from 'react';
import { Waves, Fish, Thermometer, Droplets, AlertCircle, TrendingDown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import marineBg from '@assets/marine-bg.jpg';


const Marine = () => {
  const oceanData = [
    { species: 'Blue Whale', population: '15,000', change: '-2.3%', status: 'Endangered' },
    { species: 'Great White Shark', population: '3,500', change: '-5.1%', status: 'Vulnerable' },
    { species: 'Sea Turtle', population: '85,000', change: '+1.2%', status: 'Threatened' },
    { species: 'Coral Polyps', population: '2.1M', change: '-18.7%', status: 'Critical' }
  ];

  const waterQuality = [
    { region: 'Pacific Ocean', ph: '8.1', temperature: '15.2°C', pollution: 'Moderate' },
    { region: 'Atlantic Ocean', ph: '8.0', temperature: '16.8°C', pollution: 'High' },
    { region: 'Indian Ocean', ph: '7.9', temperature: '17.5°C', pollution: 'Low' },
    { region: 'Arctic Ocean', ph: '7.8', temperature: '1.2°C', pollution: 'Critical' }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${marineBg})` }}
      />
      <div className="absolute inset-0 bg-marine/85" />
      
      {/* Content */}
      <div className="relative z-10 pt-20">
        <div className="container mx-auto px-4 py-8">
          
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <Waves className="h-16 w-16 text-marine-accent mx-auto mb-4 animate-float" />
            <h1 className="text-4xl md:text-5xl font-bold text-marine-foreground drop-shadow-lg mb-4">
              Marine Conservation Hub
            </h1>
            <p className="text-xl text-marine-foreground/80 max-w-3xl mx-auto">
              Monitoring ocean health, marine biodiversity, and aquatic ecosystem protection
            </p>
          </div>

          {/* Ocean Health Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Ocean Coverage', value: '71%', icon: Waves, color: 'text-marine-accent' },
              { label: 'Species Tracked', value: '8,749', icon: Fish, color: 'text-marine-accent' },
              { label: 'Avg Ocean Temp', value: '+0.8°C', icon: Thermometer, color: 'text-red-400' },
              { label: 'Pollution Alerts', value: '234', icon: AlertCircle, color: 'text-yellow-400' }
            ].map((stat, index) => (
              <Card key={index} className="glass-card text-center hover:bg-marine-accent/10">
                <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-2xl font-bold text-marine-foreground mb-1">{stat.value}</div>
                <div className="text-marine-foreground/70">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Marine Species */}
            <Card className="glass-card">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-marine-foreground mb-6 flex items-center">
                  <Fish className="h-6 w-6 text-marine-accent mr-2" />
                  Marine Species Monitor
                </h2>
                
                <div className="space-y-4">
                  {oceanData.map((species, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-4 rounded-lg bg-marine-accent/10 hover:bg-marine-accent/20 transition-all duration-300"
                    >
                      <div>
                        <h3 className="font-semibold text-marine-foreground">{species.species}</h3>
                        <p className="text-sm text-marine-foreground/70">Population: {species.population}</p>
                      </div>
                      <div className="text-right">
                        <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          species.status === 'Critical' ? 'bg-red-500/20 text-red-300' :
                          species.status === 'Endangered' ? 'bg-orange-500/20 text-orange-300' :
                          species.status === 'Vulnerable' ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-blue-500/20 text-blue-300'
                        }`}>
                          {species.status}
                        </div>
                        <div className={`mt-1 text-sm ${
                          species.change.startsWith('-') ? 'text-red-400' : 'text-emerald-400'
                        }`}>
                          {species.change.startsWith('-') ? (
                            <TrendingDown className="h-4 w-4 inline mr-1" />
                          ) : (
                            <div className="h-4 w-4 bg-emerald-400 rounded-full inline-block mr-1" />
                          )}
                          {species.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-6 bg-marine-accent hover:bg-marine-accent/80">
                  Detailed Species Data
                </Button>
              </div>
            </Card>

            {/* Water Quality */}
            <Card className="glass-card">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-marine-foreground mb-6 flex items-center">
                  <Droplets className="h-6 w-6 text-marine-accent mr-2" />
                  Water Quality Index
                </h2>
                
                <div className="space-y-4">
                  {waterQuality.map((region, index) => (
                    <div 
                      key={index} 
                      className="p-4 rounded-lg bg-marine-accent/10 hover:bg-marine-accent/20 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-marine-foreground">{region.region}</h3>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          region.pollution === 'Critical' ? 'bg-red-500/20 text-red-300' :
                          region.pollution === 'High' ? 'bg-orange-500/20 text-orange-300' :
                          region.pollution === 'Moderate' ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-emerald-500/20 text-emerald-300'
                        }`}>
                          {region.pollution}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-marine-foreground/80">
                        <div>pH Level: <span className="font-medium">{region.ph}</span></div>
                        <div>Temperature: <span className="font-medium">{region.temperature}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-6 btn-secondary">
                  Full Quality Report
                </Button>
              </div>
            </Card>
          </div>

          {/* Ocean Current Map Placeholder */}
          <Card className="glass-card mt-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-marine-foreground mb-4 flex items-center">
                <Waves className="h-6 w-6 text-marine-accent mr-2" />
                Global Ocean Currents & Temperature
              </h2>
              <div className="h-64 bg-marine-accent/20 rounded-lg flex items-center justify-center">
                <div className="text-center text-marine-foreground/60">
                  <Waves className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>Live ocean current monitoring</p>
                  <p className="text-sm">Temperature gradients and marine migration patterns</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Coral Reef Health */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="glass-card text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-red-400 mb-2">32%</div>
                <p className="text-marine-foreground/80">Coral Bleaching</p>
              </div>
            </Card>
            <Card className="glass-card text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-marine-accent mb-2">68%</div>
                <p className="text-marine-foreground/80">Reef Coverage</p>
              </div>
            </Card>
            <Card className="glass-card text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-yellow-400 mb-2">15°C</div>
                <p className="text-marine-foreground/80">Avg Water Temp</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marine;