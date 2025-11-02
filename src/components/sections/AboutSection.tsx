import Image from 'next/image';
import { getImagePath } from '@/lib/utils';
import AnimateOnScroll from '../animations/AnimateOnScroll';
import { Shield, Clock, Users, MapPin } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header - Zoom in from center */}
        <AnimateOnScroll animationType="zoomIn" duration={0.9}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-primary-1 mb-6 leading-tight">
              Om <span className="bg-gradient-to-r from-accent-2 to-accent-3 bg-clip-text text-transparent">06565 Taxi</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Din pålitelige transportpartner i Lillehammer og omegn siden 2009
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content - Fade in from left */}
          <AnimateOnScroll animationType="fadeInLeft" duration={0.8} className="order-2 lg:order-1" delay={0.1}>
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  06565 er en døgnbemannet driftssentral for drosjene i Lillehammer, Hafjell, Øyer og Tretten. Vi er stolte av å tilby et meget stort og variert tilbud av persontransport, og fungerer også som bookingsentral for Øyer og Tretten Drosjesentral.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Vårt mål er å levere en rask, trygg og tilgjengelig transporttjeneste for alle våre kunder, 24 timer i døgnet, hele året. Enten du trenger en rask tur i byen, transport til flyplassen, eller har spesielle behov, er vi her for å hjelpe.
                </p>
              </div>

              {/* Key Features - Staggered bounce in */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Shield, bgColor: 'bg-accent-1/10', textColor: 'text-accent-1', title: 'Trygg Transport', desc: 'Godkjente sjåfører og moderne biler' },
                  { icon: Clock, bgColor: 'bg-accent-2/10', textColor: 'text-accent-2', title: '24/7 Service', desc: 'Alltid tilgjengelig når du trenger oss' },
                  { icon: Users, bgColor: 'bg-accent-3/10', textColor: 'text-accent-3', title: 'Erfarne Sjåfører', desc: 'Profesjonelle og serviceinnstilte' },
                  { icon: MapPin, bgColor: 'bg-primary-1/10', textColor: 'text-primary-1', title: 'Lokal Kunnskap', desc: 'Kjenner området som ingen andre' },
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <AnimateOnScroll 
                      key={index} 
                      delay={index * 0.1 + 0.3} 
                      animationType="bounceIn"
                      duration={0.6}
                    >
                <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50">
                        <div className={`${feature.bgColor} p-2 rounded-lg`}>
                          <Icon className={`w-6 h-6 ${feature.textColor}`} />
                  </div>
                  <div>
                          <h3 className="font-semibold text-primary-1 mb-1">{feature.title}</h3>
                          <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </div>
                    </AnimateOnScroll>
                  );
                })}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Enhanced Image - Blur in from right */}
          <AnimateOnScroll delay={0.2} animationType="blurIn" duration={1.0} className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-2/20 to-accent-3/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <Image 
                  src={getImagePath("/assets/taxi-image.png")}
                  alt="En av våre moderne taxier" 
                  width={600} 
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
