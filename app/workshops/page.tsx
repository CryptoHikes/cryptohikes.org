import WorkshopCard from '../../components/WorkshopCard'

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
]

export default function Workshops() {
  const workshops = mockWorkshops

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Crypto Workshops</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {workshops.map((workshop: any) => (
          <WorkshopCard key={workshop.id} workshop={workshop} />
        ))}
      </div>
    </div>
  )
}