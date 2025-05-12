import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Osi ic- Portfolio | Web & IoT Developer",
  description:
    "Portfolio of Osi ic, a Web and IoT Developer specializing in Next.js, React, Laravel, Arduino, and ESP8266. SMK graduate with internship experience in medical equipment and financial technology.",

  openGraph: {
    type: "website",
    title: "Osi ic - Web & IoT Developer Portfolio",
    description:
      "Graduate of Industrial Electronics with expertise in web development (Next.js, React, Laravel) and IoT (Arduino, ESP8266). Internship experience in medical equipment and financial technology.",
    url: "https://osiic.vercel.app",
    siteName: "Osi ic Portfolio",
    images: [
      {
        url: "https://osiic.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://osiic.vercel.app/og-image-large.jpg",
        width: 1800,
        height: 1600,
        alt: "Osi ic Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Osi ic - Web & IoT Developer",
    description:
      "SMK graduate specializing in web development and IoT systems. Check out my projects and articles!",
    siteId: "1467726470533754880",
    creator: "@osiic",
    creatorId: "1467726470533754880",
    images: ["https://osiic.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
