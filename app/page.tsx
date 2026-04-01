import { Hero } from "../components/hero";
import { Favorites } from "@/components/favorites";
import { WhereIts } from "@/components/whereIts";
import { Activities } from "@/components/activities";
import { Galery } from "@/components/galery";
import { Location } from "@/components/locations";
import { Footer } from "@/components/footer";
import { ExpirenciesGastronomics } from "@/components/expirencies-gastronomics";
import { Reviews } from "@/components/reviews";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <main>
          <section id="inicio">
            <Hero />
          </section>
          <Favorites />
          <WhereIts />
          <section id="services">
            <Activities />
            <ExpirenciesGastronomics />
          </section>
          <Galery />
          <Reviews />
          <section id="destinos">
            <Location />
          </section>
        </main>
        <section id="contato">
          <Footer />
        </section>
      </div>
    </>
  );
}
