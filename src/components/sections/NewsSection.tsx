import BlogCard from "../content/BlogCard";
import AnimateOnScroll from "../animations/AnimateOnScroll";
import { newsPosts } from "@/data/news";

export default function NewsSection() {
  // Show the 3 most recent posts (same as in Nyhetsarkiv)
  const recentPosts = newsPosts.slice(0, 3);
  return (
    <section className="scroll-snap-section bg-white py-20">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animationType="fadeInDown" duration={0.8}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-1">Siste Nytt</h2>
            <p className="text-lg text-gray-600 mt-2">Hold deg oppdatert på hva som skjer hos oss.</p>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => {
            // Alternating animations for visual interest
            const animations: any[] = ['flipIn', 'scaleIn', 'zoomIn'];
            return (
              <AnimateOnScroll 
                key={index} 
                delay={index * 0.15} 
                animationType={animations[index % 3]}
                duration={0.7}
              >
                <BlogCard
                  image={post.image}
                  title={post.title}
                  excerpt={post.excerpt}
                />
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
