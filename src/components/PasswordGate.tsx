"use client";

import { FormEvent, ReactNode, useEffect, useState } from "react";

const SESSION_KEY = "pitchside-live-unlocked";

type PasswordGateProps = {
  password: string;
  children: ReactNode;
};

export default function PasswordGate({ password, children }: PasswordGateProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (stored === "true") {
      setUnlocked(true);
    }
    setChecked(true);
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (input === password) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  // Avoid a flash of the locked form before sessionStorage is checked
  if (!checked) {
    return null;
  }

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div className="mx-auto flex max-w-sm flex-col items-center gap-5 rounded-lg border border-white/10 bg-base-gray px-8 py-14 text-center shadow-sm">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent-red/30 bg-accent-red/10">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="5" y="10.5" width="14" height="9.5" rx="1.5" stroke="#E11D2A" strokeWidth="1.6" />
          <path d="M8 10.5V7.5C8 5.29 9.79 3.5 12 3.5C14.21 3.5 16 5.29 16 7.5V10.5" stroke="#E11D2A" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="12" cy="14.75" r="1.4" fill="#E11D2A" />
        </svg>
      </div>

      <div>
        <p className="font-display text-base font-semibold uppercase tracking-widest text-white">
          Private broadcast
        </p>
        <p className="mt-2 text-sm text-white/50">
          This stream is password-protected. Enter the password to watch.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
        <input
          type="password"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError(false);
          }}
          autoFocus
          aria-label="Password"
          className="w-full rounded-md border border-white/15 bg-base-black px-4 py-3 text-center text-sm text-white placeholder:text-white/30 focus:border-accent-red focus:outline-none"
          placeholder="Enter password"
        />
        {error && (
          <p role="alert" className="text-sm text-accent-red">
            Wrong password. Try again.
          </p>
        )}
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-red px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-red-dark"
        >
          Unlock stream
        </button>
      </form>
    </div>
  );
}
