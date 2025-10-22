'use client';

import { useState } from 'react';
import { Menu, Car, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getImagePath } from '@/lib/utils';

// --- Helper Components (Previously separate files) ---

// Navigation component recreated to be self-contained
function Navigation() {
  const navLinks = [
    { href: "/pris", label: "Pris" },
    { href: "/tjenester", label: "Tjenester" },
    { href: "/holdeplasser", label: "Holdeplasser" },
    { href: "/om-oss", label: "Om Oss" },
    { href: "/nyheter", label: "Nyheter" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <nav className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
      {navLinks.map((link) => (
        <Link 
          key={link.label}
          href={link.href}
          className="text-white hover:text-accent-3 transition-colors duration-200 text-lg md:text-base font-medium"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// MobileMenu component recreated to be self-contained
function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-primary-1 shadow-2xl p-6 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-8">
          <span className="text-white font-bold text-xl">Meny</span>
          <button onClick={onClose} className="text-white p-2 rounded-full hover:bg-primary-2" aria-label="Lukk meny">
            <X size={24} />
          </button>
        </div>
        <Navigation />
        <Link href="/bestill" 
          className="
            mt-8 group relative flex items-center justify-center px-5 py-3 text-primary-1 font-bold 
            bg-gradient-to-r from-accent-2 to-accent-3 rounded-full 
            overflow-hidden transition-all duration-300 ease-in-out
            shadow-md hover:shadow-lg
          "
        >
          <Car className="mr-2 h-5 w-5" />
          <span className="relative">Bestill Taxi</span>
        </Link>
      </div>
    </div>
  );
}


// --- Main Header Component ---

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-primary-1/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 text-white">
          <Link href="/" className="flex items-center">
            <Image 
              src={getImagePath("/assets/Logo.png")}
              alt="Lillehammer Taxi Logo" 
              width={80} 
              height={80} 
              className="hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Navigation />
            {/* Replaced Next.js Link with standard <a> tag */}
            <Link 
              href="/bestill" 
              className="
                group relative flex items-center justify-center px-5 py-3 text-primary-1 font-bold 
                bg-gradient-to-r from-accent-2 to-accent-3 rounded-full 
                overflow-hidden transition-all duration-300 ease-in-out
                shadow-md hover:shadow-lg hover:scale-105 active:scale-100
                transition-transform duration-200 ease-in-out
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