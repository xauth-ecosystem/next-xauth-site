'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // For active link highlighting

export default function TheNavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current path for active link

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#020617]/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 font-black text-white text-2xl tracking-tighter">
          <i className="fa-solid fa-shield-halved text-blue-500"></i> XAUTH
        </Link>
        <div className="hidden md:flex items-center gap-10 text-[14px] font-bold uppercase tracking-widest">
          {/* Desktop Navigation Links */}
          <Link href="/"
            className={`transition ${pathname === '/' ? 'text-blue-500' : 'hover:text-white'}`}>
            Overview
          </Link>
          <Link href="/wiki"
            className={`transition ${pathname.startsWith('/wiki') ? 'text-blue-500' : 'hover:text-white'}`}>
            Wiki
          </Link>
          <Link href="/download"
            className={`transition ${pathname === '/download' ? 'text-blue-500' : 'hover:text-white'}`}>
            Downloads
          </Link>
          <Link href="/support"
            className={`transition ${pathname === '/support' ? 'text-blue-500' : 'hover:text-white'}`}>
            Support
          </Link>
          <a href="https://github.com/xauth-ecosystem" className="text-slate-500 hover:text-white transition">
            <i className="fa-brands fa-github text-xl"></i>
          </a>
        </div>
        <button className="md:hidden text-white text-2xl" onClick={toggleMobileMenu}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <div id="mobile-menu" className={`${isMobileMenuOpen ? '' : 'hidden'} md:hidden bg-[#020617] border-t border-slate-800`}>
        <div className="px-6 py-4 space-y-4">
          {/* Mobile Navigation Links */}
          <Link href="/"
            className={`block font-bold uppercase tracking-widest transition ${pathname === '/' ? 'text-blue-500' : 'hover:text-white'}`}>
            Overview
          </Link>
          <Link href="/wiki"
            className={`block font-bold uppercase tracking-widest transition ${pathname.startsWith('/wiki') ? 'text-blue-500' : 'hover:text-white'}`}>
            Wiki
          </Link>
          <Link href="/download"
            className={`block font-bold uppercase tracking-widest transition ${pathname === '/download' ? 'text-blue-500' : 'hover:text-white'}`}>
            Downloads
          </Link>
          <Link href="/support"
            className={`block font-bold uppercase tracking-widest transition ${pathname === '/support' ? 'text-blue-500' : 'hover:text-white'}`}>
            Support
          </Link>
        </div>
      </div>
    </nav>
  );
}
