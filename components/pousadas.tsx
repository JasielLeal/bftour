import Link from "next/link";
import Image from "next/image";
import { Reveal } from "./reveal";

export function Pousadas() {
  const pousadas = [
    {
      id: 1,
      kicker: "Pousada à beira-mar",
      title: "Villa Mar",
      slug: "villa-mar",
      image: "/pousadas/villamar/01.webp",
      alt: "Villa Mar – Baía Formosa",
    },
    {
      id: 2,
      kicker: "Conforto e natureza",
      title: "Bella Flor",
      slug: "bella-flor",
      image: "/pousadas/bellaflor/01.webp",
      alt: "Bella Flor – Baía Formosa",
    },
  ];

  return (
    <section className="bg-slate-50" id="pousadas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <Reveal className="flex flex-col gap-3 items-center text-center mb-10">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">
            Hospedagem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Pousadas que <span className="text-gradient">Acolhem</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-md">
            Descanse com conforto e acorde com a brisa do mar. As melhores opções
            de hospedagem em Baía Formosa para tornar sua estadia inesquecível.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 max-w-3xl mx-auto">
            {pousadas.map((pousada) => (
              <Reveal key={pousada.id} delay={pousada.id * 120}>
                <Link
                  href={`/experiencia/${pousada.slug}`}
                  className="interactive-card group relative block w-full h-80 overflow-hidden rounded-3xl border border-slate-200 shadow-sm"
                >
                  <Image
                    src={pousada.image}
                    alt={pousada.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 80vw, 360px"
                    priority={pousada.id === 1}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <p className="text-white/70 text-sm uppercase tracking-[0.2em]">
                      {pousada.kicker}
                    </p>
                    <h3 className="text-white text-2xl font-semibold">
                      {pousada.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}
