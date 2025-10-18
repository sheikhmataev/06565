import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { href: '/bestill', label: 'Bestill' },
  { href: '/pris', label: 'Pris' },
  { href: '/tjenester', label: 'Tjenester' },
  { href: '/om-oss', label: 'Om Oss' },
  { href: '/nyheter', label: 'Nyheter' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Header() {
  return (
    <header className="bg-primary-1 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/Assets/Logo.png" alt="Lillehammer Taxi Logo" width={50} height={50} />
          <span className="text-2xl font-bold text-accent-3">Lillehammer Taxi</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent-2 transition-colors duration-300">
              {link.label}
            </Link>
          ))}
        </nav>
        <button className="hidden md:inline-block bg-accent-1 hover:bg-accent-2 text-primary-1 font-bold py-2 px-4 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
          Ring 06565
        </button>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
