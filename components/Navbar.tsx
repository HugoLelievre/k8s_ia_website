"use client"; 

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Aperture, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  const navLinks = [
      { name: "Accueil", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Projets", href: "/projects" },
      { name: "À Propos", href: "/about" },
      { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-gray-900 bg-opacity-50 backdrop-blur-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <Aperture className="h-8 w-8 text-cyan-400" />
              <span className="text-white font-bold text-xl">KubeExperts</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    pathname === link.href
                      ? 'text-white bg-cyan-500/20'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
             {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-center px-3 py-2 rounded-md text-base font-medium ${
                    pathname === link.href ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
          </div>
        </div>
      )}
    </nav>
  );
};