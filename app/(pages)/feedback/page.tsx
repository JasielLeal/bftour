"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, MessageSquare, Send, ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";
import { SubText } from "@/components/ui/sub-text";
import { Footer } from "@/components/footer";

const experiencias = [
    "Passeio de Quadriciclo",
    "Passeio de Buggy",
    "Passeio de Barco",
    "Passeio de Canoa",
    "Aula de Surf",
    "Trilha na Mata",
    "Experiência Gastronômica",
    "Hospedagem",
    "Outro",
];

const depoimentos = [
    {
        id: 1,
        nome: "Ana Carolina",
        cidade: "São Paulo, SP",
        experiencia: "Passeio de Quadriciclo",
        nota: 5,
        data: "Março 2026",
        texto:
            "Experiência incrível! O guia foi super atencioso e as paisagens são de tirar o fôlego. As praias desertas são simplesmente paradisíacas. Com certeza voltarei!",
        avatar: "AC",
    },
    {
        id: 2,
        nome: "Ricardo Souza",
        cidade: "Recife, PE",
        experiencia: "Passeio de Buggy",
        nota: 5,
        data: "Fevereiro 2026",
        texto:
            "Que aventura! O passeio de buggy foi emocionante do começo ao fim. O bugueiro é experiente e muito simpático. Recomendo a todos que visitam Baía Formosa.",
        avatar: "RS",
    },
    {
        id: 3,
        nome: "Fernanda Lima",
        cidade: "Natal, RN",
        experiencia: "Experiência Gastronômica",
        nota: 5,
        data: "Janeiro 2026",
        texto:
            "A experiência gastronômica superou todas as minhas expectativas. Comida fresquíssima e um ambiente lindo. O sushi do William é simplesmente divino!",
        avatar: "FL",
    },
    {
        id: 4,
        nome: "Marcos Oliveira",
        cidade: "Belo Horizonte, MG",
        experiencia: "Passeio de Barco",
        nota: 4,
        data: "Janeiro 2026",
        texto:
            "Passeio de barco muito tranquilo e relaxante. Excelente para quem quer apreciar a beleza natural da costa. Pôr do sol durante o passeio foi mágico.",
        avatar: "MO",
    },
    {
        id: 5,
        nome: "Juliana Ferreira",
        cidade: "Fortaleza, CE",
        experiencia: "Trilha na Mata",
        nota: 5,
        data: "Dezembro 2025",
        texto:
            "A trilha na mata foi uma experiência única de contato com a natureza! Guia muito informado sobre a fauna e flora local. Uma aventura que vale cada passo.",
        avatar: "JF",
    },
    {
        id: 6,
        nome: "Paulo Henrique",
        cidade: "Campina Grande, PB",
        experiencia: "Passeio de Canoa",
        nota: 5,
        data: "Dezembro 2025",
        texto:
            "Passeio de canoa no Rio Guajú foi simplesmente espetacular. Natureza preservada, água cristalina e muita tranquilidade. Perfeito para família!",
        avatar: "PH",
    },
];

function StarRating({
    value,
    onChange,
    readonly = false,
    size = "md",
}: {
    value: number;
    onChange?: (v: number) => void;
    readonly?: boolean;
    size?: "sm" | "md";
}) {
    const [hovered, setHovered] = useState(0);
    const starSize = size === "sm" ? "size-4" : "size-6";

    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type="button"
                    disabled={readonly}
                    onClick={() => onChange?.(star)}
                    onMouseEnter={() => !readonly && setHovered(star)}
                    onMouseLeave={() => !readonly && setHovered(0)}
                    className={readonly ? "cursor-default" : "cursor-pointer"}
                    aria-label={`${star} estrela${star > 1 ? "s" : ""}`}
                >
                    <Star
                        className={`${starSize} transition-colors ${
                            star <= (hovered || value)
                                ? "fill-amber-400 text-amber-400"
                                : "fill-transparent text-slate-300"
                        }`}
                    />
                </button>
            ))}
        </div>
    );
}

function ReviewCard({ review }: { review: (typeof depoimentos)[0] }) {
    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-6">
            <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                        {review.avatar}
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-slate-900">{review.nome}</p>
                        <p className="text-xs text-slate-500">{review.cidade}</p>
                    </div>
                </div>
                <span className="text-xs text-slate-400">{review.data}</span>
            </div>

            <StarRating value={review.nota} readonly size="sm" />

            <p className="text-sm leading-relaxed text-slate-600">{review.texto}</p>

            <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                {review.experiencia}
            </span>
        </div>
    );
}

const totalAvaliacoes = depoimentos.length;
const mediaGeral =
    depoimentos.reduce((sum, d) => sum + d.nota, 0) / totalAvaliacoes;
const cinco = depoimentos.filter((d) => d.nota === 5).length;
const quatro = depoimentos.filter((d) => d.nota === 4).length;
const tres = depoimentos.filter((d) => d.nota === 3).length;

