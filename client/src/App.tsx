import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Hero from "@/components/Hero";
import PhaseSection from "@/components/PhaseSection";
import FeaturesSection from "@/components/FeaturesSection";
import PipelineSection from "@/components/PipelineSection";
import GuideSection from "@/components/GuideSection";
import { Analytics } from "@vercel/analytics/react";

function Landing() {
  return (
    <main className="relative bg-[#050505] min-h-screen text-white selection:bg-emerald-500/30 overflow-hidden">
      {/* Global Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
      
      {/* Content (z-10 to sit above background) */}
      <div className="relative z-10">
        <Hero />
        <FeaturesSection />
        <PipelineSection />
        <PhaseSection 
          onDownloadClick={() => console.log("Analytics: Download Clicked")}
          onGithubClick={() => console.log("Analytics: GitHub Clicked")}
          onDockerClick={() => console.log("Analytics: Docker Clicked")}
          onCountdownStart={() => console.log("Analytics: Countdown Started")}
          onCountdownEnd={() => console.log("Analytics: Countdown Ended")}
        />
        <GuideSection />
      </div>
    </main>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
