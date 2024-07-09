export default function Home() {
  return (
    <div>
      <header className="text-center py-10 bg-green-500 text-white">
        <h1 className="text-4xl font-bold">Welcome to CryptoHikes</h1>
        <p className="mt-4">Explore the best hiking trails and learn about cryptocurrency.</p>
      </header>
      <section className="p-10">
        <h2 className="text-2xl font-bold">Featured Hikes</h2>
        {/* Add hike cards or other content here */}
      </section>
      <section className="p-10">
        <h2 className="text-2xl font-bold">Upcoming Workshops</h2>
        {/* Add workshop cards or other content here */}
      </section>
    </div>
  )
}