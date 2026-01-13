import Image from "next/image";
import Carousel from "@/components/Carousel";
import WishlistForm from "@/components/WishlistForm";
import SiteShell from "@/components/SiteShell";

export default function Home() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/70">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: "var(--wp-sand)" }}
              />
              Early build · Waitlist open
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
              The Ultimate Digital Nomad HQ.
              <span
                className="block"
                style={{
                  background:
                    "linear-gradient(90deg, var(--wp-sand), var(--wp-ocean))",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Plan, Connect, &amp; Thrive.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--wp-muted)] sm:text-lg">
              Waypoint keeps your places, projects, and people organized—so you
              can move fast without losing momentum.
            </p>

            {/* email */}
            <WishlistForm />

            {/* mini trust line */}
            <div className="mt-5 flex items-center gap-3 text-xs text-white/50">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/30" />
              No spam. One email when the beta opens.
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div
              className="absolute -inset-10 rounded-[48px] blur-3xl opacity-25"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, var(--wp-ocean), transparent 60%)",
              }}
            />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/25 p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src="/Brand/logo-mark.png"
                    alt="Waypoint"
                    width={28}
                    height={28}
                    priority
                  />
                  <div className="text-sm font-semibold">Waypoint</div>
                </div>

                <a
                  href="#waitlist"
                  className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15"
                >
                  Join waitlist
                </a>
              </div>

              <div className="mt-5 relative aspect-[16/9]">
                <Image
                  src="/Brand/world-map.svg"
                  alt="Waypoint world map"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* FEATURE CARDS */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="Track Your Journey"
            desc="Save places, notes, and tags so you never lose the gems."
            icon="pin"
          />
          <FeatureCard
            title="Connect with Nomads"
            desc="Lightweight contact tracking with context + follow-ups."
            icon="users"
          />
          <FeatureCard
            title="Manage Projects Globally"
            desc="Keep your priorities visible wherever you land."
            icon="bolt"
          />
        </div>
      </section>

      {/* CAROUSEL UNDERNEATH */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-lg font-semibold">How Waypoint works</h2>
            <p className="mt-1 text-sm text-[var(--wp-muted)]">
              A preview of the first release: Places, Projects, People.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Carousel />
        </div>
      </section>
    </SiteShell>
  );
}

function FeatureCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: "pin" | "users" | "bolt";
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
      <div className="flex items-center gap-3">
        <Icon kind={icon} />
        <div className="text-sm font-semibold">{title}</div>
      </div>
      <p className="mt-3 text-sm text-[var(--wp-muted)]">{desc}</p>
    </div>
  );
}

function Icon({ kind }: { kind: "pin" | "users" | "bolt" }) {
  const common = {
    width: 34,
    height: 34,
    className:
      "rounded-2xl border border-white/10 bg-black/25 p-2 text-white/80",
  };

  if (kind === "pin") {
    return (
      <svg {...common} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M12 12.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    );
  }

  if (kind === "users") {
    return (
      <svg {...common} viewBox="0 0 24 24" fill="none">
        <path
          d="M16 20c0-2.2-1.8-4-4-4s-4 1.8-4 4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M12 12a3.2 3.2 0 1 0 0-6.4A3.2 3.2 0 0 0 12 12Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M20 20c0-1.8-1.2-3.3-2.8-3.8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M17.6 12.2A2.8 2.8 0 1 0 17.6 6.6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg {...common} viewBox="0 0 24 24" fill="none">
      <path
        d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}