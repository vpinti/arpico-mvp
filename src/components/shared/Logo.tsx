import Link from 'next/link';
import { BookHeart } from 'lucide-react';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <BookHeart className="h-8 w-8 text-brand-gold group-hover:animate-pulse" />
      <span className="font-headline text-2xl font-bold tracking-tight text-white">
        Scienza e Cultura
      </span>
    </Link>
  );
};

export default Logo;
