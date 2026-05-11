import Image from "next/image";
import { Badge } from "./ui/badge";
import { SubText } from "./ui/sub-text";
import { Title } from "./ui/title";
import { Reveal } from "./reveal";

const galleryItems = [
	{ id: 1, src: "/quadriciculo/01.webp", alt: "Passeio de Quadriciclo", size: "large" },
	{ id: 2, src: "/buggy/02.webp", alt: "Passeio de Buggy", size: "large" },
	{ id: 3, src: "/canoa/03.webp", alt: "Passeio de Canoa", size: "large" },
	{ id: 4, src: "/barco/04.webp", alt: "Passeio de Barco", size: "large" },
	{ id: 5, src: "/surf/01.webp", alt: "Aulas de Surf", size: "large" },
	{ id: 6, src: "/quadriciculo/06.webp", alt: "Aventura de Quadriciclo", size: "large" },
	{ id: 7, src: "/buggy/08.webp", alt: "Aventura de Buggy", size: "large" },
	{ id: 8, src: "/canoa/11.webp", alt: "Canoa no mangue", size: "large" },
	{ id: 9, src: "/barco/09.webp", alt: "Passeio de Barco pelo litoral", size: "large" },
	{ id: 10, src: "/surf/06.webp", alt: "Surf no mar", size: "large" },
];

const sizeClasses: Record<string, string> = {
	large: "w-[380px] h-[260px]",
};

export function Galery() {
	return (
		<section className="bg-slate-50" id="galeria">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
				<Reveal className="flex flex-col gap-3 items-center text-center">
					<p className="text-primary text-sm font-semibold tracking-widest uppercase">Galeria</p>
					<h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Momentos que inspiram</h2>
					<p className="text-slate-500 text-sm max-w-md">
						Uma seleção de momentos reais vividos pelos nossos clientes em Baía Formosa.
					</p>
				</Reveal>
			</div>

			<div className="gallery-fade overflow-hidden">
				<div className="marquee py-6">
					<div className="marquee-track">
						<div className="marquee-set">
							{galleryItems.map((item) => (
								<figure
									key={item.id}
									className={`relative shrink-0 overflow-hidden rounded-3xl shadow-md transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.02] ${sizeClasses[item.size]}`}
								>
									<Image
										src={item.src}
										alt={item.alt}
										width={380}
										height={260}
										className="h-full w-full object-cover"
										loading="lazy"
										quality={75}
									/>
								</figure>
							))}
						</div>
						{/* Duplicate for seamless loop */}
						<div className="marquee-set" aria-hidden="true">
							{galleryItems.map((item) => (
								<figure
									key={`dup-${item.id}`}
									className={`relative shrink-0 overflow-hidden rounded-3xl shadow-md ${sizeClasses[item.size]}`}
								>
									<Image
										src={item.src}
										alt={item.alt}
										width={380}
										height={260}
										className="h-full w-full object-cover"
										loading="lazy"
										quality={75}
									/>
								</figure>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

