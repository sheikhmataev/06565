import BlogCard from '@/components/content/BlogCard';
import { newsPosts } from '@/data/news';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';

export default function NyheterPage() {
  return (
    <main className="bg-gray-50">
      <div className="container mx-auto px-4 pt-24 pb-16 md:pt-28">
        <AnimateOnScroll animationType="fadeInDown" duration={0.8} distance={20}>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-1 mb-3">Nyhetsarkiv</h1>
            <p className="text-lg text-gray-600">Alle de siste oppdateringene fra 06565 Taxi.</p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsPosts.map((post, index) => {
            // Professional, consistent fade-in with subtle stagger
            return (
              <AnimateOnScroll 
                key={index} 
                delay={index * 0.08} 
                animationType="fadeInUp"
                duration={0.6}
                distance={30}
              >
                <div className="w-full">
                  <BlogCard
                    image={post.image}
                    title={post.title}
                    excerpt={post.excerpt}
                  />
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </main>
  );
}
