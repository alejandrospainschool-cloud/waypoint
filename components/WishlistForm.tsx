"use client";

import { useState } from "react";

export default function WishlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitted(true);
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-xl font-semibold">Join the wishlist</h2>
      <p className="mt-2 text-white/70">
        Early access, private beta, and first-mover perks.
      </p>

      {submitted ? (
        <p className="mt-6 text-green-400">
          You’re on the list. We’ll be in touch.
        </p>
      ) : (
        <form onSubmit={submit} className="mt-6 flex gap-3">
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40"
          />
          <button
            type="submit"
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black"
          >
            Notify me
          </button>
        </form>
      )}
    </div>
  );
}