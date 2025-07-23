import React from 'react';
import { BarChart3, Upload, Users, Database, Shield, Settings, FileText, Map } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Dashboard = () => {
  const recentFiles = [
    { name: 'Amazon Deforestation Report 2024', type: 'PDF', size: '2.4 MB', uploaded: '2 hours ago' },
    { name: 'Marine Species Database', type: 'CSV', size: '15.2 MB', uploaded: '5 hours ago' },
    { name: 'Climate Model Results', type: 'JSON', size: '892 KB', uploaded: '1 day ago' },
    { name: 'Satellite Imagery Analysis', type: 'ZIP', size: '125 MB', uploaded: '2 days ago' }
  ];

  const grantOpportunities = [
    { title: 'Wildlife Protection Initiative', amount: '$2.5M', deadline: '15 days', status: 'Open' },
    { title: 'Ocean Conservation Fund', amount: '$1.8M', deadline: '28 days', status: 'Open' },
    { title: 'Climate Research Grant', amount: '$3.2M', deadline: '42 days', status: 'Open' },
    { title: 'Ecosystem Restoration', amount: '$950K', deadline: '7 days', status: 'Urgent' }
  ];

  const teamMembers = [
    { name: 'Dr. Sarah Chen', role: 'Marine Biologist', status: 'Online', avatar: 'SC' },
    { name: 'Prof. James Wright', role: 'Climate Scientist', status: 'Away', avatar: 'JW' },
    { name: 'Dr. Maria Rodriguez', role: 'Conservation Specialist', status: 'Online', avatar: 'MR' },
    { name: 'Dr. Ahmed Hassan', role: 'Data Analyst', status: 'Offline', avatar: 'AH' }
  ];

  return (
    <div className="min-h-screen bg-dashboard pt-20">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-dashboard-foreground mb-2">
                Conservation Dashboard
              </h1>
              <p className="text-dashboard-foreground/80">
                Secure research collaboration and data management platform
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-dashboard-accent/20 text-dashboard-accent">
                <Shield className="h-3 w-3 mr-1" />
                Secure Access
              </Badge>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Active Projects', value: '24', icon: Database, color: 'text-dashboard-accent' },
            { label: 'Team Members', value: '48', icon: Users, color: 'text-emerald-400' },
            { label: 'Data Files', value: '1,247', icon: FileText, color: 'text-blue-400' },
            { label: 'Grant Applications', value: '7', icon: BarChart3, color: 'text-purple-400' }
          ].map((stat, index) => (
            <Card key={index} className="glass-card text-center hover:bg-dashboard-accent/10">
              <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
              <div className="text-2xl font-bold text-dashboard-foreground mb-1">{stat.value}</div>
              <div className="text-dashboard-foreground/70">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          
          {/* File Upload & Management */}
          <Card className="lg:col-span-2 glass-card">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-dashboard-foreground mb-6 flex items-center">
                <Upload className="h-6 w-6 text-dashboard-accent mr-2" />
                Research Data Management
              </h2>
              
              {/* Upload Area */}
              <div className="border-2 border-dashed border-dashboard-accent/30 rounded-lg p-8 mb-6 text-center hover:border-dashboard-accent/50 transition-colors cursor-pointer">
                <Upload className="h-12 w-12 text-dashboard-accent/60 mx-auto mb-4" />
                <p className="text-dashboard-foreground font-medium mb-2">
                  Drag & drop files or click to browse
                </p>
                <p className="text-dashboard-foreground/60 text-sm">
                  Supported: CSV, JSON, PDF, Images (Max 500MB)
                </p>
              </div>
              
              {/* Recent Files */}
              <h3 className="text-lg font-semibold text-dashboard-foreground mb-4">Recent Files</h3>
              <div className="space-y-3">
                {recentFiles.map((file, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-dashboard-accent/10 hover:bg-dashboard-accent/20 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-dashboard-accent/30 rounded flex items-center justify-center">
                        <FileText className="h-4 w-4 text-dashboard-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-dashboard-foreground">{file.name}</p>
                        <p className="text-sm text-dashboard-foreground/60">{file.size} • {file.uploaded}</p>
                      </div>
                    </div>
                    <Badge variant="secondary">{file.type}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Team Collaboration */}
          <Card className="glass-card">
            <div className="p-6">
              <h2 className="text-xl font-bold text-dashboard-foreground mb-6 flex items-center">
                <Users className="h-5 w-5 text-dashboard-accent mr-2" />
                Team Members
              </h2>
              
              <div className="space-y-4">
                {teamMembers.map((member, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-dashboard-accent/10 transition-colors"
                  >
                    <div className="w-10 h-10 bg-dashboard-accent rounded-full flex items-center justify-center text-sm font-bold">
                      {member.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-dashboard-foreground">{member.name}</p>
                      <p className="text-sm text-dashboard-foreground/70">{member.role}</p>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${
                      member.status === 'Online' ? 'bg-emerald-400' :
                      member.status === 'Away' ? 'bg-yellow-400' : 'bg-gray-400'
                    }`} />
                  </div>
                ))}
              </div>
              
              <Button className="w-full mt-6 btn-secondary">
                <Users className="h-4 w-4 mr-2" />
                Manage Team
              </Button>
            </div>
          </Card>
        </div>

        {/* Grant Opportunities */}
        <Card className="glass-card mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-dashboard-foreground mb-6 flex items-center">
              <BarChart3 className="h-6 w-6 text-dashboard-accent mr-2" />
              Grant Opportunities
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {grantOpportunities.map((grant, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg bg-dashboard-accent/10 hover:bg-dashboard-accent/20 transition-all duration-300 border border-dashboard-accent/20"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-dashboard-foreground">{grant.title}</h3>
                    <Badge className={
                      grant.status === 'Urgent' ? 'bg-red-500/20 text-red-300' : 'bg-emerald-500/20 text-emerald-300'
                    }>
                      {grant.status}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-dashboard-foreground/70">Amount:</span>
                      <span className="text-dashboard-foreground font-medium">{grant.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dashboard-foreground/70">Deadline:</span>
                      <span className={grant.status === 'Urgent' ? 'text-red-400 font-medium' : 'text-dashboard-foreground'}>
                        {grant.deadline}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-dashboard-accent hover:bg-dashboard-accent/80 text-sm">
                    Apply Now
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Interactive Map */}
        <Card className="glass-card">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-dashboard-foreground mb-4 flex items-center">
              <Map className="h-6 w-6 text-dashboard-accent mr-2" />
              Project Locations & Data Points
            </h2>
            <div className="h-80 bg-dashboard-accent/20 rounded-lg flex items-center justify-center">
              <div className="text-center text-dashboard-foreground/60">
                <Map className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p>Interactive project mapping interface</p>
                <p className="text-sm">Real-time data collection points and research locations</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;