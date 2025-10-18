'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import { Menu } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-primary-1 text-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/Assets/Logo.png" alt="Lillehammer Taxi Logo" width={50} height={50} />
            <span className="text-2xl font-bold text-accent-3">Lillehammer Taxi</span>
          </Link>
          
          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="flex items-center space-x-2 text-white focus:outline-none p-2 rounded-md hover:bg-primary-2 transition-colors"
            aria-label="Åpne meny"
          >
            <Menu size={28} />
            <span className="font-semibold text-lg">Meny</span>
          </button>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
