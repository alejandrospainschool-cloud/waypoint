import Image from "next/image";
import Link from "next/link";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--wp-bg)] text-[var(--wp-text)]">
      {/* Background aura */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute -top-56 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full blur-3xl opacity-35"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, var(--wp-sand), transparent 60%)",
          }}
        />
        <div
          className="absolute top-16 -left-56 h-[620px] w-[620px] rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, var(--wp-ocean), transparent 60%)",
          }}
        />
        <div
          className="absolute -bottom-40 -right-56 h-[620px] w-[620px] rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, var(--wp-deep), transparent 60%)",
          }}
        />
      </div>

      {/* Optional subtle grid */}
      <div aria-hidden className="pointer-events-none fixed inset-0 opacity-[0.08] wp-grid" />

      {/* Navbar */}
      <header className="relative z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/Brand/logo-mark.png"
              alt="Waypoint"
              width={40}
              height={40}
              priority
            />
            <span className="text-sm font-semibold tracking-wide">Waypoint</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-[var(--wp-muted)] md:flex">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#why" className="hover:text-white">
              Why
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
          </nav>

          <a
            href="#wishlist"
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
          >
            Join wishlist
          </a>
        </div>
      </header>

      <main className="relative z-10">{children}</main>
    </div>
  );
}