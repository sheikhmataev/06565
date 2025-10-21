// This function is required for static export of dynamic routes.
// It tells Next.js that there are no params to generate at build time.
export async function generateStaticParams() {
  return [];
}

// This is a dynamic route for individual services
const ServiceDetailPage = ({ params }: { params: { 'service-slug': string } }) => {
  // In a real application, you would fetch service details based on the slug
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center capitalize">
        {params['service-slug'].replace(/-/g, ' ')}
      </h1>
      <p className="text-lg text-center text-gray-600 mt-4">
        Detaljert informasjon om denne tjenesten kommer snart.
      </p>
      <div className="mt-8 max-w-2xl mx-auto prose lg:prose-xl">
        <p>Her vil du finne en fullstendig beskrivelse av tjenesten, inkludert priser, bestillingsinformasjon og andre relevante detaljer.</p>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
