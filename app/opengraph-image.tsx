import { ImageResponse } from "next/og";
import { siteConfig } from "./config/site";

// Image metadata
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Brand tokens — kept in sync with app/globals.css
const RELO_DARK = "#111e18";
const RELO_ACCENT = "#7bbfa0";
const RELO_BG_LINE = "rgba(255,255,255,0.08)";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          background: RELO_DARK,
          color: "#ffffff",
          fontFamily:
            'Inter, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif',
        }}
      >
        {/* Top row: wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: "#ffffff",
              color: RELO_DARK,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            r
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: -0.4,
              color: "rgba(255,255,255,0.85)",
            }}
          >
            {siteConfig.name.toLowerCase()}
          </div>
        </div>

        {/* Centerpiece headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "6px 14px",
              borderRadius: 999,
              background: RELO_BG_LINE,
              border: "1px solid rgba(255,255,255,0.15)",
              fontSize: 16,
              color: "rgba(255,255,255,0.65)",
              fontWeight: 500,
            }}
          >
            Coming soon — join the waitlist
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 92,
              fontWeight: 500,
              lineHeight: 1.04,
              letterSpacing: -3,
              color: "#ffffff",
            }}
          >
            <span>Your clients.</span>
            <span style={{ color: RELO_ACCENT, fontStyle: "italic" }}>
              Instantly recalled.
            </span>
          </div>
          <div
            style={{
              fontSize: 26,
              lineHeight: 1.45,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 880,
            }}
          >
            The workspace for freelancers and service providers who need to
            know exactly what every client is on — the moment they pick up the
            phone.
          </div>
        </div>

        {/* Footer URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: 0.2,
          }}
        >
          <span>{siteConfig.url.replace(/^https?:\/\//, "")}</span>
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: RELO_ACCENT,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
