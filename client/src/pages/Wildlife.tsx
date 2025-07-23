import React from 'react';
import { TreePine, Binoculars, TrendingUp, AlertTriangle, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import wildlifeBg from '@assets/wildlife-bg.jpg';


const Wildlife = () => {
  const animals = [
    { name: 'Bengal Tiger', population: '2,573', trend: 'up', status: 'Endangered', location: 'India' },
    { name: 'Mountain Gorilla', population: '1,069', trend: 'up', status: 'Critical', location: 'Rwanda' },
    { name: 'Snow Leopard', population: '4,080', trend: 'stable', status: 'Vulnerable', location: 'Himalayas' },
    { name: 'Amur Leopard', population: '130', trend: 'up', status: 'Critical', location: 'Russia' }
  ];

  const alerts = [
    { message: 'Deforestation detected in Amazon Sector 7', severity: 'high', time: '2 hours ago' },
    { message: 'Poaching activity reported in Kruger National Park', severity: 'critical', time: '4 hours ago' },
    { message: 'Habitat restoration completed in Yellowstone', severity: 'success', time: '1 day ago' }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${wildlifeBg})` }}
      />
      <div className="absolute inset-0 bg-wildlife/80" />
      
      {/* Content */}
      <div className="relative z-10 pt-20">
        <div className="container mx-auto px-4 py-8">
          
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <TreePine className="h-16 w-16 text-wildlife-accent mx-auto mb-4 animate-float" />
            <h1 className="text-4xl md:text-5xl font-bold text-wildlife-foreground drop-shadow-lg mb-4">
              Wildlife Conservation Hub
            </h1>
            <p className="text-xl text-wildlife-foreground/80 max-w-3xl mx-auto">
              Real-time monitoring of endangered species populations and habitat protection
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Species Monitored', value: '14,523', icon: Binoculars },
              { label: 'Protected Areas', value: '892', icon: MapPin },
              { label: 'Population Growth', value: '+12.3%', icon: TrendingUp },
              { label: 'Active Alerts', value: '47', icon: AlertTriangle }
            ].map((stat, index) => (
              <Card key={index} className="glass-card text-center hover:bg-wildlife-accent/10">
                <stat.icon className="h-8 w-8 text-wildlife-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-wildlife-foreground mb-1">{stat.value}</div>
                <div className="text-wildlife-foreground/70">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Animal Tracking */}
            <Card className="glass-card">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-wildlife-foreground mb-6 flex items-center">
                  <TreePine className="h-6 w-6 text-wildlife-accent mr-2" />
                  Species Tracking
                </h2>
                
                <div className="space-y-4">
                  {animals.map((animal, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-4 rounded-lg bg-wildlife-accent/10 hover:bg-wildlife-accent/20 transition-all duration-300"
                    >
                      <div>
                        <h3 className="font-semibold text-wildlife-foreground">{animal.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-wildlife-foreground/70">
                          <span>Population: {animal.population}</span>
                          <span>•</span>
                          <span>{animal.location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          animal.status === 'Critical' ? 'bg-red-500/20 text-red-300' :
                          animal.status === 'Endangered' ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-blue-500/20 text-blue-300'
                        }`}>
                          {animal.status}
                        </div>
                        <div className="mt-1">
                          {animal.trend === 'up' ? (
                            <TrendingUp className="h-4 w-4 text-emerald-400" />
                          ) : (
                            <div className="h-4 w-4 bg-yellow-400 rounded-full" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-6 bg-wildlife-accent hover:bg-wildlife-accent/80">
                  View All Species
                </Button>
              </div>
            </Card>

            {/* Conservation Alerts */}
            <Card className="glass-card">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-wildlife-foreground mb-6 flex items-center">
                  <AlertTriangle className="h-6 w-6 text-wildlife-accent mr-2" />
                  Conservation Alerts
                </h2>
                
                <div className="space-y-4">
                  {alerts.map((alert, index) => (
                    <div 
                      key={index} 
                      className={`p-4 rounded-lg border-l-4 ${
                        alert.severity === 'critical' ? 'border-red-500 bg-red-500/10' :
                        alert.severity === 'high' ? 'border-yellow-500 bg-yellow-500/10' :
                        'border-emerald-500 bg-emerald-500/10'
                      }`}
                    >
                      <p className="text-wildlife-foreground font-medium">{alert.message}</p>
                      <p className="text-wildlife-foreground/60 text-sm mt-1">{alert.time}</p>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-6 btn-secondary">
                  View All Alerts
                </Button>
              </div>
            </Card>
          </div>

          {/* Habitat Map Placeholder */}
          <Card className="glass-card mt-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-wildlife-foreground mb-4 flex items-center">
                <MapPin className="h-6 w-6 text-wildlife-accent mr-2" />
                Global Habitat Map
              </h2>
              <div className="h-64 bg-wildlife-accent/20 rounded-lg flex items-center justify-center">
                <div className="text-center text-wildlife-foreground/60">
                  <MapPin className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>Interactive habitat monitoring map</p>
                  <p className="text-sm">Real-time species location tracking</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Wildlife;