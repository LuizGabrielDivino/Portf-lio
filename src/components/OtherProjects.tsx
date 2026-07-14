"use client";

import { motion } from "framer-motion";
import { OTHER_PROJECTS } from "@/constants";
import { ExternalLink, Terminal, Coffee, Code } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";

export default function OtherProjects() {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "java":
        return <Coffee size={14} className="text-amber-500" />;
      case "python":
        return <Terminal size={14} className="text-sky-400" />;
      default:
        return <Code size={14} className="text-blue-400" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projetos" className="py-24 relative overflow-hidden bg-[#09090B] border-t border-[rgba(255,255,255,0.02)]">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">
            [ 04 / ECOSSISTEMA ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FAFAFA]">
            Outros Projetos
          </h2>
          <p className="text-sm text-[#A1A1AA] mt-2 max-w-xl">
            Soluções auxiliares, APIs corporativas e scripts utilitários desenvolvidos com rigor técnico e arquitetural.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {OTHER_PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card rounded-xl p-6 border border-[rgba(255,255,255,0.06)] flex flex-col justify-between hover:border-blue-500/25 hover:bg-[#121214] transition-all duration-300 relative group overflow-hidden"
            >
              <div>
                {/* Category Header */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold text-blue-400 font-mono flex items-center gap-1.5 bg-blue-500/5 border border-blue-500/10 px-2 py-0.5 rounded">
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>
                  
                  <span className="text-[10px] text-[#A1A1AA] font-mono">
                    Produção
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-base font-bold text-[#FAFAFA] mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights / Diffs */}
                <div className="mb-6">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#A1A1AA]/50 block mb-2 font-mono">
                    Destaques de Engenharia
                  </span>
                  <ul className="flex flex-col gap-1.5">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="text-[10px] text-[#FAFAFA]/80 flex items-start gap-1.5">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-[#09090B] border border-white/5 text-[9px] text-[#A1A1AA]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 px-3 rounded bg-[#09090B] hover:bg-blue-600/10 border border-white/5 hover:border-blue-500/30 text-xs font-semibold text-center text-[#FAFAFA] transition-all flex items-center justify-center gap-1.5 group/btn"
                  >
                    <GithubIcon size={13} className="text-[#A1A1AA] group-hover/btn:text-blue-400" />
                    <span>Código</span>
                  </a>
                  
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-1.5 px-3 rounded bg-blue-600 hover:bg-blue-700 text-xs font-semibold text-center text-white transition-all flex items-center justify-center gap-1.5 group/btn"
                    >
                      <ExternalLink size={13} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
