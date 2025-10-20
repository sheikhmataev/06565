import Image from 'next/image';
import { Phone, Mail, Baby, ShieldCheck } from 'lucide-react';

export default function SikringAvBarnPage() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-80 bg-gray-900">
        <div className="relative w-full h-full">
          <Image
            src="/assets/barnesete-hero.jpg"
            alt="Trygg sikring av barn i taxi"
            fill
            className="opacity-70 object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center">Sikring av Barn i Taxi</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary-2 mb-4">En Trygg Reise for de Minste</h2>
            <p className="text-lg text-gray-700 mb-6">
              Sikkerheten til barna er vår høyeste prioritet. Vi tilbyr godkjent sikringsutstyr i alle vektklasser for å sikre at reisen blir så trygg som mulig. Det er barnets vekt som avgjør hvilket utstyr som skal benyttes.
            </p>
            <div className="prose lg:prose-xl max-w-none">
              <h3>Vårt Tilgjengelige Utstyr:</h3>
              <div className="space-y-4 my-6">
                <div className="p-4 border-l-4 border-accent-1 bg-gray-50 rounded-r-lg">
                  <h4 className="font-bold">Babysete: 0 – 13 kg</h4>
                  <p>For de aller minste, montert bakovervendt for maksimal sikkerhet.</p>
                </div>
                <div className="p-4 border-l-4 border-accent-1 bg-gray-50 rounded-r-lg">
                  <h4 className="font-bold">Barnesete: 9 – 18 kg</h4>
                  <p>For småbarn, som sikrer en korrekt og trygg sittestilling.</p>
                </div>
                <div className="p-4 border-l-4 border-accent-1 bg-gray-50 rounded-r-lg">
                  <h4 className="font-bold">Barnesete/Pute: 15 – 36 kg</h4>
                  <p>For større barn, som løfter barnet opp slik at bilens belter passer korrekt.</p>
                </div>
              </div>

              <div className="flex items-start mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <ShieldCheck className="w-10 h-10 text-yellow-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-yellow-800">Viktig: Bestill på Forhånd!</h4>
                  <p>For å garantere at vi har riktig barnesete tilgjengelig for deg, må dette bestilles på forhånd. Gi beskjed om barnets vekt når du ringer. Vær oppmerksom på at det kan medføre noe lengre ventetid.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact/Info Box */}
          <div className="bg-white p-8 rounded-lg shadow-lg h-fit">
            <h3 className="text-2xl font-bold text-primary-2 mb-4">Bestill Taxi med Barnesete</h3>
            <p className="text-gray-700 mb-6">Ring oss i god tid for å bestille en taxi med nødvendig sikringsutstyr. Husk å oppgi barnets vekt.</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-accent-1" />
                <a href="tel:06565" className="text-gray-800 hover:text-accent-2">06565</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-accent-1" />
                <a href="mailto:booking@06565.no" className="text-gray-800 hover:text-accent-2">booking@06565.no</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
