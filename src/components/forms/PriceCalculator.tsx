'use client';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { MapPin, Calendar, Clock } from 'lucide-react';

export default function PriceCalculator() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-primary-2 mb-6">Priskalkulator</h2>
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="from" className="block text-sm font-medium text-gray-700">Fra</label>
            <div className="relative mt-1">
              <Input id="from" placeholder="Hentested" className="pl-10" />
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
          <div>
            <label htmlFor="to" className="block text-sm font-medium text-gray-700">Til</label>
            <div className="relative mt-1">
              <Input id="to" placeholder="Destinasjon" className="pl-10" />
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Dato</label>
            <div className="relative mt-1">
              <Input id="date" type="date" className="pl-10" />
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Tid</label>
            <div className="relative mt-1">
              <Input id="time" type="time" className="pl-10" />
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
        <Button type="submit" className="w-full !mt-8">Beregn Pris</Button>
      </form>
      <div className="mt-8 text-center bg-gray-50 p-6 rounded-lg">
        <p className="text-gray-600">Beregnet pris vil vises her.</p>
      </div>
    </div>
  );
}