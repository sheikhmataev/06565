import { ArrowRight } from "lucide-react";
import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-start space-y-4 group transition-all duration-300 ease-in-out hover:bg-primary-1 hover:shadow-xl hover:-translate-y-2">
      <div className="bg-primary-1 text-white p-3 rounded-full group-hover:bg-accent-2 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-primary-1 group-hover:text-white">{title}</h3>
      <p className="text-gray-600 flex-grow group-hover:text-gray-200">{description}</p>
      <a href="#" className="flex items-center font-semibold text-accent-1 group-hover:text-accent-3">
        Les mer <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
}
