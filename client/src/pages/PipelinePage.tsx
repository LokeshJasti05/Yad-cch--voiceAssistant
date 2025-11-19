/* pipeline_image: /mnt/data/dc1259e0-94a9-4168-be66-671b8c0c23c3.png */
/* filename: PipelinePage.jsx */
import React from 'react';
import { Database, Cpu, BarChart3, Share2 } from 'lucide-react';

const PipelinePage = () => {
  return (
    <section className="min-h-screen bg-[#050505] text-white py-24 px-4 md:px-8 relative overflow-hidden font-sans">
       {/* Background Elements */}
       <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Column: Content & Steps */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
              Pipeline
            </h2>
            <p className="text-lg text-white/50 font-light tracking-wide max-w-lg border-l border-white/10 pl-4">
              A clear, engineered flow from input to impact — visualized and ready to plug into your workflow.
            </p>
          </div>

          <div className="space-y-6">
            {/* Step 1: Ingest */}
            <div 
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
              role="button"
              tabIndex={0}
              aria-labelledby="step-1-title"
              aria-describedby="step-1-desc"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-purple-400 group-hover:text-purple-300 transition-colors shadow-inner">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="step-1-title" className="text-xl font-medium text-white/90 mb-2 group-hover:text-white transition-colors">
                    Ingest
                  </h3>
                  <p id="step-1-desc" className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                    Collect structured and unstructured inputs — web, files, APIs, and streams.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Process (Staggered) */}
            <div 
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 translate-x-0 md:translate-x-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
              role="button"
              tabIndex={0}
              aria-labelledby="step-2-title"
              aria-describedby="step-2-desc"
            >
               <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-blue-400 group-hover:text-blue-300 transition-colors shadow-inner">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="step-2-title" className="text-xl font-medium text-white/90 mb-2 group-hover:text-white transition-colors">
                    Process
                  </h3>
                  <p id="step-2-desc" className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                    Normalize, enrich, and transform data with deterministic pipelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3: Analyze */}
            <div 
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
              role="button"
              tabIndex={0}
              aria-labelledby="step-3-title"
              aria-describedby="step-3-desc"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-emerald-400 group-hover:text-emerald-300 transition-colors shadow-inner">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="step-3-title" className="text-xl font-medium text-white/90 mb-2 group-hover:text-white transition-colors">
                    Analyze
                  </h3>
                  <p id="step-3-desc" className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                    Apply fast search, models, and heuristics to extract actionable signals.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4: Deliver (Staggered) */}
            <div 
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-500/10 translate-x-0 md:translate-x-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/50"
              role="button"
              tabIndex={0}
              aria-labelledby="step-4-title"
              aria-describedby="step-4-desc"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-rose-400 group-hover:text-rose-300 transition-colors shadow-inner">
                  <Share2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="step-4-title" className="text-xl font-medium text-white/90 mb-2 group-hover:text-white transition-colors">
                    Deliver
                  </h3>
                  <p id="step-4-desc" className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                    Deliver concise outputs where you work — docs, dashboards, or APIs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="relative h-full flex flex-col justify-center">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/20 group">
             <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 z-10" />
             
             {/* Image - Using the requested path as src, but for the prototype to work I will need to update this if the file is missing */}
             <img 
               src="/mnt/data/dc1259e0-94a9-4168-be66-671b8c0c23c3.png" 
               alt="Pipeline visualization showing data flow from ingest to delivery" 
               className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
             />
             
             <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs font-mono text-white/40 uppercase tracking-wider">System Visualization</span>
                  <span className="text-xs text-white/30">Drag & drop to replace</span>
                </div>
             </div>
          </div>

          {/* Timeline Overview */}
          <div className="mt-8 pl-4 border-l border-white/10 space-y-4">
             <h4 className="text-sm font-medium text-white/60 uppercase tracking-widest mb-4">Flow Sequence</h4>
             <ol className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-white/40">
                   <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                   Ingest
                </li>
                <li className="flex items-center gap-3 text-sm text-white/40">
                   <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                   Process
                </li>
                <li className="flex items-center gap-3 text-sm text-white/40">
                   <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                   Analyze
                </li>
                <li className="flex items-center gap-3 text-sm text-white/40">
                   <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                   Deliver
                </li>
             </ol>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PipelinePage;
