import Image from 'next/image';
import { Phone, Mail, Map, Users, Camera, Star } from 'lucide-react';
import { getImagePath } from '@/lib/utils';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';

export default function SightseeingPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-80 bg-gray-900">
        <div className="relative w-full h-full">
          <Image
            src={getImagePath("/assets/skibladner.png")}
            alt="Sightseeing i Lillehammer"
            fill
            className="opacity-70 object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimateOnScroll animationType="blurIn" duration={1.0}>
            <h1 className="text-5xl md:text-6xl font-bold text-white text-center">Sightseeing i Lillehammer</h1>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 pt-24 pb-16 md:pt-28">
        <div className="grid md:grid-cols-3 gap-12">
          <AnimateOnScroll delay={0.1} animationType="sweepIn" duration={0.8} className="md:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-primary-2 mb-4">Opplev Lillehammer med en Lokal Guide</h2>
              <p className="text-lg text-gray-700 mb-6">
                Ønsker du å oppleve det beste av Lillehammer og omegn? Våre sightseeingturer gir deg en unik og personlig opplevelse. Våre erfarne sjåfører er ikke bare eksperter på veiene, men også kunnskapsrike guider som kan vise deg både kjente attraksjoner og skjulte perler.
              </p>
              <div className="prose lg:prose-xl max-w-none">
                <h3>Fleksibelt og Individuelt</h3>
                <p>I motsetning til faste bussruter, tilbyr våre sightseeingturer full fleksibilitet. Du bestemmer tempoet og hvilke steder du ønsker å besøke. Vi skreddersyr turen etter dine interesser, enten du vil se OL-anleggene, Maihaugen, eller bare nyte den vakre naturen.</p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  {[
                    { icon: Users, bgColor: 'bg-blue-50', textColor: 'text-blue-600', titleColor: 'text-blue-800', descColor: 'text-blue-700', title: 'Moderne Minibusser', desc: 'Vi benytter våre topp moderne maxi-taxier og minibusser, som sikrer en komfortabel reise for både små og store grupper.' },
                    { icon: Map, bgColor: 'bg-green-50', textColor: 'text-green-600', titleColor: 'text-green-800', descColor: 'text-green-700', title: 'Kjentmannsprøve', desc: 'Alle våre sjåfører har bestått kjentmannsprøve og behersker både norsk og engelsk, slik at du er garantert en informativ og hyggelig tur.' },
                  ].map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <AnimateOnScroll 
                        key={index} 
                        delay={index * 0.15 + 0.4} 
                        animationType={index === 0 ? 'slideInLeft' : 'slideInRight'}
                        duration={0.7}
                      >
                        <div className={`p-6 ${feature.bgColor} rounded-lg`}>
                          <Icon className={`w-8 h-8 ${feature.textColor} mb-3`} />
                          <h4 className={`font-semibold ${feature.titleColor} mb-2`}>{feature.title}</h4>
                          <p className={`text-sm ${feature.descColor}`}>{feature.desc}</p>
                  </div>
                      </AnimateOnScroll>
                    );
                  })}
                </div>

                <h3>Populære Destinasjoner</h3>
                <ul className="grid grid-cols-2 gap-x-4">
                  <li>OL-anleggene</li>
                  <li>Maihaugen</li>
                  <li>Hunderfossen Familiepark</li>
                  <li>Lysgårdsbakken</li>
                  <li>Skibladner</li>
                  <li>Norges Olympiske Museum</li>
                </ul>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Contact/Info Box - Fade in from right */}
          <AnimateOnScroll delay={0.2} animationType="fadeInRight" duration={0.8} distance={60}>
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
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}