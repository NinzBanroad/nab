"use client";

import { useMemo, useSyncExternalStore } from "react";

const REFRESH_INTERVAL_MS = 15_000;

function subscribeToClock(onTick: () => void) {
  const intervalId = window.setInterval(onTick, REFRESH_INTERVAL_MS);
  return () => window.clearInterval(intervalId);
}

/** The current time in the given zone, e.g. "3:42 PM". Empty on the server, filled after hydration. */
export function LocalTime({ timeZone }: { timeZone: string }) {
  const formatter = useMemo(
    () => new Intl.DateTimeFormat("en", { hour: "numeric", minute: "2-digit", timeZone }),
    [timeZone],
  );
  const time = useSyncExternalStore(
    subscribeToClock,
    () => formatter.format(new Date()),
    () => "",
  );

  return <span className="tabular-nums">{time || "—"}</span>;
}
