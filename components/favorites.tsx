"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import quadricicloImg from "../public/quadriciculo/01.webp";
import buggyImg from "../public/buggy/01.png";
import barcoImg from "../public/barco/01.webp";
import Link from "next/link";
import { Reveal } from "./reveal";
import { ArrowUpRight, Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const packages = [
    {
        id: 1,
        duration: "3h 30m",
        label: "Roteiro Completo",
        title: "Passeio de Quadriciclo",
        departure: "Baía Formosa",
        savings: "Economize R$280",
        oldPrice: "R$ 659,99",
        price: "R$ 379,99",
        img: quadricicloImg,
        href: "/experiencia/quadriciclo-roteiro-completo",
        tag: "Mais Popular",
    },
    {
        id: 2,
        duration: "3h",
        label: "Aventura Off Road",
        title: "Passeio de Buggy",
        departure: "Baía Formosa",
        savings: "Economize R$300",
        oldPrice: "R$ 749,99",
        price: "R$ 449,99",
        img: buggyImg,
        href: "/experiencia/buggy-roteiro-completo",
        tag: "Destaque",
    },
    {
        id: 3,
        duration: "1h",
        label: "Travessia Panorâmica",
        title: "Passeio de Barco",
        departure: "Porto Local",
        savings: "Economize R$80",
        oldPrice: "R$ 149,99",
        price: "R$ 69,99",
        img: barcoImg,
        href: "/experiencia/barco-roteiro-completo",
        tag: null,
    },
    {
        id: 4,
        duration: "25 min",
        label: "Contato com a Natureza",
        title: "Passeio de Canoa",
        departure: "Rio Guajú",
        savings: "Economize R$30",
        oldPrice: "R$ 59,99",
        price: "R$ 29,99",
        img: "/canoa/01.webp",
        href: "/experiencia/canoa-roteiro-completo",
        tag: null,
    },
];

export function Favorites() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIdx, setActiveIdx] = useState(0);

    const scroll = (dir: "left" | "right") => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollBy({ left: dir === "right" ? el.offsetWidth : -el.offsetWidth, behavior: "smooth" });
    };

    const handleScroll = () => {
        const el = scrollRef.current;
        if (!el) return;
        setActiveIdx(Math.round(el.scrollLeft / el.offsetWidth));
    };

    return (
        <section className="bg-white overflow-hidden" id="favorites">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                    <div>
                        <Reveal>
                            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
                                Experiências em Destaque
                            </p>
                        </Reveal>
                        <Reveal delay={80}>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight max-w-xl">
                                Escolha Sua Próxima{" "}
                                <span className="text-gradient">Aventura</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={140}>
                            <p className="text-slate-500 text-sm sm:text-base mt-3 max-w-lg leading-relaxed">
                                Passeios guiados por especialistas locais — do litoral à mata, cada experiência é única.
                            </p>
                        </Reveal>
                    </div>

                    {/* Nav arrows + link */}
                    <Reveal delay={160} variant="right">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => scroll("left")}
                                className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:border-primary hover:text-primary transition-colors lg:hidden"
                                aria-label="Anterior"
                            >
                                <ChevronLeft className="size-5" />
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:border-primary hover:text-primary transition-colors lg:hidden"
                                aria-label="Próximo"
                            >
                                <ChevronRight className="size-5" />
                            </button>
                            <Link
                                href="#atividades"
                                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors group"
                            >
                                Ver Mais
                                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </div>
                    </Reveal>
                </div>

                {/* Carousel / Grid */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 no-scrollbar lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0 lg:gap-5"
                    style={{ scrollbarWidth: "none" }}
                >
                    {packages.map((item, i) => (
                        <div key={item.id} className="snap-center snap-always shrink-0 w-full px-2 sm:px-4 lg:w-auto lg:shrink lg:px-0">
                            <Link
                                href={item.href}
                                className="group relative block h-full overflow-hidden rounded-3xl bg-slate-900 shadow-md hover:shadow-2xl hover:shadow-slate-900/20 transition-all duration-500"
                            >
                                {/* Image */}
                                <div className="relative h-72 w-full overflow-hidden">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 25vw"
                                        priority={item.id === 1}
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                                </div>

                                {/* Arrow button */}
                                <div className="absolute top-4 right-4 size-9 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                                    <ArrowUpRight className="size-4 text-white" />
                                </div>

                                {/* Tag */}
                                {item.tag && (
                                    <div className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                                        {item.tag}
                                    </div>
                                )}

                                {/* Content overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-1">
                                        {item.label}
                                    </p>
                                    <h3 className="text-white text-lg font-bold mb-3">
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 text-white/70 text-xs">
                                            <span className="flex items-center gap-1">
                                                <Clock className="size-3" /> {item.duration}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="size-3" /> {item.departure}
                                            </span>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-white/50 text-xs line-through">{item.oldPrice}</p>
                                            <p className="text-white font-bold text-lg leading-none">{item.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}

                </div>

                {/* Dots */}
                <div className="flex items-center justify-center gap-2 mt-6 lg:hidden">
                    {packages.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                const el = scrollRef.current;
                                if (!el) return;
                                el.scrollTo({ left: i * el.offsetWidth, behavior: "smooth" });
                                setActiveIdx(i);
                            }}
                            className={`rounded-full transition-all duration-300 ${activeIdx === i ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-slate-300 hover:bg-slate-400"}`}
                            aria-label={`Ir para slide ${i + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
