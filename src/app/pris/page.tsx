import PriceCalculator from '@/components/forms/PriceCalculator';
import PricingTable from '@/components/content/PricingTable';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';

export default function PrisPage() {
  return (
    <main className="bg-gray-50">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-5 gap-8 xl:gap-12">
          {/* Price Calculator */}
          <AnimateOnScroll delay={0.1} animationType="fadeInUpWithRotate" className="lg:col-span-3">
            <PriceCalculator />
          </AnimateOnScroll>

          {/* Pricing Table */}
          <AnimateOnScroll delay={0.2} animationType="fadeInUpWithRotate" className="lg:col-span-2">
            <PricingTable />
          </AnimateOnScroll>
        </div>
      </div>
    </main>
  );
}
