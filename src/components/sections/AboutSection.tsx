import Image from 'next/image';
import { getImagePath } from '@/lib/utils';
import AnimateOnScroll from '../animations/AnimateOnScroll';
import { Shield, Clock, Users, MapPin } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimateOnScroll>
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
          {/* Content */}
          <AnimateOnScroll animationType="fadeInUp" className="order-2 lg:order-1">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  06565 er en døgnbemannet driftssentral for drosjene i Lillehammer, Hafjell, Øyer og Tretten. Vi er stolte av å tilby et meget stort og variert tilbud av persontransport, og fungerer også som bookingsentral for Øyer og Tretten Drosjesentral.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Vårt mål er å levere en rask, trygg og tilgjengelig transporttjeneste for alle våre kunder, 24 timer i døgnet, hele året. Enten du trenger en rask tur i byen, transport til flyplassen, eller har spesielle behov, er vi her for å hjelpe.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50">
                  <div className="bg-accent-1/10 p-2 rounded-lg">
                    <Shield className="w-6 h-6 text-accent-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-1 mb-1">Trygg Transport</h3>
                    <p className="text-sm text-gray-600">Godkjente sjåfører og moderne biler</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50">
                  <div className="bg-accent-2/10 p-2 rounded-lg">
                    <Clock className="w-6 h-6 text-accent-2" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-1 mb-1">24/7 Service</h3>
                    <p className="text-sm text-gray-600">Alltid tilgjengelig når du trenger oss</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50">
                  <div className="bg-accent-3/10 p-2 rounded-lg">
                    <Users className="w-6 h-6 text-accent-3" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-1 mb-1">Erfarne Sjåfører</h3>
                    <p className="text-sm text-gray-600">Profesjonelle og serviceinnstilte</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50">
                  <div className="bg-primary-1/10 p-2 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-1 mb-1">Lokal Kunnskap</h3>
                    <p className="text-sm text-gray-600">Kjenner området som ingen andre</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Enhanced Image */}
          <AnimateOnScroll delay={0.2} animationType="fadeInUp" className="order-1 lg:order-2">
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
