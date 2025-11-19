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
import pipelineImage from "@assets/image_1763585855428.png";

function Landing() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-emerald-500/30">
      <Hero />
      <FeaturesSection />
      <PipelineSection imageUrl={pipelineImage} />
      <PhaseSection 
        onDownloadClick={() => console.log("Analytics: Download Clicked")}
        onGithubClick={() => console.log("Analytics: GitHub Clicked")}
        onDockerClick={() => console.log("Analytics: Docker Clicked")}
        onCountdownStart={() => console.log("Analytics: Countdown Started")}
        onCountdownEnd={() => console.log("Analytics: Countdown Ended")}
      />
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
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
