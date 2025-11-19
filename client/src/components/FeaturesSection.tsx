import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, FileText, FileCode, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    id: "search",
    title: "Web Search",
    description: "Real-time information retrieval and synthesis from across the network.",
    icon: Globe,
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: "save-txt",
    title: "Save to TXT",
    description: "Persistent structured data storage in plain text formats for portability.",
    icon: FileText,
    color: "text-amber-400",
    gradient: "from-amber-500/20 to-orange-500/20"
  },
  {
    id: "create-html",
    title: "Create HTML",
    description: "Instant generation of semantic markup and web document structures.",
    icon: FileCode,
    color: "text-emerald-400",
    gradient: "from-emerald-500/20 to-green-500/20"
  },
  {
    id: "gen-image",
    title: "Generate Image",
    description: "Visual asset synthesis powered by advanced generative models.",
    icon: Sparkles,
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-pink-500/20"
  }
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section ref={ref} className="relative w-full bg-[#050505] text-white py-32 px-4 md:px-12 flex flex-col items-center overflow-hidden">
       {/* Background Ambient Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

       <div className="max-w-6xl w-full z-10 space-y-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-4"
          >
             <span className="text-xs font-mono text-white/40 tracking-[0.2em] uppercase">Core Capabilities</span>
             <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
               Feature <span className="text-white/30">Matrix</span>
             </h2>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
             {features.map((feature, index) => (
               <motion.div
                 key={feature.id}
                 initial={{ opacity: 0, y: 20 }}
                 animate={isInView ? { opacity: 1, y: 0 } : {}}
                 transition={{ delay: 0.2 + (index * 0.1), duration: 0.6 }}
                 className="h-full"
               >
                 <Card className="h-full bg-white/5 border-white/10 overflow-hidden group hover:border-white/20 transition-all duration-500">
                   <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                   
                   <div className="relative p-8 h-full flex flex-col gap-6">
                     <div className="flex items-center justify-between">
                       <div className={`p-3 rounded-xl bg-white/5 ${feature.color} group-hover:scale-110 transition-transform duration-500`}>
                         <feature.icon className="w-6 h-6" />
                       </div>
                       <span className="text-xs font-mono text-white/20 group-hover:text-white/40 transition-colors">
                         0{index + 1}
                       </span>
                     </div>
                     
                     <div className="space-y-2">
                       <h3 className="text-2xl font-semibold tracking-tight group-hover:text-white transition-colors">{feature.title}</h3>
                       <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                         {feature.description}
                       </p>
                     </div>

                     {/* Tech Lines decoration */}
                     <div className="mt-auto pt-4 flex gap-1 opacity-20 group-hover:opacity-40 transition-opacity">
                        <div className="h-1 w-8 bg-current rounded-full" />
                        <div className="h-1 w-2 bg-current rounded-full" />
                        <div className="h-1 w-1 bg-current rounded-full" />
                     </div>
                   </div>
                 </Card>
               </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
}
