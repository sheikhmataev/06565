'use client';

import { MapPin, ArrowRight, Clock, Shield, Users } from 'lucide-react';
import AnimatedGradientBackground from '../layout/AnimatedGradientBackground';
import ShapeDivider from '../layout/ShapeDivider';
import dynamic from 'next/dynamic';

// Dynamically import Counter3D with SSR disabled
const Counter3D = dynamic(() => import('../3d/Counter3D'), {
  ssr: false,
  loading: () => <span className="text-3xl md:text-4xl font-bold text-accent-2">0</span>,
});

export default function HeroSection() {
  return (
    <section className="relative text-white overflow-hidden">
      <div className="pt-24 pb-20">
        <AnimatedGradientBackground />
        {/* Optional: CSS-based subtle background effects instead of 3D */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-2/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-3/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-1/80 via-primary-1/70 to-primary-2/60 z-10"></div>
        
        <div className="relative z-20 container mx-auto px-4 pt-2 pb-12 md:pt-4 md:pb-16 flex flex-col items-center text-center">
          {/* Enhanced Typography with Better Hierarchy */}
          <div className="mb-4 max-w-5xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[0.9] tracking-tight">
              <span className="block">Trygg og</span>
              <span className="block bg-gradient-to-r from-accent-2 via-accent-3 to-accent-2 bg-clip-text text-transparent">
                effektiv transport
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 font-light">
                i Lillehammer
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto leading-relaxed font-light opacity-90">
              Bestill din neste tur raskt og enkelt. Vi er her for deg døgnet rundt med moderne biler og profesjonelle sjåfører.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 text-accent-2" />
              <span>24/7 tilgjengelig</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="w-4 h-4 text-accent-2" />
              <span>Trygg transport</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="w-4 h-4 text-accent-2" />
              <span>Erfarne sjåfører</span>
            </div>
          </div>
          
          {/* Enhanced Booking Form */}
          <div className="bg-white/15 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-5xl border border-white/25 hover:bg-white/20 transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {/* From */}
              <div className="relative group">
                <label htmlFor="from" className="block text-sm font-semibold text-accent-3 mb-2 tracking-wide uppercase">Fra</label>
                <div className="flex items-center bg-white/15 rounded-xl p-4 transition-all duration-300 group-hover:bg-white/25 focus-within:bg-white/25 focus-within:ring-2 focus-within:ring-accent-2 focus-within:ring-offset-2 focus-within:ring-offset-transparent">
                  <MapPin className="text-accent-2 mr-3 w-5 h-5" />
                  <input 
                    type="text" 
                    id="from" 
                    placeholder="Hvor skal vi hente deg?" 
                    className="bg-transparent w-full focus:outline-none placeholder-gray-300 text-lg font-medium" 
                  />
                </div>
              </div>
              {/* To */}
              <div className="relative group">
                <label htmlFor="to" className="block text-sm font-semibold text-accent-3 mb-2 tracking-wide uppercase">Til</label>
                <div className="flex items-center bg-white/15 rounded-xl p-4 transition-all duration-300 group-hover:bg-white/25 focus-within:bg-white/25 focus-within:ring-2 focus-within:ring-accent-2 focus-within:ring-offset-2 focus-within:ring-offset-transparent">
                  <MapPin className="text-accent-2 mr-3 w-5 h-5" />
                  <input 
                    type="text" 
                    id="to" 
                    placeholder="Hvor skal vi kjøre deg?" 
                    className="bg-transparent w-full focus:outline-none placeholder-gray-300 text-lg font-medium" 
                  />
                </div>
              </div>
              {/* Enhanced Book Now Button */}
              <div className="md:self-end">
                <button className="group w-full bg-gradient-to-r from-accent-2 via-accent-3 to-accent-2 text-primary-1 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-accent-2/25 flex items-center justify-center gap-2 relative overflow-hidden">
                  <span className="relative z-10">Bestill nå</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats with 3D Counter Animation */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center">
                <Counter3D value={40} suffix="+" />
              </div>
              <div className="text-sm md:text-base opacity-80">Moderne biler</div>
            </div>
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center">
                <span className="text-3xl md:text-4xl font-bold text-accent-2">24/7</span>
              </div>
              <div className="text-sm md:text-base opacity-80">Tilgjengelighet</div>
            </div>
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center">
                <Counter3D value={25} suffix="+" />
              </div>
              <div className="text-sm md:text-base opacity-80">Års erfaring</div>
            </div>
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center">
                <Counter3D value={100} suffix="%" />
              </div>
              <div className="text-sm md:text-base opacity-80">Trygg transport</div>
            </div>
          </div>
        </div>
        <ShapeDivider color="text-gray-50" />
      </div>
    </section>
  );
}
