import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Analytics } from "@vercel/analytics/next"

export default function Hero() {
  const [stage, setStage] = useState<"initial" | "hero">("initial");

  useEffect(() => {
    // Sequence the entrance
    const timer = setTimeout(() => {
      setStage("hero");
    }, 2500); // Show title for 2.5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-[#050505] text-white">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />
      <Analytics/>
      <AnimatePresence mode="wait">
        {stage === "initial" ? (
          <motion.div
            key="intro"
            className="z-10 flex flex-col items-center justify-center text-center"
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.8, ease: "easeInOut" } }}
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-9xl font-light tracking-tighter mb-4 font-display text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50"
            >
              Yadṛcchā
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-sm md:text-xl text-white/60 font-mono tracking-widest uppercase"
            >
              Not just what you seek — what truly serves you
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="main-hero"
            className="z-10 relative w-full h-full flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {/* Background Elements */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
               {/* Rotating Disc */}
               <div className="w-[60vh] h-[60vh] md:w-[80vh] md:h-[80vh] rounded-full border border-white/10 animate-spin-slow relative opacity-40">
                  <div className="absolute inset-0 rounded-full border-t border-white/30" />
                  <div className="absolute inset-4 rounded-full border border-white/5 dashed" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border border-dashed border-white/10" />
               </div>
               
               {/* Radar Sweep Effect (Optional visual flair) */}
               <div className="absolute w-[60vh] h-[60vh] md:w-[80vh] md:h-[80vh] rounded-full bg-[conic-gradient(from_0deg,transparent_0_300deg,white_360deg)] opacity-5 animate-spin-slow mix-blend-overlay" style={{ animationDuration: '4s' }} />
            </div>

            {/* Small WIP Rotating Disc */}
            <div className="absolute top-20 right-8 md:top-24 md:right-16 pointer-events-none z-30">
              <div className="w-32 h-32 md:w-40 md:h-40 relative opacity-60">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <defs>
                    <path
                      id="wipTextPath"
                      d="M 100,100 m -90,0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0"
                    />
                  </defs>
                  {/* Rotating group for border and border text */}
                  <g className="animate-spin-slow" style={{ animationDuration: '15s', transformOrigin: '100px 100px' }}>
                    {/* Outer circle */}
                    <circle
                      cx="100"
                      cy="100"
                      r="95"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.2)"
                      strokeWidth="1.5"
                    />
                    {/* Inner circle */}
                    <circle
                      cx="100"
                      cy="100"
                      r="85"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.1)"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />
                    {/* Text path for "WIP WORK IN PROGRESS" */}
                    <text
                      fill="rgba(255, 255, 255, 0.8)"
                      fontSize="10"
                      fontFamily="'JetBrains Mono', monospace"
                      fontWeight="400"
                      letterSpacing="0.15em"
                    >
                      <textPath href="#wipTextPath" startOffset="0%">
                        WIP • WORK IN PROGRESS • WIP • WORK IN PROGRESS • WIP • WORK IN PROGRESS • 
                      </textPath>
                    </text>
                  </g>
                  {/* Center "WIP" text - static, doesn't rotate */}
                  <text
                    x="100"
                    y="100"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="rgba(255, 255, 255)"
                    fontSize="24"
                    fontFamily="'JetBrains Mono', monospace"
                    fontWeight="700"
                    letterSpacing="0.1em"
                  >
                    WIP
                  </text>
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-20 text-center space-y-2">
               <motion.div
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.5, duration: 0.8 }}
                 className="flex flex-col items-center"
               >
                  <span className="text-xs font-mono text-emerald-500 mb-4 tracking-[0.3em] uppercase border border-emerald-500/20 px-3 py-1 rounded-full bg-emerald-500/5 backdrop-blur-sm">
                  DEV Testing READY
                  </span>
                  <h1 className="text-8xl md:text-[15rem] leading-none font-bold font-display tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-transparent select-none mix-blend-overlay">
                    YANI
                  </h1>
               </motion.div>

               <motion.p
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 1.2, duration: 1 }}
                 className="text-white/40 max-w-md mx-auto font-mono text-sm mt-8 leading-relaxed"
               >
                 Advanced telemetry and spatial awareness for the modern developer. 
                 Scroll to initialize phase sequence.
               </motion.p>
               
               <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 2, duration: 1 }}
                 className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
               >
                 <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
               </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
