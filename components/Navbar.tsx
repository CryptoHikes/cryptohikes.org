import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-dark p-4 border-b-2 border-neon-pink">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-neon-pink text-lg font-bold pulsate hover:text-white transition duration-300">CryptoHikes</span>
        </Link>
        <div>
          <Link href="/hikes">
            <span className="text-neon-blue ml-4 hover:text-neon-pink transition duration-300">Hikes</span>
          </Link>
          <Link href="/workshops">
            <span className="text-neon-green ml-4 hover:text-neon-pink transition duration-300">Workshops</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;