import Image from 'next/image';
import { Phone, Mail, Map, Users } from 'lucide-react';

export default function SightseeingPage() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-80 bg-gray-900">
        <div className="relative w-full h-full">
          <Image
            src="/assets/sightseeing-hero.jpg"
            alt="Sightseeing i Lillehammer"
            fill
            className="opacity-70 object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center">Sightseeing i Lillehammer</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary-2 mb-4">Opplev Lillehammer med en Lokal Guide</h2>
            <p className="text-lg text-gray-700 mb-6">
              Ønsker du å oppleve det beste av Lillehammer og omegn? Våre sightseeingturer gir deg en unik og personlig opplevelse. Våre erfarne sjåfører er ikke bare eksperter på veiene, men også kunnskapsrike guider som kan vise deg både kjente attraksjoner og skjulte perler.
            </p>
            <div className="prose lg:prose-xl max-w-none">
              <h3>Fleksibelt og Individuelt</h3>
              <p>I motsetning til faste bussruter, tilbyr våre sightseeingturer full fleksibilitet. Du bestemmer tempoet og hvilke steder du ønsker å besøke. Vi skreddersyr turen etter dine interesser, enten du vil se OL-anleggene, Maihaugen, eller bare nyte den vakre naturen.</p>
              
              <div className="flex items-start my-6">
                <Users className="w-10 h-10 text-accent-1 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4>Moderne Minibusser</h4>
                  <p>Vi benytter våre topp moderne maxi-taxier og minibusser, som sikrer en komfortabel reise for både små og store grupper.</p>
                </div>
              </div>

              <div className="flex items-start">
                <Map className="w-10 h-10 text-accent-1 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4>Kjentmannsprøve</h4>
                  <p>Alle våre sjåfører har bestått kjentmannsprøve og behersker både norsk og engelsk, slik at du er garantert en informativ og hyggelig tur.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact/Info Box */}
          <div className="bg-white p-8 rounded-lg shadow-lg h-fit">
            <h3 className="text-2xl font-bold text-primary-2 mb-4">Planlegg din Tur</h3>
            <p className="text-gray-700 mb-6">Ring oss for å diskutere dine ønsker og få et pristilbud for en skreddersydd sightseeingtur.</p>
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
