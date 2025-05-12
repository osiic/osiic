"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms/Accordion";
import { DarkLightModeButton } from "@/components/molecules/DarkLightModeButton";

interface PersonalInfo {
  name: string;
  social_media: {
    platform: string;
    username: string;
    link: string;
  }[];
  games: {
    platform: string;
    username: string;
    link?: string;
  }[];
}

interface Organization {
  organization: string;
  role: string;
  year: string;
  activities: string[];
}

interface Project {
  title: string;
  tech: string[];
  description: string;
  link: string;
}

interface Article {
  title: string;
  published: string;
  summary: string;
  link: string;
}

interface Skills {
  hard_skills: string[];
  software_skills: string[];
  soft_skills: string[];
}

interface PortfolioData {
  personal_info: PersonalInfo;
  profile: string;
  organizations: Organization[];
  skills: Skills;
  projects: Project[];
  articles: Article[];
}

const data: PortfolioData = {
  personal_info: {
    name: "Osi ic",
    social_media: [
      {
        platform: "Instagram",
        username: "@nomiiistake",
        link: "https://instagram.com/nomiiistake",
      },
      {
        platform: "Instagram",
        username: "@ngetikin",
        link: "https://instagram.com/ngetikin",
      },
      {
        platform: "Discord",
        username: "@c.emy",
        link: "https://discord.com/users/c.emy",
      },
      {
        platform: "Twitter",
        username: "@cemy_id",
        link: "https://twitter.com/cemy_id",
      },
      {
        platform: "TikTok",
        username: "@ngetikin",
        link: "https://tiktok.com/@ngetikin",
      },
      {
        platform: "GitHub",
        username: "@osiic",
        link: "https://github.com/osiic",
      },
    ],
    games: [
      {
        platform: "Valorant",
        username: "noviice/novice",
        link: "https://tracker.gg/valorant/profile/noviice",
      },
      {
        platform: "Genshin Impact",
        username: "osiic",
        link: "https://genshin.hoyoverse.com/",
      },
      {
        platform: "Mobile Legends",
        username: "osiic",
        link: "https://m.mobilelegends.com/",
      },
      {
        platform: "Steam",
        username: "osiic",
        link: "https://steamcommunity.com/id/osiic",
      },
    ],
  },
  profile:
    "Seorang kreator yang tertarik pada pengembangan diri, edukasi, dan gaya hidup kreatif. Aktif mengeksplorasi coding, desain, dan pemikiran hukum serta bisnis. Lewat akun ini, aku membagikan proses belajar, karya, dan insight harian dengan harapan bisa tumbuh bareng komunitas yang punya visi serupa.",
  organizations: [
    {
      role: "Content Creator",
      organization: "Digital Community",
      year: "2020–Sekarang",
      activities: [
        "Creating tech-related content",
        "Community engagement",
        "Digital collaboration projects",
      ],
    },
    {
      role: "Gaming Enthusiast",
      organization: "Gaming Community",
      year: "2018–Sekarang",
      activities: [
        "Competitive gaming",
        "Game development discussions",
        "Esports events",
      ],
    },
  ],
  skills: {
    hard_skills: [
      "Content Creation",
      "Community Management",
      "Digital Marketing",
      "Basic Web Development",
      "Game Modding",
    ],
    software_skills: [
      "Adobe Creative Suite",
      "OBS Studio",
      "Streamlabs",
      "Video Editing Tools",
      "Social Media Platforms",
    ],
    soft_skills: [
      "Creativity",
      "Communication",
      "Team Collaboration",
      "Adaptability",
      "Problem Solving",
    ],
  },
  projects: [
    {
      title: "Community Website",
      tech: ["HTML/CSS", "JavaScript"],
      description: "A hub for digital creators to connect and collaborate.",
      link: "https://github.com/osiic/community-hub",
    },
    {
      title: "Gaming Content Series",
      tech: ["Video Production", "Streaming"],
      description: "A popular gaming tutorial and gameplay series.",
      link: "https://example.com/gaming-series",
    },
  ],
  articles: [
    {
      title: "Building Online Communities",
      published: "2023-05-20",
      summary:
        "Tips and strategies for growing and engaging digital communities.",
      link: "https://medium.com/osiic/community-building",
    },
    {
      title: "Content Creation for Beginners",
      published: "2023-02-15",
      summary:
        "Getting started with digital content creation across platforms.",
      link: "https://dev.to/osiic/content-creation",
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 font-[family-name:var(--font-geist-sans)] bg-background text-foreground">
      <header className="w-full max-w-6xl flex justify-between items-center mb-8">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
          loading="eager"
        />
        <DarkLightModeButton />
      </header>

      <main className="w-full max-w-6xl flex-1 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {data.personal_info.name}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {data.profile}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Social Media Card */}
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <h2 className="text-xl font-semibold mb-4">Social Media</h2>
            <ul className="space-y-3">
              {data.personal_info.social_media.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4"
                >
                  <strong className="w-24 flex-shrink-0">
                    {item.platform}:
                  </strong>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {item.username}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Game Accounts Card */}
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <h2 className="text-xl font-semibold mb-4">Game Accounts</h2>
            <ul className="space-y-3">
              {data.personal_info.games.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4"
                >
                  <strong className="w-24 flex-shrink-0">
                    {item.platform}:
                  </strong>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {item.username}
                    </a>
                  ) : (
                    <span>{item.username}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quick Links Card */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-xl font-semibold mb-4">Tautan Cepat</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🤝", label: "Organisasi", href: "#organizations" },
              { icon: "🎮", label: "Game", href: "#games" },
              { icon: "💻", label: "Proyek", href: "#projects" },
              { icon: "✍️", label: "Artikel", href: "#articles" },
              { icon: "🛠️", label: "Skills", href: "#skills" },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="rounded-lg border border-border p-4 flex items-center gap-3 hover:bg-accent transition-colors"
              >
                <span className="text-2xl">{link.icon}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="w-full space-y-8">
          {/* Organizations */}
          <section id="organizations" className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🤝</span>
              Organisasi & Komunitas
            </h2>
            <Accordion type="multiple" className="w-full">
              {data.organizations.map((org, idx) => (
                <AccordionItem
                  key={idx}
                  value={`organization-${idx}`}
                  className="border-border"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex flex-col items-start text-left">
                      <span className="font-medium">{org.organization}</span>
                      <span className="text-sm text-muted-foreground">
                        {org.year} • {org.role}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <h4 className="font-medium mb-2">Aktivitas:</h4>
                    <ul className="list-disc ml-5 space-y-1">
                      {org.activities.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Skills */}
          <section id="skills" className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🛠️</span>
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-semibold mb-3">Hard Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.hard_skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 bg-accent rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-semibold mb-3">Software Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.software_skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 bg-accent rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-semibold mb-3">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.soft_skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 bg-accent rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">💻</span>
              Proyek
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="bg-card p-4 rounded-lg border border-border hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-lg mb-2">{proj.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {proj.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-accent rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm inline-flex items-center gap-1"
                  >
                    Lihat proyek
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Articles */}
          <section id="articles" className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">✍️</span>
              Artikel
            </h2>
            <div className="space-y-4">
              {data.articles.map((art, idx) => (
                <div
                  key={idx}
                  className="bg-card p-4 rounded-lg border border-border hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-lg mb-1">{art.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    Tanggal Terbit: {art.published}
                  </p>
                  <p className="text-sm mb-3">{art.summary}</p>
                  <a
                    href={art.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm inline-flex items-center gap-1"
                  >
                    Baca artikel
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="w-full max-w-6xl mt-12 py-6 border-t border-border">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={100}
              height={24}
            />
            <span className="text-sm text-muted-foreground">
              {"© 2025 Osi ic"}
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                icon: "/file.svg",
                label: "Learn",
                href: "https://nextjs.org/learn",
              },
              {
                icon: "/window.svg",
                label: "Examples",
                href: "https://vercel.com/templates",
              },
              {
                icon: "/globe.svg",
                label: "Next.js",
                href: "https://nextjs.org",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                <Image
                  aria-hidden
                  src={item.icon}
                  alt={`${item.label} icon`}
                  width={14}
                  height={14}
                  className="dark:invert"
                />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
