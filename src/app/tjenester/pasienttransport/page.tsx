import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import { getImagePath } from '@/lib/utils';

export default function PasienttransportPage() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-80 bg-gray-900">
        <div className="relative w-full h-full">
          <Image
            src={getImagePath("/assets/taxi-image.png")}
            alt="Pasienttransport"
            fill
            className="opacity-70 object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center">Pasienttransport</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary-2 mb-4">Trygg og Pålitelig Transport</h2>
            <p className="text-lg text-gray-700 mb-6">
              Vi forstår viktigheten av punktlig og komfortabel transport når du skal til nødvendig medisinsk undersøkelse eller behandling. 06565 Taxi er stolt over å ha blitt tildelt ansvaret for pasienttransport i Lillehammer-området av Pasientreiser Sykehuset Innlandet.
            </p>
            <div className="prose lg:prose-xl max-w-none">
              <h3>Hvem kan få dekket reise?</h3>
              <p>Pasienter som av medisinske eller trafikale årsaker ikke kan benytte offentlig transport, kan ha rett til å få dekket deler av reiseutgiftene. Det er din behandler som vurderer og eventuelt rekvirerer transport for deg.</p>
              <h3>Våre forpliktelser</h3>
              <ul>
                <li><strong>Punktlighet:</strong> Vi sørger for at du ankommer din avtale i tide.</li>
                <li><strong>Komfort:</strong> Våre biler er moderne, rene og komfortable.</li>
                <li><strong>Assistanse:</strong> Våre sjåfører er serviceinnstilte og hjelper deg til og fra bilen ved behov.</li>
              </ul>
              <h3>Mer informasjon</h3>
              <p>For detaljerte retningslinjer og informasjon om egenandeler, henviser vi til <a href="https://sykehuset-innlandet.no/behandlinger-og-undersokelser/pasientreiser" target="_blank" rel="noopener noreferrer" className="text-accent-1 hover:underline">Pasientreiser Sykehuset Innlandet sine nettsider</a>.</p>
            </div>
          </div>

          {/* Contact/Info Box */}
          <div className="bg-white p-8 rounded-lg shadow-lg h-fit">
            <h3 className="text-2xl font-bold text-primary-2 mb-4">Bestilling og Spørsmål</h3>
            <p className="text-gray-700 mb-6">All bestilling av pasientreiser går via Pasientreiser. For andre henvendelser, kontakt oss gjerne.</p>
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
