import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, Switch } from "wouter";
import Navigation from "@/components/Navigation";
import Home from "./pages/Home";
import Wildlife from "./pages/Wildlife";
import Marine from "./pages/Marine";
import Climate from "./pages/Climate";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <div className="min-h-screen bg-background">
          <Navigation />
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/wildlife" component={Wildlife} />
            <Route path="/marine" component={Marine} />
            <Route path="/climate" component={Climate} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
