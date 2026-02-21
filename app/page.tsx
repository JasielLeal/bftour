import { Hero } from "../components/hero";
import { Favorites } from "@/components/favorites";
import { WhereIts } from "@/components/whereIts";
import { Activities } from "@/components/activities";
import { Galery } from "@/components/galery";
import { Location } from "@/components/locations";
import { Footer } from "@/components/footer";
import { ExpirenciesGastronomics } from "@/components/expirencies-gastronomics";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <main>
          <Hero />
          <Favorites />
          <WhereIts />
          <Activities />
          <ExpirenciesGastronomics />
          <Galery />
          <Location />
        </main>
        <Footer />
      </div>
    </>
  );
}
