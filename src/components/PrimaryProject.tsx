"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRIMARY_PROJECT } from "@/constants";
import { 
  ShieldCheck, 
  LayoutDashboard, 
  PlusCircle, 
  ShoppingCart, 
  ClipboardList, 
  Star, 
  Image as ImageIcon, 
  Database, 
  Box, 
  UploadCloud, 
  ArrowRight,
  User,
  Activity,
  Layers,
  ArrowUpRight
} from "lucide-react";

export default function PrimaryProject() {
  const [activeFeatureIdx, setActiveFeatureIdx] = useState(0);

  // Mapping feature indices to specific mockup contents to make them interactive
  const renderMockupContent = () => {
    switch (activeFeatureIdx) {
      case 0: // Auth
        return (
          <div className="flex flex-col items-center justify-center h-full p-8 text-center text-xs font-sans">
            <div className="w-full max-w-[260px] p-6 rounded-lg bg-[#09090B] border border-[rgba(255,255,255,0.06)] shadow-xl">
              <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-4 text-blue-400">
                <ShieldCheck size={16} />
              </div>
              <h4 className="font-bold text-[#FAFAFA] text-sm mb-1">Entrar no CampusMarket</h4>
              <p className="text-[#A1A1AA] mb-4 text-[10px]">Utilize sua conta estudantil do IFRN</p>
              
              <div className="flex flex-col gap-2">
                <button className="w-full py-2 px-3 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <span>Acessar com Email</span>
                </button>
                <div className="flex items-center my-1.5 text-[9px] text-[#A1A1AA]/60 before:content-[''] before:flex-1 before:h-px before:bg-white/5 before:mr-2 after:content-[''] after:flex-1 after:h-px after:bg-white/5 after:ml-2">
                  OU
                </div>
                <button className="w-full py-2 px-3 rounded bg-[#161616] border border-[rgba(255,255,255,0.06)] text-white hover:bg-[#202022] transition-colors flex items-center justify-center gap-2">
                  <svg className="w-3 h-3" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M12 5.04c1.66 0 3.2.57 4.38 1.69l3.27-3.27C17.67 1.6 15.02 1 12 1 7.35 1 3.4 3.65 1.5 7.5l3.86 3C6.27 7.54 8.87 5.04 12 5.04z"/>
                    <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.34H12v4.44h6.43c-.28 1.44-1.1 2.66-2.33 3.48l3.62 2.81c2.12-1.95 3.34-4.83 3.34-8.39z"/>
                    <path fill="#FBBC05" d="M5.36 14.5c-.24-.72-.38-1.49-.38-2.3s.14-1.58.38-2.3l-3.86-3C.5 8.92 0 10.4 0 12s.5 3.08 1.5 5.1l3.86-3.1z"/>
                    <path fill="#34A853" d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.62-2.81c-1-.67-2.28-1.07-3.6-1.07-3.13 0-5.73-2.5-6.64-5.46l-3.86 3C3.4 20.35 7.35 23 12 23z"/>
                  </svg>
                  <span>Entrar com o Google</span>
                </button>
              </div>
            </div>
          </div>
        );
      case 1: // Seller Dashboard
        return (
          <div className="flex flex-col h-full p-4 font-sans text-xs">
            {/* Mock Header */}
            <div className="flex justify-between items-center pb-3 border-b border-white/5 mb-4">
              <span className="font-bold text-[#FAFAFA]">Painel de Vendas</span>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            </div>
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-2.5 mb-4">
              <div className="p-2.5 rounded bg-[#09090B] border border-white/5">
                <span className="text-[9px] text-[#A1A1AA] block mb-1">Receita</span>
                <span className="text-sm font-bold text-[#FAFAFA]">R$ 412,50</span>
              </div>
              <div className="p-2.5 rounded bg-[#09090B] border border-white/5">
                <span className="text-[9px] text-[#A1A1AA] block mb-1">Pedidos</span>
                <span className="text-sm font-bold text-[#FAFAFA]">32</span>
              </div>
              <div className="p-2.5 rounded bg-[#09090B] border border-white/5">
                <span className="text-[9px] text-[#A1A1AA] block mb-1">Avaliação</span>
                <span className="text-sm font-bold text-amber-400 flex items-center gap-0.5">
                  4.8 <Star size={10} fill="currentColor" />
                </span>
              </div>
            </div>

            {/* Sales Chart Simulation */}
            <div className="flex-1 bg-[#09090B] border border-white/5 rounded p-3 flex flex-col justify-between">
              <span className="text-[9px] text-[#A1A1AA] block mb-2">Desempenho Semanal</span>
              <div className="flex-1 flex items-end justify-between gap-1 px-2 h-20">
                {[30, 45, 20, 60, 80, 50, 95].map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1.5">
                    <div className="w-full bg-blue-600/30 rounded-t overflow-hidden relative" style={{ height: `${val}%` }}>
                      <div className="absolute bottom-0 left-0 right-0 bg-blue-500" style={{ height: "40%" }} />
                    </div>
                    <span className="text-[8px] text-[#A1A1AA]">{["S", "T", "Q", "Q", "S", "S", "D"][idx]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 2: // Product Management
        return (
          <div className="flex flex-col h-full p-4 font-sans text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-white/5 mb-3">
              <span className="font-bold text-[#FAFAFA]">Gerenciar Cardápio</span>
              <button className="px-2 py-1 rounded bg-blue-600 text-white font-medium text-[9px] flex items-center gap-1 hover:bg-blue-700">
                <PlusCircle size={10} /> Novo Produto
              </button>
            </div>
            
            {/* Products Mock list */}
            <div className="flex flex-col gap-2 overflow-y-auto max-h-[220px] pr-1">
              {[
                { name: "Bolo de Pote de Ninho", price: 7.50, stock: 12, sales: 45, status: "Ativo" },
                { name: "Coxinha de Frango c/ Catupiry", price: 5.00, stock: 0, sales: 98, status: "Sem Estoque" },
                { name: "Brownie Tradicional Chocolate", price: 4.50, stock: 24, sales: 15, status: "Ativo" },
              ].map((p, idx) => (
                <div key={idx} className="p-2 rounded bg-[#09090B] border border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-semibold text-[#FAFAFA]">{p.name}</span>
                    <span className="text-[9px] text-[#A1A1AA]">R$ {p.price.toFixed(2)} • Vendas: {p.sales}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-end">
                      <span className="text-[9px] text-[#A1A1AA]">Qtd: {p.stock}</span>
                      <span className={`text-[8px] font-bold ${p.status === "Ativo" ? "text-emerald-400" : "text-rose-400"}`}>{p.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 3: // Cart
        return (
          <div className="flex flex-col h-full p-4 font-sans text-xs">
            <div className="pb-2 border-b border-white/5 mb-3">
              <span className="font-bold text-[#FAFAFA] flex items-center gap-1.5">
                <ShoppingCart size={14} className="text-blue-500" /> Carrinho de Compras
              </span>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between p-2 rounded bg-[#09090B] border border-white/5">
                  <div className="flex flex-col">
                    <span className="font-medium text-[#FAFAFA]">Bolo de Pote de Ninho</span>
                    <span className="text-[9px] text-blue-400">Vendedor: Pedro (Eletrotécnica)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#A1A1AA]">2x</span>
                    <span className="font-bold text-[#FAFAFA]">R$ 15,00</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-[#09090B] border border-white/5">
                  <div className="flex flex-col">
                    <span className="font-medium text-[#FAFAFA]">Brownie Tradicional</span>
                    <span className="text-[9px] text-blue-400">Vendedor: Ana (Informática)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#A1A1AA]">1x</span>
                    <span className="font-bold text-[#FAFAFA]">R$ 4,50</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 mt-4">
                <div className="flex justify-between items-center text-xs mb-3 font-semibold">
                  <span className="text-[#A1A1AA]">Total do Pedido</span>
                  <span className="text-[#FAFAFA] text-sm">R$ 19,50</span>
                </div>
                <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-bold text-[10px] text-center transition-colors">
                  Finalizar Pedido
                </button>
              </div>
            </div>
          </div>
        );
      case 4: // Order Management
        return (
          <div className="flex flex-col h-full p-4 font-sans text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-white/5 mb-3">
              <span className="font-bold text-[#FAFAFA]">Status de Pedidos</span>
              <span className="text-[9px] text-blue-400 font-semibold uppercase tracking-wider">Acompanhamento</span>
            </div>

            <div className="flex flex-col gap-2">
              {[
                { id: "#8902", items: "1x Bolo de Pote, 1x Suco", status: "Pronto para Entrega", statusColor: "text-emerald-400 bg-emerald-500/5 border-emerald-500/10" },
                { id: "#8894", items: "3x Coxinha de Frango", status: "Em Preparo", statusColor: "text-amber-400 bg-amber-500/5 border-amber-500/10" },
                { id: "#8871", items: "2x Brownie Tradicional", status: "Finalizado", statusColor: "text-[#A1A1AA] bg-white/5 border-white/5" },
              ].map((o, idx) => (
                <div key={idx} className="p-2.5 rounded bg-[#09090B] border border-white/5 flex items-center justify-between">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-bold text-[#FAFAFA]">{o.id}</span>
                    <span className="text-[9px] text-[#A1A1AA]">{o.items}</span>
                  </div>
                  <span className={`text-[8px] font-bold px-2 py-0.5 rounded border ${o.statusColor}`}>
                    {o.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      case 5: // Reviews
        return (
          <div className="flex flex-col h-full p-4 font-sans text-xs">
            <div className="pb-2 border-b border-white/5 mb-3 flex items-center justify-between">
              <span className="font-bold text-[#FAFAFA]">Feedbacks dos Clientes</span>
              <span className="text-amber-400 font-bold flex items-center gap-0.5 text-[10px]">
                4.8 <Star size={10} fill="currentColor" />
              </span>
            </div>

            <div className="flex flex-col gap-2.5 overflow-y-auto max-h-[220px]">
              {[
                { author: "Maria Clara", course: "Edificações", comment: "Bolo de pote delicioso! Veio muito bem embalado e a entrega no pavilhão de aulas foi super rápida.", rating: 5 },
                { author: "João Victor", course: "Informática", comment: "Coxinha estava ótima, bem quente e crocante. Comprarei mais vezes com certeza.", rating: 4 },
                { author: "Beatriz M.", course: "Química", comment: "Brownie super cremoso! Recomendo muito.", rating: 5 },
              ].map((r, idx) => (
                <div key={idx} className="p-2 rounded bg-[#09090B] border border-white/5">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-[#FAFAFA]">{r.author} <span className="text-[8px] font-normal text-[#A1A1AA]">({r.course})</span></span>
                    <div className="flex text-amber-400 gap-0.5">
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <Star key={i} size={8} fill="currentColor" stroke="none" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[9px] text-[#A1A1AA] leading-relaxed italic">&quot;{r.comment}&quot;</p>
                </div>
              ))}
            </div>
          </div>
        );
      default: // DB & Docker Infra
        return (
          <div className="flex flex-col items-center justify-center h-full p-6 text-center text-xs font-sans">
            <div className="p-5 rounded-lg bg-[#09090B] border border-white/5 max-w-[280px]">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-3 text-emerald-400">
                <Database size={16} />
              </div>
              <h4 className="font-bold text-[#FAFAFA] text-xs mb-1">Container Postgres & Prisma</h4>
              <p className="text-[#A1A1AA] text-[9px] leading-relaxed">
                Tabelas normalizadas, relacionamentos indexados, chaves estrangeiras íntegras e migrações totalmente seguras.
              </p>
              <div className="mt-3 flex items-center justify-center gap-1.5 font-mono text-[8px] text-[#A1A1AA]/50 bg-white/5 p-1 rounded">
                <Activity size={10} className="text-emerald-400" /> DB Connection Pool Active
              </div>
            </div>
          </div>
        );
    }
  };

  const getFeatureIcon = (idx: number) => {
    const icons = [
      <ShieldCheck key={0} size={16} />,
      <LayoutDashboard key={1} size={16} />,
      <PlusCircle key={2} size={16} />,
      <ShoppingCart key={3} size={16} />,
      <ClipboardList key={4} size={16} />,
      <Star key={5} size={16} />,
      <ImageIcon key={6} size={16} />,
      <Database key={7} size={16} />,
      <Box key={8} size={16} />
    ];
    return icons[idx] || <ShieldCheck size={16} />;
  };

  return (
    <section id="projeto-principal" className="py-24 relative overflow-hidden bg-[#09090B] border-t border-[rgba(255,255,255,0.02)]">
      {/* Light effect */}
      <div className="absolute right-1/4 bottom-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 text-left">
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">
            [ 03 / PROJETO EM DESTAQUE ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FAFAFA]">
            {PRIMARY_PROJECT.title}
          </h2>
          <p className="text-sm text-[#A1A1AA] mt-2 max-w-xl font-mono text-[#38BDF8]">
            {PRIMARY_PROJECT.tagline}
          </p>
        </div>

        {/* Feature Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Left: Interactive Features List */}
          <div className="lg:col-span-6 flex flex-col gap-2.5">
            <h3 className="text-xs font-bold text-[#A1A1AA]/60 uppercase tracking-widest mb-2 px-1 font-mono">
              Funcionalidades SaaS
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {PRIMARY_PROJECT.features.map((feature, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFeatureIdx(idx)}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 flex items-start gap-3.5 group relative ${
                    activeFeatureIdx === idx
                      ? "bg-[#111111] border-blue-500/40 shadow-lg shadow-blue-500/5"
                      : "bg-[#111111]/45 border-[rgba(255,255,255,0.04)] hover:bg-[#111] hover:border-white/10"
                  }`}
                >
                  <div className={`p-2 rounded-lg border transition-all ${
                    activeFeatureIdx === idx
                      ? "bg-blue-600/10 border-blue-500/30 text-blue-400"
                      : "bg-[#09090B] border-[rgba(255,255,255,0.04)] text-[#A1A1AA] group-hover:text-[#FAFAFA]"
                  }`}>
                    {getFeatureIcon(idx)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className={`text-xs font-bold transition-colors ${
                      activeFeatureIdx === idx ? "text-blue-400" : "text-[#FAFAFA] group-hover:text-blue-400"
                    }`}>
                      {feature.title}
                    </h4>
                    <p className="text-[11px] text-[#A1A1AA] mt-1 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Live Interactive Mockup Visual */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="h-full min-h-[360px] lg:min-h-[460px] glass-card rounded-2xl border border-[rgba(255,255,255,0.06)] shadow-2xl relative overflow-hidden flex flex-col justify-between">
              
              {/* Browser Header Bar */}
              <div className="bg-[#161616]/90 px-4 py-3 flex items-center gap-2 border-b border-[rgba(255,255,255,0.06)]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                
                <div className="flex-1 max-w-sm mx-auto bg-[#09090B] border border-white/5 rounded py-0.5 text-[9px] text-[#A1A1AA] font-mono text-center flex items-center justify-center gap-1">
                  <span className="text-emerald-400 font-bold">https://</span>
                  <span>campusmarket.ifrn.edu.br</span>
                </div>
              </div>

              {/* Dynamic Mockup Body */}
              <div className="flex-1 bg-[#111111]/40 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeatureIdx}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0"
                  >
                    {renderMockupContent()}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Mockup footer indicating SaaS status */}
              <div className="bg-[#161616]/40 p-3 border-t border-[rgba(255,255,255,0.06)] text-[9px] font-mono text-[#A1A1AA] flex justify-between items-center">
                <span>Next.js 15 Client + NestJS API</span>
                <span className="flex items-center gap-1 text-blue-400">
                  <Activity size={10} /> State Sync Auto
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* System Architecture */}
        <div className="mb-24 p-8 rounded-2xl bg-[#111111] border border-[rgba(255,255,255,0.06)] relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="md:w-1/3">
              <div className="inline-flex p-2 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 mb-4">
                <Layers size={18} />
              </div>
              <h3 className="text-lg font-bold text-[#FAFAFA] mb-2">
                {PRIMARY_PROJECT.architecture.title}
              </h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                {PRIMARY_PROJECT.architecture.description}
              </p>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PRIMARY_PROJECT.architecture.items.map((item, idx) => {
                const [title, desc] = item.split(": ");
                return (
                  <div key={idx} className="p-4 rounded-xl bg-[#09090B] border border-white/5">
                    <h4 className="text-xs font-bold text-blue-400 mb-1">{title}</h4>
                    <p className="text-[11px] text-[#A1A1AA] leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Technologies List */}
        <div className="mb-24">
          <h3 className="text-xs font-bold text-[#A1A1AA]/60 uppercase tracking-widest mb-6 font-mono">
            Tecnologias Empregadas no Produto
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {PRIMARY_PROJECT.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-full bg-[#111111] border border-white/5 text-[10px] font-medium text-[#FAFAFA] hover:border-blue-500/20 hover:text-blue-400 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Evolution Roadmap */}
        <div>
          <h3 className="text-xs font-bold text-[#A1A1AA]/60 uppercase tracking-widest mb-10 font-mono">
            Linha de Evolução do Produto
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative before:hidden md:before:block before:content-[''] before:absolute before:top-[43px] before:left-6 before:right-6 before:h-0.5 before:bg-white/5 before:z-0">
            {PRIMARY_PROJECT.evolution.map((evo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col relative z-10"
              >
                {/* Visual Step Marker */}
                <div className="flex items-center justify-between md:justify-start gap-4 mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#111111] border border-blue-500/30 text-blue-400 flex items-center justify-center text-xs font-bold font-mono">
                    {idx + 1}
                  </div>
                  <span className="text-[10px] font-bold text-[#38BDF8] font-mono md:hidden">
                    {evo.phase}
                  </span>
                </div>
                
                <span className="text-[9px] font-bold text-[#38BDF8] font-mono hidden md:block mb-2">
                  {evo.phase}
                </span>
                
                <h4 className="text-xs font-bold text-[#FAFAFA] mb-2">
                  {evo.title}
                </h4>
                
                <p className="text-[11px] text-[#A1A1AA] leading-relaxed">
                  {evo.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
