import "./Card.scss";

const Card = () => {
  return (
    <div className="card-wrapper">
      <h3 className="taskname">User Profile Page</h3>
      <p className="taskdescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta?
      </p>
      <p className="date">
        <span>Due Date:</span> 12th July 2021
      </p>
      <div className="profile-icon">
        <div className="profile">
          <img
            src="https://images.unsplash.com/photo-1718203695046-0dfd0976a198?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
            "
            alt="assignee icon"
          />
        </div>
        <div className="profile">
          <img
            src="https://images.unsplash.com/photo-1718203695046-0dfd0976a198?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
            "
            alt="assignee icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
