"use client";

import { Badge } from "./ui/badge";
import { Title } from "./ui/title";
import { SubText } from "./ui/sub-text";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { Reveal } from "./reveal";

export function ExpirenciesGastronomics() {
  const activities = [
    {
      id: 1,
      kicker: "Bar e Restaurante",
      title: "BF Music",
      slug: "bf-music",
      image: "/experiencia-gastronomica/bf-music/01.webp",
      alt: "BF Music",
      href: "/experiencias/bf-music",
    },
    {
      id: 2,
      kicker: "Culinária Japonesa",
      title: "Willian Sushi",
      slug: "willian-sushi",
      image: "/experiencia-gastronomica/willian-sushi/01.png",
      alt: "Willian Sushi",
      href: "/experiencias/willian-sushi",
    },
    {
      id: 3,
      kicker: "Pizzaria & Hamburgueria",
      title: "Pizzaria Cunhaú",
      slug: "pizzaria-cunhau",
      image: "/experiencia-gastronomica/pizzaria-cunhau/01.webp",
      alt: "Pizzaria Cunhaú",
      href: "/experiencias/pizzaria-cunhau",
    },
    {
      id: 4,
      kicker: "Culinária Regional",
      title: "Daboa Beach",
      slug: "daboa-beach",
      image: "/experiencia-gastronomica/dboa/01.jpeg",
      alt: "Daboa Beach",
      href: "/experiencias/daboa-beach",
    },
  ];

  const trackRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!trackRef.current) return;
    const cardWidth = 360;
    trackRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white" id="gastronomia">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <Reveal className="flex flex-col gap-3 items-center text-center mb-10">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">Gastronomia</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Sabores que <span className="text-gradient">Encantam</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-md">
            Viva uma autêntica experiência cultural e gastronômica com os sabores e tradições da nossa terra.
          </p>
        </Reveal>

        <div className="relative mt-10">
          <button
            type="button"
            aria-label="Voltar"
            onClick={() => handleScroll("left")}
            className="hidden md:flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 z-10 size-10 rounded-full bg-white/90 backdrop-blur shadow-lg border border-slate-200 hover:scale-105 transition"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Avançar"
            onClick={() => handleScroll("right")}
            className="hidden md:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 z-10 size-10 rounded-full bg-white/90 backdrop-blur shadow-lg border border-slate-200 hover:scale-105 transition"
          >
            →
          </button>

          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 no-scrollbar"
          >
            {activities.map((activity) => (
              <Reveal key={activity.id} delay={activity.id * 120} className="shrink-0">
                <Link
                  href={`/experiencia/${activity.slug}`}
                  className="interactive-card group relative block min-w-70 sm:min-w-80 lg:min-w-90 h-80 snap-start overflow-hidden rounded-3xl border border-slate-200 shadow-sm"
                >
                  <Image
                    src={activity.image}
                    alt={activity.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 80vw, 360px"
                    priority={activity.id === 1}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <p className="text-white/70 text-sm uppercase tracking-[0.2em]">
                      {activity.kicker}
                    </p>
                    <h3 className="text-white text-2xl font-semibold">
                      {activity.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
