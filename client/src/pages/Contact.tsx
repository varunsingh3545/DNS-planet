import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Users, Zap, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    inquiryType: 'partnership'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const partnerships = [
    {
      icon: Users,
      title: 'Research Institutions',
      description: 'Collaborate with universities and research organizations for data sharing and joint studies.',
      benefits: ['Data access', 'Research collaboration', 'Publication opportunities']
    },
    {
      icon: Zap,
      title: 'Technology Partners',
      description: 'Integrate with our API for real-time environmental data and conservation insights.',
      benefits: ['API access', 'Technical support', 'Custom integrations']
    },
    {
      icon: Globe,
      title: 'Conservation Organizations',
      description: 'Join our global network of conservation groups working to protect ecosystems.',
      benefits: ['Resource sharing', 'Joint campaigns', 'Global network access']
    }
  ];

  return (
    <div className="min-h-screen bg-contact relative">
      {/* Glassmorphism background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-contact/60 to-background/80" />
      
      <div className="relative z-10 pt-20">
        <div className="container mx-auto px-4 py-8">
          
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <Mail className="h-16 w-16 text-contact-accent mx-auto mb-4 animate-float" />
            <h1 className="text-4xl md:text-5xl font-bold text-contact-foreground mb-4">
              Connect & Collaborate
            </h1>
            <p className="text-xl text-contact-foreground/80 max-w-3xl mx-auto">
              Partner with us to build the future of environmental conservation and planetary intelligence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            
            {/* Contact Form */}
            <Card className="glass-card">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-contact-foreground mb-6 flex items-center">
                  <Send className="h-6 w-6 text-contact-accent mr-2" />
                  Get in Touch
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-contact-foreground mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-contact-accent/10 border-contact-accent/30 text-contact-foreground"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-contact-foreground mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-contact-accent/10 border-contact-accent/30 text-contact-foreground"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="organization" className="text-contact-foreground mb-2 block">
                      Organization
                    </Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="bg-contact-accent/10 border-contact-accent/30 text-contact-foreground"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="inquiryType" className="text-contact-foreground mb-2 block">
                      Inquiry Type
                    </Label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-contact-accent/10 border border-contact-accent/30 rounded-md text-contact-foreground"
                    >
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="api">API Access Request</option>
                      <option value="research">Research Collaboration</option>
                      <option value="media">Media & Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-contact-foreground mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="bg-contact-accent/10 border-contact-accent/30 text-contact-foreground"
                      placeholder="Tell us about your project, research, or how you'd like to collaborate..."
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-contact-accent hover:bg-contact-accent/80 text-contact-foreground font-medium py-3"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Direct Contact */}
              <Card className="glass-card">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-contact-foreground mb-4">
                    Direct Contact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-contact-foreground/80">
                      <Mail className="h-5 w-5 text-contact-accent" />
                      <span>partnerships@digitalnervoussystem.org</span>
                    </div>
                    <div className="flex items-center space-x-3 text-contact-foreground/80">
                      <Phone className="h-5 w-5 text-contact-accent" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3 text-contact-foreground/80">
                      <MapPin className="h-5 w-5 text-contact-accent" />
                      <span>Global Conservation Network HQ</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="glass-card">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-contact-foreground mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <Button className="w-full justify-start bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-600/30">
                      <Zap className="h-4 w-4 mr-2" />
                      Request API Access
                    </Button>
                    <Button className="w-full justify-start bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-600/30">
                      <Users className="h-4 w-4 mr-2" />
                      Join Research Network
                    </Button>
                    <Button className="w-full justify-start bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-600/30">
                      <Globe className="h-4 w-4 mr-2" />
                      Become a Partner
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Location Map Placeholder */}
              <Card className="glass-card">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-contact-foreground mb-4">
                    Global Network
                  </h3>
                  <div className="h-48 bg-contact-accent/20 rounded-lg flex items-center justify-center">
                    <div className="text-center text-contact-foreground/60">
                      <MapPin className="h-12 w-12 mx-auto mb-3 opacity-50" />
                      <p>Global Partnership Network</p>
                      <p className="text-sm">Connected conservation hubs worldwide</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Partnership Types */}
          <section>
            <h2 className="text-3xl font-bold text-contact-foreground text-center mb-12">
              Partnership Opportunities
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {partnerships.map((partnership, index) => (
                <Card key={index} className="glass-card text-center hover:bg-contact-accent/10 transition-all duration-300">
                  <div className="p-6">
                    <partnership.icon className="h-12 w-12 text-contact-accent mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-contact-foreground mb-3">
                      {partnership.title}
                    </h3>
                    <p className="text-contact-foreground/80 mb-4">
                      {partnership.description}
                    </p>
                    <div className="space-y-2">
                      {partnership.benefits.map((benefit, benefitIndex) => (
                        <div 
                          key={benefitIndex}
                          className="text-sm text-contact-foreground/70 bg-contact-accent/10 px-3 py-1 rounded-full"
                        >
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;