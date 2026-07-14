import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luiz Gabriel | Software Developer",
  description: "Portfólio de Luiz Gabriel do Amor Divino Souza, Software Developer focado em aplicações web modernas. Especialista em NestJS, React, Node.js, PostgreSQL e conteinerização com Docker. Disponível para trabalho remoto.",
  keywords: [
    "Luiz Gabriel Souza",
    "Software Developer",
    "Desenvolvedor Full Stack",
    "Trabalho Remoto",
    "NestJS",
    "Next.js",
    "React",
    "Docker",
    "PostgreSQL",
    "Spring Boot",
    "Java"
  ],
  authors: [{ name: "Luiz Gabriel do Amor Divino Souza" }],
  creator: "Luiz Gabriel do Amor Divino Souza",
  metadataBase: new URL("https://luizgabriel.dev"), // Fallback base URL for metadata
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://luizgabriel.dev",
    title: "Luiz Gabriel | Software Developer",
    description: "Portfólio premium de Luiz Gabriel. Conheça o CampusMarket, meus outros projetos e minha trajetória no desenvolvimento full-stack.",
    siteName: "Luiz Gabriel Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luiz Gabriel | Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luiz Gabriel | Software Developer",
    description: "Conheça meus projetos, timeline de evolução e filosofia de desenvolvimento de software.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#09090B",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#09090B] text-[#FAFAFA] flex flex-col selection:bg-blue-600/30 selection:text-blue-200">
        {children}
      </body>
    </html>
  );
}
