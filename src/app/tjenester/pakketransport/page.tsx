import Image from 'next/image';
import { Phone, Mail, Package, Zap, Clock, Shield } from 'lucide-react';
import { getImagePath } from '@/lib/utils';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';

export default function PakketransportPage() {
  return (
    <div className="bg-gray-50">
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
          <AnimateOnScroll>
            <h1 className="text-5xl md:text-6xl font-bold text-white text-center">Pakketransport</h1>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 pt-24 pb-16 md:pt-28">
        <div className="grid md:grid-cols-3 gap-12">
          <AnimateOnScroll delay={0.1} animationType="fadeInUpWithRotate" className="md:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-lg">
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

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="p-6 bg-yellow-50 rounded-lg">
                    <Zap className="w-8 h-8 text-yellow-600 mb-3" />
                    <h4 className="font-semibold text-yellow-800 mb-2">Ekspresslevering</h4>
                    <p className="text-sm text-yellow-700">For sendinger som haster, tilbyr vi ekspresspakker som kjøres direkte til mottaker uten samkjøring. Vi kan gi en tidsgaranti for disse oppdragene.</p>
                  </div>
                  <div className="p-6 bg-blue-50 rounded-lg">
                    <Package className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="font-semibold text-blue-800 mb-2">Standard Levering</h4>
                    <p className="text-sm text-blue-700">For mindre tidskritiske pakker, kan vi samkjøre transporten med andre oppdrag for en mer kostnadseffektiv løsning.</p>
                  </div>
                </div>

                <h3>Dekningsområde</h3>
                <p>Vi dekker hele Mjøsområdet med daglig trafikk:</p>
                <ul className="grid grid-cols-2 gap-x-4">
                  <li>Lillehammer</li>
                  <li>Gjøvik</li>
                  <li>Moelv</li>
                  <li>Brumunddal</li>
                  <li>Hamar</li>
                  <li>Elverum</li>
                </ul>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Contact/Info Box */}
          <AnimateOnScroll delay={0.2} animationType="fadeInUpWithRotate">
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
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}