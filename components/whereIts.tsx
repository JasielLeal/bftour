import { Badge } from "./ui/badge";
import { SubText } from "./ui/sub-text";
import { Title } from "./ui/title";
import quadricicloImg from "../public/quadriciculo.jpeg";
import villarmar from "../public/pousadas/villamar/01.webp";
import bellaflor from "../public/pousadas/bellaflor/01.webp";
import Link from "next/link";

export function WhereIts() {

    const packages = [
        {
            id: 1,
            days: "Diária",
            label: "POUSADA",
            title: "Villa Mar",
            rating: "7.0",
            stars: 5,
            savings: "Economize R$80",
            oldPrice: "R$ 299,99",
            price: "R$ 219,99",
            img: villarmar,
            href: "/experiencia/villa-mar"
        },
        {
            id: 2,
            days: "Diária",
            label: "POUSADA",
            title: "Bella Flor",
            rating: "8.4",
            stars: 4,
            savings: "Economize R$100",
            oldPrice: "R$ 299,99",
            price: "R$ 199,99",
            img: bellaflor,
            href: "/experiencia/bella-flor"
        }
    ];

    return (
        <>
            <div >
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <Badge>Onde ficar?</Badge>
                    <div className="my-3">
                        <Title>Opções de hospedagem em Baía Formosa</Title>
                    </div>
                    <div className="max-w-2xl">
                        <SubText>
                            Encontre as melhores opções de hospedagem em Baía Formosa, desde pousadas aconchegantes até hotéis de luxo, todos cuidadosamente selecionados para garantir uma estadia inesquecível.
                        </SubText>
                    </div>
                    <div className="mt-10 flex gap-8 overflow-x-auto pb-4">
                        {packages.map((item) => (
                            <Link href={item.href || "#"}
                                key={item.id}
                                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm min-w-[280px] flex-shrink-0"
                            >
                                <div className="relative">
                                    <img
                                        src={typeof item.img === "string" ? item.img : item.img.src}
                                        alt={item.title}
                                        className="h-44 w-full object-cover"
                                        loading="lazy"
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
                                        <p>{item.rating}</p>
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
        </>
    )
}