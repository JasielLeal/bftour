"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./reveal";

const depoimentos = [
    {
        id: 1,
        nome: "Marcos Amorim",
        cidade: "Santa Catarina, SC",
        experiencia: "Passeio de Quadriciclo",
        nota: 5,
        texto: "Lugar sensacional a 95km de Natal. Para quem curte um passeio de quadriciclo raiz é aqui. Júlio e João, guias maravilhosos. Cidade de Italo Ferreira, campeão olímpico e mundial!",
        avatar: "MA",
        color: "bg-orange-500",
    },
    {
        id: 2,
        nome: "Carla Galvão",
        cidade: "Recife, PE",
        experiencia: "Passeio de Quadriciclo",
        nota: 5,
        texto: "Fomos muito bem recebidos. O passeio é muito legal e tem paisagens incríveis. O Júlio, João e o Sr Rômulo nos atenderam muito bem durante todo o tempo, com certeza voltaremos!",
        avatar: "CG",
        color: "bg-blue-500",
    },
    {
        id: 3,
        nome: "Felipe Carauta",
        cidade: "Natal, RN",
        experiencia: "Passeio de Quadriciclo",
        nota: 5,
        texto: "Recomendo demais. Julio muito gente boa, passeio bacana, vários locais bonitos, vistas, natureza pura e a adrenalina do quadriciclo.",
        avatar: "FC",
        color: "bg-emerald-500",
    },
    {
        id: 4,
        nome: "Monica Bose",
        cidade: "Natal, RN",
        experiencia: "Passeio de Buggy",
        nota: 5,
        texto: "Sensacional! O passeio de buggy foi muito bacana. O atendimento é muito bom. Júlio foi super atencioso e prestativo, respondeu rapidamente. Super recomendo!",
        avatar: "MB",
        color: "bg-purple-500",
    },
    {
        id: 5,
        nome: "Rita de Cassia",
        cidade: "Natal, RN",
        experiencia: "Passeio de Quadriciclo",
        nota: 5,
        texto: "Melhor passeio de quadriciclo do RN, valeu muito a pena podem confiar. Atendimento top do início ao fim!!!",
        avatar: "RC",
        color: "bg-rose-500",
    },
];

const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="size-5 shrink-0" aria-label="Google">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        <path fill="none" d="M0 0h48v48H0z"/>
    </svg>
);

export function Reviews() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIdx, setActiveIdx] = useState(0);

    const goTo = (i: number) => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollTo({ left: i * el.offsetWidth, behavior: "smooth" });
        setActiveIdx(i);
    };

    const scroll = (dir: "left" | "right") => {
        const next = dir === "right"
            ? Math.min(activeIdx + 1, depoimentos.length - 1)
            : Math.max(activeIdx - 1, 0);
        goTo(next);
    };

    const handleScroll = () => {
        const el = scrollRef.current;
        if (!el) return;
        setActiveIdx(Math.round(el.scrollLeft / el.offsetWidth));
    };

    return (
        <section className="bg-slate-50 py-20 sm:py-28 overflow-hidden" id="depoimentos">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
                    <div>
                        <Reveal>
                            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Depoimentos</p>
                        </Reveal>
                        <Reveal delay={80}>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight max-w-xl">
                                O que nossos{" "}
                                <span className="text-gradient">clientes dizem</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={130}>
                            <p className="text-slate-500 text-sm sm:text-base mt-3 max-w-md">
                                Avaliações reais de quem viveu a experiência em Baía Formosa.
                            </p>
                        </Reveal>
                    </div>

                    {/* Controls */}
                    <Reveal delay={160} variant="right">
                        <div className="flex items-center gap-3">
                            <button onClick={() => scroll("left")} className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:border-primary hover:text-primary disabled:opacity-30 transition-colors" aria-label="Anterior" disabled={activeIdx === 0}>
                                <ChevronLeft className="size-5" />
                            </button>
                            <button onClick={() => scroll("right")} className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:border-primary hover:text-primary disabled:opacity-30 transition-colors" aria-label="Próximo" disabled={activeIdx === depoimentos.length - 1}>
                                <ChevronRight className="size-5" />
                            </button>
                            <Link
                                href="/feedback"
                                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors"
                            >
                                Ver todas
                            </Link>
                        </div>
                    </Reveal>
                </div>

                {/* Rating summary bar */}
                <Reveal delay={100}>
                    <div className="flex items-center gap-4 mb-10 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm w-fit">
                        <div className="text-center">
                            <p className="text-4xl font-black text-slate-900 leading-none">5.0</p>
                            <div className="flex gap-0.5 mt-1 justify-center">
                                {[1,2,3,4,5].map(s => <Star key={s} className="size-3.5 fill-amber-400 text-amber-400" />)}
                            </div>
                        </div>
                        <div className="w-px h-10 bg-slate-200" />
                        <div>
                            <p className="text-sm font-semibold text-slate-900">Avaliação no Google</p>
                            <p className="text-xs text-slate-400 mt-0.5">Baseado em {depoimentos.length}+ avaliações verificadas</p>
                        </div>
                        <GoogleIcon />
                    </div>
                </Reveal>

                {/* Carousel */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
                    style={{ scrollbarWidth: "none" }}
                >
                    {depoimentos.map((d, i) => (
                        <div key={d.id} className="snap-center snap-always shrink-0 w-full px-1">
                            <div className="relative rounded-3xl bg-white border border-slate-100 shadow-sm p-7 sm:p-9 hover:shadow-lg transition-shadow duration-300">

                                {/* Large quote decoration */}
                                <Quote className="absolute top-6 right-7 size-10 text-slate-100" />

                                {/* Stars */}
                                <div className="flex gap-1 mb-5">
                                    {[1,2,3,4,5].map((s) => (
                                        <Star key={s} className={`size-4 ${s <= d.nota ? "fill-amber-400 text-amber-400" : "fill-transparent text-slate-200"}`} />
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl">
                                    "{d.texto}"
                                </p>

                                {/* Tag */}
                                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-6">
                                    {d.experiencia}
                                </span>

                                {/* Author row */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className={`flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${d.color}`}>
                                            {d.avatar}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 leading-none mb-1">{d.nome}</p>
                                            <p className="text-xs text-slate-400">{d.cidade}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-slate-400">via</span>
                                        <GoogleIcon />
                                    </div>
                                </div>

                                {/* Progress indicator inside card */}
                                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-xs text-slate-400">{i + 1} de {depoimentos.length}</span>
                                    <div className="flex gap-1.5">
                                        {depoimentos.map((_, j) => (
                                            <button
                                                key={j}
                                                onClick={() => goTo(j)}
                                                className={`rounded-full transition-all duration-300 ${activeIdx === j ? "w-5 h-1.5 bg-primary" : "w-1.5 h-1.5 bg-slate-200 hover:bg-slate-300"}`}
                                                aria-label={`Ir para depoimento ${j + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
