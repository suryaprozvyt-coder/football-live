"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    // No backend is wired up yet. Replace this block with a real submission
    // (e.g. fetch to an API route, or a service like Formspree) when ready.
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-white/10 bg-base-gray p-6 text-sm text-white/80"
      >
        Thanks — your message has been sent. I&apos;ll get back to you soon.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block font-display text-xs font-semibold uppercase tracking-widest text-white/70"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-md border border-white/15 bg-base-gray px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent-red focus:outline-none"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block font-display text-xs font-semibold uppercase tracking-widest text-white/70"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-md border border-white/15 bg-base-gray px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent-red focus:outline-none"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-display text-xs font-semibold uppercase tracking-widest text-white/70"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-none rounded-md border border-white/15 bg-base-gray px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent-red focus:outline-none"
          placeholder="What's up?"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-accent-red">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-md bg-accent-red px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-red-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
