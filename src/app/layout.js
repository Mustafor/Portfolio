import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mustafo's Portfolio: About Me",
  description:
    "Welcome to Mustafo's portfolio. Explore my projects, skills, and experiences as a frontend developer.",
  keywords:
    "Mustafo, Frontend Developer, Portfolio, React, Next.js, JavaScript, Tailwind CSS",
  author: "Mustafo",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body
        className={`${inter.className} min-h-screen bg-[#ececec] dark:bg-[#3b3b3b]`}
      >
        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
