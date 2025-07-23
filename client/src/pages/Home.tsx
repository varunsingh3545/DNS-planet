import React from 'react';
import { Link } from 'wouter';
import { ArrowRight, Globe, Zap, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Starfield from '@/components/Starfield';
import cosmicBg from '@assets/cosmic-bg.jpg';


const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cosmicBg})` }}
      />
      <div className="absolute inset-0 bg-cosmic/60" />
      
      {/* Animated Starfield */}
      <Starfield />

      {/* Content */}
      <div className="relative z-10 pt-20">
        <div className="container mx-auto px-4">
          <div className="min-h-screen flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              
              {/* Left Content */}
              <div className="text-center lg:text-left animate-fade-in">
                <h1 className="hero-title text-4xl md:text-6xl font-bold text-cosmic-foreground drop-shadow-lg mb-6 leading-tight">
                  Digital <span className="text-accent drop-shadow-lg">Nervous</span> System
                  <br />
                  <span className="text-2xl md:text-4xl font-normal text-cosmic-foreground/90 drop-shadow-lg">
                    of the Planet
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-cosmic-foreground/80 mb-8 max-w-2xl">
                  Harnessing AI and real-time data to monitor, protect, and restore Earth's ecosystems. 
                  Join the global network of conservation intelligence.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/wildlife">
                    <Button className="btn-primary group">
                      Explore the Platform
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/dashboard">
                    <Button className="btn-secondary">
                      Access Dashboard
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Content - 3D Earth Visualization */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 animate-spin-slow relative overflow-hidden glass-card">
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-emerald-500/30 to-blue-500/30 animate-float">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-400/40 to-cyan-400/40 flex items-center justify-center">
                        <Globe className="h-24 w-24 text-accent animate-pulse" />
                      </div>
                    </div>
                    {/* Orbiting elements */}
                    <div className="absolute -inset-8">
                      <div className="w-full h-full animate-spin-slow">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 bg-accent/60 rounded-full animate-twinkle"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-3 h-3 bg-primary/60 rounded-full animate-twinkle"></div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-2 h-2 bg-cyan-400/60 rounded-full animate-twinkle"></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-3 h-3 bg-yellow-400/60 rounded-full animate-twinkle"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <section className="py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-cosmic-foreground mb-4">
                Planetary Intelligence Network
              </h2>
              <p className="text-lg text-cosmic-foreground/80 max-w-2xl mx-auto">
                Real-time monitoring and AI-powered insights across Earth's critical ecosystems
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Globe,
                  title: 'Global Monitoring',
                  description: 'Real-time ecosystem tracking across all continents',
                  color: 'text-emerald-400'
                },
                {
                  icon: Zap,
                  title: 'AI-Powered Analysis',
                  description: 'Advanced pattern recognition and predictive modeling',
                  color: 'text-yellow-400'
                },
                {
                  icon: Shield,
                  title: 'Conservation Actions',
                  description: 'Automated alerts and intervention recommendations',
                  color: 'text-cyan-400'
                },
                {
                  icon: Users,
                  title: 'Global Network',
                  description: 'Connecting researchers, NGOs, and governments',
                  color: 'text-purple-400'
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="data-card text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <feature.icon className={`h-12 w-12 ${feature.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
                  <h3 className="text-xl font-semibold text-cosmic-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-cosmic-foreground/70">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;