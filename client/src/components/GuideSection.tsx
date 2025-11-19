import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GuideSection() {
  return (
    <section className="w-full py-24 bg-transparent text-white relative overflow-hidden">
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
            </div>
          </div>

          {/* Actions Area */}
          <div className="flex flex-col gap-8 justify-center h-full">
            <div className="flex flex-col gap-4">
              <Button 
                className="h-14 text-lg bg-white text-black hover:bg-white/90 transition-all rounded-xl group w-full"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="mr-2 h-5 w-5 group-hover:-translate-y-0.5 transition-transform" />
                Download Guide
              </Button>
            </div>
          </div>
          
        </div>

        {/* Footer */}
        <div className="mt-32 w-full border-t border-white/5 pt-12 pb-12 text-center">
          <p className="text-white/20 text-xs">
             © 2025 OFRADAR Project. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
