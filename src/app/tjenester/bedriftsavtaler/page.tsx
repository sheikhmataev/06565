import Image from 'next/image';
import { Phone, Mail, CheckCircle } from 'lucide-react';
import { getImagePath } from '@/lib/utils';

export default function BedriftsavtalePage() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-80 bg-gray-900">
        <div className="relative w-full h-full">
          <Image
            src={getImagePath("/assets/taxicars.png")}
            alt="Profesjonell transport for bedrifter"
            fill
            className="opacity-70 object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center">Bedriftsavtaler</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary-2 mb-4">Effektiv Transport for Din Bedrift</h2>
            <p className="text-lg text-gray-700 mb-6">
              En bedriftsavtale med 06565 Taxi forenkler reisehverdagen for dine ansatte og kunder. Vi tilbyr skreddersydde, effektive og profesjonelle transportløsninger som gir din bedrift full kontroll og oversikt over reisekostnadene.
            </p>
            <div className="prose lg:prose-xl max-w-none">
              <h3 className="mb-4">Fordeler med en Bedriftsavtale:</h3>
              <ul className="space-y-4">
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Samlefaktura:</strong> Motta én månedlig faktura for alle reiser, noe som reduserer administrasjon.</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Prioritert Service:</strong> Kunder med bedriftsavtale prioriteres i travle perioder.</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Enkel Bestilling:</strong> Bestill enkelt via telefon, e-post eller vår app, TaxiFix.</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Full Oversikt:</strong> Få tilgang til detaljerte rapporter over alle reiser for enkel kostnadskontroll.</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Faste Priser:</strong> Mulighet for å avtale faste priser på ofte brukte strekninger.</span></li>
              </ul>
            </div>
          </div>

          {/* Contact/Info Box */}
          <div className="bg-white p-8 rounded-lg shadow-lg h-fit">
            <h3 className="text-2xl font-bold text-primary-2 mb-4">Interessert i en Avtale?</h3>
            <p className="text-gray-700 mb-6">Ta kontakt med oss for en uforpliktende samtale og et skreddersydd tilbud for din bedrift.</p>
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
