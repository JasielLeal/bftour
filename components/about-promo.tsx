"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./reveal";
import { ArrowUpRight, Play, X, Shield, Clock, Award } from "lucide-react";

const highlights = [
    { icon: Shield, text: "Segurança certificada em todos os passeios" },
    { icon: Clock, text: "Horários flexíveis, você escolhe o melhor dia" },
    { icon: Award, text: "Guias locais premiados e apaixonados pela região" },
];

const stats = [
    { value: "8+", label: "Experiências" },
    { value: "500+", label: "Clientes" },
    { value: "5★", label: "Google" },
    { value: "95km", label: "de Natal" },
];

export function AboutPromo() {
    const [lightboxOpen, setLightboxOpen] = useState(false);

    return (
        <>
        {/* ── Lightbox modal ── */}
        {lightboxOpen && (
            <div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                onClick={() => setLightboxOpen(false)}
            >
                <button
                    className="absolute top-5 right-5 size-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    onClick={() => setLightboxOpen(false)}
                    aria-label="Fechar"
                >
                    <X className="size-5" />
                </button>
                <div
                    className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Substitua o ID do YouTube pelo vídeo real */}
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/?autoplay=1&rel=0"
                        title="BF Tour – Baía Formosa"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        )}

        <section className="relative bg-slate-950 py-20 sm:py-28 overflow-hidden">
            {/* Ambient blobs */}
            <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-orange-400/8 blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* ── Left: text ── */}
                    <div>
                        <Reveal>
                            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
                                Sobre a BF Tour
                            </p>
                        </Reveal>
                        <Reveal delay={80}>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                                Onde Cada Jornada{" "}
                                <span className="text-gradient">Encontra o Paraíso</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={150}>
                            <p className="text-white/55 text-base leading-relaxed mb-8">
                                A BF Tour nasceu do amor pelo litoral de Baía Formosa. Somos guias
                                locais apaixonados, prontos para revelar os segredos da natureza
                                preservada do RN — praias desertas, trilhas, rios cristalinos e
                                sabores que ficam na memória.
                            </p>
                        </Reveal>

                        {/* Highlights */}
                        <Reveal delay={220}>
                            <ul className="space-y-4 mb-10">
                                {highlights.map(({ icon: Icon, text }, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 border border-primary/20">
                                            <Icon className="size-4 text-primary" />
                                        </span>
                                        <span className="text-white/70 text-sm">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>

                        {/* Stats grid */}
                        <Reveal delay={300}>
                            <div className="grid grid-cols-4 gap-3 mb-10">
                                {stats.map((s) => (
                                    <div
                                        key={s.label}
                                        className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center"
                                    >
                                        <p className="text-primary font-bold text-lg sm:text-xl leading-none mb-1">{s.value}</p>
                                        <p className="text-white/40 text-[10px] sm:text-xs leading-tight">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal delay={380}>
                            <Link
                                href="#favorites"
                                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-white hover:bg-orange-500 transition-colors duration-300"
                            >
                                Explorar Experiências
                                <ArrowUpRight className="size-4" />
                            </Link>
                        </Reveal>
                    </div>

                    {/* ── Right: video thumbnail ── */}
                    <Reveal delay={200} variant="right">
                        <div className="relative group cursor-pointer" onClick={() => setLightboxOpen(true)}>

                            {/* Main image */}
                            <div className="relative h-[420px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-black/60">
                                <Image
                                    src="/barco/03.webp"
                                    alt="Passeio de barco em Baía Formosa"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-500" />
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                                {/* Center play button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative flex items-center justify-center">
                                        <span className="absolute size-28 rounded-full bg-white/10 animate-ping" style={{ animationDuration: "2s" }} />
                                        <span className="absolute size-22 rounded-full bg-white/15" />
                                        <div className="relative size-18 rounded-full bg-white flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(237,112,9,0.5)]">
                                            <Play className="size-7 text-primary fill-primary ml-1" />
                                        </div>
                                    </div>
                                </div>

                                {/* Top-left badge */}
                                <div className="absolute top-5 left-5">
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                                        ▶ Assistir ao vídeo
                                    </span>
                                </div>

                                {/* Bottom info bar */}
                                <div className="absolute bottom-5 left-5 right-5">
                                    <div className="rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 px-4 py-3 flex items-center justify-between">
                                        <div>
                                            <p className="text-white font-semibold text-sm">Baía Formosa, RN</p>
                                            <p className="text-white/55 text-xs mt-0.5">Natureza preservada • 95 km de Natal</p>
                                        </div>
                                        <div className="size-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                                            <Play className="size-3.5 text-white fill-white ml-0.5" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating image chips */}
                            <div className="absolute -bottom-5 -right-3 sm:-right-5 w-32 sm:w-36 h-24 sm:h-28 rounded-2xl overflow-hidden border-[3px] border-slate-950 shadow-2xl">
                                <Image src="/buggy/04.webp" alt="Buggy" fill className="object-cover" sizes="144px" />
                            </div>
                            <div className="absolute -top-4 -right-2 sm:-right-4 w-24 sm:w-28 h-20 sm:h-24 rounded-2xl overflow-hidden border-[3px] border-slate-950 shadow-2xl">
                                <Image src="/surf/01.webp" alt="Surf" fill className="object-cover" sizes="112px" />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
        </>
    );
}
