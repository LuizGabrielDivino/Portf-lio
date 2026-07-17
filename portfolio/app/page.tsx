'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Terminal, 
  Download, 
  MapPin, 
  Code2, 
  Database, 
  ShieldCheck, 
  LayoutDashboard, 
  ShoppingCart, 
  GitPullRequest, 
  Star, 
  GitCommit, 
  Heart, 
  Sparkles, 
  Send, 
  GraduationCap, 
  Briefcase, 
  Cpu, 
  Layers, 
  Zap, 
  Trophy, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  Check 
} from 'lucide-react';

const GithubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const MENU_ITEMS = [
  { id: 'hero', label: 'Início' },
  { id: 'sobre', label: 'Sobre Mim' },
  { id: 'tecnologias', label: 'Competências' },
  { id: 'projeto-principal', label: 'CampusMarket' },
  { id: 'projetos', label: 'Outros Projetos' },
  { id: 'timeline', label: 'Jornada' },
  { id: 'filosofia', label: 'Diferenciais' },
  { id: 'contato', label: 'Contato' }
];

const TECH_CATEGORIES = [
  {
    title: 'Backend & APIs',
    description: 'Como guardamos e organizamos as informações por trás das telas.',
    techs: [
      { name: 'Node.js', level: 'Intermediário' },
      { name: 'NestJS', level: 'Intermediário' },
      { name: 'Java', level: 'Estudo Focado' },
      { name: 'Spring Boot', level: 'Estudo Focado' },
      { name: 'Prisma ORM', level: 'Intermediário' }
    ]
  },
  {
    title: 'Frontend & Telas',
    description: 'Construção de painéis visuais interativos e adaptáveis para celulares e PCs.',
    techs: [
      { name: 'React', level: 'Intermediário' },
      { name: 'Next.js', level: 'Intermediário' },
      { name: 'Angular', level: 'Intermediário' },
      { name: 'TypeScript', level: 'Intermediário' },
      { name: 'Tailwind CSS', level: 'Intermediário' }
    ]
  },
  {
    title: 'Bancos & Infra',
    description: 'Sistemas para salvar os dados com segurança e preparar o site para o ar.',
    techs: [
      { name: 'PostgreSQL', level: 'Intermediário' },
      { name: 'Docker', level: 'Intermediário' },
      { name: 'Git & GitHub', level: 'Intermediário' },
      { name: 'Linux', level: 'Intermediário' }
    ]
  },
  {
    title: 'Segurança & Acessos',
    description: 'Controle de quem pode entrar ou alterar informações do sistema.',
    techs: [
      { name: 'JWT Tokens', level: 'Intermediário' },
      { name: 'Middlewares', level: 'Intermediário' }
    ]
  }
];

const TIMELINE_EVENTS = [
  { year: "2023", title: "Primeiros Passos", desc: "Início nos estudos de lógica estruturada, montagem de páginas simples com HTML e estilizações com CSS." },
  { year: "2023", title: "Primeiras APIs", desc: "Aprendizado em como enviar e receber dados na internet através de servidores simples em JavaScript." },
  { year: "2024", title: "Uso do Docker", desc: "Configuração de caixas organizadoras (containers) para rodar bancos de dados e ferramentas de forma isolada no PC." },
  { year: "2024", title: "NestJS & Angular", desc: "Criação de projetos com estruturas organizadas de backend e painéis dinâmicos para o usuário." },
  { year: "2025", title: "Desenvolvimento do CampusMarket", desc: "União de todo o aprendizado em um marketplace real focado em solucionar a venda de alimentos no campus." },
  { year: "Próximo Objetivo", title: "Java & Spring Boot", desc: "Estudo contínuo em ferramentas robustas e muito utilizadas por grandes empresas para sistemas de grande porte." }
];

