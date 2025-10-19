import BlogCard from "../content/BlogCard";
import AnimateOnScroll from "../animations/AnimateOnScroll";

const posts = [
  {
    image: "/assets/news-1.jpeg",
    category: "Nyheter",
    date: "18. oktober 2025",
    title: "Nyeste taxisjåfør i Øyer",
    excerpt: "Vi er stolte av å kunngjøre at vi har fått med Malik R. Dagijev som vår nyeste sjåfør i Øyer. Med bare 6 prikker på rullebladet har han massse igjen å gå på!",
  },
  {
    image: "/assets/samad.png",
    category: "Lokalt",
    date: "15. oktober 2025",
    title: "Ansatt på drosjesentralen holdte på å miste det",
    excerpt: "Under en nattevakt holdt en ansatt på drosjesentralen på å miste det. Men han overlvede og det gikk veldig bra :D",
  },
  {
    image: "/assets/bilal.jpeg",
    category: "Teknologi",
    date: "12. oktober 2025",
    title: "Ansatt tiltalt for å ha drevet med korrupsjon på drosjesentralen",
    excerpt: "Bilal R. Mataev ble idag tiltalt for å ha drevet med korrupsjon på drosjesentralen. Hans advokat Abdulsamad Sheikh sier de vil anke tiltalen.",
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
