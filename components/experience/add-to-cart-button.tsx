"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useCart } from "@/components/cart/cart-context";

type AddToCartButtonProps = {
    id: string;
    titulo: string;
    preco: number;
    tipo: string;
};

export function AddToCartButton({ id, titulo, preco, tipo }: AddToCartButtonProps) {
    const { addItem } = useCart();
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        addItem({ id, titulo, preco, tipo });
        setAdded(true);
        setTimeout(() => setAdded(false), 1800);
    };

    return (
        <div className="space-y-2">
            <Button className="w-full" onClick={handleAdd}>
                {added ? "Adicionado" : "Adicionar ao carrinho"}
            </Button>
            {added && (
                <div className="flex items-center gap-2 text-xs text-green-600">
                    <CheckCircle2 size={14} />
                    <span>Item adicionado ao carrinho</span>
                </div>
            )}
        </div>
    );
}
