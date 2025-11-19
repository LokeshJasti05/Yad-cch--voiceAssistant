import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />

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
              delivery what you need not what you want
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

            {/* Content */}
            <div className="relative z-20 text-center space-y-2">
               <motion.div
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.5, duration: 0.8 }}
                 className="flex flex-col items-center"
               >
                  <span className="text-xs font-mono text-emerald-500 mb-4 tracking-[0.3em] uppercase border border-emerald-500/20 px-3 py-1 rounded-full bg-emerald-500/5 backdrop-blur-sm">
                    System Online
                  </span>
                  <h1 className="text-8xl md:text-[12rem] leading-none font-bold font-display tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-transparent select-none mix-blend-overlay">
                    OFF / RADAR
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
