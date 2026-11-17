import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { site } from "@/content";
import { DEFAULT_THEME, themeInitScript } from "@/lib/theme";

import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const pageTitle = `${site.name} | ${site.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: pageTitle,
  description: site.summary,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    title: pageTitle,
    description: site.summary,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: site.summary,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme={DEFAULT_THEME}
      className={`${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full bg-ground font-sans text-ink" suppressHydrationWarning>
        <a
          href="#main"
          className="print-hidden sr-only z-50 bg-accent px-4 py-3 text-sm font-semibold text-on-accent focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
