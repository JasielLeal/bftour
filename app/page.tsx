import { Hero } from "../components/hero";
import { Favorites } from "@/components/favorites";
import { AboutPromo } from "@/components/about-promo";
import { StatsCounter } from "@/components/stats-counter";
import { WhereIts } from "@/components/whereIts";
import { Activities } from "@/components/activities";
import { ExpirenciesGastronomics } from "@/components/expirencies-gastronomics";
import { Pousadas } from "@/components/pousadas";
import { Galery } from "@/components/galery";
import { Location } from "@/components/locations";
import { Footer } from "@/components/footer";
import { Reviews } from "@/components/reviews";
import { Reveal } from "@/components/reveal";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import socios from "@/public/socios.jpeg"

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <main>
          <section id="inicio">
            <Hero />
          </section>

          <Favorites />

          {/* About / promo – "Onde cada jornada encontra o paraíso" */}
          <AboutPromo />

          {/* Stats counter – dark section with animated numbers */}
          <StatsCounter />

          {/* Video promo – "Baía Formosa em Movimento" */}
          <section className="relative bg-white py-20 sm:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                <div>
                  <Reveal>
                    <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
                      Veja em movimento
                    </p>
                  </Reveal>
                  <Reveal delay={80}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight max-w-lg">
                      Baía Formosa{" "}
                      <span className="text-gradient">em Movimento</span>
                    </h2>
                  </Reveal>
                </div>
                <Reveal delay={160} variant="right">
                  <Link
                    href="https://wa.me/5584994062456"
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors group"
                  >
                    Agendar pelo WhatsApp
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Reveal>
              </div>

              <Reveal delay={200}>
                <div className="relative h-72 sm:h-[420px] lg:h-[540px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/20 group cursor-pointer">
                  <Image
                    src="/quadriciculo/01.webp"
                    alt="Passeio de Quadriciclo em Baía Formosa"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Center play button */}
                  <a
                    href="https://www.instagram.com/p/DUEaAISD78C/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver vídeo no Instagram"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="relative flex items-center justify-center">
                      <span className="absolute size-28 rounded-full bg-white/15 animate-ping" />
                      <span className="absolute size-24 rounded-full bg-white/20" />
                      <div className="relative size-18 rounded-full bg-white/95 flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                        <Play className="size-8 text-primary fill-primary ml-1" />
                      </div>
                    </div>
                  </a>

                  {/* Bottom overlay text */}
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white font-bold text-xl sm:text-2xl leading-tight">
                      Aventuras off-road inesquecíveis
                    </p>
                    <p className="text-white/65 text-sm mt-1">
                      Quadriciclo, Buggy, Barco e muito mais
                    </p>
                  </div>

                  {/* Top-right tag */}
                  <div className="absolute top-6 right-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                      ▶ Ver Destinos
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <Reviews />

          <WhereIts />

          <section id="services">
            <Activities />
          </section>

          <ExpirenciesGastronomics />

          <Pousadas />

          <Galery />

          <section className="bg-white py-10 sm:py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <Reveal>
                <Image
                  alt="Júlio e João Luiz – CEOs da BF Tour"
                  src={socios}
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 896px"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-3xl shadow-xl"
                />
              </Reveal>
            </div>
          </section>

          {/* CTA – Plan Your Perfect Escape */}
          <section className="bg-white py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Reveal>
                    <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Comece agora</p>
                  </Reveal>
                  <Reveal delay={80}>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
                      Planeje Sua Escapada <span className="text-gradient">Perfeita</span> em Baía Formosa
                    </h2>
                  </Reveal>
                  <Reveal delay={150}>
                    <p className="text-slate-500 leading-relaxed mb-8 max-w-md">
                      3 minutos para agendar sua aventura: escolha a experiência, a data e o número de pessoas. 
                      Nossa equipe cuida do resto.
                    </p>
                  </Reveal>
                  <Reveal delay={220} className="flex flex-col sm:flex-row gap-3">
                   
                    <Link
                      href="https://wa.me/5584994062456"
                      target="_blank"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:border-primary hover:text-primary transition-colors"
                    >
                      Falar pelo WhatsApp
                    </Link>
                  </Reveal>
                </div>

                {/* Image collage */}
                <Reveal delay={200} variant="right">
                  <div className="grid grid-cols-2 gap-3 h-96">
                    <div className="relative rounded-3xl overflow-hidden row-span-2">
                      <Image src="/buggy/01.png" alt="Passeio de Buggy" fill className="object-cover" sizes="25vw" />
                    </div>
                    <div className="relative rounded-3xl overflow-hidden">
                      <Image src="/surf/01.webp" alt="Aula de Surf" fill className="object-cover" sizes="25vw" />
                    </div>
                    <div className="relative rounded-3xl overflow-hidden">
                      <Image src="/barco/01.webp" alt="Passeio de Barco" fill className="object-cover" sizes="25vw" />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          <section id="destinos">
            <Location />
          </section>
        </main>
        <section id="contato">
          <Footer />
        </section>
      </div>
    </>
  );
}
