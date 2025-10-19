import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-primary-1 mb-6">Om 06565 Taxi</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                06565 er en døgnbemannet driftssentral for drosjene i Lillehammer, Hafjell, Øyer og Tretten. Vi er stolte av å tilby et meget stort og variert tilbud av persontransport, og fungerer også som bookingsentral for Øyer og Tretten Drosjesentral.
              </p>
              <p>
                Vårt mål er å levere en rask, trygg og tilgjengelig transporttjeneste for alle våre kunder, 24 timer i døgnet, hele året. Enten du trenger en rask tur i byen, transport til flyplassen, eller har spesielle behov, er vi her for å hjelpe.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-2xl">
            <Image 
              src="/assets/taxi-image.jpg" 
              alt="En av våre moderne taxier" 
              width={600} 
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
