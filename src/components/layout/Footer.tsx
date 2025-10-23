import Link from 'next/link';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-1 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-12">
        {/* About & Social */}
        <div className="md:col-span-1">
          <h3 className="text-2xl font-bold text-accent-3 mb-4">Lillehammer Taxi</h3>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/06565LillehammerTaxisentral" className="hover:text-accent-2 transition-transform hover:scale-110"><Facebook /></Link>
            <Link href="https://www.linkedin.com/company/06565drosjene" className="hover:text-accent-2 transition-transform hover:scale-110"><Linkedin /></Link>
            <Link href="https://www.instagram.com/06565lillehammertaxi/" className="hover:text-accent-2 transition-transform hover:scale-110"><Instagram /></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-accent-3 mb-4">Snarveier</h3>
          <ul className="space-y-2">
            <li><Link href="/bestill" className="hover:text-accent-2 transition-colors">Bestill Taxi</Link></li>
            <li><Link href="/pris" className="hover:text-accent-2 transition-colors">Priskalkulator</Link></li>
            <li><Link href="/tjenester" className="hover:text-accent-2 transition-colors">Våre Tjenester</Link></li>
            <li><Link href="/om-oss" className="hover:text-accent-2 transition-colors">Om Oss</Link></li>
            <li><Link href="/jobb" className="hover:text-accent-2 transition-colors">Jobb hos oss</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold text-accent-3 mb-4">Kontakt Oss</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Norge: <a href="tel:06565" className="hover:text-accent-2">06565</a></li>
            <li>Utland: <a href="tel:+4761222020" className="hover:text-accent-2">+47 61 22 20 20</a></li>
            <li>E-post: <a href="mailto:booking@06565.no" className="hover:text-accent-2">booking@06565.no</a></li>
            <li>Adresse: Oskar skoglys veg 2, 2619</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="container mx-auto py-4 px-4 text-center text-gray-400">
          Designet for Lillehammer Taxi - laget av S&M Partners AS - &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
