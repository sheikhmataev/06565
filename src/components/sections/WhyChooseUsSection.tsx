import Image from 'next/image';
import { Clock, ShieldCheck, Car, Users } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-8 h-8 text-accent-1" />,
    title: "Døgnbemannet Sentral",
    description: "Vår driftssentral er betjent 24 timer i døgnet, alle dager i året, for å sikre at du alltid får tak i oss."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent-1" />,
    title: "Erfarne Sjåfører",
    description: "Våre profesjonelle og serviceinnstilte sjåfører har god lokalkunnskap og sørger for en trygg og behagelig reise."
  },
  {
    icon: <Car className="w-8 h-8 text-accent-1" />,
    title: "Variert Bilpark",
    description: "Vi disponerer over 30 biler, inkludert personbiler, minibusser og maxi-taxier for alle typer oppdrag."
  },
  {
    icon: <Users className="w-8 h-8 text-accent-1" />,
    title: "Alle Typer Transport",
    description: "Fra pasientreiser og skolekjøring til sightseeing og pakketransport – vi har en løsning for ethvert behov."
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src="/assets/taxi-image.jpg" 
              alt="En moderne taxi i Lillehammers gater"
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-1 via-transparent to-transparent opacity-70"></div>
          </div>
          {/* Content Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-primary-1 mb-4">Hvorfor Velge 06565 Taxi?</h2>
              <p className="text-lg text-gray-600">
                Din pålitelige transportpartner i Lillehammer, Hafjell, Øyer og Tretten.
              </p>
            </div>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-md">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-2">{feature.title}</h3>
                    <p className="text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
