import "./Card.scss";

interface CardProps {
  content: CardContent;
}

interface CardContent {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  assignees: {
    name: string;
    avatar: string;
  }[];
}
[];

const Card: React.FC<CardProps> = ({ content }) => {
  return (
    <div className="card-wrapper">
      <h3 className="taskname">{content.title}</h3>
      <p className="taskdescription">{content.description}</p>
      <p className="date">
        <span>Due Date:</span> {content.dueDate}
      </p>
      <div className="profile-icon">
        {content.assignees.map((assignee, i) => (
          <div className="profile" key={i}>
            <img src={assignee.avatar} alt="assignee icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
