"use client";

import { useActionState, useEffect, useState } from "react";
import { Turnstile } from "next-turnstile";
import { FormState, submitContactForm } from "../../actions/formActions";
import { contact } from "../../config/content";
import { useRouter } from 'next/navigation';

function detectInAppBrowser(): string | null {
  if (typeof navigator === "undefined") return null;
  const ua = navigator.userAgent || "";
  if (/Instagram/i.test(ua)) return "Instagram";
  if (/FBAN|FBAV|FB_IAB/i.test(ua)) return "Facebook";
  if (/TikTok|BytedanceWebview|musical_ly/i.test(ua)) return "TikTok";
  if (/LinkedInApp/i.test(ua)) return "LinkedIn";
  return null;
}

export function Contact() {
  const router = useRouter();
  const [currentState, formAction, isPending] = useActionState<FormState, FormData>(
    submitContactForm,
    {},
  );
  const [turnstileToken, setTurnstileToken] = useState("");
  const [inAppName, setInAppName] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setInAppName(detectInAppBrowser());
  }, []);

  function handleVerify(token: string) {
    setTurnstileToken(token);
  }

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API can be blocked; silently ignore — user can still copy from URL bar.
    }
  }

  return (
    <section
      id="contact"
      className="px-10 py-20 pb-[50%] md:pb-[10%]"
      style={{
        background: "var(--relo-bg)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <span
        style={{
          position: "absolute",
          bottom: "-20px",
          right: "0px",
          fontFamily: "var(--font-serif)",
          fontSize: "250px",
          fontWeight: 500,
          color: "#1C3329",
          opacity: 0.3,
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
          letterSpacing: "-6px",
        }}
      >
        relo
      </span>

      <div
        className="max-w-[900px] mx-auto"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div
          className="rounded-[12px] p-12 max-w-[580px]"
          style={{
            background: "var(--relo-white)",
            border: "0.5px solid var(--relo-border)",
          }}
        >
          {inAppName && (
            <div
              className="mb-6 px-[14px] py-[12px] rounded-md text-[13px] leading-[1.5]"
              style={{
                background: "var(--relo-bg)",
                border: "0.5px solid var(--relo-border)",
                color: "var(--relo-text)",
              }}
              data-testid="in-app-browser-banner"
            >
              <p className="font-medium mb-1">
                Heads up — you&apos;re in the {inAppName} browser
              </p>
              <p style={{ color: "var(--relo-muted)" }} className="mb-2">
                Our security check can&apos;t run here. Open this page in your
                normal browser to send a message — tap the{" "}
                <span className="font-medium">⋯</span> menu and choose{" "}
                <span className="font-medium">Open in browser</span>, or copy
                the link.
              </p>
              <button
                type="button"
                onClick={handleCopyLink}
                className="text-[13px] font-medium underline underline-offset-2"
                style={{ color: "var(--relo-green)" }}
              >
                {copied ? "Link copied" : "Copy link"}
              </button>
            </div>
          )}
          <h2
            className="font-serif text-[32px] font-medium tracking-[-0.8px] mb-2"
            style={{ color: "var(--relo-text)" }}
          >
            {contact.title}
          </h2>
          <p
            className="text-[14px] leading-[1.6] mb-8"
            style={{ color: "var(--relo-muted)" }}
          >
            {contact.blurb}
          </p>
          {currentState.success && currentState.message ? (
            <div
              className="px-[14px] py-[10px] rounded-md text-[14px] font-medium"
              style={{
                background: "var(--relo-gbg)",
                color: "var(--relo-green)",
              }}
              data-testid="success-message"
            >
              <p> Got it — we'll be in touch.</p>
            </div>
          ) : currentState.error ? (
            <div
              className="px-[14px] py-[10px] rounded-md text-[14px] font-medium"
              style={{
                background: "var(--relo-rbg)",
                color: "var(--relo-red)",
              }}
            >
              <button onClick={() => window.location.reload()}> {currentState.error}</button>
            </div>
          ) : (
            <form action={formAction} className="space-y-4">
              <input type="hidden" name="source" value="contact" />
              <input type="hidden" name="turnstileToken" value={turnstileToken} />
              {[
                {
                  name: "name",
                  label: "Name",
                  type: "text",
                  placeholder: "Your name",
                },
                {
                  name: "email",
                  label: "Email",
                  type: "email",
                  placeholder: "your@email.com",
                  dataTestId: "email",
                },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    className="block text-[12px] font-medium mb-[6px]"
                    htmlFor={field.name}
                    style={{ color: "var(--relo-muted)" }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    placeholder={field.placeholder}
                    className="w-full px-[14px] py-[10px] rounded-md text-[14px] outline-none transition-colors"
                    style={{
                      background: "var(--relo-bg)",
                      border: "0.5px solid var(--relo-border)",
                      color: "var(--relo-text)",
                    }}
                    disabled={isPending}
                    required
                    data-testid={field.dataTestId}
                  />
                </div>
              ))}

              <div>
                <label
                  className="block text-[12px] font-medium mb-[6px]"
                  htmlFor="message"
                  style={{ color: "var(--relo-muted)" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="What's on your mind?"
                  rows={4}
                  className="w-full px-[14px] py-[10px] rounded-md text-[14px] outline-none resize-y leading-relaxed"
                  style={{
                    background: "var(--relo-bg)",
                    border: "0.5px solid var(--relo-border)",
                    color: "var(--relo-text)",
                  }}
                  disabled={isPending}
                  data-testid="message"
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-2 px-[26px] py-[11px] rounded-md text-[14px] font-medium text-white transition-colors"
                style={{ background: "var(--relo-dark)" }}
                data-testid="submit-button"
                disabled={isPending}
              >
                {isPending ? "Sending..." : "Send message"}
              </button>
              <div>
                <Turnstile
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                  theme="light"
                  onVerify={handleVerify}
                  onExpire={() => setTurnstileToken("")}
                  onError={() => setTurnstileToken("")}
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
