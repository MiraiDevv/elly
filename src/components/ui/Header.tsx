'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import Navigation from './Navigation';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn('sticky top-0 z-50 w-full border-b border-[#6B46C1]/20 bg-white/80 dark:bg-[#2D3748]/80 backdrop-blur-sm', className)}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-[#6B46C1] text-xl font-bold hover:opacity-80">
          Elly
        </Link>
        
        <div className="flex items-center gap-4">
          <Navigation />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header; 