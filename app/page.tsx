import Carousel from "@/components/Carousel";
import WishlistForm from "@/components/WishlistForm";
import SiteShell from "@/components/SiteShell";

export default function Home() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-[var(--wp-muted)]">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: "var(--wp-sand)" }}
              />
              Early build · Wishlist open
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
              Your nomad life,
              <span
                className="ml-2"
                style={{
                  background:
                    "linear-gradient(90deg, var(--wp-sand), var(--wp-ocean))",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                finally organized.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-lg text-[var(--wp-muted)]">
              Waypoint is a Digital Nomad OS for tracking places, projects, and
              people—so you can keep momentum while you move.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#wishlist"
                className="rounded-xl px-5 py-3 text-sm font-semibold text-black"
                style={{
                  background:
                    "linear-gradient(90deg, var(--wp-sand), var(--wp-sun))",
                }}
              >
                Get early access
              </a>
              <a
                href="#features"
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                See how it works
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-xs text-[var(--wp-muted)]">
              <Stat label="Trip notes" value="Places" />
              <Stat label="Deliverables" value="Projects" />
              <Stat label="Follow-ups" value="People" />
            </div>
          </div>

          <div className="lg:pl-6">
            <Carousel />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          <Feature
            title="Places that matter"
            desc="Save cities, cafés, coworking spots, SIM info, and notes—so you don’t re-learn every time."
          />
          <Feature
            title="Projects with momentum"
            desc="Keep your goals, routines, and deliverables visible even when your location changes."
          />
          <Feature
            title="People + context"
            desc="Lightweight CRM: who you met, where, why they matter, and when to follow up."
          />
        </div>
      </section>

      {/* Why */}
      <section id="why" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">
                Built for movement, not offices.
              </h2>
              <p className="mt-3 text-[var(--wp-muted)]">
                Your life shouldn’t be scattered across Notes, Google Maps,
                spreadsheets, and DMs. Waypoint keeps it in one system designed
                for travel.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-[var(--wp-muted)]">
                <li className="flex gap-3">
                  <Dot /> One home base for places, projects, and people
                </li>
                <li className="flex gap-3">
                  <Dot /> Fast capture: add notes in seconds, not minutes
                </li>
                <li className="flex gap-3">
                  <Dot /> Designed for creators, freelancers, and remote teams
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <div className="text-sm font-semibold">What’s in the first release</div>
              <div className="mt-4 grid gap-3 text-sm text-[var(--wp-muted)]">
                <RoadmapItem
                  title="Places journal"
                  desc="Pins + notes + tags + quick search."
                />
                <RoadmapItem
                  title="Projects hub"
                  desc="Goals + focus list + lightweight tracking."
                />
                <RoadmapItem
                  title="People tracker"
                  desc="Context + reminders + follow-up prompts."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wishlist */}
      <section id="wishlist" className="mx-auto max-w-6xl px-6 pb-20">
        <WishlistForm />
        <p className="mt-4 text-center text-xs text-[var(--wp-muted)]">
          No spam. One email when the beta opens.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-6 pb-24">
        <h3 className="text-xl font-bold">FAQ</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Faq
            q="Is this a travel planner?"
            a="Not primarily. It’s an operating system for your nomad life: places, projects, and people—so travel doesn’t create chaos."
          />
          <Faq
            q="When is the beta?"
            a="We’re building the first version now. Wishlist members get first access and influence priorities."
          />
          <Faq
            q="Will it work offline?"
            a="On the roadmap. Early releases focus on fast capture and search, with offline support coming next."
          />
          <Faq
            q="Is it for backpackers or remote workers?"
            a="Both. The vibe is traveler-first, but the system is designed for people earning online."
          />
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-xs text-[var(--wp-muted)]">
        © {new Date().getFullYear()} Waypoint
      </footer>
    </SiteShell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-sm font-semibold text-white">{value}</div>
      <div className="mt-1 text-[11px] text-[var(--wp-muted)]">{label}</div>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm text-[var(--wp-muted)]">{desc}</div>
    </div>
  );
}

function Dot() {
  return (
    <span
      className="mt-1 inline-block h-2 w-2 flex-none rounded-full"
      style={{
        background: "linear-gradient(90deg, var(--wp-sand), var(--wp-ocean))",
      }}
    />
  );
}

function RoadmapItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-1 text-xs text-[var(--wp-muted)]">{desc}</div>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-sm font-semibold text-white">{q}</div>
      <div className="mt-2 text-sm text-[var(--wp-muted)]">{a}</div>
    </div>
  );
}