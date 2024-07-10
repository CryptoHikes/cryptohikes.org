import HikeCard from '../../components/HikeCard'

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
]

export default function Hikes() {
  const hikes = mockHikes

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Hiking Trails</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {hikes.map((hike: any) => (
          <HikeCard key={hike.id} hike={hike} />
        ))}
      </div>
    </div>
  )
}