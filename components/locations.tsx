import Link from "next/link";
import { MapPin, Clock, Phone, Navigation, ExternalLink } from "lucide-react";
import { Reveal } from "./reveal";

const address = "R. Sen. Antonio Arruda Farias, 56, Baía Formosa - RN, 59194-000";
const encodedAddress = encodeURIComponent(address);
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
const appleMapsUrl = `https://maps.apple.com/?q=${encodedAddress}`;
const whatsappUrl = "https://wa.me/5584999999999";

const infoItems = [
    {
        icon: MapPin,
        label: "Endereço",
        value: "R. Sen. Antonio Arruda Farias, 56",
        sub: "Baía Formosa – RN, 59194-000",
    },
    {
        icon: Clock,
        label: "Horário de atendimento",
        value: "Segunda a Domingo",
        sub: "07:00 – 18:00",
    },
    {
        icon: Phone,
        label: "WhatsApp",
        value: "(84) 9 9999-9999",
        sub: "Resposta rápida garantida",
        href: whatsappUrl,
    },
];

export function Location() {
    return (
        <section className="bg-slate-50 overflow-hidden" id="localizacao">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">

                {/* Header */}
                <div className="mb-12">
                    <Reveal>
                        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
                            Localização
                        </p>
                    </Reveal>
                    <Reveal delay={80}>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight max-w-xl">
                            Como{" "}
                            <span className="text-gradient">chegar até nós</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={140}>
                        <p className="text-slate-500 text-sm sm:text-base mt-3 max-w-lg">
                            Encontre a BF Tour com facilidade. A apenas 95&nbsp;km de Natal, no coração de Baía Formosa.
                        </p>
                    </Reveal>
                </div>

                {/* Grid: info cards + map */}
                <div className="grid lg:grid-cols-[1fr_1.6fr] gap-6 lg:gap-8 items-stretch">

                    {/* Info cards column */}
                    <Reveal delay={200} className="flex flex-col gap-4">

                        {infoItems.map(({ icon: Icon, label, value, sub, href }) => {
                            const card = (
                                <div className="interactive-card flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/15">
                                        <Icon className="size-5 text-primary" />
                                    </span>
                                    <div>
                                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-0.5">{label}</p>
                                        <p className="text-slate-900 font-semibold text-sm leading-snug">{value}</p>
                                        <p className="text-slate-500 text-xs mt-0.5">{sub}</p>
                                    </div>
                                </div>
                            );
                            return href ? (
                                <Link key={label} href={href} target="_blank" rel="noopener noreferrer">
                                    {card}
                                </Link>
                            ) : (
                                <div key={label}>{card}</div>
                            );
                        })}

                        {/* CTA buttons */}
                        <div className="grid grid-cols-2 gap-3 mt-1">
                            <Link
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="interactive-card flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-xs font-semibold text-slate-700 shadow-sm hover:border-primary/30 hover:text-primary transition-colors"
                            >
                                <Navigation className="size-4 shrink-0" />
                                Google Maps
                            </Link>
                            <Link
                                href={appleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="interactive-card flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-xs font-semibold text-slate-700 shadow-sm hover:border-primary/30 hover:text-primary transition-colors"
                            >
                                <ExternalLink className="size-4 shrink-0" />
                                Apple Maps
                            </Link>
                        </div>
                    </Reveal>

                    {/* Map */}
                    <Reveal delay={300} className="min-h-80 lg:min-h-0">
                        <div className="interactive-card h-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                            <iframe
                                title="Mapa Baía Formosa Tour"
                                src={`https://www.google.com/maps?q=${encodedAddress}&output=embed`}
                                className="h-full w-full min-h-80"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </Reveal>

                </div>
            </div>
        </section>
    );
}