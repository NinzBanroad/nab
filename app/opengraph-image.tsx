import { ImageResponse } from "next/og";

import { site } from "@/content";
import { formatFullAddress } from "@/lib/address";
import { BRAND_COLORS } from "@/lib/brandColors";

export const alt = `${site.name}, ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The 1200 × 630 link-preview card: name, headline and availability on the site's paper ground. */
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: BRAND_COLORS.ground,
        color: BRAND_COLORS.ink,
        padding: "72px 80px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28 }}>
        <div style={{ width: 48, height: 2, background: BRAND_COLORS.accent }} />
        {site.title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 84, lineHeight: 1.02, letterSpacing: -2, fontWeight: 600 }}>
          {site.name}
        </div>
        <div style={{ fontSize: 34, lineHeight: 1.3, maxWidth: 900, color: BRAND_COLORS.inkSoft }}>
          {site.hero.headline}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26 }}>
        <div style={{ width: 14, height: 14, borderRadius: 7, background: BRAND_COLORS.accent }} />
        {site.availability} · {formatFullAddress(site.address)}
      </div>
    </div>,
    { ...size },
  );
}
