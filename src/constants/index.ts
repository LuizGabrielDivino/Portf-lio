export const PROFILE = {
  name: "Luiz Gabriel do Amor Divino Souza",
  headline: "Software Developer",
  role: "Full-Stack Developer",
  location: "Rio Grande do Norte, Brasil",
  availability: "Disponível para trabalho remoto",
  email: "luizgabrieldivino@gmail.com",
  github: "https://github.com/LuizGabrielDivino",
  linkedin: "https://linkedin.com/in/luiz-gabriel-divino",
  resumeUrl: "#",
};

export const ABOUT = {
  paragraphs: [
    "Sou um desenvolvedor focado em construir aplicações web modernas, com sólida base teórica e prática em todo o ciclo de desenvolvimento de software, do banco de dados ao deploy.",
    "Busco criar soluções funcionais que resolvam problemas reais, aplicando princípios de arquitetura limpa, código legível e otimização de performance. Acredito que o verdadeiro aprendizado acontece na prática, projetando e resolvendo desafios reais do dia a dia de engenharia.",
    "Minha experiência envolve a criação de APIs RESTful robustas, integrações com bancos relacionais, conteinerização com Docker e a construção de interfaces web dinâmicas e responsivas. Estou em constante evolução, expandindo atualmente meus conhecimentos em arquiteturas escaláveis com Java e Spring Boot.",
  ],
};

export interface Technology {
  name: string;
  level: "Advanced" | "Intermediate" | "Learning";
}

export interface TechCategory {
  title: string;
  techs: Technology[];
}

export const TECHNOLOGIES: TechCategory[] = [
  {
    title: "Backend",
    techs: [
      { name: "NestJS", level: "Advanced" },
      { name: "Node.js", level: "Advanced" },
      { name: "Prisma ORM", level: "Advanced" },
      { name: "Java", level: "Learning" },
      { name: "Spring Boot", level: "Learning" },
    ],
  },
  {
    title: "Frontend",
    techs: [
      { name: "React", level: "Advanced" },
      { name: "Next.js (App Router)", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Angular", level: "Intermediate" },
      { name: "JavaScript / CSS / HTML", level: "Advanced" },
    ],
  },
  {
    title: "Banco de Dados",
    techs: [
      { name: "PostgreSQL", level: "Advanced" },
    ],
  },
  {
    title: "Infraestrutura & Ferramentas",
    techs: [
      { name: "Docker", level: "Advanced" },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Linux / Bash", level: "Advanced" },
    ],
  },
  {
    title: "Autenticação & Segurança",
    techs: [
      { name: "JWT (JSON Web Tokens)", level: "Advanced" },
      { name: "OAuth 2.0 (Google Auth)", level: "Advanced" },
    ],
  },
];

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface PrimaryProject {
  title: string;
  tagline: string;
  description: string;
  features: ProjectFeature[];
  technologies: string[];
  architecture: {
    title: string;
    description: string;
    items: string[];
  };
  evolution: {
    phase: string;
    title: string;
    description: string;
  }[];
}

export const PRIMARY_PROJECT: PrimaryProject = {
  title: "CampusMarket",
  tagline: "Marketplace acadêmico descentralizado para venda de alimentos entre estudantes.",
  description:
    "Uma plataforma completa desenvolvida para solucionar a logística e comercialização interna de alimentos no campus. Centraliza a oferta de produtos de estudantes-vendedores, facilitando a busca, pedido e feedback entre a comunidade acadêmica. O projeto funciona de ponta a ponta como um produto SaaS de verdade.",
  features: [
    { title: "Autenticação Segura", description: "Login por email/senha com JWT e integração direta com Google OAuth para acesso rápido dos estudantes." },
    { title: "Dashboard do Vendedor", description: "Painel intuitivo com métricas de vendas, faturamento, histórico de pedidos e controle de estoque em tempo real." },
    { title: "Gestão de Produtos", description: "Interface completa para cadastrar, editar, pausar e excluir anúncios, incluindo upload de múltiplas imagens." },
    { title: "Carrinho Dinâmico", description: "Experiência de compra integrada que permite agrupar itens por vendedor, calcular totais e gerenciar quantidades de forma instantânea." },
    { title: "Gestão de Pedidos", description: "Fluxo de estados do pedido (Pendente, Aceito, Pronto para Entrega, Finalizado, Cancelado) com notificações visuais para comprador e vendedor." },
    { title: "Sistema de Avaliações", description: "Feedback transparente com notas e comentários sobre a qualidade da comida e da entrega, gerando reputação para os vendedores." },
    { title: "Banco PostgreSQL", description: "Modelagem relacional otimizada com índices e chaves estrangeiras gerenciadas pelo Prisma ORM." },
    { title: "Ambiente Docker", description: "Orquestração completa dos serviços de banco e aplicação usando Docker Compose para isolamento e reprodutibilidade." },
    { title: "Deploy Automatizado", description: "Configuração de CI/CD para deploy seguro de frontend e backend em ambientes na nuvem." },
  ],
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "NestJS",
    "Prisma ORM",
    "PostgreSQL",
    "Docker",
    "Google OAuth",
    "JWT",
  ],
  architecture: {
    title: "Arquitetura Decoupled & Escalável",
    description: "O CampusMarket foi desenvolvido separando as responsabilidades de interface e regras de negócio para assegurar escalabilidade e fácil manutenção.",
    items: [
      "Frontend: SPA/SSR otimizado em Next.js com renderização híbrida para carregamento imediato das páginas estáticas e hidratação dinâmica dos painéis interativos.",
      "Backend API: Serviço NestJS estruturado em módulos seguindo os princípios SOLID, injetando provedores para autenticação, repositórios e serviços.",
      "Banco de Dados: Instância gerenciada do PostgreSQL com modelo relacional normalizado para rastreabilidade de pedidos, produtos e transações.",
      "Segurança: Middleware de proteção de rotas com validação de assinatura JWT no backend e contextos seguros de React no frontend."
    ]
  },
  evolution: [
    {
      phase: "Fase 1: Concepção",
      title: "Modelagem de Dados e Casos de Uso",
      description: "Levantamento das regras de negócio do campus e modelagem do banco de dados relacional. Escrita dos esquemas do Prisma para tabelas de usuários, produtos, pedidos e feedbacks.",
    },
    {
      phase: "Fase 2: Backend Core",
      title: "Desenvolvimento da API Restful com NestJS",
      description: "Criação dos módulos de autenticação, criptografia de senhas, validação com JWT, controladores de produtos e o fluxo de transações de pedidos.",
    },
    {
      phase: "Fase 3: Interface & UX",
      title: "Construção do App Next.js",
      description: "Desenvolvimento do frontend responsivo. Integração com APIs do backend usando hooks para sincronização do estado global do carrinho de compras e painel administrativo.",
    },
    {
      phase: "Fase 4: Integrações Avançadas",
      title: "Google Login & Imagens",
      description: "Implementação do fluxo de login com Google Client SDK e envio seguro de imagens de produtos, armazenando metadados no banco e arquivos de forma otimizada.",
    },
    {
      phase: "Fase 5: Conteinerização e Deploy",
      title: "Dockerização e DevOps",
      description: "Escrita dos arquivos Dockerfile e docker-compose.yml. Testes de integração em ambiente local simulado e deploy de produção em serviços cloud.",
    }
  ]
};

