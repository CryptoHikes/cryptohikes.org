"use client"; // This directive marks the file as a client component

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) => pathname === path;
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="p-4 border-b-2 border-navbar bg-navbar">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-navbar text-lg font-bold pulsate transition duration-300 p-2 rounded">CryptoHikes</a>
        </Link>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-navbar focus:outline-none">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-6 h-6" />
          </button>
        </div>
        <div className={`lg:flex flex-grow items-center ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col lg:flex-row lg:ml-auto space-y-4 lg:space-y-0 lg:space-x-10 pr-6">
            <Link href="/hikes" legacyBehavior>
              <a className={`border-2 transition duration-300 p-2 rounded ${isActive('/hikes') ? 'border-neon-pink text-neon-pink' : 'border-transparent text-navbar hover:border-neon-pink hover:text-neon-pink'}`}>
                Hikes
              </a>
            </Link>
            <Link href="/workshops" legacyBehavior>
              <a className={`border-2 transition duration-300 p-2 rounded ${isActive('/workshops') ? 'border-neon-purple text-neon-purple' : 'border-transparent text-navbar hover:border-neon-purple hover:text-neon-purple'}`}>
                Workshops
              </a>
            </Link>
            <button onClick={toggleTheme} className="p-2 rounded border-2 border-navbar text-navbar hover:bg-navbar hover:text-neon-black transition duration-300">
              <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;