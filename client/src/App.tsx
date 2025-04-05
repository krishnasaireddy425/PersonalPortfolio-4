import { Router, Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import React, { useState } from "react";

// Use "/" for both development and production with custom domain
const base = "/";

function App() {
  const [isNight, setIsNight] = useState(true);
  const toggleDayNight = () => setIsNight(prev => !prev);

  return (
    <div className={isNight ? "dark" : ""}>
      <QueryClientProvider client={queryClient}>
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
