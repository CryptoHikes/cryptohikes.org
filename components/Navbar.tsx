import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-white text-lg font-bold">CryptoHikes</Link>
        <div>
          <Link href="/hikes" className="text-white ml-4">Hikes</Link>
          <Link href="/workshops" className="text-white ml-4">Workshops</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar