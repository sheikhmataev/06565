import { MapPin, Calendar, Clock } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-2 via-primary-3 to-accent-1 opacity-90"></div>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/background.jpg')" }}></div>
      
      <div className="relative container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-shadow-lg">
          Trygg og effektiv transport i <span className="text-accent-3">Lillehammer</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-shadow-md">
          Bestill din neste tur raskt og enkelt. Vi er her for deg døgnet rundt.
        </p>
        
        <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {/* From */}
            <div className="relative">
              <label htmlFor="from" className="block text-sm font-medium text-accent-3 mb-1">Fra</label>
              <div className="flex items-center bg-white/20 rounded-lg p-3">
                <MapPin className="text-accent-2 mr-2" />
                <input type="text" id="from" placeholder="Hentested" className="bg-transparent w-full focus:outline-none placeholder-gray-300" />
              </div>
            </div>
            {/* To */}
            <div className="relative">
              <label htmlFor="to" className="block text-sm font-medium text-accent-3 mb-1">Til</label>
              <div className="flex items-center bg-white/20 rounded-lg p-3">
                <MapPin className="text-accent-2 mr-2" />
                <input type="text" id="to" placeholder="Destinasjon" className="bg-transparent w-full focus:outline-none placeholder-gray-300" />
              </div>
            </div>
            {/* Book Now Button */}
            <div className="md:self-end">
              <button className="w-full bg-accent-2 hover:bg-yellow-400 text-primary-1 font-bold py-3 px-6 rounded-lg text-lg transition-transform duration-300 ease-in-out hover:scale-105">
                Bestill nå
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
