import { motion } from "framer-motion";
import { Eye, Shield, Sprout, Rocket, Satellite, Globe, Brain, Infinity } from "lucide-react";

export function AboutSection() {
  const missionCards = [
    {
      icon: Eye,
      title: "Monitor",
      description: "Real-time surveillance of Earth's ecosystems using advanced AI and satellite technology to detect changes before they become irreversible.",
      color: "eco-green"
    },
    {
      icon: Shield,
      title: "Protect",
      description: "Proactive conservation through predictive analytics, early warning systems, and coordinated response mechanisms for environmental threats.",
      color: "neon-blue"
    },
    {
      icon: Sprout,
      title: "Preserve",
      description: "Long-term ecosystem restoration and species recovery through data-driven conservation strategies and global collaboration.",
      color: "infrared-orange"
    }
  ];

  const timelineEvents = [
    {
      year: "2024",
      title: "Global Launch",
      description: "Platform launched with 6 AI agents monitoring 50+ countries and 2.3M species.",
      color: "eco-green",
      icon: Brain,
      side: "right"
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Advanced machine learning models deployed for predictive conservation analytics.",
      color: "neon-blue",
      icon: Satellite,
      side: "left"
    },
    {
      year: "2022",
      title: "Satellite Network",
      description: "Partnership with major space agencies for comprehensive Earth monitoring coverage.",
      color: "infrared-orange",
      icon: Globe,
      side: "right"
    },
    {
      year: "2021",
      title: "Foundation",
      description: "Company founded with initial seed funding and core development team assembled.",
      color: "eco-green",
      icon: Rocket,
      side: "left"
    }
  ];

  const impactStats = [
    { value: "2.3M", label: "Species Monitored", color: "eco-green" },
    { value: "50+", label: "Countries Covered", color: "neon-blue" },
    { value: "1,847", label: "Research Partners", color: "infrared-orange" },
    { value: "24/7", label: "Global Monitoring", color: "eco-green" }
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      background: "Former SpaceX AI Lead, MIT PhD",
      color: "eco-green"
    },
    {
      name: "Dr. Amara Johnson",
      role: "Chief Conservation Officer",
      background: "National Geographic Explorer, Stanford PhD",
      color: "neon-blue"
    },
    {
      name: "Dr. Marcus Rodriguez",
      role: "Chief Scientific Officer",
      background: "NOAA Climate Lead, Harvard PhD",
      color: "infrared-orange"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[hsl(var(--space-black))] to-[hsl(var(--space-dark))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Vision Statement */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Vision</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            To create the world's first comprehensive digital nervous system for Earth, connecting AI, sensors, and human intelligence to monitor, protect, and preserve our planet's biodiversity for future generations.
          </p>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {missionCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                className="glass-morphism rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r from-[hsl(var(--${card.color}))] to-[hsl(var(--${card.color === 'eco-green' ? 'neon-blue' : card.color === 'neon-blue' ? 'infrared-orange' : 'eco-green'}))] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-4">{card.title}</h3>
                <p className="text-gray-300">{card.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <motion.h3 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text">Our Journey</span>
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[hsl(var(--eco-green))] to-[hsl(var(--neon-blue))] rounded-full" />

            {/* Timeline items */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                return (
                  <motion.div
                    key={event.year}
                    className="flex items-center"
                    initial={{ opacity: 0, x: event.side === 'left' ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {event.side === 'right' ? (
                      <>
                        <div className="w-1/2 pr-8 text-right">
                          <div className="glass-morphism rounded-xl p-6">
                            <h4 className={`text-xl font-bold text-[hsl(var(--${event.color}))] mb-2`}>
                              {event.title}
                            </h4>
                            <p className="text-gray-300">{event.description}</p>
                          </div>
                        </div>
                        <div className={`w-8 h-8 bg-[hsl(var(--${event.color}))] rounded-full border-4 border-[hsl(var(--space-black))] flex items-center justify-center z-10`}>
                          <Icon className="w-4 h-4 text-black" />
                        </div>
                        <div className="w-1/2 pl-8">
                          <div className={`text-2xl font-bold text-[hsl(var(--${event.color}))]`}>
                            {event.year}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-1/2 pr-8 text-right">
                          <div className={`text-2xl font-bold text-[hsl(var(--${event.color}))]`}>
                            {event.year}
                          </div>
                        </div>
                        <div className={`w-8 h-8 bg-[hsl(var(--${event.color}))] rounded-full border-4 border-[hsl(var(--space-black))] flex items-center justify-center z-10`}>
                          <Icon className="w-4 h-4 text-black" />
                        </div>
                        <div className="w-1/2 pl-8">
                          <div className="glass-morphism rounded-xl p-6">
                            <h4 className={`text-xl font-bold text-[hsl(var(--${event.color}))] mb-2`}>
                              {event.title}
                            </h4>
                            <p className="text-gray-300">{event.description}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                );
              })}

              {/* Future */}
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className="glass-morphism rounded-xl p-6">
                    <h4 className="text-xl font-bold bg-gradient-to-r from-[hsl(var(--eco-green))] to-[hsl(var(--infrared-orange))] bg-clip-text text-transparent mb-2">
                      Planetary Intelligence
                    </h4>
                    <p className="text-gray-300">
                      Complete planetary nervous system deployment. Autonomous conservation actions preventing climate disasters before they occur.
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-[hsl(var(--eco-green))] to-[hsl(var(--infrared-orange))] rounded-full border-4 border-[hsl(var(--space-black))] flex items-center justify-center z-10">
                  <Infinity className="w-4 h-4 text-white" />
                </div>
                <div className="w-1/2 pl-8">
                  <div className="text-2xl font-bold text-gray-400">2025+</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <motion.div 
          className="grid md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`text-4xl font-bold text-[hsl(var(--${stat.color}))] mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <div className="text-center">
          <motion.h3 
            className="text-3xl font-bold mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text">Leading the Future</span>
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="glass-morphism rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-r from-[hsl(var(--${member.color}))] to-[hsl(var(--${member.color === 'eco-green' ? 'neon-blue' : member.color === 'neon-blue' ? 'infrared-orange' : 'eco-green'}))] flex items-center justify-center`}>
                  <span className="text-2xl font-bold text-black">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className={`text-lg font-bold text-[hsl(var(--${member.color}))] mb-2`}>
                  {member.name}
                </h4>
                <p className="text-sm text-gray-300 mb-2">{member.role}</p>
                <p className="text-xs text-gray-400">{member.background}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
