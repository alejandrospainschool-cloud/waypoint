import Carousel from "@/components/Carousel";
import SiteShell from "@/components/SiteShell";
import WishlistForm from "@/components/WishlistForm";

export default function Home() {
  return (
    <SiteShell>
      <section className="mx-auto flex min-h-[calc(100vh-84px)] max-w-6xl items-center px-6">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/70">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: "var(--wp-sand)" }}
              />
              Early build · Waitlist open
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
              A home base for your
              <span
                className="ml-2"
                style={{
                  background:
                    "linear-gradient(90deg, var(--wp-sand), var(--wp-ocean))",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                nomad life.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--wp-muted)] sm:text-lg">
              Track places, projects, and people—without your life fragmenting across
              notes, maps, spreadsheets, and DMs.
            </p>

            <WishlistForm />

            <div className="mt-10 flex flex-wrap gap-2 text-xs text-white/60">
              <Pill>Places journal</Pill>
              <Pill>Projects hub</Pill>
              <Pill>People + follow-ups</Pill>
              <Pill>Built for travelers</Pill>
            </div>
          </div>

          <div className="lg:pl-6">
            <Carousel />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
      {children}
    </span>
  );
}