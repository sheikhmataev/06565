'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import LoadingAnimation with SSR disabled
const LoadingAnimation = dynamic(() => import('./LoadingAnimation'), {
  ssr: false,
  loading: () => null,
});

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay before showing content for smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  // Simulate page load - in production, you might want to wait for actual page load
  useEffect(() => {
    // If page is already loaded, skip loading animation
    if (document.readyState === 'complete') {
      setIsLoading(false);
      setShowContent(true);
    }
  }, []);

  return (
    <>
      {isLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      <div
        className={`transition-opacity duration-500 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ display: showContent ? 'block' : 'none' }}
      >
        {children}
      </div>
    </>
  );
}
