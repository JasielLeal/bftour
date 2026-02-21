"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ExperienceGalleryProps = {
    imagens: string[];
    titulo: string;
};

export function ExperienceGallery({ imagens, titulo }: ExperienceGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const total = imagens.length;

    const goTo = (index: number) => {
        const normalized = (index + total) % total;
        setCurrentIndex(normalized);
    };

    useEffect(() => {
        if (total <= 1) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % total);
        }, 5000);
        return () => clearInterval(timer);
    }, [total]);

    if (total === 0) {
        return null;
    }

    return (
        <div className="relative overflow-hidden rounded-3xl bg-white sm:border sm:border-slate-200/80">
            <div className="relative h-[360px] sm:h-[420px] bg-slate-100">
                <Image
                    key={`bg-${imagens[currentIndex]}`}
                    src={imagens[currentIndex]}
                    alt=""
                    fill
                    className="hidden sm:block object-cover scale-110 blur-2xl opacity-60"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    aria-hidden="true"
                />
                <Image
                    key={imagens[currentIndex]}
                    src={imagens[currentIndex]}
                    alt={`${titulo} ${currentIndex + 1}`}
                    fill
                    className="object-cover sm:object-contain"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            <button
                type="button"
                aria-label="Imagem anterior"
                onClick={() => goTo(currentIndex - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-black/30 shadow-md border border-slate-200 hover:scale-105 transition"
            >
                ←
            </button>
            <button
                type="button"
                aria-label="Próxima imagem"
                onClick={() => goTo(currentIndex + 1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-black/30 shadow-md border border-slate-200 hover:scale-105 transition"
            >
                →
            </button>

            <div className="flex items-center justify-between gap-4 px-6 py-4 bg-white">
                <div className="flex gap-2">
                    {imagens.map((_, index) => (
                        <button
                            key={`dot-${index}`}
                            type="button"
                            aria-label={`Ir para imagem ${index + 1}`}
                            onClick={() => goTo(index)}
                            className={`h-2.5 rounded-full transition-all ${
                                index === currentIndex
                                    ? "w-6 bg-primary"
                                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                            }`}
                        />
                    ))}
                </div>
                <span className="text-xs text-black/60">
                    {currentIndex + 1}/{total}
                </span>
            </div>
        </div>
    );
}
