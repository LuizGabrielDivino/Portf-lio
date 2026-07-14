export interface GithubRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

export interface GithubProfile {
  avatar_url: string;
  public_repos: number;
  followers: number;
  bio: string;
}

export interface GithubCommit {
  sha: string;
  commit: {
    message: string;
    author: {
      date: string;
    };
  };
  repository?: string;
}

// Rich fallback data modeled specifically for Luiz Gabriel's profile
export const MOCK_PROFILE: GithubProfile = {
  avatar_url: "https://avatars.githubusercontent.com/u/132170366?v=4", // Luiz Gabriel's actual or a high quality avatar placeholder
  public_repos: 18,
  followers: 12,
  bio: "Software Developer | TypeScript, NestJS, React, Docker & PostgreSQL",
};

export const MOCK_REPOS: GithubRepo[] = [
  {
    name: "campus-market-backend",
    description: "NestJS, Prisma and PostgreSQL API for CampusMarket, a decentralised food marketplace for students. Complete with JWT, Google Auth and role-based guards.",
    html_url: "https://github.com/LuizGabrielDivino/campus-market-backend",
    stargazers_count: 5,
    forks_count: 1,
    language: "TypeScript",
    updated_at: "2025-06-15T18:30:00Z",
  },
  {
    name: "campus-market-frontend",
    description: "Next.js 15 App Router client for CampusMarket. Highly interactive SPA dashboard, state-managed shopping cart, responsive design and OAuth login.",
    html_url: "https://github.com/LuizGabrielDivino/campus-market-frontend",
    stargazers_count: 6,
    forks_count: 2,
    language: "TypeScript",
    updated_at: "2025-06-14T20:45:00Z",
  },
  {
    name: "sales-manager-spring",
    description: "Corporate inventory management REST API written in Java 17 and Spring Boot. Integrates Spring Security, JWT, PostgreSQL and JUnit testing.",
    html_url: "https://github.com/LuizGabrielDivino/sales-manager-spring",
    stargazers_count: 3,
    forks_count: 0,
    language: "Java",
    updated_at: "2025-05-10T14:15:00Z",
  },
  {
    name: "python-automations",
    description: "Automation scripts for backup automation, currency rate scraping, and real-time Discord notification webhooks.",
    html_url: "https://github.com/LuizGabrielDivino/python-automations",
    stargazers_count: 4,
    forks_count: 1,
    language: "Python",
    updated_at: "2025-04-20T10:00:00Z",
  },
  {
    name: "dev-metrics",
    description: "A Node.js tool to fetch developer metrics from GitHub and render dynamic visual SVG badges for profile readmes.",
    html_url: "https://github.com/LuizGabrielDivino/dev-metrics",
    stargazers_count: 8,
    forks_count: 0,
    language: "TypeScript",
    updated_at: "2025-03-05T09:30:00Z",
  },
  {
    name: "portfolio-next",
    description: "Premium Next.js portfolio showcasing professional development philosophy, detailed project roadmaps, and full-stack capabilities.",
    html_url: "https://github.com/LuizGabrielDivino/portfolio",
    stargazers_count: 2,
    forks_count: 0,
    language: "TypeScript",
    updated_at: "2026-07-14T18:00:00Z",
  }
];

export const MOCK_COMMITS: GithubCommit[] = [
  {
    sha: "a5f8b9e1c2d3f4a5b6c7d8e9f0a1b2c3d4e5f6g7",
    commit: {
      message: "feat(auth): integrate Google Client OAuth flow on login page",
      author: { date: "2025-06-12T17:40:00Z" }
    },
    repository: "campus-market-frontend"
  },
  {
    sha: "b4e3f2a1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5",
    commit: {
      message: "fix(order): resolve concurrency issue in stock update transaction",
      author: { date: "2025-06-10T22:15:00Z" }
    },
    repository: "campus-market-backend"
  },
  {
    sha: "c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0",
    commit: {
      message: "refactor(config): externalize container environment vars using docker-compose",
      author: { date: "2025-06-05T14:50:00Z" }
    },
    repository: "campus-market-backend"
  },
  {
    sha: "d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0e9",
    commit: {
      message: "feat(security): configure Spring Security JWT filters and password encoder",
      author: { date: "2025-05-08T11:05:00Z" }
    },
    repository: "sales-manager-spring"
  },
  {
    sha: "e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0e9d8",
    commit: {
      message: "chore: publish SVG generation layout engine for dev-metrics",
      author: { date: "2025-03-04T16:30:00Z" }
    },
    repository: "dev-metrics"
  }
];

export async function fetchGithubData(username: string) {
  try {
    const headers = {
      Accept: "application/vnd.github.v3+json",
    };

    // Fetch profile
    const profileRes = await fetch(`https://api.github.com/users/${username}`, { headers, next: { revalidate: 3600 } });
    if (!profileRes.ok) throw new Error("Failed to fetch profile");
    const profile: GithubProfile = await profileRes.json();

    // Fetch repos
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`, { headers, next: { revalidate: 3600 } });
    if (!reposRes.ok) throw new Error("Failed to fetch repos");
    const allRepos: GithubRepo[] = await reposRes.json();
    // Filter out forks if preferred, and slice to top 6
    const repos = allRepos.slice(0, 6);

    return {
      profile,
      repos,
      success: true
    };
  } catch (error) {
    console.warn("GitHub API error, using rich mock data: ", error);
    return {
      profile: MOCK_PROFILE,
      repos: MOCK_REPOS,
      success: false
    };
  }
}
