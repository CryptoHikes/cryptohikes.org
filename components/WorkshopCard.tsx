interface Workshop {
  id: string;
  title: string;
  description: string;
  date: string;
}

interface WorkshopCardProps {
  workshop: Workshop;
}

const WorkshopCard: React.FC<WorkshopCardProps> = ({ workshop }) => {
  return (
    <div className="border-2 border-neon-purple p-4 rounded-lg shadow-lg bg-dark hover:border-white hover:shadow-neon-purple transition duration-300 pulsate">
      <h3 className="text-xl font-bold text-neon-purple">{workshop.title}</h3>
      <p className="text-neon-blue">{workshop.description}</p>
      <p className="text-neon-green">Date: {workshop.date}</p>
    </div>
  )
}

export default WorkshopCard