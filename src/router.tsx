import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Task from "./Pages/CreatingTask/Task";
import CreatingTasks from "./Pages/CreatingTask/Pages/CreatingTask/CreatingTasks";
import ProjectPage from "./Pages/CreatingTask/Pages/ProjectPage/ProjectPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage />} />
      <Route path="tasks" element={<Task />} >
        <Route path="" element={<CreatingTasks />} />
        <Route path="project" element={<ProjectPage/>} />
      </Route>

      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
);

export default router;
