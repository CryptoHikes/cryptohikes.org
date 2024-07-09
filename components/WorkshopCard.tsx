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
    <div className="border p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold">{workshop.title}</h3>
      <p>{workshop.description}</p>
      <p className="text-blue-500">Date: {workshop.date}</p>
    </div>
  )
}

export default WorkshopCard