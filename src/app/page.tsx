"use client";

import data from "@/data/data.json";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms/Accordion";
import { DarkLightModeButton } from "@/components/molecules/DarkLightModeButton";

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
              <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <strong className="w-24 flex-shrink-0">Nama:</strong>
                <span>{data.personal_info.name}</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <strong className="w-24 flex-shrink-0">Email:</strong>
                <a
                  href={`mailto:${data.personal_info.email}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {data.personal_info.email}
                </a>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <strong className="w-24 flex-shrink-0">Telepon:</strong>
                <a
                  href={`tel:${data.personal_info.phone}`}
                  className="hover:underline"
                >
                  {data.personal_info.phone}
                </a>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <strong className="w-24 flex-shrink-0">LinkedIn:</strong>
                <a
                  href={data.personal_info.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                >
                  {data.personal_info.linkedin}
                </a>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <strong className="w-24 flex-shrink-0">Portfolio:</strong>
                <a
                  href={data.personal_info.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                >
                  {data.personal_info.portfolio}
                </a>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <strong className="w-24 flex-shrink-0">Lokasi:</strong>
                <span>{data.personal_info.location}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links Card */}
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <h2 className="text-xl font-semibold mb-4">Tautan Cepat</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                className="rounded-lg border border-border p-4 flex items-center gap-3 hover:bg-accent transition-colors"
                href="#education"
              >
                <span className="text-2xl">🎓</span>
                <span>Pendidikan</span>
              </a>
              <a
                className="rounded-lg border border-border p-4 flex items-center gap-3 hover:bg-accent transition-colors"
                href="#internships"
              >
                <span className="text-2xl">🏢</span>
                <span>Pengalaman</span>
              </a>
              <a
                className="rounded-lg border border-border p-4 flex items-center gap-3 hover:bg-accent transition-colors"
                href="#projects"
              >
                <span className="text-2xl">💻</span>
                <span>Proyek</span>
              </a>
              <a
                className="rounded-lg border border-border p-4 flex items-center gap-3 hover:bg-accent transition-colors"
                href="#articles"
              >
                <span className="text-2xl">✍️</span>
                <span>Artikel</span>
              </a>
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
                    {edu.achievements?.length > 0 && (
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
            <span className="text-sm text-muted-foreground">Portfolio</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              href="https://nextjs.org/learn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={14}
                height={14}
                className="dark:invert"
              />
              Learn
            </a>
            <a
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              href="https://vercel.com/templates"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={14}
                height={14}
                className="dark:invert"
              />
              Examples
            </a>
            <a
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={14}
                height={14}
                className="dark:invert"
              />
              Next.js
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
