"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/Screens/screen-1.svg", label: "Dashboard" },
  { src: "/Screens/screen-2.svg", label: "Projects" },
  { src: "/Screens/screen-3.svg", label: "People" },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4200);
    return () => clearInterval(id);
  }, []);

  const slide = slides[index];

  return (
    <div className="relative">
      <div
        className="absolute -inset-6 rounded-[32px] opacity-35 blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, var(--wp-sand), transparent 55%)",
        }}
      />

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-3 backdrop-blur">
        <div className="flex items-center justify-between px-3 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div className="text-xs text-white/60">{slide.label}</div>
        </div>

        <div className="relative aspect-[14/9] overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <Image
            src={slide.src}
            alt={slide.label}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-white" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}