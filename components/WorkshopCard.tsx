interface Workshop {
  id: string;
  title: string;
  description: string;
  date: string;
}

interface WorkshopCardProps {
  workshop: Workshop;
}

const WorkshopCard = ({ workshop }: { workshop: any }) => {
  return (
    <div className="border-2 border-neon-purple p-4 rounded-lg shadow-lg bg-card card-hover-border transition duration-300">
      <h3 className="text-xl font-bold text-neon-purple">{workshop.title}</h3>
      <p className="text-neon-blue">{workshop.description}</p>
      <p className="text-neon-green">Date: {workshop.date}</p>
    </div>
  );
};

export default WorkshopCard;