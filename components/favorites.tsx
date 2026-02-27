import { Badge } from "./ui/badge";
import { SubText } from "./ui/sub-text";
import { Title } from "./ui/title";
import Image from "next/image";
import test from "../public/test.png"
import quadricicloImg from "../public/quadriciculo/01.webp";
import buggyImg from "../public/buggy/01.png";
import barcoImg from "../public/barco/01.webp";
import Link from "next/link";

const packages = [
    {
        id: 1,
        days: "Duração: 3h 30m",
        label: "Roteiro Completo",
        title: "Passeio de Quadriciclo",
        rating: "7.0",
        stars: 5,
        departure: "Saindo de Baía Formosa",
        include: "Guia + Fotos",
        savings: "Economize R$280",
        oldPrice: "R$ 659,99",
        price: "R$ 379,99",
        img: quadricicloImg,
        href: "/experiencia/quadriciclo-roteiro-completo",
    },
    {
        id: 2,
        days: "Duração: 3h",
        label: "Aventura Off Road",
        title: "Passeio de Buggy",
        rating: "8.4",
        stars: 4,
        departure: "Saindo de Baía Formosa",
        include: "Bugueiro + Fotos",
        savings: "Economize R$300",
        oldPrice: "R$ 749,99",
        price: "R$ 449,99",
        img: buggyImg,
        href: "/experiencia/buggy-roteiro-completo",
    },
    {
        id: 3,
        days: "Duração: 1h",
        label: "Travessia Panorâmica",
        title: "Passeio de Barco",
        rating: "8.0",
        stars: 4,
        departure: "Saída do Porto",
        include: "",
        savings: "Economize R$80",
        oldPrice: "R$ 149,99",
        price: "R$ 69,99",
        img: barcoImg,
        href: "/experiencia/barco-roteiro-completo",
    },
    {
        id: 4,
        days: "Duração: 25 minutos",
        label: "Contato com a Natureza",
        title: "Passeio de Canoa",
        rating: "7.6",
        stars: 3,
        departure: "Passeio Opcional",
        include: "Saída do Rio Guajú + Fotos",
        savings: "Economize R$30",
        oldPrice: "R$ 59,99",
        price: "R$ 29,99",
        img: "/canoa/01.webp",
        href: "/experiencia/canoa-roteiro-completo",
    },
];

export function Favorites() {
    return (
        <div className="bg-white" id="favorites">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <Badge>Favoritos</Badge>
                <div className="my-3">
                    <Title>Principais Atividades em Baía Formosa</Title>
                </div>
                <div className="max-w-2xl">
                    <SubText>
                        As principais escolhas de quem visita Baía Formosa e vive experiências inesquecíveis em um dos destinos mais encantadores do litoral potiguar.
                    </SubText>
                </div>

                <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {packages.map((item) => (
                        <Link 
                            href={item.href || "#"}
                            key={item.id}
                            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                        >
                            <div className="relative h-64 w-full">
                                <Image
                                    src={typeof item.img === "string" ? item.img : item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    priority={item.id === 1}
                                />
                                <span className="absolute left-3 bottom-3 rounded-md bg-slate-900/90 px-3 py-1 text-xs font-semibold tracking-wide text-white">
                                    {item.days}
                                </span>
                            </div>

                            <div className="p-4">
                                <p className="text-xs font-semibold tracking-[0.2em] text-slate-400">
                                    {item.label}
                                </p>
                                <h3 className="mt-1 text-lg font-semibold text-slate-900">
                                    {item.title}
                                </h3>

                                <div className="mt-2 flex items-center gap-2">
                                    <span className="text-sm text-amber-500">
                                        {"★".repeat(item.stars)}
                                    </span>
                                </div>

                                <div className="mt-3 text-sm text-slate-500">
                                    <p>{item.departure}</p>
                                    <p>{item.include}</p>
                                </div>

                                <div className="mt-3 inline-flex rounded-md bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
                                    {item.savings}
                                </div>

                                <div className="mt-3 border-t border-slate-200 pt-3 text-sm text-slate-500">
                                    <p className="text-xs line-through">{item.oldPrice}</p>
                                    <p className="text-2xl font-semibold text-slate-900">{item.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}