"use client"

import { useState, useEffect } from "react"
import logo from "@/public/logo.png"
import logoWhite from "@/public/logo-white.png"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, ArrowUpRight, Menu, X } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"
import { Button } from "./ui/button"

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [mobileOpen, setMobileOpen] = useState(false)
    const { items } = useCart()

    const links = [
        { href: "#inicio",    label: "Início" },
        { href: "#favorites", label: "Serviços" },
        { href: "#destinos",  label: "Destinos" },
        { href: "#contato",   label: "Contato" },
    ]

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (!href.startsWith("#")) return
        e.preventDefault()
        const id = href.slice(1)
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY
            setIsScrolled(y > 50)
            setIsVisible(y <= lastScrollY || y <= 100)
            setLastScrollY(y)
        }
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])

    return (
        <>
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out
                ${isScrolled ? "pt-0" : "pt-3 sm:pt-4"}
                ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
            `}
        >
            <div
                className={`max-w-[100vw] overflow-hidden transition-all duration-500
                    ${isScrolled ? "" : "px-3 sm:px-6"}
                `}
            >
                <div className={`max-w-7xl mx-auto transition-all duration-500
                    ${isScrolled
                        ? "bg-white/97 backdrop-blur-xl border-b border-slate-200/60 shadow-sm px-5 sm:px-8 py-3"
                        : "bg-transparent border border-white/10 rounded-2xl px-4 sm:px-5 py-2.5"
                    }
                `}>
                <div className="flex items-center justify-between gap-3 sm:gap-6">
                {/* Logo */}
                <Link href="/" className="inline-flex items-center gap-2 shrink-0 hover:opacity-90 transition-opacity">
                    <Image src={isScrolled ? logo : logoWhite} alt="Baía Formosa Tour" width={38} height={38} />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex flex-1 items-center justify-center gap-1">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-xl group cursor-pointer
                                ${isScrolled
                                    ? "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                                    : "text-white/85 hover:text-white hover:bg-white/10"
                                }
                            `}
                        >
                            {link.label}
                            <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 w-0 rounded-full transition-all duration-200 group-hover:w-4
                                ${isScrolled ? "bg-primary" : "bg-white"}
                            `} />
                        </a>
                    ))}
                </nav>

                {/* Right actions */}
                <div className="flex items-center gap-2">
                    <Link
                        href="/cart"
                        className={`relative inline-flex size-9 items-center justify-center rounded-xl border transition-colors
                            ${isScrolled
                                ? "border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                                : "border-white/25 text-white hover:bg-white/15"
                            }
                        `}
                        aria-label="Carrinho"
                    >
                        <ShoppingCart size={16} />
                        {items.length > 0 && (
                            <span className="absolute -top-1 -right-1 inline-flex min-w-4.5 h-4.5 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-bold text-white">
                                {items.length}
                            </span>
                        )}
                    </Link>
                    <Link href="https://wa.me/5584994062456?text=Olá! Vim do site e gostaria de agendar uma experiência." target="_blank">
                        <Button size="sm" className={`hidden md:inline-flex gap-1.5 rounded-xl font-semibold text-sm px-4 h-9
                            ${isScrolled ? "" : "bg-white text-slate-900 hover:bg-white/90"}
                        `}>
                            Agendar
                            <ArrowUpRight className="size-3.5" />
                        </Button>
                    </Link>
                    {/* Mobile menu toggle */}
                    <button
                        type="button"
                        className={`md:hidden inline-flex size-9 items-center justify-center rounded-xl border transition-colors
                            ${isScrolled
                                ? "border-slate-200 text-slate-600 hover:bg-slate-50"
                                : "border-white/25 text-white hover:bg-white/15"
                            }
                        `}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Menu"
                    >
                        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
                </div>
                </div>
            </div>
        </header>

        {/* Mobile drawer */}
        {mobileOpen && (
            <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMobileOpen(false)}>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                <nav
                    className="absolute top-20 left-4 right-4 rounded-2xl bg-white shadow-2xl p-4 flex flex-col gap-1"
                    onClick={(e) => e.stopPropagation()}
                >
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="px-4 py-3 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
                            onClick={(e) => { handleNavClick(e, link.href); setMobileOpen(false) }}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="mt-2 pt-2 border-t border-slate-100">
                        <Link href="https://wa.me/5584994062456" target="_blank" onClick={() => setMobileOpen(false)}>
                            <Button className="w-full gap-2 rounded-xl">
                                Agendar agora
                                <ArrowUpRight className="size-4" />
                            </Button>
                        </Link>
                    </div>
                </nav>
            </div>
        )}
        </>
    )
}
