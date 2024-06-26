import "./Card.scss";

interface CardProps {
  content: Task;
}

interface Task {
  id: string;
  taskname: string;
  description: string;
  type: string;
  assigners: {
    name: string;
    profileIcon?: string;
  }[];
  dueDate: string;
  creator: string;
  link: string;
  profileIcon: string;
}[]

const Card: React.FC<CardProps> = ({ content }) => {
  return (
    <div className="card-wrapper">
      <h3 className="taskname">{content.taskname}</h3>
      <p className="taskdescription">{content.description}</p>
      <p className="date">
        <span>Due Date:</span> {content.dueDate}
      </p>
      <div className="profile-icon">
        {content.assigners.map((assignee, i) => (
          <div className="profile" key={i}>
            <img src={assignee.profileIcon} alt="assignee icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
