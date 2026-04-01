"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
	variant?: "up" | "left" | "right" | "zoom";
	once?: boolean;
	threshold?: number;
	style?: CSSProperties;
};

export function Reveal({
	children,
	className,
	delay = 0,
	variant = "up",
	once = true,
	threshold = 0.18,
	style,
}: RevealProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	const [isVisible, setIsVisible] = useState(() => {
		if (typeof window === "undefined") return false;
		return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	});

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					if (once) {
						observer.unobserve(element);
					}
				} else if (!once) {
					setIsVisible(false);
				}
			},
			{
				threshold,
				rootMargin: "0px 0px -10% 0px",
			},
		);

		observer.observe(element);

		return () => observer.disconnect();
	}, [once, threshold]);

	return (
		<div
			ref={ref}
			style={{
				...style,
				["--animation-delay" as string]: `${delay}ms`,
			}}
			className={cn(
				"animate-in-view",
				`animate-in-view--${variant}`,
				isVisible && "is-visible",
				className,
			)}
		>
			{children}
		</div>
	);
}