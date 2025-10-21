import React from 'react';

export default function AvailabilityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tilgjengelighet</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700">
          Vår tjeneste er tilgjengelig døgnet rundt, alle dager i året.
        </p>
        <p className="mt-4 text-gray-700">
          Kontakt oss for å bestille transport eller spørre om tilgjengelighet for bestemte tider.
        </p>
      </div>
    </div>
  );
}
