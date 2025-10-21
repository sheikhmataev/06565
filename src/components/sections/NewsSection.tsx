import BlogCard from "../content/BlogCard";
import AnimateOnScroll from "../animations/AnimateOnScroll";

const recentPosts = [
  {
    imageUrl: "/assets/news-1.jpeg",
    title: "Viktig Informasjon om Trygt Hjem",
    excerpt: "Nye retningslinjer for Trygt Hjem-ordningen er nå tilgjengelig. Sørg for at du er oppdatert på de siste endringene for en trygg reise.",
  },
  {
    imageUrl: "/assets/news-2.jpg",
    title: "Sommerens Sightseeing-Turer",
    excerpt: "Utforsk Lillehammers vakre omgivelser med våre skreddersydde sightseeing-turer. Våre erfarne sjåfører tar deg med til de beste stedene.",
  },
  {
    imageUrl: "/assets/news-3.jpg",
    title: "Effektiv Pakketransport for Bedrifter",
    excerpt: "Vi tilbyr nå utvidede pakketransporttjenester for bedrifter i hele Mjøsområdet. Rask og pålitelig levering av dine varer.",
  },
];

export default function NewsSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-1">Siste Nytt</h2>
            <p className="text-lg text-gray-600 mt-2">Hold deg oppdatert på hva som skjer hos oss.</p>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1}>
              <BlogCard
                image={post.imageUrl}
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
