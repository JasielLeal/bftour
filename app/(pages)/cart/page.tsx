"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { Trash2, ShoppingBag, ArrowLeft, Clock, MapPin, ArrowUpRight, Shield, Zap } from "lucide-react";
import { useCart } from "@/components/cart/cart-context";
import { experiencias } from "@/data/experiencias";
import { Reveal } from "@/components/reveal";

const experienceMap = new Map(experiencias.map((exp) => [exp.slug, exp]));

function formatCurrency(value: number) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value);
}

export default function Cart() {
    const { items, removeItem } = useCart();

    const groupedItems = useMemo(() => {
        const map = new Map<string, { item: (typeof items)[number]; qty: number }>();
        items.forEach((item) => {
            const existing = map.get(item.id);
            if (existing) {
                existing.qty += 1;
            } else {
                map.set(item.id, { item, qty: 1 });
            }
        });
        return Array.from(map.values());
    }, [items]);

    const subtotal = groupedItems.reduce(
        (total, entry) => total + entry.item.preco * entry.qty,
        0
    );

    const isEmpty = groupedItems.length === 0;

    return (
        <div className="relative min-h-screen bg-slate-950 overflow-hidden">
            {/* Ambient blobs */}
            <div className="pointer-events-none absolute -top-32 -left-32 w-125 h-125 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute top-1/2 -right-32 w-100 h-100 rounded-full bg-orange-400/8 blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-24">

                {/* Header */}
                <Reveal className="flex items-center gap-4 mb-3">
                    <Link
                        href="/#favorites"
                        className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/80 transition-colors"
                    >
                        <ArrowLeft className="size-4" />
                        Continuar comprando
                    </Link>
                </Reveal>
                <Reveal delay={60} className="mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold text-white">
                        Meu <span className="text-gradient">Carrinho</span>
                    </h1>
                    <p className="text-white/40 text-sm mt-1">
                        {isEmpty ? "Nenhum item adicionado ainda." : `${items.length} item${items.length > 1 ? "s" : ""} selecionado${items.length > 1 ? "s" : ""}`}
                    </p>
                </Reveal>

                {isEmpty ? (
                    /* ── Empty state ── */
                    <Reveal className="flex flex-col items-center justify-center gap-6 rounded-3xl border border-white/10 bg-white/5 py-20 px-6 text-center">
                        <span className="flex size-20 items-center justify-center rounded-full bg-white/8 border border-white/10">
                            <ShoppingBag className="size-9 text-white/30" />
                        </span>
                        <div>
                            <p className="text-lg font-semibold text-white">Seu carrinho está vazio</p>
                            <p className="text-white/40 text-sm mt-1 max-w-xs mx-auto">
                                Explore nossas experiências e adicione a que mais combina com você.
                            </p>
                        </div>
                        <Link
                            href="/#favorites"
                            className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-orange-500 transition-colors"
                        >
                            Ver Experiências <ArrowUpRight className="size-4" />
                        </Link>
                    </Reveal>
                ) : (
                    <div className="grid gap-6 lg:grid-cols-[1fr_380px] lg:items-start">

                        {/* ── Items list ── */}
                        <div className="space-y-4">
                            {groupedItems.map(({ item, qty }, index) => {
                                const exp = experienceMap.get(item.id);
                                const image = exp?.imagens?.[0] ?? "/quadriciculo.jpeg";

                                return (
                                    <Reveal key={item.id} delay={index * 60}>
                                        <article className="group flex gap-4 sm:gap-5 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 transition-colors hover:border-white/20">
                                            {/* Image */}
                                            <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-xl bg-white/10">
                                                <Image
                                                    src={image}
                                                    alt={item.titulo}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    sizes="112px"
                                                />
                                            </div>

                                            {/* Details */}
                                            <div className="flex flex-1 min-w-0 flex-col justify-between">
                                                <div className="flex items-start justify-between gap-2">
                                                    <div className="min-w-0">
                                                        <p className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-0.5">
                                                            {exp?.tipo ?? item.tipo}
                                                        </p>
                                                        <h3 className="text-sm sm:text-base font-bold text-white leading-snug truncate">
                                                            {item.titulo}
                                                        </h3>
                                                        <div className="flex items-center gap-3 mt-1.5 text-xs text-white/40">
                                                            {exp?.duracao && (
                                                                <span className="flex items-center gap-1">
                                                                    <Clock className="size-3" />
                                                                    {exp.duracao}
                                                                </span>
                                                            )}
                                                            {exp?.localizacao && (
                                                                <span className="flex items-center gap-1">
                                                                    <MapPin className="size-3" />
                                                                    Baía Formosa
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="shrink-0 text-right">
                                                        <p className="text-base sm:text-lg font-bold text-white">
                                                            {formatCurrency(item.preco * qty)}
                                                        </p>
                                                        {qty > 1 && (
                                                            <p className="text-xs text-white/40">
                                                                {qty}× {formatCurrency(item.preco)}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                                                    <p className="text-xs text-white/35">
                                                        {formatCurrency(item.preco)}{exp?.valorPor ? ` por ${exp.valorPor}` : ""}
                                                    </p>
                                                    <button
                                                        className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-white/35 hover:bg-red-500/15 hover:text-red-400 transition-colors"
                                                        onClick={() => removeItem(item.id)}
                                                    >
                                                        <Trash2 className="size-3.5" />
                                                        Remover
                                                    </button>
                                                </div>
                                            </div>
                                        </article>
                                    </Reveal>
                                );
                            })}
                        </div>

                        {/* ── Order summary ── */}
                        <Reveal delay={160} className="lg:sticky lg:top-28">
                            <aside className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                <h2 className="text-base font-bold text-white mb-5">Resumo do pedido</h2>

                                <div className="space-y-3 text-sm">
                                    {groupedItems.map(({ item, qty }) => (
                                        <div key={item.id} className="flex items-center justify-between text-white/50">
                                            <span className="truncate mr-2 max-w-45">{item.titulo}{qty > 1 ? ` ×${qty}` : ""}</span>
                                            <span className="shrink-0 font-medium text-white/80">{formatCurrency(item.preco * qty)}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                                    <span className="text-white/50 text-sm">Subtotal</span>
                                    <span className="font-medium text-white/80 text-sm">{formatCurrency(subtotal)}</span>
                                </div>
                                <div className="mt-2 pb-5 border-b border-white/10 flex items-center justify-between">
                                    <span className="text-white/50 text-sm">Taxa de serviço</span>
                                    <span className="text-emerald-400 text-sm font-medium">Grátis</span>
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="font-bold text-white">Total</span>
                                    <span className="font-bold text-xl text-white">{formatCurrency(subtotal)}</span>
                                </div>

                                <Link
                                    href="/finish"
                                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-white hover:bg-orange-500 transition-colors duration-300"
                                >
                                    Prosseguir para o pagamento
                                    <ArrowUpRight className="size-4" />
                                </Link>

                                {/* Trust badges */}
                                <div className="mt-5 flex items-center justify-center gap-4 text-[11px] text-white/30">
                                    <span className="flex items-center gap-1">
                                        <Shield className="size-3.5 text-emerald-400" />
                                        Pagamento seguro
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Zap className="size-3.5 text-primary" />
                                        Confirmação rápida
                                    </span>
                                </div>
                            </aside>
                        </Reveal>

                    </div>
                )}
            </div>
        </div>
    );
}
