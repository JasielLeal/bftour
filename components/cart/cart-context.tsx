"use client";

import { createContext, useContext, useMemo, useReducer } from "react";

export type CartItem = {
    id: string;
    titulo: string;
    preco: number;
    tipo: string;
};

type CartState = {
    items: CartItem[];
};

type CartAction =
    | { type: "ADD_ITEM"; payload: CartItem }
    | { type: "REMOVE_ITEM"; payload: { id: string } }
    | { type: "CLEAR" };

type CartContextValue = {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    clear: () => void;
    buildWhatsappMessage: () => string;
};

const CartContext = createContext<CartContextValue | null>(null);

const initialState: CartState = {
    items: [],
};

function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case "REMOVE_ITEM":
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload.id),
            };
        case "CLEAR":
            return initialState;
        default:
            return state;
    }
}

function formatCurrency(value: number) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const value = useMemo<CartContextValue>(() => {
        const addItem = (item: CartItem) => dispatch({ type: "ADD_ITEM", payload: item });
        const removeItem = (id: string) => dispatch({ type: "REMOVE_ITEM", payload: { id } });
        const clear = () => dispatch({ type: "CLEAR" });
        const buildWhatsappMessage = () => {
            if (state.items.length === 0) {
                return "Olá! Gostaria de informações sobre experiências em Baía Formosa.";
            }
            const lines = state.items.map(
                (item) => `- ${item.titulo} (${item.tipo}) — ${formatCurrency(item.preco)}`
            );
            return [
                "Olá! Gostaria de confirmar disponibilidade para:",
                ...lines,
            ].join("\n");
        };

        return {
            items: state.items,
            addItem,
            removeItem,
            clear,
            buildWhatsappMessage,
        };
    }, [state.items]);

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within CartProvider");
    }
    return context;
}
