import Image from 'next/image';
import { Phone, Mail, HeartPulse, Clock, ShieldCheck } from 'lucide-react';
import { getImagePath } from '@/lib/utils';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';

export default function PasienttransportPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-80 bg-gray-900">
        <div className="relative w-full h-full">
          <Image
            src={getImagePath("/assets/taxi-image.png")}
            alt="Pasienttransport"
            fill
            className="opacity-70 object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimateOnScroll animationType="zoomIn" duration={1.0}>
            <h1 className="text-5xl md:text-6xl font-bold text-white text-center">Pasienttransport</h1>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 pt-24 pb-16 md:pt-28">
        <div className="grid md:grid-cols-3 gap-12">
          <AnimateOnScroll delay={0.1} animationType="fadeInLeft" duration={0.8} distance={80} className="md:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-primary-2 mb-4">Trygg og Pålitelig Transport</h2>
              <p className="text-lg text-gray-700 mb-6">
                Vi forstår viktigheten av punktlig og komfortabel transport når du skal til nødvendig medisinsk undersøkelse eller behandling. 06565 Taxi er stolt over å ha blitt tildelt ansvaret for pasienttransport i Lillehammer-området av Pasientreiser Sykehuset Innlandet.
              </p>
              <div className="prose lg:prose-xl max-w-none">
                <h3>Hvem kan få dekket reise?</h3>
                <p>Pasienter som av medisinske eller trafikale årsaker ikke kan benytte offentlig transport, kan ha rett til å få dekket deler av reiseutgiftene. Det er din behandler som vurderer og eventuelt rekvirerer transport for deg.</p>
                
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  {[
                    { icon: Clock, bgColor: 'bg-blue-50', textColor: 'text-blue-600', titleColor: 'text-blue-800', descColor: 'text-blue-700', title: 'Punktlighet', desc: 'Vi sørger for at du ankommer din avtale i tide' },
                    { icon: HeartPulse, bgColor: 'bg-green-50', textColor: 'text-green-600', titleColor: 'text-green-800', descColor: 'text-green-700', title: 'Komfort', desc: 'Moderne, rene og komfortable biler' },
                    { icon: ShieldCheck, bgColor: 'bg-purple-50', textColor: 'text-purple-600', titleColor: 'text-purple-800', descColor: 'text-purple-700', title: 'Assistanse', desc: 'Serviceinnstilte sjåfører hjelper deg' },
                  ].map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <AnimateOnScroll 
                        key={index} 
                        delay={index * 0.1 + 0.4} 
                        animationType="bounceIn"
                        duration={0.6}
                      >
                        <div className={`text-center p-4 ${feature.bgColor} rounded-lg`}>
                          <Icon className={`w-8 h-8 ${feature.textColor} mx-auto mb-2`} />
                          <h4 className={`font-semibold ${feature.titleColor}`}>{feature.title}</h4>
                          <p className={`text-sm ${feature.descColor}`}>{feature.desc}</p>
                        </div>
                      </AnimateOnScroll>
                    );
                  })}
                </div>

                <h3>Mer informasjon</h3>
                <p>For detaljerte retningslinjer og informasjon om egenandeler, henviser vi til <a href="https://sykehuset-innlandet.no/behandlinger-og-undersokelser/pasientreiser" target="_blank" rel="noopener noreferrer" className="text-accent-1 hover:underline">Pasientreiser Sykehuset Innlandet sine nettsider</a>.</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Contact/Info Box - Scale in from right */}
          <AnimateOnScroll delay={0.2} animationType="scaleIn" duration={0.8}>
            <div className="bg-white p-8 rounded-lg shadow-lg h-fit">
              <h3 className="text-2xl font-bold text-primary-2 mb-4">Bestilling og Spørsmål</h3>
              <p className="text-gray-700 mb-6">All bestilling av pasientreiser går via Pasientreiser. For andre henvendelser, kontakt oss gjerne.</p>
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