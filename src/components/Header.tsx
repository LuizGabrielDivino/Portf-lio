"use client";

import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { PROFILE } from "@/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracker for active nav styling
      const sections = ["inicio", "sobre", "tecnologias", "projeto-principal", "projetos", "timeline", "filosofia", "contato"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", id: "inicio" },
    { label: "Sobre", id: "sobre" },
    { label: "Techs", id: "tecnologias" },
    { label: "CampusMarket", id: "projeto-principal" },
    { label: "Projetos", id: "projetos" },
    { label: "Trajetória", id: "timeline" },
    { label: "Filosofia", id: "filosofia" },
    { label: "Contato", id: "contato" },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-[rgba(255,255,255,0.06)] bg-[#09090B]/85 backdrop-blur-md"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("inicio")}
          className="text-lg font-bold tracking-tight text-[#FAFAFA] hover:text-blue-500 transition-colors flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
          <span>Luiz Gabriel</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-xs font-medium tracking-wider uppercase transition-colors hover:text-[#FAFAFA] ${
                activeSection === link.id
                  ? "text-[#FAFAFA] border-b border-blue-500 pb-0.5"
                  : "text-[#A1A1AA]"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Quick Socials / CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <button
            onClick={() => handleNavClick("contato")}
            className="px-4 py-1.5 rounded-full bg-[#111111] hover:bg-blue-600 border border-[rgba(255,255,255,0.06)] hover:border-blue-500 text-xs font-medium transition-all duration-300"
          >
            Fale Comigo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#FAFAFA] hover:text-blue-500 transition-colors"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 border-b border-[rgba(255,255,255,0.06)] bg-[#09090B] px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium tracking-wide py-2 text-left transition-colors border-l-2 pl-3 ${
                  activeSection === link.id
                    ? "text-[#FAFAFA] border-blue-500 bg-blue-500/5"
                    : "text-[#A1A1AA] border-transparent"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="h-px bg-[rgba(255,255,255,0.06)] my-2" />
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
            <button
              onClick={() => handleNavClick("contato")}
              className="px-4 py-2 rounded-full bg-[#111111] hover:bg-blue-600 border border-[rgba(255,255,255,0.06)] text-xs font-medium transition-all"
            >
              Fale Comigo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
