import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";

import { site } from "@/content";
import { DEFAULT_THEME, themeInitScript } from "@/lib/theme";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} | ${site.title}`,
  description: site.summary,
  openGraph: {
    type: "profile",
    title: `${site.name} | ${site.title}`,
    description: site.summary,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme={DEFAULT_THEME}
      className={`${manrope.variable} ${jetbrains.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full bg-bg font-sans text-text" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
