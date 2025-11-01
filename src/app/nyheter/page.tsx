import BlogCard from '@/components/content/BlogCard';
import { newsPosts } from '@/data/news';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';

export default function NyheterPage() {
  return (
    <main className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <AnimateOnScroll animationType="zoomIn" duration={0.9}>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-1">Nyhetsarkiv</h1>
            <p className="text-lg text-gray-600 mt-2">Alle de siste oppdateringene fra 06565 Taxi.</p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsPosts.map((post, index) => {
            // Stagger different animation types for variety
            const animations: any[] = ['flipIn', 'scaleIn', 'zoomIn', 'slideInLeft', 'fadeInRight', 'blurIn'];
            return (
              <AnimateOnScroll 
                key={index} 
                delay={index * 0.12} 
                animationType={animations[index % animations.length]}
                duration={0.7}
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
