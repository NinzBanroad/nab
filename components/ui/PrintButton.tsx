"use client";

/** Opens the browser's print dialog; the print stylesheet turns the page into a one-column CV. */
export function PrintButton({ className, children }: { className?: string; children: string }) {
  return (
    <button type="button" onClick={() => window.print()} className={className}>
      {children}
    </button>
  );
}
