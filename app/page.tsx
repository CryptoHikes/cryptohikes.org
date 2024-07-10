import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CryptoHikes - Explore Hiking and Cryptocurrency',
  description: 'Connect with nature and learn about cryptocurrency with CryptoHikes. Explore scenic hiking trails and join our crypto workshops.',
  keywords: 'hiking, cryptocurrency, crypto workshops, scenic trails, outdoor activities',
  openGraph: {
    title: 'CryptoHikes - Learn Cryptocurrency Hiking to ATH',
    description: 'Connect with nature and learn about cryptocurrency with CryptoHikes. Explore scenic hiking trails and join our crypto workshops.',
    url: 'https://cryptohikes.org',
    images: [
      {
        url: '/path-to-your-image.jpg',
        width: 800,
        height: 600,
        alt: 'CryptoHikes',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CryptoHikes - Learn Cryptocurrency Hiking to ATH',
    description: 'Connect with nature and learn about cryptocurrency with CryptoHikes. Explore scenic hiking trails and join our crypto workshops.',
    images: ['/path-to-your-image.jpg'],
  },
};

export default function Home() {
  const hikes = [
    { id: 1, name: 'Mountain Trail', description: 'A beautiful mountain trail.', difficulty: 'Medium' },
    { id: 2, name: 'Forest Path', description: 'A serene walk through the forest.', difficulty: 'Easy' },
  ];

  const workshops = [
    { id: 1, title: 'Crypto Basics', description: 'Learn the basics of cryptocurrency.', date: '2024-08-01' },
    { id: 2, title: 'Advanced Trading', description: 'Master advanced crypto trading strategies.', date: '2024-08-15' },
  ];

  return (
    <div>
      <header className="text-center py-10 bg-dark">
        <h1 className="text-4xl font-bold text-neon-pink pulsate">CryptoHikes</h1>
        <p className="mt-4 text-neon-blue">Learn Cryptocurrency Hiking to ATH</p>
      </header>
      <section className="p-10">
        <h2 className="text-2xl font-bold text-neon-green hover:text-white transition duration-300">Featured Hikes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {hikes.map((hike) => (
            <div key={hike.id} className="border-2 border-neon-pink p-4 rounded-lg shadow-lg bg-dark hover:border-white hover:shadow-neon-pink transition duration-300">
              <h3 className="text-xl font-bold text-neon-pink">{hike.name}</h3>
              <p className="text-neon-blue">{hike.description}</p>
              <p className="text-neon-green">Difficulty: {hike.difficulty}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="p-10">
        <h2 className="text-2xl font-bold text-neon-purple hover:text-white transition duration-300">Upcoming Workshops</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="border-2 border-neon-purple p-4 rounded-lg shadow-lg bg-dark hover:border-white hover:shadow-neon-purple transition duration-300">
              <h3 className="text-xl font-bold text-neon-purple">{workshop.title}</h3>
              <p className="text-neon-blue">{workshop.description}</p>
              <p className="text-neon-green">Date: {workshop.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}