'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Logo', href: '/', isLogo: true },
  { label: 'Illustrations', href: '/illustrations' },
  { label: 'Projects', href: '/projects' },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full bg-transparent flex items-center justify-center font-popp tracking-tight z-50">
      <nav className="w-full px-2 pt-6 pb-3 h-full flex items-center justify-center">
        <div className="rounded-full w-full max-w-lg grid grid-cols-5 items-center justify-center px-2 py-2 bg-white text-black relative">
          {navItems.map((item) => {
            const isActive =
            item.href === '/'
              ? pathname === '/'
              : pathname.startsWith(item.href);
            return item.isLogo ? (
              <div
                key="logo"
                className="flex items-center justify-center h-6 sm:h-8"
              >
                <img
                  src="/logos/blacklogo.svg"
                  alt="Logo"
                  className="h-full w-auto"
                />
              </div>
            ) : (
              <div key={item.href} className="relative flex justify-center items-center">
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute px-1 py-3 inset-0 bg-primary rounded-full z-0"
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
                <Link
                  href={item.href}
                  className={`text-[8px] xs:text-xs sm:text-sm text-center px-1 py-3 z-10 transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-black'
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
};
