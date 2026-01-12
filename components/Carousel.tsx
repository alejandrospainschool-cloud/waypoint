"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/Screens/screen-1.svg", label: "Places" },
  { src: "/Screens/screen-2.svg", label: "Projects" },
  { src: "/Screens/screen-3.svg", label: "People" },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[index];

  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Glow */}
      <div
        className="absolute -inset-10 rounded-[48px] blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, var(--wp-ocean), transparent 55%)",
        }}
      />

      {/* Device */}
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/30 p-3 shadow-2xl backdrop-blur">
        <div className="flex items-center justify-between px-3 pb-3">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <div className="text-xs text-white/50">{slide.label}</div>
        </div>

        <div className="relative aspect-[14/10] overflow-hidden rounded-3xl border border-white/10 bg-black/40">
          <Image src={slide.src} alt={slide.label} fill className="object-cover" priority />
        </div>

        <div className="mt-4 flex justify-center gap-2 pb-1">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 w-6 rounded-full transition ${
                i === index ? "bg-white/80" : "bg-white/20 hover:bg-white/35"
              }`}
              aria-label={`Go to ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}