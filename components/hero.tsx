import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Reveal } from "./reveal";
import { MapPin, Calendar, Users, ArrowUpRight, Star, Compass } from "lucide-react";

export function Hero() {
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
            Descubra o Paraíso <span className="text-gradient text-[2.3rem] sm:text-5xl lg:text-6xl xl:text-7xl">Natural do Nordeste.</span>
          </h1>
        </Reveal>

        {/* Subtext */}
        <Reveal delay={220}>
          <p className="text-white/65 max-w-lg text-sm sm:text-base mb-8 leading-relaxed">
            Praias desertas, natureza preservada e aventuras inesquecíveis a 95 km de Natal. 
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
            <div className="flex items-center gap-3 flex-1 px-4 py-2.5 rounded-xl">
              <Calendar className="text-primary size-4 shrink-0" />
              <div>
                <p className="text-white/50 text-[10px] uppercase tracking-widest leading-none mb-0.5">Data</p>
                <p className="text-white/80 text-sm font-medium">Escolha sua data</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20 self-center" />
            <div className="h-px sm:hidden bg-white/10 mx-4" />
            <div className="flex items-center gap-3 flex-1 px-4 py-2.5 rounded-xl">
              <Users className="text-primary size-4 shrink-0" />
              <div>
                <p className="text-white/50 text-[10px] uppercase tracking-widest leading-none mb-0.5">Pessoas</p>
                <p className="text-white/80 text-sm font-medium">2 Pessoas</p>
              </div>
            </div>
            <Link href="#favorites" className="sm:ml-1 px-2 sm:px-0">
              <Button className="w-full sm:w-auto gap-2 px-6 h-11 rounded-xl font-semibold text-sm">
                Agendar
                <ArrowUpRight className="size-4" />
              </Button>
            </Link>
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
            <p className="text-white font-bold text-2xl sm:text-3xl">500+</p>
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
