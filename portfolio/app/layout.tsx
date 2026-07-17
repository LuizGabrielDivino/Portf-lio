import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configurando a fonte Inter
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
});

export const metadata: Metadata = {
  title: "Luiz Gabriel | Software Developer",
  description: "Portfólio de Luiz Gabriel do Amor Divino Souza, Desenvolvedor de Software focado em aplicações web modernas, escaláveis e de alta performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-background text-text antialiased selection:bg-primary/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}