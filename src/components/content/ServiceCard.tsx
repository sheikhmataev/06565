import { ArrowRight } from "lucide-react";
import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 flex flex-col items-start space-y-4 group transition-all duration-300 ease-in-out shadow-custom-soft hover:shadow-custom-soft-hover hover:-translate-y-2 border border-white/20">
      <div className="bg-accent-1/10 p-3 rounded-full group-hover:bg-accent-1 transition-colors duration-300">
        <div className="text-accent-1 transition-colors duration-300 group-hover:text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-primary-1">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      <a href="#" className="flex items-center font-semibold text-accent-1">
        Les mer <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
}
