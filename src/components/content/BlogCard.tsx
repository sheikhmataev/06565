import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  image: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
}

export default function BlogCard({ image, category, date, title, excerpt }: BlogCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
      <div className="relative h-56">
        <Image 
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <span className="absolute top-4 left-4 bg-accent-1 text-white text-xs font-bold uppercase px-2 py-1 rounded">
          {category}
        </span>
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="text-xl font-bold text-primary-2 mb-3 h-14">{title}</h3>
        <p className="text-gray-600 mb-4 h-24 overflow-hidden">{excerpt}</p>
        <a href="#" className="flex items-center font-semibold text-accent-1 group-hover:text-primary-3 transition-colors">
          Les mer <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
