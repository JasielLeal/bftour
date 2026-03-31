import Image from "next/image";
import { Badge } from "./ui/badge";
import { SubText } from "./ui/sub-text";
import { Title } from "./ui/title";

const galleryItems = [
	{ id: 1,  src: "/quadriciculo/01.webp",                            alt: "Passeio de Quadriciclo",  size: "large" },
	{ id: 2,  src: "/buggy/01.webp",                                   alt: "Passeio de Buggy",        size: "large" },
	{ id: 3,  src: "/canoa/01.webp",                                   alt: "Passeio de Canoa",        size: "large" },
	{ id: 4,  src: "/barco/01.webp",                                   alt: "Passeio de Barco",        size: "large" },
	{ id: 5,  src: "/surf/01.webp",                                    alt: "Aulas de Surf",           size: "large" },
	{ id: 6,  src: "/trilha-na-mata/01.webp",                          alt: "Trilha na Mata",          size: "large" },
	{ id: 7,  src: "/experiencia-gastronomica/bf-music/01.webp",       alt: "BF Music",                size: "large" },
	{ id: 8,  src: "/experiencia-gastronomica/pizzaria-cunhau/01.webp",alt: "Pizzaria Cunhaú",         size: "large" },
	{ id: 9,  src: "/experiencia-gastronomica/willian-sushi/01.webp",  alt: "Willian Sushi",           size: "large" },
	{ id: 10, src: "/pousadas/bellaflor/01.webp",                      alt: "Pousada Bella Flor",      size: "large" },
	{ id: 11, src: "/pousadas/villamar/01.webp",                       alt: "Pousada Villa Mar",       size: "large" },
];

const sizeClasses: Record<string, string> = {
	large: "w-[380px] h-[260px]",
};

export function Galery() {
	return (
		<section className="bg-gray-50" id="galeria">
			<div className="max-w-7xl mx-auto px-6 py-20">
				<div className="flex flex-col gap-4 items-center text-center">
					<Badge>Galeria</Badge>
					<Title>Momentos que inspiram</Title>
					<div className="max-w-2xl">
						<SubText>
							Uma galeria em movimento contínuo, com imagens em tamanhos variados para um visual abstrato e
							envolvente.
						</SubText>
					</div>
				</div>
			</div>

			<div className="gallery-fade overflow-hidden">
				<div className="marquee py-6">
					<div className="marquee-track">
						<div className="marquee-set">
							{galleryItems.map((item) => (
								<figure
									key={item.id}
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

