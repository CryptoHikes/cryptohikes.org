interface Hike {
  id: string;
  name: string;
  description: string;
  difficulty: string;
}

interface HikeCardProps {
  hike: Hike;
}

const HikeCard: React.FC<HikeCardProps> = ({ hike }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold">{hike.name}</h3>
      <p>{hike.description}</p>
      <p className="text-green-500">Difficulty: {hike.difficulty}</p>
    </div>
  )
}

export default HikeCard