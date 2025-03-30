import { Router, Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import React, { useState } from "react";

// Use "/" during development and "/PersonalPortfolio-4" in production
const base = import.meta.env.DEV ? "/" : "/PersonalPortfolio-4";

function App() {
  const [isNight, setIsNight] = useState(true);
  const toggleDayNight = () => setIsNight(prev => !prev);

  return (
    <div className={isNight ? "dark" : ""}>
      <QueryClientProvider client={queryClient}>
        {/* Conditional base path */}
        <Router base={base}>
          <Switch>
            <Route path="/" component={() => <Home isNight={isNight} toggleDayNight={toggleDayNight} />} />
            <Route component={NotFound} />
          </Switch>
        </Router>
        <Toaster />
      </QueryClientProvider>
    </div>
  );
}

export default App;
