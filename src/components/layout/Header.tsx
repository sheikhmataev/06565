'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import Navigation from './Navigation';
import { Menu, Car } from 'lucide-react';

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
          <div className="hidden md:flex items-center space-x-6">
            <Navigation />
            <Link 
              href="/bestill" 
              className="
                group relative flex items-center justify-center px-5 py-2.5 text-primary-1 font-bold 
                bg-gradient-to-r from-accent-2 to-accent-3 rounded-full 
                overflow-hidden transition-all duration-300 ease-in-out
                shadow-md hover:shadow-lg hover:scale-105 active:scale-100
              "
            >
              <span className="absolute left-0 w-full h-full bg-white opacity-20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              <Car className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-110" />
              <span className="relative">Bestill Taxi</span>
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
