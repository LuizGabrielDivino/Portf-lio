"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchGithubData, MOCK_COMMITS, MOCK_PROFILE, MOCK_REPOS, GithubRepo, GithubProfile, GithubCommit } from "@/lib/github";
import { GitBranch, GitCommit, Code2, CalendarRange, ExternalLink, Activity } from "lucide-react";

export default function Stats() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{
    profile: GithubProfile;
    repos: GithubRepo[];
    commits: GithubCommit[];
  }>({
    profile: MOCK_PROFILE,
    repos: MOCK_REPOS,
    commits: MOCK_COMMITS,
  });

  useEffect(() => {
    async function loadStats() {
      // Luiz Gabriel's Github profile name
      const result = await fetchGithubData("LuizGabrielDivino");
      
      if (result.success) {
        // Attempt to fetch commits if profile succeeds
        try {
          const commitsRes = await fetch("https://api.github.com/users/LuizGabrielDivino/events", {
            headers: { Accept: "application/vnd.github.v3+json" }
          });
          
          if (commitsRes.ok) {
            const events = await commitsRes.json();
            // Filter push events and extract commits
            const pushEvents = events.filter((e: any) => e.type === "PushEvent");
            const extractedCommits: GithubCommit[] = [];
            
            for (const event of pushEvents) {
              if (event.payload?.commits) {
                const repoName = event.repo.name.split("/")[1] || event.repo.name;
                for (const c of event.payload.commits) {
                  extractedCommits.push({
                    sha: c.sha,
                    commit: {
                      message: c.message,
                      author: { date: event.created_at }
                    },
                    repository: repoName
                  });
                }
              }
            }

            if (extractedCommits.length > 0) {
              setData({
                profile: result.profile,
                repos: result.repos,
                commits: extractedCommits.slice(0, 5)
              });
              setLoading(false);
              return;
            }
          }
        } catch (e) {
          console.warn("Could not load real commits, using fallbacks.", e);
        }

        setData({
          profile: result.profile,
          repos: result.repos,
          commits: MOCK_COMMITS
        });
      }
      setLoading(false);
    }
    
    loadStats();
  }, []);

  const statCards = [
    {
      icon: <GitBranch size={16} className="text-blue-500" />,
      value: loading ? "..." : data.profile.public_repos,
      label: "Repositórios Públicos",
      desc: "APIs, bibliotecas e SPAs no GitHub"
    },
    {
      icon: <GitCommit size={16} className="text-sky-400" />,
      value: "450+",
      label: "Commits Realizados",
      desc: "Histórico consolidado de projetos"
    },
    {
      icon: <Code2 size={16} className="text-emerald-400" />,
      value: "14+",
      label: "Techs Estudadas",
      desc: "Do backend ao infra/deploy"
    },
    {
      icon: <CalendarRange size={16} className="text-amber-500" />,
      value: "35k+",
      label: "Linhas de Código",
      desc: "Estimativa em projetos reais"
    }
  ];

  return (
    <section id="estatisticas" className="py-24 relative overflow-hidden bg-[#09090B] border-t border-[rgba(255,255,255,0.02)]">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">
            [ 07 / METRICAS ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FAFAFA]">
            Métricas de Desenvolvimento
          </h2>
          <p className="text-sm text-[#A1A1AA] mt-2 max-w-xl">
            Indicadores quantitativos de progresso e atividade do código-fonte integrado diretamente do GitHub.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {statCards.map((card, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#111111] border border-[rgba(255,255,255,0.06)] flex flex-col justify-between"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-mono text-[#A1A1AA]">{card.label}</span>
                {card.icon}
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#FAFAFA] tracking-tight block">
                  {card.value}
                </span>
                <span className="text-[10px] text-[#A1A1AA] leading-normal mt-1 block">
                  {card.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Live Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Repository Activity List */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-6 px-1">
              <span className="text-xs font-bold text-[#A1A1AA]/60 uppercase tracking-widest font-mono flex items-center gap-1.5">
                <Activity size={14} className="text-blue-500 animate-pulse" /> Repositórios Recentes
              </span>
              <a
                href="https://github.com/LuizGabrielDivino"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
              >
                Ver tudo <ExternalLink size={10} />
              </a>
            </div>

            <div className="flex flex-col gap-3">
              {data.repos.slice(0, 4).map((repo, idx) => (
                <a
                  key={idx}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#111111] border border-[rgba(255,255,255,0.06)] hover:border-blue-500/20 hover:bg-[#121214] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                >
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-bold text-[#FAFAFA] group-hover:text-blue-400 transition-colors truncate">
                      {repo.name}
                    </span>
                    <span className="text-[10px] text-[#A1A1AA] leading-normal mt-1 truncate max-w-sm">
                      {repo.description || "Sem descrição fornecida."}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-[10px] font-mono shrink-0">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {repo.language || "TypeScript"}
                    </span>
                    {repo.stargazers_count > 0 && (
                      <span className="text-amber-400">★ {repo.stargazers_count}</span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Commits Feed */}
          <div className="lg:col-span-5">
            <h3 className="text-xs font-bold text-[#A1A1AA]/60 uppercase tracking-widest mb-6 px-1 font-mono">
              Feed de Commits Recentes
            </h3>

            <div className="p-5 rounded-xl bg-[#111111] border border-[rgba(255,255,255,0.06)] flex flex-col gap-4 font-mono text-[10px]">
              {data.commits.map((c, idx) => (
                <div key={idx} className="flex gap-3 pb-4 border-b border-white/5 last:border-b-0 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1" />
                    <div className="w-px flex-1 bg-white/5 my-1" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-blue-400 font-bold truncate max-w-[120px]">
                        {c.repository || "repo"}
                      </span>
                      <span className="text-[#A1A1AA]/50 text-[8px]">
                        {new Date(c.commit.author.date).toLocaleDateString("pt-BR", {
                          day: "numeric",
                          month: "short"
                        })}
                      </span>
                    </div>
                    
                    <p className="text-[#FAFAFA]/90 leading-relaxed font-sans text-xs line-clamp-2">
                      {c.commit.message}
                    </p>
                    
                    <span className="text-[#A1A1AA]/45 font-mono text-[8px] mt-1 block">
                      SHA: {c.sha.slice(0, 7)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
