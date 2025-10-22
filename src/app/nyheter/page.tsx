import BlogCard from '@/components/content/BlogCard';
import { newsPosts } from '@/data/news';

export default function NyheterPage() {
  return (
    <main className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-1">Nyhetsarkiv</h1>
          <p className="text-lg text-gray-600 mt-2">Alle de siste oppdateringene fra 06565 Taxi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsPosts.map((post, index) => (
            <div key={index} className="w-full">
              <BlogCard
                image={post.image}
                title={post.title}
                excerpt={post.excerpt}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
