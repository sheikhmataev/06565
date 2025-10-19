'use client';

import { MapPin } from 'lucide-react';
import AnimatedGradientBackground from '../layout/AnimatedGradientBackground';
import ShapeDivider from '../layout/ShapeDivider';

export default function HeroSection() {
  return (
    <section className="relative text-white overflow-hidden">
      <div className="pt-24 pb-20">
        <AnimatedGradientBackground />
        <div className="absolute inset-0 bg-primary-1/70"></div>
        
        <div className="relative container mx-auto px-4 pt-16 pb-24 md:pt-20 md:pb-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-shadow-lg">
            Trygg og effektiv transport i <span className="text-accent-3">Lillehammer</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-shadow-md">
            Bestill din neste tur raskt og enkelt. Vi er her for deg døgnet rundt.
          </p>
          
          <div className="bg-white/20 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-4xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {/* From */}
              <div className="relative">
                <label htmlFor="from" className="block text-sm font-medium text-accent-3 mb-1">Fra</label>
                <div className="flex items-center bg-white/10 rounded-lg p-3 transition-all duration-300 focus-within:bg-white/20 focus-within:ring-2 focus-within:ring-accent-2">
                  <MapPin className="text-accent-2 mr-2" />
                  <input type="text" id="from" placeholder="Hentested" className="bg-transparent w-full focus:outline-none placeholder-gray-300" />
                </div>
              </div>
              {/* To */}
              <div className="relative">
                <label htmlFor="to" className="block text-sm font-medium text-accent-3 mb-1">Til</label>
                <div className="flex items-center bg-white/10 rounded-lg p-3 transition-all duration-300 focus-within:bg-white/20 focus-within:ring-2 focus-within:ring-accent-2">
                  <MapPin className="text-accent-2 mr-2" />
                  <input type="text" id="to" placeholder="Destinasjon" className="bg-transparent w-full focus:outline-none placeholder-gray-300" />
                </div>
              </div>
              {/* Book Now Button */}
              <div className="md:self-end">
                <button className="w-full bg-gradient-to-r from-accent-2 to-accent-3 text-primary-1 font-bold py-3 px-6 rounded-lg text-lg transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg">
                  Bestill nå
                </button>
              </div>
            </div>
          </div>
        </div>
        <ShapeDivider color="text-gray-50" />
      </div>
    </section>
  );
}
