'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import { cn } from '@/lib/utils';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from './theme-toggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/news', label: 'News' },
  { href: '/events', label: 'Events' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();

  const getLinkClass = (href: string) => {
     const isActive = pathname === href;
     return cn(
      "relative text-base font-semibold text-white transition-colors duration-300 group",
      isActive && 'text-brand-gold'
     );
  };
  
  const getMobileLinkClass = (href: string) => {
     const isActive = pathname === href;
     return cn(
        "text-xl font-semibold transition-colors duration-300",
        isActive ? "text-brand-gold" : "text-white hover:text-brand-gold"
     );
  };

  return (
    <header className="bg-brand-navy text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
             <Link key={link.href} href={link.href} className={getLinkClass(link.href)}>
                <span>{link.label}</span>
                <span className={cn(
                    "absolute bottom-[-4px] left-0 h-0.5 bg-brand-gold w-full scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100",
                    pathname === link.href ? 'scale-x-100' : 'scale-x-0'
                )}></span>
             </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-brand-navy text-white border-l-brand-gold">
                <div className="flex flex-col gap-6 pt-12">
                <Logo />
                    {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={getMobileLinkClass(link.href)}
                    >
                        {link.label}
                    </Link>
                    ))}
                </div>
                </SheetContent>
            </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
