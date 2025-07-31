import { Twitter, Linkedin, Facebook } from 'lucide-react';
import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white border-t-4 border-brand-gold">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Logo />
            <p className="mt-4 text-slate-300 max-w-md">
              Celebrating Italian-Canadian scientific and cultural achievements.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-slate-300 hover:text-brand-gold transition-colors">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-slate-300 hover:text-brand-gold transition-colors">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-slate-300 hover:text-brand-gold transition-colors">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Scienza e Cultura. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