export interface OtherProject {
  title: string;
  description: string;
  category: "Java" | "Python" | "TypeScript";
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  highlights: string[];
}

export const OTHER_PROJECTS: OtherProject[] = [
  {
    title: "SalesManager API (Java)",
    description:
      "API robusta desenvolvida em Java 17 e Spring Boot para controle de estoque corporativo e fluxo de vendas. Conta com relatórios automatizados, filtros avançados de paginação e validação estrita de dados.",
    category: "Java",
    technologies: ["Java", "Spring Boot", "Spring Security", "Hibernate", "PostgreSQL", "JUnit 5"],
    githubUrl: "https://github.com/LuizGabrielDivino/sales-manager-spring",
    highlights: ["Segurança com Spring Security & JWT", "Testes unitários e de integração", "Documentação interativa com Swagger/OpenAPI"],
  },
  {
    title: "TaskFlow CLI & Automations",
    description:
      "Suíte de scripts em Python para automação de tarefas cotidianas, incluindo backups incrementais de diretórios, scraping de dados financeiros e integração de notificações no Discord e Telegram.",
    category: "Python",
    technologies: ["Python", "BeautifulSoup", "Selenium", "Requests", "Cron / Systemd"],
    githubUrl: "https://github.com/LuizGabrielDivino/python-automations",
    highlights: ["Extração de dados assíncrona", "Agendamento nativo via systemd", "Notificação webhook em tempo real"],
  },
  {
    title: "DevMetrics Engine",
    description:
      "Aplicação TypeScript rodando em Node.js que consome dados da API Rest do GitHub, calcula estatísticas avançadas de código do usuário e formata gráficos SVG dinâmicos para exibição em perfis.",
    category: "TypeScript",
    technologies: ["TypeScript", "Node.js", "Express", "Axios", "SVG Generation", "Jest"],
    githubUrl: "https://github.com/LuizGabrielDivino/dev-metrics",
    demoUrl: "https://dev-metrics-showcase.vercel.app",
    highlights: ["Cache local de requisições", "Geração matemática de SVGs responsivos", "Testes de API simulados com MSW"],
  }
];

export interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: "terminal" | "database" | "server" | "layout" | "award" | "target";
}

