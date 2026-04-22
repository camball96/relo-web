'use client'

import { useState } from 'react'

const defaultForm = { name: '', email: '', message: '' }

export function Contact() {
  const [form, setForm] = useState(defaultForm)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: wire up to an email handler (Resend recommended)
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    setSubmitted(true)
    setForm(defaultForm)
  }

  return (
    <section
      id="contact"
      className="px-10 py-20"
      style={{ background: 'var(--relo-bg)' }}
    >
      <div className="max-w-[900px] mx-auto">
        <div
          className="rounded-[12px] p-12 max-w-[580px]"
          style={{ background: 'var(--relo-white)', border: '0.5px solid var(--relo-border)' }}
        >
          <h2
            className="font-serif text-[32px] font-medium tracking-[-0.8px] mb-2"
            style={{ color: 'var(--relo-text)' }}
          >
            Say hello
          </h2>
          <p
            className="text-[14px] leading-[1.6] mb-8"
            style={{ color: 'var(--relo-muted)' }}
          >
            Got a question, a feature you'd kill for, or just want to know when
            Relo ships? We're easy to reach.
          </p>

          {submitted ? (
            <div
              className="px-[14px] py-[10px] rounded-md text-[14px] font-medium"
              style={{ background: 'var(--relo-gbg)', color: 'var(--relo-green)' }}
            >
              Got it — we'll be in touch.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: 'name',    label: 'Name',    type: 'text',  placeholder: 'Your name' },
                { name: 'email',   label: 'Email',   type: 'email', placeholder: 'your@email.com' },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    className="block text-[12px] font-medium mb-[6px]"
                    style={{ color: 'var(--relo-muted)' }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full px-[14px] py-[10px] rounded-md text-[14px] outline-none transition-colors"
                    style={{
                      background: 'var(--relo-bg)',
                      border: '0.5px solid var(--relo-border)',
                      color: 'var(--relo-text)',
                    }}
                  />
                </div>
              ))}

              <div>
                <label
                  className="block text-[12px] font-medium mb-[6px]"
                  style={{ color: 'var(--relo-muted)' }}
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
                    background: 'var(--relo-bg)',
                    border: '0.5px solid var(--relo-border)',
                    color: 'var(--relo-text)',
                  }}
                />
              </div>

              <button
                type="submit"
                className="mt-2 px-[26px] py-[11px] rounded-md text-[14px] font-medium text-white transition-colors"
                style={{ background: 'var(--relo-dark)' }}
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
