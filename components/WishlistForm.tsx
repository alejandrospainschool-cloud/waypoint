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
    if (!isValidEmail(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  }

  return (
    <div className="mx-auto w-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Join the wishlist</h2>
        <p className="mt-2 text-[var(--wp-muted)]">
          Early access, private beta, and first-mover perks.
        </p>
      </div>

      <form onSubmit={submit} className="mt-7 flex flex-col gap-3 sm:flex-row">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="you@example.com"
          className="w-full flex-1 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
        />
        <button
          type="submit"
          className="rounded-2xl px-5 py-3 text-sm font-semibold text-black"
          style={{
            background: "linear-gradient(90deg, var(--wp-sand), var(--wp-sun))",
          }}
        >
          Notify me
        </button>
      </form>

      {status === "success" && (
        <p className="mt-4 text-center text-sm text-white/85">
          You’re on the list. We’ll email you when the beta opens.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-center text-sm text-red-300">
          Please enter a valid email address.
        </p>
      )}

      <p className="mt-5 text-center text-xs text-[var(--wp-muted)]">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}