"use client";
import Image from "next/image";
import { DarkLightModeButton } from "@/components/atoms/DarkLightModeButton";
import data from "@/data/data.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms/Accordion";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="max-w-md">
          <h1 className="text-2xl sm:text-4xl font-bold">Profil Portofolio</h1>

          <Accordion type="single" collapsible>
            {/* Profile */}
            <AccordionItem value="profile" className="min-w-md">
              <AccordionTrigger>👤 Profil</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">{data.profile}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    <strong>Nama:</strong> {data.personal_info.name}
                  </li>
                  <li>
                    <strong>Email:</strong> {data.personal_info.email}
                  </li>
                  <li>
                    <strong>Telepon:</strong> {data.personal_info.phone}
                  </li>
                  <li>
                    <strong>LinkedIn:</strong>{" "}
                    <a
                      href={data.personal_info.linkedin}
                      className="text-blue-600 underline"
                    >
                      {data.personal_info.linkedin}
                    </a>
                  </li>
                  <li>
                    <strong>Portfolio:</strong>{" "}
                    <a
                      href={data.personal_info.portfolio}
                      className="text-blue-600 underline"
                    >
                      {data.personal_info.portfolio}
                    </a>
                  </li>
                  <li>
                    <strong>Lokasi:</strong> {data.personal_info.location}
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Education */}
            <AccordionItem value="education">
              <AccordionTrigger>🎓 Pendidikan</AccordionTrigger>
              <AccordionContent>
                {data.education.map((edu, idx) => (
                  <div key={idx} className="mb-4">
                    <h4 className="font-semibold">
                      {edu.institution} ({edu.year})
                    </h4>
                    <p className="italic text-sm">{edu.major}</p>
                    <ul className="list-disc ml-5 text-sm">
                      {edu.achievements?.map((a, i) => <li key={i}>{a}</li>)}
                    </ul>
                    <p className="mt-2 text-sm font-medium">Proyek:</p>
                    <ul className="list-disc ml-5 text-sm">
                      {edu.projects.map((proj, i) => (
                        <li key={i}>{proj}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>

            {/* Internships */}
            <AccordionItem value="internships">
              <AccordionTrigger>🏢 Pengalaman Magang</AccordionTrigger>
              <AccordionContent>
                {data.internships.map((intern, idx) => (
                  <div key={idx} className="mb-4">
                    <h4 className="font-semibold">
                      {intern.company} ({intern.year})
                    </h4>
                    <p className="italic text-sm">
                      {intern.role} - {intern.type}
                    </p>
                    <ul className="list-disc ml-5 text-sm">
                      {intern.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>

            {/* Organizations */}
            <AccordionItem value="organizations">
              <AccordionTrigger>🤝 Organisasi</AccordionTrigger>
              <AccordionContent>
                {data.organizations.map((org, idx) => (
                  <div key={idx} className="mb-4">
                    <h4 className="font-semibold">
                      {org.organization} ({org.year})
                    </h4>
                    <p className="italic text-sm">{org.role}</p>
                    <ul className="list-disc ml-5 text-sm">
                      {org.activities.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>

            {/* Projects */}
            <AccordionItem value="projects">
              <AccordionTrigger>💻 Proyek</AccordionTrigger>
              <AccordionContent>
                {data.projects.map((proj, idx) => (
                  <div key={idx} className="mb-4">
                    <h4 className="font-semibold">{proj.title}</h4>
                    <p className="text-sm mb-1">{proj.description}</p>
                    <p className="text-xs text-gray-600">
                      Tech: {proj.tech.join(", ")}
                    </p>
                    <a
                      href={proj.link}
                      className="text-blue-600 underline text-sm"
                    >
                      Lihat proyek
                    </a>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>

            {/* Articles */}
            <AccordionItem value="articles">
              <AccordionTrigger>✍️ Artikel</AccordionTrigger>
              <AccordionContent>
                {data.articles.map((art, idx) => (
                  <div key={idx} className="mb-4">
                    <h4 className="font-semibold">{art.title}</h4>
                    <p className="text-xs text-gray-600 mb-1">
                      Tanggal Terbit: {art.published}
                    </p>
                    <p className="text-sm">{art.summary}</p>
                    <a
                      href={art.link}
                      className="text-blue-600 underline text-sm"
                    >
                      Baca artikel
                    </a>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
          <DarkLightModeButton />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
