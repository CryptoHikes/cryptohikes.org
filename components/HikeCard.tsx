interface Hike {
  id: string;
  name: string;
  description: string;
  difficulty: string;
}

interface HikeCardProps {
  hike: Hike;
}

const HikeCard = ({ hike }: any) => {
  return (
    <div className="border-2 border-neon-pink p-6 rounded-lg shadow-lg bg-dark hover:border-white hover:shadow-neon-pink transition duration-300">
      <h3 className="text-xl font-bold text-neon-pink">{hike.name}</h3>
      <p className="text-neon-blue">{hike.description}</p>
      <p className="text-neon-green">Difficulty: {hike.difficulty}</p>
    </div>
  );
};

export default HikeCard;