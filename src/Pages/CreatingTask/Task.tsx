import { Outlet } from "react-router-dom";
import AsideMenu from "./Components/asideMenu/AsideMenu";
import "./Task.scss";

const Task = () => {
  return (
    <section className="task-wrapper">
      <AsideMenu />
      <div className="content-container">
        <Outlet />
      </div>
    </section>
  );
};

export default Task;
