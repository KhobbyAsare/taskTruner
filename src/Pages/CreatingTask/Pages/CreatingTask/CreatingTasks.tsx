import { useState } from "react";
import "./CreatingTasks.scss";
import Board from "./components/Board/Board";
import List from "./components/Board/List/List";

const CreatingTasks = () => {
  const [taskComponent, setTaskComponet] = useState("Board");

  return (
    <section className="creatingTask-wrapper">
      <header>
        <div className="search-wrapper">
          <div className="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="#666666">
                <circle cx="11" cy="11" r="6" />
                <path strokeLinecap="round" d="m20 20l-3-3" />
              </g>
            </svg>
            <input type="text" placeholder="Search" className="input-field" />
          </div>
        </div>
        <div className="creating-new-task">
          <div className="task-details">
            <p className="task-breadcrum">
              Tasks / <span>{taskComponent}</span>
            </p>
            <h2 className="project-name">Urbar Tracker Mobile Project</h2>
          </div>

          <div className="btn">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#fff"
                  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
                />
              </svg>
              New Task
            </button>
          </div>
        </div>
        <div className="headerLinks">
          <ul>
            <li
              className="link"
              onClick={() => setTaskComponet("Board")}
              style={{
                fontWeight: taskComponent === "Board" ? "bold" : "normal",
              }}
            >
              Board
            </li>
            <li
              className="link"
              onClick={() => setTaskComponet("List")}
              style={{
                fontWeight: taskComponent === "List" ? "bold" : "normal",
              }}
            >
              List
            </li>
            <li
              className="link"
              onClick={() => setTaskComponet("Timeline")}
              style={{
                fontWeight: taskComponent === "Timeline" ? "bold" : "normal",
              }}
            >
              Timeline
            </li>
            <li
              className="link"
              onClick={() => setTaskComponet("Assigned")}
              style={{
                fontWeight: taskComponent === "Assigned" ? "bold" : "normal",
              }}
            >
              Assigned
            </li>
          </ul>
        </div>
      </header>

      <div className="content-container">
        {taskComponent === "Board" && <Board />}
        {taskComponent === "List" && <List/>}
        {taskComponent === "Timeline" && <div>Timeline</div>}
        {taskComponent === "Assigned" && <div>Assigned</div>}
      </div>
    </section>
  );
};

export default CreatingTasks;
