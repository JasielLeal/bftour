"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCart } from "@/components/cart/cart-context";

const whatsappBaseUrl = "https://wa.me/5584994538722";

const steps = [
  { id: 1, label: "Carrinho", active: false },
  { id: 2, label: "Finalizar no WhatsApp", active: true },
];

export default function Finish() {
  const { items, buildWhatsappMessage } = useCart();
  const total = items.reduce((sum, item) => sum + item.preco, 0);
  const whatsappUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(buildWhatsappMessage())}`;

  return (
    <section className="bg-gray-50 min-h-screen" id="finalizar">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between pt-20">
          <div>
            <h1 className="text-2xl font-semibold text-black">Finalização</h1>
            <Link
              href="/cart"
              className="text-sm text-black/60 hover:underline"
            >
              &larr; Voltar ao carrinho
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8">
            <h2 className="text-lg font-semibold text-black">
              Confirmação no WhatsApp
            </h2>
            <p className="mt-3 text-sm text-black/70">
              Você será redirecionado para o WhatsApp para confirmar data e
              disponibilidade.
            </p>
            <Button asChild className="mt-6">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Abrir WhatsApp
              </a>
            </Button>
          </div>

          <aside className="rounded-3xl border border-slate-200/80 bg-white p-6 h-fit">
            <h3 className="text-sm font-semibold text-black">
              Resumo do pedido
            </h3>
            <div className="mt-4 space-y-2 text-xs text-black/60">
              <div className="flex items-center justify-between">
                <span>Sub Total</span>
                <span className="text-black">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(total)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Desconto</span>
                <span className="text-black">R$ 0,00</span>
              </div>
              <div className="flex items-center justify-between border-t border-slate-200/80 pt-3 text-sm font-semibold text-black">
                <span>Total</span>
                <span>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(total)}
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
