"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import villarmar from "../public/pousadas/villamar/01.webp";
import { Reveal } from "./reveal";
import { ChevronDown, ArrowUpRight } from "lucide-react";

const faqs = [
    {
        id: 1,
        q: "Quais tipos de passeios a BF Tour oferece?",
        a: "Oferecemos passeios de quadriciclo, buggy, barco, canoa, aulas de surf, trilhas na mata e experiências gastronômicas — tudo em Baía Formosa, RN.",
    },
    {
        id: 2,
        q: "Como funciona o cancelamento e reembolso?",
        a: "Cancelamentos realizados com até 48h de antecedência têm reembolso integral. Em casos de mal tempo ou imprevistos operacionais reagendamos sem custo.",
    },
    {
        id: 3,
        q: "Os passeios têm guia credenciado?",
        a: "Sim! Todos os passeios são conduzidos por guias locais credenciados que conhecem cada trilha, praia e ponto turístico da região.",
    },
    {
        id: 4,
        q: "É possível personalizar meu roteiro?",
        a: "Claro! Entre em contato pelo WhatsApp e montamos um roteiro sob medida para o seu grupo, combinando atividades, refeições e hospedagem.",
    },
    {
        id: 5,
        q: "Como fazer o agendamento?",
        a: "Basta clicar em 'Agendar', escolher a experiência e a data, ou falar direto pelo WhatsApp. Respondemos em minutos.",
    },
];

export function WhereIts() {
    const [open, setOpen] = useState<number | null>(1);

    return (
        <section className="bg-slate-50 py-20 sm:py-28" id="faq">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left – FAQ */}
                    <div>
                        <Reveal>
                            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">FAQ</p>
                        </Reveal>
                        <Reveal delay={80}>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-2">
                                Tudo que Você Precisa Saber Antes da Sua{" "}
                                <span className="text-gradient">Aventura</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={140}>
                            <p className="text-slate-500 mb-8 text-sm leading-relaxed">
                                Não encontrou o que procura?{" "}
                                <Link href="https://wa.me/5584994062456" target="_blank" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                                    Fale conosco agora
                                    <ArrowUpRight className="size-3.5" />
                                </Link>
                            </p>
                        </Reveal>

                        <div className="space-y-2">
                            {faqs.map((faq, i) => (
                                <Reveal key={faq.id} delay={i * 60}>
                                    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
                                        <button
                                            type="button"
                                            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50 transition-colors"
                                            onClick={() => setOpen(open === faq.id ? null : faq.id)}
                                        >
                                            <span className="text-sm font-semibold text-slate-800">{faq.q}</span>
                                            <ChevronDown
                                                className={`size-4 text-slate-400 shrink-0 transition-transform duration-300 ${open === faq.id ? "rotate-180" : ""}`}
                                            />
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${open === faq.id ? "max-h-40" : "max-h-0"}`}
                                        >
                                            <p className="px-5 pb-4 text-sm text-slate-500 leading-relaxed">{faq.a}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    {/* Right – Image collage */}
                    <Reveal delay={200} variant="right">
                        <div className="relative h-120 hidden lg:block">
                            {/* Main image */}
                            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/15">
                                <Image
                                    src={villarmar}
                                    alt="Pousada Villa Mar – Baía Formosa"
                                    fill
                                    className="object-cover"
                                    sizes="50vw"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent" />
                            </div>

                            {/* Floating stat card */}
                            <div className="absolute -bottom-4 -left-6 rounded-2xl bg-white shadow-xl p-4 flex items-center gap-3 min-w-50">
                                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="text-primary text-lg font-bold">5★</span>
                                </div>
                                <div>
                                    <p className="text-slate-900 font-bold text-sm leading-none mb-0.5">Avaliação Perfeita</p>
                                    <p className="text-slate-400 text-xs">+500 clientes satisfeitos</p>
                                </div>
                            </div>

                            {/* Floating badge */}
                            <div className="absolute top-4 right-4 rounded-2xl bg-primary px-4 py-3 shadow-lg">
                                <p className="text-white font-bold text-2xl leading-none">8+</p>
                                <p className="text-white/80 text-xs">Experiências</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}