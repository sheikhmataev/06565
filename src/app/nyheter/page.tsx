import BlogCard from '@/components/content/BlogCard';

// This data would typically come from a CMS
const posts = [
  {
    image: "/assets/news-1.jpeg",
    category: "Nyheter",
    date: "18. oktober 2025",
    title: "Nyeste taxisjåfør i Øyer",
    excerpt: "Vi er stolte av å kunngjøre at vi har fått med Malik R. Dagijev som vår nyeste sjåfør i Øyer. Med bare 6 prikker på rullebladet har han massse igjen å gå på!",
  },
  {
    image: "/assets/news-2.jpeg",
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
  // Add more posts here if needed
];

export default function NyheterPage() {
  return (
    <main className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-1">Nyhetsarkiv</h1>
          <p className="text-lg text-gray-600 mt-2">Alle de siste oppdateringene fra 06565 Taxi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard
              key={index}
              image={post.image}
              category={post.category}
              date={post.date}
              title={post.title}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
