'use client';

import Link from 'next/link';
import { X } from 'lucide-react';

const navLinks = [
  { href: '/bestill', label: 'Bestill' },
  { href: '/pris', label: 'Pris' },
  { href: '/tjenester', label: 'Tjenester' },
  { href: '/om-oss', label: 'Om Oss' },
  { href: '/nyheter', label: 'Nyheter' },
  { href: '/kontakt', label: 'Kontakt' },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div 
      className={`fixed top-0 right-0 h-full z-50 w-full max-w-sm bg-gray-950/90 backdrop-blur-lg shadow-2xl transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="flex flex-col h-full p-6">
        <div className="flex justify-end items-center mb-16">
          <button onClick={onClose} className="text-white p-2 rounded-full hover:bg-white/10 transition-colors">
            <X size={28} />
          </button>
        </div>
        
        <nav className="flex flex-col flex-grow items-start space-y-6">
          {navLinks.map((link, i) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={onClose}
              className="text-3xl text-white hover:text-accent-2 transition-all duration-300 transform hover:translate-x-2 opacity-0"
              style={{ animation: isOpen ? `fadeInUp 0.5s ease ${0.2 + i * 0.1}s forwards` : 'none' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
