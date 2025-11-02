import AnimateOnScroll from '@/components/animations/AnimateOnScroll';

const TilgjengelighetPage = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16 md:pt-28">
      <AnimateOnScroll animationType="blurIn" duration={1.0}>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-1 mb-2">Tilgjengelighetserklæring</h1>
          <p className="text-lg text-gray-600">
          Informasjon om tilgjengelighet kommer snart.
        </p>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default TilgjengelighetPage;
