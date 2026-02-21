import Link from "next/link";

const address = "R. Sen. Antonio Arruda Farias, 56, Baía Formosa - RN, 59194-000";
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export function Footer() {
    return (
        <footer className="bg-white text-slate-700">
            <div className="max-w-7xl mx-auto px-6 py-14">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h3 className="text-lg font-semibold text-slate-900">Baía Formosa Tour</h3>
                        <p className="mt-3 text-sm text-slate-600">
                            Uma agência de turismo dedicada a experiências autênticas, com passeios
                            inesquecíveis e atendimento personalizado no litoral potiguar.
                        </p>
                        <div className="mt-5 flex items-center gap-3">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex size-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
                                aria-label="Instagram"
                            >
                                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                                    <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5zm5-3.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17 7.25z" />
                                </svg>
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex size-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
                                aria-label="Facebook"
                            >
                                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                                    <path d="M13.5 9H16V6h-2.5A3.5 3.5 0 0 0 10 9.5V11H8v3h2v7h3v-7h2.5L16 11h-3V9.5c0-.3.2-.5.5-.5z" />
                                </svg>
                            </a>
                            <a
                                href="https://wa.me/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex size-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
                                aria-label="WhatsApp"
                            >
                                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                                    <path d="M12.04 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12.04 3zm0 2a7 7 0 1 1-3.6 13l-.2-.1-2.7.7.7-2.6-.1-.2A7 7 0 0 1 12.04 5zm-3 3.6c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4 0 .6l-.5.6c-.1.2-.1.3 0 .5.3.7 1.4 1.8 2.1 2.1.2.1.3.1.5 0l.6-.5c.2-.1.4-.1.6 0l1.7.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.3.1-.6.2-.9.2-1.2 0-3.8-.8-5.6-2.6C7.7 12.7 7 10.3 7 9.1c0-.3.1-.6.2-.9z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Contato</h4>
                        <ul className="mt-4 space-y-2 text-sm text-slate-600">
                            <li>
                                <a className="hover:text-slate-900 transition" href="mailto:contato@baiaformosatour.com">
                                    contato@baiaformosatour.com
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-slate-900 transition" href="tel:+5584999999999">
                                    (84) 9 9999-9999
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-slate-900 transition" href={mapUrl} target="_blank" rel="noreferrer">
                                    {address}
                                </a>
                            </li>
                            <li>Atendimento: Seg a Sáb · 08:00 - 18:00</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Links rápidos</h4>
                        <ul className="mt-4 space-y-2 text-sm text-slate-600">
                            <li>
                                <Link className="hover:text-slate-900 transition" href="#inicio">
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-slate-900 transition" href="#services">
                                    Serviços
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-slate-900 transition" href="#destinos">
                                    Destinos
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-slate-900 transition" href="#contato">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Diferenciais</h4>
                        <ul className="mt-4 space-y-2 text-sm text-slate-600">
                            <li>Guias locais credenciados</li>
                            <li>Roteiros personalizados</li>
                            <li>Suporte durante a viagem</li>
                            <li>Pagamento facilitado</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
                    <p>© 2026 Baía Formosa Tour. Todos os direitos reservados.</p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="#" className="hover:text-slate-900 transition">
                            Política de privacidade
                        </Link>
                        <Link href="#" className="hover:text-slate-900 transition">
                            Termos de uso
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}