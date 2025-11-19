import { Play, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GuideSection() {
  return (
    <section className="w-full py-24 bg-[#050505] text-white relative overflow-hidden">
      {/* Background Ambiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/50">
            Getting Started
          </h2>
          <p className="text-white/40 text-lg md:text-xl font-light tracking-wide max-w-2xl">
            Watch the walkthrough to see the pipeline in action, then download the latest build to run it locally.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Video Area (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2 w-full">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-emerald-500/10 bg-white/5 group">
              {/* Placeholder for YouTube Iframe */}
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=placeholder" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
              
              {/* Overlay (Optional - if we wanted a cover image before clicking play, but iframe handles it) */}
            </div>
          </div>

          {/* Actions Area */}
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-white">Instant Setup</h3>
              <p className="text-white/50 leading-relaxed">
                Get the pre-configured environment with all dependencies included. No complex installation required.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Button 
                className="h-14 text-lg bg-white text-black hover:bg-white/90 transition-all rounded-xl group"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="mr-2 h-5 w-5 group-hover:-translate-y-0.5 transition-transform" />
                Download Build
              </Button>
              
              <Button 
                variant="outline" 
                className="h-14 text-lg border-white/10 bg-transparent text-white hover:bg-white/5 hover:text-white hover:border-white/20 rounded-xl"
                onClick={() => window.open('#', '_blank')}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Documentation
              </Button>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-white/80">Latest Version: v0.9.2-beta</span>
              </div>
              <p className="text-xs text-white/40 font-mono">
                SHA: 8f2a...9c1b • Updated 2h ago
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
