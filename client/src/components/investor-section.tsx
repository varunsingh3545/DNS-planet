import { motion } from "framer-motion";
import { TrendingUp, Rocket, Globe, CheckCircle, Download, Calendar, Shield, Lock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function InvestorSection() {
  const investmentHighlights = [
    {
      icon: TrendingUp,
      title: "Market Opportunity",
      color: "eco-green",
      stats: [
        { label: "Conservation Tech Market", value: "$18.4B" },
        { label: "Annual Growth Rate", value: "23%" },
        { label: "Addressable Market", value: "$85B by 2030" },
        { label: "Projected ROI", value: "25x" }
      ],
      description: "First-mover advantage in AI-powered global ecosystem monitoring with proven scalability across 50+ countries."
    },
    {
      icon: Rocket,
      title: "Technology Edge",
      color: "neon-blue",
      stats: [
        { label: "AI Agents", value: "6 Specialized" },
        { label: "Satellite Integration", value: "Real-time" },
        { label: "Predictive Engine", value: "Advanced" },
        { label: "Sensor Network", value: "Global" }
      ],
      description: "Proprietary technology stack with 47 patents pending and exclusive partnerships with major space agencies."
    },
    {
      icon: Globe,
      title: "Global Impact",
      color: "infrared-orange",
      stats: [
        { label: "Species Saved", value: "15,678" },
        { label: "Forests Protected", value: "2.3M hectares" },
        { label: "CO₂ Prevented", value: "890M tons" },
        { label: "Ocean Coverage", value: "34.2M km²" }
      ],
      description: "Measurable environmental impact with ESG compliance and UN SDG alignment for institutional investors."
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "Kleiner Perkins",
      role: "Lead Series A Investor",
      quote: "Revolutionary approach to conservation. The AI integration and real-time capabilities are unmatched in the market.",
      color: "eco-green"
    },
    {
      name: "Maria Santos",
      company: "Andreessen Horowitz",
      role: "Strategic Partner",
      quote: "The scalability and impact potential make this a flagship investment for sustainable technology portfolios.",
      color: "neon-blue"
    },
    {
      name: "James Chen",
      company: "Future Earth Capital",
      role: "Tech Investment Advisor",
      quote: "Best-in-class technology team with proven execution. This is the future of environmental monitoring.",
      color: "infrared-orange"
    }
  ];

  const fundingRoadmap = [
    {
      series: "A",
      amount: "$25M",
      description: "Platform scaling, AI enhancement, global expansion to 100+ countries",
      status: "Currently Raising",
      color: "eco-green",
      current: true
    },
    {
      series: "B",
      amount: "$75M",
      description: "Advanced AI research, space technology, conservation automation",
      status: "2025 Q2",
      color: "neon-blue",
      current: false
    },
    {
      series: "C",
      amount: "$150M",
      description: "Global platform dominance, policy integration, IPO preparation",
      status: "2026 Q4",
      color: "infrared-orange",
      current: false
    }
  ];

  return (
    <section id="investor" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--space-black))] via-[hsl(var(--space-dark))] to-[hsl(var(--neon-blue))]/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[hsl(var(--eco-green))] via-[hsl(var(--neon-blue))] to-[hsl(var(--infrared-orange))] bg-clip-text text-transparent">
              Back the Future of Conservation
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Join the investors powering the world's first planetary-scale conservation intelligence system. 
            Together, we're building the technology that will save our planet.
          </p>
        </motion.div>

        {/* Investment Highlights */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {investmentHighlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                className="glass-morphism rounded-2xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-[hsl(var(--${highlight.color}))] to-[hsl(var(--${highlight.color === 'eco-green' ? 'neon-blue' : highlight.color === 'neon-blue' ? 'infrared-orange' : 'eco-green'}))] flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className={`text-2xl font-bold text-[hsl(var(--${highlight.color}))]`}>
                    {highlight.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {highlight.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex justify-between">
                      <span className="text-gray-300">{stat.label}</span>
                      <span className={`text-[hsl(var(--${highlight.color}))] font-semibold`}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className={`mt-6 p-4 bg-[hsl(var(--${highlight.color}))]/10 rounded-lg border border-[hsl(var(--${highlight.color}))]/30`}>
                  <p className="text-sm text-gray-300">{highlight.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <motion.h3 
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text">Investor Confidence</span>
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="glass-morphism rounded-xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-[hsl(var(--${testimonial.color}))] rounded-full flex items-center justify-center`}>
                    <span className="text-black font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <blockquote className="text-gray-300 mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <cite className={`text-[hsl(var(--${testimonial.color}))] font-semibold`}>
                      {testimonial.name}
                    </cite>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Funding Roadmap */}
        <motion.div 
          className="glass-morphism rounded-2xl p-8 mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="gradient-text">Funding Roadmap</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {fundingRoadmap.map((round, index) => (
              <motion.div
                key={round.series}
                className={`text-center ${!round.current ? 'opacity-75' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: round.current ? 1 : 0.75, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-[hsl(var(--${round.color}))]/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 ${round.current ? `border-[hsl(var(--${round.color}))]` : `border-[hsl(var(--${round.color}))]/50`}`}>
                  <span className={`text-[hsl(var(--${round.color}))] font-bold text-xl`}>
                    {round.series}
                  </span>
                </div>
                <h4 className={`text-xl font-bold text-[hsl(var(--${round.color}))] mb-2`}>
                  Series {round.series}
                </h4>
                <div className="text-3xl font-bold text-white mb-2">{round.amount}</div>
                <p className="text-gray-300 text-sm mb-4">{round.description}</p>
                <div className={`text-xs text-[hsl(var(--${round.color}))] bg-[hsl(var(--${round.color}))]/10 px-3 py-1 rounded-full inline-block`}>
                  {round.status}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="glass-morphism rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-white">Ready to Save the Planet?</h3>
            <p className="text-xl text-gray-300 mb-8">
              Join the mission to deploy Earth's Digital Nervous System and create 
              the most advanced conservation platform ever built.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-12 py-4 bg-gradient-to-r from-[hsl(var(--eco-green))] to-[hsl(var(--neon-blue))] text-black font-bold text-xl rounded-xl hover:shadow-2xl hover:shadow-[hsl(var(--eco-green))]/25 transition-all duration-300 transform hover:scale-105">
                <Calendar className="mr-3" size={20} />
                Schedule Investor Meeting
              </Button>
              
              <Button 
                variant="outline"
                className="px-12 py-4 glass-morphism font-bold text-xl rounded-xl hover:bg-white/10 transition-all duration-300 border-2 border-[hsl(var(--eco-green))]/50 hover:border-[hsl(var(--eco-green))] text-[hsl(var(--eco-green))]"
              >
                <Download className="mr-3" size={20} />
                Download Pitch Deck
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <Shield className="mr-2 text-[hsl(var(--eco-green))]" size={16} />
                SOC 2 Compliant
              </div>
              <div className="flex items-center">
                <Lock className="mr-2 text-[hsl(var(--neon-blue))]" size={16} />
                Investor Protection
              </div>
              <div className="flex items-center">
                <Award className="mr-2 text-[hsl(var(--infrared-orange))]" size={16} />
                UN Certified
              </div>
            </div>
            
            <p className="text-gray-400 mt-6 text-sm">
              Contact: investors@digitalnervous.earth | +1 (555) 123-4567
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
