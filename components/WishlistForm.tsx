"use client";

import { useState } from "react";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function WishlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValidEmail(email)) return setStatus("error");
    setStatus("success");
    setEmail("");
  }

  return (
    <div id="waitlist" className="mt-7 w-full max-w-xl">
      <form
        onSubmit={submit}
        className="flex w-full items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur"
      >
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="you@example.com"
          className="w-full flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 rounded-xl px-4 py-2 text-sm font-semibold text-black"
          style={{
            background: "linear-gradient(90deg, var(--wp-sand), var(--wp-sun))",
          }}
        >
          Get invite
        </button>
      </form>

      {status === "success" && (
        <p className="mt-3 text-sm text-white/80">
          You’re on the list. We’ll email you when the beta opens.
        </p>
      )}

      {status === "error" && (
        <p className="mt-3 text-sm text-red-300">
          Please enter a valid email address.
        </p>
      )}

      <p className="mt-3 text-xs text-white/50">
        No spam. One email when the beta opens.
      </p>
    </div>
  );
}