"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { DIFFERENTIALS, PROFILE } from "@/constants";
import { Mail, FileText, Send, CheckCircle2, ShieldAlert } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfetti = () => {
    // Elegant fireworks confetti layout
    const duration = 2.5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 25, spread: 360, ticks: 50, zIndex: 100 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 40 * (timeLeft / duration);
      // since particles fall down, animate a bit higher than random
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    
    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      handleConfetti();
      setFormState({ name: "", email: "", message: "" });
      
      // Reset status back to idle after a few seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }, 1200);
  };

  const triggerResumeDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    // Burst immediate blue/sky confetti
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#2563EB", "#38BDF8", "#FAFAFA"],
    });
    
    // In a real application, download resume. Here we simulate it.
    alert("Download de currículo simulado! O confetti confirma que Luiz Gabriel está pronto para contratação imediata.");
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-[#09090B] border-t border-[rgba(255,255,255,0.02)]">
      {/* Light glow behind contact */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Differentiators */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3 block">
                [ 08 / DIFERENCIAIS ]
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FAFAFA] mb-6">
                Por que me contratar?
              </h2>
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-8 max-w-lg">
                Combinando competência técnica sólida no backend com refino estético e animações de alto nível no frontend, estou pronto para somar em times ágeis remotos.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {DIFFERENTIALS.map((diff, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="p-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0 h-fit mt-0.5">
                      <CheckCircle2 size={13} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#FAFAFA]">{diff.title}</h4>
                      <p className="text-[10px] text-[#A1A1AA] mt-1 leading-relaxed">{diff.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social channels / Resume download */}
            <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex gap-4">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#111111] hover:bg-[#151518] border border-white/5 hover:border-blue-500/25 text-[#A1A1AA] hover:text-[#FAFAFA] transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#111111] hover:bg-[#151518] border border-white/5 hover:border-blue-500/25 text-[#A1A1AA] hover:text-[#FAFAFA] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="p-3 rounded-lg bg-[#111111] hover:bg-[#151518] border border-white/5 hover:border-blue-500/25 text-[#A1A1AA] hover:text-[#FAFAFA] transition-all"
                  aria-label="Send Email"
                >
                  <Mail size={18} />
                </a>
              </div>

              <button
                onClick={triggerResumeDownload}
                className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-xs font-semibold uppercase tracking-wider text-white transition-all flex items-center gap-2 group shadow-lg shadow-blue-600/15"
              >
                <FileText size={14} className="group-hover:rotate-6 transition-transform" />
                <span>Baixar Currículo</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111111] border border-[rgba(255,255,255,0.06)] shadow-xl h-full flex flex-col justify-between">
              
              <div>
                <h3 className="text-base font-bold text-[#FAFAFA] mb-2 font-mono">
                  Enviar Mensagem
                </h3>
                <p className="text-[11px] text-[#A1A1AA] mb-6">
                  Preencha o formulário abaixo e entrarei em contato o mais breve possível.
                </p>

                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="name" className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-wider block mb-1.5 font-mono">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="Ex: Gabriel Souza"
                      disabled={status === "sending" || status === "success"}
                      className="w-full bg-[#09090B] border border-white/5 focus:border-blue-500/40 rounded-lg py-2.5 px-3.5 text-xs text-[#FAFAFA] placeholder-[#A1A1AA]/35 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-wider block mb-1.5 font-mono">
                      Endereço de E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="Ex: gabriel@empresa.com"
                      disabled={status === "sending" || status === "success"}
                      className="w-full bg-[#09090B] border border-white/5 focus:border-blue-500/40 rounded-lg py-2.5 px-3.5 text-xs text-[#FAFAFA] placeholder-[#A1A1AA]/35 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-wider block mb-1.5 font-mono">
                      Como posso ajudar?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      placeholder="Fale um pouco sobre o projeto ou a vaga..."
                      disabled={status === "sending" || status === "success"}
                      rows={4}
                      className="w-full bg-[#09090B] border border-white/5 focus:border-blue-500/40 rounded-lg py-2.5 px-3.5 text-xs text-[#FAFAFA] placeholder-[#A1A1AA]/35 focus:outline-none resize-none transition-colors"
                      required
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-3 rounded bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] flex items-center gap-2">
                      <ShieldAlert size={14} />
                      <span>Por favor, preencha todos os campos obrigatórios.</span>
                    </div>
                  )}

                  {status === "success" && (
                    <div className="p-3 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] flex items-center gap-2">
                      <CheckCircle2 size={14} />
                      <span>Mensagem enviada com sucesso! Obrigado pelo contato.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending" || status === "success"}
                    className="w-full py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/40 disabled:cursor-not-allowed text-xs font-semibold uppercase tracking-wider text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/15"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="w-3.5 h-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send size={12} />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
