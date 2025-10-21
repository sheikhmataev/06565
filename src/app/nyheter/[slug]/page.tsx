// @ts-nocheck
// This function is required for static export of dynamic routes.
// It tells Next.js that there are no params to generate at build time.
// Adding a comment to force a cache refresh.
export async function generateStaticParams() {
  return [];
}

// This is a dynamic route, so we can access the slug from the params
const NyhetArtikkelPage = ({ params }: { params: { slug: string } }) => {
  // In a real application, you would fetch the article content based on the slug
  // For now, we'll just display a placeholder.
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center">Nyhetsartikkel</h1>
      <p className="text-lg text-center text-gray-600 mt-4">
        Artikkelen med tittelen "{params.slug}" lastes inn...
      </p>
      {/* Placeholder for article content */}
      <div className="mt-8 max-w-2xl mx-auto">
        <div className="prose lg:prose-xl">
          <p>Dette er et eksempel på innhold for en nyhetsartikkel. Her vil den fulle teksten og eventuelle bilder for nyheten vises.</p>
        </div>
      </div>
    </div>
  );
};

export default NyhetArtikkelPage;
