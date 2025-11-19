/* pipeline_image: /pipeline-architecture.png */
import React from 'react';
import { Mic, Cpu, Zap, Layers } from 'lucide-react';

const PipelineSection = () => {
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
              Pipeline Architecture
            </h2>
            <p className="text-lg text-white/50 font-light tracking-wide max-w-lg border-l border-white/10 pl-4">
              Voice-activated orchestration of intelligent agents, from intent to execution.
            </p>
          </div>

          <div className="space-y-6">
            {/* Step 1: Voice Input */}
            <div 
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
              role="button"
              tabIndex={0}
              aria-labelledby="step-1-title"
              aria-describedby="step-1-desc"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-purple-400 group-hover:text-purple-300 transition-colors shadow-inner">
                  <Mic className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="step-1-title" className="text-xl font-medium text-white/90 mb-2 group-hover:text-white transition-colors">
                    Voice Input
                  </h3>
                  <p id="step-1-desc" className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                    Natural language processing via ElevenLabs captures intent with high fidelity.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Orchestration */}
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
                    Orchestration
                  </h3>
                  <p id="step-2-desc" className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                    Management Unit analyzes context and delegates tasks to specialized agents.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3: Execution */}
            <div 
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
              role="button"
              tabIndex={0}
              aria-labelledby="step-3-title"
              aria-describedby="step-3-desc"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-emerald-400 group-hover:text-emerald-300 transition-colors shadow-inner">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="step-3-title" className="text-xl font-medium text-white/90 mb-2 group-hover:text-white transition-colors">
                    Execution
                  </h3>
                  <p id="step-3-desc" className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                    Parallel processing of search, coding, and generation tasks.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4: Synthesis */}
            <div 
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-500/10 translate-x-0 md:translate-x-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/50"
              role="button"
              tabIndex={0}
              aria-labelledby="step-4-title"
              aria-describedby="step-4-desc"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-rose-400 group-hover:text-rose-300 transition-colors shadow-inner">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="step-4-title" className="text-xl font-medium text-white/90 mb-2 group-hover:text-white transition-colors">
                    Synthesis
                  </h3>
                  <p id="step-4-desc" className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                    Results are compiled into unified artifacts: text, code, and visuals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="relative h-full flex flex-col justify-center">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/20 group">
             <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-20 z-10" />
             
             <img 
               src="/pipeline-architecture.png" 
               alt="Advanced Voice-Activated AI Pipeline Architecture showing flow from ElevenLabs Voice Agent to Orchestration Unit and various output modules like searchWeb, saveToTxt, createHTMLFile, and generateImage" 
               className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
             />
             
             <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs font-mono text-white/40 uppercase tracking-wider">System Architecture</span>
                  <span className="text-xs text-white/30">Live Diagram</span>
                </div>
             </div>
          </div>

          {/* Timeline Overview */}
          <div className="mt-8 pl-4 border-l border-white/10 space-y-4">
             <h4 className="text-sm font-medium text-white/60 uppercase tracking-widest mb-4">Process Flow</h4>
             <ol className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-white/40">
                   <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                   Voice Command
                </li>
                <li className="flex items-center gap-3 text-sm text-white/40">
                   <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                   Intent Classification
                </li>
                <li className="flex items-center gap-3 text-sm text-white/40">
                   <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                   Tool Selection
                </li>
                <li className="flex items-center gap-3 text-sm text-white/40">
                   <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                   Artifact Generation
                </li>
             </ol>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PipelineSection;
