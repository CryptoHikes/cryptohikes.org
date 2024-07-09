export default function Home() {
  return (
    <div>
      <header className="text-center py-10 bg-dark">
        <h1 className="text-4xl font-bold text-neon-pink pulsate">CryptoHikes</h1>
        <p className="mt-4 text-neon-blue">Connect with the true nature of cryptocurrency.</p>
      </header>
      <section className="p-10">
        <h2 className="text-2xl font-bold text-neon-green hover:text-white transition duration-300">Featured Hikes</h2>
        {/* Add hike cards or other content here */}
      </section>
      <section className="p-10">
        <h2 className="text-2xl font-bold text-neon-purple hover:text-white transition duration-300">Upcoming Workshops</h2>
        {/* Add workshop cards or other content here */}
      </section>
    </div>
  )
}