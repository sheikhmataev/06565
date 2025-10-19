'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/pris', label: 'Pris' },
  { href: '/tjenester', label: 'Tjenester' },
  { href: '/om-oss', label: 'Om Oss' },
  { href: '/nyheter', label: 'Nyheter' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-6">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link 
            key={link.href} 
            href={link.href} 
            className={`
              relative text-white transition-colors duration-300 hover:text-accent-2
              after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-accent-2
              after:transition-transform after:duration-300 after:ease-in-out
              ${isActive ? 'after:scale-x-100' : 'after:scale-x-0'}
            `}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  );
}
