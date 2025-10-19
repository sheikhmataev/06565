import PriceCalculator from '@/components/forms/PriceCalculator';
import PricingTable from '@/components/content/PricingTable';

export default function PrisPage() {
  return (
    <main className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-1">Priser og Priskalkulator</h1>
          <p className="text-lg text-gray-600 mt-2">Se våre faste priser eller beregn et estimat for din tur.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <PricingTable />
          </div>
          <div className="lg:col-span-2">
            <PriceCalculator />
          </div>
        </div>
      </div>
    </main>
  );
}
