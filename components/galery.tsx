import Image from "next/image";
import { Badge } from "./ui/badge";
import { SubText } from "./ui/sub-text";
import { Title } from "./ui/title";

const galleryItems = [
	{
		id: 1,
		src: "/quadriciculo.jpeg",
		alt: "Passeio em Baía Formosa",
		size: "large",
	},
	{
		id: 2,
		src: "/quadriciculo.jpeg",
		alt: "Paisagens naturais",
		size: "small",
	},
	{
		id: 3,
		src: "/quadriciculo.jpeg",
		alt: "Praias e mar",
		size: "medium",
	},
	{
		id: 4,
		src: "/quadriciculo.jpeg",
		alt: "Experiências ao ar livre",
		size: "large",
	},
	{
		id: 5,
		src: "/quadriciculo.jpeg",
		alt: "Aventura e turismo",
		size: "small",
	},
	{
		id: 6,
		src: "/quadriciculo.jpeg",
		alt: "Cenários incríveis",
		size: "medium",
	},
];

const sizeClasses: Record<string, string> = {
	large: "w-[420px] h-[280px]",
	medium: "w-[320px] h-[220px]",
	small: "w-[240px] h-[180px]",
};

export function Galery() {
	const rowOne = [...galleryItems];
	const rowTwo = [...galleryItems.slice(2), ...galleryItems.slice(0, 2)];

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

			<div className="overflow-hidden">
				<div className="marquee py-6">
					<div className="marquee-track">
						<div className="marquee-set">
							{rowOne.map((item, index) => (
								<figure
									key={`${item.id}-row1-${index}`}
									className={`relative shrink-0 overflow-hidden rounded-3xl shadow-md ${sizeClasses[item.size]}`}
								>
									<Image
										src={item.src}
										alt={item.alt}
										width={420}
										height={280}
										className="h-full w-full object-cover"
										loading="lazy"
										quality={75}
									/>
								</figure>
							))}
						</div>
						<div className="marquee-set" aria-hidden="true">
							{rowOne.map((item, index) => (
								<figure
									key={`${item.id}-row1-dup-${index}`}
									className={`relative shrink-0 overflow-hidden rounded-3xl shadow-md ${sizeClasses[item.size]}`}
								>
									<Image
										src={item.src}
										alt={item.alt}
										width={420}
										height={280}
										className="h-full w-full object-cover"
										loading="lazy"
										quality={75}
									/>
								</figure>
							))}
						</div>
					</div>
				</div>

				<div className="marquee py-6">
					<div className="marquee-track marquee-reverse">
						<div className="marquee-set">
							{rowTwo.map((item, index) => (
								<figure
									key={`${item.id}-row2-${index}`}
									className={`relative shrink-0 overflow-hidden rounded-3xl shadow-md ${sizeClasses[item.size]}`}
								>
									<Image
										src={item.src}
										alt={item.alt}
										width={420}
										height={280}
										className="h-full w-full object-cover"
										loading="lazy"
										quality={75}
									/>
								</figure>
							))}
						</div>
						<div className="marquee-set" aria-hidden="true">
							{rowTwo.map((item, index) => (
								<figure
									key={`${item.id}-row2-dup-${index}`}
									className={`relative shrink-0 overflow-hidden rounded-3xl shadow-md ${sizeClasses[item.size]}`}
								>
									<Image
										src={item.src}
										alt={item.alt}
										width={420}
										height={280}
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
