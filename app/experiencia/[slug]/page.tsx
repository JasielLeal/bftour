import { notFound } from "next/navigation";
import { experiencias, getExperienciaBySlug } from "@/data/experiencias";
import { ExperienceGallery } from "@/components/experience/experience-gallery";
import { AddToCartButton } from "@/components/experience/add-to-cart-button";
import { Badge } from "@/components/ui/badge";
import { Title } from "@/components/ui/title";

export async function generateStaticParams() {
  return experiencias.map((experiencia) => ({ slug: experiencia.slug }));
}

export const dynamicParams = true;

type ExperiencePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug).toLowerCase();
  const experiencia = getExperienciaBySlug(slug);

  if (!experiencia) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff7ed_0%,_#f8fafc_45%,_#eef2ff_100%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="pt-20 sm:pt-20">
          <Badge className="mb-2">{experiencia.tipo}</Badge>
          <Title>{experiencia.titulo}</Title>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <p className="text-primary">★★★★★</p>
            <p className="text-xs font-semibold text-black/60">
              Ver no mapa
            </p>
            <span className="h-1 w-1 rounded-full bg-black/30" />
          </div>
        </div>

        <div className="mt-8 sm:mt-10 grid gap-8 lg:gap-10 lg:grid-cols-[1.5fr_0.7fr]">
          <div className="space-y-10">
            <ExperienceGallery
              imagens={experiencia.imagens}
              titulo={experiencia.titulo}
            />

            <div className="rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-black/60">
                Sobre a experiência
              </h3>
              <p className="mt-3 text-sm text-black/60 leading-relaxed">
                {experiencia.descricao}
              </p>
              <div className="mt-5 sm:mt-6 grid gap-4 sm:grid-cols-3 text-sm">
                {experiencia.localizacao && (
                  <div className="rounded-2xl border border-slate-200/80 p-3 sm:p-4">
                    <p className="text-[11px] sm:text-xs uppercase text-black/60">
                      Localização
                    </p>
                    <p className="mt-1 text-sm sm:text-base font-semibold text-black/80">
                      {experiencia.localizacao}
                    </p>
                  </div>
                )}

                {experiencia.duracao && (
                  <div className="rounded-2xl border border-slate-200/80 p-3 sm:p-4">
                    <p className="text-[11px] sm:text-xs uppercase text-black/60">
                      Duração
                    </p>
                    <p className="mt-1 text-sm sm:text-base font-semibold text-black/80">
                      {experiencia.duracao}
                    </p>
                  </div>
                )}
                {experiencia.open && (
                  <div className="rounded-2xl border border-slate-200/80 p-3 sm:p-4">
                    <p className="text-[11px] sm:text-xs uppercase text-black/60">
                      Horário de funcionamento
                    </p>
                    <p className="mt-1 text-sm sm:text-base font-semibold text-black/80">
                      {experiencia.open}
                    </p>
                  </div>
                )}

                {experiencia.intensidade && (
                  <div className="rounded-2xl border border-slate-200/80 p-3 sm:p-4">
                    <p className="text-[11px] sm:text-xs uppercase text-black/60">
                      Intensidade
                    </p>
                    <p className="mt-1 text-sm sm:text-base font-semibold text-black/80">
                      {experiencia.intensidade || "Aventura + natureza"}
                    </p>
                  </div>
                )}
                {experiencia.vagas !== false && (
                  <div className="rounded-2xl border border-slate-200/80 p-3 sm:p-4">
                    <p className="text-[11px] sm:text-xs uppercase text-black/60">
                      Vagas
                    </p>
                    <p className="mt-1 text-sm sm:text-base font-semibold text-black/80">
                      Limitadas por {experiencia.valorPor}
                    </p>
                  </div>
                )}
              </div>

              {experiencia.incluso && experiencia.incluso.length > 0 && (
                <div className="mt-5 sm:mt-6">
                  <h4 className="text-sm font-semibold text-black/80">
                    O que está incluso
                  </h4>
                  <ul className="mt-3 grid gap-2 text-sm text-black/70 sm:grid-cols-2">
                    {experiencia.incluso.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {experiencia.roteiro && experiencia.roteiro.length > 0 && (
              <div className="rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase text-primary">
                      Roteiro da atividade
                    </p>
                    <h3 className="text-base sm:text-lg font-semibold text-black/80">
                      {experiencia.duracao} de{" "}
                      {experiencia.type ? experiencia.type : "aventura"} em Baía
                      Formosa
                    </h3>
                  </div>
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Experiência completa
                  </span>
                </div>

                <div className="mt-6 grid gap-4">
                  {experiencia.roteiro?.map((item) => (
                    <div
                      key={item.titulo}
                      className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-4"
                    >
                      <h4 className="text-sm font-semibold text-black/80">
                        {item.titulo}
                      </h4>
                      <p className="mt-1 text-sm text-black/70">
                        {item.texto}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {experiencia.opcoes && experiencia.opcoes.length > 0 && (
              <div className="rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-black/80">
                  Opções de serviço
                </h3>
                <p className="mt-2 text-sm text-black/70">
                  Escolha a opção que melhor se encaixa no seu estilo de viagem
                  e aproveite o melhor de Baía Formosa do seu jeito.
                </p>
                <ul className="mt-4 grid gap-3 text-sm text-black/70">
                  {experiencia.opcoes?.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/60 px-4 py-3"
                    >
                      <span className="size-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
              {experiencia.extras && experiencia.extras.length > 0 && (
                <div className="rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-black/80">
                    Opções extras
                  </h3>
                  <p className="mt-2 text-sm text-black/70">
                    Aproveite para turbinar o passeio com atividades e sabores
                    locais.
                  </p>
                  <ul className="mt-4 grid gap-3 text-sm text-black/70">
                    {experiencia.extras?.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/60 px-4 py-3"
                      >
                        <span className="size-2 rounded-full bg-primary" />
                        <span>{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-white to-white p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-black/80">
                  Por que escolher a Baía Formosa Tour?
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-black/70">
                  {[
                    "Líder em avaliações no Google",
                    "Guias experientes e renomados",
                    "Maquinas novas e revisadas para segurança total",
                    "Organização e atendimento de excelência",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 size-2.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {experiencia.onsale ? (
            <aside className="rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-6 h-fit">
              <h3 className="text-sm font-semibold text-black/80">
                Sua experiência
              </h3>
              <div className="mt-4">
                <p className="mt-3 inline-flex rounded-md bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
                  Economize{" "}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(
                    (experiencia.oldPreco ?? experiencia.preco) -
                      experiencia.preco,
                  )}
                </p>
              </div>
              <div className="mt-5 sm:mt-6">
                <p className="text-2xl sm:text-3xl font-semibold text-primary">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(experiencia.preco)}

                  <span className="text-xs sm:text-sm font-medium text-black/50">
                    {" "}
                    / {experiencia.valorPor}
                  </span>
                </p>
              </div>
              <div className="mt-5 sm:mt-6">
                <AddToCartButton
                  id={experiencia.slug}
                  titulo={experiencia.titulo}
                  preco={experiencia.preco}
                  tipo={experiencia.tipo}
                />
              </div>
              <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/10 p-4 text-sm text-black/70">
                Chame no WhatsApp para horários
                disponíveis.
              </div>
            </aside>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}
