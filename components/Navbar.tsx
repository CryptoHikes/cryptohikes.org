import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-dark p-4 border-b-2 border-neon-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-neon-pink text-lg font-bold pulsate transition duration-300 p-2 rounded">CryptoHikes</a>
        </Link>
        <div className="flex space-x-10 pr-6">
          <Link href="/hikes" legacyBehavior>
            <a className="text-neon-blue border border-transparent hover:text-neon-pink hover:bg-neon-pink hover:border-neon-pink transition duration-300 p-2 rounded">
              Hikes
            </a>
          </Link>
          <Link href="/workshops" legacyBehavior>
            <a className="text-neon-green border border-transparent hover:text-neon-purple hover:bg-neon-purple hover:border-neon-purple transition duration-300 p-2 rounded">
              Workshops
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;