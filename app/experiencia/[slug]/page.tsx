import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { experiencias, getExperienciaBySlug } from "@/data/experiencias";
import { ExperienceGallery } from "@/components/experience/experience-gallery";
import { AddToCartButton } from "@/components/experience/add-to-cart-button";
import { Reveal } from "@/components/reveal";
import {
  MapPin,
  Clock,
  Users,
  Zap,
  CheckCircle2,
  Star,
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Plus,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

export async function generateStaticParams() {
  return experiencias.map((experiencia) => ({ slug: experiencia.slug }));
}

export const dynamicParams = true;

type ExperiencePageProps = {
  params: Promise<{ slug: string }>;
};

const formatBRL = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

const tipoColor: Record<string, string> = {
  Quadriciclo: "bg-orange-100 text-orange-700",
  Buggy: "bg-amber-100 text-amber-700",
  Barco: "bg-blue-100 text-blue-700",
  Canoa: "bg-cyan-100 text-cyan-700",
  Surf: "bg-sky-100 text-sky-700",
  "Experiência Gastronômica": "bg-rose-100 text-rose-700",
  Trilha: "bg-emerald-100 text-emerald-700",
  Pousadas: "bg-purple-100 text-purple-700",
};

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug).toLowerCase();
  const experiencia = getExperienciaBySlug(slug);

  if (!experiencia) {
    notFound();
  }

  const savings =
    experiencia.onsale && experiencia.oldPreco
      ? experiencia.oldPreco - experiencia.preco
      : null;

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero Banner */}
      <div className="relative h-[55vh] min-h-[340px] max-h-[520px] w-full overflow-hidden">
        <Image
          src={experiencia.imagens[0]}
          alt={experiencia.titulo}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-black/30" />

        {/* Breadcrumb */}
        <div className="absolute inset-x-0 top-0 flex items-center gap-3 px-4 sm:px-8 pt-24 sm:pt-20">
          <Link href="/" className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm transition-colors">
            <ArrowLeft className="size-4" />
            Início
          </Link>
          <ChevronRight className="size-3.5 text-white/40" />
          <span className="text-white/60 text-sm">Experiências</span>
          <ChevronRight className="size-3.5 text-white/40" />
          <span className="text-white/90 text-sm truncate max-w-[160px]">{experiencia.titulo}</span>
        </div>

        {/* Title at bottom of hero */}
        <div className="absolute bottom-0 inset-x-0 px-4 sm:px-8 pb-8">
          <div className="max-w-7xl mx-auto">
            <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold mb-3 ${tipoColor[experiencia.tipo] ?? "bg-white/20 text-white"}`}>
              {experiencia.tipo}
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
              {experiencia.titulo}
            </h1>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 text-amber-400 text-sm font-semibold">
                <Star className="size-4 fill-amber-400" />
                <span>5.0</span>
                <span className="text-white/60 font-normal">(Google)</span>
              </div>
              {experiencia.localizacao && (
                <div className="flex items-center gap-1.5 text-white/80 text-sm">
                  <MapPin className="size-3.5 shrink-0" />
                  {experiencia.localizacao}
                </div>
              )}
              {experiencia.duracao && (
                <div className="flex items-center gap-1.5 text-white/80 text-sm">
                  <Clock className="size-3.5 shrink-0" />
                  {experiencia.duracao}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1fr_380px]">

          {/* Left Column */}
          <div className="space-y-8 min-w-0">

            {/* Gallery */}
            <Reveal>
              <ExperienceGallery imagens={experiencia.imagens} titulo={experiencia.titulo} />
            </Reveal>

            {/* About */}
            <Reveal delay={80}>
              <div className="rounded-3xl bg-white border border-slate-100 shadow-sm p-6 sm:p-8">
                <p className="text-primary text-xs font-bold tracking-widest uppercase mb-1">Visão geral</p>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Sobre a experiência</h2>
                <p className="text-slate-600 leading-relaxed mb-7">{experiencia.descricao}</p>

                {/* Info grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {experiencia.localizacao && (
                    <div className="flex flex-col gap-2 rounded-2xl bg-slate-50 border border-slate-100 p-4">
                      <MapPin className="size-5 text-primary" />
                      <p className="text-[11px] font-semibold uppercase text-slate-400 tracking-wide">Local</p>
                      <p className="text-sm font-bold text-slate-800 leading-tight">{experiencia.localizacao}</p>
                    </div>
                  )}
                  {experiencia.duracao && (
                    <div className="flex flex-col gap-2 rounded-2xl bg-slate-50 border border-slate-100 p-4">
                      <Clock className="size-5 text-primary" />
                      <p className="text-[11px] font-semibold uppercase text-slate-400 tracking-wide">Duração</p>
                      <p className="text-sm font-bold text-slate-800 leading-tight">{experiencia.duracao}</p>
                    </div>
                  )}
                  {experiencia.open && (
                    <div className="flex flex-col gap-2 rounded-2xl bg-slate-50 border border-slate-100 p-4">
                      <Zap className="size-5 text-primary" />
                      <p className="text-[11px] font-semibold uppercase text-slate-400 tracking-wide">Horário</p>
                      <p className="text-sm font-bold text-slate-800 leading-tight">{experiencia.open}</p>
                    </div>
                  )}
                  {experiencia.valorPor && (
                    <div className="flex flex-col gap-2 rounded-2xl bg-slate-50 border border-slate-100 p-4">
                      <Users className="size-5 text-primary" />
                      <p className="text-[11px] font-semibold uppercase text-slate-400 tracking-wide">Valor por</p>
                      <p className="text-sm font-bold text-slate-800 leading-tight">{experiencia.valorPor}</p>
                    </div>
                  )}
                  {experiencia.intensidade && (
                    <div className="flex flex-col gap-2 rounded-2xl bg-slate-50 border border-slate-100 p-4">
                      <Zap className="size-5 text-primary" />
                      <p className="text-[11px] font-semibold uppercase text-slate-400 tracking-wide">Intensidade</p>
                      <p className="text-sm font-bold text-slate-800 leading-tight">{experiencia.intensidade}</p>
                    </div>
                  )}
                </div>

                {/* Incluso */}
                {experiencia.incluso && experiencia.incluso.length > 0 && (
                  <div className="mt-7 pt-7 border-t border-slate-100">
                    <h3 className="text-base font-bold text-slate-900 mb-4">O que está incluso</h3>
                    <ul className="grid sm:grid-cols-2 gap-2.5">
                      {experiencia.incluso.map((item) => (
                        <li key={item} className="flex items-center gap-3 rounded-xl bg-emerald-50 border border-emerald-100 px-4 py-2.5 text-sm font-medium text-emerald-800">
                          <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Reveal>

            {/* Itinerary timeline */}
            {experiencia.roteiro && experiencia.roteiro.length > 0 && (
              <Reveal delay={120}>
                <div className="rounded-3xl bg-white border border-slate-100 shadow-sm p-6 sm:p-8">
                  <p className="text-primary text-xs font-bold tracking-widest uppercase mb-1">Roteiro</p>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    {experiencia.duracao} de {experiencia.type ?? "aventura"} em Baía Formosa
                  </h2>
                  <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-7">
                    Experiência completa
                  </span>

                  <div className="space-y-0">
                    {experiencia.roteiro.map((item, i) => (
                      <div key={item.titulo} className="flex gap-5">
                        <div className="flex flex-col items-center">
                          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-white text-xs font-bold shadow-sm">
                            {i + 1}
                          </div>
                          {i < (experiencia.roteiro?.length ?? 0) - 1 && (
                            <div className="w-0.5 flex-1 bg-primary/20 my-1.5" />
                          )}
                        </div>
                        <div className={`pb-6 ${i === (experiencia.roteiro?.length ?? 0) - 1 ? "pb-0" : ""}`}>
                          <h4 className="text-sm font-bold text-slate-900 leading-tight mb-1">{item.titulo}</h4>
                          <p className="text-sm text-slate-500 leading-relaxed">{item.texto}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {/* Service options */}
            {experiencia.opcoes && experiencia.opcoes.length > 0 && (
              <Reveal delay={140}>
                <div className="rounded-3xl bg-white border border-slate-100 shadow-sm p-6 sm:p-8">
                  <p className="text-primary text-xs font-bold tracking-widest uppercase mb-1">Serviços</p>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Opções de serviço</h2>
                  <p className="text-slate-500 text-sm mb-6">Escolha a opção que melhor se encaixa no seu estilo de viagem.</p>
                  <ul className="space-y-3">
                    {experiencia.opcoes.map((item) => (
                      <li key={item} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-3.5 text-sm font-medium text-slate-700">
                        <span className="size-2 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

            {/* Extras + Why us */}
            <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
              {experiencia.extras && experiencia.extras.length > 0 && (
                <Reveal delay={160}>
                  <div className="rounded-3xl bg-white border border-slate-100 shadow-sm p-6 sm:p-8 h-full">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="size-4 text-primary" />
                      <p className="text-primary text-xs font-bold tracking-widest uppercase">Extras</p>
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">Opções adicionais</h2>
                    <p className="text-slate-500 text-sm mb-5">Turbine o passeio com atividades e sabores locais.</p>
                    <ul className="space-y-2.5">
                      {experiencia.extras.map((item) => (
                        <li key={item.name} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                          <Plus className="size-3.5 shrink-0 text-primary" />
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}

              <Reveal delay={180}>
                <div className="rounded-3xl border border-primary/20 bg-linear-to-br from-primary/8 via-white to-amber-50/40 p-6 sm:p-8 h-full">
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className="size-4 text-primary" />
                    <p className="text-primary text-xs font-bold tracking-widest uppercase">Confiança</p>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-5">Por que nos escolher?</h2>
                  <ul className="space-y-3">
                    {[
                      "Líder em avaliações no Google",
                      "Guias experientes e credenciados",
                      "Máquinas novas e revisadas",
                      "Organização e atendimento de excelência",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="size-4 shrink-0 mt-0.5 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

          </div>

          {/* Booking Sidebar */}
          {experiencia.onsale && (
            <Reveal delay={100} variant="right">
              <aside className="lg:sticky lg:top-28 space-y-4">

                <div className="rounded-3xl bg-white border border-slate-100 shadow-lg p-6 sm:p-7">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Sua experiência</p>

                  {savings && (
                    <span className="inline-flex rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-700 mb-4">
                      Economize {formatBRL(savings)}
                    </span>
                  )}

                  <div className="mb-1">
                    {experiencia.oldPreco && (
                      <p className="text-slate-400 text-sm line-through mb-1">{formatBRL(experiencia.oldPreco)}</p>
                    )}
                    <span className="text-4xl font-black text-primary leading-none">{formatBRL(experiencia.preco)}</span>
                    <p className="text-slate-400 text-xs mt-1">por {experiencia.valorPor}</p>
                  </div>

                  <div className="my-5 border-t border-slate-100" />

                  <div className="space-y-2 mb-6">
                    {experiencia.duracao && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 text-slate-500"><Clock className="size-4 text-slate-400" /> Duração</span>
                        <span className="font-semibold text-slate-800">{experiencia.duracao}</span>
                      </div>
                    )}
                    {experiencia.localizacao && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 text-slate-500"><MapPin className="size-4 text-slate-400" /> Local</span>
                        <span className="font-semibold text-slate-800">{experiencia.localizacao}</span>
                      </div>
                    )}
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-slate-500"><Star className="size-4 text-amber-400 fill-amber-400" /> Avaliação</span>
                      <span className="font-semibold text-slate-800">5.0 Google</span>
                    </div>
                  </div>

                  <AddToCartButton
                    id={experiencia.slug}
                    titulo={experiencia.titulo}
                    preco={experiencia.preco}
                    tipo={experiencia.tipo}
                  />

                  <a
                    href="https://wa.me/5584999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-full border-2 border-emerald-500 bg-emerald-50 py-3 px-5 text-sm font-bold text-emerald-700 hover:bg-emerald-500 hover:text-white transition-all duration-200"
                  >
                    <MessageCircle className="size-4" />
                    Consultar no WhatsApp
                  </a>

                  <p className="mt-4 text-center text-xs text-slate-400">
                    Sem cobrança antecipada • Cancele com facilidade
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-100 p-5">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {[
                      { icon: "🏆", label: "Top Google" },
                      { icon: "🛡️", label: "Seguro" },
                      { icon: "📸", label: "Fotos incluso" },
                    ].map((b) => (
                      <div key={b.label} className="flex flex-col items-center gap-1">
                        <span className="text-2xl">{b.icon}</span>
                        <span className="text-[11px] font-semibold text-slate-600 leading-tight">{b.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </aside>
            </Reveal>
          )}

        </div>
      </div>
    </main>
  );
}
