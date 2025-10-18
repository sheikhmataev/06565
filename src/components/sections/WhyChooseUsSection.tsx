import Image from 'next/image';
import { Clock, ShieldCheck, Car, Users } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-8 h-8 text-accent-1" />,
    title: "Alltid Tilgjengelig",
    description: "Vår sentral er døgnbemannet, 365 dager i året. Vi er alltid klare til å ta deg dit du skal."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent-1" />,
    title: "Trygghet og Komfort",
    description: "Våre erfarne og serviceinnstilte sjåfører sørger for at du får en trygg og behagelig reise."
  },
  {
    icon: <Car className="w-8 h-8 text-accent-1" />,
    title: "Moderne Bilpark",
    description: "Vi har en stor og variert bilpark som dekker alle behov, fra personbiler til minibusser."
  },
  {
    icon: <Users className="w-8 h-8 text-accent-1" />,
    title: "For Alle Anledninger",
    description: "Enten det er flyplasstransport, bykjøring eller spesielle arrangementer, har vi løsningen."
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
              src="/assets/taxi-image.jpg" // Placeholder image
              alt="En moderne taxi i Lillehammers gater"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-1 via-transparent to-transparent opacity-70"></div>
          </div>
          {/* Content Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-primary-1 mb-4">Hvorfor Velge Oss?</h2>
              <p className="text-lg text-gray-600">
                Vi er dedikert til å gi deg den beste taxi-opplevelsen i Lillehammer-regionen.
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
