"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Button } from "./ui/button";
import { Reveal } from "./reveal";
import { MapPin, Calendar, ArrowUpRight, Star, Compass, ChevronDown, Tag } from "lucide-react";

const ATIVIDADES = [
  "Todas as atividades",
  "Quadriciclo",
  "Buggy",
  "Barco",
  "Canoa",
  "Surf",
  "Experiência Gastronômica",
  "Trilha",
  "Pousadas",
];

export function Hero() {
  const [date, setDate] = useState("");
  const [atividade, setAtividade] = useState("");
  const [openDrop, setOpenDrop] = useState(false);
  const [dropPos, setDropPos] = useState({ top: 0, left: 0, width: 0 });
  const dropRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setOpenDrop(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function toggleDrop() {
    if (!openDrop && dropRef.current) {
      const rect = dropRef.current.getBoundingClientRect();
      setDropPos({ top: rect.bottom + 8, left: rect.left, width: rect.width });
    }
    setOpenDrop((o) => !o);
  }

  const atividadeLabel = atividade || "Escolha atividade";

  const whatsappMsg = [
    "Olá! Gostaria de agendar uma experiência em Baía Formosa.",
    atividade ? `Atividade: ${atividade}` : "",
    date ? `Data: ${new Date(date + "T00:00:00").toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}` : "",
  ].filter(Boolean).join("\n");

  const whatsappHref = `https://wa.me/5584994062456?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900">
      {/* Background image – mobile */}
      <div className="absolute inset-0 sm:hidden">
        <Image
          src="/hero-desk.png"
          alt="Baía Formosa – Vista panorâmica"
          fill
          priority
          quality={85}
          className="object-cover hero-image-pan"
          sizes="100vw"
        />
      </div>
      {/* Background image – desktop */}
      <div className="absolute inset-0 hidden sm:block">
        <Image
          src="/hero-desk.webp"
          alt="Baía Formosa – Vista panorâmica"
          fill
          priority
          quality={90}
          className="object-cover hero-image-pan"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/25 to-black/75" />
      <div className="absolute inset-0 bg-linear-to-r from-black/30 to-transparent" />

      {/* Giant background text – Triplio style */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="hero-big-text">BAÍA FORMOSA</span>
      </div>

      {/* Content – sits at the bottom of the hero */}
      <div className="relative z-10 flex flex-col justify-end min-h-screen max-w-7xl mx-auto px-5 sm:px-8 pb-40 sm:pb-48 lg:pb-52 pt-28">

        {/* Badge row */}
        <Reveal delay={60} className="mb-5 flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur px-3 py-1.5 text-xs font-semibold text-white/90 tracking-wide">
            <Compass className="size-3 text-primary shrink-0" />
            <span className="hidden sm:inline">Baía Formosa, Rio Grande do Norte</span>
            <span className="sm:hidden">Baía Formosa, RN</span>
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-white">
            <Star className="size-3 fill-white shrink-0" />
            5.0 no Google
          </span>
        </Reveal>

        {/* Heading */}
        <Reveal delay={140}>
          <h1 className="text-white font-extrabold leading-[1.1] tracking-tight text-[1.95rem] sm:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mb-4">
            Descubra o Paraíso <span className="text-gradient text-[2rem] sm:text-5xl lg:text-6xl xl:text-5xl">Escondido do Nordeste.</span>
          </h1>
        </Reveal>

        {/* Subtext */}
        <Reveal delay={220}>
          <p className="text-white/65 max-w-lg text-sm sm:text-base mb-8 leading-relaxed">
            Praias desertas, natureza preservada e aventuras inesquecíveis a cerca de 95 km de Natal e João Pessoa. 
            Viva Baía Formosa de um jeito único.
          </p>
        </Reveal>

        {/* Search / booking widget */}
        <Reveal delay={300}>
          <div className="glass-widget rounded-2xl p-1.5 sm:p-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 sm:gap-2 max-w-2xl w-full">
            <div className="flex items-center gap-3 flex-1 px-4 py-2.5 rounded-xl">
              <MapPin className="text-primary size-4 shrink-0" />
              <div>
                <p className="text-white/50 text-[10px] uppercase tracking-widest leading-none mb-0.5">Destino</p>
                <p className="text-white text-sm font-semibold">Baía Formosa, RN</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20 self-center" />
            <div className="h-px sm:hidden bg-white/10 mx-4" />
            <div
              className="flex items-center gap-3 flex-1 px-4 py-2.5 rounded-xl cursor-pointer hover:bg-white/5 transition-colors"
              onClick={() => dateRef.current?.showPicker?.()}
            >
              <Calendar className="text-primary size-4 shrink-0" />
              <div className="flex-1">
                <p className="text-white/50 text-[10px] uppercase tracking-widest leading-none mb-0.5">Data</p>
                <p className="text-white/80 text-sm font-medium">
                  {date
                    ? new Date(date + "T00:00:00").toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })
                    : "Escolha sua data"}
                </p>
              </div>
              <input
                ref={dateRef}
                type="date"
                min={new Date().toISOString().split("T")[0]}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="absolute opacity-0 w-0 h-0 pointer-events-none"
              />
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20 self-center" />
            <div className="h-px sm:hidden bg-white/10 mx-4" />
            <div ref={dropRef} className="relative flex items-center gap-3 flex-1 px-4 py-2.5 rounded-xl cursor-pointer hover:bg-white/5 transition-colors" onClick={toggleDrop}>
              <Tag className="text-primary size-4 shrink-0" />
              <div className="flex-1">
                <p className="text-white/50 text-[10px] uppercase tracking-widest leading-none mb-0.5">Atividade</p>
                <p className="text-white/80 text-sm font-medium truncate">{atividadeLabel}</p>
              </div>
              <ChevronDown className={`size-3.5 text-white/40 shrink-0 transition-transform ${openDrop ? "rotate-180" : ""}`} />
            </div>
            {mounted && openDrop && createPortal(
              <div
                style={{ position: "fixed", top: dropPos.top, left: dropPos.left, minWidth: Math.max(dropPos.width, 200), zIndex: 9999 }}
                className="rounded-xl overflow-hidden shadow-xl border border-white/10 bg-slate-900/95 backdrop-blur"
                onMouseDown={(e) => e.stopPropagation()}
              >
                {ATIVIDADES.map((a) => (
                  <button
                    key={a}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-white/10 ${atividade === (a === "Todas as atividades" ? "" : a) ? "text-primary font-semibold" : "text-white/80"}`}
                    onClick={() => { setAtividade(a === "Todas as atividades" ? "" : a); setOpenDrop(false); }}
                  >
                    {a}
                  </button>
                ))}
              </div>,
              document.body
            )}
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="sm:ml-1 px-2 sm:px-0">
              <Button className="w-full sm:w-auto gap-2 px-6 h-11 rounded-xl font-semibold text-sm">
                Agendar
                <ArrowUpRight className="size-4" />
              </Button>
            </a>
          </div>
        </Reveal>

        {/* Stats row */}
        <Reveal delay={400} className="mt-8 flex items-center justify-center sm:justify-start gap-6 sm:gap-10">
          <div className="stat-animate" style={{ animationDelay: "500ms" }}>
            <p className="text-white font-bold text-2xl sm:text-3xl">8+</p>
            <p className="text-white/50 text-xs tracking-wide">Experiências</p>
          </div>
          <div className="w-px h-10 bg-white/20" />
          <div className="stat-animate" style={{ animationDelay: "600ms" }}>
            <p className="text-white font-bold text-2xl sm:text-3xl">2000+</p>
            <p className="text-white/50 text-xs tracking-wide">Clientes</p>
          </div>
          <div className="w-px h-10 bg-white/20" />
          <div className="stat-animate" style={{ animationDelay: "700ms" }}>
            <p className="text-white font-bold text-2xl sm:text-3xl">5★</p>
            <p className="text-white/50 text-xs tracking-wide">Avaliação</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/20" />
          <div className="hidden sm:block stat-animate" style={{ animationDelay: "800ms" }}>
            <p className="text-white/65 text-sm max-w-xs leading-snug">
              Passeios guiados, pousadas selecionadas e experiências gastronômicas autênticas.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
