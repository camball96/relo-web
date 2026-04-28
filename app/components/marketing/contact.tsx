"use client";

import { useState, useEffect, useActionState } from "react";
import { Turnstile } from "next-turnstile";
import { FormState, submitContactForm } from "../../actions/formActions";

export function Contact() {
  const [currentState, formAction, isPending] = useActionState<
    FormState,
    FormData
  >(submitContactForm, {});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleVerify(token: string) {
    console.log("verification successful:", token);
  }

  async function handleSubmit(e: React.FormEvent, token: string) {
    e.preventDefault();
    // TODO: wire up to an email handler (Resend recommended)
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })

    setSubmitted(true);
    setForm(defaultForm);
  }

  return (
    <section
      id="contact"
      className="px-10 py-20"
      style={{
        background: "var(--relo-bg)",
        position: "relative",
        overflow: "hidden",
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
          <h2
            className="font-serif text-[32px] font-medium tracking-[-0.8px] mb-2"
            style={{ color: "var(--relo-text)" }}
          >
            Say hello
          </h2>
          <p
            className="text-[14px] leading-[1.6] mb-8"
            style={{ color: "var(--relo-muted)" }}
          >
            Got a question, a feature you'd kill for, or just want to know when
            Relo ships? We're easy to reach.
          </p>
          {currentState.success && currentState.message ? (
            <div
              className="px-[14px] py-[10px] rounded-md text-[14px] font-medium"
              style={{
                background: "var(--relo-gbg)",
                color: "var(--relo-green)",
              }}
            >
              <p> Got it — we'll be in touch.</p>
            </div>
          ) : (
            <form action={formAction} className="space-y-4">
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
                },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    className="block text-[12px] font-medium mb-[6px]"
                    style={{ color: "var(--relo-muted)" }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={currentState[field.name as keyof FormState]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full px-[14px] py-[10px] rounded-md text-[14px] outline-none transition-colors"
                    style={{
                      background: "var(--relo-bg)",
                      border: "0.5px solid var(--relo-border)",
                      color: "var(--relo-text)",
                    }}
                    disabled={isPending}
                  />
                </div>
              ))}

              <div>
                <label
                  className="block text-[12px] font-medium mb-[6px]"
                  style={{ color: "var(--relo-muted)" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  rows={4}
                  className="w-full px-[14px] py-[10px] rounded-md text-[14px] outline-none resize-y leading-relaxed"
                  style={{
                    background: "var(--relo-bg)",
                    border: "0.5px solid var(--relo-border)",
                    color: "var(--relo-text)",
                  }}
                  disabled={isPending}
                />
              </div>

              <button
                type="submit"
                className="mt-2 px-[26px] py-[11px] rounded-md text-[14px] font-medium text-white transition-colors"
                style={{ background: "var(--relo-dark)" }}
                disabled={isPending}
              >
                {isPending ? "Sending..." : "Send message"}
              </button>
              <div>
                <Turnstile
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                  onVerify={handleVerify}
                  theme="light"
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
