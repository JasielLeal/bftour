"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./reveal";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const activities = [
	{
		id: 2,
		tag: "Aventura",
		kicker: "Surf Experience BF",
		title: "Aula de Surf",
		slug: "aula-de-surf",
		image: "/surf/01.webp",
		alt: "Aula de Surf em Baía Formosa",
		category: "Aventura",
	},
	{
		id: 3,
		tag: "Natureza",
		kicker: "Para os Aventureiros",
		title: "Trilha na Mata",
		slug: "trilha-na-mata",
		image: "/trilha-na-mata/01.webp",
		alt: "Trilha na Mata de Baía Formosa",
		category: "Natureza",
	},
	{
		id: 4,
		tag: "Gastronomia",
		kicker: "Culinária Regional",
		title: "Daboa Beach",
		slug: "daboa-beach",
		image: "/experiencia-gastronomica/dboa/01.jpeg",
		alt: "Daboa Beach",
		category: "Gastronomia",
	},
	{
		id: 5,
		tag: "Gastronomia",
		kicker: "Bar e Restaurante",
		title: "BF Music",
		slug: "bf-music",
		image: "/experiencia-gastronomica/bf-music/01.webp",
		alt: "BF Music – Baía Formosa",
		category: "Gastronomia",
	},
	{
		id: 6,
		tag: "Gastronomia",
		kicker: "Culinária Japonesa",
		title: "Willian Sushi",
		slug: "willian-sushi",
		image: "/experiencia-gastronomica/willian-sushi/01.png",
		alt: "Willian Sushi",
		category: "Gastronomia",
	},
	{
		id: 7,
		tag: "Gastronomia",
		kicker: "Pizzaria & Hamburgueria",
		title: "Pizzaria Cunhaú",
		slug: "pizzaria-cunhau",
		image: "/experiencia-gastronomica/pizzaria-cunhau/01.webp",
		alt: "Pizzaria Cunhaú",
		category: "Gastronomia",
	},
	
];

const tabs = ["Todos", "Aventura", "Natureza", "Gastronomia"];

export function Activities() {
	const [active, setActive] = useState("Todos");

	const filtered = active === "Todos"
		? activities
		: activities.filter((a) => a.category === active);

	return (
		<section className="bg-slate-50" id="atividades">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">

				{/* Header */}
				<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
					<div>
						<Reveal>
							<p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Experiências</p>
						</Reveal>
						<Reveal delay={80}>
							<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
								Aventuras em<br />
								<span className="text-gradient">Baía Formosa</span>
							</h2>
						</Reveal>
					</div>

					{/* Filter tabs */}
					<Reveal delay={160} variant="right">
						<div className="flex items-center gap-2 flex-wrap">
							{tabs.map((tab) => (
								<button
									key={tab}
									type="button"
									onClick={() => setActive(tab)}
									className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
										active === tab
											? "bg-slate-900 text-white shadow-sm"
											: "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
									}`}
								>
									{tab}
								</button>
							))}
						</div>
					</Reveal>
				</div>

				{/* Cards grid */}
				<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{filtered.map((activity, i) => (
						<Reveal key={activity.id} delay={i * 80} className="h-full">
							<Link
								href={`/experiencia/${activity.slug}`}
								className="group relative block h-72 overflow-hidden rounded-3xl shadow-sm hover:shadow-xl hover:shadow-slate-900/15 transition-all duration-500"
							>
								<Image
									src={activity.image}
									alt={activity.alt}
									fill
									className="object-cover transition-transform duration-700 group-hover:scale-110"
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
									priority={activity.id === 1}
								/>
								<div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

								{/* Tag pill */}
								<div className="absolute top-4 left-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white">
									{activity.tag}
								</div>

								{/* Arrow CTA */}
								<div className="absolute top-4 right-4 size-9 rounded-full bg-white flex items-center justify-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
									<ArrowUpRight className="size-4 text-slate-900" />
								</div>

								{/* Bottom content */}
								<div className="absolute bottom-0 left-0 right-0 p-5">
									<p className="text-white/60 text-xs uppercase tracking-wider mb-1">
										{activity.kicker}
									</p>
									<h3 className="text-white text-xl font-bold">
										{activity.title}
									</h3>
								</div>
							</Link>
						</Reveal>
					))}
				</div>

			</div>
		</section>
	);
}

