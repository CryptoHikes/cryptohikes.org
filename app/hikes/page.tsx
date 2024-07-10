import { Metadata } from 'next';
import HikeCard from '../../components/HikeCard';

const mockHikes = [
  {
    id: '1',
    name: 'Trail A',
    description: 'A beautiful trail with scenic views.',
    difficulty: 'Moderate'
  },
  {
    id: '2',
    name: 'Trail B',
    description: 'A challenging trail for experienced hikers.',
    difficulty: 'Hard'
  }
];

export const metadata: Metadata = {
  title: 'Hiking Trails | CryptoHikes',
  description: 'Discover the best hiking trails with CryptoHikes. Explore beautiful trails with scenic views and varying difficulty levels.',
  keywords: 'Hiking trails, scenic views, hiking, outdoor activities, crypto hiking',
  openGraph: {
    title: 'Hiking Trails | CryptoHikes',
    description: 'Discover the best hiking trails with CryptoHikes. Explore beautiful trails with scenic views and varying difficulty levels.',
    url: 'https://cryptohikes.org/hikes',
    images: [
      {
        url: '/path-to-your-image.jpg',
        width: 800,
        height: 600,
        alt: 'Hiking Trails',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hiking Trails | CryptoHikes',
    description: 'Discover the best hiking trails with CryptoHikes. Explore beautiful trails with scenic views and varying difficulty levels.',
    images: ['/path-to-your-image.jpg'],
  },
};

export default function Hikes() {
  const hikes = mockHikes;

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Hiking Trails</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {hikes.map((hike: any) => (
          <HikeCard key={hike.id} hike={hike} />
        ))}
      </div>
    </div>
  );
}