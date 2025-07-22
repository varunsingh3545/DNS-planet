import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  role: text("role").notNull().default("user"), // user, researcher, admin
  institution: text("institution"),
  isResearcher: boolean("is_researcher").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  type: text("type").notNull(), // forest, marine, climate, wildlife, research, education
  status: text("status").notNull().default("active"), // active, paused, completed
  participants: integer("participants").notNull().default(0),
  leadResearcherId: integer("lead_researcher_id").references(() => users.id),
  data: jsonb("data"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const alerts = pgTable("alerts", {
  id: serial("id").primaryKey(),
  type: text("type").notNull(), // climate, forest, wildlife, marine
  severity: text("severity").notNull(), // low, medium, high, critical
  title: text("title").notNull(),
  description: text("description").notNull(),
  location: text("location").notNull(),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const sensorData = pgTable("sensor_data", {
  id: serial("id").primaryKey(),
  sensorId: text("sensor_id").notNull(),
  type: text("type").notNull(), // temperature, humidity, co2, wildlife_count, etc.
  value: text("value").notNull(),
  location: jsonb("location"), // lat, lng
  timestamp: timestamp("timestamp").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  email: true,
  password: true,
  institution: true,
});

export const insertProjectSchema = createInsertSchema(projects).pick({
  name: true,
  description: true,
  type: true,
});

export const insertAlertSchema = createInsertSchema(alerts).pick({
  type: true,
  severity: true,
  title: true,
  description: true,
  location: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;
export type InsertAlert = z.infer<typeof insertAlertSchema>;
export type Alert = typeof alerts.$inferSelect;
export type SensorData = typeof sensorData.$inferSelect;
