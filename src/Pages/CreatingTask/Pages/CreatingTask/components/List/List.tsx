import { RootState } from "../../../../../../redux/store/store";
import "./List.scss";
import ListCard from "./ListCard/ListCard";
import { useSelector } from "react-redux";

const List = () => {
  const tasks = useSelector((state: RootState) => state.TasksSlice.tasks);

  return (
    <div className="listcard-wrapper">
      {tasks.map((task) => (
        <ListCard task={task} />
      ))}
    </div>
  );
};

export default List;
