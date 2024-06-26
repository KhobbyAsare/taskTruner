import { useEffect, useState } from "react";
import "./CreatingTasks.scss";
import Board from "./components/Board/Board";
import List from "./components/List/List";
import TimeLineChart from "./components/TimeLine/TimeLine";
import useBrand from "../../../../context-api/Brandname-context/brandname";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../../../redux/Reducers/SideNavMenu/sideNavSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store/store";
import CreateTask from "../../../Components/Create-Task/CreateTask";
import TaskPreview from "../../Components/TaskPreview/TaskPreview";

const CreatingTasks = () => {
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);
  const [taskComponent, setTaskComponet] = useState("Board");
  const { brandname } = useBrand();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const tasks = useSelector((state: RootState) => state.PreviewSlice.tasks);

  useEffect(() => {
    if (tasks) {
      setIsPreviewOpen(true);
    } else if (tasks === undefined) {
      setIsPreviewOpen(false);
    }
  }, [tasks]);

  useEffect(() => {
    setIsPreviewOpen(false);
  }, []);

  const dispatch = useDispatch();
  const [toggleSideNav, setToggleSideNav] = useState(false);

  const handleAddTodo = (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    setToggleSideNav(!toggleSideNav);
    dispatch(toggleMenu(toggleSideNav));
  };

  const menuState: boolean = useSelector(
    (state: RootState) => state.SideMenu.menuState
  );
  const handleBooleanChange = (value: boolean) => {
    setIsTaskFormOpen(value);
  };

  return (
    <>
      <section className="creatingTask-wrapper">
        <header>
          <div className="brand-menu-btn">
            <div className="brand">
              <h2>{brandname}</h2>
            </div>

            <div className="btn">
              {!menuState ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4em"
                  height="1.4em"
                  viewBox="0 0 24 24"
                  onClick={(e: React.MouseEvent<SVGSVGElement>) =>
                    handleAddTodo(e)
                  }
                >
                  <path
                    fill="none"
                    stroke="#666666"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4em"
                  height="1.4em"
                  viewBox="0 0 24 24"
                  onClick={(e: React.MouseEvent<SVGSVGElement>) =>
                    handleAddTodo(e)
                  }
                >
                  <path
                    fill="#666666"
                    d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
                  />
                </svg>
              )}
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
              <button onClick={() => setIsTaskFormOpen(true)}>
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
          {taskComponent === "List" && <List />}
          {taskComponent === "Timeline" && <TimeLineChart />}
          {taskComponent === "Assigned" && <div>Assigned</div>}
        </div>
      </section>
      {isTaskFormOpen && <CreateTask onBooleanChange={handleBooleanChange} />}

      {isPreviewOpen && tasks && <TaskPreview task={tasks} />}
    </>
  );
};

export default CreatingTasks;
