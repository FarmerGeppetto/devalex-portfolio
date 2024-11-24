'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-200 border-b border-gray-700/50 
      ${isScrolled 
        ? 'bg-gray-800/50 backdrop-blur-sm' 
        : 'bg-gray-800/30'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
                DevAlex
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link 
              href="#skills" 
              className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all"
            >
              Skills
            </Link>
            <Link 
              href="#projects" 
              className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all"
            >
              Projects
            </Link>
            <Link 
              href="#contact" 
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

