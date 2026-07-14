"use client";

import { PROFILE } from "@/constants";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#09090B] border-t border-[rgba(255,255,255,0.04)] py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Copyright */}
        <div className="text-center sm:text-left">
          <span className="text-[10px] text-[#A1A1AA] font-mono">
            © {new Date().getFullYear()} {PROFILE.name}. Todos os direitos reservados.
          </span>
        </div>

        {/* Center: Technical Stack Info */}
        <div className="text-center">
          <span className="text-[9px] text-[#A1A1AA]/50 font-mono">
            Next.js App Router • Tailwind CSS v4 • Framer Motion
          </span>
        </div>

        {/* Right: Back to Top */}
        <div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors group"
          >
            <span>Voltar ao topo</span>
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
