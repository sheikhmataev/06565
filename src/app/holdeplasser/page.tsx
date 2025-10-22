import { MapPin } from 'lucide-react';
import Image from 'next/image';
import { getImagePath } from '@/lib/utils';

const HoldeplasserPage = () => {
  const holdeplasser = [
    { 
      name: 'Jernbanestasjonen', 
      note: 'Hovedholdeplass. Forhåndsbestilte biler hentes ikke her, men på korttidsparkeringen på den andre siden av stasjonen.',
      image: '/assets/Holdeplass_Jernbanen.jpg' 
    },
    { 
      name: 'Lilletorget', 
      note: 'Sentralt plassert holdeplass i hjertet av Lillehammer sentrum.',
      image: '/assets/taxicars.png'
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary-1 mb-4">Våre Holdeplasser</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Her finner du en oversikt over våre faste holdeplasser. For grupper eller spesialbehov, vennligst forhåndsbestill på 
            telefon <a href="tel:06565" className="text-accent-2 hover:underline font-semibold">06565</a>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {holdeplasser.map((plass) => (
            <div key={plass.name} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-60 w-full">
                <Image 
                  src={getImagePath(plass.image)}
                  alt={`Bilde av ${plass.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-6 w-6 text-accent-1 mr-3" />
                  <h2 className="text-2xl font-bold text-primary-2">{plass.name}</h2>
                </div>
                {plass.note && <p className="text-gray-700">{plass.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoldeplasserPage;
