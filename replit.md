# replit.md

## Overview

This is a full-stack environmental conservation platform that serves as a "Digital Nervous System of the Planet". It's built as a modern web application showcasing AI-powered ecosystem monitoring, real-time environmental data visualization, and conservation research tools. The platform features multiple user-facing sections including AI agents monitoring, dashboard analytics, public conservation layer, research portal, and live Earth visualization.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side navigation
- **Styling**: Tailwind CSS with custom conservation theme colors (eco-green, neon-blue, infrared-orange)
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and interactive elements
- **State Management**: TanStack Query for server state and data fetching
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API endpoints
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions
- **Development Setup**: Custom Vite integration for full-stack development experience

### Key Design Decisions
- **Monorepo Structure**: Client, server, and shared code organized in separate directories
- **Type Safety**: Full TypeScript implementation across frontend and backend
- **API Design**: RESTful endpoints with consistent JSON responses
- **Component Architecture**: Modular React components with reusable UI primitives
- **Responsive Design**: Mobile-first approach with glass morphism visual effects

## Key Components

### Core Pages and Sections
- **Hero Section**: Landing page with animated Earth globe and call-to-action
- **AI Agents Panel**: Real-time monitoring of 6 specialized AI agents (wildlife, marine, climate, forest, research, education)
- **Dashboard**: Live data visualization with charts and metrics
- **Public Layer**: Open data access and citizen science participation
- **Research Portal**: Authenticated section for researchers and institutions
- **Live Earth**: Interactive global monitoring with hotspot visualization
- **About Section**: Mission timeline and organizational information
- **Investor Section**: Investment highlights and market opportunity data

### Data Models
- **Users**: Authentication, roles (user/researcher/admin), institution affiliations
- **Projects**: Conservation projects with type categorization and participant tracking
- **Alerts**: Environmental alerts with severity levels and location data
- **Sensor Data**: Time-series data from monitoring devices with location metadata

### UI Component System
- **Design System**: Consistent component library using Radix UI primitives
- **Theme**: Dark space theme with conservation-focused color palette
- **Responsive**: Mobile-optimized layouts with progressive enhancement
- **Accessibility**: ARIA-compliant components with keyboard navigation support

## Data Flow

### Frontend Data Management
1. **Query Client**: TanStack Query handles API calls with automatic caching and refetching
2. **Real-time Updates**: Polling intervals for live data (3-30 seconds depending on data type)
3. **Error Handling**: Consistent error boundaries and user feedback
4. **Loading States**: Skeleton components and progressive loading

### API Endpoints
- `GET /api/dashboard` - Main dashboard statistics and recent data
- `GET /api/ai-agents` - AI agent status and performance metrics
- `GET /api/alerts` - Active environmental alerts
- `GET /api/projects` - Conservation projects listing
- `GET /api/sensor-data` - Recent sensor readings with filtering

### Database Storage Strategy
- **In-Memory Development**: MemStorage class for development and demo purposes
- **Production Ready**: Drizzle ORM configuration for PostgreSQL deployment
- **Schema Management**: Type-safe database schema with Zod validation
- **Migration Support**: Drizzle Kit for database migrations and schema updates

## External Dependencies

### Core Technologies
- **Database**: Neon Database (serverless PostgreSQL)
- **Styling**: Tailwind CSS with PostCSS processing
- **Icons**: Lucide React for consistent iconography
- **Charts**: Recharts for data visualization components
- **Animations**: Framer Motion for smooth user interactions

### Development Tools
- **Build System**: Vite for fast development and optimized production builds
- **Code Quality**: TypeScript for type safety across the entire stack
- **Development Experience**: Hot module replacement and error overlays
- **Deployment**: ESBuild for server-side bundling

### Third-party Integrations
- **UI Components**: Radix UI for accessible component primitives
- **Form Handling**: React Hook Form with Zod validation schemas
- **Date Utilities**: date-fns for time formatting and manipulation
- **Utility Libraries**: clsx and tailwind-merge for conditional styling

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express API integration
- **Hot Reloading**: Full-stack hot module replacement
- **Environment Variables**: DATABASE_URL for database connection
- **Logging**: Custom request logging with performance metrics

### Production Build
- **Frontend**: Static assets built to `dist/public` directory
- **Backend**: Server bundled with ESBuild for Node.js deployment
- **Database**: PostgreSQL migrations managed through Drizzle Kit
- **Static Serving**: Express serves built frontend assets in production

### Performance Optimizations
- **Code Splitting**: Vite handles automatic code splitting
- **Asset Optimization**: Tailwind CSS purging and minification
- **Caching Strategy**: Query caching with stale-while-revalidate patterns
- **Bundle Analysis**: Production builds optimized for minimal bundle size

The architecture prioritizes developer experience with full TypeScript coverage, modern tooling, and a component-based approach while maintaining production readiness with proper database integration and deployment strategies.