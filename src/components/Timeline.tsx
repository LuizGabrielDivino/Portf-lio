"use client";

import { motion } from "framer-motion";
import { TIMELINE } from "@/constants";
import { Terminal, Database, Server, Layout, Award, Target } from "lucide-react";

export default function Timeline() {
  const getIcon = (name: string) => {
    switch (name) {
      case "terminal":
        return <Terminal size={16} />;
      case "database":
        return <Database size={16} />;
      case "server":
        return <Server size={16} />;
      case "layout":
        return <Layout size={16} />;
      case "award":
        return <Award size={16} />;
      case "target":
        return <Target size={16} />;
      default:
        return <Terminal size={16} />;
    }
  };

  return (
    <section id="timeline" className="py-24 relative overflow-hidden bg-[#09090B] border-t border-[rgba(255,255,255,0.02)]">
      {/* Background glow lights */}
      <div className="absolute right-0 bottom-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">
            [ 05 / TRAJETÓRIA ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FAFAFA]">
            Timeline de Evolução
          </h2>
          <p className="text-sm text-[#A1A1AA] mt-2 max-w-xl">
            A jornada de aprendizado prático e as conquistas estruturantes no desenvolvimento de software.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-white/5 ml-4 md:ml-32 pl-8 md:pl-12 py-4 flex flex-col gap-12">
          {TIMELINE.map((event, idx) => {
            const isGoal = event.year.toLowerCase().includes("objetivo");
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative group"
              >
                {/* Year Indicator (Desktop only - absolute position left) */}
                <div className="hidden md:block absolute -left-[140px] top-1 text-right w-20">
                  <span className={`text-xs font-mono font-bold tracking-wider ${
                    isGoal ? "text-[#38BDF8]" : "text-[#FAFAFA]"
                  }`}>
                    {event.year}
                  </span>
                </div>

                {/* Timeline node icon */}
                <div className={`absolute -left-[45px] md:-left-[61px] top-0.5 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  isGoal
                    ? "bg-[#09090B] border-[#38BDF8]/40 text-[#38BDF8] shadow-md shadow-[#38BDF8]/10"
                    : "bg-[#111111] border-[rgba(255,255,255,0.06)] text-[#A1A1AA] group-hover:border-blue-500/40 group-hover:text-blue-400"
                }`}>
                  {getIcon(event.iconName)}
                </div>

                {/* Content Box */}
                <div className={`glass-card p-5 rounded-xl border transition-all duration-300 flex flex-col ${
                  isGoal 
                    ? "border-[#38BDF8]/20 bg-sky-950/5" 
                    : "border-[rgba(255,255,255,0.06)] hover:border-blue-500/25 hover:bg-[#121214]"
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className={`text-sm font-bold ${isGoal ? "text-[#38BDF8]" : "text-[#FAFAFA]"}`}>
                      {event.title}
                    </h3>
                    
                    {/* Mobile Year Badge */}
                    <span className={`text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded md:hidden w-fit ${
                      isGoal ? "bg-sky-500/10 text-[#38BDF8]" : "bg-white/5 text-[#A1A1AA]"
                    }`}>
                      {event.year}
                    </span>
                    
                    <span className="text-[10px] text-[#A1A1AA] font-medium font-sans">
                      {event.subtitle}
                    </span>
                  </div>
                  
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
