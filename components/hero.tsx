import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { SubText } from "./ui/sub-text";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <>
      <div className="bg-gray-50 overflow-hidden min-h-screen relative">
        <div className="absolute inset-0 sm:hidden">
          <Image
            src="/hero-desk.png"
            alt="Baía Formosa - Vista panorâmica"
            fill
            priority
            quality={85}
            className="object-cover hero-image-pan"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 hidden sm:block">
          <Image
            src="/hero-desk.webp"
            alt="Baía Formosa - Vista panorâmica"
            fill
            priority
            quality={85}
            className="object-cover hero-image-pan"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 bg-linear-to-r from-black/50 to-black/20"
          aria-hidden="true"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="col-span-1 pt-20">
            <div className="flex flex-col justify-center gap-5 sm:gap-6 pt-16 sm:pt-24 lg:pt-32 pb-10">
              <Reveal delay={80} className="w-fit floating-soft">
                <Badge>Viva Baía Formosa de forma inesquecível.</Badge>
              </Reveal>
              <Reveal delay={180} className="max-w-3xl">
                <p className="text-white leading-9 lg:leading-12 text-4xl sm:text-4xl lg:text-6xl font-semibold">
                  Uma nova maneira de explorar o turismo e realizar seus sonhos.
                </p>
              </Reveal>
              <Reveal delay={280} className="max-w-2xl">
                <SubText className="text-white">
                  Descubra Baía Formosa: praias paradisíacas, natureza
                  preservada e experiências inesquecíveis em um dos destinos
                  mais encantadores do RN.
                </SubText>
              </Reveal>
              <Reveal delay={380} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                <Link href={"#favorites"} className="flex">
                  <Button className="w-full">Conheça nossos serviços</Button>
                </Link>
                <Link href={"https://wa.me/5584994511101?text=Olá! Vim do site da Baía Formosa Tour. Gostaria de mais informações sobre os serviços."} target="_blank" className="flex">
                  <Button className="w-full" variant={"outline"}>Fale conosco</Button>
                </Link>
              </Reveal>
            </div>
          </div>
          <div className="col-span-1" />
        </div>
      </div>
    </>
  );
}
