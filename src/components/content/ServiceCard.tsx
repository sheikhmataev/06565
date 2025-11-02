'use client';

import React from "react";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  const CardContent = () => (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 border border-gray-100 h-full flex flex-col cursor-pointer">
      {/* Icon Section */}
      <div className="p-6 pb-5">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-2/10 to-accent-3/10 flex items-center justify-center group-hover:from-accent-2/15 group-hover:to-accent-3/15 transition-all duration-300 mb-4">
          <div className="text-accent-2 group-hover:scale-105 transition-transform duration-300">
            {icon}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-primary-1 group-hover:text-primary-2 transition-colors duration-300 leading-tight">
          {title}
        </h3>
      </div>
      
      {/* Description */}
      <div className="px-6 pb-5 flex-1">
        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* CTA Section */}
      {href && (
        <div className="px-6 pb-5 pt-4 mt-auto border-t border-gray-100 group-hover:border-accent-2/30 transition-colors duration-300">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-primary-1 group-hover:text-accent-2 transition-colors duration-300">
              Les mer
            </span>
            <ArrowRight className="w-4 h-4 text-accent-2 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </div>
      )}
      
      {/* Subtle hover border */}
      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-accent-2/20 transition-all duration-300 pointer-events-none"></div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}
