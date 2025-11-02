import React from 'react';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';

export default function BookingPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-8 md:pt-28">
      <AnimateOnScroll>
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-1 mb-2">Bestill Taxi</h1>
          <p className="text-lg text-gray-600">Bestill din neste tur raskt og enkelt.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700">
            Bestillingsfunksjonen er for øyeblikket ikke tilgjengelig i demo-versjonen.
          </p>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
