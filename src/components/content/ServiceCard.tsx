'use client';

import React, { useState } from "react";
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import Icon3D with SSR disabled
const Icon3D = dynamic(() => import('../3d/Icon3D'), {
  ssr: false,
  loading: () => null,
});

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    // Always set to false when mouse leaves
    setIsHovered(false);
  };

  // Also add a global mouse leave handler as backup
  React.useEffect(() => {
    const handleGlobalMouseLeave = () => {
      setIsHovered(false);
    };

    if (isHovered) {
      // Add a small delay to allow onMouseLeave to fire first
      const timeout = setTimeout(() => {
        document.addEventListener('mouseleave', handleGlobalMouseLeave);
      }, 100);

      return () => {
        clearTimeout(timeout);
        document.removeEventListener('mouseleave', handleGlobalMouseLeave);
      };
    }
  }, [isHovered]);

  const CardContent = () => (
    <div 
      ref={cardRef}
      className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 flex flex-col items-start space-y-6 group transition-all duration-500 ease-out shadow-xl hover:shadow-2xl hover:-translate-y-3 border border-white/30 h-full relative overflow-hidden cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-2/5 via-transparent to-accent-3/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Icon with 3D rotation on hover */}
      <div className="relative z-10 bg-gradient-to-br from-accent-1/20 to-accent-2/20 p-4 rounded-2xl group-hover:bg-gradient-to-br group-hover:from-accent-1 group-hover:to-accent-2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 min-h-[64px] min-w-[64px] flex items-center justify-center overflow-visible">
        {/* 3D rotating icon */}
        {isHovered ? (
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <Icon3D isHovered={isHovered}>
              {icon}
            </Icon3D>
          </div>
        ) : (
          <div className="text-accent-1 transition-all duration-500">
            {icon}
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="relative z-10 space-y-4 flex-grow">
        <h3 className="text-2xl font-bold text-primary-1 group-hover:text-primary-2 transition-colors duration-300 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed text-base">
          {description}
        </p>
      </div>
      
      {/* Subtle border animation */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent-2/20 transition-all duration-500"></div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}
