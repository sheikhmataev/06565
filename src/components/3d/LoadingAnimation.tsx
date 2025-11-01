'use client';

import { useState, useEffect } from 'react';
import { Car } from 'lucide-react';

export default function LoadingAnimation({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => {
            onComplete?.();
          }, 300);
          return 100;
        }
        return prev + 5;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete, isMounted]);

  if (!isMounted || isComplete) return null;

  // Calculate 3D perspective effect: car starts far away (small) and comes towards viewer (large)
  const startPosition = 5; // far left
  const endPosition = 55; // center-right (towards user)
  const taxiPosition = startPosition + (progress / 100) * (endPosition - startPosition);
  
  // Scale: starts small (far away) and grows larger (closer to user)
  const minScale = 0.3; // far away
  const maxScale = 1.5; // close to user
  const scale = minScale + (progress / 100) * (maxScale - minScale);
  
  // Vertical position: starts lower (far away) and moves up (closer perspective)
  const startTop = 60; // lower when far
  const endTop = 45; // higher when close
  const topPosition = startTop - (progress / 100) * (startTop - endTop);
  
  // Rotation: slightly rotate to create 3D turning effect
  const rotation = progress > 30 ? -15 + (progress / 100) * 15 : -15;

  return (
    <div 
      className="fixed inset-0 z-50 bg-gradient-to-br from-primary-1 via-primary-2 to-primary-1 flex flex-col items-center justify-center overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Perspective road background - gets wider as it comes closer */}
      <div 
        className="absolute bottom-0 left-0 right-0 bg-gray-800 flex items-center justify-center"
        style={{
          height: `${20 + (progress / 100) * 40}vh`,
          clipPath: `polygon(0 ${100 - (progress / 100) * 30}%, 100% ${100 - (progress / 100) * 30}%, 100% 100%, 0 100%)`,
          transition: 'height 0.1s ease-linear, clip-path 0.1s ease-linear',
        }}
      >
        {/* Road lines animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/2 left-0 h-0.5 bg-yellow-300 opacity-80"
            style={{
              width: '100%',
              transform: `translateX(${-100 + progress}%)`,
            }}
          >
            <div className="h-full w-16 bg-yellow-300"></div>
            <div className="h-full w-16 bg-transparent"></div>
          </div>
        </div>
        
        {/* Road center line pattern */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
      </div>

      {/* Progress indicator at bottom */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-64 max-w-[90%]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white text-sm font-medium">0%</span>
          <span className="text-white text-lg font-bold">{progress}%</span>
          <span className="text-white text-sm font-medium">100%</span>
        </div>
        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-accent-2 via-accent-3 to-accent-2 rounded-full transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Taxi car - Car icon with 3D perspective effect */}
      <div
        className="absolute transition-all duration-100 ease-linear"
        style={{
          left: `${taxiPosition}%`,
          top: `${topPosition}%`,
          transform: `translate(-50%, -50%) scale(${scale}) rotateY(${rotation}deg)`,
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
        }}
      >
        <div className="relative">
          <Car 
            className="w-32 h-32 md:w-40 md:h-40 text-white drop-shadow-2xl"
            style={{
              filter: `drop-shadow(0 ${10 * scale}px ${20 * scale}px rgba(0,0,0,0.5)) brightness(${100 + progress * 0.5}%)`,
              transition: 'all 0.1s ease-linear',
            }}
          />
          {/* Motion blur effect - more intense as car gets closer */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none -z-10"
            style={{
              transform: `translateX(${Math.min(progress / 5, 20)}px)`,
              width: '200%',
              height: '200%',
              left: '-50%',
              top: '-50%',
              opacity: progress > 20 ? Math.min(progress / 100, 0.6) : 0,
            }}
          ></div>
        </div>
      </div>
      
      {/* Perspective road lines - converging to create depth */}
      <div 
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          top: `${topPosition + 10}%`,
          opacity: 0.4,
        }}
      >
        {/* Road lines that converge as they approach (perspective) */}
        <div 
          className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            transform: `translateY(-50%) scaleX(${1 + (progress / 100) * 2})`,
            transformOrigin: 'center',
          }}
        ></div>
      </div>

      {/* Speed lines effect - radial from car position for 3D perspective */}
      <div 
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          top: `${topPosition}%`,
          transform: `translateY(-50%) scale(${1 + (progress / 100) * 0.5})`,
          transformOrigin: 'center',
        }}
      >
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 bg-white/30"
            style={{
              left: `${taxiPosition - 5 + (i % 3) * 3}%`,
              top: `${-5 + (i * 2)}%`,
              width: `${20 + i * 2}px`,
              opacity: progress > 30 ? Math.max(0, 0.4 - (i * 0.03)) : 0,
              transform: `translateX(-50%) rotate(${-45 + (i % 5) * 15}deg)`,
              transformOrigin: 'center',
              transition: 'opacity 0.3s',
            }}
          ></div>
        ))}
      </div>

      {/* Loading text */}
      <div className="absolute top-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
          Lillehammer Taxi
        </h2>
        <p className="text-white/90 text-lg md:text-xl animate-pulse">
          Laster...
        </p>
      </div>
    </div>
  );
}