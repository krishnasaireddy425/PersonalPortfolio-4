import { Router, Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

// Use "/" during development and "/PersonalPortfolio-4" in production
const base = import.meta.env.DEV ? "/" : "/PersonalPortfolio-4";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Conditional base path */}
      <Router base={base}>
        <Switch>
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}


export default App;
