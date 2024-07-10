import { Metadata } from 'next';
import WorkshopCard from '../../components/WorkshopCard';

const mockWorkshops = [
  {
    id: '1',
    title: 'Crypto Basics',
    description: 'An introductory workshop on cryptocurrency.',
    date: '2023-08-15'
  },
  {
    id: '2',
    title: 'Advanced Blockchain',
    description: 'A deep dive into blockchain technology.',
    date: '2023-09-01'
  }
];

export const metadata: Metadata = {
  title: 'Crypto Workshops | CryptoHikes',
  description: 'Join our crypto workshops to learn about cryptocurrency, blockchain and DeFi. We offer a range of workshops from beginner to advanced levels.',
  keywords: 'Crypto workshops, cryptocurrency, blockchain, crypto learning, crypto courses',
  openGraph: {
    title: 'Crypto Workshops | CryptoHikes',
    description: 'Join our crypto workshops to learn about cryptocurrency, blockchain and DeFi. We offer a range of workshops from beginner to advanced levels.',
    url: 'https://cryptohikes.org/workshops',
    images: [
      {
        url: '/path-to-your-image.jpg',
        width: 800,
        height: 600,
        alt: 'Crypto Workshops',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Workshops | CryptoHikes',
    description: 'Join our crypto workshops to learn about cryptocurrency, blockchain and DeFi. We offer a range of workshops from beginner to advanced levels.',
    images: ['/path-to-your-image.jpg'],
  },
};

export default function Workshops() {
  const workshops = mockWorkshops;

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Crypto Workshops</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {workshops.map((workshop: any) => (
          <WorkshopCard key={workshop.id} workshop={workshop} />
        ))}
      </div>
    </div>
  );
}