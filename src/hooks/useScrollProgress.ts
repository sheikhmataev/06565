'use client';

import { useEffect, useState } from 'react';

/**
 * Hook to track scroll progress through a section
 * Returns a value from 0 to 1 representing how far through the section the user has scrolled
 */
export function useScrollProgress(ref: React.RefObject<HTMLElement>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate when section enters viewport
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // Progress from 0 to 1 as section scrolls through viewport
      let scrollProgress = 0;
      
      if (sectionTop < windowHeight && sectionTop > -sectionHeight) {
        // Section is in viewport
        const visibleHeight = windowHeight - sectionTop;
        scrollProgress = Math.min(1, Math.max(0, visibleHeight / (windowHeight + sectionHeight)));
      } else if (sectionTop <= -sectionHeight) {
        // Section has passed viewport
        scrollProgress = 1;
      }

      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return progress;
}

/**
 * Hook to detect if an element is in viewport with threshold
 */
export function useInViewport(ref: React.RefObject<HTMLElement>, threshold = 0.1) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, threshold]);

  return isInView;
}

