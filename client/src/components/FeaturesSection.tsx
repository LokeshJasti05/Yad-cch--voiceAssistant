/* reference_screenshot: /mnt/data/dc1259e0-94a9-4168-be66-671b8c0c23c3.png */
import { Search, FileText, Code2, ImageIcon } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="w-full py-24 bg-[#050505] text-white overflow-hidden relative">
      {/* Background Ambiance */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-20 md:mb-32 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/50">
            Engineered for Focus
          </h2>
          <p className="text-white/40 text-lg md:text-xl font-light tracking-wide max-w-md border-l border-white/10 pl-6">
            Powerful primitives that get out of your way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Column 1 */}
          <div className="flex flex-col gap-6 md:gap-16">
            {/* Card 1: Intelligent Web Search */}
            <div 
              className="group relative p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              tabIndex={0}
              aria-label="Semantic Search"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/5 flex items-center justify-center mb-8 text-emerald-400 group-hover:text-emerald-300 transition-colors shadow-inner">
                  <Search className="w-7 h-7" />
                </div>
                <h3 className="text-2xl md:text-3xl font-medium mb-4 tracking-tight text-white/90 group-hover:text-white transition-colors">
                  Semantic Search
                </h3>
                <p className="text-white/50 leading-relaxed text-lg group-hover:text-white/70 transition-colors">
                  Retrieve relevant context from across the web with high precision.
                </p>
              </div>
            </div>

            {/* Card 3: Generate HTML */}
             <div 
              className="group relative p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10 md:ml-8 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              tabIndex={0}
              aria-label="Interface Generation"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/5 flex items-center justify-center mb-8 text-purple-400 group-hover:text-purple-300 transition-colors shadow-inner">
                  <Code2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl md:text-3xl font-medium mb-4 tracking-tight text-white/90 group-hover:text-white transition-colors">
                  Interface Generation
                </h3>
                <p className="text-white/50 leading-relaxed text-lg group-hover:text-white/70 transition-colors">
                  Scaffold production-ready, semantic HTML layouts on demand.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 - Staggered Downwards */}
          <div className="flex flex-col gap-6 md:gap-16 md:pt-24">
            {/* Card 2: Export to Text */}
            <div 
              className="group relative p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              tabIndex={0}
              aria-label="Structured Export"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/5 flex items-center justify-center mb-8 text-blue-400 group-hover:text-blue-300 transition-colors shadow-inner">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="text-2xl md:text-3xl font-medium mb-4 tracking-tight text-white/90 group-hover:text-white transition-colors">
                  Structured Export
                </h3>
                <p className="text-white/50 leading-relaxed text-lg group-hover:text-white/70 transition-colors">
                  Persist your session data into portable, standard formats instantly.
                </p>
              </div>
            </div>

            {/* Card 4: Image Generation */}
            <div 
              className="group relative p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:shadow-rose-500/10 md:ml-8 focus:outline-none focus:ring-2 focus:ring-rose-500/50"
              tabIndex={0}
              aria-label="Generative Assets"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/5 flex items-center justify-center mb-8 text-rose-400 group-hover:text-rose-300 transition-colors shadow-inner">
                  <ImageIcon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl md:text-3xl font-medium mb-4 tracking-tight text-white/90 group-hover:text-white transition-colors">
                  Generative Assets
                </h3>
                <p className="text-white/50 leading-relaxed text-lg group-hover:text-white/70 transition-colors">
                  Create bespoke, high-fidelity visual assets using modern diffusion models.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
