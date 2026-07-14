"use client";

import { motion } from "framer-motion";
import { TECHNOLOGIES } from "@/constants";
import { Server, Layout, Database, Settings, Shield } from "lucide-react";

export default function Technologies() {
  // Mapping categories to distinct premium icons and highlights
  const getCategoryStyles = (title: string) => {
    switch (title.toLowerCase()) {
      case "backend":
        return {
          icon: <Server size={18} className="text-blue-400" />,
          accent: "group-hover:border-blue-500/30",
          glow: "bg-blue-600/5",
          badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
        };
      case "frontend":
        return {
          icon: <Layout size={18} className="text-sky-400" />,
          accent: "group-hover:border-sky-500/30",
          glow: "bg-sky-600/5",
          badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20"
        };
      case "banco de dados":
        return {
          icon: <Database size={18} className="text-emerald-400" />,
          accent: "group-hover:border-emerald-500/30",
          glow: "bg-emerald-600/5",
          badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
        };
      case "infraestrutura & ferramentas":
        return {
          icon: <Settings size={18} className="text-amber-400" />,
          accent: "group-hover:border-amber-500/30",
          glow: "bg-amber-600/5",
          badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20"
        };
      default:
        return {
          icon: <Shield size={18} className="text-purple-400" />,
          accent: "group-hover:border-purple-500/30",
          glow: "bg-purple-600/5",
          badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20"
        };
    }
  };

  const getLevelLabel = (level: string) => {
    switch (level.toLowerCase()) {
      case "advanced":
        return "Domínio";
      case "intermediate":
        return "Intermediário";
      case "learning":
        return "Em Expansão";
      default:
        return level;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="tecnologias" className="py-24 relative overflow-hidden bg-[#09090B] border-t border-[rgba(255,255,255,0.02)]">
      {/* Glow effect */}
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">
            [ 02 / SKILLSET ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FAFAFA]">
            Tecnologias & Ferramentas
          </h2>
          <p className="text-sm text-[#A1A1AA] mt-2 max-w-xl">
            Competências estruturadas por camadas técnicas, cobrindo o ciclo de engenharia de ponta a ponta.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TECHNOLOGIES.map((cat, i) => {
            const styles = getCategoryStyles(cat.title);
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`p-6 rounded-xl bg-[#111111] border border-[rgba(255,255,255,0.06)] transition-all duration-300 group hover:bg-[#131315] hover:shadow-xl relative overflow-hidden ${styles.accent}`}
              >
                {/* Radial Glow on Hover */}
                <div className={`absolute -right-16 -top-16 w-32 h-32 rounded-full blur-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${styles.glow}`} />

                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="p-2 rounded-lg bg-[#09090B] border border-[rgba(255,255,255,0.04)]">
                    {styles.icon}
                  </div>
                  <h3 className="text-sm font-bold tracking-wide text-[#FAFAFA]">
                    {cat.title}
                  </h3>
                </div>

                {/* Techs List */}
                <ul className="flex flex-col gap-3 relative z-10">
                  {cat.techs.map((tech, idx) => {
                    const isLearning = tech.level === "Learning";
                    return (
                      <li
                        key={idx}
                        className="flex items-center justify-between py-2 border-b border-[rgba(255,255,255,0.02)] last:border-b-0"
                      >
                        <span className="text-xs font-medium text-[#FAFAFA]/90">
                          {tech.name}
                        </span>
                        
                        <span
                          className={`text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full border ${
                            isLearning 
                              ? "bg-blue-500/10 text-blue-400 border-blue-500/20" 
                              : "bg-[rgba(255,255,255,0.04)] text-[#A1A1AA] border-transparent"
                          }`}
                        >
                          {getLevelLabel(tech.level)}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
