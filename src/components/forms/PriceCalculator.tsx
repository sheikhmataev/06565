'use client';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';

export default function PriceCalculator() {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-primary-2 mb-2">Priskalkulator</h2>
      <p className="text-gray-600 mb-6">Få et prisestimat for din reise. Endelig pris kan variere.</p>
      
      <form className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="from" className="block text-sm font-medium text-gray-700">Fra</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input id="from" placeholder="Hentested" className="pl-10" />
          </div>
        </div>
        
        <div className="space-y-1">
          <label htmlFor="to" className="block text-sm font-medium text-gray-700">Til</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input id="to" placeholder="Destinasjon" className="pl-10" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="space-y-1">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Dato</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input id="date" type="date" className="pl-10" />
            </div>
          </div>
          <div className="space-y-1">
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Tid</label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input id="time" type="time" className="pl-10" />
            </div>
          </div>
        </div>

        <div className="pt-4">
          <Button type="submit" className="w-full flex items-center justify-center group">
            Beregn Pris
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </form>

      <div className="mt-8 text-center bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Estimert Pris</h3>
        <p className="text-4xl font-bold text-primary-1">--,-</p>
        <p className="text-xs text-gray-500 mt-2">Prisen er et estimat og kan variere.</p>
      </div>
    </div>
  );
}