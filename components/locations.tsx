import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { SubText } from "./ui/sub-text";
import { Title } from "./ui/title";

const address = "R. Sen. Antonio Arruda Farias, 56, Baía Formosa - RN, 59194-000";
const encodedAddress = encodeURIComponent(address);
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
const appleMapsUrl = `https://maps.apple.com/?q=${encodedAddress}`;

export function Location() {
    return (
        <section className="bg-white" id="localizacao">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <Badge>Localização</Badge>
                <div className="my-3">
                    <Title>Como chegar</Title>
                </div>
                <div className="max-w-2xl">
                    <SubText>
                        Encontre a Baía Formosa Tour com facilidade. Abra no Google Maps ou no app Mapas do iPhone.
                    </SubText>
                </div>

                <div className="mt-10 grid gap-8 lg:grid-cols-1">

                    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                        <iframe
                            title="Mapa Baía Formosa Tour"
                            src={`https://www.google.com/maps?q=${encodedAddress}&output=embed`}
                            className="h-80 w-full"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>


                </div>
            </div>
        </section>
    );
}