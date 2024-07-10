"use client"; // This directive marks the file as a client component

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-dark p-4 border-b-2 border-neon-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-neon-pink text-lg font-bold pulsate transition duration-300 p-2 rounded">CryptoHikes</a>
        </Link>
        <div className="flex space-x-10 pr-6">
          <Link href="/hikes" legacyBehavior>
            <a className={`border border-transparent transition duration-300 p-2 rounded ${isActive('/hikes') ? 'text-neon-pink bg-neon-pink border-neon-pink' : 'hover:text-neon-pink hover:bg-neon-pink hover:border-neon-pink'}`}>
              Hikes
            </a>
          </Link>
          <Link href="/workshops" legacyBehavior>
            <a className={`border border-transparent transition duration-300 p-2 rounded ${isActive('/workshops') ? 'text-neon-purple bg-neon-purple border-neon-purple' : 'hover:text-neon-purple hover:bg-neon-purple hover:border-neon-purple'}`}>
              Workshops
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;