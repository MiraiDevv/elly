'use client';

import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav className="hidden md:flex items-center gap-6">
      <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
        Início
      </Link>
      <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
        Contato
      </Link>
    </nav>
  );
};

export default Navigation; 