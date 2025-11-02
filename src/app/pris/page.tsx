import PriceCalculator from '@/components/forms/PriceCalculator';
import PricingTable from '@/components/content/PricingTable';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';

export default function PrisPage() {
  return (
    <main className="bg-gray-50">
      <div className="container mx-auto px-4 pt-24 pb-12 md:pt-28 md:pb-20">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-1">Priser</h1>
            <p className="text-lg text-gray-600 mt-2">Beregn prisen på din neste tur med vår priskalkulator.</p>
          </div>
        </AnimateOnScroll>
        <div className="grid lg:grid-cols-5 gap-8 xl:gap-12">
          {/* Price Calculator - Slide in from left */}
          <AnimateOnScroll delay={0.1} animationType="slideInLeft" duration={0.8} distance={100} className="lg:col-span-3">
            <PriceCalculator />
          </AnimateOnScroll>

          {/* Pricing Table - Slide in from right */}
          <AnimateOnScroll delay={0.2} animationType="slideInRight" duration={0.8} distance={100} className="lg:col-span-2">
            <PricingTable />
          </AnimateOnScroll>
        </div>
      </div>
    </main>
  );
}
