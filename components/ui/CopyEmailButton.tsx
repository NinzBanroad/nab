"use client";

import { useEffect, useState } from "react";

type CopyStatus = "idle" | "copied" | "failed";

const STATUS_RESET_MS = 2400;
/** Some browsers leave the clipboard promise pending (e.g. an unfocused window); never wait forever. */
const CLIPBOARD_TIMEOUT_MS = 1500;

const BUTTON_LABELS: Record<CopyStatus, string> = {
  idle: "Copy email",
  copied: "Copied",
  failed: "Copy failed",
};

function writeToClipboard(text: string): Promise<void> {
  return Promise.race([
    navigator.clipboard.writeText(text),
    new Promise<void>((_, reject) =>
      window.setTimeout(() => reject(new Error("Clipboard timed out")), CLIPBOARD_TIMEOUT_MS),
    ),
  ]);
}

function announcementFor(status: CopyStatus, email: string): string {
  if (status === "copied") return "Email address copied to clipboard.";
  if (status === "failed") return `Could not copy. The address is ${email}.`;
  return "";
}

export function CopyEmailButton({ email, className }: { email: string; className?: string }) {
  const [status, setStatus] = useState<CopyStatus>("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timeoutId = window.setTimeout(() => setStatus("idle"), STATUS_RESET_MS);
    return () => window.clearTimeout(timeoutId);
  }, [status]);

  const handleCopy = async () => {
    try {
      await writeToClipboard(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  };

  return (
    <>
      <button type="button" onClick={handleCopy} className={className}>
        {BUTTON_LABELS[status]}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {announcementFor(status, email)}
      </span>
    </>
  );
}