export const TIMELINE: TimelineEvent[] = [
  {
    year: "2023",
    title: "Início na Programação",
    subtitle: "Primeiros contatos teóricos e práticos",
    description: "Ingresso no Instituto Federal do Rio Grande do Norte (IFRN). Aprendizado de lógica de programação, algoritmos estruturados, HTML, CSS e os conceitos fundamentais da web.",
    iconName: "terminal",
  },
  {
    year: "2023.2",
    title: "Primeiras APIs",
    subtitle: "Descoberta do desenvolvimento backend",
    description: "Criação de rotas, manipulação de requisições HTTP e requisições assíncronas em JavaScript/Node.js. Desenvolvimento das primeiras lógicas de manipulação de dados na memória.",
    iconName: "server",
  },
  {
    year: "2024",
    title: "Bancos de Dados & Docker",
    subtitle: "Persistência e reprodutibilidade",
    description: "Estudo de bancos relacionais (PostgreSQL), modelagem de dados, índices e comandos SQL. Conteinerização de aplicações com Docker para evitar o famoso 'na minha máquina funciona'.",
    iconName: "database",
  },
  {
    year: "2024.2",
    title: "Evolução Backend: NestJS",
    subtitle: "TypeScript escalável no servidor",
    description: "Migração de projetos Express simples para a arquitetura estruturada do NestJS. Domínio de Injeção de Dependências, Pipes, Guards e integração robusta com Prisma ORM.",
    iconName: "server",
  },
  {
    year: "2025",
    title: "Modern Frontend: Angular & React",
    subtitle: "Construindo interfaces ricas",
    description: "Imersão em SPA modernas. Aprendizado de Angular (componentes, diretivas, serviços) e consolidação em React e Next.js com App Router para otimização de renderização e SEO.",
    iconName: "layout",
  },
  {
    year: "2025.2",
    title: "Lançamento do CampusMarket",
    subtitle: "Um produto real de ponta a ponta",
    description: "Unificação de todo o conhecimento para criar um marketplace full-stack funcional. Docker Compose integrando NestJS + Postgres, com frontend Next.js de alto desempenho.",
    iconName: "award",
  },
  {
    year: "Próximo Objetivo",
    title: "Java + Spring Boot",
    subtitle: "Arquiteturas corporativas escaláveis",
    description: "Foco atual no aprofundamento em Java, ecossistema Spring (Security, Data, MVC) para construir APIs corporativas de alta disponibilidade e microsserviços.",
    iconName: "target",
  },
];

export const PHILOSOPHY = [
  {
    title: "Arquitetura Limpa",
    description: "Regras de negócio isoladas de detalhes de infraestrutura. Código fácil de estender, testar e manter a longo prazo.",
    icon: "layers",
  },
  {
    title: "Código Organizado",
    description: "Convenções de nomenclatura claras, funções pequenas com responsabilidade única e documentação onde ela realmente importa.",
    icon: "code",
  },
  {
    title: "Performance e Otimização",
    description: "Atenção ao carregamento de imagens, chamadas de banco otimizadas, consultas paginadas e código leve no cliente.",
    icon: "zap",
  },
  {
    title: "Foco no Usuário (UX)",
    description: "Interfaces acessíveis, transições que dão feedback visual instantâneo e layout responsivo que se adapta perfeitamente.",
    icon: "eye",
  },
  {
    title: "Escalabilidade",
    description: "Sistemas desenhados para crescer horizontalmente, utilizando conteinerização e boas práticas de banco de dados.",
    icon: "trending-up",
  },
  {
    title: "Soluções Reais",
    description: "Software existe para resolver problemas concretos de pessoas reais. Menos complexidade acidental, mais valor entregue.",
    icon: "check-circle",
  },
];

export const DIFFERENTIALS = [
  { title: "Desenvolvimento Full Stack", description: "Capacidade de planejar e codificar desde o esquema do banco de dados até a experiência do usuário final no navegador." },
  { title: "APIs RESTful e SOLID", description: "Construção de endpoints organizados, seguindo boas práticas HTTP, tratamento global de erros e validações estritas de payload." },
  { title: "Deploy e Dockerização", description: "Habilidade de configurar ambientes reprodutíveis em containers e automatizar processos básicos de CI/CD para deploy em nuvem." },
  { title: "Segurança e Autenticação", description: "Implementação de segurança baseada em tokens JWT expiráveis, controle de acesso por níveis e fluxos de OAuth 2.0 (Google Login)." },
  { title: "Modelagem Relacional", description: "Estruturação eficiente de dados SQL em PostgreSQL, otimização de relacionamentos, transações seguras e uso avançado de ORMs como Prisma." },
  { title: "Frontend Dinâmico e Otimizado", description: "Criação de páginas rápidas, SEO-friendly e acessíveis usando Next.js, com controle fino de estados e animações fluidas." },
];
