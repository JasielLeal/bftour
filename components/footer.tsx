import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo-white.png";
import { Reveal } from "./reveal";
import { ArrowUpRight } from "lucide-react";

const address = "R. Sen. Antonio Arruda Farias, 56, Baía Formosa - RN, 59194-000";
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400" id="contato">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">

                {/* Top grid */}
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-slate-800">

                    {/* Brand */}
                    <Reveal className="lg:col-span-1">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <Image src={logo} alt="Baía Formosa Tour" width={36} height={36} />
                                <span className="text-white font-bold text-lg">BF Tour</span>
                            </div>
                            <p className="text-sm leading-relaxed text-slate-500 mb-6">
                                Agência de turismo receptivo em Baía Formosa, dedicada a experiências autênticas no litoral potiguar do Rio Grande do Norte.
                            </p>
                            {/* Social icons */}
                            <div className="flex items-center gap-3">
                                <a href="https://www.instagram.com/bftour_oficial/" target="_blank" rel="noreferrer" aria-label="Instagram"
                                    className="size-9 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:bg-primary hover:text-white transition-all duration-200">
                                    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                                        <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5zm5-3.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17 7.25z"/>
                                    </svg>
                                </a>
                                <a href="https://wa.me/5584994062456" target="_blank" rel="noreferrer" aria-label="WhatsApp"
                                    className="size-9 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:bg-green-600 hover:text-white transition-all duration-200">
                                    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                                        <path d="M12.04 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12.04 3zm0 2a7 7 0 1 1-3.6 13l-.2-.1-2.7.7.7-2.6-.1-.2A7 7 0 0 1 12.04 5zm-3 3.6c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4 0 .6l-.5.6c-.1.2-.1.3 0 .5.3.7 1.4 1.8 2.1 2.1.2.1.3.1.5 0l.6-.5c.2-.1.4-.1.6 0l1.7.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.3.1-.6.2-.9.2-1.2 0-3.8-.8-5.6-2.6C7.7 12.7 7 10.3 7 9.1c0-.3.1-.6.2-.9z"/>
                                    </svg>
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"
                                    className="size-9 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-200">
                                    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                                        <path d="M13.5 9H16V6h-2.5A3.5 3.5 0 0 0 10 9.5V11H8v3h2v7h3v-7h2.5L16 11h-3V9.5c0-.3.2-.5.5-.5z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </Reveal>

                    {/* Navigation */}
                    <Reveal delay={80}>
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-5">Navegação</h4>
                            <ul className="space-y-3 text-sm">
                                {["Início/#inicio", "Serviços/#favorites", "Destinos/#destinos", "Galeria/#galeria", "Contato/#contato"].map((item) => {
                                    const [label, href] = item.split("/");
                                    return (
                                        <li key={href}>
                                            <Link href={href} className="hover:text-white transition-colors">{label}</Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </Reveal>

                    {/* Destinations */}
                    <Reveal delay={160}>
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-5">Experiências</h4>
                            <ul className="space-y-3 text-sm">
                                {[
                                    ["Quadriciclo", "/experiencia/quadriciclo-roteiro-completo"],
                                    ["Buggy", "/experiencia/buggy-roteiro-completo"],
                                    ["Barco", "/experiencia/barco-roteiro-completo"],
                                    ["Canoa", "/experiencia/canoa-roteiro-completo"],
                                    ["Pousadas", "/experiencia/hospedagem"],
                                ].map(([label, href]) => (
                                    <li key={href}>
                                        <Link href={href} className="hover:text-white transition-colors">{label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    {/* Contact */}
                    <Reveal delay={240}>
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-5">Contato</h4>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <a href="tel:+5584994062456" className="hover:text-white transition-colors">(84) 9 9406-2456</a>
                                </li>
                                <li>
                                    <a href="mailto:contato@baiaformosatour.com" className="hover:text-white transition-colors">contato@baiaformosatour.com</a>
                                </li>
                                <li>
                                    <a href={mapUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors leading-snug">
                                        {address}
                                    </a>
                                </li>
                                <li className="text-slate-500">Atendimento: Seg a Dom</li>
                            </ul>

                            <a
                                href="https://wa.me/5584994062456?text=Olá! Vim do site e gostaria de agendar uma experiência."
                                target="_blank"
                                rel="noreferrer"
                                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
                            >
                                Agendar pelo WhatsApp
                                <ArrowUpRight className="size-4" />
                            </a>
                        </div>
                    </Reveal>
                </div>

                {/* Bottom bar */}
                <Reveal delay={300} className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
                    <p>© 2026 Baía Formosa Tour. Todos os direitos reservados.</p>
                    <div className="flex gap-5">
                        <Link href="#" className="hover:text-slate-400 transition-colors">Política de privacidade</Link>
                        <Link href="#" className="hover:text-slate-400 transition-colors">Termos de uso</Link>
                    </div>
                </Reveal>
            </div>
        </footer>
    );
}