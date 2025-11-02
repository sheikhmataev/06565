import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getImagePath } from '@/lib/utils';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';

const HoldeplasserPage = () => {
  // Helper function to create Google Maps URL with coordinates
  const getGoogleMapsUrl = (lat: number, lng: number) => {
    return `https://maps.google.com/?q=${lat},${lng}`;
  };

  const holdeplasser = [
    { 
      name: 'Jernbanestasjonen', 
      note: 'Hovedholdeplass. Forhåndsbestilte biler hentes ikke her, men på korttidsparkeringen på den andre siden av stasjonen.',
      image: '/assets/Holdeplass_Jernbanen.jpg',
      type: 'Hovedholdeplass',
      icon: Navigation,
      lat: 61.11433955214276,
      lng: 10.461833502645797
    },
    { 
      name: 'Lilletorget', 
      note: 'Sentralt plassert holdeplass i hjertet av Lillehammer sentrum.',
      image: '/assets/taxicars.png',
      type: 'Sentral holdeplass',
      icon: MapPin,
      lat: 61.11796624543698,
      lng: 10.464684457087074
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 pt-24 pb-20 md:pt-28">
        <AnimateOnScroll animationType="fadeInDown" duration={0.8} distance={20}>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-1 mb-3">Våre Holdeplasser</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Finne oss på disse sentrale stedene i Lillehammer. Bestill på forhånd eller ring oss når du trenger oss.
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {holdeplasser.map((plass, index) => {
            const IconComponent = plass.icon;
            return (
              <AnimateOnScroll 
                key={plass.name} 
                delay={index * 0.1} 
                animationType="fadeInUp"
                duration={0.6}
                distance={40}
              >
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-gray-100 h-full flex flex-col cursor-pointer">
                  {/* Image Section with Overlay */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image 
                        src={getImagePath(plass.image)}
                        alt={`Bilde av ${plass.name}`}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {/* Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-primary-1 shadow-sm">
                        <IconComponent className="w-3.5 h-3.5 text-accent-2" />
                        {plass.type}
                      </span>
                    </div>

                    {/* Location Name Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-lg">
                        {plass.name}
                      </h2>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-2/20 to-accent-3/20 flex items-center justify-center group-hover:from-accent-2/30 group-hover:to-accent-3/30 transition-all duration-300">
                          <IconComponent className="w-5 h-5 text-accent-2" />
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed flex-1 group-hover:text-gray-700 transition-colors duration-300">
                        {plass.note}
                      </p>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <Link 
                            href="/bestill" 
                            className="text-sm font-semibold text-primary-1 hover:text-accent-2 transition-colors duration-300 flex items-center gap-2 group/link"
                          >
                            Bestill taxi her
                            <span className="text-accent-2 group-hover/link:translate-x-1 transition-transform duration-300 inline-block">→</span>
                          </Link>
                          <div className="text-xs text-gray-400 font-medium">
                            Ring 06565
                          </div>
                        </div>
                        {/* Google Maps Link */}
                        <a
                          href={getGoogleMapsUrl(plass.lat, plass.lng)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-accent-2/10 to-accent-3/10 hover:from-accent-2/20 hover:to-accent-3/20 rounded-lg transition-all duration-300 group/maps border border-accent-2/20 hover:border-accent-2/40"
                        >
                          <MapPin className="w-4 h-4 text-accent-2 group-hover/maps:scale-110 transition-transform duration-300" />
                          <span className="text-sm font-semibold text-primary-1 group-hover/maps:text-accent-2 transition-colors duration-300">
                            Åpne i Google Maps
                          </span>
                          <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover/maps:text-accent-2 group-hover/maps:translate-x-0.5 transition-all duration-300" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Subtle border glow on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent-2/20 transition-all duration-500 pointer-events-none"></div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HoldeplasserPage;
