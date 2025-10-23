import AnimateOnScroll from '@/components/animations/AnimateOnScroll';

const BilparkPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <AnimateOnScroll>
        <h1 className="text-4xl font-bold text-center">Vår Bilpark</h1>
        <p className="text-lg text-center text-gray-600 mt-2">
          Informasjon om vår bilpark kommer snart.
        </p>
      </AnimateOnScroll>
    </div>
  );
};

export default BilparkPage;
