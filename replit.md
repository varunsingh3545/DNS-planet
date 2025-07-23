# Digital Nervous System - Conservation Platform

## Overview

This is a modern full-stack web application built for environmental conservation and monitoring. The platform serves as a "Digital Nervous System of the Planet" providing real-time data visualization, wildlife tracking, marine conservation tools, climate intelligence, and collaborative research capabilities. The application features a futuristic design with space-themed aesthetics and comprehensive environmental monitoring dashboards.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system featuring space/cosmic themes
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for fast, optimized server bundling

### Database Architecture
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via Drizzle with @neondatabase/serverless)
- **Schema Location**: Shared schema in `/shared/schema.ts` for type consistency
- **Migrations**: Drizzle migrations in `/migrations` directory

## Key Components

### Client-Side Structure
- **Pages**: Home, Wildlife, Marine, Climate, Dashboard, Contact, and 404 pages
- **Components**: Reusable UI components including Navigation, Starfield animation
- **Hooks**: Custom React hooks for mobile detection and toast notifications
- **Assets**: Background images and visual assets for thematic pages

### Server-Side Structure
- **Routes**: Centralized route registration in `/server/routes.ts`
- **Storage**: Abstract storage interface with in-memory implementation for development
- **Vite Integration**: Development server with HMR and production static file serving

### Shared Resources
- **Schema**: Database schema definitions with Zod validation
- **Types**: Shared TypeScript types between client and server

## Data Flow

1. **Client Requests**: React frontend makes API calls to Express backend
2. **Server Processing**: Express routes handle requests using storage interface
3. **Database Operations**: Drizzle ORM executes type-safe database queries
4. **Response Handling**: Data flows back through Express to React Query for caching
5. **UI Updates**: React components re-render with fresh data

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Hook Form)
- Express.js for server framework
- Drizzle ORM with PostgreSQL adapter
- Neon Database serverless connection

### UI and Styling
- Radix UI component primitives for accessibility
- Tailwind CSS for utility-first styling
- Lucide React for consistent iconography
- Class Variance Authority for component variants

### Development Tools
- Vite with React plugin for development
- TypeScript for type checking
- ESBuild for production builds
- Replit-specific plugins for development environment

### Data and State Management
- TanStack Query for server state
- Zod for runtime validation
- Date-fns for date manipulation

## Deployment Strategy

### Development Environment
- Vite dev server with HMR for frontend
- tsx for running TypeScript server directly
- Shared development database via Neon serverless

### Production Build Process
1. **Frontend Build**: Vite builds React app to `/dist/public`
2. **Backend Build**: esbuild bundles server code to `/dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command
4. **Serving**: Express serves built frontend and API routes

### Environment Configuration
- Development: NODE_ENV=development with live reloading
- Production: NODE_ENV=production with optimized builds
- Database: CONNECTION_URL required for PostgreSQL connection

The application follows a modern monorepo structure with clear separation between client, server, and shared code while maintaining type safety throughout the stack.