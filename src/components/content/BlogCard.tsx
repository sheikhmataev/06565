import Image from "next/image";

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
}

export default function BlogCard({ image, title, excerpt }: BlogCardProps) {
  return (
    <div className="bg-white/60 backdrop-blur-md rounded-xl overflow-hidden group transition-all duration-300 ease-in-out shadow-custom-soft hover:shadow-custom-soft-hover hover:-translate-y-2 border border-white/20">
      <div className="relative h-56">
        <div className="relative w-full h-full">
          <Image 
            src={image}
            alt={title}
            fill
            className="transition-transform duration-300 group-hover:scale-110 object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-2 mb-3 h-14">{title}</h3>
        <p className="text-gray-600 mb-4 h-24 overflow-hidden">{excerpt}</p>
      </div>
    </div>
  );
}
