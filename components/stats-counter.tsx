"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./reveal";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const duration = 1800;
                    const steps = 60;
                    const increment = to / steps;
                    let current = 0;
                    const interval = setInterval(() => {
                        current = Math.min(current + increment, to);
                        setCount(Math.round(current));
                        if (current >= to) clearInterval(interval);
                    }, duration / steps);
                }
            },
            { threshold: 0.3 }
        );
        const el = ref.current;
        if (el) observer.observe(el);
        return () => observer.disconnect();
    }, [to]);

    return (
        <div ref={ref}>
            {count.toLocaleString("pt-BR")}
            {suffix}
        </div>
    );
}

const stats = [
    { value: 8, suffix: "+", label: "Experiências únicas" },
    { value: 5, suffix: "★", label: "Avaliação Google" },
    { value: 95, suffix: "km", label: "de Natal, RN" },
    { value: 100, suffix: "%", label: "Clientes satisfeitos" },
];

export function StatsCounter() {
    return (
        <section className="relative bg-slate-950 py-24 sm:py-32 overflow-hidden">
            {/* Decorative gradient blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
                <Reveal>
                    <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
                        Números que falam por nós
                    </p>
                </Reveal>
                <Reveal delay={80}>
                    <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 max-w-2xl mx-auto">
                        Como as pessoas se apaixonam por Baía Formosa
                    </h2>
                </Reveal>
                <Reveal delay={150}>
                    <p className="text-white/50 text-base sm:text-lg max-w-lg mx-auto mb-16">
                        Cada número representa uma história de aventura e um cliente que voltou para recomendar.
                    </p>
                </Reveal>

                {/* Big counter */}
                <Reveal delay={220}>
                    <div className="text-[5rem] sm:text-[8rem] lg:text-[10rem] font-black text-white leading-none tracking-tighter mb-2">
                        <CountUp to={2000} suffix="+" />
                    </div>
                    <p className="text-white/50 text-lg font-medium mb-20">
                        Clientes que viveram a experiência
                    </p>
                </Reveal>

                {/* Smaller stats grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                    {stats.map((s, i) => (
                        <Reveal key={i} delay={i * 90 + 300}>
                            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center hover:border-primary/40 transition-colors duration-300">
                                <p className="text-2xl sm:text-3xl font-bold text-white">
                                    <CountUp to={s.value} suffix={s.suffix} />
                                </p>
                                <p className="text-white/45 text-xs sm:text-sm mt-2">{s.label}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
