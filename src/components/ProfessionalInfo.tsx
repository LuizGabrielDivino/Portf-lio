"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, CheckCircle } from "lucide-react";

export default function ProfessionalInfo() {
  return (
    <section className="py-16 relative overflow-hidden bg-[#09090B] border-t border-[rgba(255,255,255,0.02)]">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Experience */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-[#111111] border border-[rgba(255,255,255,0.06)] hover:border-blue-500/20 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-[#09090B] border border-white/5 text-blue-500">
                  <Briefcase size={16} />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-blue-400 font-mono uppercase tracking-widest block">
                    Trajetória Prática
                  </span>
                  <h3 className="text-sm font-bold text-[#FAFAFA]">
                    Experiência Profissional
                  </h3>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="text-xs font-bold text-[#FAFAFA] block">
                  Desenvolvedor de Projetos Pessoais & Autônomo
                </span>
                <span className="text-[10px] text-[#A1A1AA] font-mono block mt-0.5">
                  2023 - Presente
                </span>
              </div>

              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Foco no desenvolvimento de aplicações completas, do modelo de dados ao deployment. Autonomia total para investigar documentações, projetar APIs estruturadas, orquestrar múltiplos containers via Docker Compose e construir interfaces web modernas e responsivas.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-2">
              <span className="text-[9px] font-mono text-[#FAFAFA]/70 bg-white/5 px-2 py-0.5 rounded">
                ✔ Full-Stack Autonomy
              </span>
              <span className="text-[9px] font-mono text-[#FAFAFA]/70 bg-white/5 px-2 py-0.5 rounded">
                ✔ E2E Delivery
              </span>
              <span className="text-[9px] font-mono text-[#FAFAFA]/70 bg-white/5 px-2 py-0.5 rounded">
                ✔ Clean Dev Practices
              </span>
            </div>
          </motion.div>

          {/* Card 2: Education */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl bg-[#111111] border border-[rgba(255,255,255,0.06)] hover:border-blue-500/20 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-[#09090B] border border-white/5 text-sky-400">
                  <GraduationCap size={16} />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-sky-400 font-mono uppercase tracking-widest block">
                    Formação Acadêmica
                  </span>
                  <h3 className="text-sm font-bold text-[#FAFAFA]">
                    Educação Formal
                  </h3>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-xs font-bold text-[#FAFAFA] block">
                  Instituto Federal do Rio Grande do Norte (IFRN)
                </span>
                <span className="text-[10px] text-[#A1A1AA] font-mono block mt-0.5">
                  Curso Técnico Integrado em Tecnologia da Informação
                </span>
              </div>

              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Formação com sólida base teórica e prática em lógica de programação, algoritmos estruturados, arquitetura de computadores, redes, engenharia de software e banco de dados relacional. Participação ativa em projetos acadêmicos e maratonas de código locais.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-2">
              <span className="text-[9px] font-mono text-[#FAFAFA]/70 bg-white/5 px-2 py-0.5 rounded">
                ✔ IFRN Campus Natal
              </span>
              <span className="text-[9px] font-mono text-[#FAFAFA]/70 bg-white/5 px-2 py-0.5 rounded">
                ✔ Algorithms & Math
              </span>
              <span className="text-[9px] font-mono text-[#FAFAFA]/70 bg-white/5 px-2 py-0.5 rounded">
                ✔ Computer Networks
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
