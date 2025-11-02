import AnimateOnScroll from '@/components/animations/AnimateOnScroll';

const BilparkPage = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16 md:pt-28">
      <AnimateOnScroll animationType="zoomIn" duration={0.9}>
        <h1 className="text-4xl font-bold text-center">Vår Bilpark</h1>
        <p className="text-lg text-center text-gray-600 mt-2">
          Informasjon om vår bilpark kommer snart.
        </p>
      </AnimateOnScroll>
    </div>
  );
};

export default BilparkPage;
