import { users, projects, alerts, sensorData, type User, type InsertUser, type Project, type InsertProject, type Alert, type InsertAlert, type SensorData } from "@shared/schema";

export interface IStorage {
  // User management
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Project management
  getProjects(): Promise<Project[]>;
  getProjectsByType(type: string): Promise<Project[]>;
  createProject(project: InsertProject & { leadResearcherId?: number }): Promise<Project>;
  
  // Alert management
  getActiveAlerts(): Promise<Alert[]>;
  getAlertsByType(type: string): Promise<Alert[]>;
  createAlert(alert: InsertAlert): Promise<Alert>;
  
  // Sensor data
  getRecentSensorData(limit?: number): Promise<SensorData[]>;
  getSensorDataByType(type: string, limit?: number): Promise<SensorData[]>;
  addSensorData(data: Omit<SensorData, 'id'>): Promise<SensorData>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User> = new Map();
  private projects: Map<number, Project> = new Map();
  private alerts: Map<number, Alert> = new Map();
  private sensorData: SensorData[] = [];
  private currentUserId = 1;
  private currentProjectId = 1;
  private currentAlertId = 1;
  private currentSensorId = 1;

  constructor() {
    this.seedData();
  }

  private seedData() {
    // Seed some initial data
    const sampleUser: User = {
      id: this.currentUserId++,
      username: "dr.sarah.chen",
      email: "s.chen@conservation.org",
      password: "hashed_password",
      role: "researcher",
      institution: "Stanford Marine Lab",
      isResearcher: true,
      createdAt: new Date(),
    };
    this.users.set(sampleUser.id, sampleUser);

    // Sample projects
    const projects = [
      { name: "Amazon Basin Analysis", description: "Real-time deforestation monitoring in the Amazon rainforest", type: "forest", participants: 12 },
      { name: "Coral Reef Monitoring", description: "Great Barrier Reef health assessment using underwater sensors", type: "marine", participants: 8 },
      { name: "Arctic Ice Tracking", description: "Climate change impact on polar ice sheets", type: "climate", participants: 15 },
      { name: "Wildlife Migration", description: "Tracking migratory patterns of endangered species", type: "wildlife", participants: 20 },
    ];

    projects.forEach(proj => {
      const project: Project = {
        id: this.currentProjectId++,
        ...proj,
        status: "active",
        leadResearcherId: sampleUser.id,
        data: null,
        createdAt: new Date(),
      };
      this.projects.set(project.id, project);
    });

    // Sample alerts
    const alertsData = [
      { type: "forest", severity: "high", title: "Deforestation Alert", description: "Illegal logging detected in Amazon Basin", location: "Amazon, Brazil" },
      { type: "marine", severity: "medium", title: "Coral Bleaching", description: "Temperature anomaly causing coral stress", location: "Great Barrier Reef, Australia" },
      { type: "climate", severity: "critical", title: "Temperature Spike", description: "Record high temperatures in Arctic region", location: "Greenland" },
      { type: "wildlife", severity: "high", title: "Migration Disruption", description: "Unusual migration patterns detected", location: "Serengeti, Tanzania" },
    ];

    alertsData.forEach(alertData => {
      const alert: Alert = {
        id: this.currentAlertId++,
        ...alertData,
        isActive: true,
        createdAt: new Date(Date.now() - Math.random() * 24 * 60 * 60 * 1000), // Random time within last 24h
      };
      this.alerts.set(alert.id, alert);
    });

    // Sample sensor data
    const sensorTypes = ['temperature', 'humidity', 'co2', 'wildlife_count', 'forest_coverage', 'ocean_ph'];
    for (let i = 0; i < 100; i++) {
      this.sensorData.push({
        id: this.currentSensorId++,
        sensorId: `SENSOR_${Math.random().toString(36).substr(2, 9)}`,
        type: sensorTypes[Math.floor(Math.random() * sensorTypes.length)],
        value: (Math.random() * 100).toFixed(2),
        location: {
          lat: (Math.random() - 0.5) * 180,
          lng: (Math.random() - 0.5) * 360,
        },
        timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000), // Random time within last week
      });
    }
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = {
      ...insertUser,
      id: this.currentUserId++,
      role: "user",
      institution: insertUser.institution ?? null,
      isResearcher: false,
      createdAt: new Date(),
    };
    this.users.set(user.id, user);
    return user;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProjectsByType(type: string): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(project => project.type === type);
  }

  async createProject(projectData: InsertProject & { leadResearcherId?: number }): Promise<Project> {
    const project: Project = {
      ...projectData,
      id: this.currentProjectId++,
      status: "active",
      participants: 0,
      leadResearcherId: projectData.leadResearcherId ?? null,
      data: null,
      createdAt: new Date(),
    };
    this.projects.set(project.id, project);
    return project;
  }

  async getActiveAlerts(): Promise<Alert[]> {
    return Array.from(this.alerts.values())
      .filter(alert => alert.isActive)
      .sort((a, b) => b.createdAt!.getTime() - a.createdAt!.getTime());
  }

  async getAlertsByType(type: string): Promise<Alert[]> {
    return Array.from(this.alerts.values())
      .filter(alert => alert.type === type && alert.isActive)
      .sort((a, b) => b.createdAt!.getTime() - a.createdAt!.getTime());
  }

  async createAlert(alertData: InsertAlert): Promise<Alert> {
    const alert: Alert = {
      ...alertData,
      id: this.currentAlertId++,
      isActive: true,
      createdAt: new Date(),
    };
    this.alerts.set(alert.id, alert);
    return alert;
  }

  async getRecentSensorData(limit = 50): Promise<SensorData[]> {
    return this.sensorData
      .sort((a, b) => b.timestamp!.getTime() - a.timestamp!.getTime())
      .slice(0, limit);
  }

  async getSensorDataByType(type: string, limit = 20): Promise<SensorData[]> {
    return this.sensorData
      .filter(data => data.type === type)
      .sort((a, b) => b.timestamp!.getTime() - a.timestamp!.getTime())
      .slice(0, limit);
  }

  async addSensorData(data: Omit<SensorData, 'id'>): Promise<SensorData> {
    const sensorDataEntry: SensorData = {
      ...data,
      id: this.currentSensorId++,
    };
    this.sensorData.push(sensorDataEntry);
    return sensorDataEntry;
  }
}

export const storage = new MemStorage();