function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const mouse = { x: -1000, y: -1000, tx: -1000, ty: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.tx = -1000;
      mouse.ty = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // 3D Grid Wave Matrix configurations - Enhanced density and visibility
    const cols = 40;
    const rows = 26;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth interpolation for mouse transition
      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;

      time += 0.005;

      // Camera focal length and isometric tilt angles
      const focalLength = 350;
      const rotationX = 0.65; // Pitch angle (tilt forward)
      const rotationZ = 0.25; // Yaw angle (slight diagonal spin)

      const projectedGrid: Array<Array<{ x: number; y: number; depth: number; intensity: number }>> = [];

      for (let r = 0; r < rows; r++) {
        projectedGrid[r] = [];
        for (let c = 0; c < cols; c++) {
          // Centered normalized coordinates
          const nx = (c / (cols - 1)) - 0.5;
          const ny = (r / (rows - 1)) - 0.5;

          // Scaled bounds
          const gridW = width * 1.4;
          const gridH = height * 1.6;

          const x3d = nx * gridW;
          const y3d = ny * gridH;

          // Layered waves for high-fidelity topographic terrain simulation
          const distFromCenter = Math.sqrt(nx * nx + ny * ny);
          let z3d = Math.sin(nx * 4.0 + time * 1.6) * Math.cos(ny * 4.0 - time) * 40;
          z3d += Math.sin(distFromCenter * 5 - time * 2) * 20;

          // Mathematical cursor interaction (soft dip/pull)
          if (mouse.x > -500) {
            const approxX = (nx + 0.5) * width;
            const approxY = (ny + 0.5) * height;
            const dx = mouse.x - approxX;
            const dy = mouse.y - approxY;
            const distToMouse = Math.sqrt(dx * dx + dy * dy);

            if (distToMouse < 240) {
              const force = 1 - distToMouse / 240;
              z3d += force * force * 60 * Math.sin(time * 6);
            }
          }

          // Matrix projection mechanics
          const cosX = Math.cos(rotationX);
          const sinX = Math.sin(rotationX);
          const cosZ = Math.cos(rotationZ);
          const sinZ = Math.sin(rotationZ);

          // Yaw rotation (Z-axis rotation)
          const rx = x3d * cosZ - y3d * sinZ;
          const ry = x3d * sinZ + y3d * cosZ;
          const rz = z3d;

          // Pitch rotation (X-axis tilt)
          const finalX = rx;
          const finalY = ry * cosX - rz * sinX;
          const finalZ = ry * sinX + rz * cosX;

          // Perspective scaling
          const zOffset = 500;
          const scale = focalLength / (focalLength + finalZ + zOffset);

          // Projection coordinates centered on viewport
          const sx = width / 2 + finalX * scale;
          const sy = height / 1.7 + finalY * scale;

          // Node intensity (brighter / more nitted than previous version)
          let mouseFactor = 0;
          if (mouse.x > -500) {
            const dx = mouse.x - sx;
            const dy = mouse.y - sy;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 180) {
              mouseFactor = (1 - dist / 180) * 0.95;
            }
          }

          const depthFactor = (finalZ + 150) / 300; 
          // Enhanced visibility coefficients: lighter, clearer blue-sky color tones
          const intensity = Math.max(0.04, (1 - depthFactor) * 0.16 + mouseFactor * 0.28);

          projectedGrid[r][c] = { x: sx, y: sy, depth: finalZ, intensity };
        }
      }

      // Slightly thicker, nitted drawing lines
      ctx.lineWidth = 1.0;

      // Draw horizontal lines of the grid mesh
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols - 1; c++) {
          const p1 = projectedGrid[r][c];
          const p2 = projectedGrid[r][c + 1];

          if (
            (p1.x < -100 || p1.x > width + 100 || p1.y < -100 || p1.y > height + 100) &&
            (p2.x < -100 || p2.x > width + 100 || p2.y < -100 || p2.y > height + 100)
          ) continue;

          const avgIntensity = (p1.intensity + p2.intensity) / 2;
          // Sky Blue translucent color (#38BDF8)
          ctx.strokeStyle = `rgba(56, 189, 248, ${avgIntensity * 0.8})`;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      // Draw vertical lines of the grid mesh
      for (let r = 0; r < rows - 1; r++) {
        for (let c = 0; c < cols; c++) {
          const p1 = projectedGrid[r][c];
          const p2 = projectedGrid[r + 1][c];

          if (
            (p1.x < -100 || p1.x > width + 100 || p1.y < -100 || p1.y > height + 100) &&
            (p2.x < -100 || p2.x > width + 100 || p2.y < -100 || p2.y > height + 100)
          ) continue;

          const avgIntensity = (p1.intensity + p2.intensity) / 2;
          // Sky Blue translucent color (#38BDF8)
          ctx.strokeStyle = `rgba(56, 189, 248, ${avgIntensity * 0.8})`;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-55 sm:opacity-70" />;
}

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') !== null || 
        target.closest('button') !== null ||
        target.classList.contains('clickable-card') ||
        target.closest('.clickable-card') !== null;
      
      setIsHovered(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Miniature Glow Ring */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-5 h-5 rounded-full border border-sky-400/40 pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isHovered ? 1.4 : 1,
          backgroundColor: isHovered ? 'rgba(56, 189, 248, 0.15)' : 'rgba(56, 189, 248, 0)',
          borderColor: isHovered ? 'rgba(56, 189, 248, 0.7)' : 'rgba(56, 189, 248, 0.4)'
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 280,
          mass: 0.6
        }}
      />
      {/* Precise miniature inner dot */}
      <div 
        className="hidden md:block fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-sky-400 pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: `translate3d(${mousePosition.x - 3}px, ${mousePosition.y - 3}px, 0)`
        }}
      />
    </>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (const item of MENU_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const premiumEase = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: premiumEase }
    }
  };

  return (
    <main className="relative min-h-screen bg-[#09090B] text-[#FAFAFA] overflow-x-hidden selection:bg-blue-600/30 font-sans">
      <AnimatedBackground />
      <CustomCursor />

      {/* HEADER NAVBAR */}
      <header className="fixed top-0 inset-x-0 h-16 bg-[#09090B]/65 backdrop-blur-md border-b border-white/5 z-40">
        <div className="max-w-6xl mx-auto h-full px-6 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 font-mono text-sm tracking-tight hover:opacity-85 transition">
            <span className="text-sky-400 font-bold">&lt;</span>
            <span className="text-white font-medium">LuizGabriel</span>
            <span className="text-sky-400 font-bold">/&gt;</span>
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center gap-1">
            {MENU_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-sky-400/10 text-sky-400 border border-sky-400/20' 
                    : 'text-[#A1A1AA] hover:text-white border border-transparent'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a 
            href="#contato" 
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 text-xs font-medium tracking-wide transition-all duration-300"
          >
            Fale Comigo
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-16">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[45vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400/15 via-transparent to-transparent blur-[110px] pointer-events-none" />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-10 flex flex-col items-center text-center max-w-4xl w-full"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-zinc-400">Disponível para trabalho remoto</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-none">
            Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Developer</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-sm md:text-base font-mono text-[#A1A1AA] mb-4">
            Rio Grande do Norte, BR
          </motion.p>

          <motion.p variants={itemVariants} className="text-base md:text-lg text-zinc-400 font-light mb-10 max-w-2xl leading-relaxed">
            Desenvolvedor web focado em criar telas modernas e organizar os dados de forma correta e limpa, conectando o visual com o servidor com foco na facilidade de uso.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            <a href="#projeto-principal" className="group flex items-center justify-center gap-2 bg-sky-500 text-black px-7 py-3.5 rounded-xl font-medium text-sm hover:bg-sky-400 transition-all duration-300 w-full sm:w-auto shadow-lg shadow-sky-500/10 hover:shadow-sky-400/25">
              Conhecer o CampusMarket
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="https://github.com/LuizGabrielDivino" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-zinc-900/50 border border-white/5 text-zinc-200 px-7 py-3.5 rounded-xl font-medium text-sm hover:bg-white/5 hover:text-white transition-all w-full sm:w-auto backdrop-blur-md">
              <Terminal size={16} /> 
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">Apresentação</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6">Sobre Mim</h2>
              <div className="flex items-center gap-3 text-[#A1A1AA] mb-8">
                <MapPin size={18} className="text-sky-400" />
                <span className="text-sm font-medium">Rio Grande do Norte, Brasil</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-zinc-400 font-light leading-relaxed">
            <p>
              Crio páginas e sistemas para a internet com foco no que realmente importa: resolver o problema do usuário final com soluções simples e fáceis de mexer. Gosto de aprender colocando a mão na massa, construindo o projeto do zero, desde onde as informações ficam guardadas até o visual que aparece na tela do seu celular.
            </p>
            <p>
              Consigo entender novas documentações rapidamente para aplicar em soluções práticas. Atualmente, estou estudando como construir sistemas de nível profissional usando <strong className="text-[#FAFAFA] font-normal">Java e Spring Boot</strong>, visando garantir que as informações trafeguem com segurança e agilidade.
            </p>
            <p className="border-l-2 border-sky-400/50 pl-4 italic text-zinc-300 font-mono text-sm py-1">
              "Foco na simplicidade. Um bom código é aquele que qualquer desenvolvedor consegue ler, entender e testar sem dificuldades."
            </p>
          </div>
        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section id="tecnologias" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <div className="mb-16">
          <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">Competências Técnicas</h2>
          <p className="text-[#A1A1AA] mt-3 font-light max-w-xl">
            Linguagens e ferramentas que utilizo no dia a dia para dar vida aos projetos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-white/5 bg-zinc-900/10 flex flex-col justify-between hover:border-sky-400/20 transition-all duration-300">
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">{cat.title}</h3>
                <p className="text-[11px] text-[#A1A1AA] mb-4 leading-normal">{cat.description}</p>
              </div>

              <div className="space-y-2 border-t border-white/5 pt-4">
                {cat.techs.map((t, tIdx) => (
                  <div key={tIdx} className="flex justify-between items-center text-xs">
                    <span className="text-zinc-300 font-mono text-[11px]">{t.name}</span>
                    <span className="text-[10px] bg-white/[0.03] border border-white/5 px-2 py-0.5 rounded text-zinc-400">
                      {t.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CAMPUSMARKET SECTION */}
      <section id="projeto-principal" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5 relative">
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400/10 via-transparent to-transparent blur-[120px] pointer-events-none" />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">Caso em Foco</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">CampusMarket</h2>
            <p className="text-[#A1A1AA] mt-3 max-w-xl font-light">
              Uma loja virtual feita para facilitar a venda e compra de lanches entre alunos dentro da escola, evitando filas.
            </p>
          </div>
          <a 
            href="https://github.com/LuizGabrielDivino" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-sky-300 tracking-wide transition-all"
          >
            Ver Código no GitHub
            <ChevronRight size={14} />
          </a>
        </div>

        {/* Browser Mockup Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            <div className="glass-card rounded-3xl overflow-hidden border border-white/5 bg-zinc-900/10 group relative transition-all duration-300 hover:border-sky-400/20">
              <div className="p-4 border-b border-white/5 bg-zinc-950/40 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <span className="text-[10px] font-mono text-zinc-500">campusmarket-web-preview.png</span>
                <div className="w-12" />
              </div>
              <div className="relative overflow-hidden bg-white">
                <img
                  src="/image_1ed105.jpeg"
                  alt="CampusMarket - Seu lanche no campus, sem filas"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                />
              </div>
            </div>

            {/* Sandbox Simulator */}
            <div className="glass-card rounded-3xl p-8 border border-white/5 bg-zinc-900/10 relative overflow-hidden group">
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="px-2.5 py-1 text-[10px] font-mono rounded bg-sky-400/10 text-sky-400 border border-sky-400/20">
                  TypeScript
                </span>
                <span className="px-2.5 py-1 text-[10px] font-mono rounded bg-white/[0.04] text-zinc-300 border border-white/5">
                  Docker
                </span>
                <span className="px-2.5 py-1 text-[10px] font-mono rounded bg-white/[0.04] text-zinc-300 border border-white/5">
                  PostgreSQL
                </span>
              </div>

              <div className="max-w-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Simulação do Produto</h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  Teste o funcionamento abaixo para simular ações de login, cadastro de produtos ou adição de lanches no carrinho.
                </p>
              </div>

              {/* Demo Sandbox Interactive Area */}
              <div className="border border-white/5 rounded-2xl bg-black/40 overflow-hidden">
                <div className="bg-zinc-950/80 px-4 py-2 border-b border-white/5 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 tracking-wider">CampusMarket Playground</span>
                  <div className="w-10" />
                </div>
                
                <div className="p-6 min-h-[190px] flex items-center justify-center">
                  <InteractiveSimulator />
                </div>
              </div>
            </div>

            {/* Tech Stack Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl border border-white/5 bg-zinc-900/10">
                <div className="flex items-center gap-3 text-sky-400 mb-3">
                  <Database size={18} />
                  <h4 className="text-sm font-semibold text-white">Organização de Dados</h4>
                </div>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Usamos o banco de dados PostgreSQL estruturado no computador do desenvolvedor através de Docker, deixando o processo de salvar os lanches rápido e livre de perdas.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-white/5 bg-zinc-900/10">
                <div className="flex items-center gap-3 text-sky-400 mb-3">
                  <ShieldCheck size={18} />
                  <h4 className="text-sm font-semibold text-white">Segurança do Usuário</h4>
                </div>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Garantimos que apenas alunos cadastrados consigam fazer login de forma totalmente segura e protegida contra acessos indesejados no sistema escolar.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="glass-card p-6 rounded-2xl border border-white/5 bg-zinc-900/10 h-full flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Módulos do Sistema</h4>
                <div className="space-y-4">
                  {[
                    { label: "Login com Segurança", desc: "Acesso reservado com senha protegida." },
                    { label: "Painel de Vendedor", desc: "Onde o estudante gerencia suas vendas e produtos." },
                    { label: "Menu de Lanches", desc: "Painel simples para cadastrar e alterar os lanches." },
                    { label: "Sacola de Compras", desc: "Soma automática do pedido com atualização rápida." },
                    { label: "Avaliações", desc: "Deixar notas e mensagens no perfil do vendedor." }
                  ].map((feat, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="mt-0.5 text-sky-400">
                        <Check size={14} />
                      </div>
                      <div>
                        <h5 className="text-xs font-medium text-white">{feat.label}</h5>
                        <p className="text-[10px] text-zinc-400 mt-0.5">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/5 pt-6 mt-6">
                <h5 className="text-xs font-mono text-zinc-400 mb-2">Funcionamento Real</h5>
                <p className="text-xs text-zinc-500 font-light leading-relaxed">
                  O projeto foi testado em computadores e servidores reais de teste, facilitando a portabilidade rápida para qualquer computador de desenvolvimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTROS PROJETOS */}
      <section id="projetos" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <div className="mb-16">
          <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">Catálogo</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">Outros Projetos</h2>
          <p className="text-[#A1A1AA] mt-3 font-light max-w-xl">
            Sistemas criados para resolver pequenas tarefas automáticas e estudos de código estruturado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Sistema Escolar Java",
              desc: "Projeto feito para organizar dados de alunos e matérias utilizando Java puro, focando em manter as informações bem separadas e fáceis de ler.",
              tags: ["Java", "Computação", "Terminal"],
              git: "https://github.com/LuizGabrielDivino"
            },
            {
              title: "Automações com Python",
              desc: "Arquivos criados para organizar pastas do computador, extrair textos de páginas na internet e fazer cópias de segurança de forma rápida.",
              tags: ["Python", "Automação", "Scripts"],
              git: "https://github.com/LuizGabrielDivino"
            },
            {
              title: "API Rest NestJS",
              desc: "Sistema construído para simular o estoque de uma empresa, testando a segurança da entrada das informações com validações simples.",
              tags: ["NestJS", "TypeScript", "Estudo"],
              git: "https://github.com/LuizGabrielDivino"
            }
          ].map((proj, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-white/5 bg-zinc-900/10 flex flex-col justify-between hover:border-zinc-800 transition-all duration-300 clickable-card">
              <div>
                <div className="flex gap-2 mb-4">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 text-[9px] font-mono rounded bg-white/[0.02] text-zinc-400 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{proj.title}</h3>
                <p className="text-xs text-[#A1A1AA] font-light leading-relaxed mb-6">{proj.desc}</p>
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-2">
                <a 
                  href={proj.git} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition"
                >
                  <Terminal size={14} />
                  ver_codigo
                </a>
                <span className="text-[10px] font-mono text-zinc-600">Concluído</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JORNADA PRÁTICA (TIMELINE) */}
      <section id="timeline" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <div className="mb-16 text-center max-w-xl mx-auto">
          <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">Histórico</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">Jornada de Aprendizado</h2>
          <p className="text-[#A1A1AA] mt-3 font-light">
            Evolução de estudos práticos desde o início na programação até o foco atual.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto pl-6 md:pl-0">
          {/* Central Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-sky-400/50 via-zinc-800 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {TIMELINE_EVENTS.map((evt, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center">
                  {/* Point Marker */}
                  <div className="absolute left-6 md:left-1/2 w-3.5 h-3.5 rounded-full bg-[#09090B] border-2 border-sky-400 -translate-x-1/2 z-10" />

                  <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12'}`}>
                    <span className="text-xs font-mono text-sky-400 font-semibold">{evt.year}</span>
                    <h3 className="text-base font-semibold text-white mt-1.5 mb-1">{evt.title}</h3>
                    <p className="text-xs text-[#A1A1AA] font-light leading-relaxed max-w-md md:ml-auto md:mr-0">{evt.desc}</p>
                  </div>
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FILOSOFIA DE DESENVOLVIMENTO */}
      <section id="filosofia" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <div className="mb-16">
          <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">Valores</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">Como eu Gosto de Programar</h2>
          <p className="text-[#A1A1AA] mt-3 font-light max-w-xl">
            Regras simples que sigo em todos os meus projetos para garantir um bom resultado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Código Organizado",
              desc: "Uso nomes claros para variáveis e divido o código em pequenas partes. Fica fácil de consertar e qualquer colega consegue ler sem mistérios.",
              icon: Code2
            },
            {
              title: "Ser Prático",
              desc: "Foco total em fazer o sistema funcionar para resolver o problema de verdade, sem inventar caminhos difíceis e sem enrolação.",
              icon: Zap
            },
            {
              title: "Foco no Usuário",
              desc: "A tela deve ser bonita, mas acima de tudo deve ser fácil de mexer em celulares e computadores, abrindo tudo de forma rápida.",
              icon: ShieldCheck
            }
          ].map((ph, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-white/5 bg-zinc-900/10">
              <div className="text-sky-400 mb-4">
                <ph.icon size={22} />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{ph.title}</h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">{ph.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIÊNCIA E FORMAÇÃO */}
      <section className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Practical Experience */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Briefcase size={20} className="text-sky-400" />
              <h3 className="text-lg font-semibold text-white">Trajetória Prática</h3>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl border border-white/5 bg-zinc-900/10">
                <span className="text-[10px] font-mono text-zinc-500">Desenvolvedor de Projetos Pessoais</span>
                <h4 className="text-sm font-semibold text-white mt-1 mb-2">Construção de Sistemas Próprios</h4>
                <p className="text-xs text-[#A1A1AA] font-light leading-relaxed">
                  Criação de projetos completos do zero. Desenvolvo as telas que o usuário mexe, organizo os dados no banco de dados e preparo o projeto para rodar em computadores de teste usando Docker.
                </p>
              </div>
            </div>
          </div>

          {/* Education Block */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap size={20} className="text-sky-400" />
              <h3 className="text-lg font-semibold text-white">Formação Acadêmica</h3>
            </div>

            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl border border-white/5 bg-zinc-900/10">
                <span className="text-[10px] font-mono text-zinc-500">Instituto Federal de Educação, Ciência e Tecnologia (IFRN)</span>
                <h4 className="text-sm font-semibold text-white mt-1 mb-2">Formação de Base em Tecnologia</h4>
                <p className="text-xs text-[#A1A1AA] font-light leading-relaxed">
                  Estudo de lógica matemática, algoritmos de computador, redes para entender a internet e formas organizadas de gerenciar dados estruturados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5 relative">
        <div className="absolute bottom-[10%] left-[5%] w-[45vw] h-[45vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400/10 via-transparent to-transparent blur-[110px] pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">Conexão</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6">Falar Comigo</h2>
            <p className="text-[#A1A1AA] font-light text-sm leading-relaxed mb-8">
              Estou à procura de uma oportunidade para atuar como desenvolvedor júnior ou de estágio. Sinta-se livre para entrar em contato!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-zinc-300">
                <Mail size={16} className="text-sky-400" />
                <span className="text-xs font-mono">gabrielsouza03062006@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <MapPin size={16} className="text-sky-400" />
                <span className="text-xs font-mono">Rio Grande do Norte, Brasil</span>
              </div>
            </div>

            {/* Social handles bar */}
            <div className="flex items-center gap-3 mt-8">
              <a 
                href="https://github.com/LuizGabrielDivino" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-sky-400/10 hover:text-sky-400 hover:border-sky-400/20 transition-all duration-300"
                aria-label="GitHub Perfil"
              >
                <GithubIcon />
              </a>
              <a 
                href="https://www.linkedin.com/in/luiz-gabriel-do-amor-divino-souza-4a307b25a/" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-sky-400/10 hover:text-sky-400 hover:border-sky-400/20 transition-all duration-300"
                aria-label="LinkedIn Perfil"
              >
                <LinkedinIcon />
              </a>
              <a 
                href="/curriculo.pdf" 
                download 
                className="flex items-center gap-2 bg-white/5 border border-white/5 text-zinc-300 px-5 py-3 rounded-xl text-xs font-semibold hover:bg-white/10 hover:text-white transition-all"
              >
                <Download size={14} />
                Baixar Currículo
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Quick email link component block */}
            <div className="glass-card p-8 rounded-3xl border border-white/5 bg-zinc-900/10 h-full flex flex-col justify-between">
              <div>
                <h4 className="text-base font-semibold text-white mb-2">Enviar um E-mail Direto</h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-8">
                  Clique no botão abaixo para abrir o seu aplicativo de e-mail e mandar uma mensagem rapidamente.
                </p>
              </div>

              <a 
                href="mailto:gabrielsouza03062006@gmail.com?subject=Oportunidade%20-%20Software%20Developer"
                className="w-full flex items-center justify-center gap-2 bg-sky-500 text-black py-4 rounded-xl font-medium text-xs hover:bg-sky-400 transition-all shadow-md"
              >
                <Send size={14} />
                Enviar Mensagem
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A1A1AA] font-light">
          <p>© {new Date().getFullYear()} Luiz Gabriel. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 font-mono text-[10px]">
            <span>Next.js</span>
            <span className="text-zinc-700">•</span>
            <span>Tailwind CSS</span>
            <span className="text-zinc-700">•</span>
            <span>Framer Motion</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function InteractiveSimulator() {
  const [activeTab, setActiveTab] = useState<'auth' | 'vendor' | 'cart'>('auth');
  const [username, setUsername] = useState('aluno@ifrn.edu.br');
  const [password, setPassword] = useState('••••••••');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [productName, setProductName] = useState('Bolo de Pote de Chocolate');
  const [productPrice, setProductPrice] = useState('5.00');
  const [isProductSaved, setIsProductSaved] = useState(false);
  const [showStatusNotification, setShowStatusNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState('');

  // Cart actions simulation
  const [cartItems, setCartItems] = useState([
    { id: 1, item: 'Misto Quente Escolar', price: 4.50, qty: 1 }
  ]);

  const triggerNotification = (msg: string) => {
    setNotificationMsg(msg);
    setShowStatusNotification(true);
    setTimeout(() => {
      setShowStatusNotification(false);
    }, 3000);
  };

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticated(true);
    triggerNotification('✓ Login feito com JWT estudantil!');
    setTimeout(() => {
      setActiveTab('vendor');
    }, 1000);
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProductSaved(true);
    triggerNotification(`✓ Produto "${productName}" adicionado ao estoque!`);
    setTimeout(() => {
      setIsProductSaved(false);
    }, 2500);
  };

  return (
    <div className="w-full max-w-md bg-[#0F0F11]/90 rounded-xl border border-white/5 p-5 text-left text-xs text-zinc-300 font-sans shadow-2xl relative">
      
      {/* Simulation Nav Tab Controls */}
      <div className="flex border-b border-white/5 mb-4">
        {[
          { id: 'auth', label: 'Autenticação' },
          { id: 'vendor', label: 'Vendedor' },
          { id: 'cart', label: 'Carrinho' }
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as 'auth' | 'vendor' | 'cart')}
            className={`flex-1 pb-2 text-[10px] font-mono font-medium border-b-2 transition ${
              activeTab === tab.id 
                ? 'border-sky-400 text-sky-400' 
                : 'border-transparent text-zinc-500 hover:text-zinc-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Notification Area */}
      <AnimatePresence>
        {showStatusNotification && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-12 left-4 right-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg p-2.5 text-[10px] font-mono text-center z-10 backdrop-blur-md"
          >
            {notificationMsg}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Simulator Component Render Body */}
      {activeTab === 'auth' && (
        <form onSubmit={handleAuth} className="space-y-3 py-1">
          <div>
            <label className="block text-[10px] font-mono text-zinc-500 mb-1">Matrícula Escolar (JWT User)</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-zinc-950/60 border border-white/5 rounded px-2.5 py-1.5 text-[11px] font-mono text-zinc-300 focus:outline-none focus:border-sky-400/50"
            />
          </div>
          <div>
            <label className="block text-[10px] font-mono text-zinc-500 mb-1">Senha do Aluno</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-zinc-950/60 border border-white/5 rounded px-2.5 py-1.5 text-[11px] font-mono text-zinc-300 focus:outline-none"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-zinc-800 text-white py-1.5 rounded text-[10px] font-mono font-bold hover:bg-sky-400 hover:text-black transition duration-300"
          >
            {isAuthenticated ? '✓ Autenticado via JWT' : 'Enviar Credenciais'}
          </button>
        </form>
      )}

      {activeTab === 'vendor' && (
        <form onSubmit={handleAddProduct} className="space-y-3 py-1">
          <div className="flex items-center justify-between bg-zinc-950/40 p-2 rounded border border-white/5 mb-1.5">
            <span className="text-[10px] font-mono text-zinc-400">ID de Aluno: Luiz Gabriel</span>
            <span className="text-[10px] font-mono text-sky-400 font-bold">Vendas: R$ 0,00</span>
          </div>
          <div>
            <label className="block text-[10px] font-mono text-zinc-500 mb-1">Cadastrar Alimento</label>
            <input 
              type="text" 
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Ex: Bolo de Cenoura"
              className="w-full bg-zinc-950/60 border border-white/5 rounded px-2.5 py-1.5 text-[11px] text-zinc-300 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-[10px] font-mono text-zinc-500 mb-1">Preço Sugerido (R$)</label>
            <input 
              type="text" 
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              className="w-full bg-zinc-950/60 border border-white/5 rounded px-2.5 py-1.5 text-[11px] font-mono text-zinc-300 focus:outline-none"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-zinc-800 text-white py-1.5 rounded text-[10px] font-mono font-bold hover:bg-sky-400 hover:text-black transition duration-300"
          >
            {isProductSaved ? '✓ Produto Salvo!' : 'Adicionar ao Estoque'}
          </button>
        </form>
      )}

      {activeTab === 'cart' && (
        <div className="space-y-3 py-1">
          <div className="space-y-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center bg-zinc-950/40 p-2 rounded border border-white/5">
                <div>
                  <span className="font-medium text-[11px] text-zinc-300">{item.item}</span>
                  <span className="block text-[9px] text-zinc-500 font-mono">Qtd: {item.qty}</span>
                </div>
                <span className="text-[11px] font-mono text-sky-400 font-bold">
                  R$ {(item.price * item.qty).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center border-t border-white/5 pt-2 mt-2 text-[10px] font-mono">
            <span className="text-zinc-500">Valor Total do Pedido</span>
            <span className="text-white font-bold">R$ {cartItems.reduce((acc, curr) => acc + (curr.price * curr.qty), 0).toFixed(2)}</span>
          </div>

          <button 
            type="button"
            onClick={() => triggerNotification('✓ Compra finalizada com sucesso no campus!')}
            className="w-full bg-zinc-800 text-white py-1.5 rounded text-[10px] font-mono font-bold hover:bg-sky-400 hover:text-black transition duration-300"
          >
            Simular Reservar Lanche
          </button>
        </div>
      )}
    </div>
  );
}