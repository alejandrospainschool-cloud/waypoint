import Image from "next/image";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--wp-bg)] text-[var(--wp-text)]">
      {/* Background aura */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute -top-56 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, var(--wp-sand), transparent 60%)",
          }}
        />
        <div
          className="absolute top-24 -left-64 h-[640px] w-[640px] rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, var(--wp-ocean), transparent 60%)",
          }}
        />
        <div
          className="absolute -bottom-56 -right-64 h-[640px] w-[640px] rounded-full blur-3xl opacity-15"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, var(--wp-deep), transparent 60%)",
          }}
        />
      </div>

      <header className="relative z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <Image
              src="/Brand/logo-mark.png"
              alt="Waypoint"
              width={34}
              height={34}
              priority
            />
            <span className="text-sm font-semibold tracking-wide">Waypoint</span>
          </div>

          <a
            href="#waitlist"
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
          >
            Join waitlist
          </a>
        </div>
      </header>

      <main className="relative z-10">{children}</main>
    </div>
  );
}