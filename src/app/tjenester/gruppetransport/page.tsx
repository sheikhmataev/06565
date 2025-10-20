import Image from 'next/image';
import { Phone, Mail, Users, Bus } from 'lucide-react';

export default function GruppetransportPage() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-80 bg-gray-900">
        <div className="relative w-full h-full">
          <Image
            src="/assets/gruppetransport-hero.jpg"
            alt="Komfortabel gruppetransport"
            fill
            className="opacity-70 object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center">Gruppetransport</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary-2 mb-4">Samle Gruppen for en Felles Reise</h2>
            <p className="text-lg text-gray-700 mb-6">
              Enten dere er en vennegjeng, en bedrift på tur, eller en familie som skal på utflukt, har 06565 Taxi løsningen for dere. Med våre moderne minibusser og maxi-taxier kan vi transportere grupper komfortabelt og effektivt.
            </p>
            <div className="prose lg:prose-xl max-w-none">
              <h3>Våre Gruppetransporttjenester:</h3>
              <p>Vi tilbyr skreddersydd transport for en rekke anledninger:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <li>Charterturer</li>
                <li>Skoleturer og barnehageutflukter</li>
                <li>Konserter og arrangementer</li>
                <li>Bryllupstransport</li>
                <li>Turkjøring</li>
                <li>Transport til og fra restauranter</li>
              </ul>

              <div className="flex items-start my-6 p-4 bg-blue-50 rounded-lg">
                <Bus className="w-10 h-10 text-accent-1 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4>Moderne Kjøretøypark</h4>
                  <p>Våre minibusser har plass til opptil 16 personer og er utstyrt for en behagelig reise, uansett distanse.</p>
                </div>
              </div>

              <p>Forhåndsbestilling er nødvendig for større grupper for å sikre at vi har riktig kjøretøy tilgjengelig for deres behov. Ta kontakt for å planlegge deres neste gruppereise.</p>
            </div>
          </div>

          {/* Contact/Info Box */}
          <div className="bg-white p-8 rounded-lg shadow-lg h-fit">
            <h3 className="text-2xl font-bold text-primary-2 mb-4">Bestill Gruppetransport</h3>
            <p className="text-gray-700 mb-6">Kontakt oss på forhånd for å sikre transport for din gruppe. Vi gir deg gjerne et pristilbud.</p>
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
