import Link from "next/link";

import { site } from "@/content";

export default function NotFound() {
  return (
    <main
      id="main"
      className="mx-auto flex min-h-dvh max-w-[54rem] flex-col justify-center px-6 sm:px-8"
    >
      <p className="eyebrow">404 · Page not found</p>
      <h1 className="mt-4 max-w-[20ch] text-[clamp(2.1rem,5.4vw,3.4rem)] leading-[1.12] font-semibold tracking-tight">
        This page isn&rsquo;t part of the portfolio.
      </h1>
      <Link href="/" className="button button-primary mt-10 w-fit">
        Back to {site.shortName}
      </Link>
    </main>
  );
}
