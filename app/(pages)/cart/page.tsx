"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useCart } from "@/components/cart/cart-context";
import { experiencias } from "@/data/experiencias";

const steps = [
    { id: 1, label: "Carrinho", active: true },
    { id: 2, label: "Finalizar no WhatsApp", active: false },
];

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

    return (
        <section className="bg-gray-200 min-h-screen" id="carrinho">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex items-center justify-between pt-20">
                    <h1 className="text-2xl font-semibold text-black">Carrinho</h1>
                </div>

                <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
                    <div className="space-y-6">
                        {groupedItems.length === 0 && (
                            <div className="rounded-3xl border border-slate-200/80 bg-white p-8 text-sm text-black/70">
                                Seu carrinho está vazio.
                            </div>
                        )}

                        {groupedItems.map(({ item, qty }) => {
                            const exp = experienceMap.get(item.id);
                            const image = exp?.imagens?.[0] ?? "/quadriciculo.jpeg";
                            const subtitle = exp ? `${exp.tipo} · ${exp.duracao}` : item.tipo;
                            const por = exp ? exp.valorPor : "pessoa";

                            return (
                                <article key={item.id} className="rounded-3xl border border-slate-200/80 bg-white p-5">
                                    <div className="flex gap-4">
                                        <div className="relative h-24 w-20 overflow-hidden rounded-2xl bg-slate-100">
                                            <Image
                                                src={image}
                                                alt={item.titulo}
                                                fill
                                                className="object-cover"
                                                sizes="80px"
                                            />
                                        </div>
                                        <div className="flex flex-1 items-start justify-between">
                                            <div>
                                                <h3 className="text-base font-semibold text-black">
                                                    {item.titulo}
                                                </h3>
                                                <p className="text-xs text-black/60 capitalize">{subtitle}</p>
                                                <div className="mt-2 text-[11px] text-black/60">
                                                    Quantidade: <span className="text-black/70">{qty}</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-semibold text-black">
                                                    {formatCurrency(item.preco * qty)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex items-center justify-between">
                                        <div className="text-xs text-black/60">
                                            {formatCurrency(item.preco)} por {exp?.valorPor}
                                        </div>
                                        <button
                                            className="inline-flex items-center gap-2 text-xs text-black/60 hover:text-black"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            <Trash2 size={14} /> Remover
                                        </button>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    <aside className="rounded-3xl border border-slate-200/80 bg-white p-6 h-fit">
                        <h3 className="text-sm font-semibold text-black">Resumo do pedido</h3>
                        <div className="mt-4 space-y-2 text-xs text-black/60">
                            <div className="flex items-center justify-between">
                                <span>Sub Total</span>
                                <span className="text-black">{formatCurrency(subtotal)}</span>
                            </div>
                            <div className="flex items-center justify-between border-t border-slate-200/80 pt-3 text-sm font-semibold text-black">
                                <span>Total</span>
                                <span>{formatCurrency(subtotal)}</span>
                            </div>
                        </div>
                        <Button asChild className="mt-6 w-full" disabled={groupedItems.length === 0}>
                            <Link href="/finish">Prosseguir</Link>
                        </Button>
                    </aside>
                </div>
            </div>
        </section>
    );
}
