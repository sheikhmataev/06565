'use client';

import { useEffect, useRef, useState } from 'react';

interface Icon3DProps {
  children: React.ReactNode;
  isHovered: boolean;
}

export default function Icon3D({ children, isHovered }: Icon3DProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const rotationRef = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef<number>(0);
  const isHoveredRef = useRef(isHovered);

  // Keep ref in sync with prop
  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    // Immediately cancel any existing animation when hover state changes
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    if (!isHovered) {
      // Immediately reset rotation when not hovered
      rotationRef.current.x = 0;
      rotationRef.current.y = 0;
      setRotation({ x: 0, y: 0 });
      lastTimeRef.current = 0;
      return;
    }

    const animate = (currentTime: number) => {
      // Check if still hovered using ref for reliable state checking
      if (!isHoveredRef.current) {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        rotationRef.current.x = 0;
        rotationRef.current.y = 0;
        setRotation({ x: 0, y: 0 });
        return;
      }

      if (!lastTimeRef.current) lastTimeRef.current = currentTime;
      const deltaTime = Math.min(currentTime - lastTimeRef.current, 33);
      lastTimeRef.current = currentTime;

      // Smooth, consistent rotation from left to right (positive Y)
      const rotationSpeed = 1.2; // degrees per frame
      rotationRef.current.y += rotationSpeed * (deltaTime / 16); // Always positive (left to right)
      
      // Very subtle X tilt for depth effect
      rotationRef.current.x = 5 * Math.sin(rotationRef.current.y * Math.PI / 180); // Subtle tilt that follows Y rotation
      
      // Keep Y rotation manageable (reset at 360 to avoid overflow)
      if (rotationRef.current.y >= 360) rotationRef.current.y -= 360;
      
      setRotation({ x: rotationRef.current.x, y: rotationRef.current.y });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      lastTimeRef.current = 0;
    };
  }, [isHovered]);

  return (
    <div
      style={{
        transform: `perspective(1200px) rotateY(${rotation.y}deg) rotateX(${rotation.x}deg)`,
        transformStyle: 'preserve-3d',
        transition: isHovered ? 'none' : 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        backfaceVisibility: 'visible', // Show both sides so icon never disappears
        WebkitBackfaceVisibility: 'visible',
        willChange: 'transform', // Optimize for animation
      }}
      className="w-full h-full flex items-center justify-center"
    >
      {children}
    </div>
  );
}