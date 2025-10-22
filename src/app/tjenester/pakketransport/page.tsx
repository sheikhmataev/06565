import Image from 'next/image';
import { Phone, Mail, Package, Zap } from 'lucide-react';
import { getImagePath } from '@/lib/utils';

export default function PakketransportPage() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-80 bg-gray-900">
        <div className="relative w-full h-full">
          <Image
            src={getImagePath("/assets/taxi-image.png")}
            alt="Rask og sikker pakketransport"
            fill
            className="opacity-70 object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center">Pakketransport</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary-2 mb-4">Rask og Sikker Levering i Mjøsområdet</h2>
            <p className="text-lg text-gray-700 mb-6">
              Trenger du å sende en pakke raskt og trygt? 06565 Taxi fungerer som en effektiv budbil- og varetaxitjeneste i hele Mjøsområdet. Med 30 biler i daglig trafikk mellom Gjøvik, Lillehammer, Moelv, Brumunddal, Hamar og Elverum, kan vi garantere en pålitelig levering.
            </p>
            <div className="prose lg:prose-xl max-w-none">
              <h3>Hva vi transporterer:</h3>
              <p>Vi tar på oss transport av en rekke varer, inkludert:</p>
              <ul className="grid grid-cols-2 gap-x-4">
                <li>Småpakker</li>
                <li>Verdisendinger</li>
                <li>Bildeler</li>
                <li>Dokumenter</li>
                <li>Cateringmat</li>
                <li>Blomster</li>
              </ul>

              <div className="flex items-start my-6 p-4 bg-blue-50 rounded-lg">
                <Zap className="w-10 h-10 text-accent-1 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4>Ekspresslevering</h4>
                  <p>For sendinger som haster, tilbyr vi ekspresspakker som kjøres direkte til mottaker uten samkjøring. Vi kan gi en tidsgaranti for disse oppdragene.</p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-gray-100 rounded-lg">
                <Package className="w-10 h-10 text-accent-1 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4>Standard Levering</h4>
                  <p>For mindre tidskritiske pakker, kan vi samkjøre transporten med andre oppdrag for en mer kostnadseffektiv løsning.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact/Info Box */}
          <div className="bg-white p-8 rounded-lg shadow-lg h-fit">
            <h3 className="text-2xl font-bold text-primary-2 mb-4">Bestill Transport</h3>
            <p className="text-gray-700 mb-6">Ring oss for et pristilbud eller for å bestille din neste pakketransport.</p>
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
