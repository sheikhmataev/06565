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
            className={`font-semibold text-lg transition-colors hover:text-accent-2 ${
              isActive ? 'text-accent-2' : 'text-white'
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
