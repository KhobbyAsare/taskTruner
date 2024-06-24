import { useState } from "react";
import "./CreateTask.scss";
import Dropdown from "./Dropdown/Dropdown";

type ChildProps = {
  onBooleanChange: (value: boolean) => void;
};

const CreateTask: React.FC<ChildProps> = ({ onBooleanChange }) => {
  const taskType: string[] = ["bug", "feature", "maintenance"];
  const assignees: string[] = [
    "Andrew Hans",
    "John Doe",
    "Jane Doe",
    "Peaky Blinders",
    "Tommy Shelby",
    "Arthur Shelby",
    "Michael Gray",
    "John Shelby",
  ];

  const [selectAssignee, setSelectAssignee] = useState<string[]>([]);

  const handleAssigneeSelect = (assignee: string) => {
    if (selectAssignee.includes(assignee)) {
      setSelectAssignee(selectAssignee.filter((item) => item !== assignee));
    } else {
      setSelectAssignee([...selectAssignee, assignee]);
    }
  };

  const isAssigneeSelectedInclude = (assignee: string) => {
    return selectAssignee.includes(assignee);
  };

  const selectStyle = {
    backgroundColor: "#1D276C",
    color: "#fff",
  };

  return (
    <section className="task-form-wrapper">
      <div className="close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2rem"
          height="2rem"
          viewBox="0 0 24 24"
          onClick={() => onBooleanChange(false)}
        >
          <path
            fill="none"
            stroke="#666666"
            stroke-linecap="round"
            stroke-width="1.5"
            d="m14.5 9.5l-5 5m0-5l5 5M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
          />
        </svg>
      </div>
      <div className="container">
        <header>
          <h2>Create A New Task</h2>
        </header>
        <form>
          <input type="text" placeholder="Task Title..." name="tasktitle" />
          <textarea name="description" placeholder="Description..."></textarea>
          <div className="type-link">
            <div className="type-dropdown">
              <Dropdown type="Task Type" data={taskType} />
            </div>
            <input type="text" placeholder="Link (Optional)" name="typelink" />
          </div>
          <div className="assignees">
            <div className="text-wrapper">
              <p>Assignees :</p>
            </div>
            <div className="assignees-dropdown">
              <div className="assigners">
                {selectAssignee.length > 0 ? (
                  selectAssignee.map((assignee, index) => (
                    <span key={index} className="selectAssignee">
                      {assignee}
                    </span>
                  ))
                ) : (
                  <span className="assignee-text">Select Assignee</span>
                )}
              </div>
              <div className="assignees-wrapper">
                {assignees.map((assignee, index) => (
                  <div
                    key={index}
                    className="assignee"
                    onClick={() => handleAssigneeSelect(assignee)}
                    style={
                      isAssigneeSelectedInclude(assignee) ? selectStyle : {}
                    }
                  >
                    <div className="profile">
                      <img
                        src="https://images.unsplash.com/photo-1718613205605-d933afdd1f36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                    {assignee}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="due-date">
            <div className="text-wrapper">
              <p>Due Date :</p>
            </div>
            <div className="date-input">
              <input type="date" name="due-date" />
            </div>
          </div>
          <div className="created-by">
            <div className="text-wrapper">
              <p>Created By :</p>
            </div>
            <div className="task-creator-name">
              <div className="profile">
                <img
                  src="https://images.unsplash.com/photo-1718613205605-d933afdd1f36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile"
                />
              </div>
              <p className="name"> Andrew Hans</p>
            </div>
          </div>

          <div className="submit-btn">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateTask;
