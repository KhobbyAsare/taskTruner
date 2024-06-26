import "./ListCard.scss";

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
  currentStatus?: "backlog" | "in-progress" | "done";
}

const ListCard = ({ task }: { task: Task }) => {
  const bugStyle = {
    borderLeft: "2px solid red",
  };

  const featureStyle = {
    borderLeft: "2px solid #1D276C",
  };

  return (
    <div
      className="list-wrapper"
      style={task.type === "bug" ? bugStyle : featureStyle}
    >
      <div className="task-name">
        <h3>{task.taskname}</h3>
      </div>
      <div className="profile-icons">
        <div className="profile">
          <img
            src="https://images.unsplash.com/photo-1718203695046-0dfd0976a198?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="assignee icon"
          />
        </div>
        <div className="profile">
          <img
            src="https://images.unsplash.com/photo-1718203695046-0dfd0976a198?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="assignee icon"
          />
        </div>
      </div>
      <div className="comments-count">
        <p>
          <span>5</span> Comments
        </p>

        <span>
          {task.type === "bug" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 50 50"
            >
              <g
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path
                  stroke="#344054"
                  d="M33.333 37.5A10.42 10.42 0 0 1 39 43.75M16.667 37.5A10.42 10.42 0 0 0 11 43.75m24.875-37.5a5.88 5.88 0 0 1-3.792 4.27l-1.854.647m-10.459 0l-1.853-.646a5.87 5.87 0 0 1-3.792-4.271m29.625 8.542l-1.104 1.875a11.3 11.3 0 0 1-7.23 5.146v0m.001 6.312a10.54 10.54 0 0 1 7.604 4.813l.729 1.145m-29.167-12.27a11.3 11.3 0 0 1-7.229-5.146L6.25 14.792m0 19.291l.73-1.145a10.54 10.54 0 0 1 7.603-4.813v0"
                />
                <path
                  stroke="#306cfe"
                  d="M35.417 31.25V20.833a2.083 2.083 0 0 0-2.084-2.083H16.667a2.083 2.083 0 0 0-2.084 2.083V31.25A10.417 10.417 0 0 0 25 41.667v0A10.417 10.417 0 0 0 35.417 31.25m-4.167-12.5h-12.5v-4.167A6.25 6.25 0 0 1 25 8.333v0a6.25 6.25 0 0 1 6.25 6.25z"
                />
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 32 32"
            >
              <path
                fill="#666666"
                d="M6.813 2.406L5.405 3.812L7.5 5.906L8.906 4.5zm18.375 0L23.093 4.5L24.5 5.906l2.094-2.093zM16 3.03c-.33.004-.664.023-1 .064c-.01 0-.02-.002-.03 0c-4.056.465-7.284 3.742-7.845 7.78c-.448 3.25.892 6.197 3.125 8.095a5.238 5.238 0 0 1 1.75 3.03v6h2.28c.348.597.983 1 1.72 1s1.372-.403 1.72-1H20v-4h.094v-1.188c0-1.466.762-2.944 2-4.093C23.75 17.06 25 14.705 25 12c0-4.94-4.066-9.016-9-8.97m0 2c3.865-.054 7 3.11 7 6.97c0 2.094-.97 3.938-2.313 5.28l.032.032A7.792 7.792 0 0 0 18.279 22h-4.374c-.22-1.714-.955-3.373-2.344-4.563c-1.767-1.5-2.82-3.76-2.468-6.312c.437-3.15 2.993-5.683 6.125-6.03a6.91 6.91 0 0 1 .78-.064zM2 12v2h3v-2zm25 0v2h3v-2zM7.5 20.094l-2.094 2.093l1.407 1.407L8.905 21.5zm17 0L23.094 21.5l2.093 2.094l1.407-1.407zM14 24h4v2h-4z"
              />
            </svg>
          )}
        </span>
      </div>
    </div>
  );
};

export default ListCard;
