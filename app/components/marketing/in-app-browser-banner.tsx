"use client";

import { useEffect, useState } from "react";

function detectInAppBrowser(): string | null {
  if (typeof navigator === "undefined") return null;
  const ua = navigator.userAgent || "";
  if (/Instagram/i.test(ua)) return "Instagram";
  if (/FBAN|FBAV|FB_IAB/i.test(ua)) return "Facebook";
  if (/TikTok|BytedanceWebview|musical_ly/i.test(ua)) return "TikTok";
  if (/LinkedInApp/i.test(ua)) return "LinkedIn";
  return null;
}

export function InAppBrowserBanner() {
  const [inAppName, setInAppName] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setInAppName(detectInAppBrowser());
  }, []);

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API can be blocked in some WebViews — silently ignore.
    }
  }

  if (!inAppName) return null;

  return (
    <div
      className="sticky top-0 z-50 w-full px-4 py-[40px] text-[13px] leading-[1.4] z-999"
      style={{
        background: "rgb(0, 0, 0)",
        color: "var(--relo-white)",
      }}
      data-testid="in-app-browser-banner"
    >
      <div className="max-w-[900px] mx-auto flex  items-center justify-between gap-x-4 gap-y-1">
        <h1 className="text-[16px] font-bold wrap">
          You&apos;re in the {inAppName} browser — They actively block form
          submissions.
          <br /> Open in your normal browser to use the site.
        </h1>
        <button
          type="button"
          onClick={handleCopyLink}
          className="border border-white rounded-md px-4 py-2 bg-white text-black cursor-pointer font-bold underline underline-offset-2 shrink-0"
        >
          {copied ? "Link copied" : "Copy link"}
        </button>
      </div>
    </div>
  );
}
