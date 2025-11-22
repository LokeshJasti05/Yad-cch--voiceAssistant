import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Github, Download, ExternalLink, Box, Clock, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

interface PhaseSectionProps {
  githubUrl?: string;
  dockerHubUrl?: string;
  zipUrl?: string;
  onDownloadClick?: () => void;
  onGithubClick?: () => void;
  onDockerClick?: () => void;
  onCountdownStart?: () => void;
  onCountdownEnd?: () => void;
}

export default function PhaseSection({
  githubUrl = "https://github.com/your-org/ofradar-phase0",
  dockerHubUrl = "https://hub.docker.com/r/ofradar/phase0",
  zipUrl = "/assets/project-phase0.zip",
  onDownloadClick,
  onGithubClick,
  onDockerClick,
  onCountdownStart,
  onCountdownEnd
}: PhaseSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  
  // Countdown State
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isExpired, setIsExpired] = useState(false);

  const startCountdown = () => {
    if (timeLeft === null && !isExpired) {
      setTimeLeft(600); // 10 minutes
      onCountdownStart?.();
    }
  };

  useEffect(() => {
    if (timeLeft === null || timeLeft <= 0) {
      if (timeLeft === 0 && !isExpired) {
        setIsExpired(true);
        onCountdownEnd?.();
      }
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((t) => (t !== null ? t - 1 : null));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, isExpired, onCountdownEnd]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleDownload = () => {
    onDownloadClick?.();
    startCountdown();
    
    // Trigger download manually if needed or let the anchor tag handle it
    console.log("Download initiated");
  };

  return (
    <section ref={ref} className="relative min-h-screen w-full bg-transparent text-white py-24 px-4 md:px-12 flex flex-col items-center">
       
       <div className="max-w-6xl w-full z-10 space-y-16">
          {/* Header Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-center md:text-left"
          >
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-mono uppercase tracking-wider mb-4 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                Phase 0 Active
             </div>
             
             <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white">
                Phase 0 is out — <br className="hidden md:block" />
                <span className="text-white/40">Developer Testing</span>
             </h2>
             
             <div className="space-y-2">
               <p className="text-xl text-white/80 font-light max-w-2xl">
                  This release is early — the code is open source for testing.
               </p>
               <p className="text-sm text-white/50 max-w-xl font-mono">
                  Click below to access the source, container images, or download a release ZIP for local testing. 
                  Please note: this release is ephemeral and intended for developer testing only.
               </p>
             </div>
          </motion.div>

          {/* Links Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {/* GitHub */}
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={isInView ? { opacity: 1, x: 0 } : {}}
               transition={{ delay: 0.2, duration: 0.6 }}
             >
                <a 
                  href={githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={onGithubClick}
                  className="block group h-full"
                >
                  <Card className="h-full bg-white/5 border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 p-6 flex flex-col justify-between group-hover:translate-y-[-4px] group-hover:shadow-xl group-hover:shadow-purple-900/10">
                     <div className="flex justify-between items-start mb-4">
                        <div className="p-3 rounded-lg bg-white/5 text-white group-hover:bg-white/10 transition-colors">
                           <Github className="w-8 h-8" />
                        </div>
                        <ExternalLink className="w-5 h-5 text-white/20 group-hover:text-white/60" />
                     </div>
                     <div>
                        <h3 className="text-xl font-semibold mb-1">View on GitHub</h3>
                        <p className="text-sm text-white/50 font-mono">Source & issues</p>
                     </div>
                  </Card>
                </a>
             </motion.div>

             {/* Docker Hub */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ delay: 0.3, duration: 0.6 }}
             >
                <a 
                  href={dockerHubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={onDockerClick}
                  className="block group h-full"
                >
                  <Card className="h-full bg-white/5 border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 p-6 flex flex-col justify-between group-hover:translate-y-[-4px] group-hover:shadow-xl group-hover:shadow-blue-900/10">
                     <div className="flex justify-between items-start mb-4">
                        <div className="p-3 rounded-lg bg-white/5 text-white group-hover:bg-white/10 transition-colors">
                           <Box className="w-8 h-8" />
                        </div>
                        <ExternalLink className="w-5 h-5 text-white/20 group-hover:text-white/60" />
                     </div>
                     <div>
                        <h3 className="text-xl font-semibold mb-1">View on Docker Hub</h3>
                        <p className="text-sm text-white/50 font-mono">Pull: Yani/phase0</p>
                     </div>
                  </Card>
                </a>
             </motion.div>

             {/* Download ZIP (Primary) */}
             <motion.div
               initial={{ opacity: 0, x: 20 }}
               animate={isInView ? { opacity: 1, x: 0 } : {}}
               transition={{ delay: 0.4, duration: 0.6 }}
             >
                <div className="h-full relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-emerald-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500 group-hover:duration-200" />
                  <a 
                    href={isExpired ? undefined : zipUrl}
                    download={!isExpired}
                    onClick={(e) => {
                       if (isExpired) {
                         e.preventDefault();
                         return;
                       }
                       handleDownload();
                    }}
                    className={`relative block h-full bg-[#0F0F0F] rounded-xl border border-white/10 p-6 flex flex-col justify-between transition-transform duration-300 ${!isExpired && "hover:-translate-y-1 cursor-pointer"} ${isExpired && "cursor-not-allowed opacity-60"}`}
                  >
                     <div className="flex justify-between items-start mb-4">
                        <div className={`p-3 rounded-lg ${isExpired ? 'bg-red-500/10 text-red-500' : 'bg-emerald-500/10 text-emerald-500'} transition-colors`}>
                           {isExpired ? <AlertCircle className="w-8 h-8" /> : <Download className="w-8 h-8" />}
                        </div>
                        {timeLeft !== null && !isExpired && (
                          <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm bg-emerald-950/50 px-2 py-1 rounded">
                            <Clock className="w-3 h-3" />
                            {formatTime(timeLeft)}
                          </div>
                        )}
                     </div>
                     <div>
                        <h3 className="text-xl font-semibold mb-1 text-white">
                          {isExpired ? "Download Expired" : "Download ZIP"}
                        </h3>
                        <p className="text-sm text-white/50 font-mono">
                          {isExpired ? "Session timed out" : "Direct release — 10 min availability"}
                        </p>
                     </div>
                  </a>
                </div>
             </motion.div>
          </div>
       </div>
    </section>
  );
}