export default function FeedbackPage() {
    const [nome, setNome] = useState("");
    const [cidade, setCidade] = useState("");
    const [experiencia, setExperiencia] = useState("");
    const [nota, setNota] = useState(0);
    const [mensagem, setMensagem] = useState("");
    const [enviado, setEnviado] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!nota || !nome || !mensagem || !experiencia) return;

        const texto =
            `Olá! Gostaria de deixar meu feedback:\n\n` +
            `*Nome:* ${nome}\n` +
            `*Cidade:* ${cidade || "Não informada"}\n` +
            `*Experiência:* ${experiencia}\n` +
            `*Avaliação:* ${"⭐".repeat(nota)} (${nota}/5)\n\n` +
            `*Comentário:*\n${mensagem}`;

        const url = `https://wa.me/5584994511101?text=${encodeURIComponent(texto)}`;
        window.open(url, "_blank", "noopener,noreferrer");
        setEnviado(true);
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <main>
                {/* Hero section */}
                <section className="bg-white border-b border-slate-200/80">
                    <div className="max-w-7xl mx-auto px-6 pt-28 pb-14">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition mb-6"
                        >
                            <ChevronLeft className="size-4" />
                            Voltar ao início
                        </Link>

                        <Badge>Avaliações</Badge>
                        <div className="mt-3 max-w-2xl">
                            <Title>O que nossos clientes dizem</Title>
                            <div className="mt-3">
                                <SubText>
                                    Cada experiência é única. Veja os depoimentos de quem viveu
                                    momentos inesquecíveis em Baía Formosa e compartilhe a sua
                                    história.
                                </SubText>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="mt-10 flex flex-wrap items-center gap-8">
                            <div className="flex items-end gap-3">
                                <span className="text-6xl font-bold text-slate-900 leading-none">
                                    {mediaGeral.toFixed(1)}
                                </span>
                                <div className="pb-1">
                                    <StarRating value={Math.round(mediaGeral)} readonly size="sm" />
                                    <p className="mt-1 text-xs text-slate-500">
                                        {totalAvaliacoes} avaliações
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5 min-w-40">
                                {[
                                    { stars: 5, count: cinco },
                                    { stars: 4, count: quatro },
                                    { stars: 3, count: tres },
                                ].map(({ stars, count }) => (
                                    <div key={stars} className="flex items-center gap-2">
                                        <span className="text-xs text-slate-500 w-3">{stars}</span>
                                        <Star className="size-3 fill-amber-400 text-amber-400 shrink-0" />
                                        <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                                            <div
                                                className="h-full rounded-full bg-amber-400"
                                                style={{
                                                    width: `${(count / totalAvaliacoes) * 100}%`,
                                                }}
                                            />
                                        </div>
                                        <span className="text-xs text-slate-400 w-3">{count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
                        {/* Reviews grid */}
                        <div>
                            <h2 className="text-lg font-semibold text-slate-900 mb-6">
                                Depoimentos recentes
                            </h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {depoimentos.map((review) => (
                                    <ReviewCard key={review.id} review={review} />
                                ))}
                            </div>
                        </div>

                        {/* Feedback form */}
                        <aside className="lg:sticky lg:top-24 h-fit">
                            <div className="rounded-2xl border border-slate-200/80 bg-white p-6">
                                <div className="flex items-center gap-2 mb-1">
                                    <MessageSquare className="size-5 text-primary" />
                                    <h2 className="text-base font-semibold text-slate-900">
                                        Deixe seu depoimento
                                    </h2>
                                </div>
                                <p className="text-xs text-slate-500 mb-6">
                                    Sua opinião nos ajuda a melhorar e inspira outros viajantes.
                                </p>

                                {enviado ? (
                                    <div className="flex flex-col items-center gap-3 py-8 text-center">
                                        <div className="size-12 rounded-full bg-green-100 flex items-center justify-center">
                                            <Send className="size-5 text-green-600" />
                                        </div>
                                        <p className="text-sm font-semibold text-slate-800">
                                            Obrigado pelo seu depoimento!
                                        </p>
                                        <p className="text-xs text-slate-500">
                                            Você foi redirecionado para o WhatsApp para confirmar.
                                        </p>
                                        <button
                                            onClick={() => {
                                                setEnviado(false);
                                                setNome("");
                                                setCidade("");
                                                setExperiencia("");
                                                setNota(0);
                                                setMensagem("");
                                            }}
                                            className="mt-2 text-xs text-primary underline underline-offset-2"
                                        >
                                            Enviar outro depoimento
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                        <div>
                                            <label className="block text-xs font-medium text-slate-700 mb-1.5">
                                                Nome <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                value={nome}
                                                onChange={(e) => setNome(e.target.value)}
                                                placeholder="Seu nome"
                                                required
                                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-medium text-slate-700 mb-1.5">
                                                Cidade / Estado
                                            </label>
                                            <input
                                                type="text"
                                                value={cidade}
                                                onChange={(e) => setCidade(e.target.value)}
                                                placeholder="Ex: São Paulo, SP"
                                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-medium text-slate-700 mb-1.5">
                                                Experiência <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                value={experiencia}
                                                onChange={(e) => setExperiencia(e.target.value)}
                                                required
                                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled>
                                                    Selecione uma experiência
                                                </option>
                                                {experiencias.map((exp) => (
                                                    <option key={exp} value={exp}>
                                                        {exp}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-medium text-slate-700 mb-2">
                                                Sua avaliação <span className="text-red-500">*</span>
                                            </label>
                                            <StarRating value={nota} onChange={setNota} />
                                            {nota > 0 && (
                                                <p className="mt-1 text-xs text-slate-400">
                                                    {
                                                        [
                                                            "",
                                                            "Ruim",
                                                            "Regular",
                                                            "Bom",
                                                            "Muito bom",
                                                            "Excelente!",
                                                        ][nota]
                                                    }
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-xs font-medium text-slate-700 mb-1.5">
                                                Comentário <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                value={mensagem}
                                                onChange={(e) => setMensagem(e.target.value)}
                                                placeholder="Conte como foi sua experiência..."
                                                required
                                                rows={4}
                                                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full gap-2"
                                            disabled={!nota || !nome || !mensagem || !experiencia}
                                        >
                                            <Send className="size-4" />
                                            Enviar pelo WhatsApp
                                        </Button>

                                        <p className="text-center text-xs text-slate-400">
                                            Você será redirecionado ao WhatsApp para confirmar o envio.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </aside>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
