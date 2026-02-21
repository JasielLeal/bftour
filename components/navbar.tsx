"use client"

import { useState, useEffect } from "react"
import logo from "@/public/logo.png"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CarTaxiFront, ShoppingCart, User } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const { items } = useCart()


    const links = [
        {
            href: "#inicio",
            label: "Início",
        },
        {
            href: "#services",
            label: "Serviços",
            up: [
                {
                    href: "/experiencia/quadriciclo-roteiro-completo",
                    label: "Passeio de quadriciclo",
                },
                {
                    href: "/experiencia/buggy-roteiro-completo",
                    label: "Passeio de buggy",
                },
                {
                    href: "/experiencia/barco-roteiro-completo",
                    label: "Passeio de barco",
                },
                {
                    href: "/experiencia/canoa-roteiro-completo",
                    label: "Passeio de canoa",
                },
                {
                    href: "/experiencia/hospedagem",
                    label: "Hospedagem",
                }
            ],
        },
        {
            href: "#destinos",
            label: "Destinos",
        },
        {
            href: "#contato",
            label: "Contato",
        }
    ]

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            setIsScrolled(currentScrollY > 50)

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])

    return (
        <header
            className={`
        fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out
        ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}
        >
            <div
                className={`
                    w-[92vw] max-w-7xl flex items-center justify-between gap-6 px-6 py-3 rounded-2xl border transition-all duration-300
          ${isScrolled
                        ? "bg-white/90 backdrop-blur-xl border-border/40 shadow-2xl"
                        : "bg-white/95 backdrop-blur-lg border-border/30 shadow-lg"
                    }
        `}
            >
                <div className="transform transition-transform duration-200 hover:scale-105">
                    <Link href="/" className="inline-flex items-center gap-2">
                        <Image src={logo} alt="Baía Formosa Tour Logo" width={40} height={40} />
                    </Link>
                </div>

                <nav className="hidden md:flex flex-1 items-center justify-center gap-6 font-medium">
                    {links.map((link) => (
                        <div key={link.href} className="relative">
                            {!link.up ? (
                                <Link
                                    href={link.href}
                                    className="relative text-black/80 hover:text-black transition-all duration-300 group px-3 py-1 rounded-lg hover:bg-foreground/5 transform hover:scale-110 hover:rotate-1 hover:skew-x-1"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-4"></span>
                                </Link>
                            ) : (
                                <div className="group relative">
                                    <Link
                                        href={link.href}
                                        className="relative text-black/80 hover:text-black transition-all duration-300 group px-3 py-1 rounded-lg hover:bg-black/5 transform hover:scale-110 hover:rotate-1 hover:skew-x-1 inline-flex items-center gap-2"
                                    >
                                        {link.label}
                                        <span className="text-xs opacity-70 transition-transform duration-200 group-hover:rotate-180">▾</span>
                                        <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-4"></span>
                                    </Link>

                                    <div className="absolute left-1/2 top-full z-50 hidden w-64 -translate-x-1/2 rounded-2xl border border-border/50 bg-white/95 p-2 shadow-2xl backdrop-blur-xl group-hover:block">
                                        <div className="px-3 py-2 text-xs font-semibold uppercase text-black/60">
                                            Serviços
                                        </div>
                                        <div className="space-y-1">
                                            {link.up.map((sub) => (
                                                <Link
                                                    key={sub.href}
                                                    href={sub.href}
                                                    className="block rounded-xl px-3 py-2 text-sm text-black/80 transition-all duration-200 hover:bg-black/5 hover:text-black"
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white px-3 py-2 text-xs text-black/80 transition-colors hover:text-black"
                    >
                        <User size={16} className="text-black/70" />
                        <span>Olá, visitante</span>
                    </button>

                    <Link href="/cart"
                        type="button"
                        className="relative inline-flex size-9 items-center justify-center rounded-full border border-border/60 bg-white text-black/80 transition-colors hover:text-black"
                        aria-label="Carrinho"

                    >
                        <ShoppingCart size={16} />
                        {items.length > 0 && (
                            <span className="absolute -top-1 -right-1 inline-flex min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-semibold text-white">
                                {items.length}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    )
}
