import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema, insertProjectSchema, insertAlertSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Dashboard data endpoint
  app.get("/api/dashboard", async (req, res) => {
    try {
      const [projects, alerts, sensorData] = await Promise.all([
        storage.getProjects(),
        storage.getActiveAlerts(),
        storage.getRecentSensorData(10),
      ]);

      const stats = {
        speciesMonitored: 247382,
        activeSensors: 45678,
        activeAlerts: alerts.length,
        dataProcessed: 1.2, // TB per hour
        ecosystemHealth: 98.7,
        forestCoverage: 892000000, // hectares
        treesMonitored: 15200000000,
        oceanCoverage: 34200000, // km²
        marineSpecies: 89450,
        climateModels: 127,
        weatherStations: 45678,
      };

      res.json({
        stats,
        projects: projects.slice(0, 5),
        alerts: alerts.slice(0, 10),
        sensorData,
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch dashboard data" });
    }
  });

  // AI Agents status endpoint
  app.get("/api/ai-agents", async (req, res) => {
    try {
      const agents = [
        {
          id: "wildlife",
          name: "Wildlife AI",
          status: "active",
          activeCameras: 12450,
          speciesDetected: 247382,
          conservationAlerts: 23,
        },
        {
          id: "marine",
          name: "Marine AI",
          status: "active",
          oceanCoverage: 34200000,
          marineSpecies: 89450,
          pollutionAlerts: 7,
        },
        {
          id: "climate",
          name: "Climate AI",
          status: "active",
          weatherStations: 45678,
          climateModels: 127,
          riskAssessments: 12,
        },
        {
          id: "forest",
          name: "Forest AI",
          status: "active",
          forestCoverage: 892000000,
          treesMonitored: 15200000000,
          deforestationAlerts: 156,
        },
        {
          id: "research",
          name: "Research AI",
          status: "active",
          researchPapers: 234567,
          activeProjects: 1234,
          collaborators: 8901,
        },
        {
          id: "education",
          name: "Education AI",
          status: "active",
          studentsReached: 567890,
          coursesAvailable: 156,
          certifications: 23456,
        },
      ];

      res.json({ agents });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch AI agents data" });
    }
  });

  // Projects endpoints
  app.get("/api/projects", async (req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json({ projects });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch projects" });
    }
  });

  app.post("/api/projects", async (req, res) => {
    try {
      const projectData = insertProjectSchema.parse(req.body);
      const project = await storage.createProject(projectData);
      res.json({ project });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid project data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to create project" });
      }
    }
  });

  // Alerts endpoints
  app.get("/api/alerts", async (req, res) => {
    try {
      const { type } = req.query;
      let alerts;
      
      if (type && typeof type === 'string') {
        alerts = await storage.getAlertsByType(type);
      } else {
        alerts = await storage.getActiveAlerts();
      }
      
      res.json({ alerts });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch alerts" });
    }
  });

  // Sensor data endpoint
  app.get("/api/sensor-data", async (req, res) => {
    try {
      const { type, limit } = req.query;
      let data;
      
      if (type && typeof type === 'string') {
        data = await storage.getSensorDataByType(type, limit ? parseInt(limit as string) : 20);
      } else {
        data = await storage.getRecentSensorData(limit ? parseInt(limit as string) : 50);
      }
      
      res.json({ data });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch sensor data" });
    }
  });

  // User authentication (mock)
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      
      if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
      }

      const user = await storage.getUserByEmail(email);
      
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // In a real app, you'd verify the password hash
      // For demo purposes, we'll accept any password for existing users
      
      res.json({ 
        user: { 
          id: user.id, 
          username: user.username, 
          email: user.email, 
          role: user.role,
          institution: user.institution,
          isResearcher: user.isResearcher,
        } 
      });
    } catch (error) {
      res.status(500).json({ error: "Authentication failed" });
    }
  });

  // Research portal data
  app.get("/api/research/dashboard", async (req, res) => {
    try {
      const projects = await storage.getProjects();
      const activeProjects = projects.filter(p => p.status === "active");
      
      const collaborators = [
        { name: "Dr. Sarah Chen", status: "online", activity: "Analyzing deforestation patterns" },
        { name: "Dr. Marcus Johnson", status: "online", activity: "Marine biodiversity study" },
        { name: "Dr. Alicia Patel", status: "offline", activity: "Climate model validation" },
      ];

      res.json({
        stats: {
          activeProjects: activeProjects.length,
          researchers: 8901,
          dataProcessed: 456, // TB
        },
        projects: activeProjects.slice(0, 5),
        collaborators,
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch research dashboard data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
