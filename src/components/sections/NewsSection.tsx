import BlogCard from "../content/BlogCard";
import AnimateOnScroll from "../animations/AnimateOnScroll";

const posts = [
  {
    image: "/assets/news-1.jpg",
    category: "Nyheter",
    date: "18. oktober 2025",
    title: "Nye El-taxier i Lillehammer",
    excerpt: "Vi er stolte av å kunngjøre at vi har lagt til fem nye, helelektriske taxier i vår bilpark. Dette er et viktig skritt i vår forpliktelse til en grønnere fremtid.",
  },
  {
    image: "/assets/news-2.jpg",
    category: "Lokalt",
    date: "15. oktober 2025",
    title: "Samarbeid med den lokale skifestivalen",
    excerpt: "Vi er den offisielle transportpartneren for årets skifestival. Les mer om våre spesialtilbud for deltakere og publikum.",
  },
  {
    image: "/assets/news-3.jpg",
    category: "Teknologi",
    date: "12. oktober 2025",
    title: "Oppdatert app med nye funksjoner",
    excerpt: "Vår mobilapp har blitt oppdatert med sanntidssporing og enklere betalingsløsninger for en enda bedre brukeropplevelse.",
  },
];

export default function NewsSection() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-1">Siste Nytt</h2>
            <p className="text-lg text-gray-600 mt-2">Hold deg oppdatert på hva som skjer hos oss.</p>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1}>
              <BlogCard
                image={post.image}
                category={post.category}
                date={post.date}
                title={post.title}
                excerpt={post.excerpt}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
