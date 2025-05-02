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
  phone: string;
  email: string;
  linkedin: string;
  portfolio: string;
  location: string;
}

interface Education {
  institution: string;
  major: string;
  year: string;
  achievements?: string[];
  projects: string[];
}

interface Internship {
  company: string;
  role: string;
  type: string;
  year: string;
  responsibilities: string[];
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
  education: Education[];
  internships: Internship[];
  organizations: Organization[];
  skills: Skills;
  projects: Project[];
  articles: Article[];
}

const data: PortfolioData = {
  personal_info: {
    name: "M. Ridho Haris Muzaki",
    phone: "+62 851-1712-1912",
    email: "ridhomuzaki.ic@gmail.com",
    linkedin: "https://linkedin.com/in/muzakiic",
    portfolio: "https://osiic.vercel.app",
    location: "Banyuwangi, Jawa Timur, 68455",
  },
  profile:
    "Lulusan SMK Teknik Elektronika Industri dengan keahlian pengembangan website (Next.js, React, Laravel), IoT (Arduino, ESP8266), dan pemrograman mikrokontroler. Pengalaman magang di bidang keuangan (Abacus Cash Solution) dan teknisi alat medis (RSUD Genteng). Aktif berkontribusi dalam proyek digital berbasis web dan IoT dengan hasil terukur.",
  education: [
    {
      institution: "SMK Muhammadiyah 2 Genteng",
      major: "Teknik Elektronika Industri (TEI)",
      year: "2022–2025",
      achievements: ["Juara 2 Kelas (Semester 1–5)"],
      projects: [
        "Sistem IoT monitoring kandang ayam (Arduino, ESP8266, Firebase)",
        "Pengembangan website komunitas (Next.js, React)",
      ],
    },
    {
      institution:
        "Pondok Pesantren Integrated Science & Tahfidz Muhammadiyah (INSAT)",
      major: "Ilmu Pengetahuan dan Tahfidz Al-Qur'an",
      year: "2019–2022",
      projects: [
        "Dasar robotika dan pemrograman Arduino",
        "Proyek sederhana berbasis mikrokontroler",
      ],
    },
  ],
  internships: [
    {
      company: "RSUD Genteng",
      role: "Teknisi Alat Medis",
      type: "Magang",
      year: "2023",
      responsibilities: [
        "Pemeliharaan 20+ alat medis, tingkat ketersediaan alat 95%",
      ],
    },
    {
      company: "Abacus Cash Solution (Magang BCA Cash Management)",
      role: "Teller",
      type: "Magang",
      year: "Des 2023–Jun 2024",
      responsibilities: [
        "Rekonsiliasi kaset ATM, meningkatkan efisiensi proses dengan sistem digital",
        "Pelaporan harian dan koordinasi dengan supervisor",
      ],
    },
  ],
  organizations: [
    {
      role: "Sekretaris",
      organization: "IPM (Ikatan Pelajar Muhammadiyah)",
      year: "2019–2022",
      activities: [
        "Mengelola dokumen organisasi dan administrasi kegiatan sekolah",
        "Bertanggung jawab dalam perencanaan agenda rapat rutin",
      ],
    },
    {
      role: "Anggota Aktif",
      organization: "Komunitas Digital",
      year: "2022–Sekarang",
      activities: [
        "Diskusi teknologi & desain grafis di Discord (Photoshop, Illustrator)",
        "Kontribusi dalam forum pengembangan web dan pemrograman",
      ],
    },
  ],
  skills: {
    hard_skills: [
      "Next.js",
      "React",
      "Laravel",
      "Arduino",
      "ESP8266",
      "Python",
      "C++",
      "HTML/CSS",
      "Tailwind CSS",
      "Firebase",
      "MySQL",
      "SEO Optimization",
    ],
    software_skills: [
      "Figma",
      "Adobe Photoshop",
      "Microsoft Word",
      "Excel",
      "PowerPoint",
    ],
    soft_skills: [
      "Komunikasi",
      "Manajemen Waktu",
      "Kerja Tim",
      "Problem Solving",
      "Kepemimpinan",
      "Public Speaking",
    ],
  },
  projects: [
    {
      title: "Sistem Monitoring Suhu & Kelembaban Kandang Ayam",
      tech: ["Arduino", "ESP8266", "Firebase"],
      description:
        "Proyek IoT untuk memantau suhu dan kelembaban kandang ayam secara real-time melalui dashboard berbasis web.",
      link: "https://github.com/muzakite/kandang-iot",
    },
    {
      title: "Website Komunitas Belajar",
      tech: ["Next.js", "Tailwind CSS"],
      description:
        "Platform komunitas online untuk pelajar berbagi materi belajar, artikel, dan diskusi.",
      link: "https://komunitas.vercel.app",
    },
  ],
  articles: [
    {
      title: "Mengenal IoT dan Penerapannya di Dunia Peternakan",
      published: "2024-11-15",
      summary:
        "Artikel ini membahas bagaimana teknologi Internet of Things dapat membantu para peternak dalam memantau kondisi lingkungan secara otomatis.",
      link: "https://medium.com/@muzakite/iot-peternakan",
    },
    {
      title: "Panduan Membuat Website dengan Next.js untuk Pemula",
      published: "2024-09-30",
      summary:
        "Langkah-langkah praktis membuat website menggunakan Next.js dan Tailwind CSS, cocok untuk pemula yang ingin mulai belajar full-stack web.",
      link: "https://dev.to/muzakite/nextjs-pemula",
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
            Profil Portofolio
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {data.profile}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Info Card */}
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <h2 className="text-xl font-semibold mb-4">Informasi Pribadi</h2>
            <ul className="space-y-3">
              {[
                { label: "Nama", value: data.personal_info.name },
                {
                  label: "Email",
                  value: data.personal_info.email,
                  link: `mailto:${data.personal_info.email}`,
                },
                {
                  label: "Telepon",
                  value: data.personal_info.phone,
                  link: `tel:${data.personal_info.phone}`,
                },
                {
                  label: "LinkedIn",
                  value: data.personal_info.linkedin,
                  link: data.personal_info.linkedin,
                  external: true,
                },
                {
                  label: "Portfolio",
                  value: data.personal_info.portfolio,
                  link: data.personal_info.portfolio,
                  external: true,
                },
                { label: "Lokasi", value: data.personal_info.location },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4"
                >
                  <strong className="w-24 flex-shrink-0">{item.label}:</strong>
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Card */}
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <h2 className="text-xl font-semibold mb-4">Tautan Cepat</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "🎓", label: "Pendidikan", href: "#education" },
                { icon: "🏢", label: "Pengalaman", href: "#internships" },
                { icon: "💻", label: "Proyek", href: "#projects" },
                { icon: "✍️", label: "Artikel", href: "#articles" },
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
        </div>

        {/* Main Content Sections */}
        <div className="w-full space-y-8">
          {/* Education */}
          <section id="education" className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              Pendidikan
            </h2>
            <Accordion type="multiple" className="w-full">
              {data.education.map((edu, idx) => (
                <AccordionItem
                  key={idx}
                  value={`education-${idx}`}
                  className="border-border"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex flex-col items-start text-left">
                      <span className="font-medium">{edu.institution}</span>
                      <span className="text-sm text-muted-foreground">
                        {edu.year} • {edu.major}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2">
                    {edu.achievements && edu.achievements.length > 0 && (
                      <>
                        <h4 className="font-medium mb-2">Pencapaian:</h4>
                        <ul className="list-disc ml-5 space-y-1 mb-4">
                          {edu.achievements.map((a, i) => (
                            <li key={i}>{a}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    <h4 className="font-medium mb-2">Proyek:</h4>
                    <ul className="list-disc ml-5 space-y-1">
                      {edu.projects.map((proj, i) => (
                        <li key={i}>{proj}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Internships */}
          <section id="internships" className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🏢</span>
              Pengalaman Magang
            </h2>
            <Accordion type="multiple" className="w-full">
              {data.internships.map((intern, idx) => (
                <AccordionItem
                  key={idx}
                  value={`internship-${idx}`}
                  className="border-border"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex flex-col items-start text-left">
                      <span className="font-medium">{intern.company}</span>
                      <span className="text-sm text-muted-foreground">
                        {intern.year} • {intern.role} ({intern.type})
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <h4 className="font-medium mb-2">Tanggung Jawab:</h4>
                    <ul className="list-disc ml-5 space-y-1">
                      {intern.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Organizations */}
          <section id="organizations" className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🤝</span>
              Organisasi
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
              Portfolio Template
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
