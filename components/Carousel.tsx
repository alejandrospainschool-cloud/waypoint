"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/screens/screen-1.svg",
    title: "Everything in one place",
    desc: "Trips, projects, and routines — unified.",
  },
  {
    src: "/screens/screen-2.svg",
    title: "Designed for nomads",
    desc: "Built around movement, not offices.",
  },
  {
    src: "/screens/screen-3.svg",
    title: "People matter",
    desc: "Lightweight CRM for real human connections.",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[index];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="relative aspect-[14/9]">
        <Image
          src={slide.src}
          alt={slide.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-black/60 p-4">
        <div className="font-semibold">{slide.title}</div>
        <div className="text-sm text-white/70">{slide.desc}</div>
      </div>
    </div>
  );
}