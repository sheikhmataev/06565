'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import Navigation from './Navigation';
import { Menu } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-primary-1 text-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/Assets/Logo.png" alt="Lillehammer Taxi Logo" width={50} height={50} />
            <span className="text-xl font-bold text-accent-3">06565 Taxi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Navigation />
            <Link href="/bestill" className="bg-accent-2 text-primary-1 font-bold py-2 px-4 rounded-full hover:bg-opacity-90 transition-all">
              Bestill Taxi
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="md:hidden flex items-center space-x-2 text-white focus:outline-none p-2 rounded-md hover:bg-primary-2 transition-colors"
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
