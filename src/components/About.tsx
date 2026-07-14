"use client";

import { motion } from "framer-motion";
import { ABOUT } from "@/constants";
import { Code2, Compass, Layers, ShieldCheck } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Layers size={20} className="text-blue-500" />,
      title: "Full-Stack Mindset",
      desc: "Conectando o banco de dados à interface do usuário com foco em consistência e fluxo de dados.",
    },
    {
      icon: <Code2 size={20} className="text-sky-400" />,
      title: "Prática Direta",
      desc: "Foco no aprendizado prático e ativo, construindo aplicações de verdade em vez de apenas ler documentações.",
    },
    {
      icon: <ShieldCheck size={20} className="text-emerald-400" />,
      title: "Atenção a Detalhes",
      desc: "Tratamento de exceções, validação rigorosa de APIs e responsividade testada em múltiplos dispositivos.",
    },
    {
      icon: <Compass size={20} className="text-amber-500" />,
      title: "Autonomia & Evolução",
      desc: "Capacidade de investigar documentações, depurar erros e adotar novas tecnologias rapidamente.",
    },
  ];

  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-[#09090B] border-t border-[rgba(255,255,255,0.02)]">
      {/* Visual background lights */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Content */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">
              [ 01 / SOBRE MIM ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FAFAFA] mb-6">
              Construindo aplicações web que funcionam de verdade.
            </h2>
            
            <div className="flex flex-col gap-6 text-sm text-[#A1A1AA] leading-relaxed max-w-xl">
              {ABOUT.paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>
          </div>

          {/* Right: Technical Focus Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 rounded-xl bg-[#111111] border border-[rgba(255,255,255,0.06)] flex flex-col items-start hover:border-blue-500/20 transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-lg bg-[#09090B] border border-[rgba(255,255,255,0.04)] mb-4 text-[#FAFAFA] group-hover:bg-blue-600/5 group-hover:border-blue-500/20 transition-all duration-300">
                  {h.icon}
                </div>
                <h3 className="text-sm font-bold text-[#FAFAFA] mb-2 group-hover:text-blue-400 transition-colors">
                  {h.title}
                </h3>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  {h.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
