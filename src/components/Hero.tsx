"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, MapPin, Globe, ChevronRight, FileCode, Server, Database } from "lucide-react";
import { PROFILE } from "@/constants";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"nestjs" | "docker" | "prisma">("nestjs");

  const codeSnippets = {
    nestjs: {
      file: "auth.controller.ts",
      lang: "typescript",
      icon: <Server size={14} className="text-blue-400" />,
      code: `import { Controller, Post, UseGuards, Req, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login/google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
    // Initiates Google OAuth2.0 login flow
  }

  @Post('callback/google')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res) {
    const { token, user } = await this.authService.loginWithGoogle(req.user);
    res.cookie('jwt', token, { httpOnly: true, secure: true });
    return res.redirect('/dashboard');
  }
}`,
    },
    docker: {
      file: "docker-compose.yml",
      lang: "yaml",
      icon: <Terminal size={14} className="text-sky-400" />,
      code: `version: '3.8'

services:
  api:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - '3000:3000'
    environment:
      - DATABASE_URL=postgresql://postgres:secret@db:5432/campus_market
      - JWT_SECRET=\${JWT_SECRET}
    depends_on:
      - db
    networks:
      - app-network

  db:
    image: postgres:15-alpine
    restart: always
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=secret
      - POSTGRES_DB=campus_market
    ports:
      - '5432:5432'
    volumes:
      - pgdata:/var/lib/postgresql/data
    networks:
      - app-network

volumes:
  pgdata:

networks:
  app-network:
    driver: bridge`,
    },
    prisma: {
      file: "schema.prisma",
      lang: "prisma",
      icon: <Database size={14} className="text-emerald-400" />,
      code: `datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        String    @id @default(uuid())
  email     String    @unique
  name      String
  avatar    String?
  products  Product[] // Products they sell
  orders    Order[]   // Orders they made
  createdAt DateTime  @default(now())
}

model Product {
  id          String   @id @default(uuid())
  title       String
  description String
  price       Float
  sellerId    String
  seller      User     @relation(fields: [sellerId], references: [id])
  active      Boolean  @default(true)
  orders      Order[]
}`,
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-12 overflow-hidden grid-bg"
    >
      {/* Background radial fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-[#09090B] pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-blue-600/5 via-transparent to-transparent pointer-events-none" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 60%)" }} />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 text-xs text-blue-400 font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
            <span>{PROFILE.availability}</span>
          </motion.div>

          {/* Name & Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#FAFAFA] leading-none mb-4"
          >
            {PROFILE.name.split(" ").slice(0, 2).join(" ")}
            <span className="block text-2xl sm:text-3xl md:text-4xl font-normal text-[#A1A1AA] mt-3">
              {PROFILE.name.split(" ").slice(2).join(" ")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#38BDF8] font-mono mb-6 flex items-center gap-2"
          >
            <span className="text-[#A1A1AA] font-sans">const role =</span>
            <span>&quot;{PROFILE.headline}&quot;</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base text-[#A1A1AA] max-w-lg mb-8 leading-relaxed font-sans"
          >
            Escrevo código limpo, performático e estruturado de ponta a ponta. Focado no ecossistema web moderno e na construção de softwares reais que entregam valor prático.
          </motion.p>

          {/* Location & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full"
          >
            <div className="flex gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById("projeto-principal");
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-xs font-semibold tracking-wider uppercase text-white transition-all flex items-center gap-2 group shadow-lg shadow-blue-600/20"
              >
                Ver Projeto Principal
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("contato");
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="px-6 py-3 rounded-lg bg-[#111111] hover:bg-[#1a1a1a] border border-[rgba(255,255,255,0.06)] hover:border-blue-500/30 text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                Contato
              </button>
            </div>
            
            <div className="flex items-center gap-1.5 text-xs text-[#A1A1AA] font-medium font-mono">
              <MapPin size={14} className="text-blue-500" />
              <span>{PROFILE.location}</span>
            </div>
          </motion.div>
        </div>

        {/* Code Terminal Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 w-full glass-card rounded-xl overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] relative"
        >
          {/* Subtle Glow Behind Terminal */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-sky-500 rounded-xl blur opacity-10 pointer-events-none" />

          {/* Terminal Window Header */}
          <div className="bg-[#161616] px-4 py-3 flex items-center justify-between border-b border-[rgba(255,255,255,0.06)]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="text-[10px] text-[#A1A1AA] font-mono tracking-wider flex items-center gap-1.5">
              <FileCode size={12} />
              <span>luizgabriel-dev-environment</span>
            </div>
            <div className="w-12" />
          </div>

          {/* Code Tab Selection */}
          <div className="flex bg-[#111] border-b border-[rgba(255,255,255,0.06)] text-xs font-mono">
            {(["nestjs", "docker", "prisma"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 border-r border-[rgba(255,255,255,0.06)] flex items-center gap-2 transition-all ${
                  activeTab === tab
                    ? "bg-[#09090B] text-[#FAFAFA] font-medium border-t-2 border-t-blue-500"
                    : "text-[#A1A1AA] hover:bg-[#161616] hover:text-[#FAFAFA]"
                }`}
              >
                {codeSnippets[tab].icon}
                <span>{codeSnippets[tab].file}</span>
              </button>
            ))}
          </div>

          {/* Code Panel */}
          <div className="p-4 bg-[#09090B]/60 font-mono text-[11px] leading-relaxed overflow-x-auto text-[#A1A1AA] min-h-[290px] max-h-[350px]">
            <pre className="text-left select-none">
              <code>
                {codeSnippets[activeTab].code.split("\n").map((line, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="w-4 text-[#A1A1AA]/30 text-right select-none select-none">{idx + 1}</span>
                    <span className="text-[#FAFAFA]/90 whitespace-pre">
                      {line
                        // Basic syntax highlighting replacement for readability
                        .replace(/(@Controller|@Post|@UseGuards|@Req|@Res|@id|@default|@unique|@relation)/g, '<span class="text-blue-400">$1</span>')
                        .replace(/(import|export|class|constructor|private|const|await|return|model|generator|datasource|version|services|image|restart|ports|environment|depends_on|networks|volumes|driver)/g, '<span class="text-sky-400">$1</span>')
                        .replace(/('google'|'jwt'|'\/dashboard'|'3\.8'|'nestjs'|'docker'|'prisma'|'3000:3000'|'5432:5432'|'postgres:15-alpine'|'app-network'|'postgresql:\/\/postgres:secret@db:5432\/campus_market'|\${JWT_SECRET}|"postgresql"|"prisma-client-js"|uuid\(\)|now\(\))/g, '<span class="text-emerald-400">$1</span>')
                      }
                    </span>
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Inline styles helper for runtime injected html inside replacement
declare global {
  namespace JSX {
    interface IntrinsicElements {
      span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
    }
  }
}
