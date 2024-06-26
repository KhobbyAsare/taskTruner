import { useEffect, useState } from "react";
import "./CreateTask.scss";
import Dropdown from "./Dropdown/Dropdown";
import { useDispatch } from "react-redux";
import { addTask } from "../../../redux/Reducers/ProjectTask/projectTaskSlice";

type ChildProps = {
  onBooleanChange: (value: boolean) => void;
};

interface Task {
  taskname: string;
  description: string;
  taskType: string;
  assignees: {
    name: string;
    profileIcon?: string;
  }[]; // Explicitly define assignees as string[]
  dueDate: string;
  creator: string;
  link: string;
  profileIcon?: string;
  currentStatus?: "backlog" | "in-progress" | "done";
}

const CreateTask: React.FC<ChildProps> = ({ onBooleanChange }) => {
  const dispatch = useDispatch();

  const [task, setTask] = useState<Task>({
    taskname: "",
    description: "",
    taskType: "",
    assignees: [],
    dueDate: "",
    creator: "",
    link: "",
    profileIcon: "",
    currentStatus: "backlog",
  });

  const [selectAssignee, setSelectAssignee] = useState<string[]>([]);

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

  const getDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    const day = date.getDate(); // Get the day as a number.
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthName = monthNames[date.getMonth()]; // Get the full month name.
    const year = date.getFullYear(); // Get the year.

    // Format the date as DD-MMM-YYYY. For example, 02-May-2024.
    // If the day is a single digit, pad it with a leading zero.
    const formattedDate = `${day
      .toString()
      .padStart(2, "0")}-${monthName.substring(0, 3)}-${year}`;

    setTask({ ...task, dueDate: formattedDate });
  };
  // Update the task object when selectAssignee changes

  useEffect(() => {
    // setTask({ ...task, assignees: [...selectAssignee] });
    setTask({ ...task, assignees: selectAssignee.map((name) => ({ name })) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectAssignee]);

  //  Update the task object when taskType changes in the dropdown

  const handleDropdownTypeSelect = (selectedType: string) => {
    setTask({ ...task, taskType: selectedType });
  };

  const submitTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const taskToDispatch = {
      taskname: task.taskname,
      description: task.description,
      type: task.taskType,
      assigners: task.assignees.map((assignee) => ({
        name: assignee.name,
        profileIcon:
          "https://images.unsplash.com/photo-1718613205605-d933afdd1f36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      })),
      dueDate: task.dueDate,
      creator: task.creator,
      link: task.link,
      profileIcon:
        task.profileIcon ||
        "https://images.unsplash.com/photo-1715630915001-35be2d8dba4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMzZ8fHxlbnwwfHx8fHw%3D", // Provide a default value if undefined
      currentStatus: "backlog" as
        | "backlog"
        | "in-progress"
        | "done"
        | undefined,
    };

    dispatch(addTask(taskToDispatch));

    localStorage.setItem("tasks", JSON.stringify(taskToDispatch));

    onBooleanChange(false);

  
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
            strokeLinecap="round"
            strokeWidth="1.5"
            d="m14.5 9.5l-5 5m0-5l5 5M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
          />
        </svg>
      </div>
      <div className="container">
        <header>
          <h2>Create A New Task</h2>
        </header>
        <form onSubmit={($event) => submitTask($event)}>
          <input
            type="text"
            placeholder="Task Title..."
            name="tasktitle"
            onChange={(e) => setTask({ ...task, taskname: e.target.value })}
          />
          <textarea
            name="description"
            placeholder="Description..."
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          ></textarea>
          <div className="type-link right">
            <div className="type-dropdown">
              <Dropdown
                type="Task Type"
                data={taskType}
                onTypeSelect={handleDropdownTypeSelect}
              />
            </div>
            <input
              type="text"
              placeholder="Link (Optional)"
              name="typelink"
              onChange={(e) => setTask({ ...task, link: e.target.value })}
            />
          </div>
          <div className="assignees right">
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
          <div className="due-date right">
            <div className="text-wrapper">
              <p>Due Date :</p>
            </div>
            <div className="date-input">
              <input type="date" name="due-date" onChange={(e) => getDate(e)} />
            </div>
          </div>
          <div className="created-by right">
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
              <h2 className="name">Andrew Hans</h2>
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
