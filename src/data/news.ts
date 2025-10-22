// Shared news posts data - used by both the homepage and news archive page
// This data would typically come from a CMS in production

export interface NewsPost {
  image: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
}

export const newsPosts: NewsPost[] = [
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
  // Add more posts here as needed
];

