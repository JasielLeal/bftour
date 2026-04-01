"use client";

import Link from "next/link";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Title } from "./ui/title";
import { SubText } from "./ui/sub-text";
import { Button } from "./ui/button";
import { useState, useEffect, useCallback } from "react";
import { Reveal } from "./reveal";

const depoimentos = [
    {
        id: 1,
        nome: "Marcos Amorim",
        cidade: "Santa Catarina, SC",
        experiencia: "Passeio de Quadriciclo",
        nota: 5,
        texto: "Lugar sensacional a 95km de Natal. Para quem curte um passeio de quadriciclo raiz é aqui com certeza Júlio e João guias maravilhosos cidade de Italo Ferreira campeão olímpico e mundial.  Para quem quer desbravar a natureza o lugar é aqui",
        avatar: "MA",
    },
    {
        id: 2,
        nome: "Carla Galvão",
        cidade: "Recife, PE",
        experiencia: "Passeio de Quadriciclo",
        nota: 5,
        texto: "Fomos muito bem recebidos, o passeio é muito legal e tem paisagens incríveis no caminho. O Júlio, João e o Sr Rômulo nos atenderam muito bem durante todo o tempo, com certeza voltaremos!",
        avatar: "CG",
    },
    {
        id: 3,
        nome: "Felipe Carauta",
        cidade: "Natal, RN",
        experiencia: "Passeio de Quadriciclo",
        nota: 5,
        texto: "Recomendo demais, Julio muito gente boa, passeio bacana, vários locais bonitos, vistas, natureza pura e a adrenalina do quadriciclo.",
        avatar: "FC",
    },
    {
        id: 4,
        nome: "Rita De Cassia De Souza",
        cidade: "Natal, RN",
        experiencia: "Passeio de Quadriciclo",
        nota: 5,
        texto: "Melhor passeio de quadriciclo do RN, valeu muito a pena podem confiar. Atendimento top do início ao fim!!!",
        avatar: "RC",

    },
    {
        id: 5,
        nome: "Monica Bose",
        cidade: "Natal, RN",
        experiencia: "Passeio de Buggy",
        nota: 5,
        texto: "Sensacional! O passeio de buggy foi muito bacana, pudemos aproveitar muito bem todas as atrações do roteiro. O atendimento é muito bom. Júlio foi super atencioso e prestativo, respondeu rapidamente e trouxe alternativas para todas as nossas solicitações. Super recomendo!!!!",
        avatar: "MB",
    }
];

export function Reviews() {
    const [current, setCurrent] = useState(0);

    const prev = useCallback(() => {
        setCurrent((c) => (c - 1 + depoimentos.length) % depoimentos.length);
    }, []);

    const next = useCallback(() => {
        setCurrent((c) => (c + 1) % depoimentos.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-6">
                <Reveal className="w-fit">
                    <Badge>Depoimentos</Badge>
                </Reveal>
                <Reveal delay={100} className="mt-3 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                    <div className="max-w-lg">
                        <Title>O que nossos clientes dizem</Title>
                        <div className="mt-2">
                            <SubText>
                                Experiências reais de quem viveu momentos inesquecíveis em Baía Formosa.
                            </SubText>
                        </div>
                    </div>
                    <Link href="/feedback">
                        <Button variant="outline">Ver todas as avaliações</Button>
                    </Link>
                </Reveal>

                <Reveal delay={180} className="relative">
                    {/* Carousel track */}
                    <div className="overflow-hidden rounded-2xl">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {depoimentos.map((d) => (
                                <div
                                    key={d.id}
                                    className="w-full shrink-0 px-1"
                                >
                                    <div className="interactive-card flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-8 max-w-2xl mx-auto">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                                                    {d.avatar}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-slate-900">{d.nome}</p>
                                                    <p className="text-xs text-slate-500">{d.cidade}</p>
                                                </div>
                                            </div>
                                            {/* Google logo */}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="size-6 shrink-0" aria-label="Google">
                                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                                                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                                                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                                                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                                                <path fill="none" d="M0 0h48v48H0z"/>
                                            </svg>
                                        </div>
                                        <div className="flex gap-0.5">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <Star key={s} className={`size-4 ${s <= d.nota ? "fill-amber-400 text-amber-400" : "fill-transparent text-slate-200"}`} />
                                            ))}
                                        </div>
                                        <p className="text-sm leading-relaxed text-slate-600">{d.texto}</p>
                                        <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                                            {d.experiencia}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Arrows */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 flex size-10 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="size-5 text-slate-600" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 flex size-10 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors"
                        aria-label="Próximo"
                    >
                        <ChevronRight className="size-5 text-slate-600" />
                    </button>
                </Reveal>

                {/* Dots */}
                <div className="mt-6 flex justify-center gap-2">
                    {depoimentos.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-primary" : "w-2 bg-slate-300"}`}
                            aria-label={`Ir para depoimento ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
