import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface PipelineSectionProps {
  imageUrl?: string;
}

export default function PipelineSection({ 
  imageUrl = "/assets/pipeline-architecture.png" 
}: PipelineSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section ref={ref} className="relative w-full bg-[#050505] text-white py-32 px-4 md:px-12 flex flex-col items-center overflow-hidden border-t border-white/5">
       
       {/* Background Grid Effect */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none mask-image-gradient-to-b" />

       <div className="max-w-7xl w-full z-10 space-y-16 flex flex-col items-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-4"
          >
             <span className="text-xs font-mono text-emerald-500 tracking-[0.2em] uppercase border border-emerald-500/20 px-3 py-1 rounded-full bg-emerald-500/5">
                System Architecture
             </span>
             <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
               Orchestration <span className="text-white/30">Pipeline</span>
             </h2>
             <p className="text-white/50 max-w-2xl mx-auto font-light text-lg">
               Visualizing the flow from voice intent to autonomous execution across the neural network.
             </p>
          </motion.div>

          {/* Image Container with Glow Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-5xl group"
          >
             {/* Glow behind image */}
             <div className="absolute -inset-4 bg-blue-500/10 rounded-3xl blur-2xl group-hover:bg-blue-500/20 transition-all duration-700" />
             
             <div className="relative rounded-2xl border border-white/10 bg-white/5 p-2 md:p-4 overflow-hidden backdrop-blur-sm shadow-2xl shadow-black/50">
                {/* Scanline effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[20%] w-full animate-scan pointer-events-none z-20 mix-blend-overlay opacity-30" />
                
                <img 
                  src={imageUrl} 
                  alt="Advanced Voice-Activated AI Pipeline Architecture" 
                  className="w-full h-auto rounded-xl border border-white/5 shadow-inner relative z-10"
                />

                {/* Tech corners */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white/20 rounded-tl-2xl z-20" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/20 rounded-tr-2xl z-20" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white/20 rounded-bl-2xl z-20" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/20 rounded-br-2xl z-20" />
             </div>
          </motion.div>
       </div>
    </section>
  );
}
