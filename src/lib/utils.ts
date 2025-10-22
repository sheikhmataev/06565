import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to get the correct image path for GitHub Pages
export function getImagePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // Don't add basePath if path already includes it or is external
  if (!path || path.startsWith('http') || path.startsWith(basePath)) {
    return path;
  }
  
  // Add basePath for local images
  return `${basePath}${path}`;
}
