import Image from 'next/image';
import { Phone, Mail, Shield, Calendar, Users, DollarSign } from 'lucide-react';
import { getImagePath } from '@/lib/utils';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';

export default function TrygtHjemPage() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-80 bg-gray-900 mt-24 md:mt-28">
        <div className="relative w-full h-full">
          <Image
            src={getImagePath("/assets/trygthjem.png")}
            alt="Trygt Hjem for ungdom"
            fill
            className="opacity-70 object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimateOnScroll>
            <h1 className="text-5xl md:text-6xl font-bold text-white text-center">Trygt Hjem</h1>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-12">
          <AnimateOnScroll delay={0.1} animationType="fadeInUpWithRotate" className="md:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-primary-2 mb-4">En Sikker Hjemreise for Ungdom</h2>
            <p className="text-lg text-gray-700 mb-6">
              "Trygt hjem" er en taxi-ordning for ungdom mellom 15 og 21 år i Innlandet fylke, som sørger for en trygg reise hjem natt til lørdag og søndag gjennom hele året.
            </p>
            <div className="prose lg:prose-xl max-w-none">
              <h3 className="mb-4">Retningslinjer (Gjelder fra 1. april 2025):</h3>
              <ul className="space-y-4">
                <li className="flex items-start"><DollarSign className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Pris:</strong> Kr 100,- per person (kr 150,- på bestemte helligdager).</span></li>
                <li className="flex items-start"><Calendar className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Bestilling:</strong> Må bestilles innen kl. 16:00 på fredag.</span></li>
                <li className="flex items-start"><Users className="w-6 h-6 text-purple-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Krav:</strong> Det må være minimum 3 passasjerer som skal reise sammen til samme område.</span></li>
                <li className="flex items-start"><Shield className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Område:</strong> Du kan kun reise innenfor din region (Gausdal, Lillehammer, Øyer).</span></li>
              </ul>
              <h3 className="mt-8">Hvordan Bestille?</h3>
              <p>Du må bestille taxi hos transportøren i den kommunen du skal reise FRA. For reiser fra Gausdal, Lillehammer eller Øyer, bestiller du hos oss.</p>
            </div>
            </div>
          </AnimateOnScroll>

          {/* Contact/Info Box */}
          <AnimateOnScroll delay={0.2} animationType="fadeInUpWithRotate">
            <div className="bg-white p-8 rounded-lg shadow-lg h-fit">
              <h3 className="text-2xl font-bold text-primary-2 mb-4">Bestill "Trygt Hjem"</h3>
              <p className="text-gray-700 mb-6">Husk å bestille før fredag kl. 16:00!</p>
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
    </main>
  );
}
