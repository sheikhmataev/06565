import Image from "next/image";
import { getImagePath } from '@/lib/utils';

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
}

export default function BlogCard({ image, title, excerpt }: BlogCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden group transition-all duration-500 ease-out shadow-md hover:shadow-xl hover:-translate-y-1 border border-gray-100 h-full flex flex-col cursor-pointer">
      <div className="relative h-56 overflow-hidden">
        <div className="relative w-full h-full">
          <Image 
            src={getImagePath(image)}
            alt={title}
            fill
            className="transition-transform duration-700 ease-out group-hover:scale-105 object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-primary-2 mb-3 line-clamp-2 group-hover:text-primary-1 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1">{excerpt}</p>
      </div>
    </div>
  );
}
