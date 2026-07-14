"use client";

import { motion } from "framer-motion";
import { PHILOSOPHY } from "@/constants";
import { Layers, Code2, Zap, Eye, TrendingUp, CheckCircle2 } from "lucide-react";

export default function Philosophy() {
  const getIcon = (name: string) => {
    switch (name) {
      case "layers":
        return <Layers size={18} />;
      case "code":
        return <Code2 size={18} />;
      case "zap":
        return <Zap size={18} />;
      case "eye":
        return <Eye size={18} />;
      case "trending-up":
        return <TrendingUp size={18} />;
      case "check-circle":
        return <CheckCircle2 size={18} />;
      default:
        return <Code2 size={18} />;
    }
  };

  const getAccentColor = (idx: number) => {
    // Rotating accent colors for design variety
    const colors = [
      "text-blue-500 border-blue-500/20 group-hover:border-blue-500/40 bg-blue-600/5",
      "text-sky-400 border-sky-500/20 group-hover:border-sky-500/40 bg-sky-600/5",
      "text-emerald-400 border-emerald-500/20 group-hover:border-emerald-500/40 bg-emerald-600/5",
      "text-amber-500 border-amber-500/20 group-hover:border-amber-500/40 bg-amber-600/5",
      "text-indigo-400 border-indigo-500/20 group-hover:border-indigo-500/40 bg-indigo-600/5",
      "text-rose-400 border-rose-500/20 group-hover:border-rose-500/40 bg-rose-600/5"
    ];
    return colors[idx % colors.length];
  };

  return (
    <section id="filosofia" className="py-24 relative overflow-hidden bg-[#09090B] border-t border-[rgba(255,255,255,0.02)]">
      {/* Visual glowing points */}
      <div className="absolute left-1/4 top-1/3 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">
            [ 06 / VALORES ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FAFAFA]">
            Como gosto de desenvolver software
          </h2>
          <p className="text-sm text-[#A1A1AA] mt-2 max-w-xl">
            Práticas de engenharia fundamentais que sigo para garantir a entrega de produtos confiáveis e de alta qualidade.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PHILOSOPHY.map((item, idx) => {
            const styles = getAccentColor(idx);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 rounded-xl bg-[#111111] border border-[rgba(255,255,255,0.06)] hover:bg-[#121214] transition-all duration-300 group"
              >
                {/* Visual Icon with rotating styling */}
                <div className={`w-9 h-9 rounded-lg border flex items-center justify-center mb-5 transition-colors duration-300 ${styles}`}>
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-sm font-bold text-[#FAFAFA] mb-2 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
