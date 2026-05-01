"use client";

import { useActionState } from "react";
import { DashboardPreview } from "./dashboard-preview";
import { FormState, submitContactForm } from "../../actions/formActions";
import { hero } from "../../config/content";

export function Hero() {
  const [currentState, formAction, isPending] = useActionState<FormState, FormData>(
    submitContactForm,
    {},
  );

  return (
    <section
      id="waitlist"
      style={{ background: 'var(--relo-dark)' }}
      className="px-10 pt-24 pb-22"
    >
      <div className="text-bubble max-w-[900px] mx-auto">
        <div
          className="inline-block text-[12px] font-medium px-[14px] py-1 rounded-full mb-7"
          style={{
            background: 'rgba(255,255,255,0.08)',
            color: 'rgba(255,255,255,0.65)',
            border: '0.5px solid rgba(255,255,255,0.15)',
          }}
        >
          {hero.tag}
        </div>

        <h1
          className="hero-title font-serif text-[62px] font-medium leading-[1.06] tracking-[-2px] text-white mb-1"
        >
          {hero.title1}<br />
          <em style={{ color: 'var(--relo-accent)' }}>{hero.title2}</em>
        </h1>

        <p
          className="hero-blurb text-[17px] leading-[1.7] max-w-[520px] mt-6 mb-11"
          style={{ color: 'rgba(255,255,255,0.6)' }}
        >
          {hero.blurb}
        </p>

        <form action={formAction} className="hero-form flex gap-[10px] max-w-[440px]">
          <input type="hidden" name="source" value="hero" />
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-[11px] rounded-md text-[14px] text-white outline-none transition-colors"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: currentState.error
                ? '0.5px solid rgba(255,100,100,0.7)'
                : '0.5px solid rgba(255,255,255,0.2)',
            }}
            required
            disabled={isPending}
            data-testid="email_hero"
          />
          <button
            type="submit"
            className="bg-white font-medium text-[14px] px-[22px] py-[11px] rounded-md whitespace-nowrap hover:bg-relo-gbg transition-colors"
            style={{ color: 'var(--relo-dark)' }}
            disabled={isPending}
            data-testid="submit-button-hero"
          >
            {isPending ? "Submitting..." : hero.buttonText}
          </button>
        </form>

        {currentState.success && currentState.message && (
          <div
            className="mt-[10px] px-[14px] py-[10px] rounded-md text-[13px] font-medium"
            style={{
              background: 'rgba(255,255,255,0.08)',
              color: 'var(--relo-accent)',
              border: '0.5px solid rgba(123,191,160,0.3)',
            }}
            data-testid="success-message-hero"
          >
            You're on the list. We'll be in touch.
          </div>
        )}
        {currentState.error && (
          <div
            className="mt-[10px] px-[14px] py-[10px] rounded-md text-[13px] font-medium"
            style={{
              background: 'rgba(255,255,255,0.08)',
              color: 'rgba(255,100,100,0.7)',
            }}
          >
            {currentState.error}
          </div>
        )}

        <p className="text-[12px] mt-[14px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
          {hero.hook}
        </p>

        <DashboardPreview />
      </div>
    </section>
  );
}
