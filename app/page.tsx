import Carousel from "@/components/Carousel";
import WishlistForm from "@/components/WishlistForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <header className="max-w-3xl">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/70">
            Waypoint · Digital Nomad OS
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
            The home base for people building a life on the move.
          </h1>

          <p className="mt-4 text-lg text-white/70">
            Track places, projects, and people — without your life
            fragmenting across ten different tools.
          </p>
        </header>

        <section className="mt-14 grid gap-12 lg:grid-cols-2">
          <Carousel />
          <WishlistForm />
        </section>
      </div>
    </main>
  );
}